import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './model-driven-form.component.html',
  styleUrl: './model-driven-form.component.css'
})
export class ModelDrivenFormComponent 
{
  myform=new FormGroup({
    userName:new FormControl("Tushar",Validators.required),
    userAge:new FormControl(21,[Validators.required,Validators.min(0),Validators.max(100)]),
    userPass:new FormControl("Tushar123",[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
  })

  get userName():any{
    return this.myform.get('userName');
  }
  get age():any{
    return this.myform.get('userAge');  
  }
  get password():any{
    return this.myform.get('userPass');
  }

  handleSubmit(){
    console.log(this.myform);
  }
}
