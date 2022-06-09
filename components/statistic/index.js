import Statistic from './Statistic';
import Countdown from './Countdown';
import Base from '../base';

Statistic.Countdown = Countdown;
/* istanbul ignore next */
Statistic.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Statistic.name, Statistic);
  Vue.component("Idm"+Statistic.Countdown.name, Statistic.Countdown);
};

export default Statistic;
