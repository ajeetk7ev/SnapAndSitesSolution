import { motion } from "framer-motion";
import { Globe, Smartphone, Laptop, Shield, Zap, Search, CheckCircle2, ArrowRight, Lightbulb, Heart, BarChart3, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        {
            title: "Web Engineering",
            icon: Globe,
            description: "Full-stack web applications built with modern tools like React, Next.js, and Node.js for maximum performance.",
            features: ["SPA & PWA Development", "E-commerce Solutions", "Custom CMS Building", "Cloud Integration"]
        },
        {
            title: "Mobile Apps",
            icon: Smartphone,
            description: "Native-quality mobile experiences tailored for iOS and Android, focusing on speed and usability.",
            features: ["React Native Apps", "Flutter Solutions", "Offline-First Design", "Store Deployment"]
        },
        {
            title: "Software Dev",
            icon: Laptop,
            description: "Custom software tailored to streamline your business workflows and automate repetitive tasks.",
            features: ["Enterprise SaaS", "Inventory Systems", "CRM & Dashboards", "API Development"]
        },
        {
            title: "Cyber Security",
            icon: Shield,
            description: "Robust security audits and implementations to protect your data and users from digital threats.",
            features: ["Penetration Testing", "Auth Implementation", "Data Encryption", "Compliance Checks"]
        },
        {
            title: "Optimization",
            icon: Zap,
            description: "Turning slow, legacy systems into high-speed digital assets that scale with your growth.",
            features: ["Code base Audit", "DB Optimization", "Cache Strategies", "Load Balancing"]
        },
        {
            title: "SEO Strategy",
            icon: Search,
            description: "Data-driven SEO strategies to boost your organic reach and ensure you stay ahead of the competition.",
            features: ["Technical SEO", "Content Audit", "Keyword Research", "Analytics Insight"]
        },
    ];

    const valueProps = [
        { icon: Lightbulb, title: "Innovation", desc: "Always using the latest tech to give you a competitive edge." },
        { icon: Heart, title: "Trust", desc: "Transparent processes and lifelong project support." },
        { icon: BarChart3, title: "Scalability", desc: "Systems that grow with your user base seamlessly." },
        { icon: Clock, title: "Agility", desc: "Swift delivery cycles without compromising quality." }
    ];

    return (
        <div className="flex flex-col gap-32">
            {/* Header */}
            <header className="relative py-24 px-12 rounded-[56px] bg-primary text-primary-foreground overflow-hidden">
                <div className="relative z-10 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
                    >
                        Capabilities <br />
                        <span className="opacity-50 italic">Defined.</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed opacity-90">
                        We don't just build software; we engineer digital legacy. Explore our
                        comprehensive suite of tech solutions.
                    </p>
                </div>
                <div className="absolute right-[-5%] top-[-10%] opacity-10 rotate-12">
                    <Zap size={600} />
                </div>
            </header>

            {/* Services Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-10 rounded-[48px] border bg-card hover:border-primary transition-all flex flex-col shadow-sm"
                    >
                        <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-black mb-4 tracking-tight">{service.title}</h3>
                        <p className="text-muted-foreground text-lg mb-10 flex-1 leading-relaxed">
                            {service.description}
                        </p>
                        <ul className="space-y-4 pt-6 border-t">
                            {service.features.map((f, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm font-bold tracking-tight">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </section>

            {/* Why Us Section (NEW) */}
            <section className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black italic mb-6">Built for Success</h2>
                    <p className="text-xl text-muted-foreground">The pillars of our engineering department.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {valueProps.map((prop, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="text-center flex flex-col items-center gap-6"
                        >
                            <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/20">
                                <prop.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-2 tracking-tight">{prop.title}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">{prop.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Journey Section (NEW) */}
            <section className="p-16 md:p-24 rounded-[64px] bg-muted/40 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10" />
                <div className="max-w-4xl mx-auto flex flex-col gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                            Engineering <br /> <span className="text-primary italic">Workflow.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-medium">
                            We follow a rigorous, high-standard process for every project.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {[
                            { id: "01", title: "Discovery", desc: "Understanding your vision, business goals, and technical requirements." },
                            { id: "02", title: "Architecture", desc: "Designing robust, scalable backends and intuitive user interfaces." },
                            { id: "03", title: "Sprints", desc: "Fast-paced development with bi-weekly progress updates and demos." },
                            { id: "04", title: "QA & Launch", desc: "Rigorous security audits and performance testing before deployment." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-8 p-10 rounded-[32px] bg-card border group hover:border-primary transition-all shadow-sm"
                            >
                                <span className="text-4xl md:text-6xl font-black text-primary/10 transition-colors group-hover:text-primary/20">{step.id}</span>
                                <div>
                                    <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight">{step.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-24 rounded-[64px] bg-black text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">
                    Don't Just Dream. <br />
                    <span className="text-blue-500 italic">Build It.</span>
                </h2>
                <Button asChild size="lg" className="rounded-full h-16 px-12 text-xl font-bold bg-white text-black hover:bg-gray-200">
                    <Link to="/contact">Book a Tech Sync <ArrowRight className="ml-2" /></Link>
                </Button>
            </section>
        </div>
    );
};

export default Services;
