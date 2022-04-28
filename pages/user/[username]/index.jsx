import { dateToJsonLocal, getUserWithUsername } from "@lib/firebase";
import styles from '@styles/publicDat/scss/profile/profile.module.scss'
import Link from "next/link";

export async function getServerSideProps({ query: urlQuery }) {
    const { username } = urlQuery;

    const userDoc = await getUserWithUsername(username);

    // If no user, short circuit to 404 page
    if (!userDoc) { return {notFound: true,}; }

    // JSON serializable data
    let user = null;

    if (userDoc) {
        user = dateToJsonLocal(userDoc);
    }

    return {
        props: { user }, // will be passed to the page component as props
    };
}

const index = ({user}) => {
    const {username, email, joinedAt, photoURL} = user

    return (
        <section className ={styles.profile} >
            <div className ={styles.header__profile} >
                <div className ={styles.profile__img} >
                    <img className ={styles.image__avt}  src={photoURL || '/imageDat/img/add.jpg'} alt=""/>
                </div>
                <div className ={styles.content__header} >
                    <h2 className ={styles.content__name} >
                        {username}
                    </h2>
                    <div className ={styles.content__info} >
                        Joined since: {joinedAt}
                    </div>
                    <div className ={styles.content__text} >
                        Email: {email}
                    <br/>
                        <Link href={`${username}/setting`}>
                            Setting
                        </Link>
                    </div>
                </div>
                <div className ={styles.exp__profile} >
                    <div className ={styles.level} >
                        Level <div className ={styles.number__level} >76</div>
                    </div>
                    <div className ={styles.years} >
                        <div className ={styles.years_img} >
                            <img src="/imageDat/img/steamyears12_54.png" alt=""/>
                        </div>
                        <div className ={styles.years_text} >Years of Service 
                            <br/>
                            600 XP
                        </div>

                    </div>
                </div>
            </div>
            <div className ={styles.profile__content} >
                <div className ={styles.profile__leftcol} >
                    <div className ={styles.profile_title_showgame} >
                        Favorite Game
                    </div>
                    <div className ={styles.profile__content__showcasegame} >
                        <div className ={styles.profile_header_showgame} >
                            <div className ={styles.profile__game__image} >
                                <img className ={styles.image__showgame}  src="/imageDat/img/capsule_184x69.jpg" alt=""/>
                            </div>
                            <h2 className ={styles.profile__showgame__title} >
                                Resident Evil 2
                            </h2>
                        </div>
                        <div className ={styles.showcase_stats} >
                            <div className ={styles.showcase_left} >
                                <div className ={styles.value} >18.8</div>
                                <div className ={styles.label} >Hours played</div>
                            </div>
                            <div className ={styles.showcase_right} >
                                <div className ={styles.value} >24</div>
                                <div className ={styles.label} >Achievements</div>
                            </div>
                        </div>
                    </div>
                    <div className ={styles.profile_title_showcase} >
                        Review Showcase
                    </div>
                    <div className ={styles.profile_header_case} >
                        <div className ={styles.profile__showcase_img} >
                            <img className ={styles.image__showcase}  src="/imageDat/img/capsule_184x69.jpg" alt=""/>
                        </div>
                        <h2 className ={styles.profile__showcase__title} >
                            Resident Evil 2
                            <br/>
                            <div className ={styles.gameplay__time} >7.5 Hours played</div>
                        </h2>
                    </div>
                    <div className ={styles.follow__game} >
                        <a className ={styles.link__follow__game}  href="#">Follow my Curator Page for more Strategy Games!</a>
                        <p className ={styles.follow__game__text} >Rogue Lords is a roguelike turn-based strategy game.</p>
                    </div>
                    <div className ={styles.showcase_notes} >
                        <div className ={styles.showcase_notes_story} >
                            <div className ={styles.showcase_notes_story_title} >Story</div>
                            <div className ={styles.showcase_notes_story_text} >You are the devil and Deamon Hunters beat you up 10 years ago. You literally went to hell to gain more power. Now, you and your disciples return to earth to achieve world domination.
                                The story is told through texts. Missions are called books, which are divided into chapters, and each new chapter the book will open to tell you more about the story. Most of the text is read by a teller and the voice acting is pretty good actually.</div>
                        </div>
                        <div className ={styles.showcase_notes_story} >
                            <div className ={styles.showcase_notes_story_title} >Battles</div>
                            <div className ={styles.showcase_notes_story_text} >
                                Before the battle starts, you can select one of three different rewards you receive if you win the battle. Depending on the reward, the battle may be harder though.
        Battles are turn-based. You can see the enemies&rsquo; intentions at all times (What they do, who they going to attack, and how much damage they do). Your team consists of three disciples and you have five action points in total per turn. Attacks cost one to several action points. After using one, it needs to be recharged before using it again. Every character has an action that allows recharging all of its (or the whole team) attacks for some AP.
                                <br/>
                                <br/>
        Every character has a physical and a spiritual health bar. If one of them gets reduced to zero, you need to attack the enemy one more time to kill him.
        If one of your Disciples loses all of his physical OR spiritual points, they don&rsquo;t die. Instead, every time they get attacked, you will lose diabolic essence. If you have no DE left, you will lose.
                            </div>
                        </div>
                        <div className ={styles.showcase_notes_story} >
                            <div className ={styles.showcase_notes_story_title} >Devil Mode</div>
                            <div className ={styles.showcase_notes_story_text} >
                                This is a mode used within battles. It&rsquo;s like cheating. You can modify health points, recharge skills, and move statuses. It&rsquo;s literally cheating. The price to pay for that is diabolic essence - so use it wisely or you&rsquo;ll lose everything!
                            </div>
                        </div>
                        <div className ={styles.showcase_notes_story} >
                            <div className ={styles.showcase_notes_story_title} >Books</div>
                            <div className ={styles.showcase_notes_story_text} >
                                Every book is like a mission consisting of several zones each with activities in them (like battles, events, a merchant, etc.). Sometimes you can choose one of a few zones (Think of nodes in roguelike games). Some zones have optional side activities, too.
                            </div>
                        </div>
                        <div className ={styles.showcase_notes_story} >
                            <div className ={styles.showcase_notes_story_title} >Disciples</div>
                            <div className ={styles.showcase_notes_story_text} >
                                Every disciple is different in his looks, characteristics, and skills. You can obtain skills in different ways. If you get the same skill three times, it will be combined into the same with a higher rarity. You can also choose one of your three disciples in an event to do a social test. The social test can result in gaining positive or negative traits.
                            </div>
                        </div>
                    </div>
                    <div className ={styles.follow__game} >
                        <a className ={styles.link__follow__game}  href="#">If you like my review and strategy games, please consider following my curator page on Steam!</a>
                    </div>
                    <div className ={styles.profile_recentgame} >
                        <div className ={styles.profile_recentgame_title} >
                            Recent Activity
                        </div>
                        <div className ={styles.recentgame__content} >
                            <div className ={styles.image__recent} >
                                <img className ={styles.avatar__game} src="/imageDat/img/capsule_184x69.jpg" alt=""/>
                            </div>
                            <div className ={styles.title_game_name} >
                                Midnight Ghost Hunt
                            </div>
                            <div className ={styles.time__game__recent} >
                                0.9 hrs on record
                                <br/>
                                last played on 31 Mar
                            </div>
                        </div>
                    </div>
                </div>
                <div className ={styles.profile__rightcol} >
                    <div className ={styles.profile__sightcol_title} >
                        Currently Offline
                    </div>
                    <div className ={styles.profile__priview} >
                        <div className ={styles.image__priview} >
                            <img className ={styles.image__icon}  src="/imageDat/img/1000_54.png" alt=""/>
                        </div>
                        <div className ={styles.image__priview} >
                            <img className ={styles.image__icon}  src="/imageDat/img/steamyears12_54.png" alt=""/>
                        </div>
                        <div className ={styles.image__priview} >
                            <img className ={styles.image__icon}  src="/imageDat/img/0808f4a3d2423f68d5b364f4e670ea917a002a8f.png" alt=""/>
                        </div>
                        <div className ={styles.image__priview} >
                            <img className ={styles.image__icon}  src="/imageDat/img/86bd66aa6980ec025d9070783a05bd0b0df5f061.png" alt=""/>
                        </div>
                    </div>
                    <div className ={styles.list__link__area} >
                        <div className ={styles.link__account__area} >
                            <a className ={styles.title_link}  href="">Games</a> <span className ={styles.number_area} >1703</span>
                        </div>
                        <div className ={styles.link__account__area} >
                            <a className ={styles.title_link}  href="">Inventory   </a>
                        </div>
                        <div className ={styles.link__account__area} >
                            <a className ={styles.title_link}  href="">Screenshots</a> <span className ={styles.number_area} >509</span>
                        </div>
                        <div className ={styles.link__account__area} >
                            <a className ={styles.title_link}  href="">Workshop Items</a> <span className ={styles.number_area} >1</span>
                        </div>
                        <div className ={styles.link__account__area} >
                            <a className ={styles.title_link}  href="">Reviews</a> <span className ={styles.number_area} >212</span>
                        </div>
                        <div className ={styles.link__account__area} >
                            <a className ={styles.title_link}  href="">Artwork</a> <span className ={styles.number_area} >1</span>
                        </div>
                    </div>
                    <div className ={styles.list_friends} >
                        <div className ={styles.list_friends_title} >Friends <span className ={styles.number_list_friends} >555</span></div>
                        <div className ={styles.friend__info} >
                            <div className ={styles.avatar__friend} >
                                <img className ={styles.image__avatar} src="/imageDat/img/avatar1.png" alt=""/>
                            </div>
                            <div className ={styles.friend__des} >
                                <div className ={styles.name__friend} >
                                    Robszyy
                                </div>
                                <div className ={styles.status__friend} >
                                    Online
                                </div>
                            </div>
                        </div>
                        <div className ={styles.friend__info} >
                            <div className ={styles.avatar__friend} >
                                <img className ={styles.image__avatar} src="/imageDat/img/avatar2.png" alt=""/>
                            </div>
                            <div className ={styles.friend__des} >
                                <div className ={styles.name__friend} >
                                    Dr. Nonu
                                </div>
                                <div className={`${styles.status__friend} ${styles.status__offline}`}  >
                                    Offline
                                </div>
                            </div>
                        </div>
                        <div className ={styles.friend__info} >
                            <div className ={styles.avatar__friend} >
                                <img className ={styles.image__avatar} src="/imageDat/img/avatar3.jpg" alt=""/>
                            </div>
                            <div className ={styles.friend__des} >
                                <div className ={styles.name__friend} >
                                    Debjit_M
                                </div>
                                <div className ={styles.status__friend} >
                                    Offline
                                </div>
                            </div>
                        </div>
                        <div className ={styles.friend__info} >
                            <div className ={styles.avatar__friend} >
                                <img className ={styles.image__avatar} src="/imageDat/img/avatar4.jpg" alt=""/>
                            </div>
                            <div className ={styles.friend__des} >
                                <div className ={styles.name__friend} >
                                    Midas_Invisible
                                </div>
                                <div className={`${styles.status__friend} ${styles.status__offline}`}  >
                                    Offline
                                </div>
                            </div>
                        </div>
                        <div className ={styles.friend__info} >
                            <div className ={styles.avatar__friend} >
                                <img className ={styles.image__avatar} src="/imageDat/img/avatar5.png" alt=""/>
                            </div>
                            <div className ={styles.friend__des} >
                                <div className ={styles.name__friend} >
                                    Manhtansocute
                                </div>
                                <div className={`${styles.status__friend} ${styles.status__offline}`}  >
                                    Offline
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default index;