import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';
import { UserRole } from '../types';
import { cn } from '../utils/utils';
import { motion } from 'motion/react';

interface TopNavProps {
  role: UserRole;
  setRole: (role: UserRole) => void;
  title: string;
}

export default function TopNav({ role, setRole, title }: TopNavProps) {
  const roleLabels: Record<UserRole, string> = {
    ADMIN: 'Admin',
    STAFF: 'Staff',
    CUSTOMER: 'Customer',
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between gap-4 z-40 transition-all duration-300">
      {/* Left: Search Bar */}
      <div className="flex-shrink-0 w-1/3 min-w-[160px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search analytics..."
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6495ED]/20 focus:border-[#6495ED]/50 transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right: Role Switch + Notifications + Profile */}
      <div className="flex items-center gap-4">
        {/* Demo Mode Role Switcher */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5">
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest hidden sm:block">Demo</span>
          <div className="flex bg-white rounded-lg p-0.5 border border-gray-100 shadow-sm">
            {(['ADMIN', 'STAFF', 'CUSTOMER'] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={cn(
                  'px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-wider transition-all relative',
                  role === r
                    ? 'bg-[#6495ED] text-white shadow-sm'
                    : 'text-gray-400 hover:text-[#29465B]'
                )}
              >
                {roleLabels[r]}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-[#29465B] hover:bg-gray-100 rounded-xl transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="w-8 h-8 rounded-full bg-[#6495ED]/10 flex items-center justify-center text-[#6495ED] font-bold text-xs border border-[#6495ED]/20">
            VC
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-xs font-bold text-[#29465B] leading-none">Vaish Codes</p>
            <p className="text-[10px] text-[#98AFC7] font-medium mt-0.5">{roleLabels[role]}</p>
          </div>
        </div>
      </div>
    </header>
  );
}