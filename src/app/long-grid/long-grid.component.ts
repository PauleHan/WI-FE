import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-long-grid',
  templateUrl: './long-grid.component.html',
  styleUrls: ['./long-grid.component.scss']
})

export class LongGridComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    
  }

}
