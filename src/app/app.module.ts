import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialModule } from './material.module';
import { BarConfiguratorsComponent } from './widget-popup/configurators/bar-configurators/bar-configurators.component';
import { TableConfiguratorsComponent } from './widget-popup/configurators/table-configurators/table-configurators.component';
import { NumberConfiguratorComponent } from './widget-popup/configurators/number-configurator/number-configurator.component';
import { WidgetPopupComponent } from './widget-popup/widget-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ConfiguratorCreatorDirective } from './widget-popup/configurator-creator.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ConfiguratorCreatorDirective,
    HelloComponent,
    WidgetPopupComponent,
    BarConfiguratorsComponent,
    TableConfiguratorsComponent,
    NumberConfiguratorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
