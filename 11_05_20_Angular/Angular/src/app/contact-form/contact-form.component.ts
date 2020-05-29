import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../model/contact';
import {ContactService} from '../service/contact.service';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Input()
  set contactToEdit(value: Contact) {
    this.contact = value;
    this.isAddingState = false;
  }

  @Input()
  set contactToCancel(value: Contact) {
    this.contact = value;
    this.isAddingState = false;
  }

  // variable that responsible for communication with Contact form
  contact: Contact;

  isAddingState: boolean;
  private contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.clearForm();
  }

  onClickAdd() {
    console.log(this.contact);
    this.contactService.add(this.contact);
    this.clearForm();
  }

  // возврат к начальному состоянию
  clearForm() {
    this.contact = new Contact();
    this.isAddingState = true;
  }

  // обрабатывает событие нажатия на кнопочку
  onClickEdit() {
    this.contactService.edit(this.contact);
    this.clearForm();
  }

  // обрабатывает событие нажатия на кнопочку
  onClickCancel() {
      this.contactService.cancel(this.contact);
      this.clearForm();
    }
}
