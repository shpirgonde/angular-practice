import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { Toast, ToasterService } from '../../services/toaster.service';


@Component({
  selector: 'app-toaster',
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './toaster.html',
  styleUrl: './toaster.scss',
})
export class Toaster {

  private toasterService = inject(ToasterService);

  toasts = this.toasterService.toasts;

  removeToast(id: number) {
    this.toasterService.remove(id);
  }

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



