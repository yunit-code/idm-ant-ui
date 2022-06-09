import Badge from './Badge';
import Base from '../base';

/* istanbul ignore next */
Badge.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Badge.name, Badge);
};

export default Badge;
