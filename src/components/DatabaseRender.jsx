import Student from "./Student";
import Teacher from './Teacher';
import Staff from './Staff';

const DatabaseRender = ({ status }) => {
    if (status === 'Student') {
        return (
            <Student />
        );
    } else if (status === 'Teacher') {
        return (
            <Teacher />
        );
    } else if (status === 'Staff') {
        return (
            <Staff />
        );
    }
};

export default DatabaseRender;