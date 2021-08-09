import "../styles/Index.css";

export default function Button(props) {
    
    return (
        <button className={props.classProp} onClick={() => props.handleCounter()}>
            {props.text}
        </button>
    );
}
