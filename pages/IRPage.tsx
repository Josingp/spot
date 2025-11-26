
import React, { useState } from 'react';
import { Users, UserPlus, Layers, BarChart3, Rocket, ShieldCheck, TrendingUp, PieChart as PieChartIcon, Globe, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const IRPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('접근 권한이 없습니다. 비밀번호를 확인해주세요.');
    }
  };

  const FUNDS_DATA = [
    { name: '제품 개발 (Web/App)', value: 40, color: '#bef264' },
    { name: '마케팅 및 파트너십', value: 40, color: '#3b82f6' },
    { name: '운영 (최소 인력)', value: 20, color: '#94a3b8' },
  ];

  const COMPARISON_DATA = [
    { name: '기존 헬스장', value: 30, label: 'PT 등록률 30%' },
    { name: 'SPOT 도입', value: 85, label: '서비스 이용률 85%' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
        <div className="glass-panel p-10 rounded-[2rem] max-w-md w-full text-center relative overflow-hidden border border-white/10 shadow-2xl">
           <div className="absolute top-0 right-0 w-32 h-32 bg-neon-500/10 rounded-full blur-[40px]"></div>
           
           <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-inner">
              <Lock size={32} className="text-neon-400" />
           </div>
           
           <h1 className="text-2xl font-bold text-white mb-2">SPOT IR Deck</h1>
           <p className="text-slate-500 text-sm mb-8">투자자 및 관계자 전용 열람 페이지입니다.<br/>비밀번호를 입력해주세요.</p>
           
           <form onSubmit={handleLogin} className="space-y-4 relative z-10">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-center text-white outline-none focus:border-neon-400 focus:ring-1 focus:ring-neon-400 transition-all tracking-widest"
                autoFocus
              />
              {error && <p className="text-red-400 text-xs font-bold">{error}</p>}
              <button 
                type="submit"
                className="w-full bg-neon-400 text-slate-900 font-bold py-3 rounded-xl hover:bg-neon-300 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]"
              >
                열람하기
              </button>
           </form>
           
           <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-slate-600 uppercase tracking-widest">Confidential Document</p>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-white/10 text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">
                   <Globe size={12} className="mr-2" /> Business Plan
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                   SPOT Fitness <span className="text-neon-400">사업계획서</span>
               </h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                   우리는 헬스장이 아닙니다. <strong className="text-white">피트니스계의 우버(Uber)</strong>입니다.<br/>
                   Gig & Sharing Economy 플랫폼으로 시장을 재정의합니다.
               </p>
            </div>

            {/* Pain Points & Solution */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
                {[
                  { title: 'For Users (이용자)', pain: '1회 7만원, 50분 세션, 장기 계약 강요', gain: '25,000원, 30분 집중, 내가 원할 때 원하는 곳에서', icon: Users },
                  { title: 'For Trainers (트레이너)', pain: '불안정한 수입, 센터 종속, 영업 한계', gain: '자유로운 수익 창출, 센터에 얽매이지 않는 N잡러', icon: UserPlus },
                  { title: 'For Gyms (헬스장)', pain: '낮 시간대 유휴 공간, 높은 인건비', gain: '텅 빈 공간과 시간을 수익으로 (공간 임대료)', icon: Layers },
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-neon-500/30 transition-all">
                      <div className="flex items-center space-x-3 mb-6">
                          <div className="p-3 bg-slate-800 rounded-lg text-neon-400"><item.icon size={24}/></div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="space-y-4">
                          <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                             <div className="text-xs font-bold text-red-400 uppercase mb-1">Pain Point</div>
                             <p className="text-slate-300 text-sm">{item.pain}</p>
                          </div>
                          <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                             <div className="text-xs font-bold text-green-400 uppercase mb-1">SPOT Solution</div>
                             <p className="text-white font-bold text-sm">{item.gain}</p>
                          </div>
                      </div>
                  </div>
                ))}
            </div>

            {/* Business Model & Growth */}
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
                <div className="glass-panel p-8 rounded-2xl border border-white/5">
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><BarChart3 className="mr-3 text-blue-400"/> 다각화된 수익 구조</h3>
                   <div className="space-y-6">
                      <div className="flex items-start">
                         <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold mr-4">1</div>
                         <div>
                            <h4 className="text-white font-bold">PT 세션 중개 수수료 (B2C)</h4>
                            <p className="text-slate-400 text-sm">이용자 결제 금액(25,000원)에서 PG수수료 및 파트너 수익을 제외한 플랫폼 수수료</p>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold mr-4">2</div>
                         <div>
                            <h4 className="text-white font-bold">공간 사용료 (B2B)</h4>
                            <p className="text-slate-400 text-sm">외부 트레이너가 파트너 헬스장 이용 시 발생하는 매출의 5% 수취 (Sharing Economy)</p>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold mr-4">3</div>
                         <div>
                            <h4 className="text-white font-bold">SaaS 솔루션 (Future)</h4>
                            <p className="text-slate-400 text-sm">파트너 전용 관리자 시스템(Admin) 고도화 후 월 구독 모델 도입</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="glass-panel p-8 rounded-2xl border border-white/5">
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Rocket className="mr-3 text-neon-400"/> 6개월 실행 계획 (Roadmap)</h3>
                   <div className="relative border-l-2 border-slate-800 ml-4 space-y-8 pl-8 py-2">
                       {[
                         { phase: 'Phase 1: 거점 확보', time: 'Month 1-2', items: ['강남, 홍대 등 핵심 상권 내 파트너십 50개 확보', '초기 수수료 면제 혜택으로 진입 장벽 제거'] },
                         { phase: 'Phase 2: 공급자 확보', time: 'Month 3-4', items: ['프리랜서 트레이너 200명 확보', '피트니스 커뮤니티 타겟 마케팅'] },
                         { phase: 'Phase 3: 수요 창출', time: 'Month 5-6', items: ['초기 이용자 1,000명 확보', '"첫 30분 무료" 프로모션', 'LBS(위치기반) 광고 집행'] }
                       ].map((phase, idx) => (
                          <div key={idx} className="relative">
                              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-neon-400"></div>
                              <div className="text-neon-400 text-xs font-bold uppercase mb-1">{phase.time}</div>
                              <h4 className="text-white font-bold text-lg mb-2">{phase.phase}</h4>
                              <ul className="list-disc list-outside ml-4 text-slate-400 text-sm space-y-1">
                                 {phase.items.map((it, i) => <li key={i}>{it}</li>)}
                              </ul>
                          </div>
                       ))}
                   </div>
                </div>
            </div>

            {/* Investment Ask */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-500/10 rounded-full blur-[80px]"></div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="text-neon-400 font-bold tracking-widest uppercase mb-4 text-sm">The Ask</div>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">시드 투자 1억 원</h3>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            피트니스 시장의 비효율을 해결하고,<br/> 
                            새로운 Gig Economy 표준을 만들기 위한 초기 자금입니다.
                        </p>
                        <div className="space-y-4">
                           <div className="flex items-center text-white"><ShieldCheck className="mr-3 text-green-400"/> 서울 내 파트너 헬스장 50개 확보</div>
                           <div className="flex items-center text-white"><Users className="mr-3 text-blue-400"/> 활성 트레이너 200명 등록</div>
                           <div className="flex items-center text-white"><TrendingUp className="mr-3 text-neon-400"/> 누적 레슨 1,000건 달성</div>
                        </div>
                    </div>
                    
                    <div className="h-64 md:h-80 w-full relative">
                         <h4 className="text-center text-white font-bold mb-4">자금 사용 계획 (Use of Funds)</h4>
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={FUNDS_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {FUNDS_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <RechartsTooltip 
                                   contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #334155', color: '#fff' }} 
                                   itemStyle={{ color: '#fff' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                         </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="text-center mt-20">
                <p className="text-slate-500 text-sm mb-4">Confidential - For Investor Review Only</p>
                <div className="inline-block bg-slate-900 border border-white/10 px-8 py-4 rounded-xl">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Contact</p>
                    <p className="text-white font-bold text-lg">ceo@spotfitness.care</p>
                </div>
            </div>
      </div>
    </div>
  );
};
