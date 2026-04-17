import React from 'react';
import { History, TrendingDown, Target, CheckCircle } from 'lucide-react';
import { ImprovementAction } from '../types';
import { IMPROVEMENT_ACTIONS } from '../services/mockData';

export default function ImprovementTracker() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-secondary/10 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <History className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Operational Audit Log</span>
          </div>
          <h2 className="text-3xl font-extrabold text-dark-accent tracking-tighter">Strategic Optimization</h2>
        </div>
        <button className="px-5 py-2.5 bg-dashboard-bg text-secondary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary/10 hover:text-dark-accent transition-all border border-secondary/10">
          New Entry
        </button>
      </div>

      <div className="space-y-10 relative">
        {IMPROVEMENT_ACTIONS.map((action, idx) => (
          <div key={action.id} className="relative pl-10">
            {/* Timeline Line */}
            {idx !== IMPROVEMENT_ACTIONS.length - 1 && (
              <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-dashboard-bg"></div>
            )}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_8px_rgba(100,149,237,0.4)] z-10"></div>
            
            <div className="bg-dashboard-bg/50 p-6 rounded-2xl hover:bg-dashboard-bg transition-all border border-secondary/5 group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-extrabold text-dark-accent tracking-tight group-hover:text-primary transition-colors">{action.title}</h4>
                  <p className="text-[10px] font-black text-secondary/60 uppercase tracking-widest mt-1">{action.date}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-secondary/10 rounded-lg shadow-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${action.status === 'Completed' ? 'bg-success shadow-[0_0_6px_rgba(34,197,94,0.4)]' : 'bg-warning shadow-[0_0_6px_rgba(245,158,11,0.4)]'}`}></span>
                  <span className="text-[9px] font-black text-secondary uppercase tracking-[0.1em]">{action.status}</span>
                </div>
              </div>

              <p className="text-sm text-secondary font-medium italic leading-relaxed mb-6 opacity-80">
                "{action.description}"
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-secondary/5 shadow-sm">
                  <TrendingDown className="w-4 h-4 text-success" />
                  <div>
                    <span className="block text-[9px] font-black text-secondary uppercase tracking-tighter">Verified ROI</span>
                    <span className="block text-xs font-extrabold text-success">{action.impact}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-secondary/40">
                  <Target className="w-4 h-4 opacity-50" />
                  <span className="text-[9px] font-black uppercase tracking-[0.15em]">KPI Alignment: Return Mitigation</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
