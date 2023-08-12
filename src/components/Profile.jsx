import Avatar from '../data/avatar.jpg';
import { FiCamera } from 'react-icons/fi';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const Profile = () => {
    const [currProfile, setCurrProfile] = useState(Avatar);

    return (
        <div>
            <div className='flex justify-between items-center gap-2 w-2/3'>
                <div className=' h-32 w-32 relative'>
                    <img
                        src={currProfile}
                        alt="ProfilePic"
                        className='rounded-full relativeflex items-center justify-center'
                    />
                    <div className='absolute bottom-0 -right-1 z-50'>
                        <div className=' w-9 h-9 flex justify-center items-center rounded-full relative overflow-hidden bg-white'>
                            <input
                                type="file"
                                className='bg-white scale-150 absolute cursor-pointer opacity-0'
                                accept='image/*'
                            />
                            {<FiCamera className='text-xl' />}
                        </div>
                    </div>
                </div>

                <div className='p-2'>
                    <h2 className='text-xl font-medium'>Micheal Williams</h2>
                    <div className='mt-4 font-normal text-md text-slate-400'>
                        <p>SIT19CS150</p>
                        <p>School Admin</p>
                    </div>
                </div>

                <div className='relative h-[100px] cursor-pointer'>
                    <div className='absolute top-0 right-0 h-full'>
                        {<FiEdit />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;