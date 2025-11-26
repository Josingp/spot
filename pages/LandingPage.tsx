import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Monitor, DollarSign, ArrowRight, Zap, TrendingUp, Megaphone, Lock, QrCode, ArrowLeftRight, CheckCircle, Phone, Trophy, Activity, Target } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-20 pb-0">
      {/* Hero Section: Rebranded for Affordability & Micro-sessions */}
      <section className="relative pt-10 md:pt-20 text-center md:text-left px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-2">
              <DollarSign size={14} className="mr-1" />
              회당 5~8만원 PT가 부담된다면?
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              원하는 순간, 딱 30분만.<br />
              <span className="text-brand-600">부담 없는 포인트 레슨.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              수십만 원짜리 장기 계약은 그만.<br/>
              SPOT에서는 <strong>커피 4잔 값(2만원 대)</strong>으로 
              국가대표급 트레이너의 30분 집중 코칭을 받을 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button 
                onClick={() => navigate('/user')}
                className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-brand-700 transition-all flex items-center justify-center w-full sm:w-auto"
              >
                가성비 PT 시작하기 <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-brand-500 rounded-full filter blur-3xl opacity-20"></div>
            
            {/* Comparison Visual */}
            <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-duration-500">
               <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-sm mx-auto">
                  <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                      <div className="text-gray-400 font-bold line-through">기존 PT (1회)</div>
                      <div className="text-brand-600 font-extrabold text-xl">SPOT (1회)</div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">비용</span>
                          <div className="text-right">
                              <span className="text-gray-400 text-sm line-through block">70,000원</span>
                              <span className="text-brand-600 font-bold text-2xl">25,000원</span>
                          </div>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">시간</span>
                          <div className="text-right">
                              <span className="text-gray-400 text-sm line-through block">50분 (지루함)</span>
                              <span className="text-gray-900 font-bold">30분 (핵심만)</span>
                          </div>
                      </div>
                       <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">계약</span>
                          <div className="text-right">
                              <span className="text-gray-400 text-sm line-through block">10회/20회 의무</span>
                              <span className="text-brand-600 font-bold">1회씩 자유롭게</span>
                          </div>
                      </div>
                  </div>
                  <div className="mt-6 bg-gray-50 p-3 rounded-xl text-center text-xs text-gray-500">
                      * 불필요한 휴식시간과 잡담을 뺀<br/>순수 티칭 시간 기준입니다.
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison & Benefit Section */}
      <section className="bg-white border-t border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">왜 '30분 포인트 레슨' 일까요?</h2>
              <p className="text-gray-600">현대인의 운동 목적에 가장 최적화된 시간입니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                      <Zap size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">높은 집중도</h3>
                  <p className="text-gray-500">
                      운동 생리학적으로 초보자가 고강도 집중력을 유지할 수 있는 최적의 시간은 30분입니다.
                  </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                      <DollarSign size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">압도적 가성비</h3>
                  <p className="text-gray-500">
                      1시간 PT 받을 돈으로 SPOT에서는 3번을 받을 수 있습니다. 필요할 때만, 합리적으로 소비하세요.
                  </p>
              </div>
               <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                      <Monitor size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">키오스크 즉시 호출</h3>
                  <p className="text-gray-500">
                      예약하고 기다릴 필요 없습니다. 헬스장 도착 후 키오스크에서 "지금 바로" 선생님을 부르세요.
                  </p>
              </div>
          </div>
        </div>
      </section>

      {/* Sports Expansion Section (NEW) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Scalability</span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
               SPOT은 헬스장에서 멈추지 않습니다.
             </h2>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
               '짧고 전문적인 티칭'이 필요한 모든 스포츠 분야로 확장됩니다.<br/>
               골프장, 테니스 코트, 공원 어디서든 SPOT 코치를 만나보세요.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                   <Target size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">골프 (Golf)</h3>
                <p className="text-sm text-gray-500">
                   "드라이버 슬라이스가 계속 나요."<br/>
                   인도어 연습장에서 프로에게 <span className="text-gray-900 font-bold">30분 원포인트 레슨</span> 호출.
                </p>
             </div>

             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                   <Activity size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">테니스 (Tennis)</h3>
                <p className="text-sm text-gray-500">
                   "서브 자세가 이상해요."<br/>
                   코트 위에서 코치님을 불러 <span className="text-gray-900 font-bold">서브 집중 교정</span>.
                </p>
             </div>

             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Trophy size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">축구/풋살 (Soccer)</h3>
                <p className="text-sm text-gray-500">
                   "슈팅 임팩트가 약해요."<br/>
                   풋살장에서 선수 출신 코치에게 <span className="text-gray-900 font-bold">슈팅 메커니즘 전수</span>.
                </p>
             </div>

             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col justify-center items-center text-center bg-gray-50 border-dashed border-gray-300">
                <h3 className="font-bold text-gray-400 mb-1">More Sports...</h3>
                <p className="text-xs text-gray-400">필라테스, 요가, 수영 등<br/>모든 분야 확장 예정</p>
             </div>
          </div>
        </div>
      </section>

      {/* SPOT GYM Section (Existing but refined) */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
          {/* Decorative BG */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-brand-600 to-transparent opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-12 md:mb-0">
                      <div className="inline-flex items-center bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                        <Lock size={12} className="mr-1" /> SPOT 회원 전용 시설
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                          SPOT GYM (가제)<br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                              영업 허용형 무료 헬스장
                          </span>
                      </h2>
                      <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                          "헬스장 회원권 0원, 그 대신 트레이너의 열정을 견디세요."<br/>
                          SPOT GYM은 SPOT 앱 회원만이 QR 인증 후 입장할 수 있는<br/>
                          프라이빗 오픈 트레이닝 플랫폼입니다.
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                                  <Megaphone size={20} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg mb-1 text-blue-200">트레이너 영업(호객) 허용</h4>
                                  <p className="text-gray-400 text-sm">
                                    운동 중 다양한 트레이너들이 말을 걸 수 있습니다. 
                                    이를 쿨하게 받아주시는 조건으로 최고급 시설을 무료로 제공합니다.
                                  </p>
                              </div>
                          </div>
                          
                          <div className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-green-400 mr-4">
                                  <ArrowLeftRight size={20} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg mb-1 text-green-200">어떻게 무료 운영이 가능한가요?</h4>
                                  <p className="text-gray-400 text-sm">
                                    SPOT GYM은 입장료 대신 <strong>'높은 SPOT 호출 거래량'</strong>과 <strong>'트레이너 입점비'</strong>로 운영됩니다. 
                                    많은 회원이 모일수록 트레이너의 수익 기회가 늘어나는 선순환 구조입니다.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="md:w-1/2 relative">
                      <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl relative">
                          <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg transform rotate-6 shadow-lg">
                              Coming Soon
                          </div>
                          <img 
                              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                              alt="Gym Interior" 
                              className="rounded-xl mb-6 opacity-80"
                          />
                          <div className="space-y-3">
                             <div className="flex items-center text-white font-bold">
                                <QrCode size={20} className="mr-2 text-brand-400"/>
                                <span>입장 조건</span>
                             </div>
                             <div className="text-sm text-gray-400 pl-7 space-y-1">
                                <p>• SPOT 앱 설치 및 회원가입 필수</p>
                                <p>• 결제 수단(카드) 등록 필수</p>
                                <p>• 신원 인증이 완료된 회원만 QR 입장 가능</p>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* User Flow */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-16 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">이용 방법</h2>
                  <ul className="space-y-8">
                      <li className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mr-5 flex-shrink-0 text-lg">1</div>
                          <div>
                              <h4 className="font-bold text-xl mb-1 text-gray-900">간편 로그인 & 충전</h4>
                              <p className="text-gray-500">카카오톡으로 3초 만에 가입하고, 사용할 금액만큼 미리 충전해두세요.</p>
                          </div>
                      </li>
                      <li className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mr-5 flex-shrink-0 text-lg">2</div>
                          <div>
                              <h4 className="font-bold text-xl mb-1 text-gray-900">운동 중 호출</h4>
                              <p className="text-gray-500">"랫 풀 다운 자세 좀 봐주세요." 앱이나 키오스크에 내 위치(기구)를 입력하고 호출하세요.</p>
                          </div>
                      </li>
                      <li className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mr-5 flex-shrink-0 text-lg">3</div>
                          <div>
                              <h4 className="font-bold text-xl mb-1 text-gray-900">즉시 케어 시작</h4>
                              <p className="text-gray-500">대기 중인 트레이너가 3분 내로 회원님 자리로 이동합니다.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                   <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-500 ml-2">Spot App - Gym Mode</span>
                   </div>
                   <div className="space-y-4 text-white">
                      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                          <span>📍 현재 위치 감지됨</span>
                          <span className="font-bold text-brand-400">스포애니 강남점</span>
                      </div>
                      <div className="bg-brand-900 p-4 rounded-lg border border-brand-700">
                          <div className="text-sm text-brand-300 mb-1">호출 메시지</div>
                          <div className="font-bold">"스쿼트 자세가 너무 불안해요. 허리가 아픕니다."</div>
                      </div>
                      <button className="w-full bg-brand-600 hover:bg-brand-500 py-3 rounded-lg font-bold transition-colors flex justify-between px-4">
                          <span>트레이너 호출</span>
                          <span>25,000 P 차감</span>
                      </button>
                   </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* B2B Teaser Section */}
      <section className="bg-gray-900 text-white py-20 border-t border-gray-800 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-500 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Copy */}
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-bold mb-6 border border-yellow-400/30">
                        <TrendingUp size={14} className="mr-2" /> 헬스장 사장님 필독
                    </div>
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        아직도 추운 밖에서<br/>
                        <span className="text-brand-400">전단지 홍보</span>만 하고 계신가요?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        트레이너의 비어있는 스케줄을 '즉각적인 매출'로 전환하세요.<br/>
                        SPOT이 제공하는 관리자 시스템으로 헬스장 운영의 효율을 극대화할 수 있습니다.
                    </p>
                    
                    <div className="space-y-4 mb-10">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle size={16} className="text-white"/>
                            </div>
                            <span className="font-bold text-lg">키오스크 도입비 0원 (전액 지원)</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle size={16} className="text-white"/>
                            </div>
                            <span className="font-bold text-lg">업계 최저 수수료 5%</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle size={16} className="text-white"/>
                            </div>
                            <span className="font-bold text-lg">트레이너 근태/매출 자동 관리 시스템</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={() => navigate('/partner')}
                            className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                        >
                            가맹점 혜택 확인하기 <ArrowRight size={20} className="ml-2"/>
                        </button>
                        <a 
                            href="tel:02-1234-5678"
                            className="px-8 py-4 border border-gray-600 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center"
                        >
                            <Phone size={20} className="mr-2"/> 전화 상담
                        </a>
                    </div>
                </div>

                {/* Right: Admin Preview */}
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-500 blur-[80px] opacity-20"></div>
                    <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-white rounded-xl overflow-hidden">
                             {/* Fake Admin Header */}
                             <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
                                 <span className="font-bold text-gray-800">Admin Dashboard</span>
                                 <div className="flex space-x-2">
                                     <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                 </div>
                             </div>
                             {/* Fake Admin Content */}
                             <div className="p-6">
                                 <div className="flex justify-between items-end mb-6">
                                     <div>
                                         <div className="text-sm text-gray-500">오늘 매출 (실시간)</div>
                                         <div className="text-3xl font-bold text-gray-900">₩ 850,000</div>
                                     </div>
                                     <div className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded">+12%</div>
                                 </div>
                                 <div className="space-y-3">
                                     <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4">
                                         <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                         <div className="w-20 h-2 bg-gray-300 rounded"></div>
                                     </div>
                                      <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4">
                                         <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                         <div className="w-32 h-2 bg-gray-300 rounded"></div>
                                     </div>
                                      <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4">
                                         <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                                         <div className="w-24 h-2 bg-gray-300 rounded"></div>
                                     </div>
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