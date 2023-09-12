import express, { Request , Response} from "express";
import Player from "./src/entidades/player";
const app = express();

app.use(express.json());

app.get("/hello",hello);

function hello(req: Request, res : Response): void{
    const player = new Player("Dev",19);
    res.send(player);

}
app.listen(3000, ()=>{
    console.log("Servidor rodando na rota http://local")
})