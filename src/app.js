import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: {},
      euroAmount: 0,
      selectedCurrency: 0,
      currencyAmount: 0,
      selectedCurrencyToEuro: 0
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencies = currencies)
      }
    },
    computed: {
      euroToCurrency: function(){
          const result = this.euroAmount * this.selectedCurrency;
          return result.toFixed(2);
        },
        currencyToEuro: function(){
          const currency = this.currencyAmount / this.selectedCurrencyToEuro;
          return currency.toFixed(2);
        }
    }
  });
});
