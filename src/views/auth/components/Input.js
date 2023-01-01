import { useField } from 'formik'
import React from 'react'

export default function Input({ label, placeholder, ...props}) {

    const [field, meta, helpers] = useField(props)

  return (
    <div className='flex flex-col gap-y-2'>
        <label className='font-semibold'>{label}</label>
        <input className='placeholder:text-[#878787] placeholder:font-semibold border rounded px-4 py-3 bg-white border-[#878787] focus:outline focus:border-black' placeholder={placeholder} {...field} {...props} />
    </div>
  )
}
