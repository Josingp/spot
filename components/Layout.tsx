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
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg w-full transition-colors ${
        to && location.pathname === to 
          ? 'bg-brand-50 text-brand-700 font-medium' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white mr-2">
                <Dumbbell size={20} />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">SPOT <span className="text-brand-600 font-light">Fitness</span></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {role === UserRole.GUEST && (
                <>
                  <button onClick={() => navigate('/trainer-promo')} className="text-gray-600 hover:text-brand-600 font-medium px-3 py-2 flex items-center">
                     <UserCheck size={16} className="mr-1" /> 트레이너 지원
                  </button>
                  <button onClick={() => navigate('/partner')} className="text-gray-600 hover:text-brand-600 font-medium px-3 py-2 flex items-center">
                     <Briefcase size={16} className="mr-1" /> 가맹점 입점문의
                  </button>
                  <button onClick={() => navigate('/login')} className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-bold transition-colors">
                    로그인
                  </button>
                </>
              )}
              {role === UserRole.USER && (
                 <div className="flex items-center space-x-4">
                   <span className="text-sm text-gray-500">회원님 환영합니다</span>
                   <button onClick={() => { onLogout(); navigate('/'); }} className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium">로그아웃</button>
                 </div>
              )}
               {role === UserRole.ADMIN && (
                 <div className="flex items-center space-x-4">
                   <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold">ADMIN MODE</span>
                   <button onClick={() => navigate('/admin')} className="text-gray-900 font-medium hover:text-brand-600">대시보드</button>
                   <button onClick={() => { onLogout(); navigate('/'); }} className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium">로그아웃</button>
                 </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2 space-y-1">
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

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      {!isLanding && (
        <footer className="bg-white border-t border-gray-200 mt-auto safe-area-bottom">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            &copy; 2025 Spot Fitness Care. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
};