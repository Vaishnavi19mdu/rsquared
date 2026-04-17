import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { UserRole } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface DashboardLayoutProps {
  role: UserRole;
  setRole: (role: UserRole) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
  onSignOut: () => void;
}

export default function DashboardLayout({ 
  role, 
  setRole, 
  activeTab, 
  setActiveTab, 
  children,
  onSignOut
}: DashboardLayoutProps) {
  
  const getTabTitle = (tab: string) => {
    switch(tab) {
      case 'overview': return 'Strategic Performance Ledger';
      case 'products': return 'Inventory Risk Analysis';
      case 'returns': return 'Operational Resolution Hub';
      case 'insights': return 'Neural Intelligence Terminal';
      case 'settings': return 'Core System Parameters';
      default: return 'R² Integrated Analyzer';
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg font-sans text-dark-accent selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Sidebar role={role} activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={onSignOut} />
      
      <div className="pl-0 lg:pl-64 flex flex-col min-h-screen max-w-full transition-all duration-300">
        <TopNav role={role} setRole={setRole} title={getTabTitle(activeTab)} />
        
        <main className="flex-1 pt-16 p-6 md:p-8 xl:p-12 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${role}-${activeTab}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="max-w-[1600px] mx-auto">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="px-12 py-8 border-t border-white/20 flex justify-between items-center bg-white/5 opacity-60">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] font-black text-secondary uppercase tracking-[0.3em]">
              Architectural Standard R2.90.1
            </p>
            <p className="text-[10px] font-bold text-secondary">
              © 2024 Integrated Return Architecture. All privileges strictly regulated.
            </p>
          </div>
          <div className="flex gap-8">
            <span className="text-[10px] font-black text-secondary uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Internal Wiki</span>
            <span className="text-[10px] font-black text-secondary uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Technical Node</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
