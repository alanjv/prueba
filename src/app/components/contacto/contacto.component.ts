import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private fb = inject(FormBuilder)
  private _contacto = inject(ContactoService)
  private router = inject(Router)
  contactoForm: FormGroup;



  constructor(){
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['',  [Validators.minLength(13)]],
      mensaje: ['', [Validators.required, Validators.minLength(50)]],
      terminos: ['', [Validators.required]],
    })
  }

  enviarContacto(){
    if (this.contactoForm.invalid) {
    this.contactoForm.markAllAsTouched();
    return;
  } else{
    const CONTACTO: Contacto = {
      nombre: this.contactoForm.get('nombre')?.value,
      email: this.contactoForm.get('email')?.value,
      telefono: this.contactoForm.get('telefono')?.value,
      mensaje: this.contactoForm.get('mensaje')?.value,
      terminos: this.contactoForm.get('terminos')?.value,
    }

    this.router.navigate([''])
    console.log(CONTACTO)


  }
    
  }

}
