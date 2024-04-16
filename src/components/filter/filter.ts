import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the FilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter',
  templateUrl: 'filter.html'
})
export class FilterComponent {
  filterform:FormGroup;

  constructor(private form: FormBuilder) {
    this.filterform = this.form.group({
      location: '',
      minprice: '',
      maxprice: '',
      radius: '',
      purpose: '',
      spacetype: '' 
    });
  }

  filterin()
  {
    console.log(this.filterform.value);
  }

}
