import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string="https://assets.dio.me/uRYDV7s7jerAveKZogvm5cmrXK7rTVe2mWE71tCcyVU/f:webp/q:80/L2FydGljbGVzL2NvdmVyLzRkOWI2NmFlLTllOGEtNDg3My1hNDA1LTExY2U4ODNlODZjNy5qcGc"
  @Input()
  cardTitle:string="Experimente o Linux e surpreenda-se!"

  constructor(){}
  ngOnInit(): void {
;
  }

}
