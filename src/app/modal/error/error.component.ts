import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent extends DynamicComponent {

  close() {
    this.context.close();
  }

}
