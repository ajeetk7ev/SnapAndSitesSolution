import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, BookOpen, CheckCircle2, ArrowRight, Star, Youtube, FileText, Share2, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Students = () => {
    const sections = [
        {
            title: "Academic Excellence",
            icon: GraduationCap,
            color: "blue",
            desc: "Get professional guidance for your final year projects with industry-standard code and architecture."
        },
        {
            title: "Innovation Hub",
            icon: Lightbulb,
            color: "orange",
            desc: "Transform your research papers into working prototypes and live demos that stand out during defense."
        },
        {
            title: "Skill Booster",
            icon: BookOpen,
            color: "green",
            desc: "Learn real-world development workflows while building your project, preparing you for high-end tech jobs."
        }
    ];

    const milestones = [
        { step: "01", title: "Theme Selection", desc: "Consultation to pick a unique, viable project topic that fits your interests." },
        { step: "02", title: "Tech Architecture", desc: "Setting up the environment, database schemas, and core backend logic." },
        { step: "03", title: "Frontend Magic", desc: "Designing a stunning UI/UX that makes your project look like a real-world product." },
        { step: "04", title: "Final Handover", desc: "Providing code, project reports, and a full explanation for your viva defense." }
    ];

    const studentPricing = [
        {
            title: "Academic Starter",
            price: "$49",
            subtitle: "Best for Minor Projects",
            features: ["Modern UI Components", "Static Website (3-5 pgs)", "Basic Documentation", "Deployment Support", "Source Code Handover"],
            highlight: false
        },
        {
            title: "Pro Full-Stack",
            price: "$149",
            subtitle: "Best for Major/Final Projects",
            features: ["MERN/Next.js Stack", "Database & Auth Setup", "Admin Dashboard", "Full Report + Synopsis", "Video Viva Prep Support"],
            highlight: true
        },
        {
            title: "Research Elite",
            price: "$249",
            subtitle: "Best for Advanced Papers",
            features: ["AI/ML/Blockchain Integration", "Complex Research Logic", "IEEE Standard Reporting", "Scalable Deep-Tech Architecture", "Post-Defense Support"],
            highlight: false
        }
    ];

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* ... (Header and Focus Areas remain same) */}
            <header className="relative py-24 px-12 rounded-[56px] bg-gradient-to-br from-indigo-950 to-blue-900 text-white overflow-hidden">
                <div className="relative z-10 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-black uppercase tracking-widest">For Future Engineers</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter"
                    >
                        Bridge The <br />
                        <span className="text-blue-400 italic">Skill Gap.</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-blue-100/80 mb-12">
                        We help students master complex project requirements while building
                        portfolio-worthy solutions that impress examiners and recruiters alike.
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-white text-indigo-950 hover:bg-blue-50 h-16 px-12 text-xl font-black shadow-2xl shadow-blue-500/20">
                        <Link to="/contact">Get Project Map <Compass className="ml-2 h-6 w-6" /></Link>
                    </Button>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] opacity-10 rotate-12">
                    <GraduationCap size={700} />
                </div>
            </header>

            {/* Focus Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {sections.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-12 rounded-[48px] bg-card border flex flex-col gap-8 shadow-sm group hover:shadow-2xl transition-all"
                    >
                        <div className="h-20 w-20 rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <item.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Roadmap */}
            <section className="py-24 px-12 rounded-[56px] bg-muted/40 border">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-6xl font-black italic mb-6">Execution Phase</h2>
                    <p className="text-xl text-muted-foreground">From topic brainstorm to a successful project defense.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {milestones.map((m, i) => (
                        <div key={i} className="relative p-10 rounded-[32px] bg-card border shadow-sm flex flex-col gap-6">
                            <span className="text-6xl font-black text-primary/5 absolute top-6 right-8 italic">{m.step}</span>
                            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-lg">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">{m.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-medium">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Student Pricing Matrix */}
            <section className="relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6 italic"
                    >
                        Student Friendly <span className="text-primary">Budget.</span>
                    </motion.h2>
                    <p className="text-xl text-muted-foreground font-medium">Professional excellence at prices that fit a student's pocket.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {studentPricing.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-12 rounded-[48px] border flex flex-col gap-8 transition-all relative overflow-hidden ${plan.highlight
                                ? "bg-primary text-primary-foreground shadow-[0_32px_64px_-12px_rgba(59,130,246,0.3)] scale-105 z-10"
                                : "bg-card shadow-sm hover:shadow-2xl"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-white text-primary px-8 py-3 rounded-bl-[32px] font-black text-xs uppercase tracking-[0.2em]">
                                    Most Popular
                                </div>
                            )}
                            <div>
                                <h3 className="text-3xl font-black mb-1 tracking-tight">{plan.title}</h3>
                                <p className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                                    {plan.subtitle}
                                </p>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                                <span className={`text-lg font-bold ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground/60"}`}>/ project</span>
                            </div>
                            <ul className="flex flex-col gap-5 flex-1 mt-4">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-4 text-base font-semibold">
                                        <CheckCircle2 size={20} className={plan.highlight ? "text-primary-foreground" : "text-primary"} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                asChild
                                variant={plan.highlight ? "secondary" : "default"}
                                className={`w-full rounded-2xl h-16 text-xl font-black transition-all ${plan.highlight ? "hover:scale-105 shadow-xl" : "hover:shadow-lg"
                                    }`}
                            >
                                <Link to="/contact">Book Slot</Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Glassy Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[120px] rounded-full -z-0 pointer-events-none" />
            </section>

            {/* Support Features (NEW) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-10">
                    <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                        Total Support <br /> <span className="text-primary italic">No Compromise.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: FileText, title: "Reports", desc: "Detailed IEEE/standard project documentation." },
                            { icon: Youtube, title: "Explanations", desc: "Video walkthroughs for every code module." },
                            { icon: Share2, title: "Deployment", desc: "Real-world hosting link for your project." },
                            { icon: Star, title: "Viva Prep", desc: "Probable ques & ans for project defense." }
                        ].map((f, i) => (
                            <div key={i} className="flex flex-col gap-4 p-8 rounded-[32px] bg-muted/50 border">
                                <f.icon className="h-8 w-8 text-primary" />
                                <h4 className="text-xl font-black tracking-tight">{f.title}</h4>
                                <p className="text-muted-foreground font-medium">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600/10 blur-[80px] group-hover:scale-110 transition-transform" />
                    <div className="relative aspect-square rounded-[48px] bg-card border shadow-inner flex items-center justify-center overflow-hidden">
                        <div className="text-center p-12">
                            <div className="h-24 w-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <Star size={48} className="text-primary" />
                            </div>
                            <h3 className="text-4xl font-black italic mb-4">A+ Standard Projects</h3>
                            <p className="text-xl text-muted-foreground font-medium">Join 500+ students who defended projects built by Kinetik Digital with distinction.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Students;
