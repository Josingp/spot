import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, TrendingUp, MapPin, Clock, Award, Monitor } from 'lucide-react';

const DATA = [
  { name: '강남점', calls: 45, revenue: 1125000 },
  { name: '역삼점', calls: 32, revenue: 800000 },
  { name: '논현점', calls: 28, revenue: 700000 },
  { name: '선릉점', calls: 50, revenue: 1250000 },
  { name: '신사점', calls: 20, revenue: 500000 },
];

const UPCOMING_DISPATCHES = [
  { id: 1, time: '지금', user: '회원 #382', location: '강남점 - 스쿼트 랙', status: 'moving', trainer: '김태우', type: '자세 교정' },
  { id: 2, time: '14:30', user: '회원 #104', location: '강남점 - 유산소 존', status: 'pending', trainer: '미배정', type: '기구 사용법' },
  { id: 3, time: '14:45', user: '회원 #992', location: '역삼점 - 프리웨이트', status: 'confirmed', trainer: '이수진', type: '보조' },
];

export const AdminApp: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Business Header */}
      <div className="flex justify-between items-end">
        <div>
            <h2 className="text-2xl font-bold text-gray-900">제휴점 관리자 대시보드</h2>
            <p className="text-gray-500">실시간 헬스장 내 호출 현황 및 키오스크 가동률</p>
        </div>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-sm flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            시스템 정상 가동 중
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm font-medium">오늘 총 호출</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={20} /></div>
          </div>
          <div className="text-3xl font-bold text-gray-900">142건</div>
          <div className="text-sm text-green-600 mt-2 flex items-center">
            <TrendingUp size={16} className="mr-1" /> 어제 대비 +12%
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-brand-500">
           <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm font-medium">플랫폼 수수료 (5%)</span>
            <div className="p-2 bg-brand-50 text-brand-600 rounded-lg"><Award size={20} /></div>
          </div>
          <div className="text-3xl font-bold text-brand-700">₩177,500</div>
          <div className="text-sm text-gray-400 mt-2">오늘 누적</div>
        </div>
         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
           <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm font-medium">키오스크 호출 비율</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Monitor size={20} /></div>
          </div>
          <div className="text-3xl font-bold text-gray-900">68%</div>
          <div className="text-sm text-gray-500 mt-2">모바일 앱 32%</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
           <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm font-medium">평균 도착 시간</span>
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Clock size={20} /></div>
          </div>
          <div className="text-3xl font-bold text-gray-900">1분 40초</div>
          <div className="text-sm text-green-600 mt-2 font-bold">목표(3분) 달성</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">지점별 일일 매출 현황</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="revenue" name="총 매출" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Dispatch Section */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-bold text-gray-900">실시간 현장 호출</h3>
          </div>
          
          <div className="space-y-4">
            {UPCOMING_DISPATCHES.map(dispatch => (
              <div key={dispatch.id} className="flex items-center p-4 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    dispatch.status === 'moving' ? 'bg-orange-100 text-orange-600' :
                    dispatch.status === 'confirmed' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  <Clock size={24} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-gray-800 truncate">{dispatch.location}</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded text-gray-600">{dispatch.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{dispatch.status === 'moving' ? `${dispatch.trainer} 이동 중` : dispatch.status === 'pending' ? '배정 대기' : '예약됨'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-900 text-white rounded-xl flex justify-between items-center">
             <div>
                <div className="text-xs text-gray-400 mb-1">대기 중인 트레이너</div>
                <div className="font-bold text-xl">총 18명</div>
             </div>
             <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium">전체 현황</button>
          </div>
        </div>
      </div>
    </div>
  );
};