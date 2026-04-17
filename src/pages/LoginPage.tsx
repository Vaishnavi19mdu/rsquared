import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  ChevronLeft,
  Eye,
  EyeOff,
  Info
} from 'lucide-react';
import { UserRole } from '../types';

interface LoginPageProps {
  onNavigate: (page: 'landing' | 'login' | 'signup') => void;
  onAuthSuccess: (role: UserRole) => void;
}

export default function LoginPage({ onNavigate, onAuthSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd validate against a backend
    // For this demo, let's assume valid admin login if email includes 'admin'
    const role: UserRole = email.includes('staff') ? 'STAFF' : 
                          email.includes('customer') ? 'CUSTOMER' : 'ADMIN';
    onAuthSuccess(role);
  };

  return (
    <div className="min-h-screen bg-dashboard-bg font-sans selection:bg-primary/20 selection:text-primary flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="w-full max-w-[480px] relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Back to landing */}
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors mb-12 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="bg-white/70 backdrop-blur-xl border border-white p-12 rounded-[40px] shadow-2xl shadow-dark-accent/5">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20 rotate-3">
                <span className="text-white font-black text-2xl italic tracking-tighter">R²</span>
              </div>
              <h2 className="text-3xl font-black text-dark-accent tracking-tighter mb-2">Login</h2>
              <p className="text-xs text-secondary font-medium tracking-tight italic">Sign in to access your dashboard.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Email Address</label>
                  <div className="group relative">
                    <Info className="w-3 h-3 text-secondary/40 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-dark-accent text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl z-50">
                      Enter the email address associated with your R² account.
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/60 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-4 py-4 bg-dashboard-bg/50 border border-secondary/20 rounded-2xl text-[13px] font-bold text-dark-accent focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Password</label>
                  <div className="group relative">
                    <Info className="w-3 h-3 text-secondary/40 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-dark-accent text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl z-50">
                      Password must be at least 8 characters long and contain one special character.
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/60 group-focus-within:text-primary transition-colors" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-dashboard-bg/50 border border-secondary/20 rounded-2xl text-[13px] font-bold text-dark-accent focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-secondary/30"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="peer sr-only" 
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <div className="w-5 h-5 bg-dashboard-bg/50 border border-secondary/20 rounded-lg group-hover:border-primary/40 transition-all peer-checked:bg-primary peer-checked:border-primary"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-dark-accent transition-colors">Remember Me</span>
                </label>
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-dark-accent transition-colors">Forgot Password?</a>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-secondary/10 text-center">
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-4">Don't have an account?</p>
              <button 
                onClick={() => onNavigate('signup')}
                className="w-full py-4 bg-dashboard-bg text-dark-accent border border-secondary/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary/10 transition-all"
              >
                Create Account
              </button>
            </div>
          </div>
          <p className="mt-8 text-center text-[9px] font-black text-secondary/40 uppercase tracking-[0.4em]">Integrated Secure Node R2.9.21</p>
        </motion.div>
      </div>
    </div>
  );
}
