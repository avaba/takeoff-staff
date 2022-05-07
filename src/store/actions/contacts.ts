import {
    SetErrorContacts,
    SetIsLoadingContacts,
    SetContactsAction,
    ContactsAction,
    IContact,
    ContactsActionEnum,
} from "../../types/contactList";
import {Dispatch} from "react";
import network from "../../api/network";
import isErrnoException from "../../utils/isErrnoException";

export const setContacts = (payload: Array<IContact>): SetContactsAction => ({
    type: ContactsActionEnum.SET_CONTACTS,
    payload
})

export const setIsLoadingContacts = (payload: boolean): SetIsLoadingContacts => ({
    type: ContactsActionEnum.SET_IS_LOADING_CONTACTS,
    payload
})

export const setErrorContacts = (payload: string): SetErrorContacts => ({
    type: ContactsActionEnum.SET_ERROR_CONTACTS,
    payload
})

export const fetchContacts = () => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            dispatch(setIsLoadingContacts(true));
            const response = await network.get(`/contacts`)
            const data = response.data
            if (data.length) {
                dispatch(setContacts(data))
            }
            dispatch(setIsLoadingContacts(false))
        } catch (e) {
            dispatch(setErrorContacts('Произошла ошибка'))
        }
    }
}