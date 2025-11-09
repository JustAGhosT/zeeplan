import { defaultPartnershipData } from './lib/partnershipData';
import { calculateFiveYearSummary, formatCurrency } from './lib/calculations';

const summary = calculateFiveYearSummary(defaultPartnershipData);

console.log(JSON.stringify(summary, null, 2));
