import { FunctionComponent } from "react";
import Create from "./create";
import List from "./list";
import * as data from "../data.json"

const name = "Kalle"
 
const Calc: FunctionComponent = () => {

    return (
    <div className="calc">
        <List data={data[name]}/>
        <Create/>
    </div>
    );
}
 
export default Calc;