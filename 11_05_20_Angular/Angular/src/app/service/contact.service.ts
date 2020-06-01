import { Injectable } from '@angular/core';
import {Contact} from '../model/contact';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

// object of service is available for all application
@Injectable()
export class ContactService {
  private host = 'http://localhost:8090/';

  contacts: Observable<Contact[]>;

  constructor(private httpClient: HttpClient) {
  }

  add(contact: Contact): void {
    this.httpClient.post(`${this.host}contact`, contact)
      .subscribe(value => this.reloadContacts());
  }

  getAll(): Observable<Contact[]> {
    if (!this.contacts) {
      this.reloadContacts();
    }
    return this.contacts;
  }

  private reloadContacts() {
    this.contacts = this.httpClient.get<Contact[]>(`${this.host}contact`);
  }

  edit(contact: Contact) {
    // ContactToEdit is reference variable (const). Like final in Java.
   // const contactToEdit = CONTACTS.find(value => value.id === contact.id);
   // Object.assign(contactToEdit, contact); // override the properties from one Object to another
  }

  remove(contact: Contact) {
  // const index = CONTACTS.findIndex(value => value.id === contact.id);
  // CONTACTS.splice(index, 1); // delete 1 element from an array
  }
}
