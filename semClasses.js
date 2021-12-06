// 2 boneco ataque - dano 30 - 52
// 100 hp

var boneco1 = {
  nome: "icaro",
  hp: 100,
  dano: 5,
};

var boneco2 = {
  nome: "itj",
  hp: 100,
  dano: 6,
};

function atkPlayerA() {
  var dano1 = Math.random() * 10 * boneco1.dano;
  boneco2.hp -= dano1;

  return boneco2.hp;
}

function atkPlayerB() {
  var dano2 = Math.random() * 10 * boneco2.dano;
  boneco1.hp -= dano2;

  return boneco1.hp;
}

function criarJogo() {
  while (boneco1.hp > 0 || boneco2.hp > 0) {
    atkPlayerA();

    if (boneco2.hp <= 0) {
      console.log(`${boneco2.nome} faliceu`);
      break;
    }

    atkPlayerB();

    if (boneco1.hp <= 0) {
      console.log(`${boneco1.nome} faliceu`);
      break;
    }
  }
}

criarJogo();
