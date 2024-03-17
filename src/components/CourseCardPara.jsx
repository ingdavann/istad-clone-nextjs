import React from 'react'

export default function CourseCardPara({title, description, discount, imageUrl}) {
  return (
    <div className="md:flex">
        <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageUrl} alt={title}/>
        </div>
        <div className="p-8">
            <p className="mt-2 text-slate-500">
                {discount}
            </p>
            <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</p>
            <p className="mt-2 text-slate-500">
                {description}
            </p>
        </div>
    </div>
  )
}
