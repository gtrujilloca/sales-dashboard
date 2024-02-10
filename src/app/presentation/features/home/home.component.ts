import { Component } from '@angular/core';
import { KpiComponent } from './components/kpi/kpi.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [KpiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
