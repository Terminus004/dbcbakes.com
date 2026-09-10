import Hero from "@/components/home/Hero";
import HeritageStrip from "@/components/home/HeritageStrip";
import Categories from "@/components/home/Categories";
import Bestsellers from "@/components/home/Bestsellers";
import StoryTeaser from "@/components/home/StoryTeaser";
import CustomCakes from "@/components/home/CustomCakes";
import Testimonials from "@/components/home/Testimonials";
import VisitUs from "@/components/home/VisitUs";

export default function Home() {
  return (
    <>
      <Hero />
      <HeritageStrip />
      <Categories />
      <Bestsellers />
      <StoryTeaser />
      <CustomCakes />
      <Testimonials />
      <VisitUs />
    </>
  );
}
