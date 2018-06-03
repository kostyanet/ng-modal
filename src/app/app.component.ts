import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isInfoShown: boolean;
  returnValue: any;

  private message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi autem error esse, fuga fugit hic numquam perferendis perspiciatis porro quaerat quasi quibusdam quisquam temporibus vel voluptates? Nihil, unde?';
  private timer: number;

  constructor(
    private modalService: ModalService
  ) {}

  spinner(): void {
    this.clearInfo();
    this.modalService.spinner();
  }

  error(): void {
    this.clearInfo();

    this.modalService.error({
      title: 'Error!',
      message: this.message
    });
  }

  success(): void {
    this.clearInfo();

    this.modalService.success({
      title: 'Success!',
      message: this.message
    })
      .then(this.showInfo);
  }

  warning(): void {
    this.clearInfo();

    this.modalService.warning({
      title: 'Warning!',
      message: this.message
    })
      .then(this.showInfo);
  }

  private clearInfo(): void {
    this.isInfoShown = false;
    window.clearTimeout(this.timer);
  }

  private showInfo = (returnValue: any): void => {
    this.isInfoShown = true;
    this.returnValue = returnValue;

    this.timer = window.setTimeout(() => {
      this.isInfoShown = false;
      this.returnValue = null;
    }, 3000);
  }

}
