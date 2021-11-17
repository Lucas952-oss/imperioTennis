import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css']
})
export class AdidasComponent implements OnInit {

produtos:any = [
  {
    nome:"TÊNIS BARRICADE",
    preco:"R$ 569,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/11d757025bad456f831dad410088dcbc_9366/tenis-barricade.jpg"
  },  {
    nome:"TÊNIS DEFIANT GENERATION MULTICOURT",
    preco:"R$ 419,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/11d757025bad456f831dad410088dcbc_9366/tenis-barricade.jpg"
  },  {
    nome:"TÊNIS GAMECOURT",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/37031f245e4645d690adad0800c530d2_9366/tenis-gamecourt.jpg"
  },  {
    nome:"TÊNIS GAMECOURT",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9acf0f804f1249dbb8e0ad2f00db77fe_9366/tenis-gamecourt.jpg"
  },  {
    nome:"Tênis Courtsmash",
    preco:"R$ 319,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b7841cfea8914cea815fac0800f54000_9366/tenis-courtsmash.jpg"
  },  {
    nome:"Tênis CourtJam Bounce",
    preco:"R$ 209,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c71ef82e06e74e2d88d2ac77013f799e_9366/tenis-courtjam-bounce.jpg"
  },  {
    nome:"Tênis GameCourt",
    preco:"R$ 239,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/26e74ec5c6e9423e8e72ad0800c4fe1e_9366/tenis-gamecourt.jpg"
  },  {
    nome:"Tênis GRAND COURT",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8105e36c5f0644e882d2ac6f00d98716_9366/tenis-grand-court.jpg"
  },  {
    nome:"Tênis Superstar Slip-On",
    preco:"R$ 669,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/606c6e94afde4060a083ac010155a8c4_9366/tenis-superstar-slip-on.jpg"
  },  {
    nome:"TÊNIS SLIP-ON SUPERSTAR",
    preco:"R$ 549,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b75a870da37c46cfa004ab5900e84e9c_9366/tenis-slip-on-superstar.jpg"
  },  {
    nome:"Tênis X9000L3",
    preco:"R$ 349,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0ec18c3b8be34b7fa223abba00fd2309_9366/tenis-x9000l3.jpg"
  },  {
    nome:"Tênis Courtpoint",
    preco:"R$ 679,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6c6a68d67281432fa5cfac09010d64be_9366/tenis-courtpoint.jpg"
  },  {
    nome:"Tênis U_PATH RUN",
    preco:"R$ 579,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9b4397683fa6456e9b53acad0115de44_9366/u_path-run.jpg"
  },  {
    nome:"TÊNIS ZX 2K BOOST",
    preco:"R$ 309,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f2845cf7924f46bca201ac4d01391384_9366/tenis-zx-2k-boost.jpg"
  },  {
    nome:"Tênis X9000L4",
    preco:"R$ 399,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc215fb17b754c1cb010ac3c00226601_9366/tenis-x9000l4.jpg"
  },  {
    nome:"Tênis NMD_R1 Primeknit",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8cc977a48edb4e0bb785ac6b011ddc5e_9366/tenis-nmd_r1-primeknit.jpg"
  },  {
    nome:"Tênis adidas Sleek Vegan",
    preco:"R$ 269,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7e0817b64ca14e81b5fbabac010e657c_9366/tenis-adidas-sleek-vegan.jpg"
  },  {
    nome:"Tênis U_Path Run",
    preco:"R$ 499,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc0581c87b894755b3acac9200bb9c02_9366/tenis-u_path-run.jpg"
  },  {
    nome:"Tênis Nite Jogger Tech",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b9a5bb258efb433aab87ac8d010b4fd9_9366/FV9158_00_plp_standard.jpg"
  },  {
    nome:"Tênis Supernova",
    preco:"R$ 359,99",
    descricao:"Diversas Cores e Modelos De Acessórios Para Compor o Seu Estilo! Escolha o Modelo Que Mais Combina Com Você.",
    img:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00648ab17908427e9fe1ac840127660e_9366/tenis-supernova.jpg"
  },  
   
]
constructor() { }

ngOnInit(): void {
}

}
