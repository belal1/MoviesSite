import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { userData } from '../userData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./_navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(public _AuthService:AuthService) {

    _AuthService.userData.subscribe(data =>{
      if(data){
        this.isLogin == true;
      }
      else{
        this.isLogin == false;
      }
    })
   }

  ngOnInit(): void {
  }

}
