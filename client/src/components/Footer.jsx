import { Link } from "react-router-dom";
import { details } from "@/data/details";

const Footer = () => {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-xl font-black tracking-tighter bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent uppercase">
                            Kinetik Digital
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            Empowering businesses and students with cutting-edge web and mobile solutions.
                            From college projects to enterprise applications, we build it all.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
                            <li><Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary">Portfolio</Link></li>
                            <li><Link to="/students" className="text-sm text-muted-foreground hover:text-primary">Students</Link></li>
                            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: {details.email}</li>
                            <li>Phone: {details.phone}</li>
                            <li>Address: {details.address}</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Kinetik Digital. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
