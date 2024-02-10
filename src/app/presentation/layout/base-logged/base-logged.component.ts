import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-base-logged',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './base-logged.component.html',
  styleUrl: './base-logged.component.scss'
})
export class BaseLoggedComponent {

}
