import {Request, Response} from 'express'
import db from '../database/connectio';

export default class ConnectionsController{
    async index(req:Request, res:Response){
        const totalConnections = await db('connection').count('* as total')
        const {total} = totalConnections[0];
        return res.json({total});
    }
    async create(req:Request, res:Response){
        const {user_id} =req.body;
        await db('connection').insert({
            user_id
        });
        return res.status(201).send()
    }
}