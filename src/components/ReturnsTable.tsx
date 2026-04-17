import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { Product } from '../types';
import { cn, formatPercent } from '../utils/utils';
import { motion } from 'motion/react';

interface ReturnsTableProps {
  products: Product[];
}

export default function ReturnsTable({ products }: ReturnsTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || p.riskLevel === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 border-b border-dashboard-bg flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-dark-accent tracking-tighter">Inventory Performance Hub</h3>
          <p className="text-[11px] text-secondary font-bold uppercase tracking-widest mt-0.5">Real-time Risk Asset Monitoring</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/60" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-dashboard-bg border border-secondary/20 rounded-xl text-[11px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-secondary/40"
            />
          </div>
          <div className="flex bg-dashboard-bg p-1 rounded-xl border border-secondary/10">
            {(['All', 'High', 'Medium', 'Low'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all",
                  filter === f ? "bg-white text-primary shadow-sm shadow-primary/5" : "text-secondary hover:text-dark-accent"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 overflow-y-auto max-h-[600px] scrollbar-hide">
        {filteredProducts.map((p) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className={cn(
              "p-6 rounded-3xl border transition-all duration-200 group relative overflow-hidden",
              p.riskLevel === 'High' ? "bg-danger/[0.03] border-danger/20" : "bg-white border-secondary/10 hover:border-secondary/30 shadow-sm hover:shadow-md"
            )}
          >
            {/* High risk accent line */}
            {p.riskLevel === 'High' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-danger"></div>
            )}

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black bg-dashboard-bg border border-secondary/10",
                  p.riskLevel === 'High' ? "text-danger" : "text-primary"
                )}>
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-base font-black text-dark-accent tracking-tight group-hover:text-primary transition-colors truncate">{p.name}</h4>
                    <span className="px-2 py-0.5 bg-dashboard-bg rounded-md text-[9px] font-black text-secondary uppercase tracking-[0.1em] border border-secondary/10 flex-shrink-0">{p.category}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-secondary italic overflow-hidden">
                    <span className="flex items-center gap-1.5 whitespace-nowrap"><ArrowUpRight className="w-3 h-3" /> {p.totalSold} Units Shipped</span>
                    <span className="w-1 h-1 bg-secondary/30 rounded-full flex-shrink-0"></span>
                    <span className="flex items-center justify-center gap-1 px-2 py-0.5 bg-soft-accent/10 text-soft-accent rounded-full border border-soft-accent/20 whitespace-nowrap">
                      {p.riskLevel === 'Medium' ? 'Moderate Concern' : p.riskLevel === 'High' ? 'Critical Action' : 'Operational Stable'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 min-w-0">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-secondary/60">
                    <span>Performance</span>
                    <div className="flex items-center gap-1">
                      <span className="text-dark-accent font-mono">{formatPercent(p.returnRate)}</span>
                      {p.trend === 'up' ? <ArrowUpRight className="w-3 h-3 text-danger" /> : <ArrowDownRight className="w-3 h-3 text-success" />}
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-secondary/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(p.returnRate * 5, 100)}%` }}
                      className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        p.returnRate > 10 ? "bg-danger" : p.returnRate > 5 ? "bg-warning" : "bg-success"
                      )}
                    ></motion.div>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/60">Risk Vector</span>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest",
                      p.riskLevel === 'High' ? "bg-danger text-white shadow-lg shadow-danger/20" : 
                      p.riskLevel === 'Medium' ? "bg-warning text-white" : 
                      "bg-success text-white"
                    )}>
                      {p.riskLevel}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/60">Variance</span>
                  <span className="text-sm font-black text-dark-accent font-mono">-{p.riskScore}.00</span>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <button className="px-4 py-2 bg-dashboard-bg hover:bg-white text-[10px] font-black uppercase tracking-widest text-secondary border border-secondary/10 hover:border-primary/30 hover:text-primary rounded-xl transition-all">Report</button>
                  <button className="p-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-dashboard-bg rounded-3xl flex items-center justify-center mx-auto mb-6 border border-secondary/10">
              <Search className="w-8 h-8 text-secondary/40" />
            </div>
            <p className="text-sm font-black text-secondary uppercase tracking-[0.2em] italic">No active assets matched query</p>
          </div>
        )}
      </div>
    </div>
  );
}
