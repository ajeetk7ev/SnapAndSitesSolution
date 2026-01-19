import { motion } from "framer-motion";
import { Globe, Smartphone, Laptop, Shield, Zap, Search, CheckCircle2 } from "lucide-react";

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

    return (
        <div className="flex flex-col gap-20">
            <header className="text-center md:text-left py-12 md:py-20 md:flex items-center justify-between gap-12 rounded-[48px] bg-muted/30 px-12">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        Digital <br /> Solutions <br />
                        <span className="text-primary italic">Without Limits</span>
                    </motion.h1>
                    <p className="text-xl text-muted-foreground">
                        We provide comprehensive tech services to help startups and enterprises scale their digital footprint.
                    </p>
                </div>
                <div className="hidden lg:block h-64 w-64 rounded-full bg-primary/10 animate-pulse border-8 border-primary/5" />
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-10 rounded-[40px] border bg-card hover:bg-muted/50 transition-all flex flex-col"
                    >
                        <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8">
                            <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                            {service.description}
                        </p>
                        <ul className="space-y-3">
                            {service.features.map((f, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </section>

            <section className="py-20 rounded-[48px] bg-primary text-primary-foreground text-center px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to start building?</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-10 py-5 rounded-full font-black text-xl hover:shadow-2xl transition-all"
                >
                    Work With Us
                </motion.button>
            </section>
        </div>
    );
};

export default Services;
