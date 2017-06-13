import { AboutComponent} from './about.component';
import { routing } from './about.routes';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [AboutComponent]
})
export class AboutModule { }
