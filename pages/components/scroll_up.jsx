import { useEffect, useState } from "react"

function isScrollTop(height){
    if(height >=560){
        return "scrollup show-scroll"
    }
    else{
        return "scrollup"
    }
}

function Scroll_up(){
    const [scroll_up, setScroll_up] = useState("scrollup")
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScroll_up(isScrollTop(position))
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    
    })
    return(
        <a href="#" className={scroll_up} id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scroll_up