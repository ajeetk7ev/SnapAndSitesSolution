import { motion } from "framer-motion";
import { Rocket, Target, BarChart, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Business = () => {
    const features = [
        { title: "MVP Launchpad", icon: Rocket, desc: "Go from idea to live product in weeks with our agile startup packages." },
        { title: "Growth Strategy", icon: Target, desc: "Scale your revenue with data-driven UX and conversion optimization." },
        { title: "Analytics Engine", icon: BarChart, desc: "Custom dashboards that turn complex data into actionable insights." },
        { title: "Peak Performance", icon: Zap, desc: "Ensure your systems handle millions of users without breaking a sweat." },
    ];

    return (
        <div className="flex flex-col gap-24">
            <header className="py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                        Scale Your <br />
                        <span className="text-primary italic">Enterprise</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        We partner with startups and SMEs to build the future of business technology.
                    </p>
                </motion.div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="p-12 rounded-[56px] border bg-card flex flex-col items-start gap-8"
                    >
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <f.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-4">{f.title}</h3>
                            <p className="text-xl text-muted-foreground leading-relaxed">{f.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="relative overflow-hidden p-16 md:p-24 rounded-[64px] bg-black text-white">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Tech Partnership</h2>
                        <div className="space-y-6 mb-12">
                            {[
                                "Dedicated Development Team",
                                "Weekly Syncs & Progress Reports",
                                "Advanced Security Protocols",
                                "Scalable Architecture Planning"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-xl">
                                    <CheckCircle className="text-blue-500 h-6 w-6" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 h-16 px-12 text-xl font-bold">
                            <Link to="/contact">Get a Tech Audit <ArrowRight className="ml-2 h-6 w-6" /></Link>
                        </Button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="w-full aspect-square rounded-[40px] bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 backdrop-blur-3xl border border-white/10 p-12 relative">
                            <Rocket className="w-full h-full text-white/5 opacity-50" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Business;
