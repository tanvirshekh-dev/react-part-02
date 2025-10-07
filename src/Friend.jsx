export default
    function Friend({ friend }) {
    const { name, email, phone } = friend;
    
    return (
        <div className="card">
            <div>
                <h4>Name: {name}</h4>
                <p>Address: {email}</p>
                <p>Mobile: {phone}</p>
            </div>
        </div>
    )
}