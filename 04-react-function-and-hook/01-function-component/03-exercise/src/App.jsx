
const App = () => {
    return (
        <div>
            <img width="150px" src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/316425762_5519248991458313_7112774778287936570_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=obP4f4Lrb4wAX-QHmAl&_nc_ht=scontent.fbkk29-9.fna&oh=00_AfB3lWdZRBgwsySrKW7fBk1bbnZmgqqoyGM4Z7W8QEzkPA&oe=64390CCA" />
            <Info />
            <Social />
        </div>
        )
}

const Info = () => {
    let bio = "Your Short Bio"
    let name = "Your Name"
    return (
        <div>
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}



const Social = () => {
    return (
        <div>
            <a href="Your FB">Facebook</a>
            <a href="Your Twitter">Twitter</a>
        </div>
    )
}


export default App;