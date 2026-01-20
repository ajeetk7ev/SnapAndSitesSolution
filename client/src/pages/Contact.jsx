import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, AlertCircle, Clock, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { details } from "../data/details";
import { API_URL } from "../utils/api";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });
        try {
            const res = await axios.post(`${API_URL}/contact`, formData);
            setStatus({ type: "success", message: res.data.message || "Message sent successfully!" });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setStatus({
                type: "error",
                message: error.response?.data?.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: MapPin, title: "Our HQ", detail: `${details.address}`, sub: "Tech Hub central" },
        { icon: Mail, title: "Email Us", detail: `${details.email}`, sub: "24h Response Goal" },
        { icon: Phone, title: "Call Us", detail: `${details.phone}`, sub: "Mon-Sat, 10am-10pm" },
        { icon: MessageSquare, title: "Live Chat", detail: "Available on Whatsapp", sub: "Instant Connectivity" }
    ];

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Header Content */}
            <header className="relative py-24 px-12 rounded-[56px] bg-card border overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] -z-10" />
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mb-8 text-primary font-black uppercase tracking-[0.2em] text-sm"
                    >
                        <Globe size={16} /> Global Connectivity
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]"
                    >
                        Let's Start a <br />
                        <span className="text-primary italic">Paradigm Shift.</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        Whether it's a student project or a complex enterprise solution,
                        every great build begins with a single conversation.
                    </p>
                </div>
            </header>

            {/* Contact Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 ">
                {/* Info & Map Column */}
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-[40px] bg-card border shadow-sm flex flex-col gap-4"
                            >
                                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-1 tracking-tight">{item.title}</h3>
                                    <p className="text-muted-foreground font-bold text-sm tracking-tight">{item.detail}</p>
                                    <p className="text-xs text-muted-foreground/60 uppercase font-black tracking-widest mt-1">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                </div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-16 rounded-[48px] bg-card border shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Mail size={200} />
                    </div>

                    <h2 className="text-4xl font-black mb-10 tracking-tight">Transmission Box</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-sm font-black uppercase tracking-widest ml-4">Full Identity</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-muted/50 border rounded-[24px] h-14 px-8 outline-none focus:border-primary transition-all font-medium text-lg"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-sm font-black uppercase tracking-widest ml-4">Contact Link (Email)</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-muted/50 border rounded-[24px] h-14 px-8 outline-none focus:border-primary transition-all font-medium text-lg"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-black uppercase tracking-widest ml-4">Project Subject</label>
                            <input
                                required
                                type="text"
                                placeholder="Student Project / Business / Startup"
                                className="w-full bg-muted/50 border rounded-[24px] h-14 px-8 outline-none focus:border-primary transition-all font-medium text-lg"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-black uppercase tracking-widest ml-4">Technical Brief</label>
                            <textarea
                                required
                                rows={5}
                                placeholder="Describe your vision or requirements..."
                                className="w-full bg-muted/50 border rounded-[32px] p-8 outline-none focus:border-primary transition-all font-medium text-lg resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <AnimatePresence mode="wait">
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`p-6 rounded-[24px] flex items-center gap-4 font-bold ${status.type === "success"
                                        ? "bg-green-500/10 text-green-600 border border-green-500/20"
                                        : "bg-red-500/10 text-red-600 border border-red-500/20"
                                        }`}
                                >
                                    {status.type === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Button
                            disabled={loading}
                            type="submit"
                            size="lg"
                            className="rounded-full h-16 text-xl font-black bg-primary text-primary-foreground hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
                        >
                            {loading ? (
                                <span className="flex items-center gap-3">
                                    <Clock className="animate-spin h-6 w-6" /> Processing...
                                </span>
                            ) : (
                                <span className="flex items-center gap-3">
                                    Transmit Signal <Send className="h-6 w-6" />
                                </span>
                            )}
                        </Button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
