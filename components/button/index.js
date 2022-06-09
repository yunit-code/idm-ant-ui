import Button from './button';
import ButtonGroup from './button-group';
import Base from '../base';

Button.Group = ButtonGroup;

/* istanbul ignore next */
Button.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Button.name, Button);
  Vue.component("Idm"+ButtonGroup.name, ButtonGroup);
};

export default Button;
