import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Lock, User, Monitor } from 'lucide-react';
import { UserRole } from '../types';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'USER' | 'ADMIN'>('USER');
  
  // Admin Form State
  const [adminId, setAdminId] = useState('');
  const [adminPw, setAdminPw] = useState('');
  const [error, setError] = useState('');

  const handleSocialLogin = (provider: string) => {
    // Simulate social login delay
    setTimeout(() => {
      onLogin(UserRole.USER);
      navigate('/user');
    }, 500);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === 'admin' && adminPw === 'admin1234') {
      onLogin(UserRole.ADMIN);
      navigate('/admin');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Tabs */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setMode('USER')}
            className={`flex-1 py-4 text-center font-bold text-sm transition-colors ${mode === 'USER' ? 'bg-brand-50 text-brand-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            일반 회원 / 트레이너
          </button>
          <button 
            onClick={() => setMode('ADMIN')}
            className={`flex-1 py-4 text-center font-bold text-sm transition-colors ${mode === 'ADMIN' ? 'bg-brand-50 text-brand-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            관리자 / 가맹점주
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg transform rotate-3">
              {mode === 'USER' ? <Dumbbell size={32} /> : <Monitor size={32} />}
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {mode === 'USER' ? 'SPOT 시작하기' : '관리자 접속'}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              {mode === 'USER' 
                ? '3초만에 로그인하고 운동을 시작하세요.' 
                : '매장 및 트레이너 관리 시스템'}
            </p>
          </div>

          {mode === 'USER' ? (
            <div className="space-y-3">
              <button 
                onClick={() => handleSocialLogin('KAKAO')}
                className="w-full bg-[#FEE500] text-[#000000] py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:shadow-md transition-all"
              >
                <span className="mr-2">💬</span> 카카오톡으로 계속하기
              </button>
              <button 
                onClick={() => handleSocialLogin('NAVER')}
                className="w-full bg-[#03C75A] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:shadow-md transition-all"
              >
                <span className="mr-2 font-extrabold">N</span> 네이버로 계속하기
              </button>
              <button 
                onClick={() => handleSocialLogin('APPLE')}
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:shadow-md transition-all"
              >
                <span className="mr-2">🍎</span> Apple로 계속하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">아이디</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="admin"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">비밀번호</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="password" 
                    value={adminPw}
                    onChange={(e) => setAdminPw(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="admin1234"
                  />
                </div>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm font-medium text-center bg-red-50 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg mt-4"
              >
                로그인
              </button>
            </form>
          )}
        </div>
        
        {mode === 'USER' && (
           <div className="bg-gray-50 px-8 py-4 text-center">
              <p className="text-xs text-gray-400">
                로그인 시 <span className="underline cursor-pointer">이용약관</span> 및 <span className="underline cursor-pointer">개인정보처리방침</span>에 동의하게 됩니다.
              </p>
           </div>
        )}
      </div>
    </div>
  );
};