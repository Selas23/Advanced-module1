import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <h1>Welcome to My Component</h1>
      <button>Click Me</button>
      <p>{{ message }}</p>
    </div>
  `
})
export class MyComponent {
  message = 'Hello!';
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'MyComponent';
// }
