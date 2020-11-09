import React, {useState} from 'react'

function FragmentDemo() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    let message = ''

    if (name==='admin' && password==='admin') {
        message='Hello admin'
    } else {
        message='Who are you?'
    }
    
    return (
        <div>
            <span>{name === 'admin' && password === 'admin' && 'hello world'}</span>
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
