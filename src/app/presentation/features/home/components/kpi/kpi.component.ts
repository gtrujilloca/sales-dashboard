import { IKpi } from '@/app/core/models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpi',
  standalone: true,
  imports: [],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss'
})
export class KpiComponent {
  @Input() kpi: IKpi | null;
  constructor() {
    this.kpi = null;
  }

  ngOnInit(): void {}
}
