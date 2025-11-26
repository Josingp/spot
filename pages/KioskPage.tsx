import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, CreditCard, Check, Smartphone, Printer, ChevronLeft, Home, Zap, ArrowDown, Nfc } from 'lucide-react';
import { DataStore } from '../utils/dataStore';
import { GymServiceItem } from '../types';

type KioskStep = 'attract' | 'menu' | 'phone' | 'payment' | 'processing' | 'finish';

interface KeypadButtonProps {
    val: string | React.ReactNode;
    onClick: () => void;
    isAction?: boolean;
}

const KeypadButton: React.FC<KeypadButtonProps> = ({ val, onClick, isAction = false }) => (
    <button 
      onClick={onClick}
      className={`h-24 rounded-2xl text-3xl font-bold transition-all active:scale-95 flex items-center justify-center
        ${isAction 
          ? 'bg-slate-800 text-slate-300' 
          : 'bg-slate-800 border border-white/10 text-white hover:border-neon-400'
        }`}
    >
      {val}
    </button>
);

export const KioskPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<KioskStep>('attract');
  const [selectedItem, setSelectedItem] = useState<GymServiceItem | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [services, setServices] = useState<GymServiceItem[]>([]);

  useEffect(() => {
    setServices(DataStore.getServices());
  }, []);

  // --- Handlers ---

  const handleMenuSelect = (item: GymServiceItem) => {
    setSelectedItem(item);
    setStep('phone');
  };

  const handlePhoneInput = (num: string) => {
    if (phoneNumber.length < 11) {
      setPhoneNumber(prev => prev + num);
    }
  };

  const handlePhoneDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handlePaymentStart = () => {
    if (phoneNumber.length < 10) {
      alert("휴대폰 번호를 올바르게 입력해주세요.");
      return;
    }
    // Simulate linking phone number to system
    DataStore.setSession({ name: `${phoneNumber}님`, role: 'USER' as any }); 
    
    setStep('payment');
    // Simulate card insertion delay
    setTimeout(() => {
        setStep('processing');
        // Simulate processing time
        setTimeout(() => {
            setStep('finish');
            // Auto reset after 10 seconds
            setTimeout(() => {
                setStep('attract');
                setPhoneNumber('');
                setSelectedItem(null);
            }, 15000);
        }, 2000);
    }, 2000);
  };

  // --- Components ---

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-neon-500 overflow-hidden flex flex-col relative">
      
      {/* Kiosk Header */}
      <header className="h-20 bg-slate-900 border-b border-white/10 flex items-center justify-between px-8 shrink-0 z-20">
         <div className="flex items-center text-neon-400">
             <div className="w-10 h-10 bg-neon-400 text-slate-900 rounded-lg flex items-center justify-center mr-3 font-bold">
                 <Zap size={24} fill="currentColor" />
             </div>
             <span className="text-2xl font-extrabold tracking-tight">SPOT <span className="text-white font-light">KIOSK</span></span>
         </div>
         {step !== 'attract' && (
             <button onClick={() => setStep('attract')} className="flex items-center text-slate-400 bg-slate-800 px-6 py-3 rounded-full font-bold">
                 <Home size={20} className="mr-2" /> 처음으로
             </button>
         )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col">
        
        {/* STEP 1: ATTRACT SCREEN */}
        {step === 'attract' && (
            <div 
                onClick={() => setStep('menu')}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-b from-slate-950 to-slate-900"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                </div>
                <div className="relative z-10 text-center space-y-8">
                    <div className="inline-block bg-neon-400 text-slate-900 px-6 py-2 rounded-full font-bold text-xl mb-4 animate-bounce">
                        👆 화면을 터치해주세요
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black text-white leading-tight">
                        운동하다 막히면<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-green-400">태그(Tap)</span> 하세요
                    </h1>
                    <p className="text-3xl text-slate-400 font-light">
                        1회 이용권 구매 • 30분 포인트 레슨
                    </p>
                </div>
            </div>
        )}

        {/* STEP 2: MENU SELECTION */}
        {step === 'menu' && (
            <div className="flex-1 p-8 flex flex-col animate-fade-in">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    어떤 이용권을 구매하시겠어요?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1 overflow-y-auto pb-20">
                    {[
                        { id: 'ticket_1', name: 'SPOT 1회권', description: '30분 포인트 레슨', price: 25000 },
                        { id: 'ticket_3', name: 'SPOT 3회권', description: '5% 할인 패키지', price: 71250 },
                        { id: 'ticket_5', name: 'SPOT 5회권', description: '10% 할인 패키지', price: 112500 },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => handleMenuSelect({ ...item, category: 'BODY' } as any)}
                            className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-neon-500 hover:text-slate-900 hover:border-neon-500 transition-all group shadow-2xl"
                        >
                            <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-neon-400 group-hover:bg-white group-hover:text-slate-900 transition-colors mb-2">
                                <Dumbbell size={48} />
                            </div>
                            <div className="text-center">
                                <span className="text-3xl font-bold block mb-2">{item.name}</span>
                                <span className="text-2xl font-medium text-slate-400 group-hover:text-slate-700">{item.price.toLocaleString()}원</span>
                                <span className="text-sm text-slate-500 block mt-2 group-hover:text-slate-600">{item.description}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* STEP 3: PHONE NUMBER */}
        {step === 'phone' && (
            <div className="flex-1 flex flex-col animate-fade-in">
                <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-2xl mx-auto w-full">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-white mb-4">휴대폰 번호를 입력해주세요</h2>
                        <p className="text-2xl text-neon-400 font-bold bg-slate-800/80 px-6 py-3 rounded-xl inline-flex items-center">
                            <Smartphone className="mr-3" />
                            트레이너가 회원님을 식별하는 ID입니다
                        </p>
                    </div>

                    {/* Display */}
                    <div className="w-full bg-slate-900 border-2 border-neon-500 rounded-2xl h-24 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                        <span className="text-5xl font-mono font-bold text-white tracking-widest">
                            {phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') || '010-____-____'}
                        </span>
                    </div>

                    {/* Keypad */}
                    <div className="w-full grid grid-cols-3 gap-4 mb-8">
                        {[1,2,3,4,5,6,7,8,9].map(n => (
                            <KeypadButton key={n} val={n.toString()} onClick={() => handlePhoneInput(n.toString())} />
                        ))}
                        <KeypadButton val="지움" isAction onClick={handlePhoneDelete} />
                        <KeypadButton val="0" onClick={() => handlePhoneInput('0')} />
                        <button 
                            onClick={handlePaymentStart}
                            className="h-24 bg-neon-500 text-slate-900 text-2xl font-bold rounded-2xl flex items-center justify-center hover:bg-neon-400 active:scale-95 transition-all shadow-lg"
                        >
                            결제하기
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* STEP 4: PAYMENT SIMULATION */}
        {step === 'payment' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900 relative">
                <div className="text-center space-y-12 relative z-10">
                    <div>
                        <h2 className="text-5xl font-bold text-white mb-4">결제를 진행합니다</h2>
                        <p className="text-2xl text-slate-400">신용카드 또는 삼성페이를 준비해주세요</p>
                    </div>

                    <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 max-w-md mx-auto relative overflow-hidden">
                        <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
                            <div className="text-left">
                                <div className="text-slate-400 mb-1">상품명</div>
                                <div className="text-2xl font-bold text-white">{selectedItem?.name}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-slate-400 mb-1">결제금액</div>
                                <div className="text-3xl font-bold text-neon-400">{(selectedItem as any)?.price?.toLocaleString()}원</div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800 rounded-2xl h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-600 relative">
                             <div className="absolute top-4 right-4 text-neon-500 animate-pulse">
                                 <CreditCard size={32} />
                             </div>
                             <div className="w-full h-full flex items-center justify-center">
                                 <div className="w-32 h-48 bg-gradient-to-tr from-slate-600 to-slate-500 rounded-xl shadow-2xl transform rotate-12 animate-pulse flex items-center justify-center">
                                     <div className="w-8 h-8 bg-yellow-400/50 rounded-md"></div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="animate-bounce text-neon-400 flex flex-col items-center font-bold text-xl">
                        <ArrowDown size={32} className="mb-2" />
                        <span>단말기 하단에 카드를 꽂아주세요</span>
                    </div>
                </div>
            </div>
        )}

        {/* STEP 4.5: PROCESSING */}
        {step === 'processing' && (
             <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900">
                 <div className="w-32 h-32 border-4 border-slate-700 border-t-neon-400 rounded-full animate-spin mb-8"></div>
                 <h2 className="text-3xl font-bold text-white animate-pulse">승인 중입니다...</h2>
                 <p className="text-slate-500 mt-4">카드를 제거하지 마세요</p>
             </div>
        )}

        {/* STEP 5: FINISH INSTRUCTION */}
        {step === 'finish' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-500/5"></div>
                
                <div className="bg-white text-slate-900 p-12 rounded-[2rem] shadow-2xl max-w-2xl w-full text-center relative z-10 transform scale-100 animate-fade-in">
                    <div className="w-24 h-24 bg-neon-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <Check size={48} strokeWidth={4} />
                    </div>
                    <h2 className="text-5xl font-black mb-6">등록 완료!</h2>
                    
                    <div className="space-y-6 mb-10">
                        <div className="flex items-center justify-center space-x-4 bg-slate-100 p-6 rounded-2xl border-2 border-slate-200">
                            <Nfc size={48} className="text-blue-600" />
                            <div className="text-left">
                                <p className="text-xl font-bold text-slate-800">운동하다 도움이 필요하면?</p>
                                <p className="text-lg text-slate-600">기구에 붙은 <span className="text-blue-600 font-bold">스티커에 핸드폰을 태그(Tap)</span>하세요.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-2xl font-bold text-slate-700 leading-relaxed mb-6">
                        트레이너가 회원님의 위치로<br/>즉시 달려갑니다.
                    </p>

                    <div className="mt-8 text-slate-400 text-sm font-medium">
                        10초 후 메인화면으로 돌아갑니다.
                    </div>
                </div>
            </div>
        )}

      </main>

      {/* Footer Info */}
      <footer className="bg-slate-900 py-4 text-center text-slate-600 text-sm border-t border-white/5">
        <p>키오스크 ID: GN-001 | 가맹점: 스포애니 강남점 | 문의: 1588-0000</p>
      </footer>
    </div>
  );
};