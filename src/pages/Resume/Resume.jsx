import NavBar from "../../components/NavBar"

const Resume = (props) => {
  return (
    <>
      <NavBar />
      <h1>Resume</h1>
      <div>
        <a href={process.env.PUBLIC_URL + 'YAN SHI-Fullstack .pdf'} download>Download my resume as PDF</a>
      </div>
    </>
  )
}
export default Resume