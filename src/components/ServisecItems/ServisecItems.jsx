import { useEffect } from "react";


const ServisecItems = ({ data }) => {




    

  return (
    <div className="servisec-items flex gap-16 text-center justify-center py-4">
      {/* <ul>
        {data.map((item, index) => {
          return(
            <li key={index}>{item.name}</li>
          )
        })}
      </ul> */}

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/tala-digital.png"
          alt=""
        />
        <div>طلای دیجیتال</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/ghesti.png"
          alt=""
        />
        <div>خرید قسطی</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/ersaleruz.jpg"
          alt=""
        />
        <div>ارسال روز آرایشی‌بهداشتی</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/mobile.png"
          alt=""
        />
        <div>تخفیف موبایل‌کارکرده</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/moharam.png"
          alt=""
        />
        <div>پوشاک محرم</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/sebeyek.png"
          alt=""
        />
        <div>سه به قیمت یک!</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/lavazemekhane.jpg"
          alt=""
        />
        <div>پرتخفیف‌های لوازم‌خانه</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/talaphisici.jpg"
          alt=""
        />
        <div>تخفیف طلای‌فیزیکی</div>
      </div>

      <div className="basis-[70px]">
        <img
          className="w-[70px] block mx-auto mb-3"
          src="../../../src/assets/hozuri.png"
          alt=""
        />
        <div>شگفت فروشگاه‌حضوری</div>
      </div>
    </div>
  );
};
export default ServisecItems;
