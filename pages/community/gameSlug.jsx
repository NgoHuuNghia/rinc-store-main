import style from '@styles/publicDien/css/style.module.scss'
import {FaThumbsUp} from 'react-icons/fa'

const index = () => {
    return (
        <div className={style.container}>
            <section className={style.community__detail}>
                <div className={style.community__detail__main}>
                    <div className={style.bread_crumb}>
                        <ul>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Truck-simulator</a></li>
                            <li><a href="#">Screenshot</a></li>
                            <li>Italy</li>
                        </ul>
                    </div>
                    <div className={style.content}>
                        <div className={style.comment__user_post}>
                            <div className={style.user_img}> 
                            <img src="/imageDien/img/45e22dc9b97aa2370e6246cdd8f1f8d66cad947d.jpg" alt=""/>                           
                            </div>
                            <div className={style.user_name}><a href="#">Username</a> </div>
                            <div className={style.time_post}> <br /> 3 giờ trước</div>
                        </div>
                        <div className={style.detail__title}>
                            <h1>
                                "Wow What An Amazing Sunset I'm Speechless"
                            </h1>
                        </div>
                        <div className={style.detail__img}>
                            <img src="/imageDien/img/item.jpg" alt=""/> 
                        </div>
                        <div className={style.detail__content}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                to make a type specimen
                                book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                                Ipsum.</p>
                        </div>
                        <div className={style.detail__rate}>
                            <div className={style.rate__like}>
                                <FaThumbsUp />
                                <p>5 lượt thích</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.comment}>
                        <div className={style.comment__list}>
                            <h1>Comment</h1>
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