describe('Teste do toBeDefined', () => {
    it('Deve demonstrar o uso do toBeDefined', () => {
        const n1 = 10;

        expect(n1).toBeDefined();

        expect(null).toBeDefined();
        expect(NaN).toBeDefined();
    })
});