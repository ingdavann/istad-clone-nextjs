import React from 'react'
export default function Footer() {
  return (
    <footer className='bg-blue-800'>
            <div class="w-[80%] mx-auto py-4 text-slate-50">
            <div class="container px-4 mx-auto">
                <div class="-mx-4 flex flex-wrap justify-between">
                    <div class="px-4 my-4 w-full xl:w-1/5">
                        <a class="flex justify-center flex-col" href="/">
                            <img src="https://istad.co/resources/img/CSTAD_120.png" alt="" class="w-32 h-32 mb-5"/>
                            <span class="ml-2">Start your IT career with CSTAD</span>
                        </a>
                    </div>
                    <div class="px-4 my-4 w-full sm:w-auto">
                        <div>
                            <h2 class="inline-block text-2xl pb-4 mb-4 font-bold">LEARN MORE</h2>
                        </div>
                        <ul class="leading-8">
                            <li><a href="/course" class="hover:text-blue-400">Course</a></li>
                            <li><a href="/news" class="hover:text-blue-400">IT New</a></li>
                            <li><a href="/job" class="hover:text-blue-400">Job Opportunity</a></li>
                            <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-blue-400">FQA</a></li>
                        </ul>
                    </div>
                    <div class="px-4 my-4 w-full sm:w-auto">
                        <div>
                            <h2 class="inline-block text-2xl pb-4 mb-4 font-bold">CONTACT US</h2>
                        </div>
                        <address>
                            <ul class="leading-8">
                                <li><a href="#" class="hover:text-blue-400">(+855) 95-990-910</a></li>
                                <li><a href="#" class="hover:text-blue-400">(+855) 93-990-910</a></li>
                            </ul>
                        </address>
                    </div>
                    
                </div>
            </div>
            </div>
            <div class="w-[80%] mx-auto py-4 text-slate-100 text-center border-t-2">
                <div class="">
                    © 2024 Center of Science and Technology Advanced Development | All Rights Reserved
                </div>
            </div>
    </footer>
  )
}
