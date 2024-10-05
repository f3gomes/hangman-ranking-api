import express from "express";
import { getRanking, postRanking } from "../controllers/ranking.controller";

export const rankingRoutes = express.Router();

rankingRoutes.get("/ranking", getRanking);
rankingRoutes.post("/ranking/new", postRanking);
