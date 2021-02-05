import { beneficio } from './Beneficio';

export class Plan{
    id:number;
    nombrePlan:String;
    precioBase: number;
    beneficios:beneficio[];
}
