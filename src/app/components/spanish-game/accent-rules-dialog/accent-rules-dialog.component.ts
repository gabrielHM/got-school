import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-accent-rules-dialog',
  templateUrl: './accent-rules-dialog.component.html',
  styleUrls: ['./accent-rules-dialog.component.scss']
})
export class AccentRulesDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AccentRulesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
step=0;
  ngOnInit() {
    this.step=0
  }
  

}
