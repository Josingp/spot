export enum UserRole {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  available: boolean;
  rating: number;
  gymName: string; // Associated Gym
  currentZone?: string; // Where they are currently in the gym (e.g., "Floor 2", "Counter")
  eta?: number; // minutes (walking time inside gym)
}

export interface ExerciseCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucid icon name
}

export interface SpotSession {
  id: string;
  categoryId: string;
  duration: number; // changed from literal 20 | 30 to number for flexibility, defaulting to 30 logic elsewhere
  trainerId: string;
  timeSlot: string;
  status: 'booked' | 'completed' | 'cancelled';
  gymId: string;
  gymZone: string; // e.g., "Squat Rack 3"
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