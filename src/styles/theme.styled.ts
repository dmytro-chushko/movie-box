export interface ITheme {
	colors: {
		primaryChangingBgc: string;
		primaryChangingColor: string;
		primaryColor: string;
	};
	fontSize: {
		logo: string;
		base: string;
		regular: string;
		medium: string;
		large: string;
	};
	fontWeight: {
		regular: string;
		medium: string;
		bold: string;
	};
	lineHeight: {
		hero: string;
	};
	size: {
		logoSize: string;
		logoGap: string;
		logoWidth: string;
		mainPaddingLeft: string;
		mainPaddingRight: string;
		headerPaddingTop: string;
		headerPaddingBottom: string;
		inputPadding: string;
		borderRadius: string;
		searchButtonWidth: string;
		themeSwitcherHeight: string;
		themeSwithcerWidth: string;
	};
	border: {
		primaryBorder: string;
	};
}

export const theme = (isDark?: boolean): ITheme => ({
	colors: {
		primaryChangingBgc: isDark ? "#000000" : "#FFFFFF",
		primaryChangingColor: isDark ? "#FFFFFF" : "#000000",
		primaryColor: "#FFFFFF",
	},
	fontSize: {
		logo: "24px",
		base: "14px",
		regular: "1em",
		medium: "1.142em",
		large: "1.285em",
	},
	fontWeight: {
		regular: "400",
		medium: "500",
		bold: "700",
	},
	lineHeight: {
		hero: "1.71em",
	},
	size: {
		logoSize: "50px",
		logoGap: "24px",
		logoWidth: "186px",
		mainPaddingLeft: "6.6vw",
		mainPaddingRight: "6.6vw",
		headerPaddingTop: "15px",
		headerPaddingBottom: "15px",
		inputPadding: "0.375em 2.5em 0.375em 0.72em",
		borderRadius: "6px",
		searchButtonWidth: "2.5em",
		themeSwitcherHeight: "30px",
		themeSwithcerWidth: "60px",
	},
	border: {
		primaryBorder: "2px solid #D1D5DB",
	},
});