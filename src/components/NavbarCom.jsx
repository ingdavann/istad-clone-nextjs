import React from 'react';
export default function NavbarCom(){
    return(
        <nav className="bg-blue-800">
            <section className="w-[80%] mx-auto text-white p-5 px-4 flex items-center justify-between">
                <a className="font-bold flex justify-center items-center" href="#">
                    <img src="https://istad.co/resources/img/CSTAD_120.png" alt="" className="w-12 h-12"/>
                    <span className="ml-2">CSTAD</span>
                </a>
                <div className="font-bold flex items-center">
                    <a className="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/">Home</a>
                    <a className="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/enroll">Enroll</a>
                    <a className="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">Course</a>
                    <a className="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">IT New</a>
                    <a className="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="">Job Opportunity</a>
                    <a className="text-lg px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</a>
                </div>
            </section>
        </nav>
    )
}