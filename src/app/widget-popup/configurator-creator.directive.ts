import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appConfiguratorCreator]',
})
export class ConfiguratorCreatorDirective {
  constructor(public veiwContainerRef: ViewContainerRef) {}
}
