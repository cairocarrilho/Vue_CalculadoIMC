options = {
  el: '#app',
  data:{
    peso:'',
    altura:'',
    imc: 0,
    color: 'verde', 
    
    niveis : [
      "Abaixo do Peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3"
    ],
    figuras : [
      '/assets/img/foto_mulher_obesidade3.jpg',
      '/assets/img/foto_mulher_obesidade2.jpg',
      '/assets/img/foto_mulher_obesidade1.jpg',
      '/assets/img/foto_mulher_acima_do_peso.jpg',
      '/assets/img/Foto_mulher_peso_normal.jpg',
      '/assets/img/Foto_mulher_abaixo_do_peso.jpg',
    ],

   msg:''

  },

  methods :{
    calcularIMC(){
     this.imc = parseInt(this.peso /(this.altura**2))
     this.msg = this.imc.toFixed(2)
    }
  },

  computed:{
    
    msgClass() {
      if (this.imc > 39.9) return this.niveis[5];
      else if (this.imc >= 34.9) return this.niveis[4];
      else if (this.imc >= 29.9) return this.niveis[3];
      else if (this.imc >= 24.9) return this.niveis[2];
      else if (this.imc >= 18.5) return this.niveis[1];
      else return this.niveis[0];
    },


    mensagem(){
      switch (this.msgClass) {
        case this.niveis[5]:
          return `O seu imc é ${this.imc.toFixed(2)} ${this.msgClass} </br></br> <img src="${this.figuras[0]}">`;
        case this.niveis[4]:
          return `O seu imc é ${this.imc.toFixed(2)} ${this.msgClass} </br></br> <img src="${this.figuras[1]}">`;
        case this.niveis[3]:
          return `O seu imc é ${this.imc.toFixed(2)} ${this.msgClass} </br></br> <img src="${this.figuras[2]}">`;
        case this.niveis[2]:
          return `O seu imc é ${this.imc.toFixed(2)} ${this.msgClass} </br></br> <img src="${this.figuras[3]}" >`;
        case this.niveis[1]:
          return `O seu imc é ${this.imc.toFixed(2)} ${this.msgClass} </br></br> <img src="${this.figuras[4]}">`;
        case this.niveis[0]:
          return `O seu imc é ${this.imc.toFixed(2)} ${this.msgClass} </br></br> <img src="${this.figuras[5]}">`;
      }
    } 
 
  },
};

const vm = new Vue(options);