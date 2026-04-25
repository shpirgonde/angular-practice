import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Statusmodal } from '../../shared/components/modals/statusmodal/statusmodal';

@Component({
  selector: 'app-login',
  imports: [Statusmodal],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  //Reference the modal Component via viewChild
  modal = viewChild(Statusmodal)

  statusMessage = signal('');

  onLogin(event: Event) {
    event.preventDefault();// When you click a "Submit" button, the browser naturally reloads the page. Using preventDefault() stops that reload so you can validate inputs or send data via
    const isSuccess = Math.random() > 0.5; // Simulate a login success or failure randomly

    if (isSuccess) {
      this.statusMessage.set('Login successful!');
    }
    else {
      this.statusMessage.set('Error: Invalid credentials. Please try again.');
    }

    //Open the modal using the child component's method

    this.modal()?.open();
  }
}
