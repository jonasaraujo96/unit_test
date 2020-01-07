describe('Teste do toBeNull', () => {
    it('Deve demonstrar o uso do toBeNull', () => {
        let n1 = null;

        expect(n1).toBeNull();
        expect(null).toBeNull();
    })
});