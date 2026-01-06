import ContactForm from "./components/ContactForm";
import Experiences from "./components/Services";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Pricing from "./components/Pricing";
import Solutions from "./components/Solutions";
// import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div id="home" className="w-full overflow-x-hidden">
      <div className="w-full lg:w-5/6 mx-auto py-2 lg:py-6">
        <Navbar />
        <Hero />
        <Experiences />
        <Solutions />
        <Pricing />
        <Partner />
        <Testimonials />
        {/* <Team /> */}
        <FAQAccordion />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
