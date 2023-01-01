import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import SongItem from "./SongItem";
import Title from "./Title";

export default function ComponenetShelf({title, more = false, items, isNotUser=true}){

    const windowWith = useWindowWidth()
    const [cols, setCols] = useState(2)
    

    useEffect(() => {
        if (windowWith < 768) setCols(2)
        if (windowWith >= 768 && windowWith < 1024) setCols(3)
        if (windowWith >= 1024 && windowWith < 1280) setCols(4)
        if (windowWith >= 1280 && windowWith < 1536) setCols(5)
        if (windowWith >= 1536) setCols(6)
    }, [windowWith])


    console.log(items)

    return(
        <section className="mb-4">
            <header className="h-[51.2px]">
                <Title title={title} more={items.length > cols ? more : false} />
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                {items.slice(0,cols).map(item => <SongItem isNotUser={isNotUser} key={item} item={item}/>)}
            </div>
        </section>
    )
}