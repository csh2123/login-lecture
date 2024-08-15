"use strict";

class UserStorage {
    //#은 public -> private 
    static #users = {
        id: ["csh2123", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["홍길동","나철수","김철수"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {            
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});        
        return newUsers;
    }
}

module.exports = UserStorage;

