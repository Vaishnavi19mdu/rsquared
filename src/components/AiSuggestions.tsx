import React, { useState } from 'react';
import { Sparkles, ArrowRight, BrainCircuit, Zap, CheckCircle2 } from 'lucide-react';
import { AiSuggestion } from '../types';
import { cn } from '../utils/utils';
import { AI_SUGGESTIONS } from '../services/mockData';

export default function AiSuggestions() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<AiSuggestion[]>([]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI processing
    setTimeout(() => {
      setSuggestions(AI_SUGGESTIONS);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="bg-dark-accent p-8 rounded-3xl text-white shadow-xl shadow-dark-accent/10 relative overflow-hidden h-full">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -ml-24 -mb-24"></div>

      <div className="relative z-10">
        <div className="flex flex-col mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Neural Intelligence Hub</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tighter">AI Tactical Diagnostics</h2>
          <p className="text-secondary mt-3 font-medium text-sm leading-relaxed max-w-md">
            Real-time pattern recognition engine optimizing inventory liquidity through automated anomaly detection.
          </p>
          
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={cn(
              "mt-8 w-fit px-8 py-4 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
              isAnalyzing && "animate-pulse"
            )}
          >
            {isAnalyzing ? (
              <>
                <BrainCircuit className="w-5 h-5 animate-spin" />
                <span>Running Scan...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                <span>Engage Diagnostic</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          {suggestions.length > 0 ? (
            suggestions.map((s) => (
              <div 
                key={s.id} 
                className="glass-card p-6 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer border-white/10 hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest",
                      s.priority === 'High' ? "bg-danger text-white" : "bg-primary text-white"
                    )}>
                      {s.priority}
                    </span>
                    <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-soft-accent border border-soft-accent/20">
                      Impact: {s.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.15em] opacity-60">Confidence</span>
                    <span className="text-xs font-black text-primary italic">{s.confidence}%</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 leading-tight text-white tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
                  <Zap className="w-4 h-4 text-soft-accent" />
                  {s.title}
                </h4>
                <p className="text-xs text-secondary font-medium leading-relaxed italic opacity-90 border-l-2 border-soft-accent/30 pl-4 py-1">
                  {s.suggestion}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors">
                    <span>Deploy Action</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={cn("w-1.5 h-1.5 rounded-full", i <= (s.confidence / 33) ? "bg-primary" : "bg-white/10")}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : !isAnalyzing && (
            <div className="py-24 flex flex-col items-center justify-center border border-white/5 rounded-[40px] bg-white/[0.02] backdrop-blur-sm">
              <BrainCircuit className="w-12 h-12 text-white/10 mb-6 animate-pulse" />
              <p className="text-[11px] font-black text-white/30 tracking-[0.3em] uppercase italic">Diagnostic Mode: Standby</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
