import ChangePassword from "./ChangePassword";
import Profile from "./Profile";
import Notification from "./Notification";

const SettingsRender = ({ status }) => {
    if (status === 'Profile') {
        return (
            <Profile />
        )
    } else if (status === 'Change Password') {
        return (
            <ChangePassword />
        );
    } else if ( status === 'Notification') {
        return (
            <Notification />
        )
    }
}

export default SettingsRender;