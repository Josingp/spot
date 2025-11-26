
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, BarChart3, CheckCircle, Phone, Monitor, DollarSign, Users, Tablet, PieChart, Bell, CalendarClock, Database } from 'lucide-react';

const COMPARISON_DATA = [
  { name: '기존 헬스장', value: 30, label: 'PT 등록률 30%' },
  { name: 'SPOT 도입', value: 85, label: '서비스 이용률 85%' },
];

export const PartnerPage: React.FC = () => {
  return (
    <div className="pb-20 space-y-20 bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="pt-20 pb-32 text-center bg-slate-900 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-bold mb-8 uppercase tracking-wider">
            <Monitor size={14} className="mr-2" />
            공식 파트너십 프로그램
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
            유휴 트레이너 자원의<br />
            <span className="text-neon-400">수익화</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            <span className="text-white font-semibold">도입비 0원 · 잠재 고객 데이터 확보 · 수익 모델 다각화</span><br/>
            SPOT은 헬스장 운영 효율을 극대화하는 데이터 기반 솔루션입니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:02-1234-5678"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Phone className="mr-2" size={20} />
              가맹점 입점 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* Benefit Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: '공간 사용료 수익', desc: '외부 트레이너가 허용되는 "오픈 플랫폼(직영 전환 등)" 도입 시, 매칭 건당 공간 사용료를 지급하여 고정비 부담을 낮춥니다.', highlight: '건당 매출의 5% (외부 허용 시)', color: 'text-neon-400', bg: 'bg-slate-800' },
              { icon: Users, title: '고객 유입 퍼널 확장', desc: '부담 없는 1회성 이용 경험은 잠재 고객을 유입시키고, 장기 회원으로 전환하는 효과적인 마케팅 수단입니다.', highlight: '상담 전환율 유의미한 상승', color: 'text-blue-400', bg: 'bg-slate-800' },
              { icon: Database, title: '마케팅 비용 절감', desc: '별도의 하드웨어(키오스크) 없이 웹/앱 기반으로 즉시 도입 가능하며, 불필요한 전단지 광고 비용을 제거합니다.', highlight: '초기 도입 비용 0원', color: 'text-purple-400', bg: 'bg-slate-900 border-neon-500' }
            ].map((card, idx) => (
              <div key={idx} className={`${card.bg} p-8 rounded-2xl border border-white/10 shadow-2xl hover:-translate-y-2 transition-transform duration-300`}>
                  <div className={`w-14 h-14 bg-slate-950 ${card.color} rounded-xl flex items-center justify-center mb-6 border border-white/5`}>
                      <card.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">
                      {card.desc}
                  </p>
                  <span className={`text-sm font-bold ${card.color}`}>{card.highlight}</span>
              </div>
            ))}
        </div>
      </section>

      {/* Admin System Showcase */}
      <section className="py-16 px-4">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-3xl font-bold mb-4 text-white">데이터 중심의 운영 시스템</h2>
               <p className="text-slate-400 text-lg">SPOT 파트너 전용 관리자 시스템(Admin)이 제공됩니다.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Mockup */}
                <div className="relative">
                   <div className="absolute inset-0 bg-neon-500/10 rounded-full blur-[100px]"></div>
                   <div className="bg-slate-950 p-3 rounded-2xl shadow-2xl border border-slate-800 relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                      <div className="bg-slate-900 rounded-xl overflow-hidden border border-white/5">
                         <div className="flex items-center px-4 py-3 bg-slate-950 border-b border-white/5 space-x-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                         </div>
                         <div className="p-8">
                            {/* Admin UI Components */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                               <div className="bg-slate-800 p-4 rounded-xl border border-white/5">
                                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">실시간 매출</div>
                                  <div className="text-xl font-bold text-white">₩ 850,000</div>
                                  <div className="text-xs text-neon-400 font-bold mt-1">▲ 오늘</div>
                               </div>
                               <div className="bg-slate-800 p-4 rounded-xl border border-white/5">
                                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">대기 중인 호출</div>
                                  <div className="text-xl font-bold text-blue-400">14건</div>
                               </div>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-xl border border-white/5">
                               <div className="flex justify-between items-center mb-4">
                                  <span className="font-bold text-sm text-slate-300">실시간 현황</span>
                                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                               </div>
                               <div className="space-y-3">
                                  <div className="flex items-center justify-between text-sm">
                                     <span className="text-slate-400">강남점 (스쿼트 랙)</span>
                                     <span className="text-neon-400 text-xs font-bold">김태우 이동중</span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                     <span className="text-slate-400">역삼점 (유산소)</span>
                                     <span className="text-blue-400 text-xs font-bold">매칭 대기중</span>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Features */}
                <div className="space-y-10">
                   {[
                     { icon: CalendarClock, title: '트레이너 스케줄 최적화', desc: '트레이너가 직접 가용 시간을 설정하여, 수업 취소 등으로 발생하는 유휴 시간을 최소화합니다.', color: 'text-blue-400' },
                     { icon: PieChart, title: '매출 데이터 시각화', desc: '일별, 월별 매출 및 트레이너별 기여도를 실시간으로 파악하여 경영 의사결정을 지원합니다.', color: 'text-neon-400' },
                     { icon: Bell, title: '실시간 응대 시스템', desc: '고객의 호출 요청이 즉시 전달되어, 현장의 대응 속도를 높이고 고객 만족도를 개선합니다.', color: 'text-purple-400' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex">
                        <div className="flex-shrink-0 mr-6">
                           <div className={`w-12 h-12 bg-slate-900 border border-white/10 ${item.color} rounded-xl flex items-center justify-center`}>
                              <item.icon size={24} />
                           </div>
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                           <p className="text-slate-400 leading-relaxed text-sm">
                              {item.desc}
                           </p>
                        </div>
                     </div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* Data Chart Section */}
      <section className="bg-slate-900 border-t border-white/5 py-24">
         <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white">데이터가 증명하는 효과</h3>
                    <p className="text-slate-400 text-lg">
                    "PT는 부담스럽지만 운동은 배우고 싶다"는 잠재 고객을 포착하십시오.<br/>
                    SPOT은 이 거대한 시장을 공략합니다.
                    </p>
                    <ul className="space-y-4">
                    <li className="flex items-center text-white font-medium">
                        <CheckCircle size={20} className="text-neon-400 mr-4"/>
                        회원 유지율(Retention) 유의미한 상승
                    </li>
                    <li className="flex items-center text-white font-medium">
                        <CheckCircle size={20} className="text-neon-400 mr-4"/>
                        트레이너 1인당 생산성 증대
                    </li>
                    </ul>
                </div>

                <div className="h-80 bg-slate-950 p-6 rounded-3xl border border-white/5 relative">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={COMPARISON_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={100} tick={{fill: '#94a3b8', fontSize: 14, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff'}} />
                        <Bar dataKey="value" barSize={32} radius={[0, 10, 10, 0]}>
                            {COMPARISON_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 1 ? '#a3e635' : '#475569'} />
                            ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};
