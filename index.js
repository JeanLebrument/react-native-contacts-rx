import { Observable } from 'rxjs/Rx'
import Contacts from 'react-native-contacts'

function _execAddressBookMethodWithParamsErrorData(func) {
    return Observable.create(function (observer) {
        func(function (error, data) {
            if (error) {
                observer.error(error)
            } else {
                observer.next(data)
                observer.complete()
            }
        })

        return null
    })
}

function _execAddressBookMethodWithParamError(contact, func) {
    return Observable.create(function (observer) {
        func(contact, function (error) {
            if (error) {
                observer.error(error)
            } else {
                observer.complete()
            }
        })

        return null
    })
}

Contacts.rx_checkPermission = function () {
    return _execAddressBookMethodWithParamsErrorData(Contacts.checkPermission)
}

Contacts.rx_requestPermission = function () {
    return _execAddressBookMethodWithParamsErrorData(Contacts.requestPermission)
}

Contacts.rx_getAll = function () {
    return _execAddressBookMethodWithParamsErrorData(Contacts.getAll)
}

Contacts.rx_addContact = function (contact) {
    return _execAddressBookMethodWithParamError(contact, Contacts.addContact)
}

Contacts.rx_updateContact = function (contact) {
    return _execAddressBookMethodWithParamError(contact, Contacts.updateContact)
}

Contacts.rx_deleteContact = function (contact) {
    return _execAddressBookMethodWithParamError(contact, Contacts.deleteContact)
}

export default Contacts
