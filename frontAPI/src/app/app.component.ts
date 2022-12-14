import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aula-app';

  ngOnInit(): void{
    setTimeout(()=>{
      console.log("Evento timer");
    },5000)
    console.log("Iniciou")
  }


}
