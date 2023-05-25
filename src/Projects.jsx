import { useFetchProjects } from './fetchProjects'

const Projects = () => {
	const { loading, projects } = useFetchProjects()
	console.log(projects)

	if (loading) {
		return (
			<section className='projects'>
				<h2>Loading...</h2>
			</section>
		)
	}

	const grand = 'Grand'
	const middle = 'Middle'
	const small = 'Small'

	return (
		<section className='projects'>
			<div className='title'>
				<h2>{grand} Projects</h2>
				<div className='title-underline'></div>
			</div>
			{/* GRAND PROJECTS */}
			<div className='projects-center'>
				{projects
					.filter(project => project.projectSize === grand)
					.map(item => {
						const { id, imageUrl, url, title } = item
						return (
							<a
								key={id}
								href={url}
								target='_blank'
								rel='noreferrer'
								className='project'
							>
								<img src={imageUrl} alt={title} className='img' />
								<h5>{title}</h5>
							</a>
						)
					})}
			</div>
			{/* MIDDLE PROJECTS */}
			<div className='title'>
				<h2>{middle} Projects</h2>
				<div className='title-underline'></div>
			</div>
			<div className='projects-center'>
				{projects
					.filter(project => project.projectSize === middle)
					.map(item => {
						const { id, imageUrl, url, title } = item
						return (
							<a
								key={id}
								href={url}
								target='_blank'
								rel='noreferrer'
								className='project'
							>
								<img src={imageUrl} alt={title} className='img' />
								<h5>{title}</h5>
							</a>
						)
					})}
			</div>
			{/* SMALL PROJECTS */}
			<div className='title'>
				<h2>{small} Projects</h2>
				<div className='title-underline'></div>
			</div>
			<div className='projects-center'>
				{projects
					.filter(project => project.projectSize === small)
					.map(item => {
						const { id, imageUrl, url, title } = item
						return (
							<a
								key={id}
								href={url}
								target='_blank'
								rel='noreferrer'
								className='project'
							>
								<img src={imageUrl} alt={title} className='img' />
								<h5>{title}</h5>
							</a>
						)
					})}
			</div>
		</section>
	)
}
export default Projects
