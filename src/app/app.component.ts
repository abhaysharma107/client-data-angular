import { Component, } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { CilentDataService } from './cilent-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-data-angular';
  form: any;
  pdfData: any;
  constructor(
    private fb: UntypedFormBuilder,
    private clientDataService:CilentDataService,
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      email: ['',   [
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z]{1}[a-zA-Z0-9.-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$"
        ),
      ],],
      phone: ['',  [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],],
    })
  }

  onSubmit() {
    let payload = {
      name : this.form.value.name,
      email : this.form.value.email,
      phone : this.form.value.phone
    }
    this.clientDataService.addData(payload).subscribe(res => {
    })
  }

  viewPDF(){
    this.clientDataService.pdf().subscribe(res => {
      console.log(res);
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
}
