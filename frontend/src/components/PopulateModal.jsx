import ReactDom from 'react-dom';
import { useState, useRef, useEffect, useReducer } from 'react';

const content = `{
    "level": "error",
    "message": "Failed to connect to DB",
    "resourceId": "server-1234",
    "timestamp": "2023-09-15T08:00:00Z",
    "traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}`

const PopulateModal = ({setPopulate}) => {

    const inputRef = useRef();

    async function populateHandler(){
        const data = inputRef.current.value;

        const jsonData = JSON.parse(data);
        console.log(jsonData);

        // use the fetch api to make a call to backend server to save this data 
        const url = "http://localhost:8000/api/insert/new";
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(jsonData)
            })
            setPopulate(false)
            return response;
        }catch(err){
            console.log("An error occured while connecting to backend!", err)
            return err;
        }
    }

    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#D9D9D980] z-1000" />
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                <div className='flex justify-between items-center w-full'>
                    <div className='text-center font-normal text-[14px]'>JSON</div>
                    <img onClick={() => setPopulate(false)} src="/assets/close.png" className='w-[16px] cursor-pointer' alt="close"/>
                </div>
                <textarea ref={inputRef} className='w-full mt-[10px] rounded-[10px] shadow-xl h-[300px] bg-[#e9ecef] border-[#495057] p-[10px]'>
                    {content}
                </textarea>
                <div onClick = {populateHandler} className='flex justify-center bg-[#184e77] rounded-[10px] py-[10px] w-full mt-[10px] cursor-pointer'>
                    <p className='text-center text-white font-normal text-[18px]'>Populate</p>
                </div>
            </div>
        </>, document.getElementById("portal")
    );
}

export default PopulateModal;