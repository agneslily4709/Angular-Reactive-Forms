import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
        constructor(private fb:FormBuilder) { }
        userObj = this.fb.group({
                name:["",Validators.required],
                email:["",Validators.required],
                password:["",Validators.required],
                phone:["",Validators.required],
                gender:["",Validators.required],
                country:["",Validators.required],
                agreeToTC:[null,Validators.required]
        })
}
