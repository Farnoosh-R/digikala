import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";








const NavLogo = () => {
    return(
        <>
        <div className="nav-logo flex justify-between py-2 px-7">
            <div className="flex gap-2">
            <img className="w-[195px] ml-3" src="../../../src/assets/logo.svg" alt="logo" />
            <div className="flex items-center bg-zinc-200 w-[600px] rounded-[10px]" type="text">
                <span className="text-zinc-400 inline-block pr-4"><IoSearch /></span><span className="inline-block mr-4">جستجو</span>
            </div>
            </div>

            <div className="flex text-black">
                <a className="text-[25px] mt-2" href="#"><FaRegBell /></a>
                <button className="px-3 py-2 mx-5 border border-zinc-200 rounded-[10px]">
                    <div className="flex">
                        <div className="mt-1 ml-2"><IoEnterOutline /></div><div>ورود | ثبتنام</div>
                    </div>
                    </button>
                    <div className="text-black text-[25px] mt-2"><RiShoppingCartLine /></div>


            </div>
            
        </div>
        </>
    )
}
export default NavLogo;