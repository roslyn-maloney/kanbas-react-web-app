// should unenroll a student from a course -> 
// current user and which corse the current the user 
// know the ID of the course and filter out the course 
// if course not

export default function UnEnroll(){
    return(
        <div>
            <div id="wd-boolean-state-variables">
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                <input type="checkbox" checked={done}
                    onChange={() => setDone(!done)} /> Done
            </label>
            {done && <div className="alert alert-success">
                Yay! you are done</div>}
            <hr /></div>);
}
        </div>
    );
}