import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data';
import { ConfiguratorCreatorDirective } from './configurator-creator.directive';
import { ConfiguratorFactory } from './configurator-factory.service';
import { WidgetType } from '../models/widget';

@Component({
  selector: 'app-widget-popup',
  templateUrl: './widget-popup.component.html',
  styleUrls: ['./widget-popup.component.css'],
})
export class WidgetPopupComponent implements OnInit {
  form: FormGroup;
  configuratorFactory: ConfiguratorFactory;

  @ViewChild(ConfiguratorCreatorDirective, { static: true })
  set appShark(directive: ConfiguratorCreatorDirective) {
    this.configuratorFactory = new ConfiguratorFactory(
      directive.veiwContainerRef
    );
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<WidgetPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      tableName: ['', Validators.required],
      name: ['', Validators.required],
      type: ['bar'],
      refreshTime: ['', Validators.required],
    });

    this.form.get('type').valueChanges.subscribe((x) => {
      const ref = this.configuratorFactory.create(x);
      this.form.setControl('data', ref.instance.form);
    });

    const ref = this.configuratorFactory.create(WidgetType.Bar);
    this.form.addControl('data', ref.instance.form);

    this.form.patchValue(this.data.widget);
  }

  onSaveClick() {
    this.dialogRef.close(this.form.value);
  }
}
