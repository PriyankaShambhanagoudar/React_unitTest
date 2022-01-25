import { useState } from "react"


const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const ChangeTextHandler = () => {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <p>Its good to see you!</p>}
            {changedText && <p>Changed!</p>}
            <button onClick={ChangeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greetings