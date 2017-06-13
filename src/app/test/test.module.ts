import { TestComponent } from './test.component';
import { routing } from './test.routes';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [TestComponent]
})
export class TestModule { }
