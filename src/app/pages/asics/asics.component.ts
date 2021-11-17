import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asics',
  templateUrl: './asics.component.html',
  styleUrls: ['./asics.component.css']
})
export class AsicsComponent implements OnInit {

produtos:any = [
  {
    nome:"TÊNIS ASICS ROADBLAST TOKYO",
    preco:"R$ 569,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/290789-1000-1000/1012A942_600_SR_RT_GLB_PNG_1280x1280-JPG.jpg?v=637481487678170000"
  },  {
    nome:"TÊNIS ASICS EVORIDE",
    preco:"R$ 419,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/326736-1000-1000/1011B017_402_SR_RT_GLB.jpg?v=637631083512430000"
  },  {
    nome:"TÊNIS ASICS GEL-KIHAI 2 ",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/337876-1000-1000/1011B100.023-1.jpg?v=637701639394570000"
  },  {
    nome:"TÊNIS ASICS PATRIOT",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/308431-1000-1000/1011B099.021.jpg?v=637552325949470000"
  },  {
    nome:"TÊNIS ASICS GEL-CUMULUS 22 LITE-SHOW",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/275035-1000-1000/1012A945_100_SR_RT_PNG_1280x1280-JPG.jpg?v=637393976603500000"
  },  {
    nome:"TÊNIS ASICS TIGER RUNNER",
    preco:"R$ 209,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/337460-1000-1000/1202A174_100_SR_RT_GLB.jpg?v=637695620536470000"
  },  {
    nome:"TÊNIS ASICS SKYCOURT ",
    preco:"R$ 239,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/293685-1000-1000/1201A089_101_SR_RT_GLB_PNG_1280x1280-JPG.jpg?v=637495948905030000"
  },  {
    nome:"TÊNIS ASICS GEL-LYTE III OG",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/237938-1000-1000/1192A178_100_SR_RT_1280x1280-JPG.jpg?v=637159131226130000"
  },  {
    nome:"TÊNIS ASICS TARTHER BLAST",
    preco:"R$ 669,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/296819-1000-1000/1201A066_028_SR_RT_GLB_PNG_1280x1280-JPG.jpg?v=637496884064430000"
  },  {
    nome:"TÊNIS ASICS GEL-NIMBUS 23",
    preco:"R$ 549,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/276635-1000-1000/1011B004_020_SR_RT_GLB_PNG_1280x1280-JPG.jpg?v=637457159610200000"
  },  {
    nome:"TÊNIS ASICS BUZZ 4 BRA",
    preco:"R$ 349,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/270914-1000-1000/1014A163.003.jpg?v=637339626418370000"
  },  {
    nome:"TÊNIS ASICS NOOSA TRI 13 ",
    preco:"R$ 679,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/322800-1000-1000/1011B021_101_SR_RT_GLB.jpg?v=637618047376200000"
  },  {
    nome:"TÊNIS ASICS GEL-KINSEI OG",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/275183-1000-1000/1022A259_020_SR_RT_PNG_1280x1280-JPG.jpg?v=637394876162730000"
  },  {
    nome:"TÊNIS ASICS NOVABLAST ",
    preco:"R$ 309,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/321330-1000-1000/1011B306_960_SR_RT_GLB.jpg?v=637617794779400000"
  },  {
    nome:"TÊNIS ASICS GEL-1090",
    preco:"R$ 399,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/329356-1000-1000/1202A305_101_SR_RT_GLB.jpg?v=637656070635830000"
  },  {
    nome:"TÊNIS ASICS GEL-1090",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/329279-1000-1000/1201A484_020_SR_RT_GLB.jpg?v=637656070289330000"
  },  {
    nome:"TÊNIS ASICS EVORIDE",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/326736-1000-1000/1011B017_402_SR_RT_GLB.jpg?v=637631083512430000"
  },  {
    nome:"TÊNIS ASICS GEL-NIMBUS",
    preco:"R$ 499,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/335595-1000-1000/1011B004_407_SR_RT_GLB.jpg?v=637687188360900000"
  },  {
    nome:"TÊNIS ASICS JAPAN L",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://www.asics.com.br/arquivos/ids/295088-1000-1000/1201A090_100_SR_RT_GLB_PNG_1280x1280-JPG.jpg?v=637496249859200000"
  },  {
    nome:"TÊNIS ASICS GEL-KINSEI BLAST",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://asicsbr.vteximg.com.br/arquivos/asics_gel-kinsei-blast_destaque.jpg?v=637715554748300000"
  },  
   
]
constructor() { }


ngOnInit(): void {
}

}
