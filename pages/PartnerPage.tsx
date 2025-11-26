import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, BarChart3, CheckCircle, Phone, Monitor, DollarSign, Users, Tablet, PieChart, Bell, CalendarClock } from 'lucide-react';

const COMPARISON_DATA = [
  { name: '기존 헬스장', value: 30, label: 'PT 등록률 30%' },
  { name: 'SPOT 도입', value: 85, label: '서비스 이용률 85%' },
];

export const PartnerPage: React.FC = () => {
  return (
    <div className="pb-20 space-y-20 bg-white">
      {/* Hero Section for Partners */}
      <section className="pt-10 md:pt-20 text-center bg-gray-50 pb-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-600 text-white text-sm font-bold mb-6 shadow-sm">
            <Monitor size={14} className="mr-2" />
            SPOT 가맹점 공식 파트너십 프로그램
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            트레이너의 공강 시간,<br />
            <span className="text-brand-600">확실한 매출로 전환하세요.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            <span className="font-bold text-gray-900">가입비 0원 · 키오스크 무료 지원 · 수수료 5%</span><br/>
            단순한 앱이 아닙니다. 헬스장 운영의 효율을 높이는 새로운 솔루션입니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:02-1234-5678"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              가맹점 입점 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* Benefit Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:transform hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                    <DollarSign size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">추가 수익 창출</h3>
                <p className="text-gray-500 leading-relaxed">
                    수업이 비어있는 공강 시간에도 트레이너들이 '스팟 세션'을 통해 끊김없이 수익을 발생시킵니다. 
                    <span className="block mt-2 font-bold text-brand-600">플랫폼 수수료 단 5%</span>
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:transform hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">자연스러운 PT 전환</h3>
                <p className="text-gray-500 leading-relaxed">
                    부담 없는 1회성 이용 경험은 고객과의 접점을 만들고 신뢰를 쌓는 가장 빠른 길입니다.
                    <span className="block mt-2 font-bold text-blue-600">장기 PT 계약 전환율 280% UP</span>
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-brand-500 shadow-xl hover:transform hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">지원 혜택</div>
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Tablet size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">키오스크 무상 설치</h3>
                <p className="text-gray-500 leading-relaxed">
                    초기 비용 부담을 없애드립니다. 전용 태블릿 키오스크와 거치대를
                    <span className="block mt-2 font-bold text-purple-600">가맹점 전액 무상 지원</span>
                </p>
            </div>
        </div>
      </section>

      {/* Admin System Showcase */}
      <section className="py-10 px-4">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">스마트한 헬스장 운영의 시작</h2>
               <p className="text-gray-600 text-lg">SPOT 파트너 전용 관리자 시스템(Admin)이 제공됩니다.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Mockup */}
                <div className="bg-gray-900 p-4 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                      <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700 space-x-2">
                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="p-6 bg-gray-50">
                         {/* Admin UI Components */}
                         <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                               <div className="text-gray-500 text-xs mb-1">실시간 매출</div>
                               <div className="text-xl font-bold text-gray-900">₩ 850,000</div>
                               <div className="text-xs text-green-600 font-bold mt-1">▲ 오늘 상승</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                               <div className="text-gray-500 text-xs mb-1">트레이너 호출</div>
                               <div className="text-xl font-bold text-brand-600">14건 대기중</div>
                               <div className="text-xs text-gray-400 mt-1">현재 3명 이동 중</div>
                            </div>
                         </div>
                         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-4">
                            <div className="flex justify-between items-center mb-4">
                               <span className="font-bold text-sm">지점별 호출 현황</span>
                               <span className="text-xs text-gray-400">실시간</span>
                            </div>
                            <div className="space-y-3">
                               <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">강남점 (스쿼트 랙)</span>
                                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-bold">김태우 이동중</span>
                               </div>
                               <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">역삼점 (유산소)</span>
                                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-bold">매칭 대기중</span>
                               </div>
                               <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">논현점 (머신존)</span>
                                  <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs font-bold">수업 완료</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Features */}
                <div className="space-y-8">
                   <div className="flex">
                      <div className="flex-shrink-0 mr-6">
                         <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                            <CalendarClock size={24} />
                         </div>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold mb-2">트레이너 스케줄 자율 설정</h3>
                         <p className="text-gray-600">
                            트레이너가 직접 앱에서 '호출 가능 시간'을 설정할 수 있습니다.<br/>
                            수업이 취소되거나 비어있는 시간을 효율적으로 활용하세요.
                         </p>
                      </div>
                   </div>
                   <div className="flex">
                      <div className="flex-shrink-0 mr-6">
                         <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center">
                            <PieChart size={24} />
                         </div>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold mb-2">투명한 매출 관리</h3>
                         <p className="text-gray-600">
                            일별, 월별, 트레이너별 매출 데이터를 실시간으로 확인하세요.<br/>
                            정산 내역까지 한눈에 파악할 수 있습니다.
                         </p>
                      </div>
                   </div>
                   <div className="flex">
                      <div className="flex-shrink-0 mr-6">
                         <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                            <Bell size={24} />
                         </div>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold mb-2">실시간 호출 알림 시스템</h3>
                         <p className="text-gray-600">
                            회원이 호출하면 관리자 페이지와 트레이너 앱으로 즉시 알림이 전송됩니다.<br/>
                            누가, 어디서, 어떤 운동을 원하는지 바로 알 수 있습니다.
                         </p>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* Data Chart Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
         <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">회원들이 증명합니다.</h3>
                    <p className="text-gray-600 text-lg">
                    "PT는 부담스럽지만 운동은 배우고 싶다"는 회원이 전체의 80%입니다.<br/>
                    SPOT은 이 거대한 잠재 시장을 공략합니다.
                    </p>
                    <ul className="space-y-4">
                    <li className="flex items-center text-gray-800 font-medium">
                        <div className="w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mr-3"><CheckCircle size={16}/></div>
                        헬스장 재등록률 150% 상승 효과
                    </li>
                    <li className="flex items-center text-gray-800 font-medium">
                        <div className="w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mr-3"><CheckCircle size={16}/></div>
                        트레이너 1인당 월 평균 추가 수익 80만원
                    </li>
                    </ul>
                </div>

                <div className="h-80 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={COMPARISON_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 14, fontWeight: 'bold'}} />
                        <Tooltip cursor={{fill: 'transparent'}} />
                        <Bar dataKey="value" barSize={40} radius={[0, 10, 10, 0]}>
                            {COMPARISON_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 1 ? '#2563eb' : '#94a3b8'} />
                            ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 rounded-3xl p-12 text-center max-w-5xl mx-auto text-white mx-4">
        <h2 className="text-3xl font-bold mb-6">지금 바로 우리 헬스장에 도입하세요</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            전국 150개 피트니스 센터가 이미 SPOT과 함께하고 있습니다.<br/>
            전문 컨설턴트가 헬스장 규모와 위치에 맞는 최적의 솔루션을 제안해드립니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
                href="tel:02-1234-5678"
                className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center"
             >
               <Phone size={24} className="mr-2"/>
               02-1234-5678
             </a>
             <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
               제안서 다운로드
             </button>
        </div>
      </section>
    </div>
  );
};