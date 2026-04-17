import React from 'react';
import { Package, RefreshCcw, DollarSign, BarChart3, TrendingDown } from 'lucide-react';
import StatCard from '../components/StatCard';
import { ReturnsBarChart, ReasonsPieChart } from '../components/Charts';
import ReturnsTable from '../components/ReturnsTable';
import AiSuggestions from '../components/AiSuggestions';
import ImprovementTracker from '../components/ImprovementTracker';
import InsightsSection from '../components/InsightsSection';
import ResolutionCenter from '../components/ResolutionCenter';
import { DASHBOARD_STATS, MOCK_PRODUCTS, REASON_DISTRIBUTION } from '../services/mockData';
import { formatCurrency, formatPercent } from '../utils/utils';

export default function AdminDashboard({ activeTab }: { activeTab: string }) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-8 pb-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Returns" 
            value={DASHBOARD_STATS.totalReturns} 
            icon={RefreshCcw} 
            trend={{ value: 12.4, isUp: true }}
            colorClassName="bg-primary/20 text-primary"
          />
          <StatCard 
            title="Return Efficiency" 
            value={formatPercent(DASHBOARD_STATS.averageReturnRate)} 
            icon={BarChart3} 
            trend={{ value: 3.2, isUp: false }}
            label="Rate Tracking"
            colorClassName="bg-success/10 text-success"
          />
          <StatCard 
            title="Total Refunded" 
            value={formatCurrency(DASHBOARD_STATS.totalRefundAmount)} 
            icon={DollarSign} 
            label="Capital Outflow"
            colorClassName="bg-warning/10 text-warning"
          />
          <StatCard 
            title="At-Risk Products" 
            value={2} 
            icon={Package} 
            label="High Variance SKUs"
            colorClassName="bg-danger/10 text-danger"
          />
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 min-w-0">
             <InsightsSection />
          </div>
          <div className="lg:col-span-2 min-w-0">
            <ReturnsBarChart data={MOCK_PRODUCTS} title="Performance Variance" />
          </div>
        </div>

        {/* Charts and AI Suggestions row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
          <div className="xl:col-span-8 min-w-0">
             <AiSuggestions />
          </div>
          <div className="xl:col-span-4 min-w-0">
            <ReasonsPieChart data={REASON_DISTRIBUTION} title="Root Cause Analysis" />
          </div>
        </div>

        {/* Strategy and Registry Section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
           <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-dark-accent tracking-tighter">Inventory Analysis</h3>
                <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:text-dark-accent transition-colors">Export Report</button>
              </div>
              <ReturnsTable products={MOCK_PRODUCTS} />
           </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'products') {
    return (
      <div className="space-y-8 pb-12">
        <div className="flex items-center gap-6 p-10 bg-dark-accent rounded-[32px] text-white shadow-xl shadow-dark-accent/20 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/5">
              <TrendingDown className="w-8 h-8 text-primary" />
           </div>
           <div>
             <h3 className="text-3xl font-black tracking-tighter mb-1">Predictive Risk Inventory</h3>
             <p className="text-secondary font-medium italic opacity-70">Neural classification of inventory assets based on historical return vectors.</p>
           </div>
        </div>
        <ReturnsTable products={MOCK_PRODUCTS} />
      </div>
    );
  }

   if (activeTab === 'returns') {
     return (
       <div className="space-y-8 pb-12">
         <div className="flex flex-col gap-2">
           <h1 className="text-3xl font-black text-dark-accent tracking-tighter">Resolution Center</h1>
           <p className="text-secondary font-medium italic opacity-80">Identify and resolve data anomalies across the inventory network.</p>
         </div>
         <ResolutionCenter />
       </div>
     );
   }

  if (activeTab === 'insights') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        <div className="space-y-8">
           <InsightsSection />
           <AiSuggestions />
        </div>
        <div className="space-y-8">
           <ImprovementTracker />
           <div className="bg-white p-8 rounded-3xl border border-secondary/10 shadow-sm">
              <h3 className="text-xl font-black text-dark-accent tracking-tighter mb-6">Strategy Matrix</h3>
              <ReasonsPieChart data={REASON_DISTRIBUTION} title="Root Cause Attribution" />
           </div>
        </div>
      </div>
    );
  }

  return <div>Tab mapping under implementation...</div>;
}
