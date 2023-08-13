import { useStateContext } from '../context/ContextProvider';
import ProfileDetails from './ProfileDetails';
import ProfileUpdate from './ProfileUpdate';

const Profile = () => {
    const { EditMode } = useStateContext();

    if (!EditMode) {
        return (
            <ProfileDetails />
        )
    } else {
        return (
            <ProfileUpdate />
        )
    }
}

export default Profile;