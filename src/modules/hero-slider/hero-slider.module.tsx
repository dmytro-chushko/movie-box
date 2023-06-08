import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { IMovieItem } from "types/response-types";
import { Slide } from "./components/slide";
import { ModalTrailer } from "./components/modal-trailer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as Styled from "./hero-slider.styled";

interface IHeroSliderProps {
	slides: IMovieItem[];
}

export const HeroSlider: FC<IHeroSliderProps> = ({ slides }) => {
	return (
		<Styled.SliderContainer>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				{slides &&
					slides.map(slide => (
						<SwiperSlide key={slide.id}>
							<Slide slide={slide} />
						</SwiperSlide>
					))}
			</Swiper>
			<ModalTrailer />
		</Styled.SliderContainer>
	);
};
