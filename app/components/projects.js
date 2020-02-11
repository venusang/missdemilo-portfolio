import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProjectsComponent extends Component {
  @tracked query = '';
}
