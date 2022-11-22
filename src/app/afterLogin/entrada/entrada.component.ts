import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor(private utilidades: Utilidades, private route:Router) { }

  ngOnInit(): void {
     this.utilidades.compruebaToken();
    }
  }


