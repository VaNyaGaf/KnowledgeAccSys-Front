import { Component, OnInit } from '@angular/core';
import { Subject } from '../models';
import { SubjectService } from '../services';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  public subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubects();
  }

  getSubects() {
    this.subjectService.getAll().subscribe(subjects => this.subjects = subjects)
  }

}
