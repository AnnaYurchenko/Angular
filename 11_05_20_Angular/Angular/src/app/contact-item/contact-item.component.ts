import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input()
  contact: Contact;

  @Output()
  // we create an Event that can send Contacts
  edit: EventEmitter<Contact> = new EventEmitter();

  @Output()
  delete: EventEmitter<Contact> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.edit.emit(this.contact);
  }

  onClickDelete() {
    this.delete.emit(this.contact);
  }
}
