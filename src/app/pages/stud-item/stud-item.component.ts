import { FormatWidth, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personal } from 'src/app/shared/interfaces/stdent.interfaces';
import { PersonalService } from 'src/app/shared/services/personal.service';

@Component({
  selector: 'app-stud-item',
  templateUrl: './stud-item.component.html',
  styleUrls: ['./stud-item.component.css']
})
export class StudItemComponent implements OnInit {
  id: any;
  personal!: Personal;
  studForm!: FormGroup;



  constructor(
    private personalService: PersonalService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? +params.id : null;
      this.getData();
    })
  }

  async getData() {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      surname: [null, [Validators.required, Validators.maxLength(100)]],
      patronymic: [null, [Validators.required, Validators.maxLength(100)]],
      birthday: [null, [Validators.required, Validators.maxLength(100)]],
      number: [null, [Validators.required, Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.maxLength(100)]],
      group: [null, [Validators.required, Validators.maxLength(100)]],
      direction: [null, [Validators.required, Validators.maxLength(100)]]
    };

    this.studForm = this.fb.group(controls);
    this.getStudent();
    // if (this.id) {
    //   try {
    //     this.personal = await this.personalService.getPersonal(this.id)
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   this.studForm.patchValue(this.personal);
    // } else {
    //   this.studForm.reset();
    // }
  }

  async save() {
    if (this.id) {
      const personal = this.studForm.value;
      try {
        await this.personalService.putPersonal(this.id, personal)
      } catch (error) {
        console.log(error);
      }
    } else {
      const personal = this.studForm.value;

      try {
        const result = await this.personalService.postPersonal(personal);
        this.router.navigate(['personal']);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async delete() {
    try {
      await this.personalService.deletePersonal(this.id);
      this.router.navigate(['personal']);
    } catch (error) {
      console.log(error)
    }
  }

  async getStudent() {
    try {
      this.personal = await this.personalService.getPersonal(this.id);
      delete this.personal.id;
      console.log(this.personal);
      this.studForm.setValue(this.personal);
    } catch (error) {
      console.error(error);
    }
  }
}