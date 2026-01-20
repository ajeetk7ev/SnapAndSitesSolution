import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, Layers, Code2, Smartphone } from "lucide-react";
import { details, projects as studentProjects } from "../data/details";

const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        ...studentProjects,
        {
            title: "Fintech Dashboard",
            category: "Web",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            description: "A real-time financial tracking system with complex data visualization and secure API integration.",
            tags: ["React", "D3.js", "Node.js", "AWS"],
            github: "#",
            live: "#"
        },
        {
            title: "HealthConnect App",
            category: "Mobile",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            description: "Native mobile application for patient-doctor interaction with real-time chat and scheduling.",
            tags: ["React Native", "Firebase", "WebRTC"],
            github: "#",
            live: "#"
        },
        {
            title: "Smart Inventory AI",
            category: "Business",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            description: "AI-powered inventory management for a retail chain, predicting stock requirements and trends.",
            tags: ["Next.js", "Python", "MongoDB", "TensorFlow"],
            github: "#",
            live: "#"
        },
        {
            title: "SaaS CRM Platform",
            category: "Web",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            description: "A multi-tenant CRM system with automated lead tracking and email marketing tools.",
            tags: ["Vue.js", "Express", "PostgreSQL"],
            github: "#",
            live: "#"
        },
        {
            title: "Crypto Wallet",
            category: "Mobile",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
            description: "Secure cross-platform crypto wallet with biometrics and real-time exchange rate updates.",
            tags: ["Flutter", "Web3.js", "Cloudfront"],
            github: "#",
            live: "#"
        },
    ];

    const categories = ["All", "Web", "Mobile", "Business", "Student"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Header */}
            <header className="relative py-24 px-12 rounded-[56px] bg-card border text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] -z-10" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-8">Curated Showcase</span>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
                        Engineered <br />
                        <span className="text-primary italic">Excellence.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                        A selection of our most challenging and impactful digital
                        products across various industries.
                    </p>
                </motion.div>
            </header>

            {/* Filter Bar */}
            <section className="flex flex-wrap items-center justify-center gap-4">
                {categories.map((c) => (
                    <button
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-8 py-3 rounded-full text-lg font-black transition-all ${filter === c
                            ? "bg-primary text-primary-foreground shadow-xl scale-105"
                            : "bg-muted text-muted-foreground hover:bg-accent border border-transparent"
                            }`}
                    >
                        {c}
                    </button>
                ))}
            </section>

            {/* Projects Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group flex flex-col rounded-[48px] bg-card border overflow-hidden hover:border-primary transition-all shadow-sm"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-10 flex flex-col gap-6">
                                <div>
                                    <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-black tracking-tight">{project.title}</h3>
                                </div>
                                <p className="text-muted-foreground font-medium leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-muted rounded-full text-xs font-bold uppercase tracking-tight text-muted-foreground border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </section>

            {/* "How We Build" Section (NEW) */}
            <section className="p-16 md:p-24 rounded-[64px] bg-muted/40 border text-center">
                <div className="max-w-4xl mx-auto flex flex-col gap-12">
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">The Engineering <span className="text-primary">LifeCycle.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Globe, title: "Discovery", desc: "Rigorous planning and requirement mapping." },
                            { icon: Layers, title: "Design", desc: "High-fidelity UI and robust architecture." },
                            { icon: Code2, title: "Build", desc: "Clean code with CI/CD and unit testing." },
                            { icon: Smartphone, title: "Deploy", desc: "Cloud deployment and post-launch audit." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-6">
                                <div className="h-14 w-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                                <p className="text-sm font-medium text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-20">
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Your Project Could Be Next.</h2>
                <button className="h-16 px-12 rounded-full bg-black text-white text-xl font-black hover:bg-gray-800 shadow-2xl transition-all">
                    Start Your Journey Now
                </button>
            </section>
        </div>
    );
};

export default Portfolio;
