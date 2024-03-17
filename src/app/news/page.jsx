import NewsCard from '@/components/NewsCard'
import React from 'react'

function page() {
  const newsCards = [
    {
      id : 1,
      title : 'SQL Cheat Sheet: SQL Commands សំខាន់ៗដែលជាមូលដ្ឋានគ្រឹះស្នូល',
      thumbnail : "https://api.istad.co/media/image/8665a243-b962-4a59-b51a-f31a3704b701.png"
    },
    {
      id : 2,
      title : 'ភាពខុសគ្នារវាង Rest API និង Restful API',
      thumbnail : "https://api.istad.co/media/image/a4730d8d-349d-4488-a49b-755d8a01bffe.png"
    },
    {
      id : 3,
      title : 'ស្វែងយល់អំពី Smart Contract',
      thumbnail : "https://api.istad.co/media/image/77da9050-7ff8-40af-a317-11d097cfacb7.png"
    },
    {
      id : 4,
      title : 'តើអ្នកអាចតម្រៀបបៀរដោយប្រើប្រាស់ Sort Algorithm បានដែរឬទេ?',
      thumbnail : "https://api.istad.co/media/image/4c81c78c-553c-409f-84c1-34018124debb.PNG"
    },
    {
      id : 5,
      title : 'Roadmap ដើម្បីក្លាយជា Front-End Web Developer',
      thumbnail : "https://api.istad.co/media/image/a05c8a05-2de6-4dc4-b33e-c7c4689e4f9a.png"
    },
    {
      id : 6,
      title : 'តើអ្វីទៅជា WEB 3.0?',
      thumbnail : "https://api.istad.co/media/image/eec0362f-380e-40f5-8799-56ca9b8cafb9.png"
    },
    {
      id : 7,
      title : 'Top Interesting Facts About C++',
      thumbnail : "https://api.istad.co/media/image/e391212d-aac5-460c-bd17-f95f468e4408.PNG"
    },
    {
      id : 8,
      title : 'ហេតុអ្វីបានជា Developer គួរមានចំណេះដឹងទៅលើ Docker?',
      thumbnail : "https://api.istad.co/media/image/0b7ddba0-021c-4dc3-ad73-6fe8bea44167.png"
    },
  ]
  return (
    <section className='w-[80%] mx-auto'>
      <h1 className="font-bold text-2xl mt-5">USEFUL CONTENT</h1>
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

export default page
