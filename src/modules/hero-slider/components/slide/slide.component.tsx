import { FC } from "react";
import { IMovieItem } from "types/response-types";

interface ISlideProps {
	slide: IMovieItem;
}

export const Slide: FC<ISlideProps> = ({ slide }) => {
	return <div>Slide</div>;
};
