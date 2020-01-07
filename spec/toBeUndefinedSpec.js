describe('Teste do toBeUndefined', () => {
    it('Deve demonstrar o uso do toBeUndefined', () => {
        let n1;

        expect(n1).toBeUndefined();
        expect(undefined).toBeUndefined();
    })
});