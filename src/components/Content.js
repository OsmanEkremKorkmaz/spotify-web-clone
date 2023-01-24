import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import { useWindowWidth } from "@react-hook/window-size";


function Content(){
    const windowWith = useWindowWidth()
    return (
        <main className="flex-auto overflow-auto">            
            {windowWith >= 768 && <Navbar />}
                <div className="pb-8 relative h-[calc(100%-64px)]">
                    <Outlet />
                </div>
        </main>
    )
}

export default Content;