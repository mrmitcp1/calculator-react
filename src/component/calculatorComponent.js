import TypeButton from "./button";
import InputVariants from "./input";
import {useState} from "react";
import Input from "@mui/joy/Input";

function CalculatorComponent(props) {
    const [input, setInput]= useState('');

    const handleInput = (value) => {
        setInput(input + value)
    }

    const handleResult = ()=>{
        try {
            let result = eval(input);
            setInput(result)
        }
       catch (e){
            setInput('')
       }
    }

    const handleAc = () =>{
        setInput('')
    }
   return(
       <table>
           <tr>
               <td colSpan={4}>
                   <Input value={input}/>
               </td>
           </tr>
           <tr>
               <td>
                   <TypeButton value={7} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={8} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={9} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={'/'} click={handleInput}/>
               </td>
           </tr>
           <tr>
               <td>
                   <TypeButton value={4} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={5} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={6} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={'*'} click={handleInput}/>
               </td>
           </tr>
           <tr>
               <td>
                   <TypeButton value={1} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={2} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={3} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={'-'} click={handleInput}/>
               </td>
           </tr>
           <tr>
               <td>
                   <TypeButton value={'AC'} click={handleAc}/>
               </td>
               <td>
                   <TypeButton value={0} click={handleInput}/>
               </td>
               <td>
                   <TypeButton value={'='} click={handleResult}/>
               </td>
               <td>
                   <TypeButton value={'+'} click={handleInput}/>
               </td>
           </tr>
       </table>
   )
}
export default CalculatorComponent