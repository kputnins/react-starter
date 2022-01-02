import { useStore } from 'react-redux';
import type { RootState, AppStore } from '../store';

const useAppStore = (): AppStore => useStore<RootState>();

export default useAppStore;
