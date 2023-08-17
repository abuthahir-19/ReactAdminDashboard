import { Avatar } from '@mui/material';
import AvatarImg from '../data/avatar.jpg';

const PeopleGroup = () => {
    return (
        <div className="flex justify-start items-center mt-4">
            <Avatar alt='ProfilePic' src={AvatarImg} />
            <Avatar alt='ProfilePic' src={AvatarImg} className=' -ml-2'/>
            <Avatar alt='ProfilePic' src={AvatarImg} className=' -ml-2'/>
            <Avatar alt='ProfilePic' src={AvatarImg} className=' -ml-2'/>
            <p className='ml-4 font-normal text-green-400'>+12 more</p>
        </div>
    );
}

export default PeopleGroup;