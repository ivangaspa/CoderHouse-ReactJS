
export default function Button(props) {
    
    return (
        <button className = "mx-2"  onClick={() => props.handleCounter()}>
            {props.text}
        </button>
    );
}
