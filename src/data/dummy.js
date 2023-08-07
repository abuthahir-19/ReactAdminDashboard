import { RxDashboard } from 'react-icons/rx';
import { PiMessengerLogoBold } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { BsDatabase } from 'react-icons/bs';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';

export const links = [
    {
        title : 'Dashboard',
        icon : <RxDashboard /> 
    },
    {
        title : 'Messenger',
        icon : <PiMessengerLogoBold />
    },
    {
        title : 'Calendar',
        icon : <SlCalender />
    },
    {
        title : 'Database',
        icon : <BsDatabase />
    },
    {
        title : 'Attendance',
        icon : <TbBrandGoogleAnalytics />
    },
    {
        title : 'Settings',
        icon : <IoSettingsOutline />
    }
];