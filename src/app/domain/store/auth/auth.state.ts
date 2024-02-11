import { ILogin } from '@/app/core/models/auth.model';

export interface AuthState {
  loginData: ILogin | null;
  isLoading: boolean;
  hasError: string | null;
}