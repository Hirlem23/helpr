import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/model/tecnico';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit, AfterViewInit {

    ELEMENT_DATA: Tecnico[] = [
      {
        nome: "Hirlem Lima",
        cpf: "123456789",
        email: "hirlem@mail.com",
        perfis: ["CLIENTE", "TECNICO"],
        dataCriacao: "18/08/2022"
      },
      {
        nome: "Adriana Neres",
        cpf: "912345678",
        email: "adriana@mail.com",
        perfis: ["CLIENTE", "TECNICO"],
        dataCriacao: "12/05/2022"
      },
    ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'update', 'delete'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }  

}

