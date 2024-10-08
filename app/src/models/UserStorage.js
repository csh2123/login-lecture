"use strict";

const fs = require("fs").promises;

class UserStorage {
    //#은 public -> private 
    /* 26강에서 users.json 으로 db이동
    static #users = {
        id: ["csh2123", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["홍길동","나철수","김철수"]
    };
    */

    static getUsers(...fields){
        //const users = this.#users;      
        const newUsers = fields.reduce((newUsers, field) => {            
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});        
        return newUsers;
    }

    static getUserInfo(id){
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
            /*
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users);    // =>[id, psword, name]
            const userInfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            
            return userInfo;
            */
           return this.#getUserInfo(data, id);
          })
          .catch(console.error);
    }
 
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);    // =>[id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
    


    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success : true };
    }

}

module.exports = UserStorage;

