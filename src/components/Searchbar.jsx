import { BsSearch } from 'react-icons/bs';

const Searchbar = () => {
    return (
        <div className='w-full border-2 rounded-md border-gray-300'>
            <div className='flex items-center'>
                <div className='p-3'>
                    <BsSearch />
                </div>
                <input
                    type="text"
                    placeholder='Search for some documents'
                    className='border-none outline-none w-full'
                />
            </div>
        </div>
    );
}

export default Searchbar;