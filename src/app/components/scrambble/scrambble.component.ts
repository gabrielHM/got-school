import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrambble',
  templateUrl: './scrambble.component.html',
  styleUrls: ['./scrambble.component.scss']
})
export class ScrambbleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ELEMENT_DATA = [
    {word: "vinegar", definition: 'dilute acetic acid', type: 'noun'},
    {word: "ball", definition: 'a lavish dance requiring formal attire', type: "noun"},
    {word: "violet", definition: 'of a color intermediate between red and blue', type: "adjective"},
    {word: "spring", definition: 'the elasticity of something that can be stretched and returns to its original length', type: "noun"},
    {word: "masterpiece", definition: 'the most outstanding work of a creative artist or craftsman', type: "noun"},
    {word: "dig", definition: 'turn up, loosen, or remove earth', type: "verb"}
  ];
    displayedColumns: string[] = ['word', 'definition', 'type'];
    dataSource = this.ELEMENT_DATA;
  }
  


// // HAY
// ["No sé qué hay para cenar, pero me apetece pasta.",
// "Hoy hay que ir a comprar un paraguas.",
// "No te olvides que hay que hacer los deberes pronto.",

// "Hay que ir a la revisión médica, te toca la vacuna.",
// "Tenemos que mirar ya mismo si todavía hay entradas para ver la película."];

// // AHÍ
// ["María ha dejado sus libros ahí y se ha ido.",
// "Si vas a la tienda de ahí seguro que lo encuentras.",
// "Mira, ahí está tu madre.",
// "En la habitación de ahí podrás dejar tus cosas.",
// "Puedes ir por ahí, pero también puedes ir por un camino más corto por aquí."];

// // Ay
// ["¡Ay, qué pena! Su partida me dejo muy triste.",
// "¡Ay cuidado! La plancha está caliente y te puedes quemar.",
// "Que tristeza, ay Dios mío.",
// "¡Ay! Cuidado con la olla que está en el fuego.",
// "¡Ay Dios mío! Se me olvidaba la cita con el médico.",
// "¡Ay! Me has hecho daño, ten cuidado."];
