"use client";
import { useState, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay  } from "swiper/modules";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Button from "../Button/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SLIDE_IMAGES = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
];

const ProductsSlider = () => {
  const swiperRef = useRef<null | SwiperType>(null);
  const [slides, setSlides] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };
  const prevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-x-4 absolute left-1/2 bottom-4 -translate-x-1/2 z-2">
        {Array.from({ length: slides }).map((_, i) => (
          <div
            className={`${i === activeSlide ? "w-7.5" : "w-2"} h-2 rounded-full bg-white transition-all duration-100 ease-in-out`}
            key={i}
          ></div>
        ))}
      </div>
      <Button
        onClick={prevSlide}
        className="p-2.5 rounded-full bg-white absolute top-1/2 left-8 -translate-y-1/2 z-2 hidden md:inline-flex"
      >
        <IoMdArrowBack className="w-6 h-6" />
      </Button>
      <Button
        onClick={nextSlide}
        className="p-2.5 rounded-full bg-white absolute top-1/2 right-8 -translate-y-1/2 z-2 hidden md:inline-flex"
      >
        <IoMdArrowForward className="w-6 h-6" />
      </Button>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSlides(swiper.slides.length);
          setActiveSlide(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        breakpoints={{
          768: {
            navigation: true,
          },
        }}
      >
        {SLIDE_IMAGES.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-76 md:h-134">
              <Image
                src={img}
                alt="slide-image"
                priority
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
