var Rx = require('rx');
var Contacts = require('react-native-contacts');

function _execAddressBookMethodWithParamsErrorData(func) {
  return Rx.Observable.create(function(observer) {
    func(function(error, data) {
      if (error) {
        observer.onError(error);
      } else {
        observer.onNext(data);
        observer.onCompleted();
      }
    });

    return null;
  });
}

function _execAddressBookMethodWithParamError(contact, func) {
  return Rx.Observable.create(function(observer) {
    func(contact, function(error) {
      if (error) {
        observer.onError(error);
      } else {
        observer.onCompleted();
      }
    });

    return null;
  });
}

Contacts.rx_checkPermission = function() {
  return _execAddressBookMethodWithParamsErrorData(Contacts.checkPermission);
};

Contacts.rx_requestPermission = function() {
  return _execAddressBookMethodWithParamsErrorData(Contacts.requestPermission);
};

Contacts.rx_getAll = function() {
  return _execAddressBookMethodWithParamsErrorData(Contacts.getAll);
};

Contacts.rx_addContact = function(contact) {
  return _execAddressBookMethodWithParamError(contact, Contacts.addContact);
}

Contacts.rx_updateContact = function(contact) {
  return _execAddressBookMethodWithParamError(contact, Contacts.updateContact);
}

Contacts.rx_deleteContact = function(contact) {
  return _execAddressBookMethodWithParamError(contact, Contacts.deleteContact);
}

module.exports = Contacts;
