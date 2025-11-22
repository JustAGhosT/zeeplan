import {
    calculateEnterpriseRevenue,
    calculateEnterpriseCosts,
    calculateTotalRevenue,
    calculateTotalCosts,
} from './calculations';
import { Enterprise, PartnershipData, YearlyTarget } from './partnershipData';

describe('Refactored Financial Calculations', () => {
    // Mock Data
    const mockLivestockEnterprise: Enterprise = {
        id: 'cattle',
        name: 'Cattle',
        type: 'livestock',
        enabled: true,
        hectares: 100,
        density: 1,
        marketPrice: [1000, 1500],
        offtakeRate: 25,
        costPerHecatare: [50, 75],
        costPerAnimal: [100, 150],
    };

    const mockCropEnterprise: Enterprise = {
        id: 'crops',
        name: 'Crops',
        type: 'crop',
        enabled: true,
        hectares: 50,
        revenuePerHectare: [500, 800],
        costPerHectare: [200, 300],
    };

    const mockSekelbosEnterprise: Enterprise = {
        id: 'sekelbos',
        name: 'Sekelbos Clearance',
        type: 'other',
        enabled: true,
        hectares: 0, // Not used for this calculation type
        revenuePerHectare: [3000, 5000],
    };

    const mockYearData: YearlyTarget = {
        year: 1,
        sekelbosCleared: 10,
        costs: [10000, 15000], // Base yearly costs
    };

    const mockPartnershipData: PartnershipData = {
        enterprises: [mockLivestockEnterprise, mockCropEnterprise, mockSekelbosEnterprise],
    } as PartnershipData;

    // Tests for individual enterprise calculations
    describe('calculateEnterpriseRevenue', () => {
        it('should calculate livestock revenue correctly', () => {
            const revenue = calculateEnterpriseRevenue(mockLivestockEnterprise, mockYearData);
            // (100 ha * 1 density) * 0.25 offtake = 25 animals sold
            // 25 * 1000 = 25000 (min), 25 * 1500 = 37500 (max)
            expect(revenue).toEqual([25000, 37500]);
        });

        it('should calculate crop revenue correctly', () => {
            const revenue = calculateEnterpriseRevenue(mockCropEnterprise, mockYearData);
            // 50 ha * 500 = 25000 (min), 50 ha * 800 = 40000 (max)
            expect(revenue).toEqual([25000, 40000]);
        });

        it('should calculate sekelbos revenue based on yearly cleared amount', () => {
            const revenue = calculateEnterpriseRevenue(mockSekelbosEnterprise, mockYearData);
            // 10 cleared ha * 3000 = 30000 (min), 10 * 5000 = 50000 (max)
            expect(revenue).toEqual([30000, 50000]);
        });

        it('should return [0, 0] for disabled enterprises', () => {
            const disabledEnterprise = { ...mockLivestockEnterprise, enabled: false };
            const revenue = calculateEnterpriseRevenue(disabledEnterprise, mockYearData);
            expect(revenue).toEqual([0, 0]);
        });
    });

    describe('calculateEnterpriseCosts', () => {
        it('should calculate livestock costs correctly', () => {
            const costs = calculateEnterpriseCosts(mockLivestockEnterprise);
            // (100 ha * 50) + (100 animals * 100) = 5000 + 10000 = 15000 (min)
            // (100 ha * 75) + (100 animals * 150) = 7500 + 15000 = 22500 (max)
            expect(costs).toEqual([15000, 22500]);
        });

        it('should calculate crop costs correctly', () => {
            const costs = calculateEnterpriseCosts(mockCropEnterprise);
            // 50 ha * 200 = 10000 (min), 50 ha * 300 = 15000 (max)
            expect(costs).toEqual([10000, 15000]);
        });
    });

    // Tests for total calculations
    describe('calculateTotalRevenue', () => {
        it('should sum revenues from all enabled enterprises', () => {
            const totalRevenue = calculateTotalRevenue(mockPartnershipData, mockYearData);
            // Livestock [25000, 37500] + Crop [25000, 40000] + Sekelbos [30000, 50000]
            // Min: 25000 + 25000 + 30000 = 80000
            // Max: 37500 + 40000 + 50000 = 127500
            expect(totalRevenue).toEqual([80000, 127500]);
        });
    });

    describe('calculateTotalCosts', () => {
        it('should sum costs from all enabled enterprises plus base yearly costs', () => {
            const totalCosts = calculateTotalCosts(mockPartnershipData, mockYearData);
            // Livestock [15000, 22500] + Crop [10000, 15000] + Base [10000, 15000]
            // Min: 15000 + 10000 + 10000 = 35000
            // Max: 22500 + 15000 + 15000 = 52500
            expect(totalCosts).toEqual([35000, 52500]);
        });
    });
});
