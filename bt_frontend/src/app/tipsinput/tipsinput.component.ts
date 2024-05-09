import { Component } from '@angular/core';

@Component({
  selector: 'app-tipsinput',
  template: `
  <h2>Please enter the names</h2>
  <input id="names" type="text" value="">
  <label for="names">Names</label>
  <h2>Please enter the hours worked (eg 1.5)</h2>
  <input id="hours" type="number" value="">
  <label for="hours">Hours</label>
            `,
  styleUrl: './tipsinput.component.css'
})
export class TipsinputComponent {

}
