import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'
import { logout } from '../../firebase';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfilePhoto from 'components/ProfilePhoto';

export default function User(){

    const {user:currentUser} = useSelector(state => state.auth)

    const logoutHandle = async () => {
        const response = await logout();
    }

    return currentUser ? (
        <Menu as={"nav"} className="relative">
            {({ open }) => (
                <>
                    <Menu.Button className={`h-8 flex items-center p-[2px] gap-x-2 font-bold text-sm hover:bg-active hover:bg-opacity-100 ${open ? "bg-active" : "bg-black bg-opacity-70"} rounded-3xl`}>
                        <div  className="max-w-[28px] max-h-[28px] w-full h-full rounded-full bg-[#535353] flex justify-center items-center">
                            <ProfilePhoto svgSize={16} classnames="max-w-[28px] max-h-[28px] !mr-0 min-w-[28px] min-h-[28px]" />
                        </div>
                        <span>{currentUser.username}</span>
                        <span className={`${open ? "rotate-180" : ""} mr-[6px]`}>
                            <Icon size={16} name="downDir"/>
                        </span>                
                        </Menu.Button>
                    <Menu.Items className={"absolute top-full bg-active rounded p-1 translate-y-2 min-w-[196px] right-0"}>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex justify-between items-center text-sm rounded-sm  text-white/90 font-semibold pr-2 p-3 ${active && 'bg-white/10 text-white'}`}
                                href="#"
                                >
                                Hesap
                                <Icon size={16} name="external" />
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <Link
                                className={`h-10 flex items-center text-sm rounded-sm text-white/90  font-semibold pr-2 p-3 ${active && 'bg-white/10 text-white'}`}
                                to={`/user/${currentUser.uid}`}
                                >
                                Profil
                            </Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <button onClick={logoutHandle}
                                className={`h-10 flex w-full items-center text-sm rounded-sm text-white/90  font-semibold pr-2 p-3 ${active && 'bg-white/10 text-white'}`}
                                >
                                Oturumu kapat
                            </button>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    ) : <div className=' pointer-events-auto whitespace-nowrap flex'>
        <Link to="/auth/register" className='px-8 text-[#a7a7a7] font-semibold flex items-center justify-center text-center min-h-[48px]' >Kaydol</Link>
        <Link to="/auth/login" className='px-8 bg-white rounded-full text-black min-h-[48px] flex items-center justify-center text-center font-semibold' >Oturum aç</Link>
    </div>
}