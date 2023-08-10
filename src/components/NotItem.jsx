const NotItem = ({ icon, content, mins }) => {
    return (
        <div className="relative py-2 px-4 mt-3">
            <div className="p-2 hover:bg-slate-200 rounded-md cursor-pointer">
                <div className="flex w-full items-center justify-between">
                    <p className="text-green-400">{icon}</p>
                    <p className="text-slate-900 ml-4 w-[85%] pr-5">{content}</p>
                </div>
                <p className="text-slate-400 flex justify-start mx-auto -mt-1 w-[70%]">{`${mins} ago`}</p>
            </div>
        </div>
    )
};

export default NotItem;