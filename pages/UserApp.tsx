
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Activity, Brain, Clock, Check, Navigation, User, Monitor, AlertCircle, LayoutGrid, Dumbbell, HeartPulse, Wallet, CreditCard, X, ArrowLeft, Loader2, Nfc, Siren, Star, Zap } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getWorkoutRecommendation, Recommendation } from '../services/geminiService';
import { Trainer, GymServiceItem } from '../types';
import { DataStore } from '../utils/dataStore';

type Step = 'gym_check' | 'home' | 'ai_chat' | 'location_input' | 'scanning' | 'booking_list' | 'booking_confirm' | 'wallet_charge';

export const UserApp: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<Step>('gym_check');
  const [currentGym, setCurrentGym] = useState<string | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [myLocationInGym, setMyLocationInGym] = useState('');
  const [walletBalance, setWalletBalance] = useState(0); 
  const [userName, setUserName] = useState('회원');
  
  // Dynamic Data from DataStore (Admin Customization)
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [services, setServices] = useState<GymServiceItem[]>([]);
  
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

  // Constants
  const BASE_PRICE = 25000;
  const PRO_PRICE = 28000;

  // Initialization: Load User, Trainers, Services, and Check Location
  useEffect(() => {
    // 1. Load Data
    setTrainers(DataStore.getTrainers());
    setServices(DataStore.getServices());
    const session = DataStore.getSession();
    if (session && session.name) {
      setUserName(session.name);
      setWalletBalance(session.balance || 25000); // Simulate pre-loaded balance
    }

    // 2. Normal Geolocation
    if (step === 'gym_check') {
      if (!navigator.geolocation) {
        setGeoError("Geolocation is not supported by this browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Found location:", position.coords);
          setTimeout(() => {
            setCurrentGym(DataStore.getGymName());
            setStep('home');
          }, 1500);
        },
        (error) => {
          setGeoError("위치 정보를 가져올 수 없습니다. GPS를 켜주세요.");
          setTimeout(() => {
            setCurrentGym(`${DataStore.getGymName()} (GPS 미수신)`);
            setStep('home');
          }, 2000);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
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
    if (!selectedTrainer) return;
    const price = selectedTrainer.isSpotPro ? PRO_PRICE : BASE_PRICE;
    
    if (walletBalance >= price) {
      setWalletBalance(prev => prev - price);
      setStep('booking_confirm');
    } else {
      if (confirm(`잔액이 부족합니다. (${price.toLocaleString()}원 필요)\n충전 페이지로 이동하시겠습니까?`)) {
        setStep('wallet_charge');
      }
    }
  };

  // --- Components ---

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl animate-fade-in border border-white/10">
        <div className="bg-slate-800 border-b border-white/5 p-4 flex justify-between items-center">
            <h3 className="font-bold text-white">SPOT 안전결제</h3>
            <button onClick={() => setIsPaymentProcessing(false)} className="text-slate-400 hover:text-white"><X size={20}/></button>
        </div>
        <div className="p-6 text-center space-y-8">
            <div>
                <p className="text-slate-400 text-sm mb-1">결제 금액</p>
                <p className="text-4xl font-extrabold text-white tracking-tight">{paymentAmount.toLocaleString()}<span className="text-xl text-slate-500 ml-1">원</span></p>
            </div>

            <div className="space-y-3">
                <button 
                  onClick={() => setTimeout(handlePaymentComplete, 2000)}
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-[#FEE500] hover:bg-[#FDD835] rounded-xl transition-all text-black"
                >
                    <span className="font-bold text-sm">카카오페이 결제</span>
                </button>
                 <button 
                  onClick={() => setTimeout(handlePaymentComplete, 2000)}
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-slate-800 border border-white/10 hover:bg-slate-700 rounded-xl transition-all text-white"
                >
                    <CreditCard size={18} />
                    <span className="font-bold">신용/체크카드 결제</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );

  const GymCheckView = () => (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <div className="w-32 h-32 bg-neon-400/10 rounded-full flex items-center justify-center text-neon-400 mb-8 relative">
        {geoError ? <AlertCircle size={48} className="text-red-400" /> : <MapPin size={48} className="animate-bounce" />}
        {!geoError && <div className="absolute inset-0 border-2 border-neon-400/30 rounded-full animate-ping"></div>}
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">
        {geoError ? '위치 확인 실패' : '제휴 헬스장 확인 중'}
      </h2>
      <p className="text-slate-500">
        {geoError ? geoError : '현재 위치(GPS)를 기반으로 가까운 헬스장을 찾고 있습니다...'}
      </p>
    </div>
  );

  const WalletChargeView = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4 text-white">
        <button onClick={() => setStep('home')} className="p-2 -ml-2 mr-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft />
        </button>
        <h2 className="text-xl font-bold">포인트 충전</h2>
      </div>
      
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-neon-500/5 rounded-full blur-2xl"></div>
         <div className="text-slate-400 mb-2 text-sm">현재 잔액</div>
         <div className="text-4xl font-extrabold text-neon-300 tracking-tight">{walletBalance.toLocaleString()} P</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[10000, 30000, 50000, 100000].map(amount => (
            <button 
                key={amount}
                onClick={() => handleChargeStart(amount)}
                className="py-6 bg-slate-800/50 border border-white/5 rounded-2xl hover:border-neon-400 hover:bg-slate-800 transition-all group"
            >
                <span className="block text-neon-400 font-bold text-sm mb-1 group-hover:scale-110 transition-transform">+{amount.toLocaleString()} P</span>
                <span className="text-white font-semibold">{amount.toLocaleString()}원</span>
            </button>
        ))}
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="space-y-6 pb-10">
      {/* Wallet Header */}
      <div className="glass-panel rounded-2xl p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-800 p-2 rounded-xl text-slate-300 border border-white/5">
               <Wallet size={20} />
            </div>
            <div>
                <span className="text-xs text-slate-500 block">MY WALLET</span>
                <span className="font-bold text-white text-lg">{walletBalance.toLocaleString()} P</span>
            </div>
          </div>
          <button 
            onClick={() => setStep('wallet_charge')}
            className="text-xs bg-neon-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-neon-300 transition-colors"
          >
            충전
          </button>
      </div>

      {/* Gym Context Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 p-5 rounded-2xl flex items-center justify-between shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-400/5 animate-pulse-slow"></div>
        <div className="flex items-center space-x-4 relative z-10">
          <div className="p-2.5 bg-slate-800 rounded-xl border border-white/5">
            <MapPin size={20} className="text-neon-400" />
          </div>
          <div>
            <div className="text-xs text-slate-400 mb-0.5">Current Location</div>
            <div className="font-bold text-white text-lg tracking-tight">{currentGym}</div>
          </div>
        </div>
        <div className="relative z-10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute top-0 right-0"></div>
            <Monitor size={20} className="text-slate-500" />
        </div>
      </div>

      {/* AI Call Action */}
      <div className="bg-gradient-to-r from-neon-600 to-neon-500 rounded-2xl p-1 text-slate-900 shadow-lg shadow-neon-500/10">
        <div className="bg-slate-900 rounded-xl p-5 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon-500/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
                <div className="flex items-center mb-2">
                    <Brain className="text-neon-400 mr-2" size={20} />
                    <span className="text-neon-400 font-bold text-xs tracking-wider uppercase">AI Assistant</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">어디가 불편하신가요?</h2>
                <p className="text-slate-400 text-sm mb-5">통증 부위나 궁금한 기구를 알려주세요.</p>
                <button 
                    onClick={() => setStep('ai_chat')}
                    className="w-full bg-neon-400 text-slate-900 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center hover:bg-neon-300 transition-colors"
                >
                    AI에게 추천받고 호출하기 <ChevronRight size={18} className="ml-1 opacity-70"/>
                </button>
            </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="p-1 bg-slate-900 rounded-xl border border-white/5 flex">
        {[
            { id: 'body', icon: LayoutGrid, label: '부위별', key: 'BODY' },
            { id: 'machine', icon: Dumbbell, label: '기구', key: 'MACHINE' },
            { id: 'care', icon: HeartPulse, label: '통증케어', key: 'CARE' }
        ].map(tab => (
            <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${activeTab === tab.id ? 'bg-slate-800 text-neon-400 shadow-md border border-white/5' : 'text-slate-500 hover:text-slate-300'}`}
            >
                <tab.icon size={16} className="mr-2" /> {tab.label}
            </button>
        ))}
      </div>

      {/* Detailed Grid Content - Dynamic from DataStore */}
      <div className="min-h-[300px]">
        <div className="grid grid-cols-2 gap-3 animate-fade-in">
            {services
             .filter(s => s.category === activeTab.toUpperCase())
             .map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleStartBooking(item.name, item.description)}
                  className={`glass-card p-4 rounded-2xl hover:border-neon-500/50 hover:bg-slate-800 transition-all flex flex-col justify-between group text-left ${activeTab === 'machine' ? 'h-20 flex-row items-center' : 'h-32'}`}
                >
                  <div className={activeTab === 'care' ? 'flex items-center' : ''}>
                    {activeTab === 'care' && (
                       <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mr-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                         <HeartPulse size={20} />
                       </div>
                    )}
                    <div>
                        <span className="font-bold text-white text-lg block group-hover:text-neon-300 transition-colors">{item.name}</span>
                        <span className="text-xs text-slate-500 mt-1 block">{item.description}</span>
                    </div>
                  </div>
                  {activeTab !== 'machine' && (
                     <div className="self-end bg-slate-800 text-slate-400 rounded-full p-1.5 group-hover:bg-neon-400 group-hover:text-slate-900 transition-colors">
                        <ChevronRight size={14} />
                     </div>
                  )}
                  {activeTab === 'machine' && <ChevronRight size={16} className="text-slate-600 group-hover:text-neon-400" />}
                </button>
            ))}
        </div>
        {services.filter(s => s.category === activeTab.toUpperCase()).length === 0 && (
            <div className="text-center py-12 text-slate-500">
                등록된 서비스가 없습니다.
            </div>
        )}
      </div>
    </div>
  );

  const AiChatView = () => (
    <div className="flex flex-col h-[80vh]">
      <div className="flex items-center mb-6">
        <button onClick={() => setStep('home')} className="p-2 -ml-2 mr-2 text-slate-400 hover:text-white">
            <ArrowLeft />
        </button>
        <h2 className="text-lg font-bold text-white">AI 상담</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 pb-4 no-scrollbar">
        <div className="bg-slate-800 p-6 rounded-2xl rounded-tl-sm max-w-[90%] border border-white/5">
          <p className="text-slate-200 leading-relaxed">어떤 도움이 필요하신가요? 구체적인 증상이나 상황을 말씀해주시면 딱 맞는 프로그램을 찾아드릴게요.</p>
        </div>
        
        {aiRecommendation && (
          <div className="bg-neon-900/20 border border-neon-500/30 p-6 rounded-2xl rounded-tl-sm max-w-[95%] animate-fade-in">
             <div className="mb-4 flex items-center space-x-2">
                <Brain size={16} className="text-neon-400"/>
                <span className="text-neon-400 text-xs font-bold uppercase tracking-wider">Spot AI Recommendation</span>
             </div>
             <h3 className="font-bold text-2xl text-white mb-2">{aiRecommendation.category}</h3>
             <p className="text-slate-300 mb-6 text-sm leading-relaxed border-l-2 border-neon-500/30 pl-4">{aiRecommendation.reasoning}</p>
             <button 
              onClick={() => handleStartBooking(aiRecommendation.category, 'AI 맞춤 추천')}
              className="bg-neon-400 text-slate-900 w-full py-4 rounded-xl font-bold hover:bg-neon-300 shadow-lg shadow-neon-500/10 text-lg flex items-center justify-center"
             >
               이 프로그램으로 호출하기 <ChevronRight size={20} className="ml-2"/>
             </button>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 bg-slate-950">
        <div className="relative">
          <input
            type="text"
            value={aiQuery}
            onChange={(e) => setAiQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
            placeholder="예: 허리가 아파요, 랫풀다운 자세 등"
            className="w-full pl-6 pr-16 py-5 bg-slate-900 border border-white/10 rounded-2xl focus:border-neon-500 focus:ring-1 focus:ring-neon-500 outline-none text-white placeholder-slate-600"
          />
          <button 
            onClick={handleAiSearch}
            disabled={isAiLoading}
            className="absolute right-3 top-3 p-3 bg-neon-400 text-slate-900 rounded-xl hover:bg-neon-300 disabled:bg-slate-800 disabled:text-slate-600 transition-colors"
          >
            {isAiLoading ? <Loader2 className="animate-spin" size={24} /> : <Navigation size={24} />}
          </button>
        </div>
      </div>
    </div>
  );

  const LocationInputView = () => (
    <div className="flex flex-col items-center h-[70vh] justify-center space-y-10 relative">
       <button onClick={() => setStep('home')} className="absolute top-0 left-0 p-2 text-slate-500 hover:text-white">
            <X size={24} />
      </button>
      <div className="text-center space-y-4">
        <span className="inline-block bg-neon-400/10 border border-neon-400/20 text-neon-400 px-4 py-1.5 rounded-full text-sm font-bold">
            {selectedCategory}
        </span>
        <h2 className="text-4xl font-extrabold text-white">위치를 알려주세요</h2>
        <p className="text-lg text-slate-400">
            기구에 부착된 NFC를 태그하거나<br/>
            현재 계신 위치를 직접 입력해주세요.
        </p>
      </div>

      <div className="w-full max-w-md bg-slate-800/50 p-6 rounded-3xl border border-white/5 border-dashed flex flex-col items-center justify-center space-y-2 group cursor-pointer hover:bg-slate-800 hover:border-neon-500/50 transition-all">
          <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 group-hover:text-neon-400 group-hover:scale-110 transition-all">
              <Nfc size={24} />
          </div>
          <span className="text-sm font-bold text-slate-300">NFC 태그로 자동 입력</span>
      </div>
      
      <div className="w-full max-w-md relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
             <MapPin size={20} className="text-slate-500" />
          </div>
          <input 
            type="text" 
            value={myLocationInGym}
            onChange={(e) => setMyLocationInGym(e.target.value)}
            placeholder="예: 스쿼트 랙, 3번 런닝머신"
            className="w-full p-6 pl-12 text-center text-xl border-2 border-slate-700 bg-slate-900 rounded-3xl focus:border-neon-400 focus:ring-0 outline-none text-white placeholder-slate-700 font-bold transition-colors"
          />
      </div>

      <button
        onClick={handleLocationSubmit}
        disabled={!myLocationInGym}
        className="w-full max-w-md bg-neon-400 text-slate-900 py-5 rounded-2xl font-bold text-xl shadow-[0_0_20px_rgba(163,230,53,0.3)] disabled:bg-slate-800 disabled:text-slate-600 disabled:shadow-none transition-all"
      >
        트레이너 호출하기
      </button>
    </div>
  );

  const ScanningView = () => (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="relative w-72 h-72 mb-10 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-neon-500/20 rounded-full animate-ping"></div>
        <div className="absolute inset-4 border border-neon-500/10 rounded-full animate-ping delay-150"></div>
        <div className="w-32 h-32 bg-slate-800 rounded-full shadow-[0_0_30px_rgba(163,230,53,0.1)] flex items-center justify-center z-10 border border-white/10 relative">
             <div className="absolute inset-0 bg-neon-400/5 rounded-full animate-pulse"></div>
             <Search className="text-neon-400" size={48} />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{currentGym}</h2>
      <p className="text-slate-400 text-lg text-center">
        <span className="font-bold text-neon-400">{selectedCategory}</span> 전문<br/>
        트레이너를 찾고 있습니다...
      </p>
    </div>
  );

  const BookingListView = () => (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl flex justify-between items-center">
          <div>
            <span className="text-slate-500 text-xs uppercase tracking-wider block mb-1">Target</span>
            <div className="font-bold text-white text-lg">{selectedCategory}</div>
          </div>
          <div className="text-right">
             <span className="text-slate-500 text-xs uppercase tracking-wider block mb-1">Location</span>
             <div className="font-bold text-white text-lg">{myLocationInGym}</div>
          </div>
      </div>

      <div className="flex items-center justify-between">
          <h3 className="font-bold text-white text-lg">Available Trainers</h3>
          <span className="text-xs text-neon-400 font-bold bg-neon-400/10 px-2 py-1 rounded">Live Real-time</span>
      </div>
      
      <div className="space-y-4">
        {trainers.map(trainer => (
          <div 
            key={trainer.id}
            onClick={() => trainer.available && setSelectedTrainer(trainer)}
            className={`relative p-5 rounded-3xl border transition-all cursor-pointer overflow-hidden group ${
              selectedTrainer?.id === trainer.id 
                ? 'bg-neon-500/10 border-neon-500 ring-1 ring-neon-500' 
                : trainer.available ? 'bg-slate-800/40 border-white/5 hover:border-white/20' : 'bg-slate-900/50 border-transparent opacity-50'
            }`}
          >
            <div className="flex items-center space-x-5 relative z-10">
              <div className="relative">
                <img src={trainer.imageUrl} alt={trainer.name} className="w-20 h-20 rounded-2xl object-cover border border-white/10" />
                {trainer.available && (
                    <div className="absolute -bottom-2 -right-2 bg-slate-900 text-neon-400 text-[10px] px-2 py-1 rounded-lg border border-neon-500/50 font-bold shadow-lg">
                        대기중
                    </div>
                )}
                {trainer.isSpotPro && (
                   <div className="absolute -top-2 -left-2 bg-purple-500 text-white text-[9px] px-2 py-1 rounded-br-lg font-bold shadow-lg z-20">
                     SPOT PRO
                   </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-white text-xl flex items-center gap-2">
                        {trainer.name}
                    </h4>
                    {trainer.isSpotPro ? (
                       <span className="text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/50 px-1.5 py-0.5 rounded font-bold w-fit mt-1">
                          프리랜서 전문가
                       </span>
                    ) : (
                       <span className="text-[10px] text-slate-500 mt-1">센터 소속</span>
                    )}
                  </div>

                  <div className="text-right">
                     <div className={`font-bold text-lg ${trainer.isSpotPro ? 'text-purple-400' : 'text-neon-400'}`}>
                        {(trainer.isSpotPro ? PRO_PRICE : BASE_PRICE).toLocaleString()}원
                     </div>
                     {trainer.isSpotPro && (
                        <div className="text-[9px] text-purple-300 font-bold">+3,000원 추가</div>
                     )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="text-slate-400 text-sm flex items-center">
                      <MapPin size={14} className="mr-1 text-slate-500" /> 
                      {trainer.isSpotPro ? 'SPOT 프리랜서' : currentGym?.split(' ')[0] || '센터'}
                  </div>
                  {trainer.available ? (
                      <div className="text-slate-900 bg-neon-400 text-[10px] font-extrabold px-2 py-1 rounded-md flex items-center">
                          <Clock size={10} className="mr-1" /> 3 MIN
                      </div>
                  ) : (
                      <div className="text-slate-500 text-[10px] font-bold bg-slate-800 px-2 py-1 rounded">BUSY</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-xl border-t border-white/5 p-4 z-40 safe-area-bottom">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-3 text-sm">
                <span className="text-slate-400">보유 잔액</span>
                <span className={`font-bold ${walletBalance >= 25000 ? 'text-neon-400' : 'text-red-400'}`}>
                    {walletBalance.toLocaleString()} P
                </span>
            </div>
            <button
            onClick={() => selectedTrainer && handleBookingPayment()}
            disabled={!selectedTrainer}
            className={`w-full py-4 rounded-xl font-bold text-xl disabled:bg-slate-800 disabled:text-slate-600 disabled:shadow-none shadow-[0_0_20px_rgba(163,230,53,0.2)] ${selectedTrainer?.isSpotPro ? 'bg-purple-500 text-white hover:bg-purple-400' : 'bg-neon-400 text-slate-900 hover:bg-neon-300'}`}
            >
            {selectedTrainer 
                ? (walletBalance >= (selectedTrainer.isSpotPro ? PRO_PRICE : BASE_PRICE) 
                    ? `${(selectedTrainer.isSpotPro ? PRO_PRICE : BASE_PRICE).toLocaleString()}원 결제 및 호출` 
                    : '잔액 부족 (충전하기)')
                : '트레이너를 선택해주세요'}
            </button>
         </div>
      </div>
      <div className="h-32"></div>
    </div>
  );

  const BookingConfirmView = () => (
    <div className="flex flex-col items-center justify-center py-10 min-h-[70vh]">
      <div className="w-32 h-32 bg-neon-400/20 rounded-full flex items-center justify-center text-neon-400 mb-8 relative">
        <Check size={64} />
        <div className="absolute inset-0 border-2 border-neon-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white mb-3">호출 완료!</h2>
        <p className="text-slate-400 text-lg">
            <span className={`font-bold ${selectedTrainer?.isSpotPro ? 'text-purple-400' : 'text-neon-400'}`}>{selectedTrainer?.name}</span> 트레이너가<br/>
            <span className="text-white font-bold border-b border-neon-500/50 pb-0.5">{myLocationInGym}</span>(으)로 이동합니다.
        </p>
      </div>
      
      <div className="glass-card p-8 rounded-3xl w-full max-w-sm text-left space-y-6">
        <div className="flex items-center space-x-5 border-b border-white/5 pb-6">
            <img src={selectedTrainer?.imageUrl} className="w-16 h-16 rounded-2xl border border-white/10 object-cover" alt="" />
            <div>
                <div className="font-bold text-xl text-white">{selectedTrainer?.name}</div>
                <div className="text-neon-400 font-bold text-sm flex items-center mt-1">
                    <Activity size={14} className="mr-1.5" /> 
                    이동 중 (약 2분 소요)
                </div>
            </div>
        </div>
        <div className="space-y-4">
             <div className="flex justify-between">
                <span className="text-slate-500 text-sm">요청 내용</span>
                <div className="text-right">
                    <div className="font-bold text-white">{selectedCategory}</div>
                    {selectedDetail && <div className="text-xs text-slate-400 mt-0.5">{selectedDetail}</div>}
                </div>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm">결제 금액</span>
                <div className="text-right">
                    <div className={`font-bold text-lg ${selectedTrainer?.isSpotPro ? 'text-purple-400' : 'text-neon-400'}`}>
                        {(selectedTrainer?.isSpotPro ? PRO_PRICE : BASE_PRICE).toLocaleString()} P
                    </div>
                </div>
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
        className="mt-10 px-12 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 border border-white/10 transition-colors w-full max-w-sm"
      >
        확인
      </button>
    </div>
  );

  // Main Render
  return (
    <div className="pb-20 min-h-screen">
      {isPaymentProcessing && <PaymentModal />}
      
      {/* View Routing */}
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