import styles from './Hero.module.css'
//logos
import heroImg from '../../assets/hero-image.jpg'
import webSunny from '../../assets/wb_sunny.png'
import webMoon from '../../assets/dark_mode_moon.png'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//react
import { useTheme } from '../../common/ThemeContext'


function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon = theme === 'light'? webSunny : webMoon;
    const twitterIcon = theme === 'light'? <XIcon/>:<XIcon/>;
    const githubIcon = theme === 'light'? <GitHubIcon/>:<GitHubIcon/>;
    const linkedinIcon = theme === 'light'? <LinkedInIcon/>:<LinkedInIcon/>;
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
    <span><XIcon href='https://twitter.com/tasha_simone5'  alt='' ></XIcon>
    

   <GitHubIcon className={styles.github} href='https://github.com/NatSim'  alt='' ></GitHubIcon>
    
   
   <LinkedInIcon className={styles.linkedin} src={linkedinIcon} alt={'linkedin icon'}></LinkedInIcon>
</span>
<p>Creativity is intelligence having fun ~ anonymous</p>
<a>
    <button className='hover' download>CV</button>
</a>

</div>
    
   </>
  )
}

export default Hero;