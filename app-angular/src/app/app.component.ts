import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // ✅ CORRECTO
  styleUrls: ['./app.component.scss'], // ✅ CORRECTO
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class AppComponent { }
