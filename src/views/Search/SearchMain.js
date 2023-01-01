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

function SearchMain(){
    const favoritesRef = useRef();
    const contentsRef = useRef();
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    useEffect(() => {

        if (favoritesRef.current) {

            const scrollHandle = () => {
                const isEnd = Math.round(favoritesRef.current.scrollLeft) + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth;
                const isBegin = favoritesRef.current.scrollLeft === 0;
                setPrev(!isBegin)
                setNext(!isEnd)
            }
            scrollHandle()
            
            favoritesRef.current.addEventListener('scroll', scrollHandle)
            
            return () => {
                    favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
            }
        }

    }, [favoritesRef])

    const slideFavoritesNext = () => {
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 200;
    }
    const slideFavoritesPrev = () => {
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 200;
    }

    return (
        <div className="pt-6">
             
            <section className="mb-8">
                <Title title="En çok dinlediğin türler" />
                <div className="relative">

                    {next && <button onClick={slideFavoritesNext} className=" w-12 absolute z-10 -right-5 h-12 top-1/2 -translate-y-1/2 hover:scale-105 rounded-full bg-white text-black flex items-center justify-center" ><Icon name="next" size={24}/></button>}
                    {prev && <button onClick={slideFavoritesPrev} className=" w-12 absolute z-10 -left-5 h-12 top-1/2 -translate-y-1/2 hover:scale-105 rounded-full bg-white text-black flex items-center justify-center" ><Icon name="prev" size={24}/></button>}
                    <ScrollContainer innerRef={favoritesRef} className="flex gap-x-6 scroll-smooth">
                        {favoriteCategories.map(category => <WideCategory key={category.id} category={category} />)}
                    </ScrollContainer>
                </div>
            </section>
            <section>
                <Title title="Hepsine göz at" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                    {categories.map(category => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SearchMain;