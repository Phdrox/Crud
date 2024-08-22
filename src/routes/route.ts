import { Request, Response, Router } from "express";
import { readFileSync, writeFileSync,} from "fs";

const router=Router();
const data=JSON.parse(readFileSync("./src/dados.json",'utf-8'));

type ItemArray={
    id:number
}

router.get('/',(req:Request,res:Response)=>{
    res.json(data);
})

router.get('/:id',(req:Request,res:Response)=>{
    const idParam=parseInt(req.params.id);
    const dataFind=data.find((item:ItemArray)=>item.id==idParam);
    isNaN(idParam)?res.sendStatus(400):dataFind===-1?res.sendStatus(404):"";
    res.json(dataFind);
})

router.post('/',(req:Request,res:Response)=>{
    var id=data.length+1;
    const {body}=req;
    var nome=body.nome;
    var idade=body.idade;
    data.push({id,nome,idade});
    writeFileSync('./src/dados.json',JSON.stringify(data),'utf-8');
    res.json({"message":"Enviado com sucesso"});
})

router.put('/:id',(req:Request,res:Response)=>{
    const idParam=parseInt(req.params.id);
    const dataFind=data.findIndex((item:ItemArray)=>item.id==idParam);
    const {body}=req;
    isNaN(idParam)?res.sendStatus(400):dataFind===-1?res.sendStatus(404):"";
    data[dataFind]={id:idParam,...body};
    writeFileSync('./src/dados.json',JSON.stringify(data),'utf-8');
    res.json({"message":"Atualizado com sucesso"});
})

router.delete('/:id',(req:Request,res:Response)=>{
    const idParam=parseInt(req.params.id);
    const dataFind=data.find((item:ItemArray)=>item.id==idParam);
    const dataIndex=data.indexOf(dataFind);
    data.splice(dataIndex,1);
    isNaN(idParam)?res.sendStatus(400):"";
    writeFileSync('./src/dados.json',JSON.stringify(data),'utf-8');
    res.json({"message":"Deletado com sucesso"});
})

export {router};