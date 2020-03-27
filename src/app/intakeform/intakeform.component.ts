import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stm-intake-form',
  templateUrl: './intakeform.component.html',
  styleUrls: ['./intakeform.component.scss']
})
export class IntakeformComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { 

  }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(IntakeFormDialogComponent, {
      height: '320px',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      let url: string = result;
      if (url) {
        window.open(url, '_blank');
      }
    });
  }

}

interface IIntakeFormItem { 
  description: string,
  form: string
} 

@Component({
  selector: 'stm-intake-form-dialog',
  templateUrl: './intake-form-dialog.component.html',
  styleUrls: ['./intakeform.component.scss']
})
export class IntakeFormDialogComponent implements OnInit {
  
  items: IIntakeFormItem[]  = [
    {"description": "Massage Service Intake Form", "form": "https://docs.google.com/document/d/16k0OS1mK6U655-6bt5yaxvsV07xnBe6UnEPxKER-8gs/edit?usp=sharing"}, 
    {"description": "Ashiatsu Service Intake Form", "form": "https://docs.google.com/document/d/1co5ItVxyHxr6i3CAJNVSOV3kNXuCubCYkv3-NofqvsI/edit?usp=sharing"}, 
    {"description": "Materinty Service Intake Form", "form": "https://docs.google.com/document/d/192jPymGpgfuDtvs-bTsPrVtQ8PfpbSdBYn_mIMSB1-U/edit?usp=sharing"}
  ];

  selectedItem: IIntakeFormItem;
  
  constructor(public dialogRef: MatDialogRef<IntakeFormDialogComponent>) { 

    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

