import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lacoste',
  templateUrl: './lacoste.component.html',
  styleUrls: ['./lacoste.component.css']
})
export class LacosteComponent implements OnInit {

produtos:any = [
  {
    nome:"Tênis masculino Run Breaker em camurça",
    preco:"R$ 569,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw6e072fd9/40SMA0001_T66_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino Ace Lift em couro e camurça",
    preco:"R$ 419,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw06ca8f72/40SFA0021_1R5_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis infantil LT Dash em tecido",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw3e896945/39SUJ0006_DG5_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis infantil LT Dash em tecido",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw30cc499a/39SUJ0006_2G9_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis masculino LT Sense em tecido e tela",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw9a1ddcba/39SMA0038_092_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis masculino LT Fit em tecido e material sintético",
    preco:"R$ 209,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwca8e8686/39SMA0025_02H_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis masculino Subra Impact em tecido e camurça",
    preco:"R$ 239,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw34fb5034/39SMA0014_WG1_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino G80 OG em couro e tecido",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw99bf2f6a/39SFA0071_T02_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino Storm 96 em tecido",
    preco:"R$ 669,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwfd4bf828/39SFA0054_WP2_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino T-Clip em couro e camurça",
    preco:"R$ 549,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw803aa423/39SFA0052_2Q9_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino LT Sense em tecido",
    preco:"R$ 349,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw1acaf04b/39SFA0044_GN1_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino Storm 96 em tecido e camurça",
    preco:"R$ 679,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwbea54c41/39SFA0043_PW1_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino Court Slam Dynamic",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw66b19f8b/39SFA0041_21G_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino LT Fit-Flex em tecido",
    preco:"R$ 309,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw07eb48d0/39SFA0003_21G_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino LT Fit em tecido",
    preco:"R$ 399,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw88c5d158/39SFA0001_14X_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino Subra Impact em tecido",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dwa6ab1abd/39SFA0028_J18_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis infantil Sideline em material sintético",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw09c7575a/39CUJ0020_454_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis feminino LT Fit-Flex em tecido",
    preco:"R$ 499,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw75beaee1/39SFA0003_J18_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis infantil Partner em tecido e material sintético",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw44c326bb/39SUI0012_407_01.jpg?imwidth=645&impolicy=product"
  },  {
    nome:"Tênis infantil LT Dash em tecido",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BRECOM-Site/Sites-master/pt_BR/dw3e896945/39SUJ0006_DG5_01.jpg?imwidth=645&impolicy=product"
  },  
]
constructor() { }

ngOnInit(): void {
}

}