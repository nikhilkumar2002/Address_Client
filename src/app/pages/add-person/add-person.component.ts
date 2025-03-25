import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  person = {
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phoneNumber: '' // Ensure this is a string
  };
  cities = ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'];
  states = ['Maharashtra', 'Delhi', 'Karnataka', 'West Bengal'];

  constructor(private service: AddressBookService) {}

  addPerson(form: NgForm) {
    const personData = { ...this.person, userId: 1 };
    this.service.addPerson(personData).subscribe(() => {
      alert('Person added successfully!');
      location.reload();
      this.resetForm(form);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    }

    this.person = {
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phoneNumber: '',
    };
  }
}
