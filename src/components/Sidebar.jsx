import { Link, NavLink } from "react-router-dom";
import { FaSchoolFlag } from 'react-icons/fa6';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/dummy";

const Sidebar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
    
    const active = 'flex items-center p-3 text-lg ml-4 m-4 bg-green-200 rounded-lg text-green-700 font-medium';

    return (
        <div className="h-screen overflow-y-auto sidebar bg-white">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center justify-between gap-3 text-2xl ml-3 mt-4">
                    <FaSchoolFlag className=" text-green-400"/> <span className="font-bold"> School </span>
                </Link>

                <TooltipComponent content="Menu" position="BottomCenter">
                    <button
                        type="button"
                        onClick={() => setActiveMenu (!activeMenu)}
                        className="mt-4 text-xl hover:bg-slate-100 p-3"
                    >
                        <MdOutlineCancel />
                    </button>
                </TooltipComponent>
            </div>
            <div className="mt-8">
                { links.map (link => (
                    <NavLink
                        to={`/${link.title}`}
                        key={link.title}
                        className={({ isActive }) => isActive ? active : 'flex items-center p-3 text-lg ml-4 m-4 hover:bg-slate-200 rounded-lg font-medium'}
                    >
                        <p>{link.icon}</p> <span className="capitalize ml-3">{link.title}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;