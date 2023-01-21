import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input()
  data:string = 'Mensaje escrito en el comp. HIJO'

  @Output()
  eventoEnviarData = new EventEmitter<string>()

  @ViewChild('valores')
  valores!: ElementRef<HTMLInputElement>

  enviarData(valor:string) {
    this.eventoEnviarData.emit(valor)
    console.log(this.valores.nativeElement.value);
    
    this.valores.nativeElement.value = ''
  }

}
