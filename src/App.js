import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Legal } from "./components/Legal";
import { CookieConsent } from "./components/CookieConsent";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <Contact />
        <Legal />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
