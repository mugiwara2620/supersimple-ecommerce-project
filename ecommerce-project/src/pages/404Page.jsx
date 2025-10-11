import {Header} from "../components/Header";
import './404Page.css'
export function NotFound(){
    return(
        <>
        <Header />
				
        <div className="not-found">
					<div className="error">404</div>
            Page not found
        </div>
        </>
        
    )
}