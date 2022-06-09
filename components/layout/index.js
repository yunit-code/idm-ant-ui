import Layout from './layout';
import Sider from './Sider';
import Base from '../base';

Layout.Sider = Sider;

/* istanbul ignore next */
Layout.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Layout.name, Layout);
  Vue.component("Idm"+Layout.Header.name, Layout.Header);
  Vue.component("Idm"+Layout.Footer.name, Layout.Footer);
  Vue.component("Idm"+Layout.Sider.name, Layout.Sider);
  Vue.component("Idm"+Layout.Content.name, Layout.Content);
};
export default Layout;
