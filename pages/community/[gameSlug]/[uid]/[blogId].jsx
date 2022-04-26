import style from '@styles/publicDien/css/style.module.scss'
import { useRouter } from 'next/router';
import {FaThumbsUp} from 'react-icons/fa'

import { dateToJsonLocal, firestore } from '@lib/firebase';
import { doc, getDocs, getDoc, collectionGroup, query, limit } from 'firebase/firestore';
import { getCrumbList } from '@lib/commonFunctions';
import React from 'react';
import Link from 'next/link';

export async function getStaticProps({ params }) {
    const { gameSlug, uid, blogId } = params
    
    const blogRef = doc(firestore, 'games', gameSlug, 'community', uid, 'blogs', blogId)
    const blog = dateToJsonLocal(await getDoc(blogRef))
    const {gameTitle, username, title} = blog
    const path = blogRef.path //? hydrate data bellow

    const crumbList = [
        {href: `/community`, title: 'community'},
        {href: `/community/${gameSlug}`, title: gameTitle},
        {href: `/community/${gameSlug}/${uid}`, title: username},
        {href: `/community/${gameSlug}/${uid}/${blogId}`, title: title},
    ]

    return {
        props: { blog, path, crumbList },
        revalidate: 100,
    };
}

export async function getStaticPaths() {
    const q = query(
        collectionGroup(firestore, 'blogs'),
        limit(20)
    )
    const snapshot = await getDocs(q);

    const paths = snapshot.docs.map((doc) => {
        const { gameSlug, uid, blogId } = doc.data();
        return {
            params: { gameSlug, uid, blogId },
        };
    });

    return {
        paths,
        fallback: 'blocking',
    };
}

const index = ({blog, path, crumbList}) => {
    return (
        <div className={style.container}>
            <section className={style.community__detail}>
                <div className={style.community__detail__main}>
                    <div className={style.bread_crumb}>
                        <ul>
                            {crumbList.map((crumb, index) => {
                                if(index == crumbList.length - 1){
                                    return (
                                        <React.Fragment key={crumb.title}>
                                            <li>
                                                {crumb.title}
                                            </li>
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <React.Fragment key={crumb.title}>
                                            <li>
                                                <Link href={crumb.href}>
                                                    <a>
                                                        {crumb.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        </React.Fragment>
                                    )
                                }
                            })}
                            {/* <li><a href="#">Community</a></li>
                            <li><a href="#">Truck-simulator</a></li>
                            <li><a href="#">Screenshot</a></li>
                            <li>Italy</li> */}
                        </ul>
                    </div>
                    <div className={style.content}>
                        <div className={style.comment__user_post}>
                            <div className={style.user_img}> 
                            <img src="/imageDien/img/45e22dc9b97aa2370e6246cdd8f1f8d66cad947d.jpg" alt=""/>                           
                            </div>
                            <div className={style.user_name}><a href="#">{blog.username}</a> </div>
                            <div className={style.time_post}> <br />{blog.createdAt}</div>
                        </div>
                        <div className={style.detail__title}>
                            <h1>
                                {blog.title}
                            </h1>
                        </div>
                        <div className={style.detail__img}>
                            <img src="/imageDien/img/item.jpg" alt=""/> 
                        </div>
                        <div className={style.detail__content}>
                            <p>{blog.content}</p>
                        </div>
                        <div className={style.detail__rate}>
                            <div className={style.rate__like}>
                                <FaThumbsUp />
                                <p>{blog.karma} lượt thích</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <div className={style.comment__list}>
                            <h1>Comment</h1>
                            <div className={style.comment__list__item}>
                                <div className={style.user_img}><img
                                    src={blog.photoURL || `/icons/hacker.png`} alt=""/> 
                                </div>
                                <div className={style.user_name}><a href="#">Username</a> </div>
                                <br/>
                                <div className={style.time_comment}><a href="#">4 giờ trước</a> </div>
                                <br/>
                                <div className={style.user_comment}>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!</p>
                                </div>
                            </div>
                            <div className={style.comment__list__item}>
                                <div className={style.user_img}><img
                                        src="/imageDien/img/45e22dc9b97aa2370e6246cdd8f1f8d66cad947d.jpg" alt=""/> 
                                </div>
                                <div className={style.user_name}><a href="#">Username</a> </div>
                                <br/>
                                <div className={style.time_comment}><a href="#">4 giờ trước</a> </div>
                                <br/>
                                <div className={style.user_comment}>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!</p>
                                </div>
                            </div>
                            <div className={style.comment__list__pagination}><a href="#">Hiển thị thêm bình luân / Phân
                                    trang</a>
                            </div>
                        </div>
                        <div className={style.comment__box}>
                            <div className={style.user_img}><img src="/imageDien/img/45e22dc9b97aa2370e6246cdd8f1f8d66cad947d.jpg"
                                    alt=""/> 
                            </div>
                            <div className={style.user_comment}>
                                <form>
                                    <label htmlFor="name">Comment here</label>
                                    <br/>
                                    <input type="text" name="name" id="name"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={style.post_related}>
                        <div className={style.post_related__title}>
                            <h1>Post related</h1>
                        </div>

                        <div className={style.card}>
                            <div className={style.card__header}>
                                <img src="/imageDien/img/download.jpg" alt="card__image" className={style.card__image} width="600"/>
                            </div>
                            <div className={style.card__body}>
                                <span  className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non
                                    nemo doloribus.
                                    Doloremque, nihil! At ea atque quidem!</p>

                            </div>
                            <div className={style.card__footer}>
                                <div className={style.user}>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={style.user__image}/>
                                    <div className={style.user__info}>
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>

                                </div>
                                <div className={style.rate}>
                                    <p>Like: 5</p>
                                    <p>Comment:  4</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card__header}>
                                <img src="/imageDien/img/download.jpg" alt="card__image" className={style.card__image} width="600"/>
                            </div>
                            <div className={style.card__body}>
                                <span  className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non
                                    nemo doloribus.
                                    Doloremque, nihil! At ea atque quidem!</p>
                            </div>
                            <div className={style.card__footer}>
                                <div className={style.user}>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={style.user__image}/>
                                    <div className={style.user__info}>
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>

                                </div>
                                <div className={style.rate}>
                                    <p>Like: 5</p>
                                    <p>Comment:  4</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card__header}>

                                <img src="/imageDien/img/download.jpg" alt="card__image" className={style.card__image} width="600"/>
                            </div>
                            <div className={style.card__body}>
                                <span  className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non
                                    nemo doloribus.
                                    Doloremque, nihil! At ea atque quidem!</p>

                            </div>
                            <div className={style.card__footer}>
                                <div className={style.user}>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={style.user__image}/>
                                    <div className={style.user__info}>
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>

                                </div>
                                <div className={style.rate}>
                                    <p>Like: 5</p>
                                    <p>Comment:  4</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card__header}>

                                <img src="/imageDien/img/download.jpg" alt="card__image" className={style.card__image} width="600"/>
                            </div>
                            <div className={style.card__body}>
                                <span  className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non
                                    nemo doloribus.
                                    Doloremque, nihil! At ea atque quidem!</p>

                            </div>
                            <div className={style.card__footer}>
                                <div className={style.user}>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={style.user__image}/>
                                    <div className={style.user__info}>
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>

                                </div>
                                <div className={style.rate}>
                                    <p>Like: 5</p>
                                    <p>Comment:  4</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card__header}>
                                <img src="/imageDien/img/download.jpg" alt="card__image" className={style.card__image} width="600"/>
                            </div>
                            <div className={style.card__body}>
                                <span  className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non
                                    nemo doloribus.
                                    Doloremque, nihil! At ea atque quidem!</p>

                            </div>
                            <div className={style.card__footer}>
                                <div className={style.user}>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={style.user__image}/>
                                    <div className={style.user__info}>
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>

                                </div>
                                <div className={style.rate}>
                                    <p>Like: 5</p>
                                    <p>Comment:  4</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card__header}>
                                <img src="/imageDien/img/download.jpg" alt="card__image" className={style.card__image} width="600"/>
                            </div>
                            <div className={style.card__body}>
                                <span  className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non
                                    nemo doloribus.
                                    Doloremque, nihil! At ea atque quidem!</p>

                            </div>
                            <div className={style.card__footer}>
                                <div className={style.user}>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={style.user__image}/>
                                    <div className={style.user__info}>
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>

                                </div>
                                <div className={style.rate}>
                                    <p>Like: 5</p>
                                    <p>Comment:  4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default index;