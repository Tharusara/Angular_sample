import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  files: any[] = [];
  Name: string;
  dataSource: File;
  constructor() { }

  ngOnInit() {
    this.files = [{
      fileID: 1,
      fileName: 'FileONe',
      filePath: 'c:/files',
      catagory: 'Financial',
  },
  {
    fileID: 2,
    fileName: 'TwoFile',
    filePath: 'c:/files/filelist',
    catagory: 'Accounts',
}]; }

  Search() {
    this.files = this.files.filter(res => {
      return res.fileName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
    });
  }

  OpenFolder() {

  }
  onEdit() {

  }
  onDelete() {

  }
}
