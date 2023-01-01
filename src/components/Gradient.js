import React, { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color';
export default function Gradient({img=false, faxColor}) {
    const [color, setColor] = useState(faxColor || "#535353")
    const fac = new FastAverageColor();
    const getColor = (img) => {
        if(!img){
            setColor(faxColor || "#535353")
            return null
          }
        fac.getColorAsync(img,{
            ignoredColor: [255, 255, 255, 255, 100] // white
        })
            .then(color => setColor(color.hex))
            .catch(e => console.log(e))
    }
    
    useEffect(() => {
        getColor(img)
      }, [img])
    
  return <div style={{backgroundColor: color}} className={`bg-[${color}] h-[32.5vh] absolute flex w-full bg-gradient-to-b from-[#00000099] to-backdrop -z-1`}></div>
}
