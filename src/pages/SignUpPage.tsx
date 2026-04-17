import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Lock, 
  User,
  ArrowRight, 
  ChevronLeft,
  Shield,
  Briefcase,
  UserCircle,
  Info
} from 'lucide-react';
import { UserRole } from '../types';
import { cn } from '../utils/utils';

interface SignUpPageProps {
  onNavigate: (page: 'landing' | 'login' | 'signup') => void;
  onAuthSuccess: (role: UserRole) => void;
}

export default function SignUpPage({ onNavigate, onAuthSuccess }: SignUpPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('ADMIN');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess(role);
  };

  const roleOptions: { value: UserRole; label: string; desc: string; icon: any }[] = [
    { value: 'ADMIN', label: 'Administrator', desc: 'Full access to all system features.', icon: Shield },
    { value: 'STAFF', label: 'Operations Staff', desc: 'Manage inventory and returns.', icon: Briefcase },
    { value: 'CUSTOMER', label: 'Customer', desc: 'Track your own returns and refunds.', icon: UserCircle }
  ];

  return (
    <div className="min-h-screen bg-dashboard-bg font-sans selection:bg-primary/20 selection:text-primary flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="w-full max-w-[640px] relative z-10">
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

          <div className="bg-white/70 backdrop-blur-xl border border-white p-12 rounded-[48px] shadow-2xl shadow-dark-accent/5">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-dark-accent rounded-2xl flex items-center justify-center shadow-xl shadow-dark-accent/20 -rotate-3">
                  <span className="text-white font-black text-2xl italic tracking-tighter">R²</span>
                </div>
              </div>
              <h2 className="text-3xl font-black text-dark-accent tracking-tighter mb-2">Create Account</h2>
              <p className="text-xs text-secondary font-medium tracking-tight italic">Join the R² network to start tracking returns.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Full Name</label>
                      <div className="group relative">
                        <Info className="w-3 h-3 text-secondary/40 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-dark-accent text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl z-50">
                          Please enter your first and last name.
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/60 group-focus-within:text-primary transition-colors" />
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-dashboard-bg/50 border border-secondary/20 rounded-2xl text-[13px] font-bold text-dark-accent focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Email Address</label>
                      <div className="group relative">
                        <Info className="w-3 h-3 text-secondary/40 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-dark-accent text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl z-50">
                          Use your work or personal email address.
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
                        className="w-full pl-12 pr-4 py-4 bg-dashboard-bg/50 border border-secondary/20 rounded-2xl text-[13px] font-bold text-dark-accent focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Password</label>
                      <div className="group relative">
                        <Info className="w-3 h-3 text-secondary/40 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-dark-accent text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl z-50">
                          Minimum 8 characters, including a symbol.
                        </div>
                      </div>
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/60 group-focus-within:text-primary transition-colors" />
                      <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-12 pr-4 py-4 bg-dashboard-bg/50 border border-secondary/20 rounded-2xl text-[13px] font-bold text-dark-accent focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Select Role</label>
                    <div className="group relative">
                      <Info className="w-3 h-3 text-secondary/40 cursor-help" />
                      <div className="absolute bottom-full right-0 mb-2 w-48 p-3 bg-dark-accent text-white text-[9px] font-bold rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl z-50">
                        Admins have full control. Customers can only see their own data.
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {roleOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setRole(opt.value)}
                        className={cn(
                          "w-full p-4 rounded-2xl border flex items-start gap-4 transition-all text-left group",
                          role === opt.value 
                            ? "bg-primary/5 border-primary shadow-sm shadow-primary/10" 
                            : "bg-dashboard-bg/50 border-secondary/10 hover:border-secondary/30"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                          role === opt.value ? "bg-primary text-white" : "bg-white text-secondary group-hover:text-primary"
                        )}>
                          <opt.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className={cn(
                            "text-[10px] font-black uppercase tracking-widest leading-none mb-1",
                            role === opt.value ? "text-primary" : "text-dark-accent"
                          )}>{opt.label}</p>
                          <p className="text-[9px] font-bold text-secondary italic opacity-75">{opt.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full py-5 bg-dark-accent text-white rounded-2xl font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-dark-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </button>
                
                <p className="mt-8 text-center text-[10px] font-black text-secondary uppercase tracking-widest">
                  Already have an account? <button type="button" onClick={() => onNavigate('login')} className="text-primary hover:text-dark-accent transition-colors">Sign In</button>
                </p>
              </div>
            </form>
          </div>
          <p className="mt-8 text-center text-[9px] font-black text-secondary/40 uppercase tracking-[0.4em]">Integrated Secure Node R2.9.21</p>
        </motion.div>
      </div>
    </div>
  );
}
