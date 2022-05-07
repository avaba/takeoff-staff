import {ContactsAction, ContactsActionEnum, ContactsState} from "../../types/contactList";


const initialState: ContactsState = {
    list: [],
    isLoading: false,
    error: '',
}

export const contactsReducer = (state = initialState, action: ContactsAction): ContactsState => {
    switch (action.type) {
        case ContactsActionEnum.SET_CONTACTS:
            return {...state, list: action.payload, error: '', isLoading: false}
        case ContactsActionEnum.SET_ERROR_CONTACTS:
            return {...state, list: {...initialState.list}, error: action.payload, isLoading: false}
        case ContactsActionEnum.SET_IS_LOADING_CONTACTS:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}