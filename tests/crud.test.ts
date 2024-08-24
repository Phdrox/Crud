import axios from "axios";

describe('Testando a funcionalidade da Api',()=>{
    it('Requisição GET',()=>{
        axios.get('http://localhost:8080').then(response=>{
            expect(response.data).toEqual([
                {"id":2,"nome":"Pedro","idade":23},{"id":3,"nome":"Thaysa","idade":30},{"id":4,"nome":"Leo","idade":27},{"id":5,"nome":"Laisa","idade":21},
                {"id":6,"nome":"Lara","idade":23},{"id":7,"nome":"Larissa","idade":28},{"id":8,"nome":"José","idade":45},{"id":9,"nome":"João","idade":57}
            ])
        })
    })

    it('Requisição POST',()=>{
        axios.post('http://localhost:8080',{nome:'João',idade:57}).then(res=>{
           expect(res.data).toEqual({"message":"Enviado com sucesso"})
        })
    })
    
    it('Requisição PUT',()=>{
        axios.put('http://localhost:8080/3',{nome:'Thaysa',idade:30}).then(res=>{
         expect(res.data).toEqual({"message":"Atualizado com sucesso"})
        })
    })
    
    it('Requisição GET com Id especificado',()=>{
        axios.get('http://localhost:8080/7').then(res=>{
         expect(res.data).toEqual({"id":7,"nome":"Larissa","idade":28})
        })
    })
    
     it('Requisição DELETE',()=>{
        axios.delete('http://localhost:8080/9').then(res=>{
         expect(res.data).toEqual({"message":"Deletado com sucesso"})
        })
    })
})