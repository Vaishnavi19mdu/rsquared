import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle2, XCircle, Info, ArrowRight, ShieldAlert } from 'lucide-react';
import { cn, formatCurrency } from '../utils/utils';
import { MOCK_RETURNS } from '../services/mockData';

interface Issue {
  id: string;
  productName: string;
  type: 'Defect' | 'Size' | 'Delay';
  priority: 'High' | 'Medium' | 'Low';
  reason: string;
  date: string;
  refundAmount: number;
}

const issues: Issue[] = [
  { id: '1', productName: 'Quantum Pro Headset', type: 'Defect', priority: 'High', reason: 'Audio driver malfunction in left earcup reported by 12 users.', date: '2023-11-20', refundAmount: 299 },
  { id: '2', productName: 'Cloud Walker Z3', type: 'Size', priority: 'Medium', reason: 'Toe box reported as significantly narrower than previous versions.', date: '2023-11-21', refundAmount: 145 },
  { id: '3', productName: 'Zenith Smartwatch', type: 'Delay', priority: 'Low', reason: 'Logistics bottleneck at regional hub causing 4-day shipping lag.', date: '2023-11-22', refundAmount: 350 },
  { id: '4', productName: 'Nova Soft Hoodie', type: 'Size', priority: 'Medium', reason: 'Sleeve length inconsistent across Large and XL variants.', date: '2023-11-23', refundAmount: 85 },
];

export default function ResolutionCenter() {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(issues[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
      {/* LEFT: Issues List */}
      <div className="lg:col-span-5 space-y-4 overflow-y-auto max-h-[700px] pr-2">
        <h3 className="text-xl font-black text-dark-accent tracking-tighter mb-4">Issues List</h3>
        <div className="space-y-3">
          {issues.map((issue) => (
            <button
              key={issue.id}
              onClick={() => setSelectedIssue(issue)}
              className={cn(
                "w-full p-5 rounded-2xl border text-left transition-all group relative overflow-hidden",
                selectedIssue?.id === issue.id 
                  ? "bg-white border-primary shadow-md ring-1 ring-primary/5" 
                  : "bg-white/50 border-secondary/10 hover:border-secondary/30 hover:bg-white"
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-black text-dark-accent tracking-tight truncate flex-1 pr-4">{issue.productName}</h4>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border",
                  issue.priority === 'High' ? "bg-danger/10 text-danger border-danger/10" :
                  issue.priority === 'Medium' ? "bg-warning/10 text-warning border-warning/10" :
                  "bg-success/10 text-success border-success/10"
                )}>
                  {issue.priority}
                </span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="px-2 py-0.5 bg-dashboard-bg rounded-md text-[9px] font-black text-secondary/60 uppercase tracking-widest border border-secondary/5">{issue.type}</span>
                 <span className="text-[10px] text-secondary font-medium italic truncate">{issue.reason.substring(0, 40)}...</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: Resolution Panel */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-secondary/10 shadow-sm overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {selectedIssue ? (
            <motion.div
              key={selectedIssue.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col p-8"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div>
                   <h2 className="text-2xl font-black text-dark-accent tracking-tighter mb-1">{selectedIssue.productName}</h2>
                   <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-secondary italic">{selectedIssue.date}</span>
                      <span className="w-1.5 h-1.5 bg-secondary/20 rounded-full"></span>
                      <span className="text-xs font-black text-primary uppercase tracking-widest">{selectedIssue.type} Issue</span>
                   </div>
                </div>
                <div className="px-4 py-2 bg-dashboard-bg rounded-xl border border-secondary/10">
                   <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Value at Risk</span>
                   <span className="text-lg font-black text-dark-accent tracking-tighter">{formatCurrency(selectedIssue.refundAmount)}</span>
                </div>
              </div>

              <div className="space-y-8 flex-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    <h4 className="text-xs font-black text-secondary uppercase tracking-widest">Issue Details</h4>
                  </div>
                  <div className="p-6 bg-dashboard-bg rounded-2xl border border-secondary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
                    <p className="text-sm text-dark-accent font-medium leading-relaxed italic opacity-90">{selectedIssue.reason}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-soft-accent" />
                    <h4 className="text-xs font-black text-secondary uppercase tracking-widest">Suggested Action (AI)</h4>
                  </div>
                  <div className="p-6 bg-soft-accent/5 rounded-2xl border border-soft-accent/20">
                    <p className="text-sm text-soft-accent font-bold leading-relaxed">
                      {selectedIssue.type === 'Defect' && "Initiate quality control audit for batch #RX-99. Suggest factory recall for remaining inventory to prevent further overhead."}
                      {selectedIssue.type === 'Size' && "Update product detail page with 'Runs Small' disclaimer. Recalibrate digital sizing tool based on user feedback vectors."}
                      {selectedIssue.type === 'Delay' && "Route remaining shipments via carrier Priority Alpha. Update customer automated comms with 10% credit incentive."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-secondary/5 flex items-center justify-between gap-4">
                 <button className="flex-1 py-4 bg-dashboard-bg text-secondary border border-secondary/10 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-secondary/10 transition-all">Ignore</button>
                 <button className="flex-1 py-4 bg-soft-accent/20 text-soft-accent border border-soft-accent/20 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-soft-accent/30 transition-all">Escalate</button>
                 <button className="flex-[2] py-4 bg-primary text-white rounded-xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                   <span>Resolve Issue</span>
                   <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 bg-dashboard-bg rounded-[40px] flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-secondary/30" />
              </div>
              <h3 className="text-xl font-black text-dark-accent tracking-tighter mb-2">Select an Issue</h3>
              <p className="text-xs text-secondary font-medium tracking-tight italic">Review active data anomalies for immediate resolution.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
