import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent {
  titulo = 'Hola Mundo';
  mensaje = '';

  mostrarMensaje() {
    this.mensaje = '¡Bienvenido a mi página!';
  }
}
