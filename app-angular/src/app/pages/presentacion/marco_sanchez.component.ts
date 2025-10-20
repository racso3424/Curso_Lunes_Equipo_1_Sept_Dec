import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marco_sanchez.component.html',          
  styleUrls: ['./marco_sanchez.component.scss']
})
export class PresentacionComponent {
  titulo = 'Hola Mundo';
  mensaje = '';

  mostrarMensaje() {
    this.mensaje = '¡Bienvenido a mi página!';
  }
}
