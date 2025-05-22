import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-context',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  standalone: true,
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss'
})
export class ContextComponent {

}
