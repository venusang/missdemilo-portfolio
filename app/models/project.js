import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
	@attr title;
	@attr description;
	@attr client;
	@attr services;
	@attr thumbnail;
	@attr website;
	@attr github;
	@attr screenshots;
	@attr previous;
	@attr next;
}
