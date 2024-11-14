
new Vue({
    el: '#app',
    data: {
        comando: '',
        resultado: ''
    },
    methods: {
        executarComando() {
            this.resultado = this.comando;
        }
    }
});