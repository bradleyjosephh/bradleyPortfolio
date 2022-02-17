import PortfolioCard from './PortfolioCard'

const Portfolio = (props) => {
  const {projects} = props;
  return (
    <div className="row justify-content-center">
      {projects.map((project, idx) => <PortfolioCard key={idx} project={project}/>)}
    </div>
  )
}

export default Portfolio;