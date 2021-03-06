// TYPES
// @NOTE: [EXAMPLE] is the name of your redux module
export enum TYPE {
  INCREMENT_COUNT = '[EXAMPLE]-INCREMENT',
  SET_COUNT = '[EXAMPLE]-SET',
  FETCH_USERS = '[EXAMPLE]-FETCH_USERS',
  FETCH_USERS_SUCCESS = '[EXAMPLE]-FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = '[EXAMPLE]-FETCH_USERS_FAILURE',
}

export interface IIncrementCountAction {
  type: typeof TYPE.INCREMENT_COUNT;
  payload: null;
}

export interface ISetCountAction {
  type: typeof TYPE.SET_COUNT;
  payload: {
    count: number;
  };
}

// This could be moved to a types file?
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
  website: string;
}

export interface IFetchUsersAction {
  type: typeof TYPE.FETCH_USERS;
  payload: null;
}

export interface IFetchUsersActionSuccess {
  type: typeof TYPE.FETCH_USERS_SUCCESS;
  payload: {
    users: IUser[];
  };
}

export interface IFetchUsersActionFailure {
  type: typeof TYPE.FETCH_USERS_FAILURE;
  payload: {
    error: string;
  };
}

export type ExampleActionTypes =
  | IIncrementCountAction
  | ISetCountAction
  | IFetchUsersAction
  | IFetchUsersActionSuccess
  | IFetchUsersActionFailure;

// ACTIONS
export function actionIncrementCount(): ExampleActionTypes {
  return {
    type: TYPE.INCREMENT_COUNT,
    payload: null,
  };
}

export function actionSetCount(count: number): ExampleActionTypes {
  return {
    type: TYPE.SET_COUNT,
    payload: {
      count,
    },
  };
}

export function actionGetUsers(): ExampleActionTypes {
  return {
    type: TYPE.FETCH_USERS,
    payload: null,
  };
}
