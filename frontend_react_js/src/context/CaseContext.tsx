import React, { createContext, useContext, useReducer, useMemo } from 'react';

type Contact = {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  primary: boolean;
};

type ActionItem = {
  id: string;
  text: string;
  done: boolean;
};

type CaseState = {
  info: {
    deceasedName: string;
    dob: string;
    dod: string;
    serviceType: string;
    servicePreference: string;
    additional: string;
  };
  service: {
    date: string;
    time: string;
    location: string;
    chapel: string;
    instructions: string;
  };
  contacts: Contact[];
  obituaryNotes: string;
  draftObituary: string;
  actionItems: ActionItem[];
  followUpEmail: {
    subject: string;
    body: string;
  };
  transcript: string;
};

type CaseAction =
  | { type: 'SET_INFO'; payload: Partial<CaseState['info']> }
  | { type: 'SET_SERVICE'; payload: Partial<CaseState['service']> }
  | { type: 'SET_CONTACTS'; payload: Contact[] }
  | { type: 'ADD_CONTACT'; payload: Contact }
  | { type: 'REMOVE_CONTACT'; payload: string }
  | { type: 'UPDATE_CONTACT'; payload: Contact }
  | { type: 'SET_OBIT_NOTES'; payload: string }
  | { type: 'SET_DRAFT_OBIT'; payload: string }
  | { type: 'SET_ACTION_ITEMS'; payload: ActionItem[] }
  | { type: 'ADD_ACTION_ITEM'; payload: ActionItem }
  | { type: 'UPDATE_ACTION_ITEM'; payload: ActionItem }
  | { type: 'REMOVE_ACTION_ITEM'; payload: string }
  | { type: 'SET_EMAIL'; payload: Partial<CaseState['followUpEmail']> }
  | { type: 'SET_TRANSCRIPT'; payload: string };

const initialState: CaseState = {
  info: {
    deceasedName: '',
    dob: '',
    dod: '',
    serviceType: '',
    servicePreference: '',
    additional: '',
  },
  service: {
    date: '',
    time: '',
    location: '',
    chapel: '',
    instructions: '',
  },
  contacts: [],
  obituaryNotes:
    'Initial notes from transcript go here. These are editable and derived from a mock processing pipeline.',
  draftObituary:
    'This is the initial draft of the obituary.\n\nYou can edit and format this content.',
  actionItems: [
    { id: 'a1', text: 'Confirm service date with family', done: false },
    { id: 'a2', text: 'Collect photos for memorial', done: false },
  ],
  followUpEmail: {
    subject: 'Follow-up: Service planning and next steps',
    body:
      'Dear Family,\n\nThank you for meeting with us. Here are the next steps we discussed...\n\nBest regards,\nFuneral Home',
  },
  transcript:
    '[00:00] Agent: Thank you for joining.\n[00:15] Family: We appreciate the support...\n[01:30] Agent: Let’s confirm details about the service.\n\n--- Section Break ---\n\n[05:45] Discussion of obituary preferences...',
};

function reducer(state: CaseState, action: CaseAction): CaseState {
  switch (action.type) {
    case 'SET_INFO':
      return { ...state, info: { ...state.info, ...action.payload } };
    case 'SET_SERVICE':
      return { ...state, service: { ...state.service, ...action.payload } };
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'REMOVE_CONTACT':
      return { ...state, contacts: state.contacts.filter(c => c.id !== action.payload) };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(c => (c.id === action.payload.id ? action.payload : c)),
      };
    case 'SET_OBIT_NOTES':
      return { ...state, obituaryNotes: action.payload };
    case 'SET_DRAFT_OBIT':
      return { ...state, draftObituary: action.payload };
    case 'SET_ACTION_ITEMS':
      return { ...state, actionItems: action.payload };
    case 'ADD_ACTION_ITEM':
      return { ...state, actionItems: [...state.actionItems, action.payload] };
    case 'UPDATE_ACTION_ITEM':
      return {
        ...state,
        actionItems: state.actionItems.map(i => (i.id === action.payload.id ? action.payload : i)),
      };
    case 'REMOVE_ACTION_ITEM':
      return { ...state, actionItems: state.actionItems.filter(i => i.id !== action.payload) };
    case 'SET_EMAIL':
      return { ...state, followUpEmail: { ...state.followUpEmail, ...action.payload } };
    case 'SET_TRANSCRIPT':
      return { ...state, transcript: action.payload };
    default:
      return state;
  }
}

const CaseContext = createContext<{
  state: CaseState;
  dispatch: React.Dispatch<CaseAction>;
} | null>(null);

// PUBLIC_INTERFACE
export function CaseProvider({ children }: { children: React.ReactNode }) {
  /** Provides case-wide state for all mock screens, local-only. */
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <CaseContext.Provider value={value}>{children}</CaseContext.Provider>;
}

// PUBLIC_INTERFACE
export function useCase() {
  /** Accessor hook for case state and dispatch. */
  const ctx = useContext(CaseContext);
  if (!ctx) throw new Error('useCase must be used within CaseProvider');
  return ctx;
}
