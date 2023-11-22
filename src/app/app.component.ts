import { Component, Input } from '@angular/core';
import { ParentUser } from './parent-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LukaTarkhnishvili';
  userForm!: FormGroup;

  @Input()  users = [
    { Firstname: 'Luka', Lastname: 'asd', age: 25, PhoneNumber:"1234567890", Email:"asd@gmail.com" , DateOFBirth:"'1910-01-11'"},
    { firstname: 'Nika', lastname: 'Smith', age: 30, PhoneNumber:"1234567890", Email:"asd@gmail.com", DateOFBirth:"'1910-01-11'"},
    { firstname: 'Giorgi', lastname: 'Johnson', age: 28 , PhoneNumber:"1234567890", Email:"asd@gmail.com", DateOFBirth:"'1910-01-11'"},
    { firstname: 'john', lastname: 'Williams', age: 22 , PhoneNumber:"1234567890", Email:"asd@gmail.com", DateOFBirth:"'1910-01-11'"},
    { firstname: 'avti', lastname: 'Brown', age: 35, PhoneNumber:"1234567890", Email:"asd@gmail.com", DateOFBirth:"'1910-01-11'" }
  ];
  usersArray: ParentUser[] = [
    {
      Id: 1,
      Firstname: 'zxc',
      Lastname: 'sda',
      DateOfBirth: '1990-01-01',
      PhoneNumber: '1234567890',
      Email: 'john@example.com'
    },
  ];
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      Id: [null],
      Firstname: ['', [Validators.required, Validators.minLength(3)]],
      Lastname: ['', [Validators.required, Validators.minLength(3)]],
      DateOfBirth: ['', Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      Email: ['', [Validators.required, Validators.minLength(8), Validators.email]]
    });
  }
  
  addUser() {
    if (this.userForm.valid) {
      // this.users.push(this.userForm.value);
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
    //   @Input() users1: ParentUser[] = [
      //     {
        //     Id: 1,
//     Firstname: 'John',
//     Lastname: 'Doe',
//     DateOfBirth: '1990-01-01',
//     PhoneNumber: '1234567890',
//     Email: '@example.com'
//   },
// ];
}

}