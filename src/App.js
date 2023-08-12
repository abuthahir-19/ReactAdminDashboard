import { useStateContext } from "./context/ContextProvider";
import { Navbar, Sidebar } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notification, UserProfile } from "./components";
import { Settings } from "./pages";
import './App.css';

const App = () => {
    const { activeMenu, isClicked } = useStateContext();
    return (
        <div className=" overflow-hidden relative">
            <BrowserRouter>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 fixed sidebar">
                        <Sidebar />
                    </div>
                )}

                <div className={
                    `transition-all relative ${activeMenu ? 'ml-72 w-auto': 'w-[90%] mx-auto'} `
                }>
                    <div className="p-1">
                        <Navbar />
                    </div>

                    <div>
                        <Routes>
                            <Route path="/Settings" element={<Settings />} />
                        </Routes>
                    </div>
                    { isClicked.notification && <Notification /> }
                    { isClicked.userProfile && <UserProfile /> }
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
