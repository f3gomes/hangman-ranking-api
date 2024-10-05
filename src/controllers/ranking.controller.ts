import { Request, Response } from "express";
import { createRanking, findRanking } from "../services/ranking.service";

export const getRanking = async (req: Request, res: Response) => {
  await findRanking(req, res);
};

export const postRanking = async (req: Request, res: Response) => {
  await createRanking(req, res);
};
