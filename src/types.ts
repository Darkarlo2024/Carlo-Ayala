export type ProspectStatus = 'Nuevo lead' | 'Contactado' | 'Cotización enviada' | 'Seguimiento' | 'Cerrado' | 'Perdido';

export interface Prospect {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: ProspectStatus;
  insuranceType: string;
  value: number;
  lastAction: string;
  nextAction: string;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  policyType: string;
  renewalDate: string;
  monthlyPremium: number;
  status: 'Active' | 'Pending' | 'Expired';
  history: { date: string; event: string }[];
}

export interface MetricData {
  month: string;
  revenue: number;
  conversions: number;
  leads: number;
}
