import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ToasterService {

  private toasts: Toast[] = [];

  private toastSubject = new BehaviorSubject<Toast[]>([]);
  toast$ = this.toastSubject.asObservable();


  private show(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info') {
    const id = Date.now();
    const toast: Toast = { id, title, message, type };
    // this.toasts.push(toast)

    this.toasts = [...this.toasts, toast];
    this.toastSubject.next(this.toasts);

    setTimeout(() => this.remove(id), 3000);

    return id;
  }

  remove(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.toastSubject.next(this.toasts);
    console.log("remove called...")
  }

  success(title: string, message: string) {
    return this.show(title, message, 'success');
  }

  error(title: string, message: string) {
    return this.show(title, message, 'error');
  }


  warning(title: string, message: string) {
    return this.show(title, message, 'warning');
  }


}


export interface Toast {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}