import db from '../models/index';
import CRUDsevice from '../services/CRUDsevices'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        //console.log(data);
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.error(e);
    }
    //res.send("Hello world from Controller!")
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDsevice.createNewUser(req.body);
    console.log(message);
    //console.log(req.body);
    return res.send('post crud to server');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}