"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sangamgaikwad214@gmail.com",
    link: "mailto:sangamgaikwad214@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, Maharashtra, India",
    link: "#contact",
  },
];

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus("");
    setIsSuccess(false);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(), // honeypot field
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: { error?: string; message?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setIsSuccess(true);
      setStatus(result.message || "Message sent successfully!");
      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10";

  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-32 overflow-hidden px-6 py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-400">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Have a project, an idea, or just want to connect? Send me a message.
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>

              <h2 className="text-2xl font-bold">
                Let&apos;s start a conversation
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Whether you have a project idea, an opportunity, or simply want
                to talk about technology, I&apos;m always happy to connect.
              </p>
            </div>

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">{item.title}</p>
                    <p className="font-medium text-zinc-200">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social links */}
            <div className="flex gap-4 pt-3">
              <motion.a
                href="https://github.com/SangameshwarGaikwad21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <SiGithub className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sangameshwar-gaikwad-a83426340/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10"
              >
                <FaLinkedin className="h-7 w-7 text-[#0A66C2]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side: working contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Honeypot anti-spam field: hidden from real visitors */}
              <div className="absolute -left-[10000px]" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Enter your name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="Enter your email"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength={3}
                  maxLength={200}
                  placeholder="Project, opportunity, or just saying hello"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  maxLength={5000}
                  placeholder="Tell me about your project..."
                  className={`${inputClassName} resize-y`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-5 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    isSuccess ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>

            <BorderBeam
              duration={10}
              size={300}
              className="from-transparent via-cyan-400 to-transparent"
            />
            <BorderBeam
              duration={10}
              delay={5}
              size={300}
              borderWidth={2}
              className="from-transparent via-purple-500 to-transparent"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-zinc-500"
        >
          © {new Date().getFullYear()} Sangam. Built with Next.js & ❤️
        </motion.div>
      </div>
    </section>
  );
}
