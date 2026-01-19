import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
    ArrowRight, Code, Laptop, Smartphone, Rocket, Check,
    Zap, Shield, Globe, Award, Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const pricingPlans = [
        {
            name: "Starter",
            price: "$499",
            description: "Perfect for startups and small personal projects.",
            features: ["Single Page Application", "Responsive Design", "Basic SEO", "1 Month Support", "Contact Form Integration"],
            popular: false,
        },
        {
            name: "Professional",
            price: "$1,499",
            description: "Ideal for growing businesses needing a robust UI.",
            features: ["Full Stack Development", "Admin Dashboard", "Advanced SEO", "3 Months Support", "API Integration", "Custom Animations"],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Scalable solutions for large-scale enterprise needs.",
            features: ["Microservices Architecture", "High Security", "Dedicated Server", "24/7 Priority Support", "White-label Solution", "Unlimited Revisions"],
            popular: false,
        },
    ];

    return (
        <div className="flex flex-col gap-24 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-[40px] bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/hero.png"
                        alt="Agency Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 backdrop-blur-sm"
                        >
                            Innovation Meets Execution
                        </motion.span>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight"
                        >
                            Building the Future of <br />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent italic">
                                Digital Experiences
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            Full-service digital agency crafting high-performance websites,
                            scalable apps, and cutting-edge software solutions.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 flex flex-wrap justify-center gap-4"
                        >
                            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl">
                                <Link to="/contact">
                                    Start Project <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg border-white/20 hover:bg-white/10 backdrop-blur-sm text-white">
                                <Link to="/portfolio">Learn More</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We build digital products that matter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Globe, title: "Web Development", desc: "Modern, scalable web apps built with the latest technologies." },
                        { icon: Smartphone, title: "Mobile Apps", desc: "Native-quality mobile experiences for iOS and Android." },
                        { icon: Shield, title: "Security & QA", desc: "Ensuring your product is secure and bug-free from day one." },
                        { icon: Zap, title: "Performance", desc: "Optimized for speed and high traffic handling." },
                        { icon: Users, title: "UI/UX Design", desc: "User-centric design that drives engagement and growth." },
                        { icon: Award, title: "Consultancy", desc: "Expert advice on digital strategy and scaling." }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-8 rounded-[32px] border bg-card hover:border-primary transition-all shadow-sm"
                        >
                            <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                                <service.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="p-12 md:p-16 lg:p-20 rounded-[48px] bg-muted/50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Pricing Plans</h2>
                    <p className="text-xl text-muted-foreground">Choose the plan that fits your vision.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[40px] border flex flex-col ${plan.popular ? "bg-primary text-primary-foreground shadow-2xl" : "bg-card"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-black mb-6">{plan.price}</div>
                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm">
                                        <Check className={`h-4 w-4 ${plan.popular ? "text-primary-foreground" : "text-green-500"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant={plan.popular ? "secondary" : "default"} className="w-full rounded-2xl h-12">
                                <Link to="/contact">Get Started</Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
