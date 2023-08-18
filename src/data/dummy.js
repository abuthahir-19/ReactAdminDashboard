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
    DateOfBirth: '19 Sept 1967',
    Email : 'sample@gmail.com',
    Phone : "0123456789",
    Address: "North Street, CA",
    About: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
}

export const databaseLink = [
    {
        link : 'Student',
        clicked : true,
    }, 
    {
        link: 'Teacher',
        clicked: false,
    },
    {
        link : 'Staff',
        clicked: false,
    }
];

export const studentDatabase = [
    { profile: './avatar.jpg', name : "Ken Khai", ID: 'SC400122', Class: 'Science 4', Age: 17, Gender: 'Male', Email: 'KKahi@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Zach Sweger", ID: 'SC400123', Class: 'Science 4', Age: 18, Gender: 'Male', Email: 'ZachSweger@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Brooklyn Simmans", ID: 'SC400124', Class: 'Science 4', Age: 18, Gender: 'Female', Email: 'Brooklyn@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Savannah Nguyen", ID: 'SC400125', Class: 'Science 4', Age: 19, Gender: 'Female', Email: 'Savannah@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Robert Fox", ID: 'SC400126', Class: 'Science 4', Age: 17, Gender: 'Male', Email: 'Robert@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jane Cooper", ID: 'SC300122', Class: 'Science 3', Age: 18, Gender: 'Female', Email: 'Jane@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Wade Warren", ID: 'SC400111', Class: 'Science 3', Age: 16, Gender: 'Female', Email: 'Wade@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jacob Jones", ID: 'SC200106', Class: 'Science 2', Age: 15, Gender: 'Male', Email: 'Jacob@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jerome Belf", ID: 'SC100100', Class: 'Science 4', Age: 17, Gender: 'Male', Email: 'KKahi@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jenny Wilson", ID: 'SC300041', Class: 'Social 3', Age: 18, Gender: 'Female', Email: 'Jenny@gmail.com', clicked: false},
];

export const teacherDatabase = [
    { profile: './avatar.jpg', name : "Ken Khai", ID: 'SC400122', Class: 'Science 4', Age: 17, Gender: 'Male', Email: 'KKahi@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Zach Sweger", ID: 'SC400123', Class: 'Science 4', Age: 18, Gender: 'Male', Email: 'ZachSweger@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Brooklyn Simmans", ID: 'SC400124', Class: 'Science 4', Age: 18, Gender: 'Female', Email: 'Brooklyn@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Savannah Nguyen", ID: 'SC400125', Class: 'Science 4', Age: 19, Gender: 'Female', Email: 'Savannah@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Robert Fox", ID: 'SC400126', Class: 'Science 4', Age: 17, Gender: 'Male', Email: 'Robert@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jane Cooper", ID: 'SC300122', Class: 'Science 3', Age: 18, Gender: 'Female', Email: 'Jane@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Wade Warren", ID: 'SC400111', Class: 'Science 3', Age: 16, Gender: 'Female', Email: 'Wade@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jacob Jones", ID: 'SC200106', Class: 'Science 2', Age: 15, Gender: 'Male', Email: 'Jacob@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jerome Belf", ID: 'SC100100', Class: 'Science 4', Age: 17, Gender: 'Male', Email: 'KKahi@gmail.com', clicked: false},
    { profile: './avatar.jpg', name : "Jenny Wilson", ID: 'SC300041', Class: 'Social 3', Age: 18, Gender: 'Female', Email: 'Jenny@gmail.com', clicked: false},
];

export const studentAttendanceData = [
    { month : 'Jan', att: 35}, { month: 'Feb', att: 28 },
    { month : 'Mar', att: 34}, { month: 'Apr', att: 32 },
    { month : 'May', att: 48}, { month: 'Jun', att: 32 },
    { month : 'Jul', att: 35}, { month: 'Aug', att: 55 },
    { month : 'Sep', att: 38}, { month: 'Oct', att: 38 },
    { month : 'Nov', att: 25}, { month: 'Dec', att: 32 },
];
