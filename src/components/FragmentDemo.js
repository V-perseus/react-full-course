import React, {useState} from 'react'

function FragmentDemo() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            <input type="text" value={name} onChange={updateTextField} />
            <input type="text" value={password} onChange={updatePasswordField} />
            <button type="button" onClick={submit}>Click Me</button>
        </div>
    )

    function updateTextField(event) {
        setName(event.target.value)
    }
    function updatePasswordField(event) {
        setPassword(event.target.value)
    }
    function submit() {
        console.log(name, password)
    }
    

}

export default FragmentDemo
