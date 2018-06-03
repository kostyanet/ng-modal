import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent extends DynamicComponent {}
