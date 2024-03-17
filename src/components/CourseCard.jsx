import React from 'react'
import CourseCardPara from './CourseCardPara'

export default function CourseCard({courseCards}) {
    console.log(courseCards)
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden w-full">
        {
            courseCards.map((courseCard) => {
                <CourseCardPara
                    key={courseCard.id}
                    title={courseCard.title}
                    description={courseCard.description}    
                    discount={courseCard.discount}
                    imageUrl={courseCard.imageUrl}
                />
            })
        }
</div>
  )
}
