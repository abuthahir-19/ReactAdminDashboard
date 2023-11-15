const RecentProfile = ({ prof, name, dept, mins }) => {
    return (
        <div className='flex justify-between mt-6 px-4'>
            <div className='w-16 h-16 rounded-full'>
                <img className='rounded-full' src={prof} alt="img-7" />
            </div>
            <div className='flex flex-col items-start justify-center w-4/5 ml-8'>
                <p className='text-slate-800 font-medium text-base'>{ name }</p>
                <p className='text-slate-400 font-normal text-base'>{ dept }</p>
                <p className='text-slate-400 font-normal text-base'>{ mins }</p>
            </div>
        </div>
    )
};

export default RecentProfile;