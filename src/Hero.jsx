import heroImg from './assets/hero.svg'

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Some work was done...</h1>
					<p style={{ fontSize: '20px' }}>
						Hi there! Here are some projects, that i've accomplished so far.
						Have a nice time watching them! This site is built using react and
						headless content management system -
						<a href='https://www.contentful.com/'> Contentfull</a>
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	)
}
export default Hero
