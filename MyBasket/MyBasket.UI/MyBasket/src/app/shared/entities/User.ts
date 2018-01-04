import { UserProfile } from "./UserProfile";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  gender: number;
  profile: UserProfile;
}
