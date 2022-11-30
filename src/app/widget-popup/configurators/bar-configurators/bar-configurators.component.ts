import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Configurator } from '../configurator';

@Component({
  selector: 'app-bar-configurators',
  templateUrl: './bar-configurators.component.html',
  styleUrls: ['./bar-configurators.component.css'],
})
export class BarConfiguratorsComponent extends Configurator implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    super();
    this.form = this.formBuilder.group({
      dataPoints: ['', Validators.required],
      color: ['#000'],
    });
  }
  ngOnInit() {}
}
