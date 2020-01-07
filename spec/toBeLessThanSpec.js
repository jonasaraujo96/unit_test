describe('Teste do toBeLessThan', () => {
    it('Deve demonstrar o uso do toBeLessThan', () => {
        const n1 = 5;
        const n2 = 10;

        expect(n1).toBeLessThan(10);
        expect(n2).not.toBeLessThan(10);
        expect(n2).not.toBeLessThan('10');
    })
});