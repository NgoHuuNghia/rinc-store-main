import { dateToJsonLocal, firestore } from '@lib/firebase';
import { UserContext } from '@lib/globalContext';
import style from '@styles/publicDien/css/style.module.scss'
import { collection, collectionGroup, doc, getDocs, limit, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

//? HARD limit on the post
const LIMIT = 10

export async function getServerSideProps(){
    const ref = collectionGroup(firestore, 'blogs');
    const blogsDescQuery = query(
        ref,
        orderBy('createdAt', 'desc'),
        limit(LIMIT),
    )

    const blogsDesc = (await getDocs(blogsDescQuery)).docs.map((doc) => dateToJsonLocal(doc));

    return {
        props: { blogsDesc }, // will be passed to the page component as props
    };
}

const Index = ({blogsDesc}) => {
    const [blogController, setBlogController] = useState({title: '', content: ''})
    const { user, username } = useContext(UserContext)

    const setNewBlog = async(e) => {
        e.preventDefault()

        if(Object.values(blogController).every(data => data !== null && data.length >= 1)){
            const tempGameSlug = 'darksouls'
            const userBlogRef = collection(firestore, 'games', tempGameSlug, 'community', user.uid, 'blogs')
            const generatedBlogId = doc(userBlogRef).id
            await setDoc(
                doc(firestore, 'games', tempGameSlug, 'community', user.uid, 'blogs', generatedBlogId),
                {
                    ...blogController,
                    blogId: generatedBlogId,
                    gameSlug: tempGameSlug,
                    gameTitle: tempGameSlug,
                    images: [],
                    karma: 0,
                    uid: user.uid,
                    username: username,
                    photoURL: user.photoURL || '',
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                }
            )

            setBlogController({title: '', content: ''})
            toast.success('Blog posted successfully!')
        } else toast.error("Blog need a title and content!")
    }

    return (
        <div className={style.container}>
            <section className={style.community}>
                <div>
                    <div className={style.community__header__title}>
                        <h1>Community Activity</h1>
                        <p>
                            Community and official content for all games and software on Steam.
                            Rinc-store.
                        </p>
                    </div>
                    <div className={style.community__header__home}>
                        <div className={style.left}>
                            <p>Welcome to the Steam Community</p>
                            <p>
                                Log in to the Steam Community to find more Hubs to browse.
                            </p>
                            <a href=" #">Login</a>
                            <p>Hoặc</p>
                            <a href="#">Signup</a>
                            <p>New to Steam? <a href="#">Learn more.</a></p>
                        </div>
                        <div className={style.right}>
                            <div className={style.right_title}>
                                <p>POPULAR HUBS</p>
                            </div>
                            <div className={style.list_app}>
                                <div className={style.app}>
                                    <div className={style.app_shortcut}>
                                        <div className={style.app_shortcut_img}>
                                            <img src="imageDien/img/csgo.jpg" alt="" />
                                        </div>
                                        <div className={style.app_shortcut_text}>
                                            <div className={style.app_name}>
                                                <p>Counter-Strike: Global Offensive</p>
                                            </div>
                                            <a href="#">152 New blog this week</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.app}>
                                    <div className={style.app_shortcut}>
                                        <div className={style.app_shortcut_img}>
                                            <img src="imageDien/img/csgo.jpg" alt="" />
                                        </div>
                                        <div className={style.app_shortcut_text}>
                                            <div className={style.app_name}>
                                                <p>Counter-Strike: Global Offensive</p>
                                            </div>
                                            <a href="#">152 New blog this week</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.app}>
                                    <div className={style.app_shortcut}>
                                        <div className={style.app_shortcut_img}>
                                            <img src="imageDien/img/csgo.jpg" alt="" />
                                        </div>
                                        <div className={style.app_shortcut_text}>
                                            <div className={style.app_name}>
                                                <p>Counter-Strike: Global Offensive</p>
                                            </div>
                                            <a href="#">152 New blog this week</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.app}>
                                    <div className={style.app_shortcut}>
                                        <div className={style.app_shortcut_img}>
                                            <img src="imageDien/img/csgo.jpg" alt="" />
                                        </div>
                                        <div className={style.app_shortcut_text}>
                                            <div className={style.app_name}>
                                                <p>Counter-Strike: Global Offensive</p>
                                            </div>
                                            <a href="#">152 New blog this week</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.search_box}>
                            <div className={style.search_user}>
                                <div className={style.search_title}>
                                    <p>FIND USER</p>
                                </div>
                                <div className={style.search_container}>
                                    <form action="/">
                                        <input type="text" placeholder="Tìm kiếm" name="search" />
                                    </form>
                                </div>
                            </div>
                            <div className={style.community_home_search_divider}></div>
                            <div className={style.search_user}>
                                <div className={style.search_title}>
                                    <p>FIND HUBS</p>
                                </div>
                                <div className={style.search_container}>
                                    <form action="/">
                                        <input type="text" placeholder="Tìm kiếm" name="search" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {user && username
                        && (
                            <div className={style.form__post}>
                                Start a new post
                                <div className={style.container}>
                                    <form onSubmit={setNewBlog}>
                                        <div className={style.row}>
                                            <input type="text" id="title" name="title" placeholder="Enter Title.."
                                                value={blogController?.title}
                                                onChange={(e) => setBlogController({...blogController, title: e.target.value})}
                                            />
                                        </div>
                                        <div className={style.row}>
                                            <textarea id="content" name="content" placeholder="Say something.."
                                                value={blogController?.content}
                                                onChange={(e) => setBlogController({...blogController, content: e.target.value})}
                                            />
                                        </div>
                                        {/* <div className={style.row}>
                                            <div className={style.col_25}>
                                                <select id=" category" name="category">
                                                    <option value="australia">Screenshot</option>
                                                    <option value="canada">Work at</option>
                                                    <option value="usa">Guide</option>
                                                </select>
                                            </div>
                                        </div>     */}
                                        <div className={style.row}>
                                            <input type="submit" value="Submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={style.community__main}>
                    <div className={style.community__main__menu}>
                        <ul>
                            <li><a href="#">ALL</a></li>
                            <li><a href="#">Screenshots</a></li>
                            <li><a href="#">Artworks</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                    <div className={style.space_main}></div>
                    <div className={style.community__main__content}>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            {blogsDesc?.map(blog => {
                                return (
                                    <Link key={blog.blogId} href={`/community/${blog.gameSlug}/${blog.uid}/${blog.blogId}`}>
                                        <div className={style.card__w70}>
                                            <div className={style.card__header}>
                                                <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                                    width="600" />
                                            </div>
                                            <div className={style.card__body}>
                                                <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                                <h4>{blog.title}</h4>
                                                <p>{blog.content}</p>
                                            </div>
                                            <div className={style.card__footer}>
                                                <div className={style.user}>
                                                    <img src={blog.photoURL || `/icons/hacker.png`} alt="user__image"
                                                        className={style.user__image} />
                                                    <div className={style.user__info}>
                                                        <h5>{blog.username}</h5>
                                                        <small>{blog.createdAt}</small>
                                                    </div>
                                                </div>
                                                <div className={style.rate}>
                                                    <p className={style.rate_like}> Thích: {blog.karma}</p>
                                                    <p className={style.rate_comment}> Bình luận: 4</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                            {/* <div className={style.card__w30}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w100}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w30}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w70}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What's new in 2022 Tech</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                                        ea atque quidem!
                                    </p>
                                </div>
                                <div className={style.card__footer}>
                                    <div className={style.user}>
                                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image"
                                            className={style.user__image} />
                                        <div className={style.user__info}>
                                            <h5>Jane Doe</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <div className={style.rate}>
                                        <p className={style.rate_like}> Thích: 5</p>
                                        <p className={style.rate_comment}> Bình luận: 4</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Index;