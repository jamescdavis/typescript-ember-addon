import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';

export default class AddonTsComponent extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  layout = layout
};
