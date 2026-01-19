import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2, Sparkles } from "lucide-react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setStatus({ type: "success", message: res.data.message });
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

    return (
        <div className="flex flex-col gap-24 py-12">
            <header className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                        <Sparkles size={16} /> Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-8xl font-black italic tracking-tighter mb-8">
                        Tell Us Everything
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to bring your vision to life? Fill out the form below or use our contact details to get started.
                    </p>
                </motion.div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
                {/* Info Column */}
                <div className="flex flex-col gap-8">
                    <div className="p-10 rounded-[40px] border bg-card hover:border-primary transition-all">
                        <Mail className="h-10 w-10 text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground text-lg">contact@appandsites.com</p>
                    </div>
                    <div className="p-10 rounded-[40px] border bg-card hover:border-primary transition-all">
                        <Phone className="h-10 w-10 text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Phone</h3>
                        <p className="text-muted-foreground text-lg">+1 (234) 567-890</p>
                    </div>
                    <div className="p-10 rounded-[40px] border bg-card hover:border-primary transition-all">
                        <MapPin className="h-10 w-10 text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Office</h3>
                        <p className="text-muted-foreground text-lg">123 Tech Avenue, Innovation City</p>
                    </div>
                </div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-12 md:p-16 rounded-[56px] bg-muted/40 border"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-14 px-6 rounded-2xl border bg-card focus:ring-2 focus:ring-primary outline-none text-xl"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-14 px-6 rounded-2xl border bg-card focus:ring-2 focus:ring-primary outline-none text-xl"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full h-14 px-6 rounded-2xl border bg-card focus:ring-2 focus:ring-primary outline-none text-xl"
                                placeholder="What are we building?"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-6 py-4 rounded-3xl border bg-card focus:ring-2 focus:ring-primary outline-none text-xl resize-none"
                                placeholder="Tell us everything..."
                            />
                        </div>

                        {status.message && (
                            <p className={`text-lg font-bold ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                {status.message}
                            </p>
                        )}

                        <Button disabled={loading} className="w-full h-16 rounded-2xl text-xl font-black shadow-xl">
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Transmitting...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-6 w-6" /> Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
