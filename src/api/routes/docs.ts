import express from "express";
import { ClienteController } from "../../controllers/cliente.controller";
import { ClienteRepositoryInMemory } from "../../external/memory/cliente.repository";
import { ClienteRepositoryInMongo } from "../../external/mongo/repositories/cliente.repository";

const router = express.Router();
const swaggerSpec = require("../swagger");

router.get("/", async (req, res) => {
	res.setHeader("Content-type", "application/json");
	res.send(swaggerSpec);
});

module.exports = router;
