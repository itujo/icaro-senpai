// 2 boneco ataque - dano 30 - 52
// 100 hp

class Boneco {
  constructor(nome, hp, dano) {
    this.nome = nome;
    this.hp = hp;
    this.dano = dano;
  }

  ataque(alvo) {
    var dano1 = Math.random() * 10 + 1 * this.dano;
    alvo.hp -= dano1;

    return alvo.hp;
  }
}

const itj = new Boneco("itj", 100, 2);
const icaro = new Boneco("icaro", 100, 2);

function criarJogo() {
  while (itj.hp > 0 || icaro.hp > 0) {
    itj.ataque(icaro);

    if (icaro.hp <= 0) {
      console.log(`${icaro.nome} faliceu`);
      break;
    }

    icaro.ataque(itj);

    if (itj.hp <= 0) {
      console.log(`${itj.nome} faliceu`);
      break;
    }
  }
}

criarJogo();
