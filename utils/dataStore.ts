import { Trainer, GymServiceItem, WeeklySchedule, UserRole } from '../types';

// --- DEFAULT DATA (Initial Seed) ---

const DEFAULT_SCHEDULE: WeeklySchedule[] = [
  { day: '월', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '화', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '수', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '목', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '금', isWorkDay: true, start: '09:00', end: '18:00' },
  { day: '토', isWorkDay: false, start: '10:00', end: '15:00' },
  { day: '일', isWorkDay: false, start: '10:00', end: '15:00' },
];

const INITIAL_TRAINERS: Trainer[] = [
  { 
    id: '1', name: '김태우', specialty: '3대 운동/교정', rating: 4.9, available: true, imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', gymName: '스포애니 강남점',
    weeklySchedule: DEFAULT_SCHEDULE
  },
  { 
    id: '2', name: '이수진', specialty: '머신 티칭/라인', rating: 4.8, available: true, imageUrl: 'https://images.unsplash.com/photo-1611672585731-fa1060a7a9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', gymName: '스포애니 강남점',
    weeklySchedule: DEFAULT_SCHEDULE
  },
  { 
    id: '3', name: '박준형', specialty: '파워리프팅', rating: 5.0, available: false, imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', gymName: '스포애니 강남점',
    weeklySchedule: DEFAULT_SCHEDULE
  },
];

const INITIAL_SERVICES: GymServiceItem[] = [
  { id: 'b1', category: 'BODY', name: '등(Back) 집중', description: '광배근/승모근 자극점 찾기', isActive: true },
  { id: 'b2', category: 'BODY', name: '하체(Legs) 루틴', description: '힙업 & 허벅지 라인 정리', isActive: true },
  { id: 'b3', category: 'BODY', name: '가슴(Chest) 볼륨', description: '벤치프레스 & 머신 공략', isActive: true },
  { id: 'b4', category: 'BODY', name: '어깨(Shoulder)', description: '프레임 넓히기', isActive: true },
  { id: 'm1', category: 'MACHINE', name: '랫 풀 다운', description: '등 운동 머신 정복', isActive: true },
  { id: 'm2', category: 'MACHINE', name: '스쿼트', description: '프리웨이트 자세 교정', isActive: true },
  { id: 'm3', category: 'MACHINE', name: '벤치 프레스', description: '가슴 운동의 정석', isActive: true },
  { id: 'c1', category: 'CARE', name: '거북목 케어', description: '경추 스트레칭', isActive: true },
  { id: 'c2', category: 'CARE', name: '허리 통증 케어', description: '요추 안정화', isActive: true },
];

// --- STORAGE KEYS ---
const KEYS = {
  TRAINERS: 'spot_trainers',
  SERVICES: 'spot_services',
  USER: 'spot_user_session'
};

// --- API ---

export const DataStore = {
  // Trainers
  getTrainers: (): Trainer[] => {
    const stored = localStorage.getItem(KEYS.TRAINERS);
    if (!stored) {
      localStorage.setItem(KEYS.TRAINERS, JSON.stringify(INITIAL_TRAINERS));
      return INITIAL_TRAINERS;
    }
    return JSON.parse(stored);
  },
  
  saveTrainers: (trainers: Trainer[]) => {
    localStorage.setItem(KEYS.TRAINERS, JSON.stringify(trainers));
  },

  // Services (CMS)
  getServices: (): GymServiceItem[] => {
    const stored = localStorage.getItem(KEYS.SERVICES);
    if (!stored) {
      localStorage.setItem(KEYS.SERVICES, JSON.stringify(INITIAL_SERVICES));
      return INITIAL_SERVICES;
    }
    return JSON.parse(stored);
  },

  saveServices: (services: GymServiceItem[]) => {
    localStorage.setItem(KEYS.SERVICES, JSON.stringify(services));
  },

  // Auth Session
  getSession: () => {
    const stored = localStorage.getItem(KEYS.USER);
    return stored ? JSON.parse(stored) : null;
  },

  setSession: (user: { name: string, role: UserRole, email?: string }) => {
    localStorage.setItem(KEYS.USER, JSON.stringify(user));
  },

  clearSession: () => {
    localStorage.removeItem(KEYS.USER);
  },

  // Reset
  resetAll: () => {
    localStorage.clear();
    window.location.reload();
  }
};
