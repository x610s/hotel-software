import { PlanesServiceService } from './../../services/planes-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planes: any[] = [];
  numeroHabitaciones:number;
  tipoPago:Boolean;
  hasFactura:Boolean;

  constructor(private _service: PlanesServiceService) {

    this.numeroHabitaciones=1;
    this.tipoPago = true;
    this.hasFactura=true;

    this._service.getClientes().subscribe((data: any) => {
      this.planes = data;
      })
  }

  ngOnInit(): void {

  }
  ngOnChanges(): void {


  }










}
