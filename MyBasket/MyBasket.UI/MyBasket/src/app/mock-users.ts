import { User } from './user-login-component/User';
import dummyjson = require("dummy-json");
import fs = require("fs");


export const USERS: User[] = dummyjson.parse(fs.readFileSync('./data/mock.data', {encoding: 'utf8'}));