import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';

@Component({
    selector: 'app',
    template: `
      <h3>Angular2 Boilerplate</h3>
      <br/>
      <contact-list></contact-list>
      <!-- <div>
        Email Address: {{selectedContact.email}}
      </div>
      -->
    `,
    directives:[ContactListComponent],
    styleUrls:["../src/css/app.css"]
})
export class AppComponent {

}
