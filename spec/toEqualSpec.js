describe('Teste do toEqual', () => {
   it('Deve validar o uso do toEqual', () => {
       const obj1 = { valor: true };
       const obj2 = { valor: true };

       expect(true).toEqual(true);
       expect(obj1).toEqual(obj2);
   })
});