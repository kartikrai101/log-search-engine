import {useState, useEffect, useRef} from 'react';
import LogComponent from './LogComponent';

const optionArray = [
    "Full-Text search", "Level", "Message", "ResourceId", "Timestamp", "TraceId", "SpanId", "Commit", "ParentResourceId"
]

const MainContent = () => {
    const [dropdown, setDropdown]  = useState(false);
    const [option, setOption] = useState([1]);
    const [remainingOptions, setRemainingOptions] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [queryString, setQueryString] = useState("");
    const [data, setData] = useState([]);
    const url = "http://localhost:8000/api/get/getAll";


    const fetchData = (queryString, filter) => {
        console.log(queryString, optionArray[option])
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchData(queryString, optionArray[option]);
    }, [queryString]);

    function inputChangeHandler(event){
        setQueryString(event.target.value);
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
                        <p>{optionArray[option[option.length-1]-1]}</p>
                        <img src="/assets/arrow.png" className="w-[12px]" alt="dropdown" />
                    </div>
                    {
                        dropdown ? (
                            <div className='w-[100%] bg-white flex-col z-100 border-[#495057] rounded-[5px] shadow-xl absolute text-[#495057] px-[5px] py-[5px] space-y-1'>
                                {
                                    remainingOptions.map((op) => {
                                        return <div 
                                            onClick={() => {
                                                setOption([...option, op])
                                                setDropdown(false);
                                                setRemainingOptions(remainingOptions.filter((options) => {
                                                    return options !== op;
                                                }))
                                            }}
                                            className='hover:bg-[#495057] hover:text-white cursor-pointer px-[5px]'>
                                            {optionArray[op-1]}
                                        </div>
                                    })
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='mt-[20px] h-[85%] flex'>
                <div className='overflow-y-scroll space-y-3 w-[70%]'>
                    {
                        data.map((element, key) => {
                            // every object that we are getting is a json object
                            return <LogComponent element={element} />
                        })
                    }
                </div>
                <div className='w-[30%]'>
                    <div className=' w-[100%] grid grid-cols-2'>
                        {
                            option.map((op, key) => {
                                return (
                                    <div className='flex items-center justify-between h-[40px] bg-[#495057] px-[10px] rounded-[5px] mx-[4px] my-[4px]'>
                                        <span className='text-center py-[2px] text-white'>{optionArray[op-1]}</span>
                                        <img onClick={() => {
                                            setRemainingOptions([...remainingOptions, op]);
                                            setOption(option.filter((om, key) => {
                                                return om !== op
                                            }))
                                        }} src="/assets/best.png" alt="cross" className='w-[15px] hover:cursor-pointer' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;