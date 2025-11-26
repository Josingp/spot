import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Activity, Brain, Clock, Check, Navigation, User, Monitor, AlertCircle, LayoutGrid, Dumbbell, HeartPulse, Wallet, CreditCard, X, ArrowLeft, Loader2 } from 'lucide-react';
import { getWorkoutRecommendation, Recommendation } from '../services/geminiService';
import { Trainer } from '../types';

// Updated Mock Data with Realistic Images
const MOCK_GYM_TRAINERS: Trainer[] = [
  { 
    id: '1', 
    name: '김태우', 
    specialty: '3대 운동/교정', 
    rating: 4.9, 
    available: true, 
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    gymName: '스포애니 강남점', 
    currentZone: '프리웨이트 존', 
    eta: 1 
  },
  { 
    id: '2', 
    name: '이수진', 
    specialty: '머신 티칭/라인', 
    rating: 4.8, 
    available: true, 
    imageUrl: 'https://images.unsplash.com/photo-1611672585731-fa1060a7a9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    gymName: '스포애니 강남점', 
    currentZone: '유산소 존', 
    eta: 2 
  },
  { 
    id: '3', 
    name: '박준형', 
    specialty: '파워리프팅', 
    rating: 5.0, 
    available: false, 
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    gymName: '스포애니 강남점', 
    currentZone: '상담실', 
    eta: 5 
  },
  { 
    id: '4', 
    name: '최민지', 
    specialty: '재활/스트레칭', 
    rating: 4.9, 
    available: true, 
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    gymName: '스포애니 강남점', 
    currentZone: '스트레칭 존', 
    eta: 3 
  },
];

const BODY_PARTS = [
  { id: 'back', name: '등(Back) 집중', desc: '광배근/승모근 자극점 찾기' },
  { id: 'legs', name: '하체(Legs) 루틴', desc: '힙업 & 허벅지 라인 정리' },
  { id: 'chest', name: '가슴(Chest) 볼륨', desc: '벤치프레스 & 머신 공략' },
  { id: 'shoulder', name: '어깨(Shoulder)', desc: '프레임 넓히기 & 안전한 프레스' },
  { id: 'arm', name: '팔(Arms) 슈퍼세트', desc: '이두/삼두 탄력 만들기' },
  { id: 'abs', name: '복근/코어(Core)', desc: '허리 통증 없는 코어 강화' },
];

const MACHINES = [
  { id: 'latpull', name: '랫 풀 다운', desc: '등' },
  { id: 'squat', name: '스쿼트', desc: '하체' },
  { id: 'bench', name: '벤치 프레스', desc: '가슴' },
  { id: 'dead', name: '데드리프트', desc: '전신' },
  { id: 'legpress', name: '레그 프레스', desc: '하체' },
  { id: 'shoulderpress', name: '숄더 프레스', desc: '어깨' },
  { id: 'row', name: '시티드 로우', desc: '등' },
  { id: 'fly', name: '펙 덱 플라이', desc: '가슴' },
];

const CARES = [
  { id: 'pain_neck', name: '거북목/목 통증', desc: '경추 스트레칭' },
  { id: 'pain_back', name: '허리 통증 케어', desc: '요추 안정화' },
  { id: 'swelling', name: '하체 부종 관리', desc: '폼롤러 & 스트레칭' },
  { id: 'posture', name: '라운드 숄더', desc: '어깨 교정' },
];

type Step = 'gym_check' | 'home' | 'ai_chat' | 'location_input' | 'scanning' | 'booking_list' | 'booking_confirm' | 'wallet_charge';

export const UserApp: React.FC = () => {
  const [step, setStep] = useState<Step>('gym_check');
  const [currentGym, setCurrentGym] = useState<string | null>(null);
  const [myLocationInGym, setMyLocationInGym] = useState('');
  const [walletBalance, setWalletBalance] = useState(0); // Default 0 for demo to force charge
  
  const [aiQuery, setAiQuery] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState<Recommendation | null>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  
  const [activeTab, setActiveTab] = useState<'body' | 'machine' | 'care'>('body');

  // PG Simulation State
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  // Initial Location Check
  useEffect(() => {
    if (step === 'gym_check') {
      const timer = setTimeout(() => {
        setCurrentGym('스포애니 강남점');
        setStep('home');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleStartBooking = (categoryName: string, detail?: string) => {
    setSelectedCategory(categoryName);
    setSelectedDetail(detail || null);
    setStep('location_input');
  };

  const handleLocationSubmit = () => {
    if (!myLocationInGym.trim()) return;
    setStep('scanning');
    setTimeout(() => {
      setStep('booking_list');
    }, 2000);
  };

  const handleAiSearch = async () => {
    if (!aiQuery.trim()) return;
    setIsAiLoading(true);
    const result = await getWorkoutRecommendation(aiQuery);
    setAiRecommendation(result);
    setIsAiLoading(false);
  };

  const handleChargeStart = (amount: number) => {
    setPaymentAmount(amount);
    setIsPaymentProcessing(true);
  };

  const handlePaymentComplete = () => {
    setWalletBalance(prev => prev + paymentAmount);
    setIsPaymentProcessing(false);
    setPaymentAmount(0);
    alert(`${paymentAmount.toLocaleString()}원 충전이 완료되었습니다.`);
    setStep('home');
  };

  const handleBookingPayment = () => {
    const PRICE = 25000;
    if (walletBalance >= PRICE) {
      setWalletBalance(prev => prev - PRICE);
      setStep('booking_confirm');
    } else {
      if (confirm('잔액이 부족합니다. 충전 페이지로 이동하시겠습니까?')) {
        setStep('wallet_charge');
      }
    }
  };

  // --- Components ---

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
        <div className="bg-gray-50 border-b border-gray-100 p-4 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">SPOT 안전결제</h3>
            <button onClick={() => setIsPaymentProcessing(false)} className="text-gray-400 hover:text-gray-600"><X size={20}/></button>
        </div>
        <div className="p-6 text-center space-y-6">
            <div>
                <p className="text-gray-500 text-sm">결제 금액</p>
                <p className="text-3xl font-extrabold text-gray-900">{paymentAmount.toLocaleString()}원</p>
            </div>

            <div className="space-y-3">
                <button 
                  onClick={() => setTimeout(handlePaymentComplete, 2000)}
                  className="w-full flex items-center justify-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-yellow-50 hover:border-yellow-400 transition-all group"
                >
                    <div className="bg-[#FEE500] p-2 rounded-lg"><span className="font-bold text-xs">PAY</span></div>
                    <span className="font-bold text-gray-700">카카오페이 결제</span>
                </button>
                 <button 
                  onClick={() => setTimeout(handlePaymentComplete, 2000)}
                  className="w-full flex items-center justify-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-400 transition-all"
                >
                    <div className="bg-blue-600 text-white p-2 rounded-lg"><CreditCard size={14}/></div>
                    <span className="font-bold text-gray-700">신용/체크카드 결제</span>
                </button>
            </div>
            
            <p className="text-xs text-gray-400">
                위 상품의 구매조건을 확인하였으며, 결제 진행에 동의합니다.
            </p>
        </div>
        
        {/* Fake Loading Overlay during payment simulation */}
        {/* We can simulate a spinner inside button click, but for demo simplistic is fine. */}
      </div>
    </div>
  );

  const GymCheckView = () => (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6 animate-pulse">
        <MapPin size={48} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">제휴 헬스장 확인 중...</h2>
      <p className="text-gray-500">현재 위치를 기반으로 입장하신 헬스장을 찾고 있습니다.</p>
    </div>
  );

  const WalletChargeView = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <button onClick={() => setStep('home')} className="p-2 -ml-2 mr-2 text-gray-600">
            <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold">포인트 충전</h2>
      </div>
      
      <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
         <div className="text-gray-400 mb-1 text-sm">현재 잔액</div>
         <div className="text-3xl font-bold">{walletBalance.toLocaleString()} P</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[10000, 30000, 50000, 100000].map(amount => (
            <button 
                key={amount}
                onClick={() => handleChargeStart(amount)}
                className="py-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-brand-500 hover:ring-1 hover:ring-brand-500 transition-all font-bold text-lg text-gray-700 flex flex-col items-center justify-center"
            >
                <span className="block text-brand-600 text-sm mb-1">+{amount.toLocaleString()} P</span>
                {amount.toLocaleString()}원
            </button>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-500">
        <p>• 충전된 포인트는 유효기간 없이 언제든 사용 가능합니다.</p>
        <p>• 미사용 포인트는 전액 환불 가능합니다.</p>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="space-y-6 pb-10">
      {/* Wallet Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="bg-brand-100 p-2 rounded-full text-brand-600">
               <Wallet size={20} />
            </div>
            <span className="font-bold text-gray-700">내 지갑</span>
          </div>
          <div className="flex items-center space-x-3">
             <span className="font-bold text-xl text-gray-900">{walletBalance.toLocaleString()} P</span>
             <button 
                onClick={() => setStep('wallet_charge')}
                className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-gray-800"
             >
                충전
             </button>
          </div>
      </div>

      {/* Gym Context Header */}
      <div className="bg-gray-900 text-white p-4 rounded-xl flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-brand-600 rounded-lg">
            <MapPin size={20} className="text-white" />
          </div>
          <div>
            <div className="text-xs text-gray-400">현재 위치 (자동인식됨)</div>
            <div className="font-bold text-lg">{currentGym}</div>
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">키오스크 연동 중</span>
        </div>
      </div>

      {/* AI Call Action */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-1">어디가 불편하신가요?</h2>
          <p className="text-brand-100 mb-4 text-sm">"스쿼트 무릎 통증", "등 자극점 찾는법" 등</p>
          <button 
            onClick={() => setStep('ai_chat')}
            className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Brain className="mr-2" size={20} />
            AI에게 추천받고 호출하기
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex p-1 bg-gray-200 rounded-xl">
        <button 
          onClick={() => setActiveTab('body')}
          className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${activeTab === 'body' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
        >
          <LayoutGrid size={16} className="mr-1" /> 부위별
        </button>
        <button 
          onClick={() => setActiveTab('machine')}
          className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${activeTab === 'machine' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
        >
          <Dumbbell size={16} className="mr-1" /> 기구
        </button>
        <button 
          onClick={() => setActiveTab('care')}
          className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${activeTab === 'care' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
        >
          <HeartPulse size={16} className="mr-1" /> 통증케어
        </button>
      </div>

      {/* Detailed Grid Content */}
      <div className="min-h-[300px]">
        {activeTab === 'body' && (
          <div className="grid grid-cols-2 gap-3 animate-fade-in">
            {BODY_PARTS.map(part => (
              <button 
                key={part.id}
                onClick={() => handleStartBooking(part.name, part.desc)}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-500 hover:ring-1 hover:ring-brand-200 text-left transition-all h-28 flex flex-col justify-between group"
              >
                <div>
                  <span className="font-bold text-gray-900 text-lg block group-hover:text-brand-600 transition-colors">{part.name}</span>
                  <span className="text-xs text-gray-500">{part.desc}</span>
                </div>
                <div className="self-end bg-brand-50 text-brand-600 rounded-full p-1 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <ChevronRight size={16} />
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'machine' && (
          <div className="grid grid-cols-2 gap-3 animate-fade-in">
            {MACHINES.map(machine => (
              <button 
                key={machine.id}
                onClick={() => handleStartBooking(machine.name, '핀포인트 머신 티칭')}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-500 hover:ring-1 hover:ring-brand-200 text-left transition-all flex items-center justify-between h-20 group"
              >
                 <div>
                  <span className="font-bold text-gray-900 text-lg block group-hover:text-brand-600">{machine.name}</span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded inline-block mt-1">{machine.desc}</span>
                </div>
                 <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-600" />
              </button>
            ))}
          </div>
        )}

        {activeTab === 'care' && (
          <div className="grid grid-cols-1 gap-3 animate-fade-in">
             {CARES.map(care => (
              <button 
                key={care.id}
                onClick={() => handleStartBooking(care.name, care.desc)}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-500 hover:ring-1 hover:ring-brand-200 text-left transition-all flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mr-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg block group-hover:text-brand-600">{care.name}</span>
                    <span className="text-sm text-gray-500">{care.desc}</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-600" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const AiChatView = () => (
    <div className="flex flex-col h-[80vh]">
      <div className="flex items-center mb-4">
        <button onClick={() => setStep('home')} className="p-2 -ml-2 mr-2 text-gray-600">
            <ArrowLeft />
        </button>
        <h2 className="text-lg font-bold">AI 상담</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        <div className="bg-gray-100 p-6 rounded-t-2xl rounded-br-2xl max-w-[90%] self-start text-lg">
          <p className="text-gray-800">어떤 도움이 필요하신가요? 구체적인 증상이나 상황을 말씀해주시면 딱 맞는 프로그램을 찾아드릴게요.</p>
        </div>
        
        {aiRecommendation && (
          <div className="bg-brand-50 border border-brand-100 p-6 rounded-t-2xl rounded-br-2xl max-w-[90%] self-start animate-fade-in shadow-sm">
             <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-brand-600 text-white text-sm font-bold rounded-full mb-2">AI 추천</span>
                <h3 className="font-bold text-xl text-brand-800">{aiRecommendation.category}</h3>
             </div>
             <p className="text-gray-700 mb-6 text-lg leading-relaxed">{aiRecommendation.reasoning}</p>
             <button 
              onClick={() => handleStartBooking(aiRecommendation.category, 'AI 맞춤 추천')}
              className="bg-brand-600 text-white w-full py-4 rounded-xl font-bold hover:bg-brand-700 shadow-md text-lg flex items-center justify-center"
             >
               이 프로그램으로 호출하기 <ChevronRight size={20} className="ml-2"/>
             </button>
          </div>
        )}
      </div>

      <div className="mt-auto">
        <div className="relative">
          <input
            type="text"
            value={aiQuery}
            onChange={(e) => setAiQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
            placeholder="예: 허리가 아파요, 랫풀다운 자세 등"
            className="w-full pl-6 pr-16 py-5 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none shadow-sm text-lg"
          />
          <button 
            onClick={handleAiSearch}
            disabled={isAiLoading}
            className="absolute right-3 top-3 p-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 disabled:bg-gray-300 transition-colors"
          >
            {isAiLoading ? <Loader2 className="animate-spin" size={24} /> : <Navigation size={24} />}
          </button>
        </div>
      </div>
    </div>
  );

  const LocationInputView = () => (
    <div className="flex flex-col items-center h-[60vh] justify-center space-y-8">
       <button onClick={() => setStep('home')} className="absolute top-4 left-4 p-2 text-gray-600">
            <X size={24} />
      </button>
      <div className="text-center space-y-2">
        <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-bold mb-2">
            {selectedCategory}
        </span>
        <h2 className="text-3xl font-bold text-gray-900">어디로 갈까요?</h2>
        <p className="text-xl text-gray-500">트레이너가 찾아갈 수 있게<br/>현재 계신 기구 이름이나 위치를 알려주세요.</p>
      </div>
      
      <div className="w-full max-w-md">
          <input 
            type="text" 
            value={myLocationInGym}
            onChange={(e) => setMyLocationInGym(e.target.value)}
            placeholder="예: 스쿼트 랙, 3번 런닝머신, 덤벨 존"
            className="w-full p-6 text-center text-xl border-2 border-brand-200 rounded-2xl focus:border-brand-600 focus:ring-0 outline-none bg-brand-50 placeholder-brand-300 font-bold"
          />
      </div>

      <div className="grid grid-cols-3 gap-2 w-full max-w-md">
        {['프리웨이트 존', '유산소 존', '머신 존', '스트레칭 존', '스쿼트 랙'].map(zone => (
            <button 
                key={zone}
                onClick={() => setMyLocationInGym(zone)}
                className="py-2 px-1 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-brand-100 hover:text-brand-600"
            >
                {zone}
            </button>
        ))}
      </div>

      <button
        onClick={handleLocationSubmit}
        disabled={!myLocationInGym}
        className="w-full max-w-md bg-brand-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        트레이너 호출하기
      </button>
    </div>
  );

  const ScanningView = () => (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 bg-brand-500 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-brand-50">
             <Search className="text-brand-600 animate-pulse" size={40} />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentGym}</h2>
      <p className="text-gray-500 text-lg">
        <span className="font-bold text-gray-800">{selectedCategory}</span> 전문<br/>
        트레이너를 찾는 중입니다...
      </p>
    </div>
  );

  const BookingListView = () => (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">요청 내용</span>
            <div className="font-bold text-gray-900">{selectedCategory}</div>
          </div>
          <div className="text-right">
             <span className="text-gray-500 text-sm">내 위치</span>
             <div className="font-bold text-gray-900">{myLocationInGym}</div>
          </div>
      </div>

      <h3 className="font-bold text-gray-900 text-lg">호출 가능한 트레이너</h3>
      
      <div className="space-y-4">
        {MOCK_GYM_TRAINERS.map(trainer => (
          <div 
            key={trainer.id}
            onClick={() => trainer.available && setSelectedTrainer(trainer)}
            className={`relative p-5 rounded-2xl border-2 bg-white shadow-sm cursor-pointer transition-all ${
              selectedTrainer?.id === trainer.id 
                ? 'border-brand-600 ring-2 ring-brand-100 bg-brand-50' 
                : trainer.available ? 'border-gray-100 hover:border-gray-300' : 'border-gray-100 opacity-60 bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-5">
              <div className="relative">
                <img src={trainer.imageUrl} alt={trainer.name} className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md" />
                {trainer.available && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full border-2 border-white font-bold">
                        대기중
                    </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-xl">{trainer.name}</h4>
                  {trainer.available ? (
                     <div className="text-brand-600 font-bold flex items-center bg-brand-100 px-2 py-1 rounded-lg">
                        <Clock size={14} className="mr-1" /> {trainer.eta}분 컷
                     </div>
                  ) : (
                      <div className="text-gray-400 text-sm font-medium bg-gray-200 px-2 py-1 rounded-lg">수업중</div>
                  )}
                </div>
                <div className="text-gray-600 mb-1 flex items-center">
                    <MapPin size={14} className="mr-1 text-gray-400" /> 
                    현재: {trainer.currentZone}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs bg-white border border-gray-200 px-2 py-1 rounded text-gray-600">{trainer.specialty}</span>
                  <span className="text-xs text-yellow-500 font-bold">★ {trainer.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-lg z-40 safe-area-bottom">
         <div className="max-w-7xl mx-auto flex justify-between items-center mb-3">
             <span className="text-gray-500">보유 잔액</span>
             <span className={`font-bold ${walletBalance >= 25000 ? 'text-blue-600' : 'text-red-500'}`}>
                {walletBalance.toLocaleString()} P
             </span>
         </div>
        <button
          onClick={() => selectedTrainer && handleBookingPayment()}
          disabled={!selectedTrainer}
          className="w-full max-w-7xl mx-auto block bg-brand-600 text-white py-5 rounded-xl font-bold text-xl disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg"
        >
          {selectedTrainer 
            ? (walletBalance >= 25000 ? '25,000P 결제 및 호출' : '잔액 부족 (충전하기)')
            : '트레이너를 선택해주세요'}
        </button>
      </div>
      <div className="h-32"></div>
    </div>
  );

  const BookingConfirmView = () => (
    <div className="flex flex-col items-center justify-center py-10 space-y-8 text-center min-h-[70vh]">
      <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce relative">
        <Check size={64} />
        <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-ping"></div>
      </div>
      
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">호출 완료!</h2>
        <p className="text-gray-600 text-xl">
            <span className="font-bold text-brand-600">{selectedTrainer?.name}</span> 트레이너가<br/>
            <span className="text-gray-900 font-bold border-b-2 border-brand-300 px-1">{myLocationInGym}</span>(으)로 이동합니다.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-3xl w-full max-w-sm text-left space-y-6 shadow-xl border border-gray-100">
        <div className="flex items-center space-x-4 border-b border-gray-100 pb-6">
            <img src={selectedTrainer?.imageUrl} className="w-16 h-16 rounded-full border border-gray-200 object-cover" alt="" />
            <div>
                <div className="font-bold text-lg">{selectedTrainer?.name}</div>
                <div className="text-brand-600 font-medium flex items-center">
                    <Activity size={16} className="mr-1" /> 
                    이동 중 (약 {selectedTrainer?.eta}분 소요)
                </div>
            </div>
        </div>
        <div className="space-y-3 text-lg">
             <div className="flex justify-between">
                <span className="text-gray-500">요청 내용</span>
                <div className="text-right">
                    <div className="font-medium">{selectedCategory}</div>
                    {selectedDetail && <div className="text-xs text-gray-500">{selectedDetail}</div>}
                </div>
            </div>
             <div className="flex justify-between">
                <span className="text-gray-500">결제 금액</span>
                <div className="text-right">
                    <div className="font-bold text-blue-600">25,000 P</div>
                    <div className="text-xs text-gray-400">포인트 차감 완료</div>
                </div>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">내 위치</span>
                <span className="font-medium text-gray-900">{myLocationInGym}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl mt-4 text-center">
                <p className="text-sm text-gray-500 mb-1">잠시만 기다려주세요.</p>
                <p className="font-bold text-gray-800">트레이너가 도착하면 알림을 드립니다.</p>
            </div>
        </div>
      </div>

      <button 
        onClick={() => {
          setStep('home');
          setSelectedCategory(null);
          setSelectedDetail(null);
          setSelectedTrainer(null);
          setAiQuery('');
          setAiRecommendation(null);
          setMyLocationInGym('');
        }}
        className="px-10 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 text-lg w-full max-w-sm"
      >
        확인
      </button>
    </div>
  );

  return (
    <div className="pb-20 min-h-[80vh]">
      {isPaymentProcessing && <PaymentModal />}
      {step === 'gym_check' && <GymCheckView />}
      {step === 'home' && <HomeView />}
      {step === 'wallet_charge' && <WalletChargeView />}
      {step === 'ai_chat' && <AiChatView />}
      {step === 'location_input' && <LocationInputView />}
      {step === 'scanning' && <ScanningView />}
      {step === 'booking_list' && <BookingListView />}
      {step === 'booking_confirm' && <BookingConfirmView />}
    </div>
  );
};