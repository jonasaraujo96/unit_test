describe('Teste do toContain', () => {
    it('Deve demonstrar o uso do toContain', () => {
        const array = ['a', 'b', 'c', 'd'];
        const string = 'Teste 123';

        expect(array).toContain('c');
        expect(array).not.toContain('f');
        expect(string).toContain('Teste');
    })
});