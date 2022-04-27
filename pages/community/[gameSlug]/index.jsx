
import style from '@styles/publicDien/css/slug.module.scss'

function App() {
     return (
       <div className={style.container}>
            <section className={style.community}>
                <header>
                    <div className={style.community__header__title}>
                        <h1>Game Name</h1>
                    </div>
                </header>
                <div className={style.community__main}>
                    <div className={style.community__main__menu}>
                        <ul>
                            <li><a href=" #">Tất cả</a></li>
                            <li><a href=" #">Ảnh chụp</a></li>
                            <li><a href=" #">Tranh vẽ</a></li>
                            <li><a href=" #">Videos</a></li>
                            <li><a href=" #">Tin mới</a></li>
                            <li><a href=" #">Hướng dẫn</a></li>
                            <li><a href=" #">Đánh giá</a></li>
                        </ul>
                    </div>
                    <div className={style.space_main}></div>
                    <div className={style.community__main__content}>
                        <div className={style.form__post}>
                      <p> Start a new post</p>  
                        <div className={style.container}>
                            <form action="/">
                                <div className={style.row}>
                                    <input type="text" id="title" name="title" placeholder="Enter Title.."/>
                                </div>
                                <div className={style.row}>
                                    <textarea type="text" id="content" name="content" placeholder="Say something.."/>
                                </div>
    
                                <div className={style.row}>

                                    <div className={style.col-25}>
                                        <select id="category" name="category">
                                            <option value="Screenshot">Screenshot</option>
                                            <option value="Work at">Work at</option>
                                            <option value="Guide">Guide</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className={style.row}>
                                    <input type="submit" value="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                        <h1>Trang chính</h1>
                        
                        <div className={style.community__main__content__home}>
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                            <div className={style.card}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                        </div>
                        {/* <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card__w70}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                        </div>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card__w100}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                        </div>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                        </div>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card__w70}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                        </div>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card__w50}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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

                        </div>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card__w100}>
                                <div className={style.card__header}>
                                    <img src="imageDien/img/download.jpg" alt="card__image" className={style.card__image}
                                        width="600" />
                                </div>
                                <div className={style.card__body}>
                                    <span className={`${style.tag} ${style.tag_red}`}>American Truck Simulator</span>
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                                    <h4>What&rsquo;s new in 2022 Tech</h4>
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
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;