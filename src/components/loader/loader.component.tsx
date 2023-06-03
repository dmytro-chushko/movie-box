import { RotatingLines } from "react-loader-spinner";

import * as Styled from "./loader.styled";

export interface ILoader {
	show: boolean;
}

export const Loader = ({ show }: ILoader) => {
	return (
		<Styled.LoaderBackdrop show={show}>
			<RotatingLines
				strokeColor="#8A8A8E"
				strokeWidth="5"
				animationDuration="0.75"
				width="200"
				visible={true}
			/>
		</Styled.LoaderBackdrop>
	);
};
