export interface AuthData {
  email: string;
  firstname: string;
  password: string;
  confirmPass: string;
}

export interface UserData {
  id: string;
  firstname: string;
  email: string;
}

export interface UseAuthHook {
  formData: AuthData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
