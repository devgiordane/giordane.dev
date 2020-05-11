<template>
  <div>
    <div class="row">
      <div class="col-12">
        <img
          src="../../assets/calc-imc-logo.png"
          class="img-fluid mx-auto d-block pt-2"
          style="max-height: 100px"
          alt
        />
      </div>
    </div>
    <div
      class="modal fade"
      id="ajudaPeso"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Peso em kilogramas
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-justify">
              O peso pode ser informado com casas decimais, separado por vírgula
              ou ponto.
            </p>
            <table class="table text-center">
              <tbody>
                <tr>
                  <td>84</td>
                  <td>84,3</td>
                  <td>84.8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="ajudaAltura"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Altura em Centímetros
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="text-justify">
              Para um melhor funcionamento do aplicativo, informe a altura
              apenas em centímetros e não em metros e centímetros
            </p>
            <table class="table text-center">
              <tbody>
                <thead>
                  <th scope="col">Use</th>
                  <th scope="col">Não use</th>
                </thead>
                <tr>
                  <td>169</td>
                  <td class="text-danger">1,69</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-12">
          <form v-on:submit.prevent>
            <div class="form-group row mb-0">
              <label class="col-sm-12 pb-0 mb-0">PESO EM KG</label>
              <div class="col-sm-12">
                <input
                  v-model="peso"
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="ex: 84,5"
                />
              </div>
              <div class="col-sm-12 d-flex justify-content-end">
                <small
                  class="form-text text-muted text-right p-0"
                  data-toggle="modal"
                  data-target="#ajudaPeso"
                >
                  <i class="fa fa-question-circle"></i> Ajuda
                </small>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 pb-0 mb-0">ALTURA EM CM</label>
              <div class="col-sm-12">
                <input
                  v-model="altura"
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="ex: 173"
                />
              </div>
              <div class="col-sm-12 d-flex justify-content-end">
                <small
                  class="form-text text-muted text-right p-0"
                  data-toggle="modal"
                  data-target="#ajudaAltura"
                >
                  <i class="fa fa-question-circle"></i> Ajuda
                </small>
              </div>
            </div>
            <a>
              <button
                :disabled="!peso || !altura"
                v-on:click="CalcIMC()"
                class="btn btn-block btn-lg btn-success rounded"
              >
                <i class="fa fa-calculator"></i>
                CALCULAR IMC
              </button>
            </a>
          </form>
        </div>
      </div>

      <div id="medidor" v-show="resultado.imc">
        <div class="medidor">
          <div class="barra">
            <img src="../../assets/medidor.png" alt="medidor" />
          </div>
          <div
            class="ponteiro"
            :style="
              'transform: rotate(' +
                resultado.graus * resultado.multiplicador +
                'deg);'
            "
          ></div>
        </div>
        <h3 id="resultadoN" class="text-center">{{ resultado.imc }}</h3>
        <p
          v-show="resultado.diferenca"
          class="text-center lead m-0 p-0"
          :class="resultado.diferencaCor"
        >
          <i class="fas fa-weight"></i>
          {{ resultado.diferenca }} Kg
        </p>
        <h5 class="text-center m-0 p-0">{{ resultado.descricao }}</h5>
      </div>

      <div class="px-0" v-show="resultado.imc">
        <table class="table table-sm table-bordered" style="font-size: 12px">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Resultado</th>
              <th scope="col">I.M.C.</th>
              <th scope="col">KG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div class="bolinha vermelho"></div>
              </th>
              <td>Obesidade III</td>
              <td>&#62; 40</td>
              <td>&#62; {{ pesos.p6 }} Kg</td>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <div class="bolinha vermelhoClaro"></div>
              </th>
              <td>Obesidade II</td>
              <td>35 ~ 39,99</td>
              <td>{{ pesos.p5 }} Kg ~ {{ pesos.p6 }} Kg</td>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <div class="bolinha laranja"></div>
              </th>
              <td>Obesidade I</td>
              <td>30 ~ 34,99</td>
              <td>{{ pesos.p4 }} Kg ~ {{ pesos.p5 }} Kg</td>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <div class="bolinha amarelo"></div>
              </th>
              <td>Acima do peso</td>
              <td>25 ~ 29,99</td>
              <td>{{ pesos.p3 }} Kg ~ {{ pesos.p4 }} Kg</td>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <div class="bolinha verde"></div>
              </th>
              <td>Peso normal</td>
              <td>18 ~ 24,99</td>
              <td>{{ pesos.p2 }} Kg ~ {{ pesos.p3 }} Kg</td>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <div class="bolinha azulClaro"></div>
              </th>
              <td>Abaixo do peso</td>
              <td>17 ~ 18,49</td>
              <td>{{ pesos.p1 }} Kg ~ {{ pesos.p2 }} Kg</td>
            </tr>
            <tr>
              <th>
                <div class="bolinha azul"></div>
              </th>
              <td>Muito abaixo do peso</td>
              <td>&#60; 17</td>
              <td>&#60; {{ pesos.p1 }} Kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculadora",
  data: function() {
    return {
      peso: "",
      altura: "",
      ajuda: {
        peso: false,
        altura: false,
      },
      resultado: {
        imc: "",
        descricao: "",
        diferenca: "",
        diferencaCor: "",
        graus: "",
        multiplicador: "",
      },
      pesos: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
      },
    };
  },
  methods: {
    CalcIMC: function() {
      const alt = this.altura / 100;
      const soma = this.peso / (alt * alt);
      const res = soma.toFixed(1);

      let p1 = 0;
      let p2 = 0;
      let p3 = 0;
      let p4 = 0;
      let p5 = 0;
      let p6 = 0;
      let imcTest = 0;

      while (imcTest <= 17) {
        const soma = p1 / (alt * alt);
        imcTest = soma.toFixed(1);
        p1 += 0.1;
      }
      while (imcTest <= 18.5) {
        const soma = p2 / (alt * alt);
        imcTest = soma.toFixed(1);
        p2 += 0.1;
      }
      while (imcTest <= 25) {
        const soma = p3 / (alt * alt);
        imcTest = soma.toFixed(1);
        p3 += 0.1;
      }
      while (imcTest < 30) {
        const soma = p4 / (alt * alt);
        imcTest = soma.toFixed(1);
        p4 += 0.1;
      }
      while (imcTest < 35) {
        const soma = p5 / (alt * alt);
        imcTest = soma.toFixed(1);
        p5 += 0.1;
      }
      while (imcTest < 40) {
        const soma = p6 / (alt * alt);
        imcTest = soma.toFixed(1);
        p6 += 0.1;
      }
      this.pesos.p1 = p1.toFixed(0);
      this.pesos.p2 = p2.toFixed(0);
      this.pesos.p3 = p3.toFixed(0);
      this.pesos.p4 = p4.toFixed(0);
      this.pesos.p5 = p5.toFixed(0);
      this.pesos.p6 = p6.toFixed(0);
      if (res >= 20) {
        this.resultado.graus = res - 20;
        this.resultado.multiplicador = 4.5;
      }
      if (res < 20) {
        this.resultado.graus = res - 20 - (res - 20) * 2;
        this.resultado.multiplicador = -4.5;
      }
      if (res >= 40) {
        this.resultado.graus = 20;
        this.resultado.multiplicador = 4.5;
      }

      this.resultado.diferenca = "";
      if (res < 18.5) {
        this.resultado.diferenca = (this.peso - p2).toFixed(1);
        this.resultado.diferencaCor = "text-success";
      }
      if (res > 24.99) {
        this.resultado.diferenca = (this.peso - p3).toFixed(1);
        this.resultado.diferencaCor = "text-danger";
      }

      this.resultado.imc = res;

      if (res < 17) {
        this.resultado.descricao = "Muito abaixo do peso";
      }
      if (res >= 17 && res <= 18.49) {
        this.resultado.descricao = "Abaixo do peso";
      }
      if (res >= 18.5 && res <= 24.99) {
        this.resultado.descricao = "Peso normal";
      }
      if (res >= 25 && res <= 29.99) {
        this.resultado.descricao = "Acima do peso";
      }
      if (res >= 30 && res <= 34.99) {
        this.resultado.descricao = "Obesidade I";
      }
      if (res >= 30 && res <= 34.99) {
        this.resultado.descricao = "Obesidade I";
      }
      if (res >= 35 && res <= 39.99) {
        this.resultado.descricao = "Obesidade II";
      }
      if (res >= 40) {
        this.resultado.descricao = "Obesidade III";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.medidor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.ponteiro {
  height: 100px;
  width: 2px;
  border-radius: 10px;
  background-color: #4e4e4e;
  transform-origin: bottom;
  margin-bottom: 3px;
}
.barra {
  margin-bottom: -200px;
  width: 200px;
  height: 200px;
}
.barra img {
  height: auto;
  width: 200px;
}
.bolinha {
  height: 20px;
  width: 20px;
  border-radius: 50vh;
  &.azul {
    background: #5599fe;
  }
  &.azulClaro {
    background: #72d4fb;
  }
  &.verde {
    background: #a7d634;
  }
  &.amarelo {
    background: #ffe539;
  }
  &.laranja {
    background: #ffa750;
  }
  &.vermelhoClaro {
    background: #ff5555;
  }
  &.vermelho {
    background: #dd1111;
  }
}</style
>>
