import { LuMenu } from "react-icons/lu";
import { CiPercent } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineGold } from "react-icons/ai";
import { RiFireLine } from "react-icons/ri";
import { CiMobile2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const NavCat = () => {
    return(
        <>
        <div className="nav-cat flex items-center justify-between px-7 pb-1 border-b-2 border-zinc-300">
            <div className="flex gap-4 text-zinc-500">
                <div className="flex items-center text-zinc-700">
                    <div><LuMenu /></div><span>دسته بندی کالاها</span>
                </div>
                <div className="flex items-center">
                    <div><CiPercent /></div><span>شگفت‌انگیزها</span>
                </div>
                <div className="flex items-center">
                    <div><RiShoppingBasketLine /></div><span>سوپرمارکت</span>
                </div>
                <div className="flex items-center">
                    <div><AiOutlineGold /></div><span>طلای دیجیتال</span>
                </div>
                <div className="flex items-center">
                    <div><RiFireLine /></div><span>پرفروش‌ترین‌ها</span>
                </div>
                         <div className="flex items-center">
                    <div><CiMobile2 /></div><span>خرید کالای کارکرده</span>
                </div>
                <div>سوالی دارید؟</div>
               <div>در دیجی‌کالا بفروشید!</div>
            </div>

            <div>
                <button className="flex items-center bg-orange-100 text-orange-600 px-3 py-2 rounded-[30px]"><div className="text-[25px]"><CiLocationOn /></div><span>شهر خود را انتخاب کنید</span></button>
            </div>
        </div>
        </>
    )
}
export default NavCat;