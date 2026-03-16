import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Full-Stack Developer | DevOps & Security Focus
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I build full-stack web applications with a focus on reliability,
              security, and clean system design. My work centers around React,
              modern JavaScript, and building software that scales and runs
              smoothly in production.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
              >
                View Projects
                <ArrowDown size={20} />
              </button>
              <a
                href="/Brittany-Herbert-ITSupportResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
              >
                View Resume
                <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Currently Building
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      Expanding Vibexperience into a full event management SaaS platform
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      Building TradeTraffic trading dashboard with React and Supabase
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      Strengthening Python and security fundamentals for DevOps-focused roles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600">
                  Open to full time opportunities and technical collaborations. Feel free to reach out!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
