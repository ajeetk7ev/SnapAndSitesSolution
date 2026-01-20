import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Students from "./pages/Students";
import Business from "./pages/Business";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <div className={`flex min-h-screen flex-col font-sans ${theme === 'dark' ? 'dark-gradient' : 'light-gradient'}`}>
        <Navbar />
        <main className="flex-1 flex justify-center w-full py-12">
          <div className="w-[90vw] md:w-[85vw] max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/business" element={<Business />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center z-50 text-2xl font-black"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;
