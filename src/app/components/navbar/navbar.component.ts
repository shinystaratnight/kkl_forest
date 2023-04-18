import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private modal: MatDialog) {}
  openDialog() {
    const dialogRef = this.modal.open(ModalComponent, {
      maxWidth: '95vw',
      maxHeight: '95vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.action == 'select') {
        const id = result.id;
        const name = result.name;
      }
    });
  }
}
