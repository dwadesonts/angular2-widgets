import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TsListDirective} from 'angular2-widgets/widgets';

// add directives for the components being exampled
// add html in the template for components being exampled
@Component({
    selector: 'app',
    directives: [TsListDirective],
    template: `<div>
                 hi
                 <ul tsList></ul>
               </div>
               `
})
export class App {

}

bootstrap(App);
