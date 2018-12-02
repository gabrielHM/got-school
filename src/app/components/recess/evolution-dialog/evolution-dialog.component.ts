import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  index;
}
@Component({
  selector: 'app-evolution-dialog',
  templateUrl: './evolution-dialog.component.html',
  styleUrls: ['./evolution-dialog.component.scss']
})
export class EvolutionDialogComponent implements OnInit {
  index = 0;
  assets = ["alien", "electric lizard", "paper-book", "shark-fish", "spaceship"];
  current = "";
  constructor(public dialogRef: MatDialogRef<EvolutionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.index = data.index; 
      this.current = this.assets[data.index] }

  ngOnInit() {
    // this.dialogRef.close();
  }

}
