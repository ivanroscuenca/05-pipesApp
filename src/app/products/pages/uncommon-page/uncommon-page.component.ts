import { Component } from '@angular/core';

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
}
