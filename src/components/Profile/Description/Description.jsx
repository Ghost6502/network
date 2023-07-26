import classes from './Description.module.css'

function Description() {
    return (
        <div className={classes.description}>
            <h1>James Harden</h1>
            <h4>Date of Birth: 30 July</h4>
            <h4>City: Saint Petersburg</h4>
            <h4>Work: None</h4>
            <h4>Specialization: Frontend</h4>
            <h4>Web-Site: None</h4>
            <h5>About Me: ...</h5>
        </div>
    );
}

export default Description;