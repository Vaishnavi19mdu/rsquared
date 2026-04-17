import React from 'react';
import { LayoutDashboard, ShoppingBag, ClipboardList, Info, Settings, LogOut, UserCircle } from 'lucide-react';
import { UserRole } from '../types';
import { cn } from '../utils/utils';
import { motion } from 'motion/react';

interface SidebarProps {
  role: UserRole;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSignOut: () => void;
}

export default function Sidebar({ role, activeTab, setActiveTab, onSignOut }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard, roles: ['ADMIN', 'STAFF', 'CUSTOMER'] },
    { id: 'products', label: 'Products', icon: ShoppingBag, roles: ['ADMIN', 'STAFF'] },
    { id: 'returns', label: 'Return History', icon: ClipboardList, roles: ['ADMIN', 'STAFF', 'CUSTOMER'] },
    { id: 'insights', label: 'AI Insights', icon: Info, roles: ['ADMIN'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['ADMIN', 'STAFF', 'CUSTOMER'] },
  ];

  const filteredItems = menuItems.filter((item) => item.roles.includes(role));

  const roleLabel: Record<UserRole, string> = {
    ADMIN: 'Administrator',
    STAFF: 'Operations Staff',
    CUSTOMER: 'Customer',
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-0 lg:w-64 bg-[#29465B] lg:border-r border-white/10 flex flex-col z-50 text-white/70 overflow-hidden lg:overflow-visible transition-all duration-300">
      {/* Logo */}
      <div className="p-6 opacity-0 lg:opacity-100 whitespace-nowrap">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#6495ED] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#6495ED]/20 group-hover:scale-105 transition-transform">
            R²
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight leading-none">R Squared</h1>
            <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest mt-1">Analyzer</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto opacity-0 lg:opacity-100">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group relative',
                isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 w-1 h-6 bg-[#6495ED] rounded-r-full"
                />
              )}
              <Icon
                className={cn(
                  'w-5 h-5',
                  isActive ? 'text-[#6495ED]' : 'text-white/40 group-hover:text-white/60'
                )}
              />
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Profile + Sign Out */}
      <div className="p-4 border-t border-white/10 flex flex-col gap-2 opacity-0 lg:opacity-100 whitespace-nowrap">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <div className="w-8 h-8 rounded-full bg-[#6495ED]/20 flex items-center justify-center text-[#6495ED]">
            <UserCircle className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">{roleLabel[role]}</p>
            <p className="text-[10px] text-white/40 truncate">vaishcodesfr@gmail.com</p>
          </div>
        </div>
        <button
          onClick={onSignOut}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}