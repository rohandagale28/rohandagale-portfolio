import "./home.scss"

export default function Dashboard() {
    return (
        <main className="home-section">
            <div className="home-title">
                Rohan Dagale
            </div>
            <div className="home-sub-title">
                Front End React Developer
            </div>
            <div className="home-description">
                I'm a versatile full stack developer with a passion for crafting robust web solutions.
                Proficient in a wide range of technologies, I seamlessly bridge the gap between front-end and back-end development.
                With a track record of delivering innovative projects, I thrive on solving complex challenges to create exceptional user experiences
            </div>
            <div className="home-discord-button">
                <button><a href="" target='_blank'>Discord</a></button>
            </div>
        </main>
    )
}