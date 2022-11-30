export interface Widget {
  tableName: string;
  type: 'line' | 'bar' | 'table'; // and others ...
  name: string;
  refreshDurations: number;
  configurator: WidgetConfigurator;
}

export enum WidgetType {
  Bar = 'bar',
  Table = 'table',
  Number = 'number',
}

export interface WidgetConfigurator {
  dataPoints: string[] | string;
}

export interface TableWidget extends WidgetConfigurator {
  limit: number;
  filter: string;
}

export interface BarWidget extends WidgetConfigurator {
  intervalCalculation: 'sum' | 'count' | 'average';
  range: string;
  color: string;
}

export interface NumberWidget extends WidgetConfigurator {}
