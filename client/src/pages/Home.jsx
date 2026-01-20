import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import {
    ArrowRight, Globe, Smartphone, Shield,
    Zap, Users, Award, Check, Sparkles, Code2, Layers, Cpu,
    Plus, Minus, Server, MousePointer2, Rocket, Layout, Database
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const techStack = [
        { name: "React", icon: Globe },
        { name: "Node.js", icon: Code2 },
        { name: "MongoDB", icon: Database },
        { name: "Express", icon: Server },
        { name: "Tailwind", icon: Layout },
        { name: "Framer", icon: MousePointer2 },
        { name: "AWS", icon: Server },
        { name: "Next.js", icon: Rocket }
    ];

    const services = [
        { icon: Globe, title: "Web Architecture", desc: "Crafting blazing fast web applications with modern tech stacks like MERN & Next.js." },
        { icon: Smartphone, title: "Mobile Ecosystems", desc: "Native and hybrid mobile apps that offer seamless performance on iOS & Android." },
        { icon: Shield, title: "Cybersecurity & QA", desc: "Rigorous testing and security protocols to ensure your data stays protected." },
        { icon: Zap, title: "Performance Tuning", desc: "Optimizing codebases for speed, scalability, and extreme user load." },
        { icon: Users, title: "UI/UX Design", desc: "Research-driven designs that focus on conversion and user satisfaction." },
        { icon: Award, title: "Consultancy", desc: "Digital transformation roadmaps for startups and students to stay ahead." }
    ];

    const pricing = [
        {
            title: "Static Website",
            price: "Starting $299",
            subtitle: "Best for Portfolios & Blogs",
            features: ["Single/Multi-page Static", "Responsive Design", "Basic SEO Optimization", "Fast Loading Speed", "Domain/Hosting Setup"],
            highlight: false
        },
        {
            title: "Dynamic Website",
            price: "$30 / page",
            subtitle: "Best for Scalable Content",
            features: ["Admin Dashboard", "CMS Integration", "DB Connectivity", "User Management", "Per-page Architecture"],
            highlight: true
        },
        {
            title: "Startup/App MVP",
            price: "Starting $1,499",
            subtitle: "Best for New Ventures",
            features: ["Full Stack Development", "Mobile + Web Version", "Auth & State Mgmt", "API Integration", "3 Months Post-support"],
            highlight: false
        },
        {
            title: "Custom Enterprise",
            price: "Custom Quote",
            subtitle: "Best for Big Businesses",
            features: ["Separate Dedicated Server", "Scalable Microservices", "Advanced Security Logs", "Payment Gateways", "Unlimited Customization"],
            highlight: false
        }
    ];

    const testimonials = [
        {
            text: "They built my final year project with full explanation and deployment support. Amazing service!",
            author: "Engineering Student",
            role: "CSE Graduate"
        },
        {
            text: "Our startup MVP was delivered on time with great quality and communication. Highly recommended!",
            author: "Startup Founder",
            role: "SaaS Platform"
        },
        {
            text: "Professional website helped our business grow online presence quickly. The design is top-notch.",
            author: "Local Business Owner",
            role: "Retail Sector"
        }
    ];

    const faqs = [
        { q: "How long does a typical project take?", a: "Static websites usually take 1-2 weeks. Dynamic and Startup MVPs range from 4-8 weeks depending on the complexity and features required." },
        { q: "Do I own the source code after completion?", a: "Yes, 100%. Upon final payment, we handover all source code, design assets, and deployment credentials to you." },
        { q: "Can you help with deployment on my own server?", a: "Absolutely. We specialize in deploying to AWS, DigitalOcean, and Vercel. For custom enterprise plans, we handle the entire server architecture setup." },
        { q: "Do you offer support for students' final year projects?", a: "Yes, we provide not just the code but a full explanation session so you can understand the architecture for your viva/defense." }
    ];

    return (
        <div className="flex flex-col gap-32 pb-32 overflow-hidden relative">
            <Helmet>
                <title>Kinetik Digital | Elite Web & App Solutions</title>
                <meta
                    name="description"
                    content="Elite MERN stack agency building college projects, startup MVPs, and enterprise business websites with cutting-edge tech."
                />
            </Helmet>

            {/* BACKGROUND DECORATIONS */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-[48px] bg-black text-white shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/hero.png"
                        loading="lazy"
                        alt="Agency Hero"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold uppercase tracking-widest rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 backdrop-blur-md"
                        >
                            <Sparkles size={16} /> Websites • Apps • Projects • MVPs
                        </motion.span>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
                        >
                            Design. Build. <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent italic">
                                Scale Everything.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Helping students, startups, and local businesses dominate the digital space
                            with high-performance real-world implementations.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 flex flex-wrap justify-center gap-6"
                        >
                            <Button asChild size="lg" className="rounded-full h-16 px-10 text-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 group">
                                <Link to="/contact">
                                    Start Your Project <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 text-xl font-bold border-white/20 hover:bg-white/10 backdrop-blur-sm text-white">
                                <Link to="/portfolio" className="flex items-center gap-2">
                                    <Layers size={20} /> View Portfolio
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. TECH STACK (Animated Marquee) */}
            <section className="container mx-auto px-6">
                <div className="py-12 border-y border-white/10 overflow-hidden relative">
                    <div className="flex items-center justify-around gap-12 animate-marquee whitespace-nowrap">
                        {[...techStack, ...techStack].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <tech.icon className="h-8 w-8 text-primary" />
                                <span className="text-xl font-black uppercase tracking-tighter">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WHO WE HELP (Previous Section) */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-col gap-16"
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-black tracking-tight mb-6 italic">Who We Help</motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">Tailored solutions for different stages of the digital journey.</motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "College Students",
                                desc: "Final year projects, robust reports, deployment and comprehensive viva-ready documentation.",
                                icon: Award,
                                color: "blue"
                            },
                            {
                                title: "Visionary Startups",
                                desc: "Rapid MVP development, high-conversion landing pages, and scalable cloud-ready architectures.",
                                icon: Cpu,
                                color: "purple"
                            },
                            {
                                title: "Local Businesses",
                                desc: "Professional digital presence, e-commerce automation, and tools built for sustainable growth.",
                                icon: Globe,
                                color: "orange"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                className="p-10 border rounded-[40px] bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col gap-6 relative overflow-hidden group"
                            >
                                <div className="h-16 w-16 rounded-[20px] bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 4. OUR EXPERTISE (Combined Services) */}
            <section className="container mx-auto px-6 py-20 bg-muted/30 rounded-[64px]">
                <div className="flex flex-col gap-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 italic">Our Expertise</h2>
                        <p className="text-xl text-muted-foreground">Next-generation services for a competitive landscape.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="p-10 rounded-[40px] border bg-card hover:bg-accent/40 transition-all flex flex-col gap-6 shadow-sm border-white/5"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                                    <s.icon className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold mb-3 tracking-tight">{s.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed font-medium">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. THE ECOSYSTEM (Process Section) */}
            <section className="container mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-black mb-16 italic tracking-tight">The Ecosystem</h2>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 -z-10" />

                    {["Strategize", "Interface", "Architect", "Deploy"].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 border rounded-[40px] bg-card relative z-10 hover:border-primary shadow-sm hover:shadow-xl transition-all"
                        >
                            <span className="absolute top-6 right-8 text-6xl font-black opacity-5 italic text-primary">0{i + 1}</span>
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center font-black text-xl mb-6">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">{step}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. PRICING MATRIX (Current Section) */}
            <section className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 italic">Transparent Models</h2>
                    <p className="text-xl text-muted-foreground">Strategic pricing for every scale of innovation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricing.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[48px] border flex flex-col gap-8 transition-all relative overflow-hidden ${plan.highlight ? "bg-primary text-primary-foreground shadow-2xl scale-105 z-10" : "bg-card shadow-sm"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-white text-primary px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">
                                    Popular
                                </div>
                            )}
                            <div>
                                <h3 className="text-2xl font-black mb-1">{plan.title}</h3>
                                <p className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                                    {plan.subtitle}
                                </p>
                            </div>
                            <div className="text-4xl font-black tracking-tighter">{plan.price}</div>
                            <ul className="flex flex-col gap-4 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                                        <Check size={18} className={plan.highlight ? "text-primary-foreground" : "text-primary"} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant={plan.highlight ? "secondary" : "default"} className="w-full rounded-2xl h-14 text-lg font-bold">
                                <Link to="/contact">Get Started</Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 7. VOICES OF TRUST (Testimonials) */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <h2 className="text-5xl md:text-6xl font-black italic tracking-tight">Voices of Trust</h2>
                    <Button variant="outline" className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5 font-bold">More Stories</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="p-10 border rounded-[48px] bg-card relative overflow-hidden group shadow-sm flex flex-col gap-8 min-h-[300px]"
                        >
                            <div className="flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, i) => <Check key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-xl font-medium leading-relaxed italic flex-1">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black uppercase text-primary">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-black text-lg tracking-tight">{t.author}</h4>
                                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 8. COMMON QUERIES (FAQ) */}
            <section className="container mx-auto px-6 py-20 bg-muted/30 rounded-[64px]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16 italic text-center text-primary">Common Queries</h2>
                    <div className="flex flex-col gap-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className="border border-white/10 rounded-[32px] bg-card overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-8 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
                                >
                                    <span className="text-xl md:text-2xl font-black tracking-tight">{faq.q}</span>
                                    {openFaq === i ? <Minus className="h-6 w-6 shrink-0" /> : <Plus className="h-6 w-6 shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-8 pb-8 text-lg text-muted-foreground leading-relaxed font-medium"
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-black text-white p-20 text-center rounded-[64px] relative overflow-hidden border border-white/10 group shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-0 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-0" />

                    <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 leading-[0.9] tracking-tighter">
                        Infinite Potential. <br />
                        <span className="text-blue-500 italic">One Solution.</span>
                    </h2>

                    <p className="mb-12 text-xl text-gray-400 max-w-xl mx-auto relative z-10 font-medium">
                        Whether you're a student building a future or a startup building a market —
                        we have the tools to make it happen.
                    </p>

                    <Link to="/contact" className="relative z-10 right-10 sm:right-0">
                        <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-200  h-16 px-4 sm:px-12 text-xl sm:text-2xl font-black rounded-full shadow-2xl group">
                            Start Building Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </section>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: fit-content;
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

        </div>
    );
};

export default Home;
