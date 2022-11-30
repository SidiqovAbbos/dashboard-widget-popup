import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Configurator } from '../configurator';

@Component({
  selector: 'app-table-configurators',
  templateUrl: './table-configurators.component.html',
  styleUrls: ['./table-configurators.component.css'],
})
export class TableConfiguratorsComponent
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
