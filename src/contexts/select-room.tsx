import { ReactNode, createContext, useContext, useState } from "react";


type SelectRoomContextType = {
  id: number,
  setId: (id: number) => void;
}

const SelectRoomContext = createContext<SelectRoomContextType>({} as SelectRoomContextType);

const SelectRoomContextProvider = (props: {
  children: ReactNode
}) => {
  const [id, setId] = useState(0);

  return (
    <SelectRoomContext.Provider value={{ id, setId }}>
      {props.children}
    </SelectRoomContext.Provider>
  )
}

const useSelectRoomContextProvider = () => {
  const contextAlredyExists = useContext(SelectRoomContext);
  if (!contextAlredyExists) {
    throw new Error("context not exists [SelectRoomContextProvider]")
  }

  return contextAlredyExists;
}

export {
  SelectRoomContextProvider,
  useSelectRoomContextProvider,
}