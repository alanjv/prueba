import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactos: Contacto[] = [
  {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+5049551-1234',
    mensaje: 'Estoy interesado en sus servicios.',
    terminos: true,
  },
  {
    nombre: 'María Gómez',
    email: 'maria.gomez@example.com',
    telefono: '+5049555-5678',
    mensaje: '¿Tienen atención los fines de semana?',
    terminos: true,
  },
  {
    nombre: 'Carlos López',
    email: 'carlos.lopez@example.com',
    telefono: '+5049555-8765',
    mensaje: 'Me gustaría agendar una cita.',
    terminos: false,
  },
  {
    nombre: 'Ana Ramírez',
    email: 'ana.ramirez@example.com',
    telefono: '+5049555-4321',
    mensaje: '¿Cuáles son sus precios?',
    terminos: true,
  },
  {
    nombre: 'Luis Torres',
    email: 'luis.torres@example.com',
    telefono: '+5049555-0000',
    mensaje: 'Quiero más información sobre su producto.',
    terminos: true,
  }
];

  constructor() { }

  obtenerContactos(): Contacto[]{
    return this.contactos;
  }

  agregarContacto(contacto: Contacto): void {
    this.contactos.push(contacto)
  }
}
