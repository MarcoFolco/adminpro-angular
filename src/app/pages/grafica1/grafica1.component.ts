import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  chartLabels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  chartData1: number[] = [900, 450, 100];

  chartLabels2: string[] = [
    'Download Sales 2',
    'In-Store Sales 2',
    'Mail-Order Sales 2',
  ];

  chartData2: number[] = [300, 450, 100];

  chartLabels3: string[] = [
    'Download Sales 3',
    'In-Store Sales 3',
    'Mail-Order Sales 3',
  ];

  chartData3: number[] = [400, 450, 100];

  chartLabels4: string[] = [
    'Download Sales 4',
    'In-Store Sales 4',
    'Mail-Order Sales 4',
  ];

  chartData4: number[] = [600, 450, 100];
}
