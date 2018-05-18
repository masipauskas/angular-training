import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  subscription: String = "Advanced";

  subscriptions: string[] = ["Basic", "Advanced", "Pro"];

  onSubmit(form: any) {
    console.log(form);
  }
}
