import { useState } from "react"
import Output from "./Output";

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const ChangeTextHandler = () => {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>Its good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={ChangeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greetings