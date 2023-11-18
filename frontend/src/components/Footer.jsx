const Footer = ({setPopulate}) => {
    return (
        <div className="px-[40px] py-[10px] absolute bottom-[0px] w-full cursor-pointer">
            <div onClick={() => setPopulate(true)} className="flex justify-center bg-[#184e77] rounded-[10px] py-[10px]">
                <p className="text-center text-white font-medium text-[22px]">Populate Database</p>
            </div>
        </div>
    );
}

export default Footer;