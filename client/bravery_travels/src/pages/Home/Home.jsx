import InquiryForm from "./Form";
import Hero from "./Hero";
import Experience from "./Experience";
import "./Home.css";
import Vehicle from "./Vehicles";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <InquiryForm className="form_inquire" />
      <Experience />
      <Vehicle />
      <Testimonials />
    </>
  );
}

export default Home;
