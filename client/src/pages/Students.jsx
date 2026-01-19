import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Students = () => {
    const sections = [
        {
            title: "Academic Excellence",
            icon: GraduationCap,
            color: "bg-blue-500",
            desc: "Get professional guidance for your final year projects with industry-standard code."
        },
        {
            title: "Innovation Hub",
            icon: Lightbulb,
            color: "bg-orange-500",
            desc: "Transform your research papers into working prototypes and live demos."
        },
        {
            title: "Skill Booster",
            icon: BookOpen,
            color: "bg-green-500",
            desc: "Learn real-world development workflows while building your projects."
        }
    ];

    return (
        <div className="flex flex-col gap-24">
            <header className="relative py-24 px-12 rounded-[56px] bg-gradient-to-br from-indigo-900 to-blue-900 text-white overflow-hidden text-center md:text-left">
                <div className="relative z-10 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                    >
                        Future Ready <br /> <span className="text-blue-400">Projects</span>
                    </motion.h1>
                    <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                        Helping students bridge the gap between classroom theory and industry reality with high-impact project assistance.
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-white text-indigo-900 hover:bg-blue-50 h-14 px-10 text-lg">
                        <Link to="/contact">Discuss My Project</Link>
                    </Button>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] opacity-10">
                    <GraduationCap size={500} />
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {sections.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-12 rounded-[48px] bg-card border hover:shadow-2xl transition-all group"
                    >
                        <div className={`h-20 w-20 rounded-3xl ${item.color}/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`h-10 w-10 text-${item.color.split('-')[1]}-600`} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <section className="p-12 md:p-20 rounded-[56px] bg-muted/60 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8">What We Offer</h2>
                    <ul className="space-y-6">
                        {[
                            "100% Original Plagiarism-free Code",
                            "Full Documentation & Report Support",
                            "Deployment & Integration Guidance",
                            "One-on-One Project Explanations",
                            "Lifetime Access to Source Media"
                        ].map((t, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg font-medium">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-card border rounded-[40px] p-10 shadow-inner">
                    <div className="aspect-video rounded-[24px] bg-muted flex items-center justify-center border-dashed border-2">
                        <span className="text-muted-foreground font-medium italic">Project Showcase Video Coming Soon</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Students;
