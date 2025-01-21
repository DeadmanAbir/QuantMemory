import { Request, Response, NextFunction } from "express";
import { ApiSuccess } from "@/utils/ApiSucess";
import { ApiError } from "@/utils/ApiError";



export function getUsersAdmin(request: Request, response: Response) {
	response.status(200).send('Sorry, cant find that');
}
