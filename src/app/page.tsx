import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]"> 
        {/* for grid plugin need to import */}
       {/* <h1 className="text-3xl text-center">Rakesh Music Academy</h1> */}
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <TestimonialCards/>
       <UpcommingWebinar/>
       <Instructors/>
       <Footer/>
    </main>
  );
}
