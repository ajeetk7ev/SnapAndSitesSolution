import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
    const projects = [
        {
            title: "NexGen E-Commerce",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            description: "Scalable e-commerce platform with real-time analytics."
        },
        {
            title: "Pulse Health",
            category: "Mobile App",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            description: "AI-driven health monitoring for iOS and Android."
        },
        {
            title: "CryptoView",
            category: "Fintech",
            image: "https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800",
            description: "Real-time cryptocurrency tracking and market analysis."
        },
        {
            title: "LearnStream",
            category: "EdTech",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
            description: "Collaborative learning platform for modern students."
        },
        {
            title: "Evergreen",
            category: "Sustainability",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
            description: "Impact tracking for environmental initiatives."
        },
        {
            title: "Stratos CRM",
            category: "SaaS",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            description: "Streamlined sales cycles for enterprise teams."
        }
    ];

    return (
        <div className="flex flex-col gap-24">
            <header className="text-center py-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black mb-8 italic text-primary"
                >
                    Curated Work
                </motion.h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Showcasing digital products that define industries and empower users.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col gap-6"
                    >
                        <div className="aspect-[4/3] rounded-[48px] overflow-hidden border bg-muted shadow-sm transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                        </div>
                        <div className="px-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold tracking-widest uppercase text-primary/60">{project.category}</span>
                                <div className="flex gap-4">
                                    <ExternalLink size={18} className="cursor-pointer hover:text-primary" />
                                    <Github size={18} className="cursor-pointer hover:text-primary" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-black mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="py-24 rounded-[64px] bg-muted/40 border text-center px-8">
                <h2 className="text-3xl md:text-5xl font-black mb-10">Your project could be next.</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary text-primary-foreground px-12 py-5 rounded-full font-black text-xl shadow-xl transition-all"
                >
                    Start a Conversation
                </motion.button>
            </section>
        </div>
    );
};

export default Portfolio;
