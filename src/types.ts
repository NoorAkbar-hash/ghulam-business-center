export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost';
export type AdminRole = 'admin';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  source: string;
  notes?: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  email: string;
  role: AdminRole;
  createdAt: string;
}

export interface CRMAnalytics {
  totalLeads: number;
  leadsByStatus: Record<LeadStatus, number>;
  conversionRate: number;
  monthlyGrowth: number;
  serviceBreakdown: Record<string, number>;
}
