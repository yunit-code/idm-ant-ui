import Anchor from './Anchor';
import AnchorLink from './AnchorLink';
import Base from '../base';

Anchor.Link = AnchorLink;

/* istanbul ignore next */
Anchor.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Anchor.name, Anchor);
  Vue.component("Idm"+Anchor.Link.name, Anchor.Link);
};
export { AnchorProps } from './Anchor';
export { AnchorLinkProps } from './AnchorLink';
export default Anchor;
