import NotItem from "./NotItem";
import { BsCalendar2Event } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';

const Notification = () => {
    return (
        <div className="text-lg">
            <NotItem icon={<BsCalendar2Event />} content="Calendar-Remainder for Review Annual Report" mins="30 minutes" />
            <NotItem icon={<AiOutlineMessage />} content="Messenger-Kathyrm Murphy sent you a file" mins="2 days" />
            <NotItem icon={<HiOutlineNewspaper />} content="News-Robert Fox won first place in OSN" mins="3 days" />
            <NotItem icon={<BsCalendar2Event />} content="Calender-Mid Term Exam successfully done" mins="a week" />
            <NotItem icon={<BsCalendar2Event />} content="Calender-Mid Term Exam successfully done" mins="a week" />
            <NotItem icon={<BsCalendar2Event />} content="Calender-Mid Term Exam successfully done" mins="a week" />
        </div>
    );
}

export default Notification;