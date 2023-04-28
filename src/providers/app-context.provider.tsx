import { createContext, useState } from 'react';
import { TypeSetState } from '../types/set-state.types';

interface IAppProvider {
  children: React.ReactNode;
}

interface IAppContext {
  isDark: boolean;
  setIsDark: TypeSetState<boolean> | null;
}

export const AppContext = createContext<IAppContext>({
  isDark: true,
  setIsDark: null,
});

export const AppContextProvider = ({ children }: IAppProvider) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};
