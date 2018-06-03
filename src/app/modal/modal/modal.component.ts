import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { DynamicComponent } from '../dynamic.component';
import { ErrorComponent } from '../error/error.component';
import { ModalCommandInterface } from '../modal.interface';
import { ModalService } from '../modal.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SuccessComponent } from '../success/success.component';
import { WarningComponent } from '../warning/warning.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @ViewChild('modal', { read: ViewContainerRef }) container;

  isVisible: boolean;

  private componentRef: ComponentRef<{}>;
  private mappings = {
    'error': ErrorComponent,
    'spinner': SpinnerComponent,
    'success': SuccessComponent,
    'warning': WarningComponent
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.modalService.getCommand().subscribe(this.execute);
  }

  private execute = (command: ModalCommandInterface): void => {
    if (command.type && command.type !== 'none') {
      this.renderModal(command);

    } else {
      this.close();
    }
  }

  private renderModal(command: ModalCommandInterface): void {
    const componentType = this.mappings[command.type];
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    // prevent spinner blinking
    if (this.componentRef && this.componentRef.componentType === SpinnerComponent && componentType === SpinnerComponent) {
      return;
    }

    this.container.clear();
    this.componentRef = this.container.createComponent(factory);

    const instance = <DynamicComponent>this.componentRef.instance;
    instance.context = Object.assign(command.options || {}, { close: this.close });

    this.isVisible = true;
    document.addEventListener('keydown', this.handleKeyBoardEvent);
  }

  private close = (): void => {
    this.isVisible = false;
    this.container.remove();

    document.removeEventListener('keydown', this.handleKeyBoardEvent);
  }

  private handleKeyBoardEvent = (e: KeyboardEvent): void => {
    if (e.keyCode === 27) { // escape
        this.close();
    }

    if (e.keyCode === 9) { // tab
      setTimeout(() => this.container.element.nativeElement.focus());
    }
  }
}
