import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-status-modal',
  imports: [],
  templateUrl: './statusmodal.html',
  styleUrl: './statusmodal.scss',
})
export class Statusmodal {

  //signal based input for the message
  message = input<string>('');

  //Access the native dialog ElementRef
  private dialog = viewChild<ElementRef<HTMLDialogElement>>('statusDialog');

  open() {
    this.dialog()?.nativeElement.showModal();
  }

  close() {
    this.dialog()?.nativeElement.close();
  }

}
