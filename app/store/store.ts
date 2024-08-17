// store/store.ts
import { create } from 'zustand';

interface StoreState {
    executeChatPanelFunction: (newSharedState: string) => void;  // Updated to accept an argument
    setExecuteChatPanelFunction: (fn: (newSharedState: string) => void) => void;
  }
  
  const useStore = create<StoreState>((set) => ({
    executeChatPanelFunction: (newSharedState: string) => {}, // Update to accept an argument
    setExecuteChatPanelFunction: (fn: (newSharedState: string) => void) => set({ executeChatPanelFunction: fn }),
  }));
  
  export default useStore;