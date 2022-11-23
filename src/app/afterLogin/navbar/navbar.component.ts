import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private utilidades:Utilidades, private route: Router){

  };

  ngOnInit(): void {
  }
  logout(){
  this.utilidades.logOut();
  }
  
  navToGreetings(){
      this.route.navigate(['/greetings'])
  }
}
