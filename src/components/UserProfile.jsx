import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import Avatar from '../data/avatar.jpg';
import { Login } from '../pages/index';
import { Route } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div className='flex fixed justify-center items-center flex-col p-4 w-1/5 shadow-2xl rounded-md right-5 top-14 userprofile'>
            <p className='text-sm text-slate-400 font-medium p-2'>SIT19CS150</p>
            <img 
                src={Avatar} 
                alt="UserProfile" 
                className=' w-20 h-20 rounded-full'    
            />
            <p className='font-bold text-lg text-gray-600 mt-2'>Micheal Williams</p>
            <p className=' font-medium text-sm text-slate-400 mt-2'>Science 4 Students</p>
            <div className='flex justify-around w-3/4 text-lg mt-5 text-slate-600'>
                <AiOutlineMessage className='cursor-pointer'/>
                <BsTelephone className='cursor-pointer' />
                <FiMail className='cursor-pointer' />
            </div>
            <div className='mt-7'>
                <button 
                    className='px-9 py-2 bg-green-400 border-slate-600 rounded-md text-white font-medium'
                    onClick={() => <Route path='/auth' Component={<Login />} />}
                >Logout</button>
            </div>
        </div>
    );
}

export default UserProfile;