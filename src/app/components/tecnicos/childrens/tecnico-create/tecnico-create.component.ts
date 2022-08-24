import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/model/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.scss']
})
export class TecnicoCreateComponent implements OnInit {

  public tecnico: Tecnico = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: []
  }

  private perfis: number[] = [];

  private toastr: ToastrService;
  private service: TecnicoService;
  private router: Router;

  constructor(service: TecnicoService, toastr: ToastrService, router: Router) {
    this.service = service;
    this.toastr = toastr;
    this.router = router;
      
   }

  ngOnInit(): void {
  }

  addPerfil(perfil: number): void {
    for(let i = 0; i < this.perfis.length; i++) {
      if(this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.tecnico.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.tecnico.perfis = this.perfis;
  }

  create(form: NgForm) {
    if(form.valid) {
        this.service.insert(this.tecnico).subscribe({
          next: response => {
            this.toastr.success("Técnico cadastrado com sucesso!", "Sucesso");
            this.router.navigate(["/tecnicos"]);
          }
        });
    }
    else {
        this.toastr.error("Dados inválidos!", "Erro");
    }
  }

}
