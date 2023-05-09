import "./StudentDetails.css";

function StudentDetails(props) {

    // const name = 'Anusha';
    // const age = 20;
    // const Class = 'BE';

    return (
        <div className="main-div">
            <div className="name-div">{props.name}</div>
            <div className="age-div">{props.age}</div>
            <div className="Class-div">{props.Class}</div>
        </div>
    );
}

export default StudentDetails;