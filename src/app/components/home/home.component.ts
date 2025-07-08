import { Component } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  contactos: Contacto[] = [
  {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '555-1234',
    mensaje: 'Estoy interesado en sus servicios.',
    terminos: true,
  },
  {
    nombre: 'María Gómez',
    email: 'maria.gomez@example.com',
    telefono: '555-5678',
    mensaje: '¿Tienen atención los fines de semana?',
    terminos: true,
  },
  {
    nombre: 'Carlos López',
    email: 'carlos.lopez@example.com',
    telefono: '555-8765',
    mensaje: 'Me gustaría agendar una cita.',
    terminos: false,
  },
  {
    nombre: 'Ana Ramírez',
    email: 'ana.ramirez@example.com',
    telefono: '555-4321',
    mensaje: '¿Cuáles son sus precios?',
    terminos: true,
  },
  {
    nombre: 'Luis Torres',
    email: 'luis.torres@example.com',
    telefono: '555-0000',
    mensaje: 'Quiero más información sobre su producto.',
    terminos: true,
  }
];

}
