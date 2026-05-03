import { Injectable, signal } from '@angular/core';



export interface Toast {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {

  //1.Private writable signal;
  private _toasts = signal<Toast[]>([]);

  //2.Public read-only signal;
  readonly toasts = this._toasts.asReadonly();

  success(title: string, message: string) {
    return this.show(title, message, 'success');
  }

  error(title: string, message: string) {
    return this.show(title, message, 'error');
  }


  warning(title: string, message: string) {
    return this.show(title, message, 'warning');
  }

  private show(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info') {
    const id = Date.now();
    const toast: Toast = { id, title, message, type };
    // this.toasts.push(toast)

    this._toasts.update(all => [...all, { id, title, message, type: type }])

    setTimeout(() => this.remove(id), 3000);

    return id;
  }

  remove(id: number) {
    this._toasts.update((all: any[]) => all.filter(t => t.id !== id))
    console.log("remove called...")
  }

}

