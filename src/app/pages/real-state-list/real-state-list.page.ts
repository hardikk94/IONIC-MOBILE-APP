import { Component, OnInit } from '@angular/core';
import { ConferenceData } from './../../providers/conference-data';
@Component({
  selector: 'real-state-list',
  templateUrl: './real-state-list.page.html',
  styleUrls: ['./real-state-list.page.scss'],
})
export class RealStateListPage implements OnInit {
  public patients = [];
  constructor(public configData: ConferenceData) { }

  ngOnInit() {
    this.configData.getpatientList().subscribe(async (users) => {
      this.patients = users.filter((user) => user.type == 'patient')
    });
  }
}
