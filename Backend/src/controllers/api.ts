import { Request, Response, NextFunction } from "express";




export function getUsersAdmin(request: Request, response: Response) {
	response.status(200).json('Sorry, cant find that');
}
