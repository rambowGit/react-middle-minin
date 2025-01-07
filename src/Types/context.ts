export type User = {
  user: string | null;  
}

export interface Auth {
  user: User;
  signIn: (newUser: User, cb: ( )=> void) => void;
  signOut: (cb: ( )=> void) => void;
}