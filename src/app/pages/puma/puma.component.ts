import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puma',
  templateUrl: './puma.component.html',
  styleUrls: ['./puma.component.css']
})
export class PumaComponent implements OnInit {

produtos:any = [
  {
    nome:"Tênis PUMA Cali Feminino",
    preco:"R$ 569,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369155/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis RS-X Futurverse",
    preco:"R$ 419,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380460/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis RS-X³ Wildcats Feminino",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/373953/02/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Wild Rider Rollin",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/381517/04/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Suede Classic XXI",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/385378/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis RS-X Futurverse",
    preco:"R$ 209,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380460/02/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Smash v2",
    preco:"R$ 239,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/367147/60/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis RS-Z",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/381640/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Cali Sport Wildcat",
    preco:"R$ 669,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/373909/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis RS-X Hard Drive",
    preco:"R$ 549,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369818/03/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis RS-Z",
    preco:"R$ 349,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/381640/04/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis X-RAY 2 Square",
    preco:"R$ 679,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/368651/18/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Flyer Runner",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/195060/31/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Future Rider Soft",
    preco:"R$ 309,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374665/02/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Cali Sport Wildca",
    preco:"R$ 399,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/373909/02/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Mayze Feminino",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/381983/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis CA Pro Classic",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380190/01/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis Suede Classic XXI",
    preco:"R$ 499,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374915/06/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  {
    nome:"Tênis ST Runner v2",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/383484/03/sv01/fnd/BRA/w/320/h/320/bg/255,255,255"
  },  
   
]
constructor() { }

ngOnInit(): void {
}

}
