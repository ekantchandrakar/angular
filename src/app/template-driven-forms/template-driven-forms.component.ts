import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent {
  // name: string;
  onSubmit(f: NgForm) {
    console.log(f.value);
    // this.name = f.value.fullname;
  }

  getValue(f: NgModel) {
    console.log(f);
  }
}
