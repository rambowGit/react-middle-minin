import { ReactNode, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Auth, User } from "../Types/context";

type Props = {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({user: null});
  
  const signIn = (newUser: User, cb: () => void) => {
    setUser(newUser);
    cb();
  }
  
  const signOut = (cb: () => void) => {
    setUser({user: null});
    cb();
  }
  
  const authValue: Auth = {
    user,
    signIn,
    signOut,
  }
  return ( 
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthProvider;