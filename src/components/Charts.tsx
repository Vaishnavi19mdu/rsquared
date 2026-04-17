import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { Product, ReturnReasonDistribution } from '../types';

interface BarChartProps {
  data: Product[];
  title: string;
}

export function ReturnsBarChart({ data, title }: BarChartProps) {
  const chartData = data.map(p => ({
    name: p.name.length > 20 ? p.name.substring(0, 17) + '...' : p.name,
    returns: p.returnCount,
    rate: p.returnRate
  })).sort((a, b) => b.returns - a.returns).slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm h-[400px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-bold text-dark-accent tracking-tighter">{title}</h3>
          <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">Volume Distribution</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Returns</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#98AFC7', fontWeight: 600 }} 
            interval={0}
            dy={10}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#98AFC7', fontWeight: 600 }} />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: '1px solid #98AFC720', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)'
            }}
            cursor={{ fill: '#FAFAFA' }}
          />
          <Bar dataKey="returns" fill="#6495ED" radius={[6, 6, 0, 0]} barSize={44} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

interface PieChartProps {
  data: ReturnReasonDistribution[];
  title: string;
}

export function ReasonsPieChart({ data, title }: PieChartProps) {
  // Use status colors for the pie chart
  const COLORS = ['#6495ED', '#98AFC7', '#22C55E', '#F59E0B', '#EF4444'];

  return (
    <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm h-[400px]">
      <h3 className="font-bold text-dark-accent tracking-tighter mb-1">{title}</h3>
      <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-8">Attribution Matrix</p>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={8}
            dataKey="count"
            nameKey="reason"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: '1px solid #98AFC720', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)'
            }}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center"
            iconType="circle"
            wrapperStyle={{ 
              fontSize: '9px', 
              fontWeight: '800', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              color: '#98AFC7',
              paddingTop: '20px' 
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
