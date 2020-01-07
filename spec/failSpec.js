describe('Teste do failSpec', () => {
    it('Deve demonstrar o uso do failSpec', () => {
        const operacao = (executar, callback) => {
            if (executar) {
                callback();
            }
        };

        operacao(false, () => {
            fail('Não deve executar função de callback');
        })
    })
});