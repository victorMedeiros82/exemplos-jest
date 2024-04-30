describe('Soma', () => {
    describe('Cenarios de Teste', () => {
        const cenarios = [
            {a:2 , b:2, result:4},
            {a:10 , b:2, result:12},
            {a:0 , b:0, result:0},
            {a:'2' , b:'2', result:4},
            {a:'10' , b:'2', result:12},
            {a:'0' , b:'0', result:0},
            {a:'2' , b:2, result:4},
            {a:'10' , b:2, result:12},
            {a:'0' , b:0, result:0},
            {a:2 , b:'2', result:4},
            {a:10 , b:'2', result:12},
            {a:0 , b:'0', result:0},
            {a:'abc' , b:'2', result:Error},
            {a:0 , b:0, result:0},
            {a:0 , b:0, result:0},
        ]
    });
});