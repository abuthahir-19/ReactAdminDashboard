import { useStateContext } from "./context/ContextProvider";
import { Navbar, Sidebar } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationDialog, UserProfile } from "./components";
import { Settings, Database } from "./pages";
import './App.css';

const App = () => {
    const { activeMenu, isClicked } = useStateContext();
    return (
        <div className=" overflow-hidden relative">
            <BrowserRouter>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar md: z-20">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 fixed sidebar">
                        <Sidebar />
                    </div>
                )}

                <div className={
                    `transition-all relative ${activeMenu ? 'ml-72 w-auto': 'mx-auto'} md:w-full md:ml-0 sm:w-full sm:ml-0 xs:w-full xs:ml-0`
                }>
                    <div className={`${activeMenu ? 'w-auto' : 'w-[90%] mx-auto'}`}>
                        <Navbar />
                    </div>

                    <div className="w-full">
                        <Routes>
                            <Route path="/Settings" element={<Settings />} />
                            <Route path="/Database" element={<Database />} />
                        </Routes>
                    </div>
                    { isClicked.notification && <NotificationDialog /> }
                    { isClicked.userProfile && <UserProfile /> }
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
