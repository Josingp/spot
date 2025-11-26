import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Monitor, DollarSign, ArrowRight, Zap, TrendingUp, Megaphone, Lock, QrCode, ArrowLeftRight, CheckCircle, Phone, Trophy, Activity, Target, Tablet, Nfc, Smartphone, CreditCard, UserPlus, Clock } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-slate-950 text-slate-50 overflow-hidden">
      
      {/* Hero Section (Slider) */}
      <section className="relative h-[850px] lg:h-[800px] flex items-center overflow-hidden">
        {/* Background Gradients (Common) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <div className={`absolute transition-all duration-1000 ${currentSlide === 0 ? 'top-[-10%] left-[-10%] bg-blue-600/20' : 'top-[-10%] right-[-10%] bg-neon-500/20'} w-[60%] h-[60%] rounded-full blur-[120px] animate-pulse-slow`}></div>
          <div className={`absolute transition-all duration-1000 ${currentSlide === 0 ? 'bottom-[-10%] right-[-10%] bg-neon-500/20' : 'bottom-[-10%] left-[-10%] bg-purple-600/20'} w-[60%] h-[60%] rounded-full blur-[120px]`}></div>
        </div>

        {/* SLIDE 1: 30-Minute Concept */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 space-y-8 text-center md:text-left pt-20 md:pt-0">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-bold mb-2 shadow-lg animate-fade-in">
                  <Clock size={14} className="mr-2" />
                  Time Efficiency Revolution
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                  원하는 순간,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon-300 text-glow">
                    딱 30분만.
                  </span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                  부담스러운 1시간 PT는 그만.<br/>
                  내가 필요한 운동만, 합리적인 포인트 레슨으로 해결하세요.<br/>
                  <strong className="text-white">25,000원</strong>으로 시작하는 전문가의 코칭.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start">
                  <button 
                    onClick={() => navigate('/user')}
                    className="px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-400 transition-all flex items-center justify-center hover:scale-105 transform"
                  >
                    지금 시작하기 <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center">
                 <div className="relative z-10">
                     {/* Visual for Slide 1 */}
                     <div className="glass-card p-8 rounded-[2.5rem] shadow-2xl max-w-sm mx-auto border border-blue-400/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80">
                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                           <div className="text-slate-400 text-sm font-bold uppercase">Classic PT</div>
                           <div className="text-slate-400 text-sm font-bold uppercase text-neon-400">SPOT Care</div>
                        </div>
                        <div className="space-y-6">
                           <div className="flex items-center justify-between">
                               <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center grayscale opacity-50">
                                  <Clock size={24}/>
                               </div>
                               <div className="h-1 flex-1 mx-4 bg-slate-700 rounded-full relative overflow-hidden">
                                  <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-600 to-slate-500"></div>
                               </div>
                               <div className="w-16 h-16 rounded-full bg-neon-500/20 border border-neon-500 text-neon-400 flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.3)] transform scale-110">
                                  <Zap size={28} fill="currentColor"/>
                               </div>
                           </div>
                           <div className="flex justify-between text-center font-bold">
                               <div className="text-slate-500">50분<br/><span className="text-xs font-normal">지루함</span></div>
                               <div className="text-white text-xl">30분<br/><span className="text-xs font-normal text-neon-400">초집중</span></div>
                           </div>
                           <div className="bg-slate-950 rounded-xl p-4 mt-4 text-center border border-white/5">
                              <span className="text-slate-400 text-sm">비용 절감 효과</span>
                              <div className="text-3xl font-black text-white mt-1">
                                 -60<span className="text-lg text-neon-400">%</span>
                              </div>
                           </div>
                        </div>
                     </div>
                 </div>
              </div>
           </div>
        </div>

        {/* SLIDE 2: NFC Tap Concept */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-8 text-center md:text-left pt-20 md:pt-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 backdrop-blur-sm text-neon-300 text-sm font-bold mb-2 shadow-lg">
                <Zap size={14} className="mr-2 fill-neon-300" />
                피트니스의 넷플릭스, SPOT
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                도움이 필요할 땐,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-neon-500 text-glow">
                  핸드폰을 툭, (Tap)
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                운동하다 깔릴 것 같을 때, 기구 사용법을 모를 때.<br/>
                기구에 붙은 <strong className="text-white font-semibold">NFC 스티커에 태그</strong>만 하세요.<br/> 
                트레이너가 당신의 위치로 즉시 달려갑니다.
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
              <div className="relative z-10 transform rotate-[-3deg] hover:rotate-0 transition-duration-500 duration-500">
                 <div className="glass-card p-8 rounded-[2rem] shadow-2xl max-w-sm mx-auto relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-500/10 rounded-full blur-2xl"></div>
                    
                    <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(163,230,53,0.2)] animate-pulse">
                       <Nfc size={40} className="text-neon-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Tap to Call</h3>
                    <p className="text-slate-400 text-sm mb-6">기구에 핸드폰을 대면<br/>자동으로 트레이너가 호출됩니다.</p>
                    
                    <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex items-center space-x-3 text-left">
                       <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold shrink-0">
                          SOS
                       </div>
                       <div>
                          <div className="text-white font-bold text-sm">긴급 도움 요청</div>
                          <div className="text-slate-500 text-xs">"벤치프레스 2번 렉으로 와주세요"</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {[0, 1].map((idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-8 bg-neon-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                />
            ))}
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
                { icon: Smartphone, color: 'text-purple-400', title: 'NFC 원터치 호출', desc: '앱을 켜서 타자를 칠 필요도 없습니다. 기구에 핸드폰을 대기만 하세요.' }
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

      {/* SPOT STATION Section */}
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
                        { num: '01', title: '기구에 태그 (Tag)', desc: '도움이 필요하면 기구에 붙은 NFC 스티커에 핸드폰을 대세요. 앱 설치 없이 웹페이지가 열립니다.' },
                        { num: '02', title: '모바일 결제 (Pay)', desc: '열린 페이지에서 본인 인증(로그인) 후, 1회 이용권을 즉시 결제합니다.' },
                        { num: '03', title: '즉시 케어 (Care)', desc: '결제와 동시에 트레이너에게 내 위치가 전송되어 바로 도착합니다.' }
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
                      <span className="text-xs text-slate-500 ml-auto font-mono">SPOT MOBILE WEB</span>
                   </div>
                   <div className="space-y-5">
                      <div className="bg-slate-900 p-5 rounded-xl flex justify-between items-center border border-white/5">
                          <span className="text-slate-300 text-sm flex items-center"><Nfc size={16} className="mr-2 text-neon-400"/> NFC Tagged</span>
                          <span className="font-bold text-white">Bench Press #02</span>
                      </div>
                      
                      {/* Simulating Login/Pay Step */}
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 space-y-3">
                          <div className="flex items-center space-x-3 text-sm text-slate-300">
                             <UserPlus size={16} />
                             <span>간편 로그인 (카카오/네이버)</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-slate-300">
                             <CreditCard size={16} />
                             <span>1회권 결제 (25,000원)</span>
                          </div>
                      </div>

                      <button className="w-full bg-neon-400 hover:bg-neon-300 text-slate-900 py-4 rounded-xl font-bold transition-all flex justify-center items-center shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                          <span>트레이너 호출하기</span>
                      </button>
                   </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* NFC Simulation Tools */}
      <section className="bg-slate-800/50 py-12 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-slate-400 font-bold mb-6 text-sm uppercase tracking-widest">Developer Tools: NFC Simulation</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { name: '벤치프레스 태그', loc: '벤치프레스 2번' },
                    { name: '스쿼트 랙 태그', loc: '스쿼트 랙 1번' },
                    { name: '런닝머신 태그', loc: '런닝머신 5번' },
                    { name: '덤벨존 태그', loc: '프리웨이트 덤벨존' }
                ].map((tag, idx) => (
                    <button 
                        key={idx}
                        onClick={() => navigate(`/user?nfc_location=${encodeURIComponent(tag.loc)}&gym_id=스포애니 강남점`)}
                        className="px-6 py-3 bg-slate-700 hover:bg-neon-500 hover:text-slate-900 rounded-xl font-bold text-white transition-all flex items-center shadow-lg"
                    >
                        <Nfc size={16} className="mr-2"/> {tag.name}
                    </button>
                ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
                * 실제 환경에서는 기구의 NFC 스티커에 핸드폰을 대면 해당 URL로 자동 연결됩니다.
            </p>
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

      {/* Hidden Kiosk Entry Point */}
      <footer className="bg-slate-900/50 py-6 border-t border-white/5 text-center text-slate-600 text-xs">
         <p className="mb-2 font-bold text-slate-500">SPOT FITNESS CARE</p>
         &copy; 2025 All rights reserved.
         <div className="mt-4">
             <button onClick={() => navigate('/kiosk')} className="text-slate-800 hover:text-slate-700 text-[10px] flex items-center justify-center mx-auto">
                 <Tablet size={10} className="mr-1" />
                 Launch Kiosk Mode
             </button>
         </div>
      </footer>
    </div>
  );
};