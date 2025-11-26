import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Zap, DollarSign, Clock, CheckCircle, ArrowRight, Shield, Bell, ToggleRight, UserCheck, Map, Calendar, Megaphone, Users } from 'lucide-react';

export const TrainerPromoPage: React.FC = () => {
  const navigate = useNavigate();
  const [sessionsPerDay, setSessionsPerDay] = useState(3);
  const [workingDays, setWorkingDays] = useState(12);
  
  const SESSION_PRICE = 25000;
  const PG_FEE_PERCENT = 0.033; // 3.3%
  const REVENUE_SHARE_PERCENT = 0.15; // 15% (10% Platform + 5% Gym)
  
  // Logic: (Price - PG Fee) * (1 - Revenue Share)
  const priceAfterPg = SESSION_PRICE * (1 - PG_FEE_PERCENT);
  const netEarningsPerSession = priceAfterPg * (1 - REVENUE_SHARE_PERCENT);

  return (
    <div className="pb-20 bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-500 rounded-full blur-[150px]"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge: High Contrast for Visibility */}
          <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-neon-400/50 text-neon-300 text-sm font-bold mb-10 shadow-[0_0_20px_rgba(190,242,100,0.2)]">
            <Zap size={18} className="mr-2 fill-neon-300" />
            SPOT PRO : 프리랜서 트레이너
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            언제 어디서든<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-green-400 text-glow">
              용돈도 벌어오세요.
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            특정 센터에 얽매일 필요 없습니다.<br/>
            <strong className="text-white font-semibold">SPOT STATION(직영점)</strong> 및 제휴처에서<br/> 
            내가 원할 때만 앱을 켜세요.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="px-10 py-5 bg-neon-400 text-slate-900 rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:bg-neon-300 transition-all flex items-center justify-center hover:scale-105 transform group"
            >
              프리랜서 등록하기 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-white mb-4">진정한 N잡러를 위한 시스템</h2>
                <p className="text-slate-400">출퇴근 압박 없이, 자유롭게 콜을 받으세요.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-800 z-0 border-t border-dashed border-slate-700"></div>

                {[
                  { icon: Map, title: '1. 직영점/제휴점 입장', desc: 'SPOT STATION(직영) 또는\n외부 트레이너가 허용된 가맹점에 입장.' },
                  { icon: ToggleRight, title: "2. '활동 가능' ON", desc: '개인 운동하다가 쉴 때 앱을 켜세요.\n주변 회원의 1회성 티칭 요청이 들어옵니다.', color: 'text-neon-400', border: 'border-neon-500/50 shadow-[0_0_15px_rgba(163,230,53,0.2)]' },
                  { icon: DollarSign, title: '3. 깔끔한 정산', desc: '30분 포인트 레슨 진행 후\n수수료 제외 즉시 포인트 적립.' }
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                      <div className={`w-24 h-24 bg-slate-800 rounded-3xl border ${step.border || 'border-white/5'} shadow-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300 ${step.color || 'text-white'}`}>
                          <step.icon size={40} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm">
                          {step.desc}
                      </p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* New Section: SPOT STATION for Trainers */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                 <div className="inline-flex items-center text-neon-400 font-bold mb-4 tracking-wider uppercase text-xs">
                    <Megaphone size={14} className="mr-2" /> For Trainers
                 </div>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    판을 깔아드립니다.<br/>
                    <span className="text-neon-400">SPOT STATION (직영)</span>
                 </h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    회원권 0원으로 모객된 수많은 잠재 고객들이 있습니다.<br/>
                    SPOT STATION은 <strong className="text-white">"트레이너의 영업이 공식 허용된"</strong> 공간입니다.
                    눈치 보지 말고 다가가서 명함을 건네고, 티칭을 제안하세요.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-start">
                       <div className="bg-slate-800 p-2 rounded-lg text-neon-400 mr-4 mt-1"><Users size={20}/></div>
                       <div>
                          <h4 className="font-bold text-white text-lg">물 반, 고기 반</h4>
                          <p className="text-slate-500 text-sm">운동 의지는 있지만 PT는 부담스러운 회원들이 가득합니다.</p>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <div className="bg-slate-800 p-2 rounded-lg text-blue-400 mr-4 mt-1"><CheckCircle size={20}/></div>
                       <div>
                          <h4 className="font-bold text-white text-lg">자유로운 영업 활동</h4>
                          <p className="text-slate-500 text-sm">SPOT 직영점에서는 눈치 볼 필요 없습니다. 당신의 실력만 챙겨오세요.</p>
                       </div>
                    </div>
                 </div>
                 <p className="mt-4 text-xs text-slate-600">
                    * 일반 제휴 가맹점에서의 외부 활동은 해당 가맹점의 정책(외부 트레이너 허용 여부)에 따릅니다.
                 </p>
              </div>
              <div className="md:w-1/2">
                 <div className="glass-panel p-2 rounded-[2rem] transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1574680096141-1cddd32e01f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Gym Trainer" 
                      className="rounded-[1.8rem] w-full h-auto opacity-80" 
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-neon-500/30">
                       <div className="text-neon-400 font-bold text-xs uppercase mb-1">Open Platform</div>
                       <div className="text-white font-bold">"여기선 먼저 말을 걸어도 됩니다."</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* App Mockup */}
      <section className="py-24 overflow-hidden relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="md:w-1/2 mb-16 md:mb-0 pr-0 md:pr-16 order-2 md:order-1">
                  <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                      내 스케줄은<br/><span className="text-neon-400">내가 정합니다</span>
                  </h2>
                  <div className="space-y-8">
                      {[
                        { icon: Map, title: '장소에 구애받지 않는 활동', desc: '오늘은 강남 직영점, 내일은 홍대점. 내가 있는 곳이 곧 나의 일터가 됩니다.' },
                        { icon: Clock, title: '완벽한 부업 시스템', desc: '본업이 있어도 괜찮습니다. 퇴근 후, 주말 등 남는 시간에 짬짬이 수익을 만드세요.' },
                        { icon: Shield, title: '노쇼/정산 스트레스 제로', desc: '선결제 시스템으로 먹튀 방지. 수업 끝나면 바로 정산됩니다.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-neon-400 mr-5">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                      ))}
                  </div>
              </div>

              {/* Mockup UI */}
              <div className="md:w-1/2 flex justify-center perspective-1000 order-1 md:order-2 mb-10 md:mb-0">
                  <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl w-80 border-4 border-slate-800 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 shadow-neon-500/20">
                      <div className="bg-slate-800 h-full rounded-[2rem] overflow-hidden flex flex-col relative border border-white/5">
                          {/* App Header */}
                          <div className="bg-slate-900 p-6 pt-10 text-white flex justify-between items-center z-20 relative shadow-md">
                              <span className="font-bold tracking-wider">SPOT PRO</span>
                              <div className="bg-neon-500 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black">ON</div>
                          </div>
                          
                          {/* Map Area */}
                          <div className="flex-1 bg-slate-700 relative opacity-60">
                               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <div className="w-40 h-40 bg-neon-500 rounded-full opacity-20 animate-ping"></div>
                               </div>
                          </div>

                          {/* Call Card Popup */}
                          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-neon-500/50 rounded-2xl p-5 shadow-2xl z-30">
                              <div className="flex justify-between items-start mb-3">
                                  <span className="bg-neon-500 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded uppercase">New Call</span>
                                  <span className="text-slate-500 text-[10px]">Just now</span>
                              </div>
                              <h4 className="font-bold text-white text-lg leading-tight mb-1">스쿼트 자세 교정 요청</h4>
                              <p className="text-slate-400 text-xs mb-4">현재 헬스장 - 프리웨이트 존</p>
                              <div className="flex justify-between items-end border-t border-white/10 pt-3">
                                  <div>
                                      <span className="font-bold text-xl text-neon-400 tracking-tight">
                                        {SESSION_PRICE.toLocaleString()}원
                                      </span>
                                      <span className="text-[10px] text-slate-500 block uppercase tracking-wider">결제 금액 (Payment)</span>
                                  </div>
                                  <button className="bg-white text-slate-900 px-5 py-2 rounded-lg text-sm font-bold hover:bg-slate-200">수락</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Revenue Simulator */}
      <section className="bg-slate-900 border-y border-white/5 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12 text-white">이번 달, 예상 수익 계산기</h2>
              
              <div className="bg-slate-950 rounded-[2rem] p-8 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-neon-500/5 rounded-full blur-[80px]"></div>

                  <div className="grid md:grid-cols-2 gap-12 mb-12 relative z-10">
                      {/* Slider 1 */}
                      <div>
                          <label className="flex justify-between text-slate-400 mb-4 font-medium text-sm">
                              <span>하루 호출 수</span>
                              <span className="text-neon-400 font-bold text-lg">{sessionsPerDay}건</span>
                          </label>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            value={sessionsPerDay} 
                            onChange={(e) => setSessionsPerDay(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-400"
                          />
                          <div className="flex justify-between text-[10px] text-slate-600 mt-3 uppercase font-bold tracking-wider">
                              <span>Min 1</span>
                              <span>Max 10</span>
                          </div>
                      </div>

                      {/* Slider 2 */}
                      <div>
                          <label className="flex justify-between text-slate-400 mb-4 font-medium text-sm">
                              <span>월 근무 일수</span>
                              <span className="text-neon-400 font-bold text-lg">{workingDays}일</span>
                          </label>
                          <input 
                            type="range" 
                            min="1" 
                            max="30" 
                            value={workingDays} 
                            onChange={(e) => setWorkingDays(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-400"
                          />
                          <div className="flex justify-between text-[10px] text-slate-600 mt-3 uppercase font-bold tracking-wider">
                              <span>주말 알바 (4일)</span>
                              <span>전업 (30일)</span>
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 pt-10 border-t border-white/5 relative z-10">
                       <div className="text-center md:text-left">
                           <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">예상 월 매출 (Gross)</div>
                           <div className="text-2xl font-bold text-slate-400">
                               {(sessionsPerDay * SESSION_PRICE * workingDays).toLocaleString()}원
                           </div>
                       </div>
                       <div className="hidden md:block w-px h-16 bg-white/10"></div>
                       <div className="text-center md:text-right">
                           <div className="text-neon-400 text-xs uppercase tracking-wider mb-1 font-bold">예상 월 순수익 (Net Profit)</div>
                           <div className="text-5xl font-black text-white text-glow">
                               {(Math.floor(netEarningsPerSession * sessionsPerDay * workingDays)).toLocaleString()}<span className="text-2xl text-slate-500 ml-1 font-medium">원</span>
                           </div>
                           <div className="text-xs text-slate-500 mt-3 space-y-1">
                               <p>• PG사 수수료 (3.3%) 제외</p>
                               <p>• 플랫폼 수수료 (10%) + 헬스장 공간 사용료 (5%) 제외</p>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">지금 바로 SPOT PRO에 합류하세요</h2>
        <p className="text-slate-400 mb-10 text-lg">
            자격 검증만 완료되면 즉시 활동 가능합니다.
        </p>
        <button 
            onClick={() => navigate('/login')}
            className="px-12 py-5 bg-neon-400 text-slate-900 rounded-2xl font-bold text-xl hover:bg-neon-300 shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-all"
        >
            프리랜서 등록하기
        </button>
      </section>
    </div>
  );
};