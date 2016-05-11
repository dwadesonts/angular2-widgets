import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TsListDirective} 'angular2-widgets/widgets/ts-list.directive';

// add directives for the components being exampled
// add html in the template for components being exampled
@Component({
    selector: 'app',
    directives: [],
    template: `<div>hi</div>
               `
})
export class App {

}

bootstrap(App);
