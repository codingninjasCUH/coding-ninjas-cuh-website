import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventsSection";
import ExploreSection from "@/components/home/ExploreSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main>
      <div className={"max-w-5xl mx-auto h-full pb-6 px-6 lg:px-0"}>
        <Hero />
        <AboutSection />
        <EventsSection />
        <ExploreSection />
        <FAQSection />
      </div>
    </main>
  );
}
