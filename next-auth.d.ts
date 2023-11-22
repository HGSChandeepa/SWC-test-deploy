 import { JWT, DefaultJWT ,} from "next-auth/jwt";
 import { DefaultUser } from "next-auth";


 declare module "next-auth"{
    interface User extends DefaultUser{
        role : string,
    }
 }

  declare module "next-auth/jwt"{
    interface JWT extends DefaultJWT{
        role : string,
    }
  }