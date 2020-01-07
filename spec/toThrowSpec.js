describe('Teste do toThrow', () => {
    it('Deve demonstrar o uso do toThrow', () => {
        const error = () => {
            teste * 10
        };

        expect(error).toThrow();
    })
});