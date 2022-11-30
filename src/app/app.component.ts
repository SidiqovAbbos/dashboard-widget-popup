import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Widget } from './models/widget';
import { WidgetPopupComponent } from './widget-popup/widget-popup.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data?: Widget;
  constructor(private readonly matDialog: MatDialog) {}
  name = 'Angular ' + VERSION.major;

  onOpenPopup() {
    this.matDialog
      .open(WidgetPopupComponent, {
        data: { dialogTitle: 'Test dialog', widget: this.data },
        minWidth: '220px',
      })
      .afterClosed()
      .subscribe((data) => {
        this.data = data;
      });
  }
}
