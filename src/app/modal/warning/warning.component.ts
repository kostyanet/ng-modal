import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html'
})
export class WarningComponent extends DynamicComponent {

  close(returns: any) {
    this.context.handler(returns);
    this.context.close();
  }

}
