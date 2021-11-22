import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes =(app)=>{
    router.get('/',homeController.getHomePage);
    router.get('/about',homeController.getAboutPage);

   // router.get("/",(req,res) => {       
   //     return res.send("Hello world with Kurawata")
   // });
    router.get("/hoidanit",(req,res) => {
        return res.send("Hoi dan IT")
    });

    return app.use("/",router);
}

module.exports = initWebRoutes;