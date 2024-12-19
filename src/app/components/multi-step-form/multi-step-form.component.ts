import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
previousStep() {
throw new Error('Method not implemented.');
}
  form: FormGroup;
  currentStep: number = 1;
  step1Form: any;
  step2Form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      step1: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      step2: this.fb.group({
        age: ['', [Validators.required, Validators.min(1)]],
        country: ['', Validators.required]
      }),
      // Add more steps as needed
    });
  }

  ngOnInit(): void {
    // Load saved form data from local storage if available
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.form.setValue(JSON.parse(savedData));
    }
  }

  nextStep() {
    if (this.form.valid) {
      this.currentStep++;
      this.saveProgress();
    }
  }

  prevStep() {
    this.currentStep--;
  }

  saveProgress() {
    localStorage.setItem('formData', JSON.stringify(this.form.value));
  }

  onSubmit() {
    // Handle form submission
    console.log(this.form.value);
    // Navigate to dashboard
  }
}