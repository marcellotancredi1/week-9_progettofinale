class smartphone {
    saldo: number;
    _numerochiamate: number = 0;
    _costoPerMinuto: number = 0.20;
  //_minuti: any = (Math.floor( Math.random()*100));     AVREI VOLUTO DARE UN VALORE RANDOM AL MINUTAGGIO DELLE SINGOLE CHIAMATE MA NON RIESCO A COLLEGARE IL Math.floor ALLA DURATA CHIAMATE

    constructor(saldo: number /* minuti: any */) {
        this.saldo = saldo;
    //  this._minuti = minuti;
    }

    public _saldo(): string {
        return ('Il saldo è:' + ' ' + this.saldo + '\u20AC');
    }

    public ricarica404(importo: number): any {         //any PER FAR COMPARIRE ANCHE IL MESSAGGIO
        return ('Hai ricaricato' + ' ' + (importo) + '\u20AC'+ '. Il saldo aggiornato è:' + ' ' + (this.saldo + importo) + '\u20AC');
    }

    public chiamate(minuti:number): any {

        if (this.saldo >= 0.20) {
          let costo = minuti * this._costoPerMinuto;
          this.saldo -= costo;
          this._numerochiamate+=1;
        }
        else if (this.saldo < 0.20) {
            alert("Hai finito il credito");
    }
    }

    /*     public numero404(): any {           
        return ('Servizio 404:' + ' ' +'Il tuo nuovo credito è' + ' ' + (this.saldo) + '\u20AC');    
    //  this.saldo = this.saldo + importo;
    }; */

    public get numerochiamate(): number {
        return this.numerochiamate;
    }
    public azzeraChiamate(): void {
        this._numerochiamate=0;
    }

}

//let minuti =  (Math.floor( Math.random()*100));
   

let FirstUser = new smartphone(10);
//FirstUser.chiamate
let SecondUser = new smartphone(20);
let ThirdUser = new smartphone(30);
console.log(FirstUser,SecondUser,ThirdUser);

console.log(FirstUser._saldo());
console.log(FirstUser.chiamate(3));     //VALORE IN chiamate CORRISPONDE A MINUTI
//console.log(FirstUser.azzeraChiamate());
console.log(FirstUser.ricarica404(4));
console.log(FirstUser._saldo());


//console.log(FirstUser.numero404());

