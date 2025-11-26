import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dumbbell, Home, User, Settings, Menu, X, ArrowLeft, Briefcase, LogOut, LogIn, UserCheck } from 'lucide-react';
import { UserRole } from '../types';

interface LayoutProps {
  children: ReactNode;
  role: UserRole;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, role, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isLanding = location.pathname === '/';

  const NavItem = ({ to, icon: Icon, label, onClick }: { to?: string; icon: any; label: string, onClick?: () => void }) => (
    <button
      onClick={() => {
        if (onClick) onClick();
        else if (to) navigate(to);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-3 px-4 py-4 rounded-xl w-full transition-all ${
        to && location.pathname === to 
          ? 'bg-neon-300/10 text-neon-300 font-bold border border-neon-300/20' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-neon-300 selection:text-slate-900">
      {/* Navbar - Glassmorphism */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-neon-300 to-neon-500 rounded-lg flex items-center justify-center text-slate-900 mr-2 shadow-[0_0_15px_rgba(190,242,100,0.3)] group-hover:shadow-[0_0_25px_rgba(190,242,100,0.5)] transition-shadow">
                <Dumbbell size={20} className="transform -rotate-12" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-neon-300 transition-colors">
                SPOT <span className="text-neon-300 font-light opacity-80">Fitness</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {role === UserRole.GUEST && (
                <>
                  <button onClick={() => navigate('/trainer-promo')} className="text-slate-400 hover:text-neon-300 font-medium text-sm transition-colors flex items-center">
                     <UserCheck size={16} className="mr-1.5" /> 트레이너 지원
                  </button>
                  <button onClick={() => navigate('/partner')} className="text-slate-400 hover:text-neon-300 font-medium text-sm transition-colors flex items-center">
                     <Briefcase size={16} className="mr-1.5" /> 가맹점 입점문의
                  </button>
                  <button onClick={() => navigate('/login')} className="bg-slate-800 hover:bg-slate-700 text-white border border-white/10 px-5 py-2 rounded-full font-bold transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-sm">
                    로그인
                  </button>
                </>
              )}
              {role === UserRole.USER && (
                 <div className="flex items-center space-x-6">
                   <span className="text-sm text-slate-400">
                     <span className="text-neon-300 font-bold">회원님</span>, 오늘도 득근하세요!
                   </span>
                   <button onClick={() => { onLogout(); navigate('/'); }} className="text-slate-500 hover:text-red-400 text-sm font-medium transition-colors">로그아웃</button>
                 </div>
              )}
               {role === UserRole.ADMIN && (
                 <div className="flex items-center space-x-6">
                   <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider">ADMIN MODE</span>
                   <button onClick={() => navigate('/admin')} className="text-slate-300 font-medium hover:text-neon-300 transition-colors">대시보드</button>
                   <button onClick={() => { onLogout(); navigate('/'); }} className="text-slate-500 hover:text-red-400 text-sm font-medium transition-colors">로그아웃</button>
                 </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 p-2 hover:text-white transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/5 px-4 py-4 space-y-2 absolute w-full left-0 shadow-2xl">
            {role === UserRole.GUEST && (
              <>
                 <NavItem to="/" icon={Home} label="홈" />
                 <NavItem to="/trainer-promo" icon={UserCheck} label="트레이너 지원" />
                 <NavItem to="/partner" icon={Briefcase} label="가맹점 입점문의" />
                 <NavItem to="/login" icon={LogIn} label="로그인" />
              </>
            )}
            {role === UserRole.USER && (
              <>
                <NavItem to="/user" icon={Home} label="운동 시작하기" />
                <NavItem icon={LogOut} label="로그아웃" onClick={() => { onLogout(); navigate('/'); }} />
              </>
            )}
             {role === UserRole.ADMIN && (
              <>
                <NavItem to="/admin" icon={Settings} label="관리자 대시보드" />
                <NavItem icon={LogOut} label="로그아웃" onClick={() => { onLogout(); navigate('/'); }} />
              </>
            )}
          </div>
        )}
      </header>

      {/* Main Content Spacer for Fixed Header */}
      <div className="h-16"></div>

      {/* Main Content */}
      <main className="flex-grow w-full mx-auto">
        {children}
      </main>

      {/* Footer */}
      {!isLanding && (
        <footer className="bg-slate-950 border-t border-white/5 mt-auto safe-area-bottom">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center text-xs text-slate-600">
            <p className="mb-2 font-bold text-slate-500">SPOT FITNESS CARE</p>
            &copy; 2025 All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
};