import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'NavBar';
    config.map([
      { route: ['', 'basic-use'], moduleId: './basic-use', nav: true,  title: 'Basic use (right aligned links)' },
      { route: 'left-aligned-links', moduleId: './left-aligned-links', nav: true,  title: 'Left aligned links' },
      { route: 'centered-logo', moduleId: './centered-logo', nav: true,  title: 'Centered logo' },
      { route: 'active-items', moduleId: './active-items', nav: true,  title: 'Active items' },
      { route: 'dropdown', moduleId: './dropdown', nav: true,  title: 'Navbar dropdown menu' }
    ]);

    this.router = router;
  }
}
