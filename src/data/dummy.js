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

export const settingsLink = [
    {
        linkName: 'Profile',
        clicked : true,
    },
    {
        linkName: 'Change Password',
        clicked: false,
    },
    {
        linkName: 'Notification',
        clicked: false,
    }
];

export const userDetails = {
    Name : "Micheal Williams",
    Age : 18,
    Gender : 'Male',
    DateOfBirth: '1997',
    Email : 'sample@gmail.com',
    Phone : "0123456789",
    Address: "North Street, CA",
    About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
}