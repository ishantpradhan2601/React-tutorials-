function Student(props)
{
    const {...rest }=props;
    return(
        <div>
            <p>
                The name of the Students is : {rest.name}<br/>
                The student is from : {rest.state}<br/>
                Age of the student is : {rest.age}<br/>
            </p>
        </div>
    )
}
export default Student;