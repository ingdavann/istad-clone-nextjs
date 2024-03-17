import NavbarCom from '@/components/NavbarCom'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto w-[80%]'>
         <div class="sm:flex items-center max-w-screen-xl ">
          <div class="sm:w-1/2 p-10">
              <div class="image object-center text-center">
                  <img src="https://i.imgur.com/WbQnbas.png"/>
              </div>
          </div>
          <div class="sm:w-1/2 p-5">
              <div class="text">
                  <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">WHAT IS <span class="text-blue-800"> CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT</span>
                  ?</h2>
                  <p class="text-gray-700">
                  CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.
                  </p>
              </div>
          </div>
        </div>

        <div class="sm:flex items-center max-w-screen-xl ">
          <div class="sm:w-full p-5">
              <div class="text">
                  <h2 class="my-4 font-bold text-3xl sm:text-4xl text-blue-800">VISION</h2>
                  <p class="text-gray-700">
                  Advanced IT Institute in Cambodia
                  </p>
              </div>
          </div>
        </div>
        <div class="sm:flex items-center max-w-screen-xl ">
          <div class="sm:w-full p-5">
              <div class="text">
                  <h2 class="my-4 font-bold text-3xl sm:text-4xl text-blue-800">MISSION</h2>
                  <ul class="text-gray-700">
                      <li className=''>- Provide the latest methodology with high quality training and mentoring</li>
                      <li>- Build up the capacity and career of IT experts Cambodia</li>
                      <li>- Consult and connect CSTAD trainees to top IT careers</li>
                  </ul>
              </div>
          </div>
        </div>
        <div class="sm:flex items-center max-w-screen-xl ">
          <div class="sm:w-full p-5">
              <div class="text">
                  <h2 class="my-4 font-bold text-3xl sm:text-4xl text-blue-800">SLOGAN</h2>
                  
                  <p class="text-gray-700">
                  Start your IT Career with CSTAD
                  </p>
              </div>
          </div>
        </div>
    </div>
   
  )
}

export default page
