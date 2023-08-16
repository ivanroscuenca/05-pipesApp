import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
//modulo para exportar modulos

@NgModule({
  exports: [MenuModule, MenubarModule],
})
export class PrimeNgModule {}
