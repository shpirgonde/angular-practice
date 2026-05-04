import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Statusmodal } from '../../shared/components/modals/statusmodal/statusmodal';
import { FormsModule } from '@angular/forms';
import { Toaster } from "../../shared/components/toaster/toaster";
import { ToasterService } from '../../shared/services/toaster.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, Statusmodal, FormsModule, Toaster],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private toasterService = inject(ToasterService);

  //Reference the modal Component via viewChild
  // modal = viewChild(Statusmodal)
  // statusMessage = signal('');

  onLogin(event: Event) {
    // When you click a "Submit" button, the browser naturally reloads the page. Using preventDefault() stops that reload so you can validate inputs or send data via
    //event.preventDefault();

    const isSuccess = Math.random() > 0.5; // Simulate a login success or failure randomly

    if (isSuccess) {
      //this.statusMessage.set('Login successful!');
      this.toasterService.success('Success', 'This is a success message')
    }
    else {
      //this.statusMessage.set('Error: Invalid credentials. Please try again.');
      this.toasterService.error('Error', 'This is a error message')
    }

    //Open the modal using the child component's method
    //this.modal()?.open();
  }
}
