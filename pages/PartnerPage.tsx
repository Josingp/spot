import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { TrendingUp, BarChart3, CheckCircle, Phone, Monitor, DollarSign, Users, Tablet, Bell, CalendarClock, Database, Target, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react';

const COMPARISON_DATA = [
  { name: '기존 헬스장', value: 30, label: 'PT 등록률 30%' },
  { name: 'SPOT 도입', value: 85, label: '서비스 이용률 85%' },
];

const MARKET_DATA = [
  { name: '기존 PT 회원 (Target X)', value: 20, color: '#334155' }, // Slate-700
  { name: '잠재 고객 (SPOT Target)', value: 80, color: '#bef264' }, // Neon-400
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

      {/* NEW SECTION: Market Creation Visuals */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 relative z-10">
         <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-neon-500/20 shadow-2xl relative overflow-hidden bg-slate-900/90 backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-400 to-blue-500"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Left: Chart & Logic */}
               <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                     고객을 뺏는 것이 아닙니다.<br/>
                     <span className="text-neon-400">잠들어 있는 80%를 깨웁니다.</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     기존 PT 회원은 건드리지 않습니다.<br/>
                     SPOT은 가격 부담으로 PT를 받지 않던 <strong>'일반 회원'</strong>을 타겟팅하여 새로운 매출을 창출합니다.
                  </p>

                  <div className="flex items-center space-x-8 mb-8">
                     <div className="w-48 h-48 relative">
                        <ResponsiveContainer width="100%" height="100%">
                           <PieChart>
                              <Pie
                                 data={MARKET_DATA}
                                 cx="50%"
                                 cy="50%"
                                 innerRadius={40}
                                 outerRadius={80}
                                 dataKey="value"
                                 startAngle={90}
                                 endAngle={-270}
                              >
                                 {MARKET_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0)" />
                                 ))}
                              </Pie>
                           </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           <span className="text-2xl font-black text-white">80%</span>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex items-center">
                           <div className="w-3 h-3 rounded-full bg-slate-700 mr-2"></div>
                           <span className="text-slate-500 text-sm">기존 PT 회원 (영업 대상 아님)</span>
                        </div>
                        <div className="flex items-center">
                           <div className="w-3 h-3 rounded-full bg-neon-400 mr-2 shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
                           <span className="text-white font-bold text-sm">SPOT 타겟 (미이용 회원)</span>
                        </div>
                        <div className="mt-2 p-3 bg-slate-800/50 rounded-lg border border-neon-500/30">
                           <p className="text-xs text-neon-400 font-bold">"이들을 1회 체험으로 유도하여<br/>장기 고객으로 전환합니다."</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right: The Conversion Bridge */}
               <div className="bg-slate-950 p-8 rounded-3xl border border-white/5 relative">
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                     Best Strategy
                  </div>
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                     <Lightbulb className="text-yellow-400 mr-2 fill-yellow-400/20"/>
                     자발적 PT 전환 프로세스
                  </h3>
                  
                  <div className="space-y-6 relative">
                     {/* Connecting Line */}
                     <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800 -z-0"></div>

                     {[
                        { step: 1, title: '영업 저항 제로', desc: '고객이 먼저 "도와달라"고 요청합니다. (NFC 태그)', icon: Target },
                        { step: 2, title: '30분의 실력 증명', desc: '말뿐인 상담이 아닌, 실제 티칭으로 신뢰를 쌓습니다.', icon: ShieldCheck },
                        { step: 3, title: '자발적 등록', desc: '"더 배우고 싶어요." 고객이 스스로 장기 PT를 문의합니다.', icon: TrendingUp }
                     ].map((item, idx) => (
                        <div key={idx} className="relative flex items-start group">
                           <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-neon-400 z-10 mr-4 group-hover:scale-110 group-hover:bg-neon-400 group-hover:text-slate-900 transition-all shadow-lg">
                              <item.icon size={20} />
                           </div>
                           <div className="flex-1 pt-1">
                              <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                              <p className="text-slate-400 text-sm">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-8 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-center">
                     <p className="text-blue-400 font-bold text-sm">
                        "SPOT 경험 1회는 100번의 말보다 강력한 영업입니다."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Benefit Grid */}
      <section className="max-w-7xl mx-auto px-4 relative z-10 pt-10">
        <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: '공간 사용료 수익', desc: '외부 전문가(SPOT PRO)가 시설 이용 시, 추가 요금과 트레이너 분담금을 합산하여 건당 수익을 제공합니다.', highlight: '건당 6,000원 수익', color: 'text-neon-400', bg: 'bg-slate-800' },
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