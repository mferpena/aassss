const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { validateBody, validateParams, validateQuery } = require("../middlewares/validation");
const defaultService = require("../services/default");

router.get("/items", 
  validateQuery(
    Joi.object({
      tipos: optional.array,
      fecha: optional.string.xl,
    })
  ),
  async (req, res) => {
    const result = await defaultService.getItems(req.query);
    res.json(result);
  }
);

router.post("/items", 
  validateBody(
    Joi.object({
      nombre: required.string.xl,
      categoria: required.string.xl,
    })
  ),
  async (req, res) => {
    const result = await defaultService.postItems(req.body);
    res.json(result);
  }
);

router.get("/items/:id", 
  validateParams(
    Joi.object({
      id: required.number,
    })
  ),
  async (req, res) => {
    const result = await defaultService.getItems(req.params);
    res.json(result);
  }
);

router.put("/items/:id", 
  validateBody(
    Joi.object({
      nombre: required.string.xl,
      categoria: required.string.xl,
    })
  ),
  validateParams(
    Joi.object({
      id: required.number,
    })
  ),
  async (req, res) => {
    const result = await defaultService.putItems(req.body, req.params);
    res.json(result);
  }
);

router.patch("/items/:id", 
  validateBody(
    Joi.object({
      nombre: optional.string.xl,
      categoria: optional.string.xl,
    })
  ),
  validateParams(
    Joi.object({
      id: required.number,
    })
  ),
  async (req, res) => {
    const result = await defaultService.patchItems(req.body, req.params);
    res.json(result);
  }
);

router.delete("/items/:id", 
  validateParams(
    Joi.object({
      id: required.number,
    })
  ),
  async (req, res) => {
    const result = await defaultService.deleteItems(req.params);
    res.json(result);
  }
);

module.exports = router;
