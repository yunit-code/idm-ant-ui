import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import Base from '../base';

export { TimelineProps } from './Timeline';
export { TimeLineItemProps } from './TimelineItem';

Timeline.Item = TimelineItem;

/* istanbul ignore next */
Timeline.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Timeline.name, Timeline);
  Vue.component("Idm"+TimelineItem.name, TimelineItem);
};

export default Timeline;
