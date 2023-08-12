import { useState } from "react";
import { settingsLink } from "../data/dummy";
import { NavLink } from "react-router-dom";
import { SettingsRender } from "../components";

const Settings = () => {
    const [LinkItems, setLinkItems] = useState (settingsLink);
    const [Activity, setActivity] = useState ('Profile');

    const handleClick = (name) => {
        setLinkItems (prevList => {
            const newList = prevList.map (val => val.clicked ? { ...val, clicked: false }: { ...val });
            let upd = newList.find (item => item.linkName === name);
            upd.clicked = upd;
            newList.splice (newList.indexOf (upd), 1, upd);
            return newList;
        });
        setActivity (name);
    };

    return (
        <div>
            <div className="flex justify-start items-center p-3">
                <h2 className="font-medium text-2xl text-slate-800">Settings</h2>
            </div>

            <div className="p-2 mt-3 flex justify-start">
                {LinkItems.map (link => (
                    <NavLink 
                        key={link.linkName}
                        className={`${link.clicked ? ' border-b-2 border-green-400' : 'border-white' } mx-10 px-4 pb-4 text-slate-400 text-lg font-medium`}
                        onClick={() => handleClick (link.linkName)}
                    >
                        <p>{link.linkName}</p>
                    </NavLink>
                ))}
            </div>

            <div className="w-auto mt-3 p-2">
                { <SettingsRender status={Activity} />}
            </div>
        </div>
    );
}

export default Settings;