import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]"> 
        {/* for grid plugin need to import */}
       {/* <h1 className="text-3xl text-center">Rakesh Music Academy</h1> */}
       <HeroSection/>
       <FeaturedCourses/>
       <ThreeDCardDemo/>
    </main>
  );
}
