import './User.css'
export default function User ({User}){
    const {name, email, phone, website} = User;
    const {street, suite, city} = User.address
    return(
        <div className="UserBox">
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            <p>Address : {street}, {suite}, {city}</p>
        </div>
    )
}