import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { IMovieItem } from "types/response-types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "./components/slide";

interface IHeroSliderProps {
	slides: IMovieItem[];
}

export const HeroSlider: FC<IHeroSliderProps> = ({ slides }) => {
	return (
		<div>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{slides &&
					slides.map(slide => (
						<SwiperSlide key={slide.id}>
							<Slide slide={slide} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};
