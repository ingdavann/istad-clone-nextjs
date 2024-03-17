import React from 'react'
import NewsCard from '@/components/NewsCard'
export default function page() {
    const newsCards = [
        {
          id : 1,
          title : 'WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer',
          thumbnail : "https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png"
        },
        {
          id : 2,
          title : 'Senior Spring Web Developer',
          thumbnail : "https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png"
        },
        {
          id : 3,
          title : 'Senior Java Developer in Sky Booking Co., Ltd',
          thumbnail : "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png"
        },
        {
          id : 4,
          title : 'ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD',
          thumbnail : "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png"
        },
    ]
  return (
    <section className='w-[80%] mx-auto'>
      <h1 className="font-bold text-2xl mt-5">YOUR INFOMATIONS</h1>
      <div className='grid grid-cols-4 gap-3 mt-5 mb-5'>
        {
          newsCards.map((newsCard) =>(
            <NewsCard
              key={newsCard.id}
              title={newsCard.title}
              thumbnail={newsCard.thumbnail}
            />
          ))
        }
      </div>
    </section>
  )
}
