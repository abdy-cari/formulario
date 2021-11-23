import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{

  constructor() { }
  formulario = new FormGroup({
    nombre: new FormControl(["", this.validateNombre]),
    descripcion: new FormControl("",Validators.required)
  });

  private validateNombre(control: AbstractControl){
    var nombre = control.value;
    var error = null;
    if (!nombre.includes("J")){
      error = "El apellido debe incluir J";
    }
    return error;
  }
  ngOnInit(): void {
  }

}
