export class Model {
 user;
 items;
 constructor() {
   //instanziona un model di prova che ha un nome con user
   //e cose da fare con item
   this.user = "Adam";
   this.items = [new TodoItem("Buy Flowers", false),
                 new TodoItem("Get Shoes", false),
                 new TodoItem("Collect Tickets", false),
                 new TodoItem("Call Joe", false)]
 }
}
export class TodoItem {
 action;//qualcosa da fare
 done;//boleano se è stato fatto o no

 constructor(action, done) {
   this.action = action;
   this.done = done;
 }
}
