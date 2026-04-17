import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  BrainCircuit, 
  ShieldAlert, 
  PackageSearch, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Zap,
  LayoutDashboard,
  RefreshCcw
} from 'lucide-react';
import { cn } from '../utils/utils';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'login' | 'signup') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-dashboard-bg font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-secondary/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl italic tracking-tighter">R²</span>
            </div>
            <span className="font-extrabold text-xl text-dark-accent tracking-tighter hidden sm:block">Returns Squared</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors">How It Works</a>
            <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('login')}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-dark-accent hover:text-primary transition-colors px-4 py-2"
            >
              Login
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="px-6 py-2.5 bg-primary text-white rounded-xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Neural Prediction Active
                </span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-dark-accent leading-[0.9] tracking-tighter mb-8 max-w-lg">
              Understand Returns. <span className="text-primary italic">Reduce Losses.</span> Improve Products.
            </h1>
            <p className="text-lg text-secondary font-medium leading-relaxed max-w-md mb-10">
              AI-powered insights to minimize product returns and maximize customer satisfaction with real-time neural pattern recognition.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => onNavigate('signup')}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                <span>Initialize Platform</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-dark-accent border border-secondary/20 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-dashboard-bg hover:border-secondary/40 transition-all flex items-center gap-3 shadow-sm">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <span>Interactive Demo</span>
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-secondary/10 pt-8">
              <div>
                <span className="block text-2xl font-black text-dark-accent tracking-tighter">84%</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Accuracy Rate</span>
              </div>
              <div className="w-px h-8 bg-secondary/20"></div>
              <div>
                <span className="block text-2xl font-black text-dark-accent tracking-tighter">2.4s</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Neural Latency</span>
              </div>
              <div className="w-px h-8 bg-secondary/20"></div>
              <div>
                <span className="block text-2xl font-black text-dark-accent tracking-tighter">48h</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Avg. Resolution</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Mock Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl shadow-dark-accent/10 border border-secondary/10 overflow-hidden">
              <div className="bg-dashboard-bg rounded-[32px] overflow-hidden border border-secondary/5 aspect-[4/3] relative">
                {/* Mock UI elements */}
                <div className="absolute inset-0 p-8 space-y-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="space-y-2">
                      <div className="w-32 h-4 bg-primary/20 rounded-full"></div>
                      <div className="w-48 h-3 bg-secondary/10 rounded-full"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-secondary/10"></div>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-secondary/10"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white rounded-2xl border border-secondary/10 shadow-sm p-4">
                      <div className="w-8 h-8 rounded-lg bg-success/10 mb-2"></div>
                      <div className="w-16 h-4 bg-secondary/10 rounded-full"></div>
                    </div>
                    <div className="h-24 bg-white rounded-2xl border border-secondary/10 shadow-sm p-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 mb-2"></div>
                      <div className="w-20 h-4 bg-secondary/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-40 bg-white rounded-2xl border border-secondary/10 shadow-sm p-4">
                    <div className="w-full h-full bg-dashboard-bg rounded-xl relative overflow-hidden">
                      {/* Abstract chart bars */}
                      <div className="absolute bottom-0 left-0 w-full flex items-end justify-between px-6 pb-6 h-full">
                        <div className="w-8 bg-primary h-1/2 rounded-t-lg"></div>
                        <div className="w-8 bg-secondary h-3/4 rounded-t-lg"></div>
                        <div className="w-8 bg-primary h-2/3 rounded-t-lg"></div>
                        <div className="w-8 bg-dark-accent h-full rounded-t-lg"></div>
                        <div className="w-8 bg-primary h-1/2 rounded-t-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl shadow-success/10 border border-success/20 flex items-center gap-3 z-30"
            >
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-secondary">Mitigation</span>
                <span className="block text-xs font-black text-dark-accent">32% Drop in Returns</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 p-5 bg-dark-accent rounded-3xl shadow-xl shadow-dark-accent/40 border border-white/10 flex items-center gap-4 z-30"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-primary" />
              </div>
              <div className="text-white">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-secondary">Neural Analysis</span>
                <span className="block text-xs font-black opacity-90 italic">Pattern identified in v2.4</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Engineered Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark-accent tracking-tighter mb-4">Precision Resolution Framework</h2>
            <p className="text-secondary font-medium max-w-xl mx-auto italic">
              Deploying advanced regression models to identify return vectors before they impact your balance sheet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: "Return Analytics", desc: "Comprehensive visualization of return throughput and capital leakage.", color: "text-primary" },
              { icon: BrainCircuit, title: "AI Suggestions", desc: "Neuro-centric recommendations to stabilize inventory liquidity.", color: "text-primary" },
              { icon: ShieldAlert, title: "Risk Detection", desc: "Early warning protocols for high-variance product SKUs.", color: "text-danger" },
              { icon: PackageSearch, title: "Product Insights", desc: "Segmented performance diagnostics across your entire catalog.", color: "text-primary" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl border border-secondary/10 bg-dashboard-bg/30 hover:bg-white hover:shadow-xl hover:shadow-dark-accent/5 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-2xl border border-secondary/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 shadow-primary/5 transition-transform">
                  <feature.icon className={cn("w-6 h-6", feature.color)} />
                </div>
                <h3 className="text-lg font-black text-dark-accent mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-xs text-secondary font-medium leading-relaxed italic opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative p-10 bg-dark-accent rounded-[40px] shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
                 {/* Abstract animation inside */}
                 <div className="absolute inset-0 bg-primary/5"></div>
                 <div className="relative flex flex-col items-center gap-8">
                    {[1, 2, 3].map(step => (
                      <motion.div 
                        key={step}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: step * 0.2 }}
                        className={cn(
                          "w-20 h-20 rounded-full border-4 flex items-center justify-center text-3xl font-black italic",
                          step === 1 ? "bg-primary border-primary/20 text-white" : "bg-white/10 border-white/5 text-white/40"
                        )}
                      >
                        {step}
                      </motion.div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-ping"></div>
                 </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Operational Protocol</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark-accent tracking-tighter mb-8">Synchronized Integration</h2>
              
              <div className="space-y-12">
                {[
                  { title: "Inbound Vector Integration", desc: "Direct API hooks ingest return logs with millisecond latency for immediate processing.", icon: RefreshCcw },
                  { title: "Neural Pattern Synthesis", desc: "Our R² proprietary engine maps returns against sales data to extract hidden correlations.", icon: BrainCircuit },
                  { title: "Strategic Resource Deployment", desc: "Recieve actionable intelligence to re-engineer product specs and shipping flows.", icon: Zap }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-dark-accent tracking-tight mb-2 flex items-center gap-3">
                        {step.title}
                        <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-sm text-secondary font-medium leading-relaxed italic opacity-80">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-12 md:p-20 rounded-[48px] text-white overflow-hidden relative shadow-2xl shadow-primary/40"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark-accent/20 rounded-full blur-2xl -ml-32 -mb-32"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-white/10 rotate-3">
                 <span className="text-primary font-black text-3xl italic tracking-tighter">R²</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">Initialize Your Return Mitigation Terminal.</h2>
              <p className="text-white/80 font-medium text-lg mb-12 max-w-xl italic">
                Join the network of performance-driven commerce entities neutralizing return liabilities at scale.
              </p>
              <button 
                onClick={() => onNavigate('signup')}
                className="px-12 py-5 bg-white text-primary rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-black/10 hover:scale-105 active:scale-95 transition-all"
              >
                Access Genesis Block
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-secondary/10 opacity-70">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-dark-accent flex items-center justify-center rounded-lg">
                <span className="text-white font-black text-sm italic tracking-tighter">R²</span>
              </div>
              <span className="font-extrabold text-lg text-dark-accent tracking-tighter">Returns Squared</span>
            </div>
            <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] max-w-[200px]">
              Advanced Logic Architecture for Liquidity Optimization.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-4">
              <span className="block text-[10px] font-black uppercase tracking-widest text-dark-accent">Network</span>
              <div className="flex flex-col gap-2 text-xs font-bold text-secondary">
                <a href="#" className="hover:text-primary transition-colors">Nodes</a>
                <a href="#" className="hover:text-primary transition-colors">Protocols</a>
                <a href="#" className="hover:text-primary transition-colors">Status</a>
              </div>
            </div>
            <div className="space-y-4">
              <span className="block text-[10px] font-black uppercase tracking-widest text-dark-accent">Resources</span>
              <div className="flex flex-col gap-2 text-xs font-bold text-secondary">
                <a href="#" className="hover:text-primary transition-colors">Whitepaper</a>
                <a href="#" className="hover:text-primary transition-colors">Docs</a>
                <a href="#" className="hover:text-primary transition-colors">API</a>
              </div>
            </div>
            <div className="space-y-4">
              <span className="block text-[10px] font-black uppercase tracking-widest text-dark-accent">Legal</span>
              <div className="flex flex-col gap-2 text-xs font-bold text-secondary">
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
