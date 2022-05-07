export interface IContact {
    id: string;
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    phone: string;
}

export interface ContactsState {
    list: Array<IContact>,
    isLoading: boolean;
    error: string;
}

export enum ContactsActionEnum {
    SET_CONTACTS = "SET_CONTACTS",
    SET_ERROR_CONTACTS = "SET_ERROR_CONTACTS",
    SET_IS_LOADING_CONTACTS = "SET_IS_LOADING_CONTACTS",
}

export interface SetContactsAction {
    type: ContactsActionEnum.SET_CONTACTS;
    payload: Array<IContact>;
}

export interface SetErrorContacts {
    type: ContactsActionEnum.SET_ERROR_CONTACTS;
    payload: string;
}

export interface SetIsLoadingContacts {
    type: ContactsActionEnum.SET_IS_LOADING_CONTACTS;
    payload: boolean;
}

export type ContactsAction =
    SetContactsAction |
    SetErrorContacts |
    SetIsLoadingContacts