

type  Light="red" | "yellow" | "green";



function getTrafficAction(light:Light):string {
    if(light==="red"){
        return "Stop"
    }else if(light === "yellow"){
        return "Slow Down"
    }else{
        return "Go"
    }
    
}
