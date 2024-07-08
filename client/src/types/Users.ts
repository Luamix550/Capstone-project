export type userClientType = {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  rol: RolUserType;
};

export type RolUserType = "User" | "Admin";
