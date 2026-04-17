import { Product, ReturnRecord, ReturnReasonDistribution, DashboardStats, ImprovementAction, AiSuggestion } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Ultra-Comfort Wireless Headphones', category: 'Electronics', price: 149, returnCount: 45, totalSold: 1200, returnRate: 3.75, riskScore: 15, riskLevel: 'Low', trend: 'down' },
  { id: '2', name: 'Slim-Fit Stretch Denims', category: 'Apparel', price: 59, returnCount: 180, totalSold: 1500, returnRate: 12.0, riskScore: 85, riskLevel: 'High', trend: 'up' },
  { id: '3', name: 'Ergonomic Office Chair', category: 'Furniture', price: 299, returnCount: 30, totalSold: 400, returnRate: 7.5, riskScore: 45, riskLevel: 'Medium', trend: 'stable' },
  { id: '4', name: 'Smart Fitness Tracker v2', category: 'Electronics', price: 89, returnCount: 12, totalSold: 1000, returnRate: 1.2, riskScore: 5, riskLevel: 'Low', trend: 'down' },
  { id: '5', name: 'Organic Cotton Tee', category: 'Apparel', price: 25, returnCount: 50, totalSold: 2000, returnRate: 2.5, riskScore: 10, riskLevel: 'Low', trend: 'stable' },
  { id: '6', name: 'Professional Stand Mixer', category: 'Appliances', price: 449, returnCount: 15, totalSold: 300, returnRate: 5.0, riskScore: 35, riskLevel: 'Medium', trend: 'up' },
  { id: '7', name: 'Hydro-Glow Face Serum', category: 'Beauty', price: 42, returnCount: 60, totalSold: 800, returnRate: 7.5, riskScore: 55, riskLevel: 'Medium', trend: 'up' },
];

export const MOCK_RETURNS: ReturnRecord[] = [
  { id: 'RT001', productName: 'Slim-Fit Stretch Denims', customerName: 'Alice Johnson', date: '2024-03-10', reason: 'Size too small', status: 'Completed', refundAmount: 59 },
  { id: 'RT002', productName: 'Ergonomic Office Chair', customerName: 'Bob Smith', date: '2024-03-12', reason: 'Defective parts', status: 'Pending', refundAmount: 299 },
  { id: 'RT003', productName: 'Ultra-Comfort Wireless Headphones', customerName: 'Charlie Brown', date: '2024-03-14', reason: 'Changed mind', status: 'Completed', refundAmount: 149 },
  { id: 'RT004', productName: 'Slim-Fit Stretch Denims', customerName: 'Diana Prince', date: '2024-03-15', reason: 'Size too small', status: 'Completed', refundAmount: 59 },
  { id: 'RT005', productName: 'Hydro-Glow Face Serum', customerName: 'Edward Norton', date: '2024-03-16', reason: 'Skin irritation', status: 'Rejected', refundAmount: 0 },
];

export const REASON_DISTRIBUTION: ReturnReasonDistribution[] = [
  { reason: 'Size/Fit Issues', count: 245, color: '#3B82F6' }, // Blue
  { reason: 'Defective/Damaged', count: 120, color: '#EF4444' }, // Red
  { reason: 'Changed Mind', count: 85, color: '#10B981' }, // Green
  { reason: 'Inaccurate Description', count: 65, color: '#F59E0B' }, // Orange
  { reason: 'Other', count: 40, color: '#8B5CF6' }, // Purple
];

export const DASHBOARD_STATS: DashboardStats = {
  totalReturns: 555,
  averageReturnRate: 5.8,
  totalRefundAmount: 24500,
  topReturnedProduct: 'Slim-Fit Stretch Denims',
};

export const IMPROVEMENT_ACTIONS: ImprovementAction[] = [
  { id: 'ACT001', title: 'Update Denim Size Chart', description: 'Added detailed measurements for waist and inseam to reduce fit issues.', impact: 'Size-related returns dropped by 15%', status: 'Completed', date: '2024-02-15' },
  { id: 'ACT002', title: 'Improve Headphone Packaging', description: 'Added reinforced foam inserts to prevent shipping damage.', impact: 'Defective returns reduced by 8%', status: 'In Progress', date: '2024-03-01' },
];

export const AI_SUGGESTIONS: AiSuggestion[] = [
  { id: 'SUG001', title: 'Enhance Product Imagery', suggestion: 'High-resolution images with 360-degree views for "Apparel" can reduce "Inaccurate Description" returns by up to 20%.', priority: 'High', confidence: 92, impact: 'High' },
  { id: 'SUG002', title: 'Quality Control Alert', suggestion: 'A recurring defect in the adjustment lever of "Ergonomic Office Chair" suggests a batch issue at the factory.', priority: 'Medium', confidence: 78, impact: 'Medium' },
  { id: 'SUG003', title: 'Smart Size Recommendation', suggestion: 'Implementing an AI-driven size recommender based on customer height/weight can significantly cut down size-related returns.', priority: 'High', confidence: 85, impact: 'High' },
];
