export interface UserState {
  nameUser: string;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setNameUser: (value: string) => void;
}
