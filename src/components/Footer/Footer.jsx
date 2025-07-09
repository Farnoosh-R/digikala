import { FaAngleUp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer py-4">
      <div className="container flex justify-between mb-5">
        <div>
          <img className="mb-5" src="../../src/assets/logo.svg" alt="" />
          <div>تلفن پشتیبانی ...</div>
        </div>
        <button className="border border-[var(--color-gray)] px-3 py-2 rounded-[10px] flex items-center">
          <span className="ml-3">بازگشت ب بالا</span>
          <FaAngleUp />
        </button>
      </div>

      <div className="flex container text-center">
        <div className="flex-1">
          <img
            className="block mx-auto"
            src="../../src/assets/footer1.svg"
            alt=""
          />
          <div>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</div>
        </div>

        <div className="flex-1">
          <img
            className="block mx-auto"
            src="../../src/assets/footer2.svg"
            alt=""
          />
          <div>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</div>
        </div>

        <div className="flex-1">
          <img
            className="block mx-auto"
            src="../../src/assets/footer3.svg"
            alt=""
          />
          <div>امکان پرداخت در محل</div>
        </div>

        <div className="flex-1">
          <img
            className="block mx-auto"
            src="../../src/assets/footer4.svg"
            alt=""
          />
          <div>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</div>
        </div>

        <div className="flex-1">
          <img
            className="block mx-auto"
            src="../../src/assets/footer5.svg"
            alt=""
          />
          <div>هفت روز ضمانت بازگشت کالا</div>
        </div>
      </div>

      <div className="flex container">
        <div className="flex-1 leading-8">
          <ul>
            <li className="font-bold">با دیجی‌کالا</li>
            <li>اتاق خبر دیجی‌کالا</li>
            <li>فروش در دیجی‌کالا</li>
            <li>فرصت‌های شغلی</li>
            <li>گزارش تخلف در دیجی‌کالا</li>
            <li>تماس با دیجی‌کالا</li>
            <li>درباره دیجی‌کالا</li>
          </ul>
        </div>

        <div className="flex-1 leading-8">
          <ul>
            <li className="font-bold">خدمات مشتریان</li>
            <li>پاسخ به پرسش‌های متداول</li>
            <li>رویه‌های بازگرداندن کالا</li>
            <li>شرایط استفاده</li>
            <li>حریم خصوصی</li>
            <li>گزارش باگ</li>
          </ul>
        </div>

        <div className="flex-1 leading-8">
          <ul>
            <li className="font-bold">راهنمای خرید از دیجی‌کالا</li>
            <li>نحوه ثبت سفارش</li>
            <li>رویه ارسال سفارش</li>
            <li>شیوه‌های پرداخت</li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="mb-[30px] text-[16px]">همراه ما باشید!</div>
          <div className="flex mb-[20px]">
            <div className="flex-1 text-[35px] text-[var(--color-gray)]">
              <FaInstagram />
            </div>
            <div className="flex-1 text-[35px] text-[var(--color-gray)]">
              <FaLinkedin />
            </div>
            <div className="flex-1 text-[35px] text-[var(--color-gray)]">
              <FaTwitter />
            </div>
            <div className="flex-1">
              <img
                className="w-[40px]"
                src="../../src/assets/aparat.svg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="text-[16px] mb-[20px]">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </div>
            <div className="flex">
              <input
                className="flex-4 bg-zinc-200 border-transparent rounded-[10px] p-3"
                type="text"
                placeholder="ایمیل شما"
              />
              <button className="flex-1 bg-zinc-300 text-white p-3 rounded-[10px] mr-2">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="apps flex justify-between items-center bg-slate-800 rounded-[10px] p-4 container">
        <div className="flex items-center">
          <img className="w-[44px]" src="../../src/assets/footerlogo2.webp" alt="" />
          <div className="text-[20px] text-white mr-4 font-bold">دانلود اپلیکیشن دیجی کالا</div>
        </div>

        <div className="flex gap-2">
            <img src="../../src/assets/coffe-bazzar.svg" alt="" />
            <img src="../../src/assets/myket.svg" alt="" />
            <img src="../../src/assets/sib-app.svg" alt="" />
            <img className="bg-white rounded-[10px] p-3" src="../../src/assets/More.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
