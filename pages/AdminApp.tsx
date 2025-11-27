import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { Users, DollarSign, UserPlus, Award, Clock, Settings, LayoutGrid, Trash2, Plus, XCircle, Calendar } from 'lucide-react';
import { Trainer, GymServiceItem, WeeklySchedule } from '../types';
import { DataStore } from '../utils/dataStore';

// --- MOCK DATA FOR CHARTS ---
const REVENUE_DATA = [
  { name: '월', revenue: 450000 },
  { name: '화', revenue: 520000 },
  { name: '수', revenue: 480000 },
  { name: '목', revenue: 610000 },
  { name: '금', revenue: 850000 },
  { name: '토', revenue: 980000 },
  { name: '일', revenue: 920000 },
];

const CATEGORY_DATA = [
  { name: '부위별 패키지', value: 45 },
  { name: '기구 티칭', value: 30 },
  { name: '통증 케어', value: 25 },
];

const COLORS = ['#bef264', '#60a5fa', '#f87171'];

const DEFAULT_SCHEDULE_TEMPLATE: WeeklySchedule[] = [
  { day: '월', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '화', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '수', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '목', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '금', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '토', isWorkDay: false, start: '10:00', end: '15:00' },
  { day: '일', isWorkDay: false, start: '10:00', end: '15:00' },
];

type Tab = 'dashboard' | 'trainers' | 'cms' | 'settings';

export const AdminApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  
  // Data State
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [services, setServices] = useState<GymServiceItem[]>([]);
  
  // Load data from Store on mount
  useEffect(() => {
    setTrainers(DataStore.getTrainers());
    setServices(DataStore.getServices());
  }, []);

  // Trainer Modal State
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);
  const [newTrainerName, setNewTrainerName] = useState('');
  const [newTrainerSpecialty, setNewTrainerSpecialty] = useState('');
  const [newTrainerSchedule, setNewTrainerSchedule] = useState<WeeklySchedule[]>(JSON.parse(JSON.stringify(DEFAULT_SCHEDULE_TEMPLATE)));

  // CMS State
  const [newItem, setNewItem] = useState<{name: string, desc: string, category: 'BODY' | 'MACHINE' | 'CARE'}>({
    name: '', desc: '', category: 'BODY'
  });

  // --- Handlers ---
  const handleAddTrainer = () => {
    if(!newTrainerName) return;
    const trainer: Trainer = {
      id: Date.now().toString(),
      name: newTrainerName,
      specialty: newTrainerSpecialty || '퍼스널 트레이닝',
      imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      available: true,
      rating: 5.0,
      gymName: '본점',
      weeklySchedule: newTrainerSchedule
    };
    const updated = [...trainers, trainer];
    setTrainers(updated);
    DataStore.saveTrainers(updated); // Persist
    
    setIsTrainerModalOpen(false);
    setNewTrainerName('');
    setNewTrainerSpecialty('');
    setNewTrainerSchedule(JSON.parse(JSON.stringify(DEFAULT_SCHEDULE_TEMPLATE)));
  };

  const handleDeleteTrainer = (id: string) => {
    if(confirm('정말 삭제하시겠습니까?')) {
      const updated = trainers.filter(t => t.id !== id);
      setTrainers(updated);
      DataStore.saveTrainers(updated); // Persist
    }
  };

  const toggleTrainerStatus = (id: string) => {
    const updated = trainers.map(t => t.id === id ? { ...t, available: !t.available } : t);
    setTrainers(updated);
    DataStore.saveTrainers(updated); // Persist
  };

  const handleScheduleChange = (index: number, field: keyof WeeklySchedule, value: any) => {
    const updated = [...newTrainerSchedule];
    updated[index] = { ...updated[index], [field]: value };
    setNewTrainerSchedule(updated);
  };

  const handleAddService = () => {
    if(!newItem.name) return;
    const service: GymServiceItem = {
      id: Date.now().toString(),
      category: newItem.category,
      name: newItem.name,
      description: newItem.desc,
      isActive: true
    };
    const updated = [...services, service];
    setServices(updated);
    DataStore.saveServices(updated); // Persist
    
    setNewItem({ ...newItem, name: '', desc: '' });
  };

  const handleDeleteService = (id: string) => {
    const updated = services.filter(s => s.id !== id);
    setServices(updated);
    DataStore.saveServices(updated); // Persist
  };

  // --- Components ---

  const SidebarItem = ({ id, icon: Icon, label }: { id: Tab, icon: any, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all mb-2 ${
        activeTab === id 
        ? 'bg-neon-500/10 text-neon-400 border border-neon-500/20 font-bold' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const DashboardView = () => (
    <div className="space-y-6 animate-fade-in">
       {/* Top Stats */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: '오늘 총 매출', value: '₩ 850,000', change: '+12%', icon: DollarSign, color: 'text-neon-400', bg: 'bg-neon-400/10' },
            { label: '활성 트레이너', value: `${trainers.filter(t=>t.available).length}명`, change: 'On Duty', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { label: 'PT 전환 상담', value: '3건', change: 'New', icon: UserPlus, color: 'text-purple-400', bg: 'bg-purple-400/10' },
            { label: '평균 평점', value: '4.9', change: '★', icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
               <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                     <stat.icon size={20} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-800 ${stat.color}`}>{stat.change}</span>
               </div>
               <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
               <div className="text-2xl font-bold text-white">{stat.value}</div>
            </div>
          ))}
       </div>

       {/* Charts Area */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/5">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-white">주간 매출 추이</h3>
                <div className="flex space-x-2">
                   <span className="w-3 h-3 bg-neon-400 rounded-full mt-1.5"></span>
                   <span className="text-xs text-slate-400">SPOT 매출</span>
                </div>
             </div>
             <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={REVENUE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #334155', color: '#fff' }} 
                      cursor={{ fill: '#1e293b' }}
                    />
                    <Bar dataKey="revenue" fill="#bef264" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Service Popularity */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col">
             <h3 className="font-bold text-lg text-white mb-2">인기 카테고리 분석</h3>
             <p className="text-xs text-slate-500 mb-6">유저들이 가장 많이 호출한 서비스 유형입니다.</p>
             
             <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                      <Pie
                         data={CATEGORY_DATA}
                         cx="50%"
                         cy="50%"
                         innerRadius={60}
                         outerRadius={80}
                         paddingAngle={5}
                         dataKey="value"
                      >
                         {CATEGORY_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                         ))}
                      </Pie>
                      <Legend verticalAlign="bottom" height={36} />
                   </PieChart>
                </ResponsiveContainer>
                {/* Center Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                   <div className="text-2xl font-bold text-white">Top 1</div>
                   <div className="text-xs text-slate-400">부위별</div>
                </div>
             </div>
          </div>
       </div>

       {/* PT Conversion Funnel */}
       <div className="glass-panel p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-white">PT 전환 성과 (Funnel)</h3>
              <span className="text-xs text-neon-400 border border-neon-500/30 bg-neon-500/10 px-2 py-1 rounded">Conversion Rate: 12.5%</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-800/50 p-4 rounded-xl relative">
                  <div className="text-slate-500 text-xs uppercase mb-2">SPOT 1회 체험</div>
                  <div className="text-2xl font-bold text-white">120명</div>
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-600 z-10 hidden md:block">→</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl relative">
                  <div className="text-slate-500 text-xs uppercase mb-2">상담 신청</div>
                  <div className="text-2xl font-bold text-blue-400">45명</div>
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-600 z-10 hidden md:block">→</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-neon-500/20">
                  <div className="text-slate-500 text-xs uppercase mb-2">정규 PT 등록</div>
                  <div className="text-2xl font-bold text-neon-400">15명</div>
              </div>
          </div>
       </div>
    </div>
  );

  const TrainersView = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
         <div>
            <h2 className="text-2xl font-bold text-white">트레이너 스케줄 관리</h2>
            <p className="text-slate-400">요일별 근무 시간 및 실시간 상태 설정</p>
         </div>
         <button 
           onClick={() => setIsTrainerModalOpen(true)}
           className="bg-neon-400 text-slate-900 px-5 py-2.5 rounded-xl font-bold hover:bg-neon-300 flex items-center shadow-lg shadow-neon-400/20 transition-all"
         >
            <Plus size={18} className="mr-2" /> 트레이너 등록
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {trainers.map(trainer => (
           <div key={trainer.id} className="glass-panel p-5 rounded-2xl border border-white/5 group hover:border-neon-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                 <div className="flex items-center space-x-4">
                    <img src={trainer.imageUrl} alt={trainer.name} className="w-16 h-16 rounded-xl object-cover bg-slate-800" />
                    <div>
                       <h3 className="font-bold text-lg text-white">{trainer.name}</h3>
                       <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-white/5">{trainer.specialty}</span>
                    </div>
                 </div>
                 <button onClick={() => handleDeleteTrainer(trainer.id)} className="text-slate-600 hover:text-red-400 p-2 transition-colors"><Trash2 size={18} /></button>
              </div>
              
              <div className="space-y-3 mb-6 bg-slate-900/50 p-3 rounded-xl border border-white/5">
                 <div className="flex justify-between text-sm items-center border-b border-white/5 pb-2 mb-2">
                    <span className="text-slate-500 flex items-center"><Calendar size={14} className="mr-1.5"/>오늘 스케줄</span>
                    <span className="text-slate-300 font-mono text-xs">09:00 - 18:00</span>
                 </div>
                 <div className="flex justify-between text-sm items-center">
                     <span className="text-slate-500">주간 근무일</span>
                     <span className="text-white text-xs font-bold bg-slate-800 px-2 py-0.5 rounded">
                        {trainer.weeklySchedule?.filter(d => d.isWorkDay).length || 0}일 / 주
                     </span>
                 </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                 <span className={`text-sm font-bold flex items-center ${trainer.available ? 'text-green-400' : 'text-slate-500'}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${trainer.available ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`}></div>
                    {trainer.available ? '근무중 (On Duty)' : '퇴근/휴식 (Off)'}
                 </span>
                 <button 
                   onClick={() => toggleTrainerStatus(trainer.id)}
                   className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${trainer.available ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'}`}
                 >
                    {trainer.available ? '퇴근 처리' : '출근 처리'}
                 </button>
              </div>
           </div>
         ))}
      </div>
      
      {/* Granular Scheduler Modal */}
      {isTrainerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
           <div className="bg-slate-900 w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl animate-fade-in my-8">
              <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-slate-900 z-10 rounded-t-3xl">
                  <h3 className="text-xl font-bold text-white">트레이너 상세 등록</h3>
                  <button onClick={() => setIsTrainerModalOpen(false)}><XCircle className="text-slate-500 hover:text-white" /></button>
              </div>
              
              <div className="p-8 space-y-8">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">이름</label>
                        <input 
                            value={newTrainerName}
                            onChange={(e) => setNewTrainerName(e.target.value)}
                            className="w-full bg-slate-800 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-neon-400"
                            placeholder="이름 입력"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">전문 분야</label>
                        <input 
                            value={newTrainerSpecialty}
                            onChange={(e) => setNewTrainerSpecialty(e.target.value)}
                            className="w-full bg-slate-800 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-neon-400"
                            placeholder="예: 재활, 다이어트"
                        />
                    </div>
                 </div>

                 {/* Weekly Schedule Grid */}
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center">
                            <Calendar size={14} className="mr-1.5"/> 요일별 근무 스케줄 설정
                        </label>
                        <span className="text-[10px] text-slate-600">* 체크 해제 시 휴무일로 지정됩니다.</span>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden">
                        {newTrainerSchedule.map((daySchedule, idx) => (
                            <div key={idx} className={`flex items-center p-3 border-b border-white/5 last:border-0 ${daySchedule.isWorkDay ? 'bg-slate-800/30' : 'opacity-50'}`}>
                                <button 
                                    onClick={() => handleScheduleChange(idx, 'isWorkDay', !daySchedule.isWorkDay)}
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors ${daySchedule.isWorkDay ? 'bg-neon-500 text-slate-900 font-bold' : 'bg-slate-700 text-slate-400'}`}
                                >
                                    {daySchedule.day}
                                </button>
                                
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-mono">IN</span>
                                        <input 
                                            type="time" 
                                            disabled={!daySchedule.isWorkDay}
                                            value={daySchedule.start}
                                            onChange={(e) => handleScheduleChange(idx, 'start', e.target.value)}
                                            className="w-full bg-slate-900 border border-white/10 rounded-lg py-2 pl-8 pr-2 text-white text-sm outline-none focus:border-neon-400 disabled:opacity-30"
                                        />
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-mono">OUT</span>
                                        <input 
                                            type="time" 
                                            disabled={!daySchedule.isWorkDay}
                                            value={daySchedule.end}
                                            onChange={(e) => handleScheduleChange(idx, 'end', e.target.value)}
                                            className="w-full bg-slate-900 border border-white/10 rounded-lg py-2 pl-8 pr-2 text-white text-sm outline-none focus:border-neon-400 disabled:opacity-30"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                 <div className="pt-4 flex space-x-4">
                    <button onClick={() => setIsTrainerModalOpen(false)} className="flex-1 bg-slate-800 text-slate-400 font-bold py-4 rounded-xl hover:text-white transition-colors">
                        취소
                    </button>
                    <button onClick={handleAddTrainer} className="flex-[2] bg-neon-400 text-slate-900 font-bold py-4 rounded-xl hover:bg-neon-300 transition-colors shadow-lg shadow-neon-400/20">
                        스케줄 저장 및 등록
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );

  const CmsView = () => (
    <div className="space-y-6 animate-fade-in h-full">
       <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">서비스 커스터마이징 (CMS)</h2>
            <p className="text-slate-400">유저 앱에 노출되는 카테고리와 운동 항목을 실시간으로 편집합니다.</p>
       </div>

       {/* Add New Item Bar */}
       <div className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="flex gap-2 w-full md:w-auto">
             {['BODY', 'MACHINE', 'CARE'].map(cat => (
               <button 
                 key={cat}
                 onClick={() => setNewItem({...newItem, category: cat as any})}
                 className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${newItem.category === cat ? 'bg-neon-400 text-slate-900' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
               >
                 {cat}
               </button>
             ))}
          </div>
          <input 
             placeholder="항목 이름 (예: 벤치 프레스)" 
             value={newItem.name}
             onChange={(e) => setNewItem({...newItem, name: e.target.value})}
             className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-neon-400 text-sm h-10 w-full"
          />
          <input 
             placeholder="간단 설명" 
             value={newItem.desc}
             onChange={(e) => setNewItem({...newItem, desc: e.target.value})}
             className="flex-[2] bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-neon-400 text-sm h-10 w-full"
          />
          <button 
            onClick={handleAddService}
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg font-bold text-sm h-10 whitespace-nowrap w-full md:w-auto"
          >
            + 추가
          </button>
       </div>

       {/* Columns */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {[
            { id: 'BODY', label: '부위별 패키지', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { id: 'MACHINE', label: '기구 티칭', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { id: 'CARE', label: '통증 케어', color: 'text-red-400', bg: 'bg-red-500/10' }
          ].map(col => (
             <div key={col.id} className="glass-panel rounded-2xl border border-white/5 flex flex-col h-[600px]">
                <div className={`p-4 border-b border-white/5 flex justify-between items-center ${col.bg}`}>
                   <h3 className={`font-bold ${col.color}`}>{col.label}</h3>
                   <span className="text-xs bg-slate-900/50 text-slate-300 px-2 py-1 rounded">
                     {services.filter(s => s.category === col.id).length} Items
                   </span>
                </div>
                <div className="p-4 space-y-3 overflow-y-auto flex-1 no-scrollbar">
                   {services.filter(s => s.category === col.id).map(item => (
                     <div key={item.id} className="bg-slate-900/50 p-4 rounded-xl border border-white/5 group hover:border-white/20 transition-all">
                        <div className="flex justify-between items-start mb-2">
                           <span className="font-bold text-slate-200">{item.name}</span>
                           <button onClick={() => handleDeleteService(item.id)} className="text-slate-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              <XCircle size={16} />
                           </button>
                        </div>
                        <p className="text-xs text-slate-500">{item.description}</p>
                     </div>
                   ))}
                   {services.filter(s => s.category === col.id).length === 0 && (
                      <div className="text-center py-10 text-slate-600 text-sm border-2 border-dashed border-slate-800 rounded-xl">
                         항목이 없습니다.<br/>위에서 추가해주세요.
                      </div>
                   )}
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-slate-950">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 bg-slate-900/50 hidden md:block p-4 sticky top-16 h-[calc(100vh-64px)]">
         <div className="mb-8 px-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Admin Menu</span>
            <div className="h-0.5 w-10 bg-neon-500 rounded-full"></div>
         </div>
         <nav className="space-y-1">
            <SidebarItem id="dashboard" icon={LayoutGrid} label="대시보드" />
            <SidebarItem id="trainers" icon={Users} label="트레이너 스케줄" />
            <SidebarItem id="cms" icon={Settings} label="서비스 설정 (CMS)" />
            <SidebarItem id="settings" icon={Clock} label="매출 및 정산" />
         </nav>
         
         <div className="absolute bottom-8 left-4 right-4 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-2xl border border-white/5">
            <div className="flex items-center space-x-3 mb-2">
               <div className="w-8 h-8 rounded-full bg-neon-400 flex items-center justify-center text-slate-900 font-bold">M</div>
               <div>
                  <div className="text-sm font-bold text-white">Manager</div>
                  <div className="text-xs text-slate-500">SPOT 피트니스 강남본점</div>
               </div>
            </div>
            <div className="text-[10px] text-slate-500 mt-2 flex items-center">
               <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div> Online
            </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
         {activeTab === 'dashboard' && <DashboardView />}
         {activeTab === 'trainers' && <TrainersView />}
         {activeTab === 'cms' && <CmsView />}
         {activeTab === 'settings' && (
            <div className="flex items-center justify-center h-[50vh] text-slate-500 flex-col">
               <Clock size={48} className="mb-4 opacity-20" />
               <p>매출 정산 및 계정 설정 기능 준비중입니다.</p>
               <button onClick={() => { DataStore.resetAll(); window.location.reload(); }} className="mt-4 px-4 py-2 bg-red-900/30 text-red-400 rounded-lg text-xs font-bold border border-red-500/20">데이터 초기화 (Reset)</button>
            </div>
         )}
      </div>
    </div>
  );
};