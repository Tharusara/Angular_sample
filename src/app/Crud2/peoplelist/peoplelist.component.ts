import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DBOperation } from 'src/app/Global/DBOperation';
import { IPeople } from 'src/app/Models/people';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Global } from 'src/app/Global/Global';
import { PeopleformComponent } from '../peopleform/peopleform.component';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.scss']
})
export class PeoplelistComponent implements OnInit {
  peoples: IPeople[];
  people: IPeople;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  // 'id',
  displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
  dataSource = new MatTableDataSource<IPeople>();

  constructor(public snackBar: MatSnackBar, private _peopleService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadingState = true;
    this.loadpeoples();
  }
  loadpeoples(): void {
    this._peopleService.getAllPeople(Global.BASE_USER_ENDPOINT + 'getAllContact')
      .subscribe(contacts => {
        this.loadingState = false;
        this.dataSource.data = contacts;
      });
  }

  getGender(gender: number): string {
    return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PeopleformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, People: this.people }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadpeoples();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Data successfully added.');
            break;
          case DBOperation.update:
            this.showMessage('Data successfully updated.');
            break;
          case DBOperation.delete:
            this.showMessage('Data successfully deleted.');
            break;
        }
      } else if (result === 'error') {
        this.showMessage('There is some issue in saving records, please contact to system administrator!');
      } else {
      }
    });
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  addPeople() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Contact';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editPeople(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Contact';
    this.modalBtnTitle = 'Update';
    this.people = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deletePeople(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.people = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
}
