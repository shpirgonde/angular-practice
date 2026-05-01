import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { Toast, ToasterService } from '../../services/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toaster',
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './toaster.html',
  styleUrl: './toaster.scss',
})
export class Toaster implements OnInit, OnDestroy {

  private toasterService = inject(ToasterService);

  toasts: Toast[] = [];
  private subscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.subscription = this.toasterService.toast$.subscribe(toasts => this.toasts = toasts)
  }

  removeToast(id: number) {
    this.toasterService.remove(id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //Mock data for the example
  toast = { type: 'success', message: 'Task Complete' };

  //Helper method to return the correct icon object

  getIcon(type: string) {
    switch (type) {
      case 'success': return faCheckCircle;
      case 'error': return faTimesCircle;
      case 'warning': return faExclamationTriangle;
      default: return faInfoCircle;
    }
  }
}



// animations: [
//     trigger('toasterAnimation', [
//       transition(':enter', [
//         // Fix: translateY (not tranlateY) and opacity (not opcaity)
//         style({ transform: 'translateY(100%)', opacity: 0 }),
//         animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
//       ]),
//       transition(':leave', [
//         // Fix: opacity (not opcaity)
//         animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
//       ])
//     ])
//   ]