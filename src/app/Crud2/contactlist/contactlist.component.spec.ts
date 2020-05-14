import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlistComponent } from './contactlist.component';
import { MatTableModule , MatTableDataSource} from '@angular/material/table';
import { IContact } from 'src/app/Models/contact';
import { MatSnackBarModule} from '@angular/material/snack-bar';

describe('ContactlistComponent', () => {
  let component: ContactlistComponent;
  let fixture: ComponentFixture<ContactlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ContactlistComponent with Tharusara', () => {
  let backendService;
  let fixture;
  let component;
  const testUsers: IContact[] = [
    // { email: 'dummy@mail.com', created: '01-01-2020', roles: 'admin,standard' },
    // { email: 'hello@mail.com', created: '01-01-2022', roles: 'admin' },
    // { email: 'yes@mail.com', created: '01-01-2033', roles: 'admin,standard,restricted' }
    // tslint:disable-next-line: max-line-length
    {id: 1, name: 'Chiara', email: 'Chiara@gmail.com', gender: 1, birth: '1995-12-01T00:00:00', techno: 'BA/Documentation', message: 'Buissness Analiys' },
    {id: 2, name: 'Tharusara', email: 'tharu@gmail.com', gender: 0, birth: '1998-12-01T00:00:00', techno: 'c#', message: 'Developer' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactlistComponent ],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Tharusara', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table Tharusara ', (done) => {
    expect(component.IContact).toEqual(testUsers);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);

      // Header row
      const headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('id');
      expect(headerRow.cells[1].innerHTML).toBe('name');
      expect(headerRow.cells[2].innerHTML).toBe('email');
      expect(headerRow.cells[3].innerHTML).toBe('gender');
      expect(headerRow.cells[4].innerHTML).toBe('birth');
      expect(headerRow.cells[5].innerHTML).toBe('techno');
      expect(headerRow.cells[6].innerHTML).toBe('message');

      // Data rows
      const row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe(1);
      console.log(row1);
      expect(row1.cells[1].innerHTML).toBe('Chiara');
      expect(row1.cells[2].innerHTML).toBe('Chiara@gmail.com');
      expect(row1.cells[3].innerHTML).toBe(1);
      expect(row1.cells[4].innerHTML).toBe('1995-12-01T00:00:00');
      expect(row1.cells[5].innerHTML).toBe('BA/Documentation');
      expect(row1.cells[6].innerHTML).toBe('Buissness Analiys');

      const row2 = tableRows[2];
      expect(row1.cells[0].innerHTML).toBe(2);
      expect(row1.cells[1].innerHTML).toBe('Tharusara');
      expect(row1.cells[2].innerHTML).toBe('tharu@gmail.com');
      expect(row1.cells[3].innerHTML).toBe(1);
      expect(row1.cells[4].innerHTML).toBe('1998-12-01T00:00:00');
      expect(row1.cells[5].innerHTML).toBe('C#');
      expect(row1.cells[6].innerHTML).toBe('Developer');

      // const row3 = tableRows[3];
      // expect(row3.cells[0].innerHTML).toBe('yes@mail.com');
      // expect(row3.cells[1].innerHTML).toBe('01-01-2033');
      // expect(row3.cells[2].innerHTML).toBe('admin,standard,restricted');


      done();
    });
  });
});