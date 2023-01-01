import { Icon } from 'Icons'
import {useState} from 'react'
import { Navigate } from 'react-router-dom';


function Search() {
  
  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    
    setSearch(e.target.value)

    return <Navigate to={`/search/mesi`} replace={true} />
  }
  return (
    <div className='mr-auto ml-4 relative'>
        <label htmlFor='search-input'  className="text-backdrop h-10 w-12 flex items-center justify-center absolute top-0 left-0 " >
            <Icon size={24} name="search"/>
        </label>
        <input onChange={e => handleChange(e)} value={search} id='search-input' placeholder="Sanatçılar, şarkılar veya podcast'ler" className='h-10 text-sm max-w-full w-[22.75rem] placeholder:font-normal placeholder:text-link bg-white rounded-full text-black outline-none px-12 py-[6px]' />
    </div>
  )
}

export default Search