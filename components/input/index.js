import Vue from 'vue';
import Input from './Input';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';
import antInputDirective from '../_util/antInputDirective';
import Base from '../base';

Vue.use(antInputDirective);

Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;

/* istanbul ignore next */
Input.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Input.name, Input);
  Vue.component("Idm"+Input.Group.name, Input.Group);
  Vue.component("Idm"+Input.Search.name, Input.Search);
  Vue.component("Idm"+Input.TextArea.name, Input.TextArea);
  Vue.component("Idm"+Input.Password.name, Input.Password);
};

export default Input;
