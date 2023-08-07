import Searchbar from "./Searchbar";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useStateContext } from "../context/ContextProvider";
import { BiChevronDown } from "react-icons/bi";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import Avatar from '../data/avatar.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button
                type="button"
                onClick={customFunc}
                style={{ color }}
                className="text-2xl rounded-full p-3 outline-none border-none"
            >
                <span
                    style={{ background: dotColor }}
                    className="rounded-full"
                >
                    {icon}
                </span>
            </button>
        </TooltipComponent>
    );
};


const Navbar = () => {
    const { setActiveMenu, handleClick, isClicked } = useStateContext();
    return (
        <div className="flex items-center justify-between relative">
            <div className="flex justify-between p-2 items-center w-3/5">
                <NavButton
                    title="Menu"
                    customFunc={() => setActiveMenu(prev => !prev)}
                    icon={<AiOutlineMenu />}
                    color={'text-green-700'}
                    dotColor={'bg-slate-200'}
                />
                <Searchbar className="w-3/4" />
            </div>
            <div className="flex item-center">
                <NavButton
                    title="Notification"
                    customFunc={() => handleClick('notification')}
                    icon={<IoMdNotificationsOutline />}
                />
                <div className="p-2 flex items-center justify-between gap-2 shadow-inner cursor-pointer" onClick={() => handleClick('userProfile')}>
                    <img src={Avatar} alt="UserProfile" className="h-8 w-8 rounded-full " />
                    <p>Hi, Micheal</p>
                    <BiChevronDown className="text-2xl" />
                </div>
            </div>
            { isClicked.notification && <Notification />}
            { isClicked.userProfile && <UserProfile />}
        </div>
    );
}

export default Navbar;