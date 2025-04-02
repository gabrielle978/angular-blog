import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  ngOnInit(): void {
  }
  @Input()
  photoCover:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcJA_hd7GjlX9irerXOFaiZsxyBInqa9JEQ&s"
  @Input()
  cardTitle:string="Nova versão do Angular disponível"
  @Input()
  cardDescription:string="Novas features e melhor acessibilidade"
  // @Input()
  // Id:string="0"

  constructor(){}
}
