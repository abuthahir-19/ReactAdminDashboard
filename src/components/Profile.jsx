import Avatar from '../data/avatar.jpg';
import { FiCamera } from 'react-icons/fi';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const Profile = () => {
    const [currProfile, setCurrProfile] = useState(Avatar);

    return (
        <div>
            <div className='flex justify-between items-center gap-2 w-2/3'>
                <div className=' h-28 w-28 relative'>
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

                <div className='p-1'>
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
            <div className='p-2 w-2/3 flex justify-between flex-wrap mt-3 row-span-1'>
                <div className='w-1/4 m-5'>
                    <p className='text-lg font-medium text-slate-800'>Gender</p>
                    <p className='text-md font-normal text-slate-400'>Male</p>
                </div>
                <div className='w-1/4 m-5'>
                    <p className='text-lg font-medium text-slate-800'>Age</p>
                    <p className='text-md font-normal text-slate-400'>18</p>
                </div>
                <div className='w-1/4 m-5'>
                    <p className='text-lg font-medium text-slate-800'>Date of birth</p>
                    <p className='text-md font-normal text-slate-400'>1997</p>
                </div>
                <div className='w-1/4 m-5'>
                    <p className='text-lg font-medium text-slate-800'>Phone</p>
                    <p className='text-md font-normal text-slate-400'>0123456789</p>
                </div>
                <div className='w-1/4 m-5'>
                    <p className='text-lg font-medium text-slate-800'>Email</p>
                    <p className='text-md font-normal text-slate-400'>sample@gmail.com</p>
                </div>
                <div className='w-1/4 m-5'>
                    <p className='text-lg font-medium text-slate-800'>Address</p>
                    <p className='text-md font-normal text-slate-400'>North Street, CA</p>
                </div>
            </div>

            <div className='ml-3 mt-3'>
                <div>
                    <h2 className='font-medium text-slate-800 text-lg'>About</h2>
                    <p className='w-2/3 text-justify font-normal text-slate-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;