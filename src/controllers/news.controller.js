import { createService, findAllService } from "../services/news.servicer.js";

const create = async (req, res) => {
   try {
      const {title, text, banner} = req.body;

      if (!title || !text || !banner) {
         res.status(400).send({ message: "Submit all fields for registration" });
         
      } 
      await createService({
         title,
         text,
         banner,
         id: "Objectidfake1"
      })

      res.send(201)

   } catch (error) {

      res.status(500).send({ message: error.message})

   }
}
const findAll = async (req, res) => {
   const news = []
   res.send(news)
}

export { create, findAll };