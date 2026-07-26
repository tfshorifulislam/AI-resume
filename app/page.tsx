"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, Sparkles, File, Loader2 } from "lucide-react";

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
        coverLetter: `Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle || "open"} position at your esteemed company. With a solid foundation in web development and a passion for creating intuitive user experiences, I am confident in my ability to contribute effectively to your team.

My recent experience has allowed me to hone my skills in modern web technologies, delivering scalable and performant applications. I am particularly drawn to your company's innovative approach and commitment to excellence.

I would welcome the opportunity to discuss how my background, skills, and certifications will be of benefit to your organization. Thank you for your time and consideration.

Sincerely,
[Your Name]`,
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-vintage-bg text-vintage-text font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <header className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-4 bg-vintage-secondary rounded-full shadow-sm mb-4"
          >
            <Sparkles className="w-8 h-8 text-vintage-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            AI Resume Optimizer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            Upload your resume, add your target job title, and let our AI provide actionable insights and craft a personalized cover letter.
          </motion.p>
        </header>

        {/* Upload & Input Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-vintage-secondary/50 space-y-8"
        >
          {/* File Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold ml-1">Upload Resume (PDF)</label>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-vintage-primary/30 rounded-xl cursor-pointer bg-vintage-bg/50 hover:bg-vintage-secondary/20 transition-colors">
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
              className="w-full px-4 py-3 rounded-xl border border-vintage-secondary bg-white focus:outline-none focus:ring-2 focus:ring-vintage-primary/50 transition-shadow"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!file || isAnalyzing}
            className="w-full py-4 bg-vintage-primary hover:bg-[#E57A54] text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
        </motion.section>

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
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-vintage-accent/30 flex items-center space-x-6"
                >
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
                </motion.div>

                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-vintage-accent/30 flex items-center space-x-6"
                >
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
                </motion.div>
              </div>

              {/* Feedback Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-vintage-secondary/20 p-6 rounded-2xl"
                >
                  <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-vintage-primary" />
                    Missing Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {results.missingSkills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-white rounded-full text-sm font-medium border border-vintage-secondary/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-vintage-accent/10 p-6 rounded-2xl"
                >
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
                </motion.div>
              </div>

              {/* Cover Letter */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-vintage-secondary/50"
              >
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                  <FileText className="w-6 h-6 text-vintage-primary" />
                  Generated Cover Letter
                </h3>
                <div className="bg-vintage-bg/50 p-6 rounded-xl whitespace-pre-wrap font-serif text-lg leading-relaxed border border-vintage-secondary/30">
                  {results.coverLetter}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-vintage-secondary/50 opacity-60 text-sm pb-8">
          <p>© {new Date().getFullYear()} AI Resume Optimizer. Built with Next.js, Tailwind, and Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}
