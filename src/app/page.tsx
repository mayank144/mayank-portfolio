import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 lg:px-12 py-6">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        {/* <ProjectSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
