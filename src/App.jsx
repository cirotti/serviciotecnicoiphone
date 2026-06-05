import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="page">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}