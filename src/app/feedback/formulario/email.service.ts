import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  encaminharEmail(body: FormGroup) : any{
    console.log(body)
    return this.http.post("https://formspree.io/f/mzboylar", body);
  }
}
