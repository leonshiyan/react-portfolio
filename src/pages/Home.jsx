import NavBar from "../components/NavBar"

const Home = (props) => {
  return (
    <>
      <NavBar />
      <h1>Welcome to my Page</h1>
      <div>
        <div>My name is Yan Shi</div>
        <div>A software engineer</div>
        <div>
          <img src="pics/rsz_mypic.jpg" alt="mypicture" width="600" height="450"/>
        </div>
      </div>
    </>
  )
}
export default Home