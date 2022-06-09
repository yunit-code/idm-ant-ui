import Collapse from './Collapse';
import CollapsePanel from './CollapsePanel';
import Base from '../base';

Collapse.Panel = CollapsePanel;

/* istanbul ignore next */
Collapse.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Collapse.name, Collapse);
  Vue.component("Idm"+CollapsePanel.name, CollapsePanel);
};

export default Collapse;
