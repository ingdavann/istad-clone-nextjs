import Carousel from "@/components/Carousel";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <main className="w-[90%] mx-auto">
      <Carousel/>
      <h1 className="font-bold text-2xl">COURSE</h1>
      <section className="grid grid-cols-2 gap-3 mt-5 mb-5">
        <CourseCard/>
        <CourseCard/> 
      </section>
    </main>
  );
}
