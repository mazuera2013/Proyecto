import { Component, OnInit } from '@angular/core';
declare var operaciones:any;
@Component({
  selector: 'app-gestionar-domicilio',
  templateUrl: './gestionar-domicilio.component.html',
  styleUrls: ['./gestionar-domicilio.component.css']
})
export class GestionarDomicilioComponent implements OnInit {
  titulo1= "Restaurante IZAKAYA";
  titulo2 = "Bienvenidos";
  total="";

  constructor() { }

  ngOnInit(): void {
  }

  Onclick(){
    
    this.total = operaciones();

  }

}
