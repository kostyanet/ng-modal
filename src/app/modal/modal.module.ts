import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error/error.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    ErrorComponent,
    ModalComponent,
    SpinnerComponent,
    SuccessComponent,
    WarningComponent,
  ],
  entryComponents: [
    ErrorComponent,
    SpinnerComponent,
    SuccessComponent,
    WarningComponent
  ],
  exports: [ ModalComponent ],
  providers: [ ModalService ]
})
export class ModalModule { }
