"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, FileText, CheckCircle, AlertCircle, TrendingUp, 
  Sparkles, File, Loader2, ArrowRight, Zap, Target, PenTool, LayoutDashboard 
} from "lucide-react";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    resumeScore: number;
    atsScore: number;
    missingSkills: string[];
    improvements: string[];
    coverLetter: string;
  } | null>(null);

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

  return (
    <div className="min-h-screen bg-vintage-bg text-vintage-text font-sans relative overflow-hidden">
      {/* Background blurred circles */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-vintage-secondary/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-vintage-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-vintage-secondary/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-vintage-secondary/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-vintage-text">
            <Sparkles className="w-6 h-6 text-vintage-primary" />
            ResumeMint AI
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
            <a href="#features" className="hover:text-vintage-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-vintage-primary transition-colors">How It Works</a>
          </div>
          <a href="#analyzer" className="px-5 py-2.5 bg-vintage-primary text-white rounded-full font-semibold hover:bg-[#E57A54] transition-colors shadow-sm text-sm">
            Analyze Resume
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-vintage-secondary/50 shadow-sm text-sm font-medium text-vintage-text/80">
              <Sparkles className="w-4 h-4 text-vintage-primary" />
              ✨ AI Resume Analyzer
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Build a Better <br /> Resume with AI
            </h1>
            
            <p className="text-lg opacity-80 max-w-lg leading-relaxed">
              Upload your resume, receive instant AI feedback, improve your ATS score, and generate a professional cover letter in seconds.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#analyzer" className="px-8 py-4 bg-vintage-text text-white rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-md">
                Upload Resume <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="px-8 py-4 bg-white border border-vintage-secondary/50 rounded-full font-bold hover:bg-vintage-secondary/10 transition-all text-vintage-text shadow-sm">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-sm font-medium opacity-70">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-vintage-primary" /> ATS Friendly
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-vintage-primary" /> AI Powered
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-vintage-primary" /> PDF Upload
              </div>
            </div>
          </div>
          
          {/* Hero Right Side - Floating Card */}
          <div className="relative flex justify-center items-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 space-y-6"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-sm font-semibold opacity-60">Analysis Complete</div>
                  <div className="text-xl font-bold">Frontend Developer Resume</div>
                </div>
                <div className="w-12 h-12 bg-vintage-primary/10 rounded-full flex items-center justify-center text-vintage-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-vintage-bg/50 p-4 rounded-2xl border border-vintage-secondary/30">
                  <div className="text-sm font-medium opacity-70">Resume Score</div>
                  <div className="text-3xl font-bold text-vintage-primary mt-1">92%</div>
                </div>
                <div className="bg-vintage-bg/50 p-4 rounded-2xl border border-vintage-secondary/30">
                  <div className="text-sm font-medium opacity-70">ATS Score</div>
                  <div className="text-3xl font-bold text-vintage-accent mt-1">88%</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-vintage-primary" /> Missing Skills
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-vintage-secondary/50">TypeScript</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-vintage-secondary/50">React Testing</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-vintage-accent" /> Improvement Tips
                </div>
                <div className="text-sm opacity-80 bg-white p-3 rounded-xl border border-vintage-secondary/50">
                  Quantify your impact on the latest project with specific metrics.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
              <p className="opacity-70 max-w-xl mx-auto">Get your resume optimized and a custom cover letter generated in four simple steps.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Upload Resume", icon: Upload, desc: "Upload your existing resume in PDF format." },
                { title: "AI Analysis", icon: Target, desc: "Our AI scans for ATS compatibility and overall quality." },
                { title: "Improve Resume", icon: Zap, desc: "Apply tailored feedback and add missing skills." },
                { title: "Generate Cover Letter", icon: FileText, desc: "Automatically craft a professional cover letter." },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-vintage-secondary/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 mx-auto bg-vintage-bg rounded-2xl flex items-center justify-center text-vintage-text shadow-sm border border-vintage-secondary/50">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm opacity-70">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need</h2>
              <p className="opacity-70 max-w-xl mx-auto">Powerful AI tools to land your dream job faster.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Resume Score", icon: TrendingUp, desc: "Get a comprehensive score based on industry standards and best practices." },
                { title: "ATS Score", icon: LayoutDashboard, desc: "Ensure your resume passes through Applicant Tracking Systems flawlessly." },
                { title: "Missing Skills", icon: AlertCircle, desc: "Identify key skills missing from your profile based on your target role." },
                { title: "Cover Letter Generator", icon: PenTool, desc: "Create tailored, professional cover letters instantly using AI." },
              ].map((feat, i) => (
                <div key={i} className="bg-white/80 p-8 rounded-3xl shadow-sm border border-vintage-secondary/40 flex items-start gap-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 shrink-0 bg-vintage-secondary/30 rounded-2xl flex items-center justify-center text-vintage-primary">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                    <p className="opacity-70 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Tool Section */}
        <section id="analyzer" className="py-24 bg-white/40 border-t border-vintage-secondary/20">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Try ResumeMint AI</h2>
              <p className="opacity-70 max-w-xl mx-auto">Upload your resume below to experience the magic.</p>
            </div>
            
            {/* The existing Upload & Input Section */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-vintage-secondary/50 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vintage-primary via-vintage-secondary to-vintage-accent" />
              
              {/* File Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold ml-1">Upload Resume (PDF)</label>
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-vintage-primary/30 rounded-2xl cursor-pointer bg-vintage-bg/50 hover:bg-vintage-secondary/20 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {file ? (
                      <File className="w-10 h-10 text-vintage-accent mb-3" />
                    ) : (
                      <Upload className="w-10 h-10 text-vintage-primary/60 mb-3" />
                    )}
                    <p className="mb-2 text-sm font-medium">
                      {file ? file.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-xs opacity-70">PDF (MAX. 5MB)</p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
                </label>
              </div>

              {/* Job Title */}
              <div className="space-y-2">
                <label htmlFor="jobTitle" className="block text-sm font-semibold ml-1">Target Job Title (Optional)</label>
                <input
                  id="jobTitle"
                  type="text"
                  placeholder="e.g. Senior Frontend Developer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl border border-vintage-secondary bg-white focus:outline-none focus:ring-2 focus:ring-vintage-primary/50 transition-shadow"
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!file || isAnalyzing}
                className="w-full py-4 bg-vintage-primary hover:bg-[#E57A54] text-white rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Analyzing Resume...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-6 h-6" />
                    <span>Analyze Resume & Generate Cover Letter</span>
                  </>
                )}
              </button>
            </div>

            {/* Results Section */}
            <AnimatePresence>
              {results && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-8 overflow-hidden"
                >
                  {/* Score Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-vintage-secondary/40 flex items-center space-x-6">
                      <div className="w-20 h-20 rounded-full border-4 border-vintage-primary flex items-center justify-center text-2xl font-bold text-vintage-primary bg-vintage-secondary/20 shrink-0">
                        {results.resumeScore}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-vintage-primary" />
                          Resume Score
                        </h3>
                        <p className="text-sm opacity-80 mt-1">Overall quality and impact of your resume.</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-vintage-secondary/40 flex items-center space-x-6">
                      <div className="w-20 h-20 rounded-full border-4 border-vintage-accent flex items-center justify-center text-2xl font-bold text-vintage-accent bg-vintage-accent/10 shrink-0">
                        {results.atsScore}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-vintage-accent" />
                          ATS Compatibility
                        </h3>
                        <p className="text-sm opacity-80 mt-1">How well bots can parse your resume.</p>
                      </div>
                    </div>
                  </div>

                  {/* Feedback Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/80 p-6 rounded-3xl border border-vintage-secondary/40 shadow-sm">
                      <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                        <AlertCircle className="w-5 h-5 text-vintage-primary" />
                        Missing Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {results.missingSkills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-vintage-bg rounded-full text-sm font-medium border border-vintage-secondary/50">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/80 p-6 rounded-3xl border border-vintage-secondary/40 shadow-sm">
                      <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-vintage-accent" />
                        Improvement Suggestions
                      </h3>
                      <ul className="space-y-3">
                        {results.improvements.map((suggestion, index) => (
                          <li key={index} className="flex gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-vintage-accent mt-1.5 shrink-0" />
                            <span className="opacity-90">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-vintage-secondary/40">
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                      <FileText className="w-6 h-6 text-vintage-primary" />
                      Generated Cover Letter
                    </h3>
                    <div className="bg-vintage-bg/50 p-6 rounded-2xl whitespace-pre-wrap font-serif text-lg leading-relaxed border border-vintage-secondary/30">
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
      <footer className="relative z-10 bg-white/50 border-t border-vintage-secondary/30 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-xl text-vintage-text">
            <Sparkles className="w-5 h-5 text-vintage-primary" />
            ResumeMint AI
          </div>
          <div className="text-sm font-medium opacity-60">
            Built with Next.js, TypeScript & AI
          </div>
        </div>
      </footer>
    </div>
  );
}
