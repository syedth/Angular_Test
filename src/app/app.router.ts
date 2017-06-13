import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';


export const router: Routes = [
        { path: 'about', loadChildren: './about/about.module#AboutModule' },
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        { path: 'test', loadChildren: './test/test.module#TestModule' },
        { path: 'signup', loadChildren: './signup/signup.module#SignupModule' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
