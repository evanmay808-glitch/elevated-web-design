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

const policyRoutes = ["privacy", "cookies", "terms"];

function App() {
  const path = window.location.pathname.split("/").filter(Boolean).join("/");
  const isPolicyPage = policyRoutes.includes(path);

  return (
    <div className="App" data-testid="app-root">
      <Navbar />
      {isPolicyPage ? (
        <main className="pt-24">
          <Legal page={path} />
        </main>
      ) : (
        <main>
          <Hero />
          <Portfolio />
          <Services />
          <Pricing />
          <Contact />
        </main>
      )}
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
