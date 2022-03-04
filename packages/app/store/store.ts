import { useLayoutEffect } from "react";
import create from "zustand";
import createContext from "zustand/context";

/* @type { import('zustand/index').UseStore<typeof initialState>} */
let store: any;

export interface Post {
  _id: string;
  title: string;
  domainText: string;
  url: string;
  postedBy: string;
  created_at: string;
  timestamp: number;
  upvotes: number;
}
export type PostList = Post[];
export type Sort = "newest" | "trending" | "controversial";
export type Profile = {
  _id: string;
  walletAddress: string;
  joinDate: number;
  lastSeenDate: number;
  upvotesReceived: number;
  postsUpvoted: number;
};
export interface Upvote {
  _id: string;
  upvoter: string;
  timestamp: number;
  created_at: string;
  link: string;
}
export interface SiweState {
  address?: string;
  error?: Error;
  loading?: boolean;
};
export interface InitialState {
  sort: Sort;
  currentProfile: object;
  siwe: SiweState;
}
const initialState: InitialState = {
  sort: "newest",
  currentProfile: {},
  siwe: {}
};

export default interface AppState {
  sort: Sort;
  upvotes: Upvote[];
  currentProfile: Profile;
  siwe: SiweState;
  updateSort: (sort: Sort) => void;
  loadProfileIntoStore: (profile: Profile) => void;
  incrementProfilePostsUpvoted: () => void;
  setSiweAddress: (address: string) => void;
  setSiweLoading: (status: boolean | undefined) => void;
  setSiweError: (error: Error | undefined) => void;
  clearSiweSession: () => void;
}
const zustandContext = createContext<AppState>();
export const Provider = zustandContext.Provider;
export const useStore = () => zustandContext.useStore();
export const initializeStore = (preloadedState = {}) => {
  return create((set: any) => ({
    ...initialState,
    ...preloadedState,
    updateSort: (sort: Sort) => set({ sort }),
    loadProfileIntoStore: (profile: Profile) => {
      set({ currentProfile: profile });
    },
    incrementProfilePostsUpvoted: () => {
      set((state: AppState) => {
        const profile = state.currentProfile;
        if (profile) {
          profile.postsUpvoted += 1;
        }

        return { currentProfile: profile };
      });
    },
    setSiweAddress: (address: string) => set((state: AppState) => ({ siwe: { ...state.siwe, address } as SiweState})),
    setSiweError: (error: Error | undefined) => set((state: AppState) => ({ siwe: { ...state.siwe, error } as SiweState})),
    setSiweLoading: (loading: boolean | undefined) => set((state: AppState) => ({ siwe: { ...state.siwe, loading } as SiweState})),
    clearSiweSession: () => set((state: AppState) => ({ siwe: {} })),
  }));
};

export function useCreateStore(initialState: { sort: string }) {
  // For SSR & SSG, always use a new store.
  if (typeof window === "undefined") {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({
        ...store.getState(),
        ...initialState,
      });
    }
  }, [initialState]);

  return () => store;
}
