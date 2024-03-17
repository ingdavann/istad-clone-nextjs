import Carousel from "@/components/Carousel";
import CourseCard from "@/components/CourseCard";

const courseCardData = [
  {
    id: 1,
    title: 'FLUTTER MOBILE DEVELOPMENT',
    discount: '20% Scholarship',
    description: 'Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.',
    imageUrl: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
  },
  {
    id: 2,
    title: 'IOS DEVELOPMENT',
    discount: '20% Scholarship',
    description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
    imageUrl: 'https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png',
  },
  {
    id: 3,
    title: 'C++ PROGRAMMING',
    discount: '20% Scholarship',
    description: "C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. C++ programming course will guide you to from basic language syntax to OOP concept step by step. Please see the details course offer below",
    imageUrl: 'https://api.istad.co/media/image/73c3424a-39e0-450c-8969-8b35559594f5.png',
  },
  {
    id: 4,
    title: 'DEVOPS ENGINEERING',
    discount: '20% Scholarship',
    description: "This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.",
    imageUrl: 'https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png',
  },

];

export default function Home() {
  return (
    <main>
      <Carousel/>
      <section className="w-[80%] mx-auto mt-5">
        <h1 className="font-bold text-2xl">COURSE</h1>
        <section className="grid grid-cols-2 gap-3 mt-5 mb-5">
          {
            courseCardData.map((card) => (
              <CourseCard 
                key={card.id}
                title={card.title}
                discount={card.discount}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))
          }
        </section>
      </section>
    </main>
  );
}
