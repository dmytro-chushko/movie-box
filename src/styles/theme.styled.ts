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
		logo: "1.67vw",
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
		logoSize: "3.47vw",
		logoGap: "1.67vw",
		logoWidth: "12.92vw",
		mainPaddingLeft: "6.6vw",
		mainPaddingRight: "6.6vw",
		headerPaddingTop: "1.04vw",
		headerPaddingBottom: "1.04vw",
		inputPadding: "0.375em 2.5em 0.375em 0.72em",
		borderRadius: "6px",
		searchButtonWidth: "2.5em",
	},
	border: {
		primaryBorder: "2px solid #D1D5DB",
	},
});
