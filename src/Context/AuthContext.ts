import { createContext } from "react";
import { Auth } from "../Types/context";

export const AuthContext: React.Context<Auth | null> = createContext<Auth | null>(null);
