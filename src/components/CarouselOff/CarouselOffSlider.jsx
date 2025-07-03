import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

const CarouselOffSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return(
      <div className="carousel-off-slider">

            <Slider {...settings}>
                <div className="bg-white p-3 !mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>

                                <div className="bg-white p-3 mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>

                                <div className="bg-white p-3 mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>

                                <div className="bg-white p-3 mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>

                                <div className="bg-white p-3 mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>

                                <div className="bg-white p-3 mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>

                                <div className="bg-white p-3 mx-2">
                    <img src="../../src/assets/carouselOff1.webp" alt="" />
                    <div className="truncate text-[var(--color-gray)] mb-2 mt-3">هدفون بلوتوثی هایلو مدل X1 2023</div>
                    <div className="flex justify-between">
                        <div className="bg-[var(--color-red)] h-[23px] px-2 rounded-[30px] text-white">13%</div>
                        <div className="text-center">
                            <span>۱,۳۰۰,۰۰۰ تومان</span>
                            <div className="text-zinc-400">۱,۵۰۰,۰۰۰</div>
                        </div>
                    </div>
                </div>
                
            </Slider>
  </div>
  )
};
export default CarouselOffSlider;
