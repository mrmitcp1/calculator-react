import {Button} from "@mui/material";

function TypeButton({click, value}) {
    return(
        <Button variant="contained" onClick={()=>(click(value))}>{value}</Button>
    )
}
export default TypeButton