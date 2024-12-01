import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/project.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-emprendimientos',
  templateUrl: './emprendimientos.component.html',
  styleUrls: ['./emprendimientos.component.css']
})
export class EmprendimientosComponent implements OnInit {

  emprendimientosList: IProject[] = [] ;


  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAllEmprendimientos().subscribe((data: IProject[]) => {
      this.emprendimientosList = data;
    })
  }
}
