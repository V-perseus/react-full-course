import React, {useState} from 'react'

// const Form = () => {
//     const greeting = 'Hello nice to meet you';
//     return (
//         <Headline value={greeting} />
//     )
// };

// const Headline = ({value}) => {
//     return (
//         <h1>{value}</h1>
//     )
// }


// const Form = () => {
//     return (
//         <Headline />
//     )
// }
// const Headline = () => {
//     const [greeting, setGreeting] = useState(
//         'earth shaker come on!!!'
//     )
//     const handleChange = event => setGreeting(event.target.value);
//     return(
//         <div>
//             <h1>{greeting}</h1>
//             <input type="text" value={greeting} onChange={handleChange}></input>
//         </div>
//     )
// }

const Form = () => {
    const [greeting, setGreeting] = useState(
        'hello nice to meet you how are you today?'
    )
    const handleChange = event => setGreeting(event.target.value);
    return (
        <Headline headline={greeting} onchangeHeadline={handleChange}/>
    )
}
const Headline = ({headline, onChangeHeadline}) => (
    <div>
        <h1>{headline}</h1>
        <input type="text" value={headline} onChange={onChangeHeadline}></input>
    </div>
)

export default Form
