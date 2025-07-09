import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';
import { ToastrService } from 'ngx-toastr';

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
  private toast = inject(ToastrService)
  contactoForm: FormGroup;



  constructor(){
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['',  [Validators.minLength(13), Validators.pattern(/^\+504\d{4}-\d{4}$/)]], //Formato +5049619-1250
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

    this._contacto.agregarContacto(CONTACTO);
    this.toast.success('Contacto enviado con éxito!','Contacto enviado!');
    this.router.navigate(['/'])


  }
    
  }

}
