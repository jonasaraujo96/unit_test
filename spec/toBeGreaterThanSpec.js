describe('Teste do toBeGreaterThan', () => {
    it('Deve demonstrar o uso do toBeGreaterThan', () => {
        const n1 = 10;
        const n2 = 5;

        expect(n1).toBeGreaterThan(5);
        expect(n2).not.toBeGreaterThan(10);
        expect(n2).not.toBeGreaterThan('10');
    })
});