import { Component, OnInit } from '@angular/core';
import { ConferenceData } from './../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'realstate-detail',
  templateUrl: './realstate-detail.page.html',
  styleUrls: ['./realstate-detail.page.scss'],
})
export class RealstateDetailPage implements OnInit {
  defaultHref = '';
  patientDetail ={}
  constructor(public configData: ConferenceData,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const sessionId = this.route.snapshot.paramMap.get('id')
    this.configData.getpatientList().subscribe(async (users) => {
      let index = users.findIndex((user) => user.id === sessionId)
      if (index !== -1) {
        this.patientDetail = users[index]                
      }
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/realstate`;
  }

}
