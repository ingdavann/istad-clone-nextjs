import React from 'react';
export default function NavbarCom(){
    return(
        <nav class="bg-blue-800">
            <section class="w-[90%] mx-auto text-white p-5 px-4 flex items-center justify-between">
                <a class="font-bold flex justify-center items-center" href="#">
                    <img src="https://istad.co/resources/img/CSTAD_120.png" alt="" class="w-12 h-12"/>
                    <span class="ml-2">CSTAD</span>
                </a>
                <div class="font-bold flex items-center">
                    <a class="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/">Home</a>
                    <a class="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">Enroll</a>
                    <a class="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">Course</a>
                    <a class="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">IT New</a>
                    <a class="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">Job Opportunity</a>
                    <a class="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</a>
                </div>
            </section>
        </nav>
    )
}