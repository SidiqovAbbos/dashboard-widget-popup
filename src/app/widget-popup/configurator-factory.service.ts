import { ComponentRef, ViewContainerRef } from '@angular/core';
import { WidgetType } from '../models/widget';
import { BarConfiguratorsComponent } from './configurators/bar-configurators/bar-configurators.component';
import { Configurator } from './configurators/configurator';
import { NumberConfiguratorComponent } from './configurators/number-configurator/number-configurator.component';
import { TableConfiguratorsComponent } from './configurators/table-configurators/table-configurators.component';

export class ConfiguratorFactory {
  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  clear() {}

  create(type: WidgetType): ComponentRef<Configurator> {
    this.viewContainerRef.clear();

    switch (type) {
      case WidgetType.Bar:
        return this.viewContainerRef.createComponent(BarConfiguratorsComponent);
      case WidgetType.Table:
        return this.viewContainerRef.createComponent(
          TableConfiguratorsComponent
        );
      case WidgetType.Number:
        return this.viewContainerRef.createComponent(
          NumberConfiguratorComponent
        );
    }
  }
}
