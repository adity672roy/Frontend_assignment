import Collab from "@/components/Collab";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FullStackSection from "@/components/FullStackSection"; 
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FullStackSection/>
      <ProjectSection />
      <Collab />
      <Services />
      <TeamSection />
      <Faq/>
      <Footer/>
    </>
  );
}
