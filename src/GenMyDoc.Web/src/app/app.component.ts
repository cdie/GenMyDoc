import { Component } from '@angular/core';
import { ConstructorInfos } from './models/ctorInfos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  //#region Members

  className: string;
  namespace: string;
  assembly: string;
  classSummary: string;

  constructors: ConstructorInfos[] = Array.of<ConstructorInfos>();

  //#endregion

  //#region Ctor

  constructor() {
    this.assembly = "CQELight";
    this.className = "ICommand";
    this.namespace = "CQELight.Abstractions.Interfaces";
    this.classSummary = "Base interface for Commands.";

  }

  //#endregion

}
