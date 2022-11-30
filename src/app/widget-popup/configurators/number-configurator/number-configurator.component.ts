import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Configurator } from '../configurator';

@Component({
  selector: 'app-number-configurator',
  templateUrl: './number-configurator.component.html',
  styleUrls: ['./number-configurator.component.css'],
})
export class NumberConfiguratorComponent
  extends Configurator
  implements OnInit
{
  constructor(private formBuilder: FormBuilder) {
    super();
    // setup table forms
    this.form = this.formBuilder.group({
      dataPoints: ['', Validators.required],
    });
  }
  ngOnInit() {}
}
