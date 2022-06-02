import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my test application';
  message = '';
  // tslint:disable-next-line: typedef
  runWorker() {

    const testWebWorker = new Worker('./app.worker', { type: 'module'});

    testWebWorker.onmessage = (message) => {
      this.message = message.data;
      console.log(`Got message`, message.data);
    };

    testWebWorker.postMessage('hello');

  }
}
