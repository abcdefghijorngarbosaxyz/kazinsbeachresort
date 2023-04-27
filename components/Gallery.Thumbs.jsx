import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import Image from "next/image";

const GalleryThumbs = (props) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className="pointer-events-auto flex h-screen w-full flex-col">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        centeredSlides={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="relative flex h-5/6 w-full items-center justify-center"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index} className="relative h-full w-fit">
            <Image
              src={item.image}
              alt="image"
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
        <button
          onClick={() => props.sendShowState(false)}
          className="absolute top-12 right-12 z-10 text-sm tracking-widest"
        >
          CLOSE
        </button>
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={8}
        modules={[Navigation, Thumbs]}
        className="m-4 h-1/6 w-full"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                layout="fill"
                alt={"small_image"}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

GalleryThumbs.propTypes = {
  images: PropTypes.array.isRequired,
};

export default GalleryThumbs;
