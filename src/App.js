import { useStateContext } from "./context/ContextProvider";
import { Navbar, Sidebar } from './components';
import { BrowserRouter } from "react-router-dom";
import './App.css';

const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <div className=" overflow-hidden">
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
                    `transition-all ${activeMenu ? 'ml-72 w-auto': 'w-[90%] mx-auto'}`
                }>
                    <div className="">
                        <Navbar />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
