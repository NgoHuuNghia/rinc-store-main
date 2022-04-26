import styles from '@styles/publicDat/scss/main.module.scss'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
const About = () => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <section className={styles.about}>
        <div className={styles.header_about}>
            <div className={styles.about_greeting}>
                <div className={styles.about_greeting_rinc}>
                    <div>
                        <Image src="/imageDat/img/logonew.png" alt="the logo for Rinc" width={100} height={100}/>
                    </div>
                </div>
                <div className={styles.about_greeting_subtitle} >
                    <div className={styles.about_greeting_title} dataAos="fade-left">
                        Rinc is the place to play, create and talk about video games.
                    </div>
                    <div className={styles.about_greeting_status} data-aos="fade-up">
                        <div className={styles.about_greeting_online}>
                            <div className={styles.about_greeting_status_name}>
                                Customers number
                            </div>
                            <div className={styles.about_greeting_status_numbers}>
                                18,048,282
                            </div>
                        </div>
                        <div className={styles.about_gretting_satis}>
                            <div className={styles.about_greeting_status_name}>
                                Customer Satisfaction
                            </div>
                            <div className={styles.about_greeting_status_numbers}>
                                14,078,981
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.about_monitor}>
                <div className={styles.about_monitor_img} data-aos="zoom-in-down">
                    <div>
                        <Image src="/imageDat/img/imageheader.jpg" alt="the logo for Rinc" layout='fill'/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.about_seemore}>
            <a  className={styles.about_seemore_text}>Looking for more information
                <span className={styles.down_arrow}></span>
            </a>
        </div>
        <div className={styles.about_games_hero}>
            <div className={styles.about_game_cta}>
                <div className={styles.game_col_left}>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img1.jpg" alt="" style={{width: '100%'}}/ >
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img2.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img3.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up" >
                        <img src="imageDat/img/game_img4.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img5.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img6.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img7.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img8.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                </div>
                <div className={styles.game_col_right}>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img9.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img10.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img11.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img12.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img13.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img14.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img15.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                    <div className={styles.game_image} data-aos="fade-up">
                        <img src="imageDat/img/game_img16.jpg" alt="" style={{width: '100%'}}/>
                    </div>
                </div>
                <div className={styles.about_cta_content} data-aos="flip-left">
                    <h2 className={styles.about_cta_title}>INSTANT GAME ACCESS</h2>
                    <div className={styles.about_cta_text}>
                        Enjoy exclusive deals, automatic updates and more from over 30,000 games to choose from, AAA or indie.
                    </div>
                    <div className={styles.about_cta_btn}>
                        <a className={styles.about_cta_btn_des}>BROWSE STORE</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.about_content}>
            <div className={styles.about_content_ctas}>
                <div className={styles.about_cta_content_text} data-aos="fade-right">
                    <h2 className={styles.about_cta_text_title}>Join the community</h2>
                    <div className={styles.about_cta_text_des}>Meet people, join parties, form clans, participate in in-game chats and more! With over 100 million potential friends (or competitors), youre still not happy.</div>
                    <div className={styles.about_cta_content_btn}>Community</div>
                </div>
                <div className={styles.about_cta_content_image} data-aos="zoom-in-down">
                    <img className={styles.image_cta_content}  src="imageDat/img/cta_hero_community.png" alt=""/>
                </div>
            </div>
            <div className={styles.about_content_ctas} >
                <div className={styles.about_cta_content_image}  data-aos="zoom-in-down">
                    <img className={`${styles.image_cta_content} ${styles.hardwareimg}`}  src="imageDat/img/cta_hero_hardware.png" alt=""/>
                </div>
                <div className={`${styles.about_cta_content_text} ${styles.hardware_text}`}  data-aos="fade-left">
                    <h2 className={styles.about_cta_text_title} >Exploring Rinc Hardware</h2>
                    <div className={styles.about_cta_text_des} >We created the Steam Controller and VR technologies that enable the HTC Vive to improve the PC gaming experience.</div>
                    <div className={styles.about_cta_content_btn} >Exploring Rinc Hardware</div>
                </div>
            </div>
            <div className={styles.about_content_ctas} >
                <div className={styles.about_cta_content_text}  data-aos="fade-right">
                    <h2 className={styles.about_cta_text_title} >Publish your game</h2>
                    <div className={styles.about_cta_text_des} >Rincworks is a set of tools and services to help publishers and development teams get the most out of their game distribution on Rinc.</div>
                    <div className={styles.about_cta_content_btn} >Learn more about Rincworks</div>
                </div>
                <div className={styles.about_cta_content_image}  data-aos="zoom-in-down">
                    <img className={styles.image_cta_content}  src="imageDat/img/cta_hero_steamworks.png" alt=""/>
                </div>
            </div>
        </div>
        <div className={styles.about_member_title}  data-aos="fade-left">
            MEMBERS
        </div>
        <div className={styles.member} >
            <div className={styles.member_info}  data-aos="zoom-in-up">
                <div className={styles.image_info} >
                    <div className={styles.image_number}>
                        <Image src="/publicData/avatar/nghia.jpg" width={200} height={200} quality={100} layout='responsive' objectPosition='center' objectFit="cover" alt='nghia'/>
                    </div>
                </div>
                <div className={styles.member_info_des} >
                    <h3 className={styles.member_infor_title} >Founder</h3>
                    <div className={styles.member_info_name}  >Ngô Hữu Nghĩa</div>
                </div>
            </div>
            <div className={styles.member_info}  data-aos="zoom-in-up">
                <div className={styles.image_info} >
                    <div className={styles.image_number}>
                        <Image src="/publicData/avatar/chung.jpg" width={200} height={200} quality={100} layout='responsive' objectPosition='center' objectFit="cover" alt='chung'/>
                    </div>
                </div>
                <div className={styles.member_info_des} >
                    <h3 className={styles.member_infor_title} >Developer</h3>
                    <div className={styles.member_info_name} >Hoàng Văn Chung</div>
                </div>
            </div>
            <div className={styles.member_info}  data-aos="zoom-in-up">
                <div className={styles.image_info} >
                    <div className={styles.image_number}>
                        <Image src="/publicData/avatar/dien.jpg" width={200} height={200} quality={100} layout='responsive' objectPosition='center' objectFit="cover" alt='dien'/>
                    </div>
                </div>
                <div className={styles.member_info_des} >
                    <h3 className={styles.member_infor_title} >Developer</h3>
                    <div className={styles.member_info_name} >Lê Ngọc Vương Điền</div>
                </div>
            </div>
            <div className={styles.member_info}  data-aos="zoom-in-up">
                <div className={styles.image_info} >
                    <div className={styles.image_number}>
                        <Image src="/publicData/avatar/dat.jpg" width={200} height={200} quality={100} layout='responsive' objectPosition='center' objectFit="cover" alt='dat'/>
                    </div>
                </div>
                <div className={styles.member_info_des} >
                    <h3 className={styles.member_infor_title} >Developer</h3>
                    <div className={styles.member_info_name} >Nguyễn Quang Đạt</div>
                </div>
            </div>
        </div>
        <div className={styles.contact}  data-aos="fade-up">
            <div className={styles.content_____text} >
                <div className={styles.content_____title} >
                    <h4 >CONTACT</h4>
                </div>
                <div className={styles.content_____detail} >
                    <p className={styles.nameNation} >Singapore</p>
                    <p>160 Robinson Road #14-04</p>
                    <p>Singapore</p>
                    <p>068914</p>
                    <p className={styles.space_____text} ></p>
                    <p className={styles.nameNation} >Thailand</p>
                    <p>T One Building</p>
                    <p>8 Soi Sukhumvit 40</p>
                    <p>Khet Khlong Toei, Krung Thep</p>
                    <p>Maha Nakhon</p>
                    <p>Bangkok 10110</p>
                    <p className={styles.space_____text} ></p>
                    <p>For general enquires contact</p>
                    <p className={styles.nameNation} >media@rinc.com</p>
                </div>
            </div>
            <div className={styles.form_____content} >
                <h4 >LETS CHAT</h4>
                <div className={styles.from_____detail} >
                    <div className={styles.form_caicontact} >
                        <div className={styles.form_____name} >
                            <label htmlFor="name">N A M E</label>
                            <div className={styles.input_____name} >
                                <input type="text" className={styles.nameInput} />
                            </div>
                        </div>
                        <div className={styles.form_____email} >
                            <label htmlFor="email">E M A I L</label>
                            <div className={styles.input_____email} >
                                <input type="text" className={styles.emailInput} />
                            </div>
                        </div>
                    </div>            
                    <div className={styles.form_____phone} >
                        <label htmlFor="phone">P H O N E</label>
                        <div className={styles.input_____phone} >
                            <input type="text" className={styles.phoneInput} />
                        </div>
                    </div>
    
                    <div className={styles.form_____company} >
                        <label htmlFor="company">C O M P A N Y</label>
                        <div className={styles.input_____company} >
                            <input type="text" className={styles.companyInput}/>
                        </div>
                    </div>
    
                    <div className={styles.button_submit} >
                        <button type="submit" >Submit</button>
                    </div>
                </div>
            </div> 
        </div>
    </section>
    );
}

export default About;