import ChangePassword from "./ChangePassword";
import Profile from "./Profile";

const SettingsRender = ({ status }) => {
    if (status === 'Profile') {
        return (
            <Profile />
        )
    } else if (status === 'Change Password') {
        return (
            <ChangePassword />
        );
    }
}

export default SettingsRender;