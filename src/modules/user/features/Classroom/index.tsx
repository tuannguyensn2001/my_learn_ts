import {useAppDispatch} from "../../../../apps/store";
import {increment} from "./slice";

function Classroom() {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(increment(123));
    }

    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Classroom;