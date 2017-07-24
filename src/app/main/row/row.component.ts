import {Component, Input, OnInit} from '@angular/core';
import {fadeInRow} from "../../animations/fade-in-row.animations";
import {DataService} from "../../data.service";

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  animations: [fadeInRow],
  host: { '[@fadeInRow]': '','(@fadeInRow.done)': 'done($event)','style': 'display: table-row;' }
})
export class RowComponent implements OnInit {

  @Input('appRow') appRow;
  @Input('index') index;
  constructor(private __dataSrv:DataService) { }

  ngOnInit() {
  }

  done(e){
    this.__dataSrv.regEvent(e)
  }

}
