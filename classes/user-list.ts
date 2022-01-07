import { User } from "./user";

export class userList {

    users: User[] = [];

    public add( user: User ) {
        this.users.push( user );
        return user;
    }

    updateName( id: string, newName: string ) {

        for( let user of this.users ) {
            if( user.id === id ) {
                user.name = newName;
                break;
            }
        }

        console.log(`User ${id} updated.`)
        console.log(`New name: ${newName}.`)
    }

    public getUsers() {
        return this.users;
    }

    public getUser( id: string ) {
        return this.users.find( user => user.id === id );
    }

    public getUsersFromRoom( room: string ) {
        return this.users.filter( user => user.room === room );
    }

    public removeUser( id: string ) {
        
        const removedUser = this.getUser(id);
        this.users = this.users.filter( user => user.id !== id );

        return removedUser;
    }
}