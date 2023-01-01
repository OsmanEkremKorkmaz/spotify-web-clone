import store from "./redux/store"
import { setUser } from "./redux/auth/auth"

function secondsToTime(seconds) {
    return new Date(1000 * seconds)
    .toISOString()
    .substr(14,5)
}




export const userHandle = data => {
    store.dispatch(setUser(data))
}

export {
    secondsToTime
}