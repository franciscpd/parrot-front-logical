export type User = {
  name: string;
  email: string;
  apartment: string;
};

export type UserRequest = User & {
  password: string;
  confirmPassword: string;
};
