import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderMain = () => {


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,         
  autoplaySpeed: 3000, 
};


    return(
        <div className="slider-main">
            <Slider {...settings}>
                <div><img src="../../src/assets/slider1.webp" alt="" /></div>
                <div><img src="../../src/assets/slider2.webp" alt="" /></div>
                <div><img src="../../src/assets/slider3.gif" alt="" /></div>
            </Slider>
        </div>
    )
}
export default SliderMain;