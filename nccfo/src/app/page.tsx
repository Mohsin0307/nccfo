import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DepartmentList from "./components/DepartmentList";
import Footer from "./components/Footer";
import OrganizationOverview from "./components/OrganizationOverview";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OrganizationOverview />
      <DepartmentList />
      <Services />
      <Footer />
    </div>
  );
}
