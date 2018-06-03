import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent extends DynamicComponent {

  close() {
    const c = this.context;
    const returns = c.buttons && c.buttons[0] && c.buttons[0].returns || this.defaultButton.returns;

    c.handler(returns);
    c.close();
  }

}
