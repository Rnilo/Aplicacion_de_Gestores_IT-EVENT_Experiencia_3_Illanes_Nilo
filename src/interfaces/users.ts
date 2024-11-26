
//get, put, delete
export interface Users{
    id: string;
    username:string;
    email:string;
    rut:string;
    password:string;
    isactive:boolean;
}

//post

export interface UserNuevo{
    username: string;
    email: string;
    rut:string;
    password: string;
    isactive: boolean;
}

//QR
export interface QR{
    id: string;
    qr: string;
    nombre:string
}
