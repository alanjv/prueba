import { Component, inject } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _contacto = inject(ContactoService)
  contactos: Contacto[] = []
  
  constructor(){
    this.contactos = this._contacto.obtenerContactos();
  }

}
