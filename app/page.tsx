"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, FileText, CheckCircle, AlertCircle, TrendingUp, 
  Sparkles, File, Loader2, ArrowRight, Zap, Target, PenTool, LayoutDashboard, Menu, X 
} from "lucide-react";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [results, setResults] = useState<{
    resumeScore: number;
    atsScore: number;
    missingSkills: string[];
    improvements: string[];
    coverLetter: string;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults(null);
    }
  };

  const handleAnalyze = () => {
    if (!file) return;
    setIsAnalyzing(true);
    setResults(null);

    // Mock AI Request
    setTimeout(() => {
      setResults({
        resumeScore: 85,
        atsScore: 78,
        missingSkills: ["GraphQL", "Tailwind CSS", "Agile Methodology", "CI/CD Pipeline"],
        improvements: [
          "Quantify your achievements with metrics (e.g., 'Increased revenue by 15%').",
          "Include a summary section at the top highlighting your main value proposition.",
          "Ensure consistent formatting for dates and bullet points.",
          "Add relevant keywords from the job description to improve ATS matching.",
        ],
        coverLetter: `Dear Hiring Manager,\n\nI am writing to express my strong interest in the ${jobTitle || "open"} position at your esteemed company. With a solid foundation in web development and a passion for creating intuitive user experiences, I am confident in my ability to contribute effectively to your team.\n\nMy recent experience has allowed me to hone my skills in modern web technologies, delivering scalable and performant applications. I am particularly drawn to your company's innovative approach and commitment to excellence.\n\nI would welcome the opportunity to discuss how my background, skills, and certifications will be of benefit to your organization. Thank you for your time and consideration.\n\nSincerely,\n[Your Name]`,
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-vintage-bg text-vintage-text font-sans relative overflow-x-hidden selection:bg-vintage-primary/30">
      {/* Background blurred circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-vintage-secondary/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[35rem] h-[35rem] bg-vintage-accent/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-vintage-secondary/30 rounded-full blur-[120px]" />
      </div>


      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-vintage-secondary/40 shadow-sm py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-vintage-text">
            <Sparkles className="w-6 h-6 text-vintage-primary" />
            ResumeMint AI
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold opacity-80">
            <a href="#features" className="hover:text-vintage-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-vintage-primary transition-colors">How It Works</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#analyzer" 
              className="px-6 py-3 bg-vintage-primary text-white rounded-full font-bold hover:bg-[#E57A54] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Analyze Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-vintage-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-vintage-secondary/40 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4 font-semibold text-center">
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-vintage-primary transition-colors">Features</a>
                <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-vintage-primary transition-colors">How It Works</a>
                <a href="#analyzer" onClick={() => setIsMobileMenuOpen(false)} className="py-3 mt-2 bg-vintage-primary text-white rounded-full transition-colors">Analyze Resume</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-vintage-secondary/50 shadow-sm text-sm font-semibold text-vintage-text/80 mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-vintage-primary" />
              ✨ AI Resume Analyzer
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Build a Better <br className="hidden lg:block" /> Resume with AI
            </h1>
            
            <p className="text-lg opacity-80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Upload your resume, receive instant AI feedback, improve your ATS score, and generate a professional cover letter in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#analyzer" className="w-full sm:w-auto px-8 py-4 bg-vintage-text text-white rounded-full font-bold hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Upload Resume <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white border border-vintage-secondary/50 rounded-full font-bold hover:bg-vintage-secondary/20 hover:-translate-y-1 transition-all duration-300 text-vintage-text flex items-center justify-center">
                Learn More
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-sm font-semibold opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-vintage-primary" /> ATS Friendly
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-vintage-primary" /> AI Powered
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-vintage-primary" /> PDF Upload
              </div>
            </div>
          </motion.div>
          
          {/* Hero Right Side - Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white space-y-8"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1.5">
                  <div className="text-xs font-bold tracking-wider uppercase opacity-50">Analysis Complete</div>
                  <div className="text-lg font-bold">Frontend Developer Resume</div>
                </div>
                <div className="w-12 h-12 bg-vintage-primary/10 rounded-full flex items-center justify-center text-vintage-primary shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-vintage-bg/50 p-5 rounded-2xl border border-vintage-secondary/40 flex flex-col items-center justify-center text-center">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Resume Score</div>
                  <div className="text-4xl font-extrabold text-vintage-primary">92%</div>
                </div>
                <div className="bg-vintage-bg/50 p-5 rounded-2xl border border-vintage-secondary/40 flex flex-col items-center justify-center text-center">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">ATS Score</div>
                  <div className="text-4xl font-extrabold text-vintage-accent">88%</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-bold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-vintage-primary" /> Missing Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold border border-vintage-secondary/50 shadow-sm">TypeScript</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold border border-vintage-secondary/50 shadow-sm">React Testing</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-vintage-accent" /> Improvement Tips
                </div>
                <div className="text-sm opacity-80 bg-white p-4 rounded-xl border border-vintage-secondary/50 leading-relaxed shadow-sm">
                  Quantify your impact on the latest project with specific metrics (e.g., improved load time by 20%).
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How It Works</h2>
              <p className="opacity-70 max-w-xl mx-auto text-lg">Get your resume optimized and a custom cover letter generated in four simple steps.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Upload Resume", icon: Upload, desc: "Upload your existing resume securely in PDF format." },
                { title: "AI Analysis", icon: Target, desc: "Our AI scans for ATS compatibility and industry standards." },
                { title: "Improve Resume", icon: Zap, desc: "Apply tailored feedback and add suggested missing skills." },
                { title: "Generate Letter", icon: FileText, desc: "Automatically craft a highly targeted cover letter." },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-vintage-secondary/40 text-center space-y-5 h-full flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-vintage-bg rounded-2xl flex items-center justify-center text-vintage-text shadow-sm border border-vintage-secondary/50 shrink-0">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-sm opacity-75 leading-relaxed grow">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white/30">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything You Need</h2>
              <p className="opacity-70 max-w-xl mx-auto text-lg">Powerful AI tools designed to help you land your dream job faster.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Resume Score", icon: TrendingUp, desc: "Get a comprehensive score based on industry standards, formatting, and keyword optimization best practices." },
                { title: "ATS Score", icon: LayoutDashboard, desc: "Ensure your resume passes through Applicant Tracking Systems flawlessly by validating parseability." },
                { title: "Missing Skills", icon: AlertCircle, desc: "Identify key skills missing from your profile based on real-time analysis of your target job role." },
                { title: "Cover Letter Generator", icon: PenTool, desc: "Create tailored, professional cover letters instantly using AI that matches your resume to the job." },
              ].map((feat, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/90 p-8 md:p-10 rounded-3xl shadow-sm border border-vintage-secondary/40 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 shrink-0 bg-vintage-secondary/30 rounded-2xl flex items-center justify-center text-vintage-primary">
                    <feat.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{feat.title}</h3>
                    <p className="opacity-75 leading-relaxed text-sm md:text-base">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Tool Section */}
        <section id="analyzer" className="py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
            <motion.div {...fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Try ResumeMint AI</h2>
              <p className="opacity-70 max-w-xl mx-auto text-lg">Upload your resume below to experience the magic firsthand.</p>
            </motion.div>
            
            {/* Upload & Input Container */}
            <motion.div {...fadeInUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-vintage-secondary/50 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vintage-primary via-vintage-secondary to-vintage-accent" />
              
              {/* File Upload */}
              <div className="space-y-3">
                <label className="block text-sm font-bold ml-1 uppercase tracking-wider opacity-80">Upload Resume (PDF)</label>
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-vintage-primary/40 rounded-2xl cursor-pointer bg-vintage-bg/30 hover:bg-vintage-secondary/10 hover:border-vintage-primary/60 transition-all duration-300 group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {file ? (
                        <File className="w-8 h-8 text-vintage-accent" />
                      ) : (
                        <Upload className="w-8 h-8 text-vintage-primary/70" />
                      )}
                    </div>
                    <p className="mb-2 text-base font-bold text-vintage-text">
                      {file ? file.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-sm opacity-60 font-medium">PDF (MAX. 5MB)</p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
                </label>
              </div>

              {/* Job Title */}
              <div className="space-y-3">
                <label htmlFor="jobTitle" className="block text-sm font-bold ml-1 uppercase tracking-wider opacity-80">Target Job Title (Optional)</label>
                <input
                  id="jobTitle"
                  type="text"
                  placeholder="e.g. Senior Frontend Developer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-vintage-secondary/50 bg-white focus:outline-none focus:border-vintage-primary/50 focus:ring-4 focus:ring-vintage-primary/10 transition-all text-base font-medium placeholder:opacity-40"
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!file || isAnalyzing}
                className="w-full py-5 bg-vintage-primary hover:bg-[#E57A54] text-white rounded-full font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg disabled:hover:shadow-none hover:-translate-y-1 disabled:hover:translate-y-0"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Analyzing Resume...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    <span>Analyze Resume & Generate Cover Letter</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Results Section */}
            <AnimatePresence>
              {results && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: 20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-8 overflow-hidden pt-4"
                >
                  {/* Score Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-vintage-secondary/40 flex items-center space-x-6 h-full hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 rounded-full border-[5px] border-vintage-primary flex items-center justify-center text-2xl font-extrabold text-vintage-primary bg-vintage-secondary/10 shrink-0">
                        {results.resumeScore}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-vintage-primary" />
                          Resume Score
                        </h3>
                        <p className="text-sm opacity-75 leading-relaxed">Overall quality and impact of your resume content.</p>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-vintage-secondary/40 flex items-center space-x-6 h-full hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 rounded-full border-[5px] border-vintage-accent flex items-center justify-center text-2xl font-extrabold text-vintage-accent bg-vintage-accent/10 shrink-0">
                        {results.atsScore}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-vintage-accent" />
                          ATS Compatibility
                        </h3>
                        <p className="text-sm opacity-75 leading-relaxed">How well parsing systems can read your resume.</p>
                      </div>
                    </div>
                  </div>

                  {/* Feedback Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/90 p-8 rounded-[2rem] border border-vintage-secondary/40 shadow-sm h-full">
                      <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                        <AlertCircle className="w-5 h-5 text-vintage-primary" />
                        Missing Skills
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {results.missingSkills.map((skill, index) => (
                          <span key={index} className="px-4 py-2 bg-vintage-bg rounded-lg text-sm font-bold border border-vintage-secondary/50 shadow-sm text-vintage-text/90">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/90 p-8 rounded-[2rem] border border-vintage-secondary/40 shadow-sm h-full">
                      <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-vintage-accent" />
                        Improvement Suggestions
                      </h3>
                      <ul className="space-y-4">
                        {results.improvements.map((suggestion, index) => (
                          <li key={index} className="flex gap-4 text-sm font-medium opacity-85 items-start">
                            <div className="w-2 h-2 rounded-full bg-vintage-accent mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-vintage-secondary/40">
                    <h3 className="text-2xl font-extrabold flex items-center gap-3 mb-8">
                      <FileText className="w-7 h-7 text-vintage-primary" />
                      Generated Cover Letter
                    </h3>
                    <div className="bg-vintage-bg/40 p-8 rounded-[1.5rem] whitespace-pre-wrap font-serif text-lg leading-[1.8] border border-vintage-secondary/30 text-vintage-text/90">
                      {results.coverLetter}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/70 border-t border-vintage-secondary/40 pt-20 pb-10"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-5">
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-vintage-text">
                <Sparkles className="w-7 h-7 text-vintage-primary" />
                ResumeMint AI
              </div>
              <p className="text-base opacity-75 max-w-sm leading-relaxed font-medium">
                Build stronger resumes and professional cover letters with AI.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-extrabold text-lg uppercase tracking-wider opacity-90">Quick Links</h4>
              <ul className="space-y-3 text-base opacity-80 font-semibold">
                <li><a href="#features" className="hover:text-vintage-primary transition-colors inline-block">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-vintage-primary transition-colors inline-block">How It Works</a></li>
                <li><a href="#analyzer" className="hover:text-vintage-primary transition-colors inline-block">Resume Tool</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-extrabold text-lg uppercase tracking-wider opacity-90">Resources</h4>
              <ul className="space-y-3 text-base opacity-80 font-semibold">
                <li><a href="#" className="hover:text-vintage-primary transition-colors flex items-center gap-3"><FileText className="w-4 h-4" /> ATS Tips</a></li>
                <li><a href="#" className="hover:text-vintage-primary transition-colors flex items-center gap-3"><PenTool className="w-4 h-4" /> Cover Letter Guide</a></li>
                <li><a href="#" className="hover:text-vintage-primary transition-colors flex items-center gap-3"><AlertCircle className="w-4 h-4" /> Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t-2 border-vintage-secondary/30 flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-60 font-bold">
            <p>© {new Date().getFullYear()} ResumeMint AI. All rights reserved.</p>
            <p>Built with Next.js, TypeScript & AI.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
