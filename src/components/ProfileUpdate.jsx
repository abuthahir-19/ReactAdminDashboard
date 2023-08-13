import { useStateContext } from '../context/ContextProvider';

const ProfileUpdate = () => {
    const { setEditMode, setUser, user } = useStateContext ();
    var tempUser = { ...user };

    const handleChange = (e, param) => {
        tempUser[param] = e.target.value;
    };

    const onSave = () => {
        setUser (tempUser);
        setEditMode (false);
    }

    return (
        <div className='w-2/3'>
            <form>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='Name' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>Name : </label>
                    <input type="text" placeholder='Name' className='w-3/4 p-2 border-2 border-gray-500 rounded-md' required onChange={e => handleChange (e, 'Name')} />
                </div>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='Age' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>Age : </label>
                    <input type="text" placeholder='Age' className='w-3/4 p-2 border-2 border-gray-500 rounded-md' required onChange={e => handleChange (e, 'Age')} />
                </div>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='Gender' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>Gender : </label>
                    <input type="text" placeholder='Gender' className='w-3/4 p-2 border-2 border-gray-500 rounded-md' required onChange={e => handleChange (e, 'Gender')} />
                </div>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='Email' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>Email : </label>
                    <input type="email" placeholder='Email' className='w-3/4 p-2 border-2 border-gray-500 rounded-md' required onChange={e => handleChange (e, 'Phone')} />
                </div>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='Phone' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>Phone : </label>
                    <input type="phone" placeholder='Phone' className='w-3/4 p-2 border-2 border-gray-500 rounded-md' required onChange={e => handleChange (e, 'Email')} />
                </div>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='Address' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>Address : </label>
                    <input type="text" placeholder='Address' className='w-3/4 p-2 border-2 border-gray-500 rounded-md' onChange={e => handleChange (e, 'Address')} />
                </div>
                <div className='flex justify-between items-center m-3'>
                    <label htmlFor='About' className='font-normal text-lg text-slate-800 flex justify-end w-1/5'>About : </label>
                    <textarea placeholder='Write something about you' className='resize-none w-3/4 p-2 border-2 border-gray-500 rounded-md' onChange={e => handleChange (e, 'About')} />
                </div>

                <div className='flex justify-between items-center w-1/2 mx-auto mt-8 font-medium'>
                    <button type='button' className='px-8 py-2 border-2 border-slate-900 rounded-md hover:bg-slate-500 hover:border-slate-500 hover:text-white transition' onClick={() => setEditMode (false)}>Cancel</button>
                    <button type='button' className='px-8 py-2 border-2 border-green-500 rounded-md bg-green-500 text-white hover:bg-green-400 transition' onClick={onSave}>Save</button>
                </div>
            </form>
        </div>
    );
}

export default ProfileUpdate;