import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  // @ts-ignore
  createForm: FormGroup;
  isDisplay = true;

  constructor(
    private http: HttpClient, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      Examplename: [null, Validators.required],
      Exampletype: ['MAVEN', Validators.required],
      Description: [null, Validators.required],
      ZipFile: [null, Validators.required],
    });
  }
  toggleDisplay(): void {
    this.isDisplay = !this.isDisplay;
  }
  submit(): void{
    if (this.createForm != null){
      if (this.createForm.valid){
        console.log(this.createForm.value);
        this.toggleDisplay();
        const headers = { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.', 'Content-Type': 'multipart/form-data; boundary=WebAppBoundary'};
        this.createForm.reset();
        this.createForm.clearValidators();
        this.http.post<any>('http://localhost:9090/upload/example', this.createForm.value, {headers});
      }
    }
    }
}
