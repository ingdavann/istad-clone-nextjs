import React from 'react'

export default function CourseCard({title, description, discount, imageUrl}) {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden w-full p-5">
        <div className="md:flex">
          <div className="md:shrink-0">
              <img className="h-36 w-full object-cover" src={imageUrl} alt={title}/>
          </div>
          <div className="ms-3"> 
            <a href="#">
              <p className="mb-3 uppercase tracking-wide text-xl text-blue-800 font-semibold">{title}</p>
            </a>
            <p className="mt-3 inline text-slate-50 bg-red-600 p-2 rounded-xl font-semibold">{discount}</p>
            <p className="mt-3 text-slate-500" style={{lineHeight: "1.5em", height: "3em", overflow: "hidden"}}>{description}</p>
          </div>
    </div>
</div>
  )
}
