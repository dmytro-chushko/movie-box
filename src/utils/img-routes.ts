interface IImgRoutes {
	originalImg: (imgPath: string) => string;
	customImage: (imgPath: string, imgWidth: string | undefined) => string;
}

export const imgRoutes: IImgRoutes = {
	originalImg: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
	customImage: (imgPath, imgWidth) => `https://image.tmdb.org/t/p/w${imgWidth}/${imgPath}`,
};
