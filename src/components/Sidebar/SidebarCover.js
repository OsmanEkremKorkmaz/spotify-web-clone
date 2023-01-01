import { useSelector, useDispatch } from "react-redux";
import { Icon } from "Icons";
import { setSidebar } from "redux/player/player";

function SidebarCover() {

    const dispatch = useDispatch();
    const current = useSelector(state => state.player.current)

  return (
    <div className='pt-[100%] bg-black relative group'>
        <img alt="img" src={current.image} className="w-full h-full object-cover absolute top-0 left-0 " />
        <button onClick={() => dispatch(setSidebar(false))} className="w-[1.625rem] rotate-180 h-[1.625rem] absolute opacity-0 hover:scale-105 group-hover:opacity-100 top-[0.313rem] right-[0.313rem] rounded-full bg-black/70 flex items-center justify-center">
            <Icon size={16} name={"arrowLeft"}/>
        </button>
    </div>
  )
}

export default SidebarCover