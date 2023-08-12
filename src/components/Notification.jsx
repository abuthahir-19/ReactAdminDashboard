import NotItem from "./NotItem";
import { BsCalendar2Event } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { Link } from "react-router-dom";
const Notification = () => {
    return (
        <div className="fixed top-20 right-[130px] w-[23%] flex flex-col justify-center rounded-md shadow-effect">
            <NotItem icon={<BsCalendar2Event />} content="Calendar-Remainder for Review Annual Report" mins="30 minutes" />
            <NotItem icon={<AiOutlineMessage />} content="Messenger-Kathyrm Murphy sent you a file" mins="2 days" />
            <NotItem icon={<HiOutlineNewspaper />} content="News-Robert Fox won first place in OSN" mins="3 days" />
            <NotItem icon={<BsCalendar2Event />} content="Calender-Mid Term Exam successfully done" mins="a week" />

            <Link to="/Notification" className="mx-auto my-5 text-green-400">See all notifications</Link>
        </div>
    );
}

export default Notification;