import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, TrendingUp, AlertTriangle, ArrowRight, BarChart3 } from 'lucide-react';
import { cn } from '../utils/utils';

interface Insight {
  id: string;
  type: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  stat: string;
  icon: any;
}

export default function InsightsSection() {
  const insights: Insight[] = [
    { 
      id: '1', 
      type: 'critical', 
      title: 'Size Mismatch Anomaly', 
      description: 'Apparel category showing 45% return rate due to size fit issues in the current batch.', 
      stat: '45% Returns',
      icon: AlertTriangle 
    },
    { 
      id: '2', 
      type: 'info', 
      title: 'Optimal Conversion Vector', 
      description: 'Electronics returns dropped by 12% following the implementation of high-res image protocols.', 
      stat: '12% Improve',
      icon: Lightbulb 
    },
    { 
      id: '3', 
      type: 'warning', 
      title: 'High Variance SKUs', 
      description: 'Product "X-90" has 2.4x higher return rate compared to historical segment average.', 
      stat: '2.4x Spike',
      icon: BarChart3 
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
         <div>
            <h3 className="text-xl font-black text-dark-accent tracking-tighter">Neural Insight Ledger</h3>
            <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mt-0.5">Real-time Pattern Synthesis</p>
         </div>
         <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-dark-accent transition-colors">
            <span>Archive</span>
            <ArrowRight className="w-3 h-3" />
         </button>
      </div>

      <div className="space-y-4">
        {insights.map((insight, idx) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
               "p-6 rounded-3xl border-l-4 transition-all hover:bg-white hover:shadow-md cursor-pointer group",
               insight.type === 'critical' ? "bg-danger/[0.03] border-danger border-y border-r border-danger/10" :
               insight.type === 'warning' ? "bg-warning/[0.03] border-warning border-y border-r border-warning/10" :
               "bg-primary/[0.03] border-primary border-y border-r border-primary/10"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4 min-w-0">
                 <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border",
                    insight.type === 'critical' ? "bg-danger/10 border-danger/10 text-danger" :
                    insight.type === 'warning' ? "bg-warning/10 border-warning/10 text-warning" :
                    "bg-primary/10 border-primary/10 text-primary"
                 )}>
                    <insight.icon className="w-5 h-5" />
                 </div>
                 <div className="min-w-0">
                    <h4 className="text-base font-black text-dark-accent tracking-tight mb-1 group-hover:text-primary transition-colors truncate">{insight.title}</h4>
                    <p className="text-[11px] text-secondary font-medium leading-relaxed italic opacity-80">{insight.description}</p>
                 </div>
              </div>
              <div className="text-right flex-shrink-0">
                 <span className={cn(
                    "text-xs font-black tracking-tighter italic",
                    insight.type === 'critical' ? "text-danger" :
                    insight.type === 'warning' ? "text-warning" :
                    "text-primary"
                 )}>
                    {insight.stat}
                 </span>
                 <div className="flex items-center justify-end gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-secondary opacity-40" />
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
