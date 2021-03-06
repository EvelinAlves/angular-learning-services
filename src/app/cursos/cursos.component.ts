import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],

})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursosServiceOne = new CursosService();
    // this.cursosService = this._cursosService;
  }
  
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouCursoCriado.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
