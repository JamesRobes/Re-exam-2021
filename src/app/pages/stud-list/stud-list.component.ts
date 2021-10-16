import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/shared/interfaces/stdent.interfaces'
import { PersonalService } from 'src/app/shared/services/personal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {

  personals!: Personal[];

  constructor(private personalServise: PersonalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }


  async getData() {
    try {
      this.personals = (await this.personalServise.getPersonals()) || [];
    } catch (error) {
      console.log(error);
    }
  }

  linkToItem(id?: number) {
    if (id){
      this.router.navigate([this.router.url, 'item', id])
    } else {
      this.router.navigate([this.router.url, 'item'])
    }
  }
}
