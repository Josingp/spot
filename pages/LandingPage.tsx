import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Monitor, DollarSign, ArrowRight, Zap, TrendingUp, Megaphone, Lock, QrCode, ArrowLeftRight, CheckCircle, Phone, Trophy, Activity, Target, Smartphone, CreditCard, UserPlus, Clock, Database, Download, Nfc, Wifi, ChevronRight, UserCheck, Star, Search, UserX } from 'lucide-react';

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
                  시간 효율 모델
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                  원하는 순간,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon-300 text-glow">
                    딱 30분만.
                  </span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                  전통적인 60분 세션의 부담을 없앴습니다.<br/>
                  필요한 부위만 집중 타격하는 포인트 레슨.<br/>
                  <strong className="text-white">합리적인 비용</strong>으로 전문가의 코칭을 경험하세요.
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
                           <div className="text-slate-400 text-sm font-bold">기존 PT</div>
                           <div className="text-slate-400 text-sm font-bold text-neon-400">SPOT 케어</div>
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
                               <div className="text-slate-500">50분<br/><span className="text-xs font-normal">비효율적 휴식 포함</span></div>
                               <div className="text-white text-xl">30분<br/><span className="text-xs font-normal text-neon-400">고밀도 코칭</span></div>
                           </div>
                           <div className="bg-slate-900 rounded-xl p-4 mt-4 text-center border border-white/5">
                              <span className="text-slate-400 text-sm">진입 비용 절감</span>
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
                초간편 호출 시스템
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                도움이 필요할 땐,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-neon-500 text-glow">
                  핸드폰을 툭, (Tap)
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                운동 중 고립되거나 막히는 순간을 즉시 해결합니다.<br/>
                기구에 부착된 NFC를 태그하거나, 앱으로 호출하세요.<br/> 
                <strong className="text-white font-semibold">가장 가까운 트레이너가 달려갑니다.</strong>
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
                       <Smartphone size={40} className="text-neon-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">간편한 연결</h3>
                    <p className="text-slate-400 text-sm mb-6">NFC 태그 또는 앱(App) 실행<br/>별도 설치 없이 웹으로도 가능</p>
                    
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

      {/* NFC Visual Experience Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden border-b border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              
               <h2 className="text-4xl font-extrabold text-white mb-4">
                  "남들은 자극 온다는데, 왜 나만 관절이 아플까?"<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-green-400">핸드폰을 '툭' 대세요</span>
               </h2>
               <p className="text-slate-400 text-lg">기구에 붙은 스티커에 태그하면, 앱 설치 없이 바로 트레이너를 부를 수 있습니다.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
               
               {/* Sticker Container with Animation */}
               <div 
                 onClick={() => navigate('/nfc-simulation')} 
                 className="relative group w-80 h-80 flex-shrink-0 cursor-pointer"
               >
                   {/* Phone Animation Overlay */}
                   <div className="absolute z-30 pointer-events-none top-0 left-0 w-full h-full flex items-center justify-center">
                       <div className="w-28 h-56 bg-slate-800 rounded-[2rem] border-4 border-slate-600 shadow-2xl transform transition-all duration-[2000ms] ease-in-out opacity-0 animate-[tap-phone_4s_infinite]">
                           <div className="w-full h-full bg-slate-900 rounded-[1.7rem] overflow-hidden relative">
                               <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 flex justify-center items-center">
                                   <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
                               </div>
                               <div className="w-full h-full flex flex-col items-center justify-center text-white">
                                   <Wifi size={28} className="text-neon-400 animate-ping mb-4" />
                                   <span className="text-[10px] font-bold">NFC Tagging...</span>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Main Sticker - Pixel Perfect Recreation */}
                   <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_20px_60px_rgba(163,230,53,0.3)] border-2 border-white/10 transform transition-transform duration-300 hover:scale-105">
                      {/* Top Half: Lime (65%) */}
                      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#a3e635] flex flex-col items-center justify-center pt-2">
                          <h3 className="text-5xl font-black text-white leading-none text-center tracking-tighter drop-shadow-md mb-2">
                              지금 바로
                          </h3>
                          <h2 className="text-6xl font-black text-white leading-none text-center tracking-tighter drop-shadow-md z-10 pb-6">
                              코치 소환!
                          </h2>
                          
                          {/* Illustration Placeholder (Man) */}
                          <div className="absolute bottom-2 right-12 opacity-30 transform rotate-12">
                              <Zap size={72} className="text-white fill-white"/>
                          </div>
                      </div>
                      
                      {/* Bottom Half: Dark Grey (35%) */}
                      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-[#2c2c2c] flex items-center justify-between px-8 pb-3">
                           <div className="text-white text-left">
                               <div className="text-xs font-bold leading-tight opacity-90 ml-3">30분만 받아보세요,</div>
                               <div className="text-lg font-black leading-tight mt-0.5 ml-3">   운동이 바뀝니다.</div>
                           </div>
                           
                           {/* QR Code */}
                           <div className="bg-white p-1 rounded-sm mr-6">
                              <QrCode size={36} className="text-slate-900" />
                           </div>
                      </div>

                      {/* Floating Capsule (Between Two Colors) */}
                      <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-6 py-2.5 flex items-center shadow-xl z-20 whitespace-nowrap">
                           <Nfc size={20} className="text-slate-900 mr-2" />
                           <span className="text-slate-900 font-extrabold text-sm tracking-tighter">현재위치 : 프리웨이트존</span>
                      </div>
                   </div>
               </div>
               
               {/* Instructions */}
               <div className="space-y-8 max-w-md">
                  <div className="flex items-start">
                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-400 flex items-center justify-center font-bold text-slate-900 text-lg mr-5 border-4 border-slate-800 shadow-lg relative z-10">1</div>
                     <div className="pt-1">
                        <h3 className="text-xl font-bold text-white mb-2">발견 </h3>
                        <p className="text-slate-400">운동 중 자세가 어렵거나 통증이 느껴질 때, 기구에 부착된 <strong>형광색 스티커</strong>를 찾으세요.</p>
                     </div>
                  </div>
                  <div className="relative">
                      {/* Connector Line */}
                      <div className="absolute left-5 -top-8 bottom-8 w-0.5 bg-slate-800 -z-0"></div>
                      <div className="flex items-start">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-slate-900 text-lg mr-5 border-4 border-slate-800 shadow-lg relative z-10">2</div>
                         <div className="pt-1">
                            <h3 className="text-xl font-bold text-white mb-2">태그</h3>
                            <p className="text-slate-400">핸드폰 뒷면(NFC)을 스티커 중앙에 가볍게 대거나, 카메라로 QR 코드를 스캔하세요.</p>
                         </div>
                      </div>
                  </div>
                  <div className="relative">
                      <div className="absolute left-5 -top-8 bottom-8 w-0.5 bg-slate-800 -z-0"></div>
                      <div className="flex items-start">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-lg mr-5 border-4 border-slate-800 shadow-lg relative z-10">3</div>
                         <div className="pt-1">
                            <h3 className="text-xl font-bold text-white mb-2">트레이너 도착</h3>
                            <p className="text-slate-400">결제 완료 즉시, 트레이너가 회원님의 위치로 도착합니다.</p>
                         </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">데이터가 증명하는 효율성</h2>
              <p className="text-slate-400">감성적인 접근이 아닌, 논리적인 운동 설계를 제안합니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, color: 'text-neon-400', title: '고강도 집중', desc: '생리학적으로 일반인이 고강도 집중력을 유지할 수 있는 최적의 시간은 30분 내외입니다.' },
                { icon: DollarSign, color: 'text-blue-400', title: '비용 효율성', desc: '1회 7만원 상당의 PT 비용을 세분화하여, 진입 장벽을 낮추고 재구매율을 높였습니다.' },
                { icon: UserCheck, color: 'text-purple-400', title: '스마트한 선택', desc: '센터에서 배정해주는 대로 하지 마세요. 여러 전문가를 경험해보고 나에게 딱 맞는 멘토를 찾아 장기 PT를 결정하세요.' }
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
             <span className="text-neon-400 font-bold tracking-widest text-xs uppercase mb-2 block">Expansion Strategy</span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
               확장성
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">
               '포인트 레슨' 모델은 헬스장을 넘어 다양한 스포츠 분야로 적용됩니다.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { icon: Target, title: '골프', text: '드라이버 슬라이스 교정', sub: '30분 원포인트', color: 'text-green-400', bg: 'bg-green-500/10' },
               { icon: Activity, title: '테니스', text: '서브 자세 집중 케어', sub: '코트 위 즉시 호출', color: 'text-orange-400', bg: 'bg-orange-500/10' },
               { icon: Trophy, title: '축구', text: '슈팅 메커니즘 전수', sub: '선수 출신 코치', color: 'text-blue-400', bg: 'bg-blue-500/10' },
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
                        <Lock size={12} className="mr-2" /> 직영점 전용
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
                          SPOT STATION(도입예정)<br/>
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
                            { icon: Megaphone, title: '외부 트레이너 활동 허용', desc: '운동 중 프리랜서 트레이너가 다가와 티칭을 제안할 수 있습니다. (직영점 및 허용 가맹점 한정)', color: 'text-blue-400' },
                            { icon: ArrowLeftRight, title: '지속 가능한 무료 모델', desc: '입장료 수익을 포기하는 대신, 높은 SPOT 호출 거래량과 트레이너 입점비를 통한 수익 다각화를 실현했습니다.', color: 'text-neon-400' }
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

      {/* SPOT PRO Highlight */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 md:order-1">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon-400/10 border border-neon-400/20 text-neon-400 text-xs font-bold mb-6">
                     <Star size={12} className="mr-2 fill-neon-400" /> SPOT PRO (도입예정)
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
                     센터 트레이너가<br/>모두 바쁘다면?
                  </h2>
                  <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                     걱정하지 마세요. SPOT 네트워크를 통해<br/>
                     <strong className="text-white">주변에 있는 검증된 전문가(SPOT PRO)</strong>를<br/> 
                     즉시 호출할 수 있습니다.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                      <li className="flex items-center text-slate-300">
                          <CheckCircle className="text-neon-400 mr-3" size={20} />
                          <span>센터 소속 여부와 관계없이 실시간 매칭</span>
                      </li>
                      <li className="flex items-center text-slate-300">
                          <CheckCircle className="text-neon-400 mr-3" size={20} />
                          <span>거리 기반 가장 빠른 전문가 자동 배정</span>
                      </li>
                      <li className="flex items-center text-slate-300">
                          <CheckCircle className="text-neon-400 mr-3" size={20} />
                          <span>모든 전문가는 SPOT의 엄격한 검증 완료</span>
                      </li>
                  </ul>

                  <button onClick={() => navigate('/user')} className="px-8 py-4 bg-neon-400 text-slate-900 rounded-2xl font-bold text-lg hover:bg-neon-300 transition-all shadow-lg shadow-neon-400/20">
                      내 주변 전문가 찾기
                  </button>
              </div>
              
              <div className="order-1 md:order-2 bg-slate-950 rounded-[2.5rem] p-6 border-4 border-slate-800 shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto w-full">
                   {/* Phone UI Mockup */}
                   <div className="bg-slate-900 rounded-[2rem] overflow-hidden border border-white/5 h-full min-h-[400px]">
                       {/* Header */}
                       <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-white/5">
                           <span className="font-bold text-white text-sm">트레이너 목록</span>
                           <Search size={16} className="text-slate-400" />
                       </div>
                       
                       {/* List */}
                       <div className="p-4 space-y-3">
                           {/* Center Trainer 1 (Busy) */}
                           <div className="flex items-center p-3 rounded-xl bg-slate-800/30 border border-white/5 grayscale opacity-60">
                               <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-500 mr-3">
                                   <UserX size={20} />
                               </div>
                               <div className="flex-1">
                                   <div className="text-sm font-bold text-slate-400">김철수 (센터)</div>
                                   <div className="text-[10px] text-slate-500">PT 수업중</div>
                               </div>
                               <div className="bg-slate-700 text-slate-400 text-[10px] font-bold px-2 py-1 rounded">BUSY</div>
                           </div>
                           
                           {/* Center Trainer 2 (Busy) */}
                           <div className="flex items-center p-3 rounded-xl bg-slate-800/30 border border-white/5 grayscale opacity-60">
                               <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-500 mr-3">
                                   <UserX size={20} />
                               </div>
                               <div className="flex-1">
                                   <div className="text-sm font-bold text-slate-400">박영희 (센터)</div>
                                   <div className="text-[10px] text-slate-500">상담중</div>
                               </div>
                               <div className="bg-slate-700 text-slate-400 text-[10px] font-bold px-2 py-1 rounded">BUSY</div>
                           </div>

                           {/* Divider */}
                           <div className="flex items-center py-2">
                               <div className="h-px bg-slate-700 flex-1"></div>
                               <span className="text-[10px] text-slate-500 px-2">주변 전문가 (SPOT PRO) 검색됨</span>
                               <div className="h-px bg-slate-700 flex-1"></div>
                           </div>

                           {/* SPOT PRO (Available) */}
                           <div className="flex items-center p-3 rounded-xl bg-neon-900/10 border border-neon-500/50 shadow-[0_0_15px_rgba(163,230,53,0.1)] relative overflow-hidden group cursor-pointer">
                               <div className="absolute top-0 right-0 w-12 h-12 bg-neon-400/20 blur-xl rounded-full"></div>
                               <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white mr-3 border border-neon-500/30">
                                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-full h-full rounded-full object-cover" alt="" />
                               </div>
                               <div className="flex-1">
                                   <div className="flex items-center">
                                       <div className="text-sm font-bold text-white mr-1">최강혁 PRO</div>
                                       <Star size={10} className="text-yellow-400 fill-yellow-400" />
                                   </div>
                                   <div className="text-[10px] text-neon-400 font-medium">3분 거리 • 즉시 도착 가능</div>
                               </div>
                               <div className="bg-neon-400 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-pulse">호출</div>
                           </div>
                           
                           {/* SPOT PRO 2 (Available) */}
                           <div className="flex items-center p-3 rounded-xl bg-slate-800/50 border border-neon-500/20 hover:border-neon-500/50 transition-colors">
                               <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white mr-3 border border-white/10">
                                    <img src="https://images.unsplash.com/photo-1611672585731-fa1060a7a9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-full h-full rounded-full object-cover" alt="" />
                               </div>
                               <div className="flex-1">
                                   <div className="flex items-center">
                                       <div className="text-sm font-bold text-slate-300 mr-1">이지은 PRO</div>
                                   </div>
                                   <div className="text-[10px] text-slate-500">5분 거리</div>
                               </div>
                               <div className="bg-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">호출</div>
                           </div>
                       </div>
                   </div>
              </div>
          </div>
        </div>
      </section>

      {/* Button to IR Page */}
      <section className="py-12 bg-slate-950 border-t border-white/5 text-center">
           <button 
              onClick={() => navigate('/ir')} 
              className="text-slate-500 hover:text-white transition-colors text-sm font-medium flex items-center justify-center mx-auto"
           >
              <Lock size={14} className="mr-2" /> 투자자 정보 (IR)
           </button>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-900/50 py-6 border-t border-white/5 text-center text-slate-600 text-xs">
         <p className="mb-2 font-bold text-slate-500">SPOT FITNESS CARE</p>
         &copy; 2025 All rights reserved.
      </footer>
    </div>
  );
};