
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  user:FormGroup; // This is for our ReactiveForm

  userdata:User;  // This is our model class

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
          email: new FormControl('', [Validators.required,Validators.email]),
          confirm: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit()
  {
    debugger;
    this.userdata=this.user.value; // **
    console.log(this.userdata);
    alert("Data Successfully Submitted...!");
  }

}

