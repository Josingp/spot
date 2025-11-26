import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Zap, DollarSign, Clock, CheckCircle, ArrowRight, Shield, Bell, ToggleRight, UserCheck, Map, Calendar } from 'lucide-react';

export const TrainerPromoPage: React.FC = () => {
  const navigate = useNavigate();
  const [sessionsPerDay, setSessionsPerDay] = useState(3);
  const [workingDays, setWorkingDays] = useState(12); // Default to ~3 days a week
  
  // Pricing Constants
  const SESSION_PRICE = 25000;
  const PLATFORM_FEE_PERCENT = 0.05; // 5%
  const PG_FEE_PERCENT = 0.033; // 3.3% (Approx PG + Tax)
  
  const netEarningsPerSession = SESSION_PRICE * (1 - PLATFORM_FEE_PERCENT - PG_FEE_PERCENT);

  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full filter blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-300 text-sm font-bold mb-6 shadow-sm">
            <Zap size={16} className="mr-2 text-yellow-400" />
            SPOT PRO : 프리랜서 트레이너
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            언제 어디서든<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
              용돈도 벌어오세요.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            특정 센터에 얽매일 필요 없습니다.<br/>
            내 주변 제휴 헬스장 어디서든, 내가 원할 때만 앱을 켜세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-brand-500 transition-all flex items-center justify-center"
            >
              프리랜서 등록하기 <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* How it Works (Freelance Focus) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">진정한 N잡러를 위한 시스템</h2>
                <p className="text-gray-600">출퇴근 압박 없이, 자유롭게 콜을 받으세요.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-100 shadow-xl flex items-center justify-center mb-6">
                        <Map size={48} className="text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">1. 제휴 헬스장 입장</h3>
                    <p className="text-gray-500">
                        집 근처든 약속 장소든 상관없어요.<br/>
                        SPOT 제휴 마크가 있는 곳이면 어디든 OK.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-brand-100 shadow-xl flex items-center justify-center mb-6 animate-bounce">
                        <ToggleRight size={48} className="text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">2. '활동 가능' ON</h3>
                    <p className="text-gray-500">
                        개인 운동하다가 쉴 때 앱을 켜세요.<br/>
                        주변 회원의 1회성 티칭 요청이 들어옵니다.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-100 shadow-xl flex items-center justify-center mb-6">
                        <DollarSign size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">3. 깔끔한 정산</h3>
                    <p className="text-gray-500">
                        30분 포인트 레슨 진행 후<br/>
                        수수료 제외 즉시 포인트 적립.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* App Mockup Simulation */}
      <section className="py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      내 스케줄은 <span className="text-brand-600">내가 정합니다</span>
                  </h2>
                  <div className="space-y-6">
                      <div className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mr-4">
                              <Map size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg">장소에 구애받지 않는 활동</h4>
                              <p className="text-gray-500">
                                오늘은 강남점, 내일은 홍대점.<br/>
                                내가 있는 곳이 곧 나의 일터가 됩니다.
                              </p>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mr-4">
                              <Clock size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg">완벽한 부업 시스템</h4>
                              <p className="text-gray-500">
                                본업이 있어도 괜찮습니다.<br/>
                                퇴근 후, 주말 등 남는 시간에 짬짬이 수익을 만드세요.
                              </p>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                              <Shield size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg">노쇼/정산 스트레스 제로</h4>
                              <p className="text-gray-500">선결제 시스템으로 먹튀 방지. 수업 끝나면 바로 정산됩니다.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Mockup UI */}
              <div className="md:w-1/2 flex justify-center">
                  <div className="relative bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl w-80 border-4 border-gray-800">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
                      <div className="bg-gray-800 h-full rounded-[2rem] overflow-hidden flex flex-col relative">
                          {/* App Header */}
                          <div className="bg-gray-900 p-6 pt-10 text-white flex justify-between items-center">
                              <span className="font-bold">SPOT PRO</span>
                              <div className="bg-green-500 text-xs px-2 py-1 rounded-full font-bold">ON</div>
                          </div>
                          
                          {/* Map Area */}
                          <div className="flex-1 bg-gray-700 relative opacity-50">
                               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <div className="w-32 h-32 bg-brand-500 rounded-full opacity-20 animate-ping"></div>
                               </div>
                          </div>

                          {/* Call Card Popup */}
                          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg animate-[bounce_1s_infinite]">
                              <div className="flex justify-between items-start mb-2">
                                  <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2 py-1 rounded">NEW CALL</span>
                                  <span className="text-gray-400 text-xs">방금 전</span>
                              </div>
                              <h4 className="font-bold text-gray-900 text-lg">스쿼트 자세 교정 요청</h4>
                              <p className="text-gray-600 text-sm mb-3">현재 헬스장 - 프리웨이트 존</p>
                              <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                                  <div>
                                      <span className="font-bold text-xl text-brand-600">
                                        {SESSION_PRICE.toLocaleString()}원
                                      </span>
                                      <span className="text-[10px] text-gray-400 block">결제 금액</span>
                                  </div>
                                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold">수락하기</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Revenue Simulator */}
      <section className="bg-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-10">이번 달, 얼마나 벌 수 있을까요?</h2>
              
              <div className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700">
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                      {/* Slider 1: Sessions per day */}
                      <div>
                          <label className="flex justify-between text-gray-400 mb-2 font-medium">
                              <span>하루 호출 수</span>
                              <span className="text-brand-400 font-bold">{sessionsPerDay}건</span>
                          </label>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            value={sessionsPerDay} 
                            onChange={(e) => setSessionsPerDay(parseInt(e.target.value))}
                            className="w-full h-4 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-2">
                              <span>1건</span>
                              <span>10건</span>
                          </div>
                      </div>

                      {/* Slider 2: Working days */}
                      <div>
                          <label className="flex justify-between text-gray-400 mb-2 font-medium">
                              <span>월 근무 일수</span>
                              <span className="text-brand-400 font-bold">{workingDays}일</span>
                          </label>
                          <input 
                            type="range" 
                            min="1" 
                            max="30" 
                            value={workingDays} 
                            onChange={(e) => setWorkingDays(parseInt(e.target.value))}
                            className="w-full h-4 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-2">
                              <span>1일 (부업)</span>
                              <span>30일 (전업)</span>
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 pt-8 border-t border-gray-700">
                       <div>
                           <div className="text-gray-400 mb-1">월 예상 총 매출</div>
                           <div className="text-3xl font-bold text-gray-500 line-through decoration-red-500">
                               {(sessionsPerDay * SESSION_PRICE * workingDays).toLocaleString()}원
                           </div>
                       </div>
                       <div className="hidden md:block w-px h-24 bg-gray-700"></div>
                       <div>
                           <div className="text-gray-400 mb-1 flex items-center justify-center">
                               월 예상 실수령액
                               <div className="ml-2 group relative">
                                   <div className="bg-gray-600 text-[10px] px-1.5 py-0.5 rounded-full cursor-help">?</div>
                                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-black text-xs p-2 rounded hidden group-hover:block z-10">
                                       플랫폼 수수료 5% 및 PG사 결제수수료/세금 3.3%가 제외된 금액입니다.
                                   </div>
                               </div>
                           </div>
                           <div className="text-5xl font-extrabold text-brand-400 animate-pulse">
                               {(sessionsPerDay * netEarningsPerSession * workingDays).toLocaleString()}원
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">지금 바로 SPOT PRO에 합류하세요</h2>
        <p className="text-gray-600 mb-8">
            자격 검증만 완료되면 즉시 활동 가능합니다.<br/>
            이미 500명의 트레이너가 새로운 수익을 만들고 있습니다.
        </p>
        <button 
            onClick={() => navigate('/login')}
            className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-xl hover:bg-brand-700 shadow-xl transition-all"
        >
            프리랜서 등록하기
        </button>
      </section>
    </div>
  );
};