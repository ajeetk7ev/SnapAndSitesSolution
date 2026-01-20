import { motion } from "framer-motion";
import { Rocket, Target, BarChart, Zap, CheckCircle, ArrowRight, ShieldCheck, TrendingUp, Handshake, Globe2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Business = () => {
    const features = [
        { title: "MVP Launchpad", icon: Rocket, desc: "Go from idea to live product in weeks with our agile startup packages and lean development." },
        { title: "Growth Strategy", icon: Target, desc: "Scale your revenue with data-driven UX, conversion optimization, and market-ready features." },
        { title: "Analytics Engine", icon: BarChart, desc: "Custom dashboards that turn complex user data into actionable business insights." },
        { title: "Peak Performance", icon: Zap, desc: "Ensure your systems handle millions of users without breaking a sweat with our cloud architecting." },
    ];

    const pillars = [
        { icon: ShieldCheck, title: "Enterprise Security", desc: "Military-grade encryption and data protection protocols." },
        { icon: TrendingUp, title: "Market Scaling", desc: "Architectures designed to handle 10x traffic bursts." },
        { icon: Handshake, title: "Tech Synergy", desc: "Long-term partnership with dedicated product managers." },
        { icon: Globe2, title: "Global Reach", desc: "Multi-region deployments and CDN integrations." }
    ];

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Dynamic Header */}
            <header className="relative py-32 text-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto px-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-widest mb-8">Scale Without Limits</span>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
                        Engineered for <br />
                        <span className="text-primary italic">Momentum.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
                        We partner with ambitious startups and SMEs to build
                        the high-performance technology of tomorrow.
                    </p>
                </motion.div>
            </header>

            {/* Core Solutions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8 }}
                        className="p-16 rounded-[64px] border bg-card flex flex-col items-start gap-10 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all"
                    >
                        <div className="h-20 w-20 rounded-3xl bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                            <f.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black mb-6 tracking-tight">{f.title}</h3>
                            <p className="text-2xl text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Trust Pillars (NEW) */}
            <section className="py-24 px-12 rounded-[72px] bg-black text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -z-0" />
                <div className="text-center mb-24 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black italic mb-8 underline decoration-blue-500/30 underline-offset-8">The Tech Synergy</h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">Why industry leaders choose Kinetik Digital as their primary technology partner.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center gap-6 group"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                <p.icon size={28} className="group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">{p.title}</h3>
                            <p className="text-gray-400 font-medium leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detailed Partnership Section (NEW) */}
            <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20 items-center">
                <div className="flex flex-col gap-10">
                    <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                        Dedicated <br /> <span className="text-primary italic">Product Teams.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                        We don't just write code; we integrate with your vision. Every business
                        project gets a dedicated squad of developers, designers, and managers.
                    </p>
                    <ul className="space-y-6">
                        {[
                            "Direct CTO-level communication Channels",
                            "Agile Development with Weekly Sprints",
                            "Scalable Architecture Audit (Pre-launch)",
                            "Full Stack Security Hardening"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 text-2xl font-black tracking-tight">
                                <CheckCircle className="text-primary h-8 w-8 shrink-0" />
                                {item}
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 animate-pulse" />
                    <div className="aspect-square rounded-[64px] bg-card border shadow-2xl p-16 flex flex-col justify-center gap-10">
                        <div className="space-y-2">
                            <div className="h-4 w-3/4 bg-muted rounded-full animate-pulse" />
                            <div className="h-4 w-1/2 bg-muted rounded-full animate-pulse opacity-50" />
                        </div>
                        <Rocket size={120} className="text-primary animate-bounce ml-auto" />
                        <div className="flex flex-col gap-4">
                            <h4 className="text-4xl font-black tracking-tighter">Global Deployment</h4>
                            <p className="text-lg text-muted-foreground font-bold">AWS • DigitalOcean • Vercel • Custom VPS</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Outreach */}
            <section className="p-20 md:p-32 rounded-[80px] bg-muted/50 border text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12">Elite Tech <br /> Partnership.</h2>
                    <Button asChild size="lg" className="rounded-full bg-primary h-20 px-16 text-2xl font-black shadow-3xl shadow-primary/20 hover:scale-105 transition-transform">
                        <Link to="/contact">Initial Tech Audit <ArrowRight className="ml-3 h-8 w-8" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Business;
