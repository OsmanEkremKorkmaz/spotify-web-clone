import Category from "components/Category";
import Title from "components/Title";
import WideCategory from "components/WideCategory";
import categories from "data/categories";
import favoriteCategories from "data/favorite-categories";
import { Icon } from "Icons";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Index(){
    const contentsRef = useRef();
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const {search} = useParams()
    const contents = [
        {name:"Tümü", link:""},
        {name:"Şarkılar", link:"tracks"},
        {name:"Podcast'ler ve Programlar", link:""},
        {name:"Sanatçılar",link:""},
        {name:"Çalma Listeleri",link:""},
        {name:"Albümler",link:""},
        {name:"Müzik Türleri ve Modlar",link:""},
        {name:"Profiller",link:""}
    ]
    useEffect(() => {

        if (contentsRef.current) {

            const scrollHandle = () => {
                const isEnd = Math.round(contentsRef.current.scrollLeft) + contentsRef.current.offsetWidth === contentsRef.current.scrollWidth;
                const isBegin = contentsRef.current.scrollLeft === 0;
                setPrev(!isBegin)
                setNext(!isEnd)
            }
            scrollHandle()
            
            contentsRef.current.addEventListener('scroll', scrollHandle)
            
            return () => {
                    contentsRef?.current?.removeEventListener('scroll', scrollHandle)
            }
        }

    }, [contentsRef, search])

    const slidecontentsNext = () => {
        contentsRef.current.scrollLeft += contentsRef.current.offsetWidth - 200;
    }
    const slidecontentsPrev = () => {
        contentsRef.current.scrollLeft -= contentsRef.current.offsetWidth - 200;
    }

    return (
        <div>
            <section className="relative">
                    {next && <button onClick={slidecontentsNext} className=" w-8 absolute z-10 -right-5 h-8 top-1/2 -translate-y-1/2 hover:scale-105 rounded-full bg-[#242424] text-opacity-70  text-white flex items-center justify-center" ><Icon name="next" size={16}/></button>}
                    {prev && <button onClick={slidecontentsPrev} className=" w-8 absolute z-10 -left-5 h-8 top-1/2 -translate-y-1/2 hover:scale-105 rounded-full bg-[#242424]  text-opacity-70 text-white flex items-center justify-center" ><Icon name="prev" size={16}/></button>}
            <ScrollContainer innerRef={contentsRef} className="flex scroll-smooth h-12 sticky top-16 items-center">
                {contents.map((content, i) => (
                    <NavLink key={i} to={`/search/${search}/${content.link}`}  className={(navdata) => `p-0.5 cursor-default mr-2 text-sm font-semibold transition-colors duration-200 ${navdata.isActive ? "text-black bg-white" : "bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] text-white"} break-words inline-flex items-center rounded-[32px] relative`}>
                        <span className=" h-7  py-1 px-3   rounded-[32px] inline-flex whitespace-nowrap items-center">{content.name}</span>
                    </NavLink>
                ))}
            </ScrollContainer>
            <Outlet />
            </section>
        </div>
    )
}

export default Index;