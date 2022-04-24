import style from '@styles/publicDien/css/style.module.scss'

const index = () => {
    return (
        <div className={style.container}>
            <section className={style.community}>
                <header>
                    <div className={style.community__header__title}>
                        <h1>Hoạt động cộng đồng</h1>
                        <p>
                            Cộng đồng và nội dung chính thức cho mọi trò chơi và phần mềm trên
                            Rinc-store.
                        </p>
                    </div>
                    <div className={style.community__header__home}>
                        <div className={style.left}>
                            <p>Chào mừng bạn đến với cộng đồng Rincstore</p>
                            <p>
                                Đăng nhập vào cộng đồng Rincstore để duyệt những trung tâm mới.
                            </p>
                            <a href=" #">Đăng nhập</a>
                            <p>Hoặc</p>
                            <a href="#">Đăng ký</a>
                            <p>Mới dùng Rinc-store? <a href="#">Tìm hiểu thêm</a></p>
                        </div>
                        <div className={style.right}>
                            <div className={style.right_title}>
                                <p>TRÒ CHƠI PHỔ BIẾN</p>
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
                                            <a href="#">152 Tin mới tuần này</a>
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
                                            <a href="#">152 Tin mới tuần này</a>
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
                                            <a href="#">152 Tin mới tuần này</a>
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
                                            <a href="#">152 Tin mới tuần này</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.search_box}>
                            <div className={style.search_user}>
                                <div className={style.search_title}>
                                    <p>TÌM KIẾM USER</p>
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
                                    <p>TÌM KIẾM TRÒ CHƠI</p>
                                </div>
                                <div className={style.search_container}>
                                    <form action="/">
                                        <input type="text" placeholder="Tìm kiếm" name="search" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={style.community__main}>
                    <div className={style.community__main__menu}>
                        <ul>
                            <li><a href="#">Tất cả</a></li>
                            <li><a href="#">Ảnh chụp</a></li>
                            <li><a href="#">Tranh vẽ</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Tin mới</a></li>
                            <li><a href="#">Hướng dẫn</a></li>
                            <li><a href="#">Đánh giá</a></li>
                        </ul>
                    </div>
                    <div className={style.space_main}></div>
                    <div className={style.community__main__content}>
                        <h1>Trang chính</h1>
                        <div className={style.community__main__content__home}>
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                            <div className={style.card}>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1RLQXMnblA0"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default index;