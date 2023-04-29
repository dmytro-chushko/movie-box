export interface ITheme {
  colors: {
    mainBgc: string;
    mainColor: string;
  };
  fontSize: {
    logo: string;
  };
  fontWeight: {
    regular: string;
    medium: string;
    bold: string;
  };
  size: {
    logoSize: string;
    logoGap: string;
    logoWidth: string;
    mainPaddingLeft: string;
    mainPaddingRight: string;
    headerPaddingTop: string;
    headerPaddingBottom: string;
  };
}

export const theme = (isDark?: boolean): ITheme => ({
  colors: {
    mainBgc: isDark ? '#000000' : '#FFFFFF',
    mainColor: isDark ? '#FFFFFF' : '#000000',
  },
  fontSize: {
    logo: '1.67vw',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  size: {
    logoSize: '3.47vw',
    logoGap: '1.67vw',
    logoWidth: '12.92vw',
    mainPaddingLeft: '6.6vw',
    mainPaddingRight: '6.6vw',
    headerPaddingTop: '1.04vw',
    headerPaddingBottom: '1.04vw',
  },
});
