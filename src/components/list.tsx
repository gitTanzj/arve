import { FunctionComponent } from "react";

interface ListProps {
    data: {summa:number, selgitus:string}[]
}


 
const List: FunctionComponent<ListProps> = (props) => {

    return (
    <div className="list">
        {props.data.map((ob:{summa:number, selgitus:string}) => (
        <div className="list-item">
            
        </div>
        ))}
    </div>
    );
}
 
export default List