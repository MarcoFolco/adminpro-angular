import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() progressChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  validateNewProgress(newProgress: number) {
    let validatedNewProgress = 0;
    if (newProgress > 100) {
      validatedNewProgress = 100;
    } else if (newProgress < 0) {
      validatedNewProgress = 0;
    } else {
      validatedNewProgress = newProgress;
    }
    return validatedNewProgress;
  }

  incrementProgress(incrementValue: number) {
    const newProgress = this.progress + incrementValue;
    const validatedNewProgress = this.validateNewProgress(newProgress);
    this.progress = validatedNewProgress;
  }

  setProgress(newProgress: number) {
    const validatedNewProgress = this.validateNewProgress(newProgress);
    this.progress = validatedNewProgress;
  }

  onProgressIncrementClick(incrementValue: number) {
    this.incrementProgress(incrementValue);
    this.progressChanged.emit(this.progress);
  }

  onProgressInputChange(newProgress: number) {
    this.setProgress(newProgress);
    this.progressChanged.emit(this.progress);
  }
}
