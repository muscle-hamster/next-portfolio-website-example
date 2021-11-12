import {
  AboutSectionStyles,
  AboutDescription,
  AboutProgress,
  AboutContainerStyles
} from './_Styles.js'

const AboutContainer = () => {
  return (
    <AboutContainerStyles>
    <h1>About Me</h1>
    <AboutSectionStyles>
      <AboutDescription>
        <h3>Hi There!</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </AboutDescription>
      <AboutProgress>
        <h3>Frontend</h3>
        <div className="progress">
          <div className="progress-value1"></div>
        </div>
        <h3>Backend</h3>
        <div className="progress">
          <div className="progress-value2"></div>
        </div>
        <h3>DevOps</h3>
        <div className="progress">
          <div className="progress-value3"></div>
        </div>
      </AboutProgress>
    </AboutSectionStyles>
    </AboutContainerStyles>
  )
}

export default AboutContainer
