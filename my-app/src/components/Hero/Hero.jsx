import styles from './Hero.module.css'
import heroImg from '../../assets/hero-image.jpg'
import webSunny from '../../assets/wb_sunny.png'
import xTwitterIcon from '../../assets/twitter-X-logo.png'



function Hero() {
  return (
    <>
    <section className={styles.container}> 
    <div><img className={styles.hero} src={heroImg} alt=''/>
    <img className={styles.colorMode} src={webSunny} alt={'mode icon'}/>  
    

    </div>
    </section>
    <div className={styles.info}><h1>Natasha Simone<br /></h1>
    <h2>Frontend Developer</h2>
    <span><a href='https://twitter.com/tasha_simone5'  alt='' >
    <img className={styles.twitter} src={'xTwitterIcon'} alt={'twitter icon'}/>  
</a><a href='https://twitter.com/tasha_simone5'  alt='' >
    <img className={styles.github} src={'Github'} alt={'twitter icon'}/>  
</a><a href='https://twitter.com/tasha_simone5'  alt='' >
    <img className={styles.linkedin} src={'Linkedin'} alt={'twitter icon'}/>  
</a></span>
<p>Creativity is intelligence having fun ~ anonymous</p>
<a>
    <button className='hover' download>CV</button>
</a>

</div>
    
   </>
  )
}

export default Hero;