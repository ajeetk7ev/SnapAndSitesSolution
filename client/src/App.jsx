import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Students from "./pages/Students";
import Business from "./pages/Business";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex justify-center w-full py-8">
          <div className="w-[90vw] md:w-[85vw] max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/students" element={<Students />} />
              <Route path="/business" element={<Business />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
