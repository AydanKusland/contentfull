import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm pork belly pariatur selvage id offal austin post-ironic distillery fashion axe slow-carb. Aesthetic listicle vibecession, single-origin coffee selvage cloud bread wayfarers. Palo santo selfies cupping PBR&B succulents est man braid everyday carry commodo crucifix.
          </p>
          
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
          </div>
      </div>
    </section>
  )
}
export default Hero