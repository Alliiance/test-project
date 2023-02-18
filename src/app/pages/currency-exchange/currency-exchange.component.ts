import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/exchange-rate';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.less']
})

export class CurrencyExchangeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed', 'actions'];
  dataSource: ExchangeRate[] =  [];
  countColumns: string = '10';

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.updateTable()
  }

  public updateTable(){
    this.webService.loadTabe(this.countColumns)
    .subscribe(response => {
      this.dataSource =  response;
   });
  }
}
