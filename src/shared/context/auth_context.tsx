import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";


type AuthContextType = {
  useData:UserDataType;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
  resetPassword: () => void;
}


const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type UserDataType = {
  id: string;
  name: string;
  avatar_url: string;
  email: string;
}


function AuthContextProvider({children}:{children: ReactNode}){
  const [ useData,setUserData ] = useState<UserDataType>({} as UserDataType);

  const signIn = () => {
  
  }

  const signUp = () => {
  
  }

  const signOut = () => {
  
  }

  const resetPassword = () => {

  }

  return(
    <AuthContext.Provider value={{
      useData,
      signIn,
      signUp,
      signOut,
      resetPassword,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuthProvider(){
  const useContextAlreadyExists = useContext(AuthContext);

  if(!useContextAlreadyExists){
    throw new Error('o context não foi definido');
  }
  return useContextAlreadyExists;
}

export { useAuthProvider,AuthContextProvider };