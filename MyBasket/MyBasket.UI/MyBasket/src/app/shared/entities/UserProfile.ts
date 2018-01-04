import { UserLoginComponent } from "../../modules/login/user-login-component/user-login.component";
import { UserAddress } from "./UserAddress";

export class UserProfile {
    address: UserAddress;
    peopleAmount: FamilyData; 
    preferences: Array<string>;
    avoidness: Array<string>;
  }
  