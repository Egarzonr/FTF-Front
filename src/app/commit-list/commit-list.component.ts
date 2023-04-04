import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  commits!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCommits();
  }

  getCommits() {
    const url = 'http://localhost:3000/github/';
    this.http.get<any[]>(url).subscribe((data) => {
      this.commits = data;
    });
  }
}
