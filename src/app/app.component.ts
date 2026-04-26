import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fancymane';

  categories:any[] | undefined;

  constructor(
    private db:AngularFireDatabase,
    public auth: AngularFireAuth
    ){ }

  ngOnInit(): void {
    this.db.list('/categories').valueChanges()
      .subscribe(categories=>this.categories=categories)
     } 
}
