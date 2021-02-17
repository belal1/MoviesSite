import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms' ;
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./_login.component.scss']
})
export class LoginComponent implements OnInit {
  err:string;
  constructor(  public _AuthService:AuthService , public _Router:Router ) { }
  loginForm:FormGroup = new FormGroup({
    "email":new FormControl( null , [Validators.required , Validators.email]),
    "password":new FormControl( null ,[Validators.required])
  })
  ngOnInit(): void {
  }
  submitForm(formData){
    if(formData.valid == true) {
      this._AuthService.login(formData.value).subscribe(data =>{
        if(data.message == 'success'){
          this._AuthService.saveData(data.user,data.token);
          this._Router.navigate(['/home']);
        }
        else{
          this.err = 'wrong userName or password';
        }
      })
    }
  };
}
