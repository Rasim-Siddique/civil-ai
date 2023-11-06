import { useContext } from "react";
import { AppContext } from "../context/auth";

export function useAuth(){
    return useContext(AppContext);
}