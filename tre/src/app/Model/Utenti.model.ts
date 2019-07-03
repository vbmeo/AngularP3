export class Utenti {
  public id: number;
  public nome: string;
  public citta: string;

  constructor(nome:string, citta:string){
    this.nome=nome;
    this.citta=citta;
    this.id = Math.floor(Math.random() * 255) + 1  ;
  }


}
