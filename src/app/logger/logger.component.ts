import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent {

  detailsVisible = false
  log = []

  onToggleDetails() {
    this.detailsVisible = !this.detailsVisible
    this.log.push(this.log.length + 1)
  }

}
