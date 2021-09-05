import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	initialAddress = new FormGroup({
		addressLine: new FormControl('', [Validators.required]),
		city: new FormControl('', [Validators.required]),
		zipcode: new FormControl('', [Validators.required,Validators.pattern("[0-9 ]{6}")])
	});

	registerForm = new FormGroup({
		firstName: new FormControl('', [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		mobile: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
		password: new FormControl('', Validators.required),
		address: new FormArray([this.initialAddress])
	});

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
	}

	registerUser(form: any) {
		this.authService.registerUser({
			email: form.value.email,
			password: form.value.password
		},form)
	}

	addAddress() {
		(<FormArray>this.registerForm.get('address')).push(this.initialAddress);
	}

	removeAddress(index:any){
		(<FormArray>this.registerForm.get('address')).removeAt(index);
	}

}
