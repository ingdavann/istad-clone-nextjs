import Carousel from "@/components/Carousel";
import CourseCard from "@/components/CourseCard";

const courseCardData = [
  {
    id: 1,
    title: 'Card 1',
    discount: 0,
    description: 'Description for card 1',
    imageUrl: '/images/card1.jpg',
  },
  {
    id: 2,
    title: 'Card 2',
    discount: 0,
    description: 'Description for card 2',
    imageUrl: '/images/card2.jpg',
  },
  // Add more card objects as needed
];

export default function Home() {
  return (
    <main>
      <Carousel/>
      <section className="w-[80%] mx-auto mt-5">
        <h1 className="font-bold text-2xl">COURSE</h1>
        <section className="grid grid-cols-2 gap-3 mt-5 mb-5">
          <CourseCard courseCards={courseCardData}/>
        </section>
      </section>
    </main>
  );
}
