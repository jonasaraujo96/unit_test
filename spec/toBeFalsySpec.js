describe('Teste do toBeFalsy', () => {
    it('Deve demonstrar o uso do toBeFalsy', () => {
        const n1 = 1;
        let n2;

        expect(n1).not.toBeFalsy();
        expect(n2).toBeFalsy();
    })
});