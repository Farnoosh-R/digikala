import CarouselOffSlider from "./CarouselOffSlider";

const CarouselOff = () => {
    return(
        <div className="carousel-off flex bg-[var(--color-red)] container rounded-[10px] py-4 h-[275px]">
            <div className="basis-[15%] text-center text-white">
                <img className="block mx-auto" src="../../../src/assets/Amazings.svg" alt="" />
                <h4>counter</h4>
                <img className="block mx-auto" src="../../../src/assets/Amazing1.svg" alt="" />
                <a className="text-[12px]" href="#" >مشاهده همه > </a>
            </div>
            <div className="basis-[85%]"><CarouselOffSlider /></div>

        </div>
    )
}
export default CarouselOff;