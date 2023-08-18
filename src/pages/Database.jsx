import { useState } from "react";
import { NavLink } from "react-router-dom";
import { databaseLink } from "../data/dummy";
import DatabaseRender from "../components/DatabaseRender";
import { useStateContext } from "../context/ContextProvider";
import { RxCross1 } from 'react-icons/rx';
import { FiCamera } from 'react-icons/fi';
import AvatarImg from '../data/avatar.jpg';
import { userDetails } from "../data/dummy";
import PeopleGroup from "../components/PeopleGroup";
import { AiOutlinePlus } from 'react-icons/ai';

const Database = () => {
    const { rowClicked, setRowClicked, activeMenu } = useStateContext();
    const [titleLinks, setTitleLinks] = useState(databaseLink);
    const [activeLink, setActiveLink] = useState('Student');

    const handleClick = (name) => {
        setTitleLinks(prevLinks => {
            const newList = prevLinks.map(val => val.clicked ? { ...val, clicked: false } : { ...val });
            let upd = newList.find(item => item.link === name);
            upd.clicked = true;
            newList.splice(newList.indexOf(upd), 1, upd);
            return newList;
        });
        setActiveLink(name);
        setRowClicked (false);
    }

    const handleClose = () => {
        setTitleLinks (databaseLink);
        setRowClicked (false);
    }
    return (
        <div className="flex flex-row">
            <div className={`${rowClicked ? activeMenu ? 'w-[70%]' : 'w-[75%]' : 'w-full'} database-table`}>
                <div className="flex justify-between items-center p-3">
                    <h2 className="font-medium text-2xl text-slate-800">Database</h2>
                    <div>
                        <button className="flex justify-between items-center text-white bg-green-400 px-5 py-1 rounded-lg font-medium">
                            <span className="mr-2">{ <AiOutlinePlus /> }</span>Add
                        </button>
                    </div>
                </div>

                <div className="p-2 mt-3 flex justify-start overflow-x-scroll w-full lg:overflow-hidden md:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden">
                    {titleLinks.map(item => (
                        <NavLink
                            key={item.link}
                            className={`${item.clicked ? ' border-b-2 border-green-400' : 'border-white'} mx-10 px-4 pb-4 text-slate-400 text-lg font-medium`}
                            onClick={() => handleClick(item.link)}
                        >
                            <p className={`${item.clicked ? 'text-green-400' : 'text-slate-400'}`}>{item.link}</p>
                        </NavLink>
                    ))}
                </div>

                <div className="w-auto mt-3 p-2">
                    {<DatabaseRender status={activeLink} />}
                </div>
            </div>
            <div className={`${rowClicked ? activeMenu ? "w-[40%]" : "w-[25%]" : 'w-0 hidden'} database-table`}>

                <div 
                    className="flex justify-end text-xl text-green-400 mb-4 font-bold cursor-pointer"
                    onClick={handleClose}
                >
                    <RxCross1 />
                </div>
                <div className="flex justify-center items-center">
                    <div className=' h-28 w-28 relative'>
                        <img
                            src={AvatarImg}
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
                </div>

                <p className="w-1/2 text-center mx-auto mt-4 font-medium text-lg">{userDetails.Name}</p>

                <div className="flex justify-between p-4 mt-5">
                    <div>
                        <p className="text-lg font-medium text-slate-800">About</p>
                        <p className="text-slate-400 mt-2 text-ellipsis overflow-hidden">{ userDetails.About }</p>
                    </div>
                </div>

                <div className="flex justify-between p-4">
                    <div>
                        <p className="text-lg font-medium text-slate-800">Age</p>
                        <p className="text-slate-400 mt-2">{ userDetails.Age }</p>
                    </div>

                    <div className="w-[120px]">
                        <p className="text-lg font-medium text-slate-800">Gender</p>
                        <p className="text-slate-400 mt-2 text-ellipsis overflow-hidden">{ userDetails.Gender }</p>
                    </div>
                </div>

                <div className="flex justify-between p-4">
                    <div>
                        <p className="text-lg font-medium text-slate-800">Date of Birth</p>
                        <p className="text-slate-400 mt-2">{ userDetails.DateOfBirth }</p>
                    </div>

                    <div className="w-[120px]">
                        <p className="text-lg font-medium text-slate-800">Address</p>
                        <p className="text-slate-400 mt-2 text-ellipsis overflow-hidden">{ userDetails.Address }</p>
                    </div>
                </div>

                <div className="p-4">
                    <p className="font-medium text-lg">People from the same class</p>
                    
                    <PeopleGroup />
                </div>
            </div>
        </div>
    );
}

export default Database;