import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  title = 'login';
  loginForm!: FormGroup;
  submitted = false;
  authFackservice: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {}
  
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]], //admin@quicsolv.com
      password: ['', [Validators.required]], //123456
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else{
     
            this.router.navigate(['/dashboard']);
    }
  }
  get f() {
    return this.loginForm.controls;
  }

  getValues(val: any){
    console.warn(val)
  }

}
