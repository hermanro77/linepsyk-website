import { applyMiddleware, Dispatch } from 'redux';

import { createStore } from 'react-hooks-global-state';

type State = {
  page: number,
  showModal: boolean;
};

type Action =
  | { type: 'setPage'; page: number }
  | { type: 'closeModalAction'; }
  | { type: 'showModalAction'; };

const defaultState: State = {
  page: 0,
  showModal: false,
};

const LOCAL_STORAGE_KEY = 'my_local_storage_key';
const parseState = (str: string | null): State | null => {
  try {
    const state = JSON.parse(str || '');
    if (typeof state.page !== 'number') throw new Error();
    if (typeof state.showModal !== 'boolean') throw new Error();
    return state as State;
  } catch (e) {
    return null;
  }
};
const stateFromStorage = parseState(localStorage.getItem(LOCAL_STORAGE_KEY));
const initialState: State = stateFromStorage || defaultState;

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'setPage': return {
      ...state,
      page: action.page,
    };
    case 'closeModalAction': return {
      ...state,
      showModal: false,
    };
    case 'showModalAction': return {
      ...state,
      showModal: true,
    };
    default: return state;
  }
};

const saveStateToStorage = (
  { getState }: { getState: () => State },
) => (next: Dispatch<Action>) => (action: Action) => {
  const returnValue = next(action);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getState()));
  return returnValue;
};

export const { dispatch, useGlobalState } = createStore(
  reducer,
  initialState,
  applyMiddleware(saveStateToStorage),
);