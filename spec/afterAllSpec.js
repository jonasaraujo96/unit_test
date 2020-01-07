describe('Teste do afterAll', () => {
    let contador = 0;

    afterAll(() => {
        contador = 10;
    });

    it('deve garantir o valor 0 para o contador', () => {
        expect(contador).toEqual(0);
    });
});