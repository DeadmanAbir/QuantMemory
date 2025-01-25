import appConfig from "@/app.config";

export const useAuth = () => {
    const signIn = () => {
      localStorage.setItem("isAuthenticated", "true");
    };
  
    const signOut = () => {
      localStorage.removeItem("isAuthenticated");
    };
  
    const isLogged = () => appConfig.authenticated
  
    return { signIn, signOut, isLogged };
  };
  
  export type AuthContext = ReturnType<typeof useAuth>;