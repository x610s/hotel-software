import { beneficio } from './../../services/Beneficio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/app/services/Plan';

@Component({
  selector: 'app-card-planes',
  templateUrl: './card-planes.component.html',
  styleUrls: ['./card-planes.component.css']
})
export class CardPlanesComponent implements OnInit {
  @Input() tipo: Boolean;
  @Input() Plan: Plan;
  @Input() numeroHabitaciones: number;
  @Input() hasFactura: Boolean;
  precioTotal: number = 0;
  tooltipContent: string;
  mostrarTodos: Boolean;


  constructor() {
    this.mostrarTodos = false;
  }

  ngOnInit(): void {

  }

  getPrecioToltal() {

    this.precioTotal = this.numeroHabitaciones + this.Plan.precioBase;

    if (this.hasFactura) {
      this.precioTotal = this.precioTotal + 25;
    }
    if (this.tipo) {
      this.precioTotal = (this.precioTotal) * 0.90;
      return this.precioTotal.toFixed(1);
    } else {
      return this.precioTotal.toFixed(1);
    }

  }

  ngOnChanges(): void {

  }

  getCantidadBenefifios() {
    return this.Plan.beneficios.length;
  }
  allBeneficios() {
    this.mostrarTodos = !this.mostrarTodos;
  }


}
