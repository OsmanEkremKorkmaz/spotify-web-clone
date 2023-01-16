import React from 'react'

export default function Input({value, setValue, setIsChanged, label, placeholder}) {
  return (
    <div className="relative w-full input-provider">
        <label className='absolute transition-opacity duration-200 input-label opacity-0 -top-2.5 text-link left-2.5 text-xs font-semibold'>{label}</label>
        <input 
            placeholder={placeholder} 
            value={value}
            onChange={(e) => {setValue(e.target.value); setIsChanged(true)}}
            className="input updateUsername" 
        />
    </div>
  )
}
