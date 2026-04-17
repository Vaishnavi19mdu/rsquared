export type UserRole = 'ADMIN' | 'STAFF' | 'CUSTOMER';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  returnCount: number;
  totalSold: number;
  returnRate: number; // Percentage
  riskScore: number; // 0-100
  riskLevel: 'Low' | 'Medium' | 'High';
  trend?: 'up' | 'down' | 'stable';
}

export interface ReturnRecord {
  id: string;
  productName: string;
  customerName: string;
  date: string;
  reason: string;
  status: 'Completed' | 'Pending' | 'Rejected';
  refundAmount: number;
}

export interface ReturnReasonDistribution {
  reason: string;
  count: number;
  color: string;
}

export interface DashboardStats {
  totalReturns: number;
  averageReturnRate: number;
  totalRefundAmount: number;
  topReturnedProduct: string;
}

export interface ImprovementAction {
  id: string;
  title: string;
  description: string;
  impact: string;
  status: 'In Progress' | 'Completed';
  date: string;
}

export interface AiSuggestion {
  id: string;
  title: string;
  suggestion: string;
  priority: 'High' | 'Medium' | 'Low';
  confidence: number;
  impact: 'High' | 'Medium' | 'Low';
}
