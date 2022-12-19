import { FunctionComponent } from "react";
import Create from "./create";
import List from "./list";
import data from "../data.json"
 
const Calc: FunctionComponent = () => {
    
    return (
    <div className="calc">
        <List data={data["Kalle"]}/>
        <Create/>
    </div>
    );
}
 
export default Calc;