import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {
  public aulas: any = [{
      materia: 'Aula JS',
      data: '10/11/2022 a 20/11/2022'
  },
  {
    materia: 'Aula Angular',
    data: '20/11/2022 a 02/12/2022'
  },
  {
    materia: 'C#',
    data: '05/02/2022 a 12/12/2022'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
