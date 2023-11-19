const LogComponent = ({element}) => {
    return (
        <div className="w-full p-[12px] text-black shadow-sm grid grid-cols-3 hover:bg-[#dee2e6] hover:cursor-pointer hover:shadow-xl rounded-[10px]">
            <div className="">
                <span className="font-medium">Level: </span><span>{element.level}</span>
            </div>
            <div className="">
                <span className="font-medium">Message: </span><span>{element.message}</span>
            </div>
            <div className="">
                <span className="font-medium">ResourceId: </span><span>{element.resourceId}</span>
            </div>
            <div className="">
                <span className="font-medium">Timestamp: </span><span>{element.timestamp}</span>
            </div>
            <div className="">
                <span className="font-medium">TraceId: </span><span>{element.traceId}</span>
            </div>
            <div className="">
                <span className="font-medium">SpanId: </span><span>{element.spanId}</span>
            </div>
            <div className="">
                <span className="font-medium">Commit: </span><span>{element.commit}</span>
            </div>
            <div className="">
                <span className="font-medium">ParentResourceId: </span><span>{element.metadata.parentResourceId}</span>
            </div>
        </div>
    );
}

export default LogComponent;