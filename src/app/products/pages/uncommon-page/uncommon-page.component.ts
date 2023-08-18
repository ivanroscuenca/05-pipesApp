import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Ivan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'Emma';
    this.gender = 'female';
  }

  //i18nPlural

  public clients: string[] = ['Jessica', 'Emma', 'Florian', 'Benja', 'anne'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando',
  };

  deleteCliente(): void {
    this.clients.shift();
  }

  //KeyValuePipe

  public person = {
    name: 'Benja',
    age: 18,
    address: 'Cote de deze 7, Maurs,France',
  };

  //Async pipe
  //observable
  public myObservableTimer: Observable<number> = interval(2000);
  //Promesa
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
    }, 3500);
  });
}
