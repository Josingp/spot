
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nfc, MapPin, ChevronRight, Star, Lock, ArrowLeft, Loader2, CheckCircle, CreditCard, Clock, Zap } from 'lucide-react';
import { DataStore } from '../utils/dataStore';

// Mock Data for Simulation - Updated with valid image for Lee Su-jin
const SIM_TRAINERS = [
  { id: 't1', name: '김태우', specialty: '3대 운동', rating: 4.9, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', status: 'AVAILABLE', isSpotPro: true },
  { id: 't2', name: '이수진', specialty: '머신 티칭', rating: 4.8, image: 'https://images.unsplash.com/photo-1609132718484-cc90be34e790?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', status: 'AVAILABLE', isSpotPro: false },
];

export const NFCSimulationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'scan' | 'service' | 'trainer' | 'login' | 'payment' | 'complete'>('scan');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [gymName, setGymName] = useState(DataStore.getGymName());

  // Auto transition from scan to service
  useEffect(() => {
    if (step === 'scan') {
      const timer = setTimeout(() => {
        setStep('service');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleServiceSelect = (name: string) => {
    setSelectedService(name);
    setStep('trainer');
  };

  const handleTrainerSelect = (trainer: any) => {
    setSelectedTrainer(trainer);
    setStep('login');
  };

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('payment');
    }, 1500);
  };

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('complete');
    }, 2000);
  };

  const getPrice = (isPro: boolean) => {
     if (isPro) return 28000;
     return 25000;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-slate-950 flex flex-col h-[90vh] max-h-[800px] border border-white/10 rounded-[2.5rem] relative shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 flex items-center border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 flex-shrink-0">
          <button onClick={() => navigate('/')} className="p-2 -ml-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors">
            <ArrowLeft size={20}/>
          </button>
          <span className="font-bold text-lg ml-2">SPOT NFC</span>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide min-h-0">
          
          {/* STEP 1: SCAN */}
          {step === 'scan' && (
            <div className="h-full flex flex-col items-center justify-center animate-fade-in text-center pb-10">
               <div className="w-40 h-40 rounded-full bg-neon-400/10 flex items-center justify-center mb-10 relative">
                   <div className="absolute inset-0 border-4 border-neon-400/50 rounded-full animate-ping"></div>
                   <div className="absolute inset-4 border-2 border-neon-400/30 rounded-full animate-ping delay-150"></div>
                   <Nfc size={64} className="text-neon-400 relative z-10" />
               </div>
               <h2 className="text-3xl font-extrabold mb-6 text-white leading-tight">NFC 태그<br/>확인 완료</h2>
               <div className="w-full max-w-xs flex items-center space-x-4 bg-slate-800 p-4 rounded-2xl border border-neon-500/30 shadow-[0_0_20px_rgba(163,230,53,0.1)]">
                   <div className="bg-slate-900 p-3 rounded-xl">
                      <MapPin size={24} className="text-neon-400" />
                   </div>
                   <div className="text-left flex-1 min-w-0">
                       <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Current Location</div>
                       <span className="text-lg font-bold text-white truncate block">프리웨이트존</span>
                       <span className="text-[10px] text-slate-500 truncate block">{gymName}</span>
                   </div>
               </div>
               <p className="mt-8 text-slate-500 text-sm animate-pulse">서비스 화면으로 이동 중...</p>
            </div>
          )}

          {/* STEP 2: SERVICE SELECT */}
          {step === 'service' && (
            <div className="animate-fade-in space-y-6">
               <div className="mt-2">
                  <h2 className="text-2xl font-bold mb-2 text-white">어디가 불편하신가요?</h2>
                  <p className="text-slate-400 text-sm">현재 위치(프리웨이트존) 추천 코칭</p>
               </div>
               
               <div className="grid grid-cols-1 gap-3">
                  {['3대 운동 자세 교정', '스쿼트 집중 케어', '벤치 프레스 보조', '허리 통증 케어'].map(item => (
                    <button 
                      key={item}
                      onClick={() => handleServiceSelect(item)}
                      className="w-full p-5 bg-slate-800 rounded-2xl border border-white/5 hover:border-neon-400 hover:bg-slate-700 transition-all text-left flex justify-between items-center group shadow-md active:scale-95"
                    >
                       <span className="font-bold text-lg text-white group-hover:text-neon-300">{item}</span>
                       <ChevronRight className="text-slate-500 group-hover:text-neon-400" size={20} />
                    </button>
                  ))}
               </div>
            </div>
          )}

          {/* STEP 3: TRAINER SELECT */}
          {step === 'trainer' && (
             <div className="animate-fade-in space-y-6">
                <div className="mb-2">
                   <span className="inline-block bg-neon-400/10 text-neon-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{selectedService}</span>
                   <h2 className="text-2xl font-bold text-white">트레이너 선택</h2>
                   <p className="text-slate-400 text-sm">현재 호출 가능한 전문가 목록입니다.</p>
                </div>
                
                <div className="space-y-4">
                   {SIM_TRAINERS.map(t => (
                      <div 
                        key={t.id}
                        onClick={() => handleTrainerSelect(t)}
                        className={`w-full p-4 rounded-3xl border cursor-pointer transition-all flex items-center space-x-4 group active:bg-slate-700 relative overflow-hidden ${t.isSpotPro ? 'bg-purple-900/10 border-purple-500/30 hover:border-purple-500' : 'bg-slate-800 border-white/5 hover:border-neon-400'}`}
                      >
                         {/* Visual Tag for Pro */}
                         {t.isSpotPro && (
                           <div className="absolute top-0 left-0 bg-purple-500 text-white text-[9px] font-bold px-2 py-1 rounded-br-xl z-20">
                             SPOT PRO
                           </div>
                         )}

                         <img src={t.image} className="w-16 h-16 rounded-2xl object-cover border border-white/10 flex-shrink-0 bg-slate-700" alt={t.name} />
                         
                         <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1 gap-2">
                               <div className="flex flex-col min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <h3 className="font-bold text-lg text-white truncate">{t.name}</h3>
                                  </div>
                                  <div className="text-xs text-slate-400 truncate">{t.specialty}</div>
                               </div>
                               
                               {/* Price Display */}
                               <div className="text-right flex flex-col items-end flex-shrink-0">
                                  <span className={`font-bold text-lg leading-none ${t.isSpotPro ? 'text-purple-400' : 'text-white'}`}>
                                    {getPrice(t.isSpotPro).toLocaleString()}원
                                  </span>
                                  {t.isSpotPro ? (
                                    <span className="text-[10px] text-purple-300 font-medium bg-purple-500/20 px-1 rounded mt-1">+3,000원</span>
                                  ) : (
                                    <span className="text-[10px] text-slate-500 mt-1">기본가</span>
                                  )}
                               </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                               <div className="flex items-center space-x-2 min-w-0">
                                  <span className="text-xs text-yellow-400 flex items-center font-bold flex-shrink-0">★ {t.rating}</span>
                                  <span className="text-slate-600 text-xs">|</span>
                                  <span className="text-xs text-slate-400 truncate">후기 120+</span>
                               </div>
                               <div className="flex items-center text-[10px] text-slate-400 flex-shrink-0">
                                  <Clock size={10} className="mr-1" />
                                  <span>3분 이내 도착</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          )}

          {/* STEP 4: LOGIN */}
          {step === 'login' && (
             <div className="animate-fade-in flex flex-col h-full justify-center space-y-8 pb-10">
                <div className="text-center">
                   <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-neon-400 transform rotate-6 border border-white/10 shadow-xl">
                      <Lock size={32} />
                   </div>
                   <h2 className="text-2xl font-extrabold mb-2 text-white">로그인이 필요합니다</h2>
                   <p className="text-slate-400 text-sm">3초 간편 로그인 후 바로 매칭됩니다.</p>
                </div>

                <div className="space-y-3 w-full">
                   <button onClick={handleLogin} disabled={isLoading} className="w-full bg-[#FEE500] text-[#000000] py-4 rounded-xl font-bold text-md flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg">
                      {isLoading ? <Loader2 className="animate-spin" /> : '카카오톡으로 계속하기'}
                   </button>
                   <button onClick={handleLogin} disabled={isLoading} className="w-full bg-[#03C75A] text-white py-4 rounded-xl font-bold text-md flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg">
                      {isLoading ? <Loader2 className="animate-spin" /> : '네이버로 계속하기'}
                   </button>
                </div>
             </div>
          )}

          {/* STEP 5: PAYMENT */}
          {step === 'payment' && (
             <div className="animate-fade-in flex flex-col h-full pt-4">
                <h2 className="text-2xl font-bold mb-6 text-white">결제하기</h2>
                
                <div className="bg-slate-800 p-6 rounded-[2rem] border border-white/5 mb-6 shadow-xl w-full">
                   <div className="flex justify-between mb-6 pb-6 border-b border-white/10">
                      <div className="min-w-0 flex-1 pr-4">
                          <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Service</div>
                          <div className="font-bold text-white text-md truncate">{selectedService}</div>
                      </div>
                      <div className="text-right">
                          <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Trainer</div>
                          <div className="font-bold text-white text-md">{selectedTrainer?.name}</div>
                      </div>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">총 결제금액</span>
                      <span className={`text-2xl font-black ${selectedTrainer?.isSpotPro ? 'text-purple-400' : 'text-neon-400'}`}>
                          {getPrice(selectedTrainer?.isSpotPro).toLocaleString()}원
                      </span>
                   </div>
                   {selectedTrainer?.isSpotPro && (
                      <div className="mt-3 text-xs text-purple-300 bg-purple-900/20 p-2 rounded text-center border border-purple-500/20 flex items-center justify-center">
                         <Zap size={12} className="mr-1 fill-purple-300"/> SPOT PRO 이용 (추가요금 포함)
                      </div>
                   )}
                </div>

                <div className="mt-auto space-y-4 pb-4">
                   <p className="text-center text-slate-500 text-xs">결제 버튼을 누르면 트레이너가 즉시 호출됩니다.</p>
                   <button 
                      onClick={handlePayment} 
                      disabled={isLoading}
                      className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50 flex items-center justify-center transition-all active:scale-95 ${selectedTrainer?.isSpotPro ? 'bg-purple-500 text-white hover:bg-purple-400 shadow-purple-500/30' : 'bg-neon-400 text-slate-900 hover:bg-neon-300 shadow-neon-400/30'}`}
                   >
                      {isLoading ? <Loader2 className="animate-spin mr-3" /> : <CreditCard className="mr-2" size={20} />}
                      {isLoading ? '결제 처리중...' : `${getPrice(selectedTrainer?.isSpotPro).toLocaleString()}원 결제하기`}
                   </button>
                </div>
             </div>
          )}

          {/* STEP 6: COMPLETE */}
          {step === 'complete' && (
             <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center pb-10">
                <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center mb-8 relative shadow-[0_0_50px_rgba(34,197,94,0.4)]">
                   <CheckCircle size={56} className="text-white relative z-10" />
                   <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping opacity-50"></div>
                </div>
                <h2 className="text-3xl font-extrabold mb-4 text-white">결제 완료!</h2>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 mb-8 w-full">
                  <p className="text-xl text-slate-300 leading-snug">
                    <span className={`font-bold ${selectedTrainer?.isSpotPro ? 'text-purple-400' : 'text-neon-400'}`}>{selectedTrainer?.name}</span> 트레이너가<br/>
                    <span className="font-bold text-white border-b-2 border-neon-500/50 pb-0.5">프리웨이트존</span>으로<br/> 
                    이동 중입니다.
                  </p>
                </div>
                
                <div className="bg-slate-800 rounded-2xl p-4 w-full flex items-center space-x-4 mb-8 border border-white/5 shadow-lg">
                   <img src={selectedTrainer?.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                   <div className="text-left flex-1 min-w-0">
                      <div className="text-[10px] text-neon-400 font-bold uppercase mb-0.5 flex items-center"><Loader2 size={10} className="animate-spin mr-1"/> Status</div>
                      <div className="font-bold text-white text-md truncate">이동 중 (약 1분 소요)</div>
                      <div className="text-slate-500 text-xs">잠시만 기다려주세요.</div>
                   </div>
                </div>

                <button onClick={() => navigate('/')} className="text-slate-500 hover:text-white underline text-sm transition-colors p-2">메인으로 돌아가기</button>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};