
export enum UserRole {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface WeeklySchedule {
  day: string; // 'mon', 'tue', ...
  isWorkDay: boolean;
  start: string; // "09:00"
  end: string;   // "18:00"
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  available: boolean;
  rating: number;
  gymName: string; // Associated Gym
  
  // Schedule
  weeklySchedule?: WeeklySchedule[];
  
  // Deprecated / Optional for backwards compatibility with mocks
  currentZone?: string; 
  eta?: number; 
  shiftStart?: string; 
  shiftEnd?: string; 
}

export interface ExerciseCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucid icon name
}

// For Admin CMS
export interface GymServiceItem {
  id: string;
  category: 'BODY' | 'MACHINE' | 'CARE';
  name: string;
  description: string;
  isActive: boolean;
}

export interface SpotSession {
  id: string;
  categoryId: string;
  duration: number; 
  trainerId: string;
  timeSlot: string;
  status: 'booked' | 'completed' | 'cancelled';
  gymId: string;
  gymZone: string; 
  price: number;
}

export interface StatData {
  name: string;
  value: number;
}

export type PaymentMethod = 'CREDIT_CARD' | 'KAKAO_PAY' | 'NAVER_PAY' | 'POINT';

export interface PaymentTransaction {
  id: string;
  userId: string;
  amount: number;
  method: PaymentMethod;
  date: string;
  type: 'CHARGE' | 'USE';
}

export interface AuthState {
  isAuthenticated: boolean;
  role: UserRole;
  user?: {
    name: string;
    email: string;
  };
}
