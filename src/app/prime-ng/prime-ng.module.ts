import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';

//modulo para exportar modulos

@NgModule({
  exports: [MenuModule],
})
export class PrimeNgModule {}
