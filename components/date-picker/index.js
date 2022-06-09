import VcCalendar from '../vc-calendar';
import MonthCalendar from '../vc-calendar/src/MonthCalendar';
import createPicker from './createPicker';
import wrapPicker from './wrapPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';
import { DatePickerProps, MonthPickerProps, WeekPickerProps, RangePickerProps } from './interface';
import Base from '../base';

const DatePicker = wrapPicker(
  { ...createPicker(VcCalendar, DatePickerProps()), name: 'ADatePicker' },
  DatePickerProps(),
  'date',
);

const MonthPicker = wrapPicker(
  { ...createPicker(MonthCalendar, MonthPickerProps()), name: 'AMonthPicker' },
  MonthPickerProps(),
  'month',
);

Object.assign(DatePicker, {
  RangePicker: wrapPicker(RangePicker, RangePickerProps(), 'date'),
  MonthPicker,
  WeekPicker: wrapPicker(WeekPicker, WeekPickerProps(), 'week'),
});

/* istanbul ignore next */
DatePicker.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+DatePicker.name, DatePicker);
  Vue.component("Idm"+DatePicker.RangePicker.name, DatePicker.RangePicker);
  Vue.component("Idm"+DatePicker.MonthPicker.name, DatePicker.MonthPicker);
  Vue.component("Idm"+DatePicker.WeekPicker.name, DatePicker.WeekPicker);
};

export default DatePicker;
