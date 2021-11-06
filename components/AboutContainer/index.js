import Styled from 'styled-components'

const About = Styled.div`
  display: flex;
  flex-direction: column;
`

// Vh temporary until image is there
const ImageSection = Styled.div`
  height: 40vh;
`

const BioSection = Styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const BioDescription = Styled.div`
  display: flex;
  flex-direction: column;
`

const BioShort = Styled.div`
  display: flex;
  flex-direction: column;
`

const AboutContainer = () => {
  return (
    <About>
    <ImageSection>
      <h1>About</h1>
    </ImageSection>
    <BioSection>
      <BioDescription>
        <h1>About</h1>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button>
          Read More
        </button>
      </BioDescription>
    <BioShort>
      <p>Name: Brock Morrison</p>
      <p>Birthday: 11/07/1992</p>
      <p>Major: Computer Science</p>
      <p>Phone: 555-555-0123</p>
      <p>Emai: email@email.email</p>
      <p>Freelance: Available</p>
    </BioShort>
    </BioSection>
    </About>
  )
}

export default AboutContainer
