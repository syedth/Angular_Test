import { HomeComponent } from './home.component';
import { routing } from './home.routes';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
