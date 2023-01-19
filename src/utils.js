import store from "./redux/store"
import { setUser } from "./redux/auth/auth"
import { FastAverageColor } from "fast-average-color";
import { useState } from "react";

function secondsToTime(seconds) {
    return new Date(1000 * seconds)
    .toISOString()
    .substr(14,5)
}

const fac = new FastAverageColor();
    export const getColor = (img, setColor) => {
        if(img){
        fac.getColorAsync(img,{
          ignoredColor: [255, 255, 255, 255, 100] // white
      })
          .then(color => setColor(color.hex))
          .catch(e => console.log(e))
      }
    }




export const userHandle = data => {
    store.dispatch(setUser(data))
}

export {
    secondsToTime
}