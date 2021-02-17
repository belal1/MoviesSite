import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms' ;
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./_register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  err:string;
  constructor( public _AuthService:AuthService , public _Router:Router) { }
  registerForm:FormGroup = new FormGroup({
    "first_name": new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    "last_name":  new FormControl ( null , [Validators.required , Validators.minLength(3), Validators.maxLength(8)]),
    "age":  new FormControl ( null , [Validators.required]),
    "email":new FormControl( null , [Validators.required , Validators.email]),
    "password":new FormControl( null ,[Validators.required])
  })

  ngOnInit(): void {
  }
  submitForm(formData){
    if(formData.valid == true) {
      this._AuthService.signUp(formData.value).subscribe(data=>{
       if(data.message == 'success'){
         this._Router.navigate(['/login']);
       }
       else{
        this.err = 'the email is aleardy registerd' ;
       }
      })
    }
  };

}
