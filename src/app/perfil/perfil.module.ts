import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PerfilComponent} from './perfil.component';
import {PerfilService} from './perfil.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    CheckboxModule, 
    ConfirmDialogModule
  ],
  declarations: [
    PerfilComponent
  ],
  providers: [
    PerfilService,
    ConfirmationService
  ]
})
export class PerfilModule {

}
