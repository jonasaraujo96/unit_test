xdescribe('Teste do xdescribe', () => {
    it('Deve validar o uso do xdescribe', () => {
        expect(true).toEqual(false);
    })
});

describe('Teste do xit', () => {
    xit('Deve validar o uso do xit', () => {
        expect(true).toEqual(false);
    })
});

describe('Teste do pending', () => {
    it('Deve validar o uso do pending', () => {
        expect(true).toEqual(false);
        pending('Teste pendente');
    })
});