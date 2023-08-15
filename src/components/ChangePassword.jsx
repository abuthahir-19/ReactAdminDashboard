import { useState } from "react";

const ChangePassword = () => {
    const [password, setPassword] = useState ('');
    const [confirm, setConfirm] = useState ('');

    const handlePasswordChange = (e) => {
        e.preventDefault()
        console.log (password === confirm);
    }

    return (
        <div>
            <form className="w-3/4 p-2" onSubmit={e => handlePasswordChange(e)}>
                <div className="flex justify-evenly items-center my-4">
                    <label htmlFor="Password" className="font-normal text-lg text-slate-800 flex justify-end w-1/5">New Password : </label>
                    <input 
                        type="password" 
                        value={password}
                        className='w-2/3 p-2 border-2 border-gray-500 rounded-md'
                        placeholder="New Password"
                        required 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-evenly items-center my-4">
                    <label htmlFor="Password" className="font-normal text-lg text-slate-800 flex justify-end w-1/5">Confirm Password : </label>
                    <input 
                        type="password" 
                        value={confirm}
                        className='w-2/3 p-2 border-2 border-gray-500 rounded-md'
                        placeholder="Confirm Password"
                        required 
                        onChange={e => setConfirm (e.target.value)}
                    />
                </div>
                <div className="mt-8 flex items-center justify-center">
                    <button
                        className="w-1/4 px-5 py-2 border-2 border-green-400 bg-green-400 rounded-md font-medium text-white hover:bg-green-500 transition"
                    >Change</button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;