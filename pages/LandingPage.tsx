import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Monitor, DollarSign, ArrowRight, Zap, TrendingUp, Megaphone, Lock, QrCode, ArrowLeftRight, CheckCircle, Phone, Trophy, Activity, Target } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-slate-950 text-slate-50 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 backdrop-blur-sm text-neon-300 text-sm font-bold mb-2 shadow-lg">
              <Zap size={14} className="mr-2 fill-neon-300" />
              피트니스의 넷플릭스, SPOT
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              원하는 순간,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-neon-500 text-glow">
                딱 30분만.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              수십만 원짜리 PT 계약의 부담을 없앴습니다.<br/>
              <strong className="text-white font-semibold">커피 4잔 값(25,000원)</strong>으로 국가대표급 트레이너의<br/> 
              프리미엄 포인트 레슨을 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start">
              <button 
                onClick={() => navigate('/user')}
                className="group relative px-8 py-4 bg-neon-400 text-slate-900 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] hover:bg-neon-300 transition-all flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center">SPOT 시작하기 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} /></span>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center">
            {/* Comparison Visual - Glassmorphism */}
            <div className="relative z-10 transform rotate-[-3deg] hover:rotate-0 transition-duration-500 duration-500">
               <div className="glass-card p-8 rounded-[2rem] shadow-2xl max-w-sm mx-auto relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-500/10 rounded-full blur-2xl"></div>
                  
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                      <div className="text-slate-500 font-bold line-through text-sm">기존 PT (1회)</div>
                      <div className="text-neon-300 font-extrabold text-2xl tracking-wider">SPOT</div>
                  </div>
                  <div className="space-y-6">
                      <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm font-medium">비용</span>
                          <div className="text-right">
                              <span className="text-slate-600 text-xs line-through block mb-1">70,000원</span>
                              <span className="text-white font-bold text-3xl">25,000<span className="text-sm text-slate-400 ml-1">원</span></span>
                          </div>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm font-medium">시간</span>
                          <div className="text-right">
                              <span className="text-slate-600 text-xs line-through block mb-1">50분 (루즈함)</span>
                              <span className="text-neon-300 font-bold text-lg">30분 (핵심만)</span>
                          </div>
                      </div>
                       <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm font-medium">계약</span>
                          <div className="text-right">
                              <span className="text-slate-600 text-xs line-through block mb-1">10회 의무</span>
                              <span className="text-white font-bold">1회씩 자유롭게</span>
                          </div>
                      </div>
                  </div>
                  <div className="mt-8 bg-slate-900/50 border border-white/5 p-4 rounded-xl text-center text-xs text-slate-500">
                      * 불필요한 잡담을 뺀 순수 티칭 타임
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <span className="text-neon-400 font-bold tracking-widest text-xs uppercase mb-2 block">Why Spot?</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">30분, 가장 완벽한 시간.</h2>
              <p className="text-slate-400">현대인의 운동 목적에 가장 최적화된 설계를 경험하세요.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, color: 'text-neon-400', title: '압도적 몰입감', desc: '초보자가 고강도 집중력을 유지할 수 있는 최적의 시간은 30분입니다.' },
                { icon: DollarSign, color: 'text-blue-400', title: '합리적 소비', desc: '1시간 PT 비용으로 3번의 레슨을. 필요할 때만 스마트하게 소비하세요.' },
                { icon: Monitor, color: 'text-purple-400', title: '즉시 호출', desc: '예약 대기 없이, 헬스장 도착 후 키오스크에서 "지금 바로" 부르세요.' }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-8 rounded-3xl hover:bg-slate-800/80 transition-all duration-300 group">
                    <div className={`w-14 h-14 ${item.color} bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5`}>
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        {item.desc}
                    </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Sports Expansion Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <span className="text-neon-400 font-bold tracking-widest text-xs uppercase mb-2 block">Expansion</span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
               헬스장에서 멈추지 않습니다.
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">
               '짧고 전문적인 티칭'이 필요한 모든 스포츠 분야로 확장됩니다.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { icon: Target, title: '골프 (Golf)', text: '드라이버 슬라이스 교정', sub: '30분 원포인트', color: 'text-green-400', bg: 'bg-green-500/10' },
               { icon: Activity, title: '테니스 (Tennis)', text: '서브 자세 집중 케어', sub: '코트 위 즉시 호출', color: 'text-orange-400', bg: 'bg-orange-500/10' },
               { icon: Trophy, title: '축구 (Soccer)', text: '슈팅 메커니즘 전수', sub: '선수 출신 코치', color: 'text-blue-400', bg: 'bg-blue-500/10' },
               { icon: ArrowRight, title: 'More Sports...', text: '필라테스, 수영 등', sub: '모든 분야 확장 예정', color: 'text-slate-500', bg: 'bg-slate-800/50' }
             ].map((sport, idx) => (
               <div key={idx} className="glass-card p-6 rounded-2xl hover:border-neon-500/50 transition-all group cursor-default">
                  <div className={`w-12 h-12 ${sport.bg} ${sport.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                     <sport.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{sport.title}</h3>
                  <p className="text-sm text-slate-400 mb-1">{sport.text}</p>
                  <span className="text-xs font-bold text-neon-400">{sport.sub}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SPOT STATION Section (Previously SPOT GYM) */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
          {/* Decorative BG */}
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gradient-to-r from-neon-600/10 to-transparent rounded-full blur-[120px] transform -translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2">
                      <div className="inline-flex items-center bg-neon-400/10 border border-neon-400/20 text-neon-300 text-xs font-bold px-3 py-1 rounded-full mb-6">
                        <Lock size={12} className="mr-2" /> Direct Managed Only
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
                          SPOT STATION<br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-3xl md:text-4xl">
                              직영점 시범 운영
                          </span>
                      </h2>
                      <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
                          "헬스장 회원권 0원, 그 대신 트레이너의 열정을 견디세요."<br/>
                          SPOT 직영점은 외부 트레이너의 활동이 허용되는<br/>
                          <strong className="text-white">국내 유일의 오픈 트레이닝 플랫폼</strong>입니다.
                      </p>
                      
                      <div className="space-y-4">
                          {[
                            { icon: Megaphone, title: '외부 트레이너 활동 허용', desc: '운동 중 프리랜서 트레이너가 다가와 티칭을 제안할 수 있습니다. (직영점 한정)', color: 'text-blue-400' },
                            { icon: ArrowLeftRight, title: '지속 가능한 무료 모델', desc: '입장료 대신 높은 SPOT 호출 거래량과 트레이너 입점비로 운영되는 혁신적 수익 구조입니다.', color: 'text-neon-400' }
                          ].map((feat, idx) => (
                            <div key={idx} className="flex items-start bg-slate-900/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                <div className={`flex-shrink-0 w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center ${feat.color} mr-5`}>
                                    <feat.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">{feat.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                                </div>
                            </div>
                          ))}
                      </div>
                      <p className="mt-6 text-xs text-slate-600 border-l-2 border-slate-700 pl-3">
                        * 외부 트레이너 활동 허용 정책은 현재 <strong>SPOT 직영점(SPOT STATION)</strong>에서만 시행됩니다.<br/>
                        일반 가맹점(제휴 헬스장)은 추후 도입 예정입니다.
                      </p>
                  </div>
                  <div className="md:w-1/2 relative">
                      <div className="glass-panel p-2 rounded-[2rem] shadow-2xl relative transform rotate-2 hover:rotate-0 transition-all duration-500">
                          <div className="absolute -top-6 -right-6 bg-neon-400 text-slate-900 font-extrabold px-6 py-3 rounded-2xl shadow-lg transform rotate-6 z-20 border-4 border-slate-900">
                              Grand Opening
                          </div>
                          <div className="rounded-[1.5rem] overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                             <img 
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Gym Interior" 
                                className="w-full h-auto object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                             />
                             <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <div className="flex items-center text-white font-bold mb-3">
                                   <QrCode size={20} className="mr-2 text-neon-400"/>
                                   <span>직영점 입장 조건</span>
                                </div>
                                <div className="text-sm text-slate-300 space-y-1 pl-7 border-l-2 border-neon-500/30">
                                   <p>• SPOT 앱 설치 및 회원가입 필수</p>
                                   <p>• 결제 수단(카드) 등록 필수</p>
                                   <p>• 신원 인증 완료 회원 전용</p>
                                </div>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* User Flow (Steps) */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">How it works</h2>
                  <ul className="space-y-10">
                      {[
                        { num: '01', title: '간편 로그인 & 충전', desc: '카카오톡으로 3초 가입. 사용할 만큼만 충전하세요.' },
                        { num: '02', title: '운동 중 호출', desc: '앱이나 키오스크에서 내 위치(기구)를 입력하고 호출 버튼 터치.' },
                        { num: '03', title: '즉시 케어 시작', desc: '대기 중인 트레이너가 3분 내로 회원님 자리로 이동합니다.' }
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start">
                            <div className="text-5xl font-black text-slate-800 mr-6 -mt-4 font-mono">{step.num}</div>
                            <div>
                                <h4 className="font-bold text-xl mb-2 text-white">{step.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </li>
                      ))}
                  </ul>
              </div>
              <div className="bg-slate-950 rounded-[2rem] p-6 border border-slate-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                   <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-slate-500 ml-auto font-mono">LIVE ACTIVITY</span>
                   </div>
                   <div className="space-y-5">
                      <div className="bg-slate-900 p-5 rounded-xl flex justify-between items-center border border-white/5">
                          <span className="text-slate-300 text-sm">📍 현재 위치 감지됨</span>
                          <span className="font-bold text-neon-400">스포애니 강남점</span>
                      </div>
                      <div className="bg-gradient-to-br from-neon-900/20 to-slate-900 p-5 rounded-xl border border-neon-500/20 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-neon-500/10 rounded-full blur-xl"></div>
                          <div className="text-xs text-neon-400 mb-2 font-bold tracking-wider uppercase">Request</div>
                          <div className="font-bold text-white text-lg">"스쿼트 자세가 너무 불안해요.<br/>허리가 아픕니다."</div>
                      </div>
                      <button className="w-full bg-neon-400 hover:bg-neon-300 text-slate-900 py-4 rounded-xl font-bold transition-all flex justify-between px-6 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                          <span>트레이너 호출</span>
                          <span>25,000 P</span>
                      </button>
                   </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* B2B Teaser Section */}
      <section className="bg-slate-950 pt-20 pb-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-neon-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Copy */}
                <div>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold mb-8 border border-yellow-500/20">
                        <TrendingUp size={12} className="mr-2" /> For Gym Owners
                    </div>
                    <h2 className="text-4xl font-bold mb-6 leading-tight text-white">
                        아직도 추운 밖에서<br/>
                        <span className="text-neon-400">전단지</span>만 돌리고 계신가요?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        트레이너의 공강 시간을 '즉각적인 매출'로 전환하세요.<br/>
                        SPOT 관리자 시스템이 헬스장 운영의 효율을 극대화합니다.
                    </p>
                    
                    <div className="space-y-5 mb-12">
                        {[
                          { text: '키오스크 도입비 0원 (전액 지원)', color: 'bg-neon-500' },
                          { text: '공간 대여 수익 5% (오픈 플랫폼 도입 시)', color: 'bg-blue-500' },
                          { text: '트레이너 근태/매출 자동 관리', color: 'bg-purple-500' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center group">
                              <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                  <CheckCircle size={14} className="text-white"/>
                              </div>
                              <span className="font-medium text-slate-300 text-lg">{item.text}</span>
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={() => navigate('/partner')}
                            className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center"
                        >
                            가맹점 혜택 확인 <ArrowRight size={20} className="ml-2"/>
                        </button>
                    </div>
                </div>

                {/* Right: Admin Preview */}
                <div className="relative perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-500/20 to-blue-500/20 blur-[60px]"></div>
                    <div className="glass-panel rounded-2xl p-2 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 shadow-2xl border-slate-700">
                        <div className="bg-slate-900 rounded-xl overflow-hidden">
                             <div className="bg-slate-800 border-b border-white/5 p-4 flex justify-between items-center">
                                 <span className="font-bold text-slate-300 text-sm">Admin Dashboard</span>
                                 <div className="flex space-x-1.5">
                                     <div className="w-2.5 h-2.5 bg-red-500/50 rounded-full"></div>
                                     <div className="w-2.5 h-2.5 bg-yellow-500/50 rounded-full"></div>
                                     <div className="w-2.5 h-2.5 bg-green-500/50 rounded-full"></div>
                                 </div>
                             </div>
                             <div className="p-8">
                                 <div className="flex justify-between items-end mb-8">
                                     <div>
                                         <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Revenue</div>
                                         <div className="text-3xl font-bold text-white">₩ 850,000</div>
                                     </div>
                                     <div className="text-neon-400 font-bold bg-neon-400/10 px-2 py-1 rounded text-sm">+12%</div>
                                 </div>
                                 <div className="space-y-4">
                                     {[1, 2, 3].map((i) => (
                                       <div key={i} className="h-10 bg-slate-800/50 rounded-lg w-full flex items-center px-4 border border-white/5">
                                           <div className={`w-2 h-2 ${i===3 ? 'bg-slate-600' : 'bg-neon-500'} rounded-full mr-3`}></div>
                                           <div className="w-1/3 h-2 bg-slate-700 rounded-full"></div>
                                       </div>
                                     ))}
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};