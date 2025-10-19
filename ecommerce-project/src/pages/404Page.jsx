import {Header} from "../components/Header";
import './404Page.css'
export function NotFound({cart}){
    return(
        <>
        <Header
        cart={cart} />
				
        <div className="not-found">
					<div className="error">404</div>
            Page not found
        </div>
        </>
        
    )
}