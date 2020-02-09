import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class SideMenuComponent extends Component {

    @action
    hideOverlay() {
        const sideHeaderToggle = document.querySelector('.side-header-toggle');
        const sideHeaderOverlay = document.querySelector('.side-menu-overlay');
        const sideHeader = document.querySelector('.side-header');
        sideHeaderToggle.classList.remove('side-menu-open');
        sideHeaderOverlay.classList.remove('overlay-show');
        sideHeader.classList.remove('side-menu-open');
    }
    @action
    closeSideMenu() {
        const sideHeader = document.querySelector('.side-header');
        const sideHeaderToggle = document.querySelector('.side-header-toggle');
        const sideHeaderOverlay = document.querySelector('.side-menu-overlay');


        sideHeaderToggle.classList.toggle('side-menu-open');
        sideHeader.classList.toggle('side-menu-open');
        sideHeaderOverlay.classList.toggle('overlay-show');


    }
}
