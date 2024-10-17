// kis format mein response dikhna chahiye 
import { Message } from "../models/user";
export interface ApiResponse {
    success:boolean,
    message:string,
    isAcceptingMessages?: boolean,
    messages?:Array<Message>  // api response mein sirf message aaye user ko dikghane hai
    





}