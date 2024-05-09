import { Component } from '@angular/core';

@Component({
  selector: 'app-tipsinput',
  template: `
  <h2>Please enter the names</h2>
  <input [id]="namesId" type="text" value="">
  <h2>Please enter the hours worked (eg 1.5)</h2>
  <input [id]="hoursId" type="number" value="">
            `,
  styleUrl: './tipsinput.component.css'
})
export class TipsinputComponent {
  public namesId = "input_names";
  public hoursId = "input_hours";

}
