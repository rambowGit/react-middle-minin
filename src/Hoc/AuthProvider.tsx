import { ReactNode, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { Auth, User } from "../Types/context";

type Props = {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [userValue, { setItem, removeItem }] = useLocalStorage('user');
  const [user, setUser] = useState<User>({user: userValue || null});
  
  const signIn = (newUser: User, cb: () => void) => {
    if (!newUser.user) {
      return;
    }
    
    setItem(newUser.user);
    setUser(newUser);
    cb();
  }
  
  const signOut = (cb: () => void) => {
    setUser({user: null});
    removeItem();
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