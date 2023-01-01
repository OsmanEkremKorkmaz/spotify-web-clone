import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";


function Content(){
    return (
        <main className="flex-auto overflow-auto">            
            <Navbar />
                <div className="pb-8 relative h-[calc(100%-64px)]">
                    <Outlet />
                </div>
        </main>
    )
}

export default Content;