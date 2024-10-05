import { Request, Response } from "express";
import { Ranking } from "../models/ranking.model";

export const findRanking = async (_req: Request, res: Response) => {
  try {
    const ranking = await Ranking.find().sort({ points: -1 });
    res.status(200).json(ranking);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createRanking = async (req: Request, res: Response) => {
  try {
    const { nick, points } = req.body;

    const alreadyExists = await Ranking.findOne().where({ nick });

    if (alreadyExists) {
      const id = alreadyExists?._id.toString();
      const points = alreadyExists.points + req.body.points;

      await Ranking.findByIdAndUpdate(id, {
        points: points > 0 ? points : 0,
      });

      res.status(200).json({ message: "Updated ranking" });
    } else {
      const newRanking = new Ranking({ nick, points });

      await newRanking.save();
      res.status(201).json(newRanking);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something wrong" });
  }
};
