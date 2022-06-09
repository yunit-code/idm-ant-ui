import Card from './Card';
import Meta from './Meta';
import Grid from './Grid';
import Base from '../base';
Card.Meta = Meta;
Card.Grid = Grid;

/* istanbul ignore next */
Card.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Card.name, Card);
  Vue.component("Idm"+Meta.name, Meta);
  Vue.component("Idm"+Grid.name, Grid);
};

export default Card;
