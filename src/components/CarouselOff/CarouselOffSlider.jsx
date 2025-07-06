import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const CarouselOffSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="carousel-off-slider w-full overflow-hidden">
      <Slider {...settings}>
        <div className="px-[2px]">
          <div className="bg-white p-3">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff1.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff2.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff3.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff4.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff5.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff6.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff7.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>

        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff8.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>
        <div className="px-[2px]">
          <div className="bg-white p-3 ">
            <img
              className="w-full h-auto object-contain"
              src="../../src/assets/carouselOff1.webp"
              alt=""
            />
            <div className="truncate text-[var(--color-gray)] mb-2 mt-3">
              هدفون بلوتوثی هایلو مدل X1 2023
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <span>۱,۳۰۰,۰۰۰ تومان</span>
                <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
              </div>
              <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">
                13%
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default CarouselOffSlider;
