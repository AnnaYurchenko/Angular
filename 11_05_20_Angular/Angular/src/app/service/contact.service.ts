import { Injectable } from '@angular/core';
import {Contact} from '../model/contact';
import {Observable, of} from 'rxjs';
import {CONTACTS} from './contacts-mock';

// object of service is available for all application
@Injectable()
export class ContactService {

  constructor() {
  }

  add(contact: Contact): void {
    contact.id = CONTACTS.length + 1;
    CONTACTS.push(contact);
  }

  getAll(): Observable<Contact[]> {
    return of(CONTACTS);
  }

  edit(contact: Contact) {
    // ContactToEdit is reference variable (const). Like final in Java.
    const contactToEdit = CONTACTS.find(value => value.id === contact.id);
    Object.assign(contactToEdit, contact); // override the properties from one Object to another
  }

  cancel(contact: Contact) {
      const contactToCancel = CONTACTS.find(value => value.id === contact.id);
      Object.assign(contactToCancel, contact);
    }

}
