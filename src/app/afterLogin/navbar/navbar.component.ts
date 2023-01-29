import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  constructor(private utilidades:Utilidades, private route: Router){

  };

  ngOnInit(): void {
    this.utilidades.compruebaToken().then(res=>{
      this.token= res;
    });
  }
  logout(){
  this.utilidades.logOut();
  }
  
  navToGreetings(){
      this.route.navigate(['/greetings'])
  }
}
