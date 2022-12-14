import { Component, Input, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modalconfirm',
  templateUrl: './modalconfirm.component.html',
  styleUrls: ['./modalconfirm.component.scss']
})
export class ModalconfirmComponent implements OnInit {
   
  @Input() title: string | undefined;
  @Input() msg: string | undefined;
  @Input() btnConfirm: string = "Sim";
  @Input() btnCancel: string = "Não";

  confimResult: Subject<boolean> | undefined;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.confimResult = new Subject();
  }


  onConfirm(){
    this.confirmAndClose(true);
  }

  onDecline() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean){
    this.confimResult?.next(value);
    this.modalService.hide(); 
  }


}
