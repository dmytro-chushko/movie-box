import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { AppContext } from './app-context.provider';
import { Theme } from '../styles/theme.style';

interface IAppThemeProvider {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: IAppThemeProvider) => {
  const { isDark } = useContext(AppContext);

  return <ThemeProvider theme={Theme(isDark)}>{children}</ThemeProvider>;
};
