import {useState, useEffect, useRef} from 'react';

const optionArray = [
    "Full-Text search (default)", "Level", "Message", "ResourceId", "Timestamp", "TraceId", "SpanId", "Commit", "Metadata.parentResourceId"
]

const MainContent = () => {
    const [dropdown, setDropdown]  = useState(false);
    const [option, setOption] = useState(1);
    const [queryString, setQueryString] = useState("");

    function inputChangeHandler(event){
        setQueryString(event.target.value)
    }

    return (
        <div className="h-[80%] px-[40px] mt-[20px]">
            <div className="flex justify-between items-center space-x-5">
                <div className="w-[70%]">
                    <input 
                        type="text" 
                        placeholder="Search string" 
                        className="border-[1px] border-[#495057] rounded-[5px] w-[100%] px-[10px] py-[5px]"  
                        onChange={inputChangeHandler}
                        value={queryString}
                    />
                </div>
                <div className="w-[30%] relative">
                    <div onClick={() => setDropdown(!dropdown)} className='w-[100%] flex items-center justify-between border-[1px] border-[#495057] rounded-[5px] px-[10px] py-[5px] text-[#495057] cursor-pointer'>
                        <p>{optionArray[option-1]}</p>
                        <img src="/assets/arrow.png" className="w-[12px]" alt="dropdown" />
                    </div>
                    {
                        dropdown ? (
                            <div className='w-[100%] flex-col  border-[#495057] rounded-[5px] shadow-xl absolute text-[#495057] px-[5px] py-[5px] space-y-1'>
                                <div onClick={() => {setOption(2); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>Level</div>
                                <div onClick={() => {setOption(3); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>Message</div>
                                <div onClick={() => {setOption(4); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>ResourceId</div>
                                <div onClick={() => {setOption(5); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>Timestamp</div>
                                <div onClick={() => {setOption(6); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>TraceId</div>
                                <div onClick={() => {setOption(7); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>SpanId</div>
                                <div onClick={() => {setOption(8); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>Commit</div>
                                <div onClick={() => {setOption(9); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>Metadata.parentResourceId</div>
                                <div onClick={() => {setOption(1); setDropdown(false)}} className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>Full-Text search (default)</div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='mt-[10px] h-[90%]'>
                {queryString}
            </div>
        </div>
    );
}

export default MainContent;