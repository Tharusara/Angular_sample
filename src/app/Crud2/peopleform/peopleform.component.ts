import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { PeoplelistComponent } from '../peoplelist/peoplelist.component';
import { Global } from 'src/app/Global/Global';
import { DBOperation } from 'src/app/Global/DBOperation';
import { IPeople } from 'src/app/Models/people';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-peopleform',
  templateUrl: './peopleform.component.html',
  styleUrls: ['./peopleform.component.scss']
})
export class PeopleformComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private _PeopleService: UserService,
              public dialogRef: MatDialogRef<PeoplelistComponent>) { }
  msg: string;
  indLoading = false;
  peopleFrm: FormGroup;
  listFilter: string;
  selectedOption: string;
  genders = [];
  technologies = [];

  formErrors = {
    name: '',
    email: '',
    gender: '',
    birth: '',
    techno: '',
    message: ''
  };

  validationMessages = {
    name: {
      maxlength: 'Name cannot be more than 50 characters long.',
      required: 'Name is required.'
    },
    email: {
      email: 'Invalid email format.',
      required: 'Email is required.'
    },
    gender: {
      required: 'Gender is required.'
    },
    techno: {
      required: 'Technology is required.'
    },
    birth: {
      required: 'Birthday is required.'
    },
    message: {
      required: 'message is required.'
    }

  };

  ngOnInit() {
    this.peopleFrm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      techno: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
    this.genders = Global.genders;
    this.technologies = Global.technologies;

    // subscribe on value changed event of form to show validation message
    this.peopleFrm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    if (this.data.dbops === DBOperation.create) {
      this.peopleFrm.reset();
    } else {
      // console.log(this.data.People);
      this.peopleFrm.setValue(this.data.People);
      // console.log(this.data.people);
      // console.log(this.peopleFrm);
    }
    this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
  }

  onValueChanged(data?: any) {
    if (!this.peopleFrm) { return; }
    const form = this.peopleFrm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      // setup custom validation message to form
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(formData: any) {
    const PeopleData = this.mapDateData(formData.value);
    switch (this.data.dbops) {
      case DBOperation.create:
        this._PeopleService.addPeople(Global.BASE_USER_ENDPOINT + 'addContact', PeopleData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.update:
        this._PeopleService.updatePeople(Global.BASE_USER_ENDPOINT + 'updateContact', PeopleData.id, PeopleData).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
      case DBOperation.delete:
        this._PeopleService.deletePeople(Global.BASE_USER_ENDPOINT + 'deleteContact', PeopleData.id).subscribe(
          data => {
            // Success
            if (data.message) {
              this.dialogRef.close('success');
            } else {
              this.dialogRef.close('error');
            }
          },
          error => {
            this.dialogRef.close('error');
          }
        );
        break;
    }
  }

  SetControlsState(isEnable: boolean) {
    isEnable ? this.peopleFrm.enable() : this.peopleFrm.disable();
  }

  mapDateData(people: IPeople): IPeople {
    people.birth = new Date(people.birth).toISOString();
    return people;
  }
}
