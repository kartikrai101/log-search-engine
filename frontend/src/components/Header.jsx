const Header = (props) => {
    return (
        <div className="flex items-center justify-between px-[40px] py-[18px] bg-gradient-to-r from-[#184e77] via-[#1e6091] to-[#1a759f]">
        {/* // <div className="flex items-center justify-between px-[40px] py-[18px] bg-gradient-to-r from-[#582f0e] via-[#7f4f24] to-[#936639]"> */}
            <div className="text-white font-bold text-[30px]">
                LogEngine
            </div>
            <div className="flex space-x-5 text-[#184e77]">
                <div className="border-[1px] bg-white border-white px-[15px] py-[2px] rounded-[3px] text-center font-medium cursor-pointer">Login</div>
                <div className="border-[1px] bg-white  border-white px-[15px] py-[2px] rounded-[3px] text-center font-medium cursor-pointer">Logout</div>
                <div className="border-[1px] bg-white  border-white px-[15px] py-[2px] rounded-[3px] text-center font-medium cursor-pointer">Register</div>
            </div>
            {/* <div className="">

            </div> */}
        </div>
    );
}

export default Header;