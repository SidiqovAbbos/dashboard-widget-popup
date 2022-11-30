import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Directive()
export abstract class Configurator {
  @Input() form: FormGroup;
}
