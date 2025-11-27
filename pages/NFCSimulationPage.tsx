import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nfc, MapPin, ChevronRight, Star, Lock, ArrowLeft, Loader2, CheckCircle, CreditCard } from 'lucide-react';

// Mock Data for Simulation
const SIM_TRAINERS = [
  { id: 't1', name: '김태우', specialty: '3대 운동', rating: 4.9, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', status: 'AVAILABLE', isSpotPro: true },
  { id: 't2', name: '이수진', specialty: '머신 티칭', rating: 4.8, image: 'https://images.unsplash.com/photo-1611672585731-fa1060a7a9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', status: 'AVAILABLE', isSpotPro: false },
];

export const NFCSimulationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'scan' | 'service' | 'trainer' | 'login' | 'payment' | 'complete'>('scan');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-slate-950 flex flex-col h-[90vh] max-h-[800px] border border-white/10 rounded-[2.5rem] relative shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 flex items-center border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <button onClick={() => navigate('/')} className="p-2 -ml-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors">
            <ArrowLeft size={20}/>
          </button>
          <span className="font-bold text-lg ml-2">SPOT NFC</span>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          
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
                </div>
                
                <div className="space-y-4">
                   {SIM_TRAINERS.map(t => (
                      <div 
                        key={t.id}
                        onClick={() => handleTrainerSelect(t)}
                        className="w-full p-4 bg-slate-800 rounded-3xl border border-white/5 hover:border-neon-400 cursor-pointer transition-all flex items-center space-x-4 group active:bg-slate-700"
                      >
                         <img src={t.image} className="w-16 h-16 rounded-2xl object-cover border border-white/10 flex-shrink-0" alt={t.name} />
                         <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                               <div className="flex flex-col">
                                  <div className="flex items-center gap-1.5">
                                    <h3 className="font-bold text-lg text-white truncate">{t.name}</h3>
                                    {t.isSpotPro && (
                                       <span className="flex-shrink-0 text-[9px] bg-purple-500/20 text-purple-400 border border-purple-500/50 px-1.5 py-0.5 rounded font-bold flex items-center">
                                          <Star size={8} className="mr-0.5 fill-purple-400" /> PRO
                                       </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-slate-400 truncate">{t.specialty}</div>
                               </div>
                               <span className="flex-shrink-0 text-[10px] bg-slate-900 text-neon-400 px-2 py-1 rounded font-bold border border-neon-500/30">3분 이내</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                               <span className="text-xs text-yellow-400 flex items-center font-bold">★ {t.rating}</span>
                               <span className="text-slate-600 text-xs">|</span>
                               <span className="text-xs text-slate-400">후기 120+</span>
                            </div>
                         </div>
                         <button className="flex-shrink-0 bg-slate-700 text-white p-2 rounded-full group-hover:bg-neon-400 group-hover:text-slate-900 transition-colors">
                             <ChevronRight size={18} />
                         </button>
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
                      <div>
                          <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Service</div>
                          <div className="font-bold text-white text-md truncate pr-2">{selectedService}</div>
                      </div>
                      <div className="text-right">
                          <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Trainer</div>
                          <div className="font-bold text-white text-md">{selectedTrainer?.name}</div>
                      </div>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">총 결제금액</span>
                      <span className="text-2xl font-black text-neon-400">25,000원</span>
                   </div>
                </div>

                <div className="mt-auto space-y-4 pb-4">
                   <p className="text-center text-slate-500 text-xs">결제 버튼을 누르면 트레이너가 즉시 호출됩니다.</p>
                   <button 
                      onClick={handlePayment} 
                      disabled={isLoading}
                      className="w-full bg-neon-400 text-slate-900 py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:bg-neon-300 disabled:opacity-50 flex items-center justify-center transition-all active:scale-95"
                   >
                      {isLoading ? <Loader2 className="animate-spin mr-3" /> : <CreditCard className="mr-2" size={20} />}
                      {isLoading ? '결제 처리중...' : '25,000원 결제하기'}
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
                    <span className="text-neon-400 font-bold">{selectedTrainer?.name}</span> 트레이너가<br/>
                    <span className="font-bold text-white border-b-2 border-neon-500/50">프리웨이트존</span>으로<br/> 
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