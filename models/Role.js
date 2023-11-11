import {Schema, model} from "mongoose";


const Role = new Schema({
    value: {type: String, unique: true, default: 'USER'},
})

const RoleModel = model('Role', Role);
export default RoleModel