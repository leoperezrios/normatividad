import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FindComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FindComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class SharedModule {}
