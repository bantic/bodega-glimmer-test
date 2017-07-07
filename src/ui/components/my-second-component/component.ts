import Component, { tracked } from '@glimmer/component';

export default class MySecondComponent extends Component {
  @tracked('args')
  get multiplied() {
    return this.args.number * 2;
  }
};
