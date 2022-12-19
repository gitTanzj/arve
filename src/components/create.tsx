import { FunctionComponent } from "react";


const Create: FunctionComponent = () => {
    return (
    <div className="create">
        
        <div className="forms">
            <input type="text" placeholder="Summa.." pattern="[0-9]"/>
            <input type="text" placeholder="Selgitus.."/>
        </div>
        <button>Lisa</button>
    </div>
    );
}
 
export default Create;