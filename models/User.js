import {Schema, model} from "mongoose";
import RoleModel from "./Role.js";

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String,  required: true},
    role: [{type: String, ref: RoleModel}]
})
const UserModel = model('User', User)

export default UserModel