import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExchangeRate } from 'src/app/models/exchange-rate';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-inline-page',
  templateUrl: './inline-page.component.html',
  styleUrls: ['./inline-page.component.less']
})
export class InlinePageComponent implements OnInit{

  exchange: ExchangeRate | undefined;

  constructor(
    private route: ActivatedRoute,
    private webService: WebService
  ) {}

  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.webService.getItemById(+params['id'])
      .subscribe(response => {
         this.exchange =  response;
       });
    });
  }


}
