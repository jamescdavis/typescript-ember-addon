import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
export default class AddonTsComponent extends Component.extend({}) {
    constructor() {
        super(...arguments);
        // normal class body definition here
        this.layout = layout;
    }
}
;
