import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import Base from '../base';

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

/* istanbul ignore next */
Breadcrumb.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Breadcrumb.name, Breadcrumb);
  Vue.component("Idm"+BreadcrumbItem.name, BreadcrumbItem);
  Vue.component("Idm"+BreadcrumbSeparator.name, BreadcrumbSeparator);
};

export default Breadcrumb;
