import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    
    const [count, setCount] = useState(0)

    const AddCount = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const MinusCount = () => {
        const newCount = count - 1
        setCount(newCount)
    }

    return (
        <div className="CounterDiv">
            <h3>Count : {count}</h3>
            <div className='ButtonDiv'>
                <button onClick={AddCount} ><img className='ImgClass' src="https://img.icons8.com/?size=60&id=60953&format=png" /></button>
                <button onClick={MinusCount}><img className='ImgClass' src="https://img.icons8.com/?size=60&id=59837&format=png" /></button>
            </div>
        </div>
    )
}