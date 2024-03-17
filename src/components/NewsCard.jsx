import React from 'react'

export default function NewsCard({title, thumbnail}) {
  return (
    <div class="flex px-3 py-3">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={thumbnail} alt={title} />
        <div class="px-6 py-4">
            <div class="font-normal text-md mb-2">{title}</div>
        </div>
        
    </div>
</div>
  )
}
