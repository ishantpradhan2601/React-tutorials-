import React, { useRef } from 'react';

const UncontrolledComponent = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome ${ref1.current.value} ${ref2.current.value}`);
        console.log(ref1.current.value);
        console.log(ref2.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Firstname: <input type="text" ref={ref1} />
                <br />
                Lastname: <input type="text" ref={ref2} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UncontrolledComponent;
