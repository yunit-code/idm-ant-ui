import Radio from './Radio';
import Group from './Group';
import Button from './RadioButton';
import Base from '../base';

Radio.Group = Group;
Radio.Button = Button;

/* istanbul ignore next */
Radio.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Radio.name, Radio);
  Vue.component("Idm"+Radio.Group.name, Radio.Group);
  Vue.component("Idm"+Radio.Button.name, Radio.Button);
};

export { Button, Group };
export default Radio;
