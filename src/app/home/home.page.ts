import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private router:Router){}
  input(){
    this.router.navigate(["./input"])
  }
  result(){
    this.router.navigate(["./result"])
  }


}
