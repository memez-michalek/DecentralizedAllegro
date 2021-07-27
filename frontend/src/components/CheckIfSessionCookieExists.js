
import Cookies from "universal-cookie"
export default function CheckIfSessionCookieExists(){
    const cookie = new Cookies();
        if (cookie.get("token") !== undefined){
            return true;
        }else{
            return false;
        }
}