describe('Teste do objeto spy', () => {
    const calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        },

        subtrair: (n1, n2) => {
            return n1 - n2;
        },

        dividir: (n1, n2) => {
            return n1 / n2;
        },

        multiplicar: (n1, n2) => {
            return n1 * n2;
        },
    };

    beforeAll(() => {
        spyOn(calculadora, 'somar');
        spyOn(calculadora, 'subtrair').and.returnValue(10);
        spyOn(calculadora, 'dividir').and.callFake((n1, n2) => { return n1 * n2 });
        spyOn(calculadora, 'multiplicar').and.throwError('Erro!');
    });

    it('Deve possuir o método somar como não definido', () => {
        expect(calculadora.somar(1 ,1)).toBeUndefined();
    });

    it('Deve chamar o método somar ao menos uma vez', () => {
        expect(calculadora.somar).toHaveBeenCalled();
    });

    it('Deve chamar o método somar uma vez', () => {
        expect(calculadora.somar).toHaveBeenCalledTimes(1);
    });

    it('Deve chamar o método somar com 1, 1', () => {
        expect(calculadora.somar).toHaveBeenCalledWith(1,1);
    });

    it('Deve chamar o método subtrair e retornar 10', () => {
        expect(calculadora.subtrair(1,1)).toEqual(10)
    });

    it('Deve chamar o método dividir e retornar 10', () => {
        expect(calculadora.dividir(2,5)).toEqual(10)
    });

    it('Deve chamar o método multiplicar e retornar um erro', () => {
        expect(() => { calculadora.multiplicar(2,5) }).toThrowError('Erro!');
    });

    it('Deve demonstrar o uso do calls.any', () => {
        calculadora.somar(1, 2);
        expect(calculadora.somar.calls.any()).toBeTruthy();
    });

    xit('Deve demonstrar o uso do calls.count', () => {
        calculadora.somar(1, 2);
        expect(calculadora.somar.calls.count).toEqual(4);
    });

    it('Deve demonstrar o uso do calls.argsFor', () => {
        calculadora.somar(2, 2);
        expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
    });

    it('Deve demonstrar o uso do calls.allArgs', () => {
        expect(calculadora.somar.calls.allArgs()).toBeDefined();
    });

    it('Deve demonstrar o uso do calls.all', () => {
        expect(calculadora.somar.calls.all()).toBeDefined();
    });

    it('Deve demonstrar o uso do calls.mostRecent', () => {
        expect(calculadora.somar.calls.mostRecent()).toBeDefined();
    });

    it('Deve demonstrar o uso do calls.first', () => {
        expect(calculadora.somar.calls.first()).toBeDefined();
    });

    it('Deve demonstrar o uso do calls.reset', () => {
        calculadora.somar.calls.reset();
        expect(calculadora.somar.calls.first()).toBeUndefined();
    });

// ---------------------------------------------------------------------------------------------------------------------

    let somar;

    beforeAll(() => {
        somar = jasmine.createSpy("somar");
    });

    it('Deve demonstrar o uso do jasmine.createSpy', () => {
       somar(1, 2);
       expect(somar).toHaveBeenCalled();
    });

// ---------------------------------------------------------------------------------------------------------------------

    let calculadora2;

    beforeAll(() => {
       calculadora2 = jasmine.createSpyObj("calculadora", ['somar', 'subtrair']);
    });

    it('Deve demonstrar o uso do jasmine.createSpyObj', () => {
        calculadora2.somar(1, 2);
        expect(calculadora2.somar).toHaveBeenCalled();
    });

// ---------------------------------------------------------------------------------------------------------------------

     let dobro;

     beforeAll(() => {
         dobro = jasmine.createSpy('dobro');
     });

     it('Deve demonstrar o uso do jasmine.any', () => {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
     });

    it('Deve demonstrar o uso do jasmine.anything', () => {
        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
    });

// ---------------------------------------------------------------------------------------------------------------------

    let carro;

    beforeAll(() => {
        carro = {
          'ano': 2020
        };
    });

    it('Deve demonstrar o uso do jasmine.objectContaining', () => {
        expect(carro).toEqual(jasmine.objectContaining({'ano': 2020}));
    });
});