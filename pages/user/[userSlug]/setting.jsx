import styles from '@styles/publicDat/scss/setting/setting.module.scss'

const setting = () => {
    return (
        <section className ={styles.setting} >
            <div className ={styles.setting__navigation} >
                <div className ={styles.setting__navigation__header} >
                    <div className ={styles.setting__navigation__avatar}  >
                        <img className ={styles.avatar__profile}  src="img/avatar.jpg" alt=""/>
                    </div>
                    <div className ={styles.setting__navigation__name} >
                        Nhật Midas
                    </div>
                </div>
                <div className ={styles.setting__navigation__profile} >
                    <div className ={styles.profile__account} >
                        <div className ={styles.profile__tag} >Account:</div>
                        <div className ={styles.profile__name} >thetrinity1vn</div>
                    </div>
                    <div className ={styles.profile__account} >
                        <div className ={styles.profile__tag} >Email:</div>
                        <div className ={styles.profile__name} >thetrinity1asdasdasdvn@gmail.com</div>
                    </div>
                    <div className ={styles.profile__account} >
                        <div className ={styles.profile__tag} >Phone:</div>
                        <div className ={styles.profile__name} >+84 342 233 115</div>
                    </div>
                    <div className ={styles.profile__account} >
                        <div className ={styles.profile__tag} >Name:</div>
                        <div className ={styles.profile__name} >Nhật Midas</div>
                    </div>
                    <div className ={styles.profile__account} >
                        <div className ={styles.profile__tag} >Real name:</div>
                        <div className ={styles.profile__name} >Nguyễn Quang Đạt</div>
                    </div>
                </div>
            </div>
            <div className ={styles.setting__pagecontent} >
                <div className ={styles.setting__about} >
                    <div className ={styles.setting__about__header} >
                        <div className ={styles.setting__about__title} >
                            <h1>ABOUT</h1>
                        </div>
                        <div className ={styles.setting__about__back} >
                            <a className ={styles.back__your__profile}  href="">Back to Your Profile</a>
                        </div>
                    </div>
                    <div className ={styles.setting__about__content} >
                        Set your profile name and details. Providing additional information like your real name can help friends find you on the Steam Community.
                        <br/>
                        <br/>
                        Your profile name and avatar represent you throughout Steam, and must be appropriate for all audiences. Please see the FAQ for more details.
                    </div>
                </div>
                <div className ={styles.setting__general} >
                    <div className ={styles.setting__general__title} >
                        <h1 className ={styles.setting__general__title__text} >GENERAL</h1>
                    </div>
                    <div className ={styles.setting__general__form} >
                        <div className ={styles.setting__general__form_profile} >
                            <div className ={styles.profile__name__title} >PROFILE NAME</div>
                            <input className ={styles.profile__name__input}  type="text"/>
                        </div>
                        <div className ={styles.setting__general__form_profile} >
                            <div className ={styles.profile__name__title} >EMAIL</div>
                            <input className ={styles.profile__name__input}  type="email"/>
                        </div>
                        <div className ={styles.setting__general__form_profile} >
                            <div className ={styles.profile__name__title} >PHONE NUMBER</div>
                            <input className ={styles.profile__name__input}  type="number"/>
                        </div>
                        <div className ={styles.setting__general__form_profile} >
                            <div className ={styles.profile__name__title} >REAL NAME</div>
                            <input className ={styles.profile__name__input}  type="text"/>
                        </div>
                    </div>
                    <div className ={styles.setting__general__title} >
                        <h1 className ={styles.setting__general__title__text} >SUMMARY</h1>
                    </div>
                    <div className ={styles.setting__summary} >
                        <div className ={styles.setting__summary__title} >PROFILE NAME</div>
                        <input className ={styles.setting__summary__text}  type="text" placeholder="No information given."/>
                    </div>
                    <div className ={styles.setting__button} >
                        <button className ={styles.setting__button__cancel} >CANCEL</button>
                        <button className ={styles.setting__button__save} >SAVE</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default setting;