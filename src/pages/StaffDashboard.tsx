import React from 'react';
import { Package, RefreshCcw, BarChart3 } from 'lucide-react';
import StatCard from '../components/StatCard';
import ReturnsTable from '../components/ReturnsTable';
import { ReturnsBarChart } from '../components/Charts';
import InsightsSection from '../components/InsightsSection';
import { DASHBOARD_STATS, MOCK_PRODUCTS } from '../services/mockData';
import { formatPercent } from '../utils/utils';

export default function StaffDashboard({ activeTab }: { activeTab: string }) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Processing Status" 
            value={DASHBOARD_STATS.totalReturns} 
            icon={RefreshCcw} 
            colorClassName="bg-primary/20 text-primary"
          />
          <StatCard 
            title="Return Rate" 
            value={formatPercent(DASHBOARD_STATS.averageReturnRate)} 
            icon={BarChart3} 
            colorClassName="bg-success/10 text-success"
          />
          <StatCard 
            title="High Return SKU" 
            value={DASHBOARD_STATS.topReturnedProduct.split(' ')[0]} 
            icon={Package} 
            colorClassName="bg-warning/10 text-warning"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 min-w-0">
             <InsightsSection />
          </div>
          <div className="lg:col-span-2 min-w-0">
            <ReturnsBarChart data={MOCK_PRODUCTS} title="Inventory Throughput Variance" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
             <h3 className="text-xl font-bold text-dark-accent tracking-tighter">Operational Registry</h3>
             <span className="text-[10px] font-black text-secondary uppercase tracking-widest italic">Sync Status: Active</span>
          </div>
          <ReturnsTable products={MOCK_PRODUCTS} />
        </div>
      </div>
    );
  }

  if (activeTab === 'products' || activeTab === 'returns') {
    return (
      <div className="space-y-8 pb-12">
        <div className="bg-white p-8 rounded-3xl border border-secondary/10 shadow-sm">
           <div className="mb-6">
              <h3 className="text-xl font-black text-dark-accent tracking-tighter">Inventory Performance Hub</h3>
              <p className="text-secondary font-medium tracking-tight italic opacity-70">Strategic asset monitoring and risk assessment.</p>
           </div>
           <ReturnsTable products={MOCK_PRODUCTS} />
        </div>
      </div>
    );
  }

  return <div className="p-12 text-center text-slate-400 font-bold italic uppercase tracking-widest">Unauthorized Access Domain</div>;
}
