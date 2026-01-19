import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Students", path: "/students" },
        { name: "Business", path: "/business" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="sticky top-4 z-50 w-full flex justify-center px-4">
            <nav className="w-[90vw] md:w-[85vw] max-w-7xl h-16 rounded-full border bg-background/80 backdrop-blur-md px-6 flex items-center justify-between shadow-lg">
                <Link to="/" className="flex items-center space-x-2 shrink-0">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        appandsites
                    </span>
                </Link>

                {/* Desktop Tab Links */}
                <div className="hidden lg:flex items-center bg-muted/30 rounded-full p-1 border">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative px-4 py-1.5 text-sm font-medium transition-all rounded-full ${location.pathname === link.path
                                    ? "text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </motion.div>
                        </AnimatePresence>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute top-20 left-4 right-4 lg:hidden"
                    >
                        <div className="bg-background border rounded-3xl p-4 shadow-2xl flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-3 text-base font-medium transition-all rounded-2xl ${location.pathname === link.path
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-muted"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
