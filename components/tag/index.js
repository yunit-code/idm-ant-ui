import Tag from './Tag';
import CheckableTag from './CheckableTag';
import Base from '../base';

Tag.CheckableTag = CheckableTag;

/* istanbul ignore next */
Tag.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Tag.name, Tag);
  Vue.component("Idm"+Tag.CheckableTag.name, Tag.CheckableTag);
};

export default Tag;
