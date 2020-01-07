xdescribe('Teste do suite externo', () => {
    let contadorExterno = 0;

    beforeEach(() => {
        contadorExterno++;
    });

    it('deve conter 1 para o contadorExterno', () => {
        expect(contadorExterno).toEqual(1);
    });


    describe('Suite interna', () => {
        let contadorInterno = 0;

        beforeEach(() => {
            contadorInterno++
        });

        it('deve validar o valor dos contadores', () => {
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        });
    })
});