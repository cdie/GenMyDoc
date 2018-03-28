import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentationModule } from './documentation/documentation.module';
import { Routes, RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState } from './store/IAppState';
import { store } from './store/store';
import { NavigationModule } from './navigation/navigation.module';
import { DocumentationComponent } from './documentation/documentation.component';

const appRoutes: Routes = [
  { path: '', component: DocumentationComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocumentationModule,
    NgReduxModule,
    NavigationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private _ngRedux: NgRedux<IAppState>) {
    _ngRedux.provideStore(store);
  }

}
