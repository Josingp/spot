
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Lock, User, Monitor, Loader2 } from 'lucide-react';
import { UserRole } from '../types';
import { DataStore } from '../utils/dataStore';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'USER' | 'ADMIN'>('USER');
  const [adminId, setAdminId] = useState('');
  const [adminPw, setAdminPw] = useState('');
  const [error, setError] = useState('');
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSocialLogin = (provider: string) => {
    setLoadingProvider(provider);
    
    // Simulate API delay for "Real" feel
    setTimeout(() => {
      setLoadingProvider(null);
      
      // Save Persistent Session
      const mockUser = {
        name: provider === 'KAKAO' ? '김철수 (Kakao)' : provider === 'NAVER' ? '이영희 (Naver)' : 'Apple User',
        role: UserRole.USER
      };
      DataStore.setSession(mockUser);

      onLogin(UserRole.USER);
      navigate('/user');
    }, 1500);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === 'admin' && adminPw === 'admin1234') {
      DataStore.setSession({ name: '관리자', role: UserRole.ADMIN });
      onLogin(UserRole.ADMIN);
      navigate('/admin');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-slate-950">
      <div className="w-full max-w-md glass-panel rounded-[2rem] shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-neon-500/10 rounded-full blur-[60px]"></div>
        
        {/* Header Tabs */}
        <div className="flex border-b border-white/5 relative z-10">
          <button 
            onClick={() => setMode('USER')}
            className={`flex-1 py-5 text-center font-bold text-sm transition-colors ${mode === 'USER' ? 'text-neon-400 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300'}`}
          >
            일반 회원 / 트레이너
          </button>
          <button 
            onClick={() => setMode('ADMIN')}
            className={`flex-1 py-5 text-center font-bold text-sm transition-colors ${mode === 'ADMIN' ? 'text-neon-400 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300'}`}
          >
            관리자 / 가맹점주
          </button>
        </div>

        <div className="p-10 relative z-10">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center text-neon-400 mx-auto mb-6 shadow-lg transform rotate-3">
              {mode === 'USER' ? <Dumbbell size={40} /> : <Monitor size={40} />}
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              {mode === 'USER' ? 'SPOT 시작하기' : '관리자 접속'}
            </h2>
            <p className="text-slate-500 text-sm">
              {mode === 'USER' 
                ? '3초 만에 로그인하고 운동을 시작하세요.' 
                : '매장 및 트레이너 관리 시스템'}
            </p>
          </div>

          {mode === 'USER' ? (
            <div className="space-y-4">
              <button 
                onClick={() => handleSocialLogin('KAKAO')}
                disabled={!!loadingProvider}
                className="w-full bg-[#FEE500] text-[#000000] py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loadingProvider === 'KAKAO' ? <Loader2 className="animate-spin" /> : <><span className="mr-2">💬</span> 카카오톡으로 계속하기</>}
              </button>
              <button 
                onClick={() => handleSocialLogin('NAVER')}
                disabled={!!loadingProvider}
                className="w-full bg-[#03C75A] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loadingProvider === 'NAVER' ? <Loader2 className="animate-spin" /> : <><span className="mr-2 font-extrabold">N</span> 네이버로 계속하기</>}
              </button>
              <button 
                onClick={() => handleSocialLogin('APPLE')}
                disabled={!!loadingProvider}
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loadingProvider === 'APPLE' ? <Loader2 className="animate-spin" /> : <><span className="mr-2">🍎</span> Apple로 계속하기</>}
              </button>
            </div>
          ) : (
            <form onSubmit={handleAdminLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">아이디</label>
                <div className="relative">
                  <User className="absolute left-4 top-4 text-slate-500" size={20} />
                  <input 
                    type="text" 
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-white/10 rounded-xl focus:border-neon-500 focus:ring-1 focus:ring-neon-500 outline-none text-white transition-all placeholder-slate-600"
                    placeholder="admin"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">비밀번호</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-slate-500" size={20} />
                  <input 
                    type="password" 
                    value={adminPw}
                    onChange={(e) => setAdminPw(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-white/10 rounded-xl focus:border-neon-500 focus:ring-1 focus:ring-neon-500 outline-none text-white transition-all placeholder-slate-600"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              {error && (
                <div className="text-red-400 text-sm font-bold text-center bg-red-500/10 py-3 rounded-lg border border-red-500/20">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-neon-400 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-neon-300 transition-all shadow-lg shadow-neon-500/20 mt-2"
              >
                로그인
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
