import React from 'react';
import { Package, RefreshCcw, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import { MOCK_RETURNS } from '../services/mockData';
import { cn, formatCurrency } from '../utils/utils';

export default function CustomerDashboard({ activeTab }: { activeTab: string }) {
  const steps = [
    { label: 'Requested', completed: true },
    { label: 'Picked Up', completed: true },
    { label: 'Processed', completed: false },
    { label: 'Refunded', completed: false },
  ];

  // Return History tab
  if (activeTab === 'returns') {
    return (
      <div className="space-y-8 pb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black text-[#29465B] tracking-tighter">Return History</h1>
          <p className="text-[#98AFC7] font-medium italic opacity-80">A full log of your past and ongoing returns.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/60">
                  <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest">Product</th>
                  <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest">Date</th>
                  <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest">Status</th>
                  <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest text-right">Refund</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MOCK_RETURNS.map((ret) => (
                  <tr key={ret.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-[#98AFC7]">
                          <Package className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-[#29465B] tracking-tight">{ret.productName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xs text-[#98AFC7] font-medium">{ret.date}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        'px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border',
                        ret.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' :
                          ret.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            'bg-red-50 text-red-500 border-red-100'
                      )}>
                        {ret.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right text-sm font-black text-[#29465B] tracking-tighter">{formatCurrency(ret.refundAmount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Default: overview tab
  return (
    <div className="space-y-8 pb-12">
      {/* Greeting */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-[#29465B] tracking-tighter">Hi Vaish 👋</h1>
        <p className="text-[#98AFC7] font-medium italic opacity-80">Track your returns and refunds in real-time.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Returns"
          value={3}
          icon={RefreshCcw}
          colorClassName="bg-[#6495ED]/10 text-[#6495ED]"
        />
        <StatCard
          title="Pending Refund"
          value={formatCurrency(45)}
          icon={Clock}
          colorClassName="bg-amber-50 text-amber-500"
        />
        <StatCard
          title="Completed Returns"
          value={2}
          icon={ShieldCheck}
          colorClassName="bg-green-50 text-green-600"
        />
      </div>

      {/* Status Tracker */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6495ED]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <h3 className="text-xl font-black text-[#29465B] tracking-tighter mb-8">Latest Return Status</h3>

        <div className="relative flex items-center justify-between">
          {/* Progress Line */}
          <div className="absolute left-0 top-[20px] w-full h-1 bg-gray-100 z-0">
            <div className="h-full bg-[#6495ED]/30 w-1/2 rounded-full"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
              <div className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center border-4 border-white transition-all shadow-sm',
                step.completed ? 'bg-[#6495ED] text-white' : 'bg-gray-100 text-[#98AFC7]'
              )}>
                <span className="text-[10px] font-black">{idx + 1}</span>
              </div>
              <span className={cn(
                'text-[9px] font-black uppercase tracking-widest',
                step.completed ? 'text-[#6495ED]' : 'text-[#98AFC7] opacity-60'
              )}>{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Returns */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-black text-[#29465B] tracking-tighter">Recent Returns</h3>
            <p className="text-[10px] text-[#98AFC7] font-bold uppercase tracking-widest mt-1">Your recent activity</p>
          </div>
          <button className="text-[10px] font-black text-[#6495ED] uppercase tracking-widest hover:text-[#29465B] transition-colors flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/60">
                <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest">Product</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest">Date</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#98AFC7] uppercase tracking-widest text-right">Refund</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_RETURNS.slice(0, 3).map((ret) => (
                <tr key={ret.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-[#98AFC7]">
                        <Package className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-[#29465B] tracking-tight">{ret.productName}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs text-[#98AFC7] font-medium">{ret.date}</td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border',
                      ret.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' :
                        ret.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                          'bg-red-50 text-red-500 border-red-100'
                    )}>
                      {ret.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right text-sm font-black text-[#29465B] tracking-tighter">{formatCurrency(ret.refundAmount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}