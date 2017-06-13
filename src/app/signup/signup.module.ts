import { SignupComponent} from './signup.component';
import { routing } from './signup.routes';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [SignupComponent]
})
export class SignupModule { }
