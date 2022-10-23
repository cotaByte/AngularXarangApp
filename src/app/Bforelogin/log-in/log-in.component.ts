import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logIn(data: any) {
    console.log(
      'El tio intentaba logearse con los siguientes datos. TU QUE OPINES?'
    );
    console.table(data);

    return alert('intentas logearte?? POS NO!! DE MOMENTO NO !');
  }
}
