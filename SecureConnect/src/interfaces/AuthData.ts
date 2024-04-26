export interface AuthData {
  email: string;
  firstName?: string;
  password: string;
  confirmPass: string;
}

export interface UseAuthHook {
  formData: AuthData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
