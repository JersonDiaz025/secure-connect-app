export type SetIsAuthenticated = (value: boolean) => void;
export type DataUser = {
  name: string | undefined;
  firstname: string;
  email: string;
  token: string;
};
