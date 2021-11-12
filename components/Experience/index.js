import {
  ExperienceSectionStyles,
  ExperienceJobSection,
  ExperienceContainerStyles
} from './_Styles.js'

const ExperienceContainer = () => {
  return (
    <ExperienceContainerStyles>
    <h3>Experience</h3>
      <div className="timeline">
        <div className="container right">
          <div className="content">
            <h2>2021</h2>
            <p>Became a Senior Software Engineer to go along with the Lead DevOps Engineer Position</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2020</h2>
            <p>Moved to Maskcara Industries, a cosmetic company that sells nation wide in both the U.S. and Canada to work as a Software Engineer as well as lead the DevOps team</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2019</h2>
            <p>Moved from Associate Software Engineer to Software Engineer at PrinterLogic.</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2018</h2>
            <p>Became Associate Software Engineer at PrinterLogic and worked on the integrations team. My job was to keep the internal services connected with 3rd party software like Salesforce</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2017</h2>
            <p>Started as a Software Engineer Intern for PrinterLogic in St. George, Utah</p>
          </div>
        </div>
      </div>
    </ExperienceContainerStyles>
  )
}

export default ExperienceContainer
