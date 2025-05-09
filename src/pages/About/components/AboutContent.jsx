import ReactPlayer from 'react-player';
import './aboutContent.css';

function AboutContent() {

    const musicVideos = [
        "https://youtu.be/a4GZnXQbZbI?si=9mgs2Wa9wuxTuQIq",
        "https://youtu.be/ImCJBbfbB88?si=JpdB3-LpBmDRJXsu"
    ]


    return (
        <div className="about__contentContainer">
            <div className='about__contentContainer'>

                <section className='about__flexSection'>
                    <article className='about__section'>
                        <h2 className='about__sectionTitle'>MIS INICIOS</h2>
                        <p className='about__sectionText'>Mi amor por la música y mi pasión por tener mi propio proyecto musical, me llevaron a estudiar sonido, allá por 2008. No pasó mucho tiempo hasta que una empresa del sector audiovisual decidió darme una oportunidad. Yo apenas tenía 21 años, pero muchísimas ganas de trabajar y aprender.</p>
                        <p className='about__sectionText'>Desde entonces y durante más de 12 años he aprendido a desenvolverme en el mundo laboral y a conseguir que el cliente siempre estuviera contento con el trato y el servicio que le ofrecía. Parecerá una tontería, pero siento que esta trayentoria me ha hecho formar parte de alguna manera de la ciudad de Madrid:</p>
                        <p className='about__sectionText'>He participado de la increíble vida cultural de esta ciudad, trabajando en lugares emblemáticos como el Museo Nacional del Prado, Caixa Forum o la Casa Árabe. He retransmitido las comisiones del Ayuntamiento de Madrid o configurado y operado el sistema de sonido para altos cargos del gobierno en ruedas de prensa del Palacio de la Moncloa. He formado parte de la formación de muchas personas cuando retransmitía masters, cursos y seminarios en los diferentes auditorios de la UNED y he dado soporte en muchísimos eventos y conferencias en el Hospital 12 de Octubre. He editado vídeos de campañas publicitarias que se verían en toda España mientras tabajaba en el Edificio Telefónica y ofreciendo visionados de cine para familias en navidad.</p>
                        <p className='about__sectionText'>Me siento orgulloso de haber aportado mi granito de arena en todos estos sitios.</p>
                    </article>

                    <article className='about__section'>
                        <h2 className='about__sectionTitle'>RENOVACIÓN LABORAL</h2>
                        <p className='about__sectionText'>A pesar de todo lo expuesto anteriormente, la inexistencia de horarios fijos y las horas extras habituales, me hicieron plantearme poco a poco sí aquel era el sector en el que yo quería continuar. Había muchas labores que me apasionaban y en las que seguro que podría convertirme en un gran profesional. Por ejemplo, el desarrollo web... </p>
                        <p className='about__sectionText'>Desde hacía años había creado diferentes versiones de mi página web como artista musical y era algo que me encantaba hacer. Así que lo decidí, iba a reinventarme como "Desarrollador Web". En ese momento tracé un plan de formación, que incluía varios cursos por mi cuenta para coger ciertas bases y la realización del Certificado Profesional en Desarrollo de Aplicaciones Web. </p>
                        <p className='about__sectionText'>Cuanto más aprendía más me gustaba. Cada vez tenía más claro que ese era el sector en el que quería estar. Después de un año de formación, muchísimas horas de proyectos y ejercicios, llegamos al momento actual. Terminé los estudios oficiales, realizé las prácticas y, a día de hoy, sigo realizando proyectos y aprendiendo nuevas tecnologías para mejorar mis habilidades y ser un mejor desarrollador web.</p>
                        <p className='about__sectionText'>Seguiré haciendo el trabajo que hay que hacer hasta que, como ocurrió en el sector audiovisual, una empresa decida darme una oportunidad. Y pasará lo mismo, trabajaré la excelencia, daré el mejor servicio al cliente y trataré de ser un gran compañero de equipo para convertirme en un gran profesional de este sector.</p>
                    </article>

                </section>

                <section className='about__section about__section--music'>
                    <article className='about__musicSection'>
                        <h2 className='about__sectionTitle'>LA MÚSICA Y YO</h2>
                        <p className='about__sectionText'>Durante todo el transcurso de lo que he contado anteriormete (y desde mucho antes, de hecho), mi gran pasión siempre ha sido componer canciones.</p>
                        <p className='about__sectionText'>A partir de 2014 decidí crear, de manera oficial, mi proyecto como artista musical en solitario, en el que compongo, produzco y grabo mis propias canciones. Además hago videclips y lyric vídeos, aparte de la web que ya he mencionado antes.</p>
                        <p className='about__sectionText'>En 2022 empecé a hacer streamings en Twitch, en los que hago loops en directo, creados al momento e interactuando con la comunidad. De los mejores loops, luego nos sentamos y creamos canciones. Es maravilloso. De allí han salido canciones tan bonitas como las que te dejo a continuación. </p>
                    </article>

                    <article className='about__musicSection about__musicSection--videos'>
                        {
                            musicVideos && musicVideos.map((video, index) => {
                                return(
                                    <div className='about__videoContainer'>
                                        <ReactPlayer
                                        key={index}
                                        url={video}
                                        controls
                                        width="100%"
                                        height="100%"
                                    />
                                    </div>
                                )
                            })
                        }
                        
                    </article>

                    <article className='about__musicSection about__musicSection--videos'>
                        <h3>SI QUIERIES AHONDAR MÁS EN MI PROYECTO MUSICAL, TE INVITO A VISITAR ESTOS ENLACES:</h3>
                        <div>
                            
                        </div>
                    </article>

                </section>
            </div>
        </div>
    )
}

export default AboutContent;