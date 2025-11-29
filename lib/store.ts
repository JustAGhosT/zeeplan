import { create } from 'zustand';
import { PartnershipData, defaultPartnershipData, Enterprise } from './partnershipData';
import { devtools } from 'zustand/middleware';

// Define the state structure for the store
interface AppState {
  data: PartnershipData;
  resetData: () => void;
  updateGlobal: (field: keyof PartnershipData, value: any) => void;
  updateEnterprise: (enterpriseId: string, updatedEnterprise: Partial<Enterprise>) => void;
  toggleEnterprise: (enterpriseId: string) => void;
}

// Create the Zustand store
export const useStore = create<AppState>()(
  devtools(
    (set) => ({
      // Initial state
      data: defaultPartnershipData,

      // Action to reset the data to its default state
      resetData: () => set({ data: defaultPartnershipData }),

      // Action to update a global-level field in the data object
      updateGlobal: (field, value) =>
        set((state) => ({
          data: { ...state.data, [field]: value },
        })),

      // Action to update a specific enterprise
      updateEnterprise: (enterpriseId, updatedEnterprise) =>
        set((state) => ({
          data: {
            ...state.data,
            enterprises: state.data.enterprises.map((e) =>
              e.id === enterpriseId ? { ...e, ...updatedEnterprise } : e
            ),
          },
        })),

      // Action to toggle an enterprise's enabled status
      toggleEnterprise: (enterpriseId: string) =>
        set((state) => ({
          data: {
            ...state.data,
            enterprises: state.data.enterprises.map((e) =>
              e.id === enterpriseId ? { ...e, enabled: !e.enabled } : e
            ),
          },
        })),
    }),
    { name: 'ZeeplanStore' }
  )
);
