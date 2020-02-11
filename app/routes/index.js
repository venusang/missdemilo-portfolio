import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('/api/projects.json');
        const projects = await response.json();

        const response2 = await fetch('api/intro.json');
        const intro = await response2.json();
        return { intro, projects };
    }
}
