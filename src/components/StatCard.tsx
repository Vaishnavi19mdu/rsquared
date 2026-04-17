import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../utils/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  label?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isUp: boolean;
  };
  colorClassName: string;
}

export default function StatCard({ title, value, label, icon: Icon, trend, colorClassName }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">{title}</p>
          <h3 className="text-3xl font-extrabold text-dark-accent tracking-tighter">{value}</h3>
          {label && <p className="text-[11px] text-warm-accent mt-2 font-semibold opacity-60 uppercase tracking-tighter">{label}</p>}
        </div>
        <div className={cn("p-2.5 rounded-xl transition-all duration-300", colorClassName)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      {trend && (
        <div className="mt-6 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black",
            trend.isUp ? "bg-danger/10 text-danger" : "bg-success/10 text-success"
          )}>
            {trend.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{trend.value}%</span>
          </div>
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Growth</span>
        </div>
      )}
    </div>
  );
}
