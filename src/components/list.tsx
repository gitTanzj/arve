import { FunctionComponent, useState } from "react";

interface ListProps {
    data: {summa:number, selgitus:string}[]
}


const List: FunctionComponent<ListProps> = (props) => {

    // const [sum, setSum] = useState<number[]>([])

    return (
    <div className="list">
        {props.data.map((ob:{summa:number, selgitus:string}) => {
            return (
                <div className="list-item">
                    <div>{ob.summa}</div> - <div>{ob.selgitus}</div>
                </div>
            );
        })}
        <div className="list-sum">
            <div>Summa: {}</div> 
        </div>
    </div>
    );
}
 
export default List