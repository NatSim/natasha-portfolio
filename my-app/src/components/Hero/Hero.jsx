import styles from './Hero.module.css'
//logos
import heroImg from '../../assets/hero-image.jpg'
import webSunny from '../../assets/wb_sunny.png'
import webMoon from '../../assets/dark_mode_moon.png'
import twitterLight from '../../assets/twitter-X-logo.png'
import twitterDark from '../../assets/twitter_icon_dark.jpg'
import githubDark from '../../assets/github_dark.png'
import githubLight from '../../assets/github_light.jpg';
import linkedinDark from '../../assets/linkedin_dark.jpg';
import linkedinLight from '../../assets/linkedin_light.jpg.crdownload';
//react
import { useTheme } from '../../common/ThemeContext'


function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon = theme === 'light'? webSunny : webMoon;
    const twitterIcon = theme === 'light'? twitterLight:twitterDark;
    const githubIcon = theme === 'light'? githubLight:githubDark;
    const linkedinIcon = theme === 'light'? linkedinLight:linkedinDark;
    return (
    <>
    {/* <X></X> */}
    <section className={styles.container}> 
    <div><img className={styles.hero} src={heroImg} alt='' />
    <img className={styles.colorMode} src={themeIcon} alt={'mode icon'} onClick={toggleTheme}/>  
    

    </div>
    </section>
    <div className={styles.info}><h1>Natasha <br />Simone</h1>
    <h2>Frontend Developer</h2>
    <span><a href='https://twitter.com/tasha_simone5'  alt='' >
    <img className={styles.twitter} src={twitterIcon} alt={'twitter icon'}/>  
</a><a href='https://github.com/NatSim'  alt='' >
    <img className={styles.github} src={githubIcon} alt={'github icon'}/>  
</a><a href='https://www.linkedin.com/in/natasha-simone-14310364'  alt='' >
    <img className={styles.linkedin} src={linkedinIcon} alt={'linkedin icon'}/>  
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