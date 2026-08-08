"use client";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projects = [
  {
    title: "AdminFlow — Internal Workflow & Approval Management System",
    category: "Full-Stack Web App",
    liveUrl: "https://admin-flow-six.vercel.app/login",
    githubUrl: "https://github.com/WijayaPratama/AdminFlow",
    description:
      "AdminFlow is a full-stack web application designed to help internal teams manage administrative requests, approval processes, task assignments, and progress monitoring in a centralized dashboard. The project simulates a real business workflow where users can submit requests, managers can review and approve them, and teams can track follow-up tasks until completion. This project demonstrates my ability to build an end-to-end web application with authentication, role-based access control, relational database design, CRUD operations, approval logic, task management, dashboard analytics, and responsive user interface design.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Recharts",
      "Vercel",
    ],
  },
  {
    title: "Job Market Intelligence",
    category: "Data Analytics",
    liveUrl:
      "https://job-intelligence-fzxt1h192-wijayapratamas-projects.vercel.app/login",
    githubUrl: "https://github.com/WijayaPratama/Job_Intelligence",
    description:
      "Job Market Intelligence Dashboard is a data analytics project that analyzes job vacancy data to identify in-demand roles, trending skills, salary patterns, and career skill gaps. The project transforms raw job listing data into actionable insights through data cleaning, skill extraction, exploratory data analysis, and interactive dashboard visualization. This project demonstrates my ability to work with real-world datasets, perform data preprocessing, extract insights from unstructured job descriptions, build analytical dashboards, and communicate findings in a clear and practical way.",
    stack: [
      "Next.js",
      "shadcn/ui",
      "Python",
      "Pandas",
      "SQL",
      "Prisma",
      "PostgreSQL",
      "Recharts",
      "Vercel",
    ],
  },
  {
    title: "SIMPRO",
    category: "Sistem Informasi Akademik + Rekomendasi",
    liveUrl: "",
    githubUrl: "https://github.com/WijayaPratama/SIMPRO",
    description:
      "A final project proposal management information system for students, lecturers, and administrators, complete with document upload, approval flow, assignment of supervisors and examiners, proposal title similarity check, and TF-IDF-based supervisor recommendations. In collaboration with WBI Polytechnic University",
    stack: ["Next.js", "Prisma", "SQLite", "TF-IDF"],
  },
  {
    title: "Wijaya AI",
    category: "AI Chatbot Web",
    liveUrl: "",
    githubUrl: "https://github.com/WijayaPratama/WIJAYA-AI",
    description:
      "A local AI chatbot web application built with Next.js and integrated with 9Router through an OpenAI-compatible API. It supports model selection, Markdown-formatted AI responses, local chat history using browser storage, conversation management, import/export history, and light/dark mode. Designed to run locally with a custom Gemini-based AI model through 9Router.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "9Router"],
  },
  {
    title: "Bento Kopi Telkom Bandung",
    category: "Cafe Landing Page",
    liveUrl: "https://landing-page-snowy-nu-13.vercel.app/",
    githubUrl: "https://github.com/WijayaPratama/landingPage",
    description:
      "A modern and premium cafe landing page for Bento Kopi Telkom Bandung built with Next.js. It features a responsive layout, animated hero section, interactive food and drink menu with search, category filtering, pagination, gallery lightbox, Google Maps location section, WhatsApp contact button, SEO metadata, and smooth transitions using Framer Motion.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Administrative Document Automation System",
    category: "Data Engineer",
    liveUrl: "https://huggingface.co/spaces/Wijaya14/Implementasi-BKI",
    githubUrl:
      "https://huggingface.co/spaces/Wijaya14/Implementasi-BKI/tree/main",
    description:
      "Develop a web-based administration application to automate the creation of Debit Note, RAB, and Invoice documents in one system.",
    stack: [
      "Python",
      "Gradio",
      "OpenPyXL",
      "Python-docx",
      "Pandas",
      "MongoDB",
      "HuggingFace",
    ],
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: "React, Next.js, Tailwind CSS, TypeScript, HTML, CSS",
  },
  {
    icon: Server,
    title: "Backend",
    items: "API, Auth, PostgreSQL, Prisma, REST, Go",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    items: "SQL, Python, NumPy, Matplotlib, dashboarding",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    items: "AI fundamentals, model evaluation, feature engineering",
  },
];

const achievements = [
  {
    title: "Juara 1 SAUVC China",
    subtitle: "International Competition · 2026",
    icon: Trophy,
  },
  {
    title: "Finalis SAUVC Singapore",
    subtitle: "International Competition · 2025",
    icon: Award,
  },
  {
    title: "Top 20 Mahasiswa Berprestasi",
    subtitle: "Bidang Kemahasiswaan · 2024",
    icon: Trophy,
  },
  {
    title: "Finalis Nasional KKI",
    subtitle: "Kontes Kapal Indonesia · 2024",
    icon: Award,
  },
  {
    title: "Finalis Nasional KRI",
    subtitle: "Kontes Robot Indonesia · 2024",
    icon: Award,
  },
  {
    title: "Juara 3 KRI Wilayah",
    subtitle: "Kontes Robot Indonesia · 2024",
    icon: Trophy,
  },
  {
    title: "Juara 1 CCA Provinsi",
    subtitle: "Provincial Level · 2022",
    icon: Trophy,
  },
];

const aboutCards = [
  {
    icon: GraduationCap,
    title: "Informatics Student",
    description:
      "Mahasiswa S1 Informatika di Telkom University dengan IPK 3.73/4.00 dan fokus pada software engineering, data, dan AI.",
  },
  {
    icon: Users,
    title: "Robotics Leadership",
    description:
      "Ketua Divisi di Laboratorium Robotic SAS, memimpin perencanaan, pengembangan, dan pengujian robot bawah air.",
  },
  {
    icon: Briefcase,
    title: "Practical Web Experience",
    description:
      "Pernah mengembangkan aplikasi administrasi berbasis web untuk otomasi Nota Debet, RAB, dan Invoice saat internship di BKI.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-32 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-96 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-tight">
            Wijaya<span className="text-sky-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#achievements" className="transition hover:text-white">
              Achievements
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-white"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-32 md:grid-cols-[1.2fr_0.8fr] md:pt-36">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200"
          >
            <Sparkles size={16} />
            Informatics Student · Web Developer · Data Enthusiast
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
          >
            I build <span className="gradient-text">data-driven</span> web
            applications with clean UI and practical impact.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Saya adalah mahasiswa S1 Informatika Telkom University yang fokus
            pada Software Engineering, Data Science, dan pengembangan solusi web
            yang bisa dipakai secara nyata.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-2xl hover:shadow-sky-400/20"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white/5"
            >
              About Me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-4"
          >
            <div>
              <p className="text-3xl font-black">3.76</p>
              <p className="text-sm text-slate-400">GPA / 4.00</p>
            </div>
            <div>
              <p className="text-3xl font-black">7</p>
              <p className="text-sm text-slate-400">Achievements</p>
            </div>
            <div>
              <p className="text-3xl font-black">6</p>
              <p className="text-sm text-slate-400">Project Focus</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Bento */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="glass-card soft-glow rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Current Role</p>
              <h2 className="text-2xl font-bold">Practicum Assistant</h2>
            </div>
            <Rocket className="text-sky-400" size={34} />
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-sky-400/40">
              <p className="mb-2 text-sm text-slate-400">Education</p>
              <p className="font-semibold">Bachelor of Informatics</p>
              <p className="text-sm text-slate-400">Telkom University</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-sky-400/40">
              <p className="mb-2 text-sm text-slate-400">Main Stack</p>
              <p className="font-semibold">Python, SQL, React, Tailwind</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-sky-400/40">
              <p className="mb-2 text-sm text-slate-400">Career Direction</p>
              <p className="font-semibold">
                Software Engineering + Data Science
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Me */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              About Me
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              I combine engineering, data, and competition mindset.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Saya terbiasa bekerja dalam tim maupun mandiri, aktif mengikuti
              kompetisi nasional dan internasional, serta punya pengalaman
              memimpin tim teknis dalam proses riset dan pengembangan.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {aboutCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-emerald-400/10 p-3 text-emerald-400 transition group-hover:scale-110">
                    <Icon size={30} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Featured Work
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              My Projects
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Project untuk menunjukkan kemampuan full-stack, data analytics,
              dan integrasi machine learning ke dalam web app.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 opacity-0 transition group-hover:opacity-100" />

                <p className="mb-4 text-sm font-semibold text-sky-400">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 min-h-28 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex min-h-24 flex-wrap content-start gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition group-hover:border-sky-400/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex min-h-10 flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-4 py-2 text-sm font-semibold text-sky-300 transition duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:text-white"
                      >
                        Live Demo
                        <ExternalLink size={15} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:border-slate-400 hover:bg-white/5 hover:text-white"
                    >
                      GitHub
                      <FaGithub size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Achievements
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Competition-proven performance.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Achievement ini menunjukkan pengalaman kompetitif di bidang
              robotika, kapal, teknologi, dan akademik kemahasiswaan.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 ${
                    index === 0
                      ? "border-amber-300/40"
                      : "hover:border-amber-300/40"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300 transition group-hover:scale-110">
                      <Icon size={30} />
                    </div>
                    <span className="text-sm text-slate-500">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-slate-400">{item.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Skills Matrix
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              What I Can Build
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  variants={fadeUp}
                  className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40"
                >
                  <Icon
                    className="mb-5 text-violet-400 transition group-hover:scale-110"
                    size={34}
                  />
                  <h3 className="text-2xl font-bold">{skill.title}</h3>
                  <p className="mt-3 text-slate-300">{skill.items}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Contact
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Saya terbuka untuk opportunity sebagai Web Developer, Data
                Analyst, Data Scientist, atau role hybrid yang membutuhkan
                kemampuan web dan data.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:pratamawijaya549@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400"
              >
                <Mail className="text-sky-400" />
                <span>pratamawijaya549@gmail.com</span>
              </a>

              <a
                href="https://github.com/WijayaPratama"
                target="_blank"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400"
              >
                <FaGithub className="text-sky-400" size={24} />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/wijaya-pratama-702068200/"
                target="_blank"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400"
              >
                <FaLinkedin className="text-sky-400" size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
        © 2026 Wijaya Pratama. Built with Next.js, TypeScript, Tailwind CSS, and
        Motion.
      </footer>
    </main>
  );
}
