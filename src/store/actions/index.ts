import * as AuthActionCreators from "./login"
import * as ContactsActionCreators from "./contacts"

export default {
    ...AuthActionCreators,
    ...ContactsActionCreators
}