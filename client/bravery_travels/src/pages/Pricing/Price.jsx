import Pricing from "./Pricing";
import logo2 from "../../assets/logo2.jpeg";

function PricingHeader() {
  return (
    <section>
      <h1 className="pricing_header">Place where your money deserves</h1>
      <h1 className="pricing_title">Packages and their pricing</h1>
    </section>
  );
}

function Price() {
  const packages = [
    {
      img: logo2,
      category: "Luxury Car",
      description: "Lorem ipsum iiii",
      price: 30000,
    },
    {
      img: logo2,
      category: "Executive Car",
      description: "Lorem ipsum iiii",
      price: 40000,
    },
    {
      img: logo2,
      category: "SUV Car",
      description: "Lorem ipsum iiii",
      price: 50000,
    },
    {
      img: logo2,
      category: "Luxury Car",
      description: "Lorem ipsum iiii",
      price: 30000,
    },
  ];
  return (
    <>
      <PricingHeader />
      <section className="pricing_section">
        {packages.map((currentPackage, i) => (
          <Pricing
            key={i}
            img={currentPackage.img}
            category={currentPackage.category}
            description={currentPackage.description}
            price={currentPackage.price}
          />
        ))}
      </section>
    </>
  );
}

export default Price;
