import bcrypt from 'bcrypt';
import db from '../models/index';


const salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                adress: data.adress,
                phoneNumber: data.phoneNumber,
                gender: data.gender === 1 ? true : false,
                image: data.image,
                roleId: data.roleId,
                positionId: data.positionId
            })
            resolve('Create User successfully !');
        } catch (error) {
            reject(e);
        }
    })
    // let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    // console.log('password from sevices with bcrypt:');
    // console.log(hashPasswordFromBcrypt);
}
// tao hashpassword
let hashUserPassword = (pass) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(pass, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(e);
        }


    })
}


module.exports = {
    createNewUser: createNewUser,

}