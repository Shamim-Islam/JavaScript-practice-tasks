import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/pricingOptions/PricingOptions";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
