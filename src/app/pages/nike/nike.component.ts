import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {

  produtos:any = [
    {
      nome:"Tênis Nike Air Max 90",
      preco:"R$ 569,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-90-masculino-CN8490-003-1.jpg"
    },  {
      nome:"Tênis Nike SuperRep Go 2",
      preco:"R$ 419,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-m-nike-superrep-go-2-CZ0604-010-1.jpg"
    },  {
      nome:"Tênis Nike Air Zoom Vomero 15",
      preco:"R$ 579,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-zoom-vomero-15-masculino-CU1855-103-1.jpg"
    },  {
      nome:"Tênis Nike Venture Runner",
      preco:"R$ 319,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-venture-runner-CK2944-008-1.jpg"
    },  {
      nome:"Tênis Nike Legend Essential 2",
      preco:"R$ 319,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-legend-essential-2-CQ9356-016-1.jpg"
    },  {
      nome:"Tênis Nike Court Legacy",
      preco:"R$ 209,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-court-legacy-masculino-CU4150-102-1.jpg"
    },  {
      nome:"Tênis Nike Legend Essential 2",
      preco:"R$ 239,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-legend-essential-2-CQ9356-016-1.jpg"
    },  {
      nome:"Tênis Nike Air Max 95",
      preco:"R$ 579,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-95-masculino-CZ0191-001-1.jpg"
    },  {
      nome:"Tênis Nike Air Force 1 '07 Premium",
      preco:"R$ 669,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-force-1-07-premium-masculino-CZ1631-100-1-11624978956.jpg"
    },  {
      nome:"Tênis Nike Air Force 1 '07 Premium",
      preco:"R$ 549,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-air-force-1-07-prm-es-DJ6192-001-1.jpg"
    },  {
      nome:"Tênis Nike Reposto",
      preco:"R$ 349,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-reposto-CZ5631-014-1.jpg"
    },  {
      nome:"Tênis Nike React Infinity Run Flyknit 2 A.I.R. Kelly Anna London",
      preco:"R$ 679,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-react-infinity-run-flyknit-2-air-kelly-anna-london-masculino-CZ3602-400-1.jpg"
    },  {
      nome:"Tênis Nike Air Max 95",
      preco:"R$ 579,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-95-masculino-CZ0191-001-1.jpg"
    },  {
      nome:"Tênis Nike Zoom Span 3",
      preco:"R$ 309,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-zoom-span-3-masculino-CQ9269-015-1.jpg"
    },  {
      nome:"Tênis Nike Air Max 90",
      preco:"R$ 399,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-90-masculino-DB3915-003-1.jpg"
    },  {
      nome:"Tênis Nike Revolution 5 Premium",
      preco:"R$ 269,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-revolution-5-prm-CV0159-019-1.jpg"
    },  {
      nome:"Tênis Nike Wearallday",
      preco:"R$ 269,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-wearallday-masculino-CJ1682-004-1.jpg"
    },  {
      nome:"Tênis Nike Air Max 90 Edição Especial",
      preco:"R$ 499,99",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-90-edicao-especial-masculino-DD5481-735-1.jpg"
    },  {
      nome:"Tênis Nike Quest 3 Premium",
      preco:"R$ ",
      descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
      img:"https://images.lojanike.com.br/320x320/produto/tenis-nike-quest-3-prm-CV0150-015-1-11623939047.jpg"
    },  
     
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
