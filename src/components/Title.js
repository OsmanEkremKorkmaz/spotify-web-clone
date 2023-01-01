import React from 'react'
import { Link } from "react-router-dom";

function Title({title, more}) {
  return (
    <div>
        <div className="flex items-center justify-between mb-4">
                    <Link className="font-bold text-2xl leading-7 text-white tracking-tight hover:underline" to={more ?? "#"}>{title}</Link>
                    {more && (
                        <Link className="text-link text-xs uppercase font-bold leading-4 hover:underline tracking-widest" to={more}>
                            HEPSİNİ GÖR
                        </Link>
                    )}
                </div>
    </div>
  )
}

export default Title