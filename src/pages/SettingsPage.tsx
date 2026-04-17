import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Clock,
  Database,
  RefreshCw,
  ShieldCheck,
  Bell,
  User,
  Lock,
  Settings as SettingsIcon,
} from 'lucide-react';
import { cn } from '../utils/utils';
import { UserRole } from '../types';

interface SettingsPageProps {
  role?: UserRole;
}

export default function SettingsPage({ role = 'ADMIN' }: SettingsPageProps) {
  const setupSteps = [
    { title: 'Data Connected', status: 'Completed', icon: Database, desc: 'Data connected successfully.' },
    { title: 'Products Synced', status: 'Completed', icon: RefreshCw, desc: '821 products synced.' },
    { title: 'Return Tracking', status: 'Completed', icon: ShieldCheck, desc: 'Return tracking enabled.' },
    { title: 'AI Insights', status: 'In Progress', icon: Clock, desc: 'AI insights loading…' },
  ];

  const completionPercentage = 75;
  const isAdmin = role === 'ADMIN';

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-[#29465B] tracking-tighter">Settings</h1>
        <p className="text-[#98AFC7] font-medium italic opacity-80">
          {isAdmin ? 'Manage your system configuration and integrations.' : 'Manage your account preferences.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings Section */}
        <div className="lg:col-span-2 space-y-6 min-w-0">
          {/* Setup Progress - Admin only */}
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6495ED]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#29465B] tracking-tight">Setup Progress</h3>
                  <p className="text-[10px] font-black text-[#98AFC7] uppercase tracking-widest mt-1">
                    Initialization Status
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#6495ED] tracking-tighter">{completionPercentage}%</span>
                  <span className="block text-[8px] font-black text-[#98AFC7] uppercase tracking-wider italic">Complete</span>
                </div>
              </div>

              <div className="w-full h-2.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  className="h-full bg-[#6495ED] rounded-full"
                ></motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {setupSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      'p-5 rounded-2xl border flex gap-4',
                      step.status === 'Completed'
                        ? 'bg-green-50/50 border-green-100'
                        : 'bg-blue-50/30 border-blue-100'
                    )}
                  >
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border',
                        step.status === 'Completed'
                          ? 'bg-green-100 border-green-200 text-green-600'
                          : 'bg-blue-100 border-blue-200 text-blue-500'
                      )}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#29465B] tracking-tight flex items-center gap-2">
                        {step.title}
                        {step.status === 'Completed' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        )}
                      </h4>
                      <p className="text-[10px] font-medium text-[#98AFC7] italic leading-relaxed mt-1">
                        {step.desc}
                      </p>
                      <span
                        className={cn(
                          'mt-2 inline-block px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border',
                          step.status === 'Completed'
                            ? 'bg-green-50 text-green-600 border-green-200'
                            : 'bg-blue-50 text-blue-500 border-blue-200'
                        )}
                      >
                        {step.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Alerts & Security - all roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
                <Bell className="w-6 h-6 text-[#6495ED]" />
              </div>
              <h3 className="text-lg font-black text-[#29465B] tracking-tighter mb-2">Alerts</h3>
              <p className="text-xs text-[#98AFC7] italic mb-6">
                {isAdmin
                  ? 'Manage alert thresholds and notification preferences.'
                  : 'Manage your return and refund notification preferences.'}
              </p>
              <button className="w-full py-3 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#98AFC7] hover:text-[#6495ED] hover:border-[#6495ED]/30 transition-all">
                Configure
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-[#6495ED]" />
              </div>
              <h3 className="text-lg font-black text-[#29465B] tracking-tighter mb-2">Security</h3>
              <p className="text-xs text-[#98AFC7] italic mb-6">
                {isAdmin ? 'Manage account security and access control.' : 'Update your password and security settings.'}
              </p>
              <button className="w-full py-3 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#98AFC7] hover:text-[#6495ED] hover:border-[#6495ED]/30 transition-all">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Profile Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#29465B] p-8 rounded-2xl text-white overflow-hidden relative shadow-xl shadow-[#29465B]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6495ED]/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white p-1 mb-6 rotate-3 shadow-2xl">
                <div className="w-full h-full rounded-xl bg-[#6495ED]/10 flex items-center justify-center border border-[#6495ED]/20">
                  <User className="w-10 h-10 text-[#6495ED]" />
                </div>
              </div>
              <h2 className="text-xl font-black tracking-tighter mb-1">Vaish Codes</h2>
              <p className="text-[10px] font-black text-[#98AFC7] uppercase tracking-[0.3em] italic mb-6">
                {role === 'ADMIN' ? 'Administrator' : role === 'STAFF' ? 'Operations Staff' : 'Customer'}
              </p>

              <button className="w-full py-4 bg-[#6495ED] text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#6495ED]/20 hover:scale-[1.02] active:scale-95 transition-all">
                Update Details
              </button>
            </div>
          </div>

          {/* System Info - Admin only */}
          {isAdmin && (
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <SettingsIcon className="w-4 h-4 text-[#6495ED]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#98AFC7]">System Info</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Platform Version', value: '2.92.1' },
                  { label: 'Throughput', value: '18.2 TFLOPS' },
                  { label: 'Uptime', value: '99.9997%' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
                    <span className="text-[10px] font-bold text-[#98AFC7]">{stat.label}</span>
                    <span className="text-[10px] font-black text-[#29465B] font-mono">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}