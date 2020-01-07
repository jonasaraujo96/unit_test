describe('Teste do toMatch', () => {
    it('Deve validar o uso do toMatch', () => {
        const texto = 'Teste com Jasmine';

        expect(texto).toMatch('Jasmine');
        expect(texto).toMatch(/jasmine/i);
        expect('12345-678').toMatch(/^\d{5}-\d{3}$/);
    })
});