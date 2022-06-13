import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  users: any[] = [];
  submitted: boolean = false;

  formUser: FormGroup = this.fb.group( {
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    mail: ['', [Validators.required, Validators.email]],
    entreprise: ['', [Validators.required, Validators.minLength(2)]],
    telephone: ['', [Validators.required, Validators.minLength(10)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { };

  get form() { return this.formUser.controls; }

  submit(){
    this.submitted = true;
    if(this.formUser.invalid){
      return false;
    }else{
      this.addUser();
      return true;
    }
  }

  addUser(){
    this.users.push(this.formUser.value)
    this.formUser.reset();
    this.submitted = false
  }

  deleteCard(index: number){
    this.users.splice(index, 1);
  }
}
