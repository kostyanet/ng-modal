import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ModalCommandInterface, ModalOptionsInterface } from './modal.interface';

@Injectable()
export class ModalService {

  private showModal$ = new Subject<ModalCommandInterface>();

  close() {
    this.showModal$.next({ type: 'none' });
  }

  success(options: ModalOptionsInterface): Promise<any> {
    this.showModal$.next({
      type: 'success',
      options: options
    });

    return new Promise((resolve) => {
      options.handler = (arg: any) => resolve(arg);
    });
  }

  error(options: ModalOptionsInterface): void {
    this.showModal$.next({
      type: 'error',
      options: options
    });
  }

  warning(options: ModalOptionsInterface): Promise<any> {
    this.showModal$.next({
      type: 'warning',
      options: options
    });

    return new Promise((resolve) => {
      options.handler = (arg: any) => resolve(arg);
    });
  }

  spinner(): void {
    this.showModal$.next({ type: 'spinner' });
  }

  getCommand(): Observable<any> {
    return this.showModal$.asObservable();
  }

}
