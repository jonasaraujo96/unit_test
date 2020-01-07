describe('Teste do toBeTruthy', () => {
    it('Deve demonstrar o uso do toBeTruthy', () => {
        const n1 = 1;
        let n2;

        expect(n1).toBeTruthy();
        expect(n2).not.toBeTruthy();
    })
});