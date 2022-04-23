import styles1 from '@styles/publicHai/shared/css/motiva_sans.module.css'
import styles2 from '@styles/publicHai/shared/css/buttons.css'
import styles3 from '@styles/publicHai/shared/css/shared_global.css'
import styles4 from '@styles/publicHai/css/globalv2.css'
import styles5 from '@styles/publicHai/css/skin_1/modalContent.css'
import styles6 from '@styles/publicHai/css/skin_1/profilev2.css'
import styles7 from '@styles/publicHai/shared/css/motiva_sans.css'
import styles8 from '@styles/publicHai/css/promo/summer2017/stickers.css'
import styles9 from '@styles/publicHai/shared/css/shared_responsive.css'
import styles10 from '@styles/publicHai/css/skin_1/header.css'

const index = () => {
    return (
        <body>  
            {
            /* <head>
                <link href="@styles/publicHai/shared/css/motiva_sans.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/shared/css/buttons.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/shared/css/shared_global.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/css/globalv2.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/css/skin_1/modalContent.css" type="text/css" />
                <link href="@styles/publicHai/css/skin_1/profilev2.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/shared/css/motiva_sans.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/css/promo/summer2017/stickers.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/shared/css/shared_responsive.css" rel="stylesheet" type="text/css" />
                <link href="@styles/publicHai/css/skin_1/header.css" rel="stylesheet" type="text/css" />
            </head> */
            }
            <div class="responsive_page_frame with_header">
                <div class="responsive_page_menu_ctn mainmenu">
                    <div class="responsive_page_menu" id="responsive_page_menu">
                        <div class="mainmenu_contents">
                            <div class="mainmenu_contents_items">
                                <a class="menuitem" href="../TrangCaNhan/canhan.html"> Login </a>
                                <a class="menuitem supernav" href="https://store.steampowered.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_store"> Store </a>
                                <div class="submenu_store" style={{display: 'none'}} data-submenuid="store">
                                    <a class="submenuitem" href="../TrangCaNhan/canhan.html">Home</a>
                                    <a class="submenuitem" href="../Review/review.html">Review</a>
                                    <a class="submenuitem" href="my/wishlist/">Wishlist</a>
                                    <a class="submenuitem" href="https://store.steampowered.com/points/shop/">Points Shop</a>
                                    <a class="submenuitem" href="https://store.steampowered.com/news/">News</a>
                                    <a class="submenuitem" href="../Login/login.html">Login</a>
                                </div>

                                <a class="menuitem supernav" style={{display: 'block'}} href="" data-tooltip-type="selector" data-tooltip-content=".submenu_community"> Community </a>
                                <div class="submenu_community" style={{display: 'none'}} data-submenuid="community">
                                    <a class="submenuitem" href="../TrangCaNhan/canhan.html">Home</a>
                                    <a class="submenuitem" href="../Review/review.html">Review</a>
                                    <a class="submenuitem" href="my/wishlist/">Wishlist</a>
                                    <a class="submenuitem" href="https://store.steampowered.com/points/shop/">Points Shop</a>
                                    <a class="submenuitem" href="https://store.steampowered.com/news/">News</a>
                                    <a class="submenuitem" href="../Login/login.html">Login</a>
                                </div>

                                <a class="menuitem" href="https://help.steampowered.com/en/"> Support </a>

                                <div class="minor_menu_items">
                                    <div class="menuitem change_language_action">Change language</div>
                                    <div class="menuitem">View desktop website</div>
                                </div>
                            </div>
                            <div class="mainmenu_footer_spacer"></div>
                            <div class="mainmenu_footer">
                                <div class="mainmenu_footer_logo">
                                    <img src="public/shared/images/responsive/logo_valve_footer.png" />
                                </div>
                                © Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                                <span class="mainmenu_valve_links">
                                    <a href="https://store.steampowered.com/privacy_agreement/" target="_blank">#footer_privacy_policy</a>
                                    &nbsp;| &nbsp;<a href="http://www.valvesoftware.com/legal.htm" target="_blank">#footer_legal</a> &nbsp;| &nbsp;<a
                                        href="https://store.steampowered.com/subscriber_agreement/"
                                        target="_blank"
                                        >#footer_ssa</a
                                    >
                                    &nbsp;| &nbsp;<a href="https://store.steampowered.com/steam_refunds/" target="_blank">#footer_refunds</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="responsive_local_menu_tab"></div>

                <div class="responsive_page_menu_ctn localmenu">
                    <div
                        class="responsive_page_menu"
                        id="responsive_page_local_menu"
                        data-panel='{"onOptionsActionDescription":"#filter_toggle","onOptionsButton":"Responsive_ToggleLocalMenu()","onCancelButton":"Responsive_ToggleLocalMenu()"}'
                    >
                        <div class="localmenu_content" data-panel='{"maintainY":true,"bFocusRingRoot":true,"flow-children":"column"}'></div>
                    </div>
                </div>

                <div class="responsive_header">
                    <div class="responsive_header_content">
                        <div id="responsive_menu_logo">
                            <img src="public/shared/images/responsive/header_menu_hamburger.png" height="100%" />
                        </div>
                        <div class="responsive_header_logo">
                            <a href="https://store.steampowered.com/">
                                <img src="public/shared/images/responsive/header_logo.png" height="36" border="0" alt="STEAM" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="responsive_page_content_overlay"></div>

                <div class="responsive_fixonscroll_ctn nonresponsive_hidden"></div>

                <div class="responsive_page_content">
                    <div
                        id="webui_config"
                        style={{display: 'none'}}
                        data-config='{"EUNIVERSE":1,"WEB_UNIVERSE":"public","LANGUAGE":"english","COUNTRY":"SG","MEDIA_CDN_COMMUNITY_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/steamcommunity\/public\/","MEDIA_CDN_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/","COMMUNITY_CDN_URL":"https:\/\/community.cloudflare.steamstatic.com\/","COMMUNITY_CDN_ASSET_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/steamcommunity\/public\/assets\/","STORE_CDN_URL":"https:\/\/store.cloudflare.steamstatic.com\/","PUBLIC_SHARED_URL":"https:\/\/community.cloudflare.steamstatic.com\/public\/shared\/","COMMUNITY_BASE_URL":"https:\/\/steamcommunity.com\/","CHAT_BASE_URL":"https:\/\/steamcommunity.com\/","STORE_BASE_URL":"https:\/\/store.steampowered.com\/","IMG_URL":"https:\/\/community.cloudflare.steamstatic.com\/public\/images\/","STEAMTV_BASE_URL":"https:\/\/steam.tv\/","HELP_BASE_URL":"https:\/\/help.steampowered.com\/","PARTNER_BASE_URL":"https:\/\/partner.steamgames.com\/","STATS_BASE_URL":"https:\/\/partner.steampowered.com\/","INTERNAL_STATS_BASE_URL":"https:\/\/steamstats.valve.org\/","IN_CLIENT":false,"USE_POPUPS":false,"STORE_ICON_BASE_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/steam\/apps\/","WEBAPI_BASE_URL":"https:\/\/api.steampowered.com\/","TOKEN_URL":"https:\/\/steamcommunity.com\/chat\/clientjstoken","BUILD_TIMESTAMP":1649205368,"PAGE_TIMESTAMP":1649255769,"IN_TENFOOT":false,"IN_GAMEPADUI":false,"PLATFORM":"macos","BASE_URL_STORE_CDN_ASSETS":"https:\/\/cdn.cloudflare.steamstatic.com\/store\/","EREALM":1,"LOGIN_BASE_URL":"https:\/\/login.steampowered.com\/","SNR":"2_100300_DefaultAction_"}'
                        data-userinfo="[]"
                    ></div>
                    <div
                        id="application_config"
                        style={{display: 'none'}}
                        data-config='{"EUNIVERSE":1,"WEB_UNIVERSE":"public","LANGUAGE":"english","COUNTRY":"SG","MEDIA_CDN_COMMUNITY_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/steamcommunity\/public\/","MEDIA_CDN_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/","COMMUNITY_CDN_URL":"https:\/\/community.cloudflare.steamstatic.com\/","COMMUNITY_CDN_ASSET_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/steamcommunity\/public\/assets\/","STORE_CDN_URL":"https:\/\/store.cloudflare.steamstatic.com\/","PUBLIC_SHARED_URL":"https:\/\/community.cloudflare.steamstatic.com\/public\/shared\/","COMMUNITY_BASE_URL":"https:\/\/steamcommunity.com\/","CHAT_BASE_URL":"https:\/\/steamcommunity.com\/","STORE_BASE_URL":"https:\/\/store.steampowered.com\/","IMG_URL":"https:\/\/community.cloudflare.steamstatic.com\/public\/images\/","STEAMTV_BASE_URL":"https:\/\/steam.tv\/","HELP_BASE_URL":"https:\/\/help.steampowered.com\/","PARTNER_BASE_URL":"https:\/\/partner.steamgames.com\/","STATS_BASE_URL":"https:\/\/partner.steampowered.com\/","INTERNAL_STATS_BASE_URL":"https:\/\/steamstats.valve.org\/","IN_CLIENT":false,"USE_POPUPS":false,"STORE_ICON_BASE_URL":"https:\/\/cdn.cloudflare.steamstatic.com\/steam\/apps\/","WEBAPI_BASE_URL":"https:\/\/api.steampowered.com\/","TOKEN_URL":"https:\/\/steamcommunity.com\/chat\/clientjstoken","BUILD_TIMESTAMP":1649205368,"PAGE_TIMESTAMP":1649255769,"IN_TENFOOT":false,"IN_GAMEPADUI":false,"PLATFORM":"macos","BASE_URL_STORE_CDN_ASSETS":"https:\/\/cdn.cloudflare.steamstatic.com\/store\/","EREALM":1,"LOGIN_BASE_URL":"https:\/\/login.steampowered.com\/","SNR":"2_100300_DefaultAction_"}'
                        data-userinfo="[]"
                        data-community="[]"
                        data-loyaltystore='{"webapi_token":""}'
                    ></div>
                    <link href="public/css/applications/community/main.css" rel="stylesheet" type="text/css" />
                    <div data-featuretarget="profile-rewards"></div>
                    <div id="application_root"></div>

                    <div class="responsive_page_template_content" id="responsive_page_template_content" data-panel='{"autoFocus":true}'>

                        <div
                            class="no_header profile_page has_profile_background"
                            style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/883710/8f4030e5e345f51f1c2bacaf410dacb4d4f8bd52.jpg')"}}
                        >
                            <div class="profile_header_bg">
                                <div class="profile_header_bg_texture" style={{backgroundColor: '#1e070d'}}>
                                    <div class="profile_header">
                                        <div class="profile_header_content">
                                            <div class="profile_header_centered_persona">
                                                <div class="persona_name" style={{fontSize: '24px'}}>
                                                    <span class="actual_persona_name">Hoàng Chung</span>
                                                    <span class="namehistory_link">
                                                        <img id="getnamehistory_arrow" src="public/images/skin_1/arrowDn9x5.gif" width="9" height="5" border="0" />
                                                    </span>
                                                    <div id="NamePopup" class="popup_block_new" style={{display: 'none'}}>
                                                        <div class="popup_body popup_menu">
                                                            <div>This user has also played as:</div>
                                                            <div id="NamePopupAliases"></div>
                                                            <div style={{display: 'none'}} id="NamePopupClearAliases"></div>
                                                            <div style={{clear: 'both'}}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="header_real_name ellipsis">
                                                    <bdi></bdi>
                                                    HCM, Việt Nam
                                                </div>
                                            </div>

                                            <div class="playerAvatar profile_header_size offline" data-miniprofile="62146480">
                                                <div class="playerAvatarAutoSizeInner">
                                                    <div class="profile_avatar_frame">
                                                        <img src="public/images/items/ebe6b674deca163b28423e3b925bd36b0f0f357b.png" />
                                                    </div>
                                                    <img src="add.jpg" />
                                                </div>
                                            </div>

                                            <div class="profile_header_badgeinfo">
                                                <div class="profile_header_badgeinfo_badge_area">
                                                    <a data-panel='{"focusable":true,"clickOnActivate":true}' class="persona_level_btn" href="id/straightmiz/badges">
                                                        <div class="persona_name persona_level">
                                                            Level
                                                            <div class="friendPlayerLevel lvl_70">
                                                                <span class="friendPlayerLevelNum">76</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div class="profile_header_badge">
                                                        <a href="id/straightmiz/badges/1" class="favorite_badge">
                                                            <div
                                                                class="favorite_badge_icon"
                                                                data-tooltip-html="Years of Service<br>Member since 14 March, 2010."
                                                            >
                                                                <img src="public/images/badges/02_years/steamyears12_54.png" class="badge_icon small" />
                                                            </div>
                                                            <div class="favorite_badge_description">
                                                                <div class="name ellipsis">Years of Service</div>
                                                                <div class="xp">600 XP</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="profile_header_actions"></div>
                                            </div>

                                            <div class="profile_header_summary">
                                                <div class="persona_name persona_name_spacer" style={{fontSize: '24px'}}>
                                                    <span class="actual_persona_name">&nbsp;</span>
                                                </div>
                                                <div class="header_real_name_spacer">&nbsp;</div>
                                                <div class="profile_summary">
                                                    I am writing reviews for
                                                    <a class="bb_link" href="https://store.steampowered.com/curator/38553778-All-about-Strategy-Games/" target="_blank" rel="noreferrer">
                                                        my Curator Page on Steam which you can find here!</a
                                                    >
                                                    <br />If you're a developer and want your game to be reviewed, don't hesitate to contact me.
                                                </div>
                                                <div class="profile_summary_footer">
                                                    <span data-panel='{"focusable":true,"clickOnActivate":true}' class="whiteLink">View more info</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="profile_content has_profile_background">
                                <div class="profile_content_inner" style={{backgroundColor: '#1e070d'}}>
                                    <div class="profile_rightcol">
                                        <div class="responsive_status_info">
                                            <div class="profile_in_game persona offline">
                                                <div class="profile_in_game_header">Currently Offline</div>
                                            </div>
                                        </div>

                                        <div class="responsive_count_link_area">
                                            <div data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}' class="profile_awards">
                                                <div class="profile_count_link_preview_ctn" data-panel='{"focusable":true,"clickOnActivate":true}'>
                                                    <div class="profile_count_link_preview">
                                                        <div style={{clear: 'left'}}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}' class="profile_badges">
                                                <div class="profile_count_link_preview_ctn" data-panel='{"focusable":true,"clickOnActivate":true}'>
                                                    <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis"></div>
                                                    <div class="profile_count_link_preview">
                                                        <div
                                                            class="profile_badges_badge"
                                                            data-tooltip-html="Game Industry Guardian&lt;br&gt;1,723 games owned"
                                                        >
                                                            <a href="id/straightmiz/badges/13">
                                                                <img src="public/images/badges/13_gamecollector/1000_54.png?v=4" class="badge_icon small" />
                                                            </a>
                                                        </div>
                                                        <div
                                                            class="profile_badges_badge"
                                                            data-tooltip-html="Years of Service&lt;br&gt;Member since 14 March, 2010."
                                                        >
                                                            <a href="id/straightmiz/badges/1">
                                                                <img src="public/images/badges/02_years/steamyears12_54.png" class="badge_icon small" />
                                                            </a>
                                                        </div>
                                                        <div
                                                            class="profile_badges_badge"
                                                            data-tooltip-html="Steam Awards 2021 - 2&lt;br&gt;Level 2 The Steam Awards - 2021 Badge"
                                                        >
                                                            <a href="id/straightmiz/gamecards/1797760">
                                                                <img src="public/images/items/0808f4a3d2423f68d5b364f4e670ea917a002a8f.png" class="badge_icon small" />
                                                            </a>
                                                        </div>
                                                        <div class="profile_badges_badge last" data-tooltip-html="Winter 2021 - Badge Level 11&lt;br&gt;Level 11 Winter Sale 2021 Badge">
                                                            <a href="id/straightmiz/gamecards/1846860">
                                                                <img src="public/images/items/86bd66aa6980ec025d9070783a05bd0b0df5f061.png" class="badge_icon small" />
                                                            </a>
                                                        </div>
                                                        <div style={{clear: 'left'}}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}' id="responsive_groupfriends_element_ctn"></div>

                                            <div data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}' class="profile_item_links">
                                                <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                    <a href="id/straightmiz/games/?tab=all">
                                                        <span class="count_link_label">Games</span>&nbsp;
                                                        <span class="profile_count_link_total"> 1,723 </span>
                                                    </a>
                                                </div>
                                                <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                    <a href="id/straightmiz/inventory/">
                                                        <span class="count_link_label">Inventory</span>&nbsp;
                                                        <span class="profile_count_link_total">
                                                            &nbsp;
                                                        </span>
                                                    </a>
                                                </div>
                                                <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                    <a href="id/straightmiz/screenshots/">
                                                        <span class="count_link_label">Screenshots</span>&nbsp;
                                                        <span class="profile_count_link_total"> 509 </span>
                                                    </a>
                                                </div>
                                                <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                    <a href="id/straightmiz/myworkshopfiles/">
                                                        <span class="count_link_label">Workshop Items</span>&nbsp;
                                                        <span class="profile_count_link_total"> 1 </span>
                                                    </a>
                                                </div>
                                                <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                    <a href="id/straightmiz/recommended/">
                                                        <span class="count_link_label">Reviews</span>&nbsp;
                                                        <span class="profile_count_link_total"> 212 </span>
                                                    </a>
                                                </div>
                                                <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                    <a href="id/straightmiz/images/">
                                                        <span class="count_link_label">Artwork</span>&nbsp;
                                                        <span class="profile_count_link_total"> 1 </span>
                                                    </a>
                                                </div>
                                                <div style={{clear: 'left'}}></div>
                                            </div>
                                        </div>

                                        <div class="profile_friend_links profile_count_link_preview_ctn responsive_groupfriends_element" data-panel='{"focusable":true,"clickOnActivate":true}'>
                                            <div data-panel='{"focusable":true,"clickOnActivate":true}' class="profile_count_link ellipsis">
                                                <a href="id/straightmiz/friends/">
                                                    <span class="count_link_label">Friends</span>&nbsp;
                                                    <span class="profile_count_link_total">555</span>
                                                </a>
                                            </div>

                                            <div class="profile_topfriends profile_count_link_preview">
                                                <div data-panel='{"flow-children":"column"}' class="friendBlock persona online" data-miniprofile="208973094">
                                                    <a class="friendBlockLinkOverlay" href="id/Robszyy"></a>
                                                    <div class="friendPlayerLevel lvl_400 lvl_plus_10">
                                                        <span class="friendPlayerLevelNum">410</span>
                                                    </div>
                                                    <div class="playerAvatar online">
                                                        <img src="d79c29c565824512f01ae637139874ab6cb53511_medium.jpg" />
                                                    </div>
                                                    <div class="friendBlockContent">
                                                        Robszyy<br />
                                                        <span class="friendSmallText"> Online </span>
                                                    </div>
                                                </div>
                                                <div data-panel='{"flow-children":"column"}' class="friendBlock persona in-game" data-miniprofile="294366683">
                                                    <a class="friendBlockLinkOverlay" href="id/drnonu"></a>
                                                    <div class="friendPlayerLevel lvl_300 lvl_plus_50">
                                                        <span class="friendPlayerLevelNum">353</span>
                                                    </div>
                                                    <div class="playerAvatar in-game">
                                                        <img src="14f03922eb49dc8fd2751a35c10507c4637ff61c_medium.jpg" />
                                                    </div>
                                                    <div class="friendBlockContent">
                                                        Dr. Nonu<br />
                                                        <span class="friendSmallText">
                                                            <span class="linkFriend_in-game">In-Game<br />ELDEN RING</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div data-panel='{"flow-children":"column"}' class="friendBlock persona online" data-miniprofile="15989940">
                                                    <a class="friendBlockLinkOverlay" href="id/sixaratm"></a>
                                                    <div class="friendPlayerLevel lvl_300 lvl_plus_40">
                                                        <span class="friendPlayerLevelNum">340</span>
                                                    </div>
                                                    <div class="playerAvatar online">
                                                        <img src="9d2f04e95a139050f63b6f9bb32ef93438cfae29_medium.jpg" />
                                                    </div>
                                                    <div class="friendBlockContent">
                                                        Sixara™<br />
                                                        <span class="friendSmallText"> Online </span>
                                                    </div>
                                                </div>
                                                <div data-panel='{"flow-children":"column"}' class="friendBlock persona offline" data-miniprofile="297929207">
                                                    <a class="friendBlockLinkOverlay" href="id/Ratchet01_"></a>
                                                    <div class="friendPlayerLevel lvl_300 lvl_plus_30">
                                                        <span class="friendPlayerLevelNum">336</span>
                                                    </div>
                                                    <div class="playerAvatar offline">
                                                        <img src="3e58fdb42c641494c5d8cbe03be1960e55b9816b_medium.jpg" />
                                                    </div>
                                                    <div class="friendBlockContent">
                                                        ʀǟȶƈɦɛȶօ<br />
                                                        <span class="friendSmallText"> Offline </span>
                                                    </div>
                                                </div>
                                                <div data-panel='{"flow-children":"column"}' class="friendBlock persona offline" data-miniprofile="272903080">
                                                    <a class="friendBlockLinkOverlay" href="id/dabtheslab"></a>
                                                    <div class="friendPlayerLevel lvl_300 lvl_plus_20">
                                                        <span class="friendPlayerLevelNum">322</span>
                                                    </div>
                                                    <div class="playerAvatar offline">
                                                        <img src="94705500c254461ba26e5ab1e7ddfa7a7e46d36c_medium.jpg" />
                                                    </div>
                                                    <div class="friendBlockContent">
                                                        ÐΔβ<br />
                                                        <span class="friendSmallText"> Offline </span>
                                                    </div>
                                                </div>
                                                <div data-panel='{"flow-children":"column"}' class="friendBlock persona online" data-miniprofile="102849512">
                                                    <a class="friendBlockLinkOverlay" href="id/DebjitMukherjee"></a>
                                                    <div class="friendPlayerLevel lvl_300 lvl_plus_0">
                                                        <span class="friendPlayerLevelNum">308</span>
                                                    </div>
                                                    <div class="playerAvatar online">
                                                        <img src="69985e8dd72901a4a0dbbad801fa80ace1479bdc_medium.jpg" />
                                                    </div>
                                                    <div class="friendBlockContent">
                                                        Debjit_M<br />
                                                        <span class="friendSmallText"> Online </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="profile_leftcol">
                                        <div class="profile_customization_area">
                                            <div data-panel='{"type":"PanelGroup"}' class="profile_customization"></div>
                                            <div data-panel='{"type":"PanelGroup"}' class="profile_customization">
                                                <div class="profile_customization_header">Favorite Game</div>
                                                <div class="profile_customization_block">
                                                    <div class="favoritegame_showcase">
                                                        <div class="showcase_content_bg">
                                                            <div class="favoritegame_showcase_game showcase_slot">
                                                                <div class="favorite_game_cap">
                                                                    <a href="app/883710">
                                                                        <img class="game_capsule" src="steam/apps/883710/capsule_184x69.jpg" />
                                                                    </a>
                                                                </div>
                                                                <div class="showcase_item_detail_title">
                                                                    <a class="nav-link" href="review/review.html">Resident Evil 2</a>
                                                                </div>
                                                            </div>
                                                            <div class="showcase_stats_row">
                                                                <div class="showcase_stat">
                                                                    <div class="value">18.8</div>
                                                                    <div class="label">Hours played</div>
                                                                </div>
                                                                <div class="showcase_stat">
                                                                    <div class="value">24</div>
                                                                    <div class="label">Achievements</div>
                                                                </div>
                                                                <div style={{clear: 'left'}}></div>
                                                            </div>
                                                        </div>

                                                        <div class="game_info_stats">
                                                            <div class="game_info_achievements_only_ctn">
                                                                <div class="game_info_achievements">
                                                                    <div class="game_info_achievements_summary_area">
                                                                        <span class="game_info_achievement_summary">
                                                                            <a class="whiteLink" href="id/straightmiz/stats/883710/achievements/">Achievement Progress</a>
                                                                            &nbsp;
                                                                            <span class="ellipsis">24 of 44</span>
                                                                        </span>
                                                                        <div class="achievement_progress_bar_ctn">
                                                                            <div class="progress_bar" style={{width: '54%'}}></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="achievement_icons">
                                                                        <div class="game_info_achievement" data-tooltip-text="Grim Reaper">
                                                                            <a href="id/straightmiz/stats/883710/achievements/">
                                                                                <img src="public/images/apps/d91350129de16ad6c5b2161bfcb5c49fbb1324b8.jpg" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="game_info_achievement" data-tooltip-text="Broken Umbrella">
                                                                            <a href="id/straightmiz/stats/883710/achievements/">
                                                                                <img src="public/images/apps/d8eb06689661e95b79fc5c63ac5c43269f680000.jpg" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="game_info_achievement" data-tooltip-text="A Heroine Emerges">
                                                                            <a href="id/straightmiz/stats/883710/achievements/">
                                                                                <img src="public/images/apps/2873cc97e0f7b05fa24f09c60cc64156a170f506.jpg" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="game_info_achievement" data-tooltip-text="With Time to Spare">
                                                                            <a href="id/straightmiz/stats/883710/achievements/">
                                                                                <img src="public/images/apps/71efb8d837583a0c3779f56773270e3d36181244.jpg" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="game_info_achievement" data-tooltip-text="A Waist of Space">
                                                                            <a href="id/straightmiz/stats/883710/achievements/">
                                                                                <img src="public/images/apps/829617605cf477626436968af3c5be33f25671c8.jpg" />
                                                                            </a>
                                                                        </div>
                                                                        <div
                                                                            data-panel='{"focusable":true,"clickOnActivate":true}'
                                                                            class="game_info_achievement plus_more"
                                                                        >
                                                                            +19
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div style={{clear: 'both'}}></div>
                                                            </div>
                                                            <div class="game_info_stats_rule"></div>
                                                            <div class="game_info_stats_publishedfilecounts">
                                                                <span class="published_file_count_ctn">
                                                                    <span class="published_file_icon screenshot"></span>
                                                                    <a class="published_file_link" href="id/straightmiz/screenshots/?appid=883710">Screenshots 29</a>
                                                                </span>
                                                                <span class="published_file_count_ctn">
                                                                    <span class="published_file_icon recommendation"></span>
                                                                    <a class="published_file_link" href="id/straightmiz/recommended/883710/">Review 1</a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-panel='{"type":"PanelGroup"}' class="profile_customization">
                                                <div class="profile_customization_header">Review Showcase</div>
                                                <div class="profile_customization_block">
                                                    <div class="recommendation_showcase">
                                                        <div class="showcase_content_bg showcase_slot">
                                                            <div class="favoritegame_showcase_game">
                                                                <div class="favorite_game_cap">
                                                                    <a href="app/1069690">
                                                                        <img src="steam/apps/1069690/capsule_184x69.jpg" />
                                                                    </a>
                                                                </div>
                                                                <div class="showcase_item_detail_title ellipsis">
                                                                    <a class="whiteLink" href="app/1069690"> Rogue Lords </a>
                                                                </div>
                                                                <div class="favorite_game_playtime ellipsis">7.5 Hours played</div>
                                                            </div>
                                                            <div class="showcase_notes">
                                                                <div class="bb_table">
                                                                       
                                                                    <div class="bb_table_tr">
                                                                        <div class="bb_table_td">
                                                                            <a
                                                                                class="bb_link"
                                                                                href="https://store.steampowered.com/curator/38553778-All-about-Strategy-Games/"
                                                                                target="_blank"
                                                                                rel="noreferrer"
                                                                            >
                                                                                Follow my Curator Page for more Strategy Games!
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br />Rogue Lords is a roguelike turn-based strategy game.<br /> <br />
                                                                <div class="bb_h1">Story</div>
                                                                You are the devil and Deamon Hunters beat you up 10 years ago. You literally went to hell to gain more power. Now, you and your disciples
                                                                return to earth to achieve world domination.<br />The story is told through texts. Missions are called books, which are divided into
                                                                chapters, and each new chapter the book will open to tell you more about the story. Most of the text is read by a teller and the voice
                                                                acting is pretty good actually.<br /> <br />
                                                                <div class="bb_h1">Battles</div>
                                                                Before the battle starts, you can select one of three different rewards you receive if you win the battle. Depending on the reward, the
                                                                battle may be harder though.<br />Battles are turn-based. You can see the enemies' intentions at all times (What they do, who they going to
                                                                attack, and how much damage they do). Your team consists of three disciples and you have five action points in total per turn. Attacks cost
                                                                one to several action points. After using one, it needs to be recharged before using it again. Every character has an action that allows
                                                                recharging all of its (or the whole team) attacks for some AP.<br /> <br />Every character has a physical and a spiritual health bar. If one
                                                                of them gets reduced to zero, you need to attack the enemy one more time to kill him.<br />If one of your Disciples loses all of his
                                                                physical OR spiritual points, they don't die. Instead, every time they get attacked, you will lose diabolic essence. If you have no DE left,
                                                                you will lose.<br /> <br />
                                                                <div class="bb_h1">Devil Mode</div>
                                                                This is a mode used within battles. It's like cheating. You can modify health points, recharge skills, and move statuses. It's literally
                                                                cheating. The price to pay for that is diabolic essence - so use it wisely or you'll lose everything!<br /> <br />
                                                                <div class="bb_h1">Books</div>
                                                                Every book is like a mission consisting of several zones each with activities in them (like battles, events, a merchant, etc.). Sometimes
                                                                you can choose one of a few zones (Think of nodes in roguelike games). Some zones have optional side activities, too.<br /> <br />
                                                                <div class="bb_h1">Disciples</div>
                                                                Every disciple is different in his looks, characteristics, and skills. You can obtain skills in different ways. If you get the same skill
                                                                three times, it will be combined into the same with a higher rarity. You can also choose one of your three disciples in an event to do a
                                                                social test. The social test can result in gaining positive or negative traits.<br /> <br />
                                                                <div class="bb_h1">Ressources</div>
                                                                Diabolic essence and souls are your main resources. If you have no DE left, you will lose.<br />You can get souls as rewards after battles
                                                                or events. With them, you can buy or upgrade skills or get new relics.<br /> <br />
                                                                <div class="bb_h1">Terror</div>
                                                                Terror grants you new relics and a chance to get higher rarities when it comes to skills. After reaching certain points in a book, you will
                                                                get a new point. After obtaining four points, you will rank up.<br /> <br />
                                                                <div class="bb_h1">Meta Progression</div>
                                                                After every run, you will get EXP and level up. For getting achievements or leveling up, you will be rewarded with new disciples, skills, or
                                                                relics which can show up in your next books.<br /> <br /> <br />
                                                                <div class="bb_h1">The Good</div>
                                                                <ul class="bb_ul">
                                                                    <li>
                                                                        It offers a lot of content and much of it is innovative. The skill system, the devil mode, events, social tests, etc. You will
                                                                        certainly enjoy your journey if you're into it because it's not just the same over and over again. A run/book consists of several
                                                                        different happenings such as battles, events, the merchant, and more. To add to that, there will be different advantages or
                                                                        disadvantages depending on what's actually happening in the chapter, different ways to make your disciples stronger, the devil mode
                                                                        which CAN even help you out outside of battles, relics to spice things up, and more. I rarely felt that a roguelike can be this
                                                                        diversified.<br />
                                                                    </li>
                                                                    <li>
                                                                        Devil Mode. This allows for a whole new strategy and adds a pretty big tactical aspect to the game. It's very innovative, unique,
                                                                        and just VERY fun to use. It can save you big sometimes but used wrong, it can cost you the run.<br />
                                                                    </li>
                                                                    <li>
                                                                        The Skill system. If you obtain a skill you already have three times, it will be combined into a higher rarity, resulting in higher
                                                                        damage, etc.<br />
                                                                    </li>
                                                                    <li>The overall atmosphere. The music fits the theme just perfectly and the graphics are very aesthetic.<br /></li>
                                                                    <li>Battles. They are pretty well balanced IMO and as tactical as it gets. There are several different strategies to win.<br /></li>
                                                                    <li>The story is interesting, events are short but written very well and there's lore to every disciple. This is pretty neat.</li>
                                                                </ul>
                                                                 <br />
                                                                <div class="bb_h1">The Bad</div>
                                                                <ul class="bb_ul">
                                                                    <li>
                                                                        No fast mode in battles. If you are used to it because of other games, you will need to be a bit more patient - waiting for
                                                                        animations to end before clicking, etc.<br />
                                                                    </li>
                                                                    <li>
                                                                        While I think it's balanced pretty well overall, it has a few problems in the beginning. I feel like the first three disciples
                                                                        rather go for physical damage than spiritual damage. So it's a lot harder to win with spiritual attacks overall.<br />
                                                                    </li>
                                                                    <li>
                                                                        Add to that, that the game is pretty grindy. After around 5 hours I had played four runs, unlocked  ONE new disciple, and reached
                                                                        level 4 of 25. Add to that all of the achievements and you will have a LOT to look forward to. All of this could be a bit faster
                                                                        IMO.<br />
                                                                    </li>
                                                                    <li>
                                                                        Bugs. I have experienced a few bugs during my playtimes like the character getting stuck on environments and infinite loading
                                                                        screens.<br />
                                                                    </li>
                                                                    <li>
                                                                        Cheating is possible. Because of the infinite loading screen, I found out that forcing the application to close when losing a
                                                                        battle, will result in starting the battle over again. This way, you can retry as much as you want. This shouldn't be possible in a
                                                                        roguelike.<br />
                                                                    </li>
                                                                    <li>
                                                                        Some relics feel rather weak. Comparing it to other games, I often found relics/artifacts and the likes to be very strong but hard
                                                                        to get. While it is a bit easier to get them in Rogue Lords, I think some of them could be buffed a little.
                                                                    </li>
                                                                </ul>
                                                                 <br />
                                                                <div class="bb_h1">Conclusion</div>
                                                                Rogue Lords is a fantastic and addictive roguelike turn-based strategy game. It offers a lot of content, has a gorgeous art style, the music
                                                                is very atmospheric, the voice acting is great and they successfully implemented a few innovative features. A few things could be improved,
                                                                like the grind, some bugs, making spiritual attacks more viable, and adding a fast mode. Even though this sounds like a lot, I had a hell of
                                                                a time with the game. I got it pretty late last night and immediately played it for over 5 hours without taking a break.<br /> <br />Rogue
                                                                Lords is definitely a must-have for every turn-based strategy fan out there!<br /><br />
                                                                <div class="bb_table">
                                                                       
                                                                    <div class="bb_table_tr">
                                                                        <div class="bb_table_td">
                                                                            <a
                                                                                class="bb_link"
                                                                                href="https://store.steampowered.com/curator/38553778-All-about-Strategy-Games/"
                                                                                target="_blank"
                                                                                rel="noreferrer"
                                                                            >
                                                                                If you like my review and strategy games, please consider following my curator page on Steam!
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="id/straightmiz/recommended/1069690" class="btn_grey_black ico_hover btn_small_thin">
                                                                <span
                                                                    ><i class="ico16 comment"></i>
                                                                    View all 7 comments
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="profile_customization myart">
                                                <div class="profile_customization_header">Artwork Showcase</div>
                                            </div>
                                            <div data-panel='{"type":"PanelGroup"}' class="profile_customization">
                                                <div class="profile_customization_block">
                                                    <div class="awards_showcase"></div>
                                                    <div style={{clear: 'both'}}></div>
                                                </div>
                                            </div>
                                            <div class="profile_customization myscreenshots">
                                                <div class="profile_customization_header">Screenshot Showcase</div>

                                                <div class="profile_customization_block">
                                                    <div class="screenshot_showcase">
                                                        <div class="screenshot_showcase_primary showcase_slot">
                                                            <a
                                                                class="screenshot_showcase_screenshot modalContentLink ugc"
                                                                href="sharedfiles/filedetails/?id=2049186737"
                                                                data-appid="866800"
                                                                data-publishedfileid="2049186737"
                                                            >
                                                                <img width="100%" style={{maxWidth: '506px'}} src="banner01.jfif" />
                                                            </a>
                                                            <div class="screenshot_showcase_itemname">The Walking Dead: The Final Season</div>
                                                            <div class="screenshot_showcase_stats">
                                                                <span class="screenshot_showcase_stat" title="Up Votes">
                                                                    <img class="screenshot_showcase_staticon" src="public/images/sharedfiles/icons/icon_rate.png" />
                                                                    79
                                                                </span>
                                                                <span class="screenshot_showcase_stat" title="Comments">
                                                                    <img class="screenshot_showcase_staticon" src="public/images/skin_1/icon_btn_comment.png" />
                                                                    28
                                                                </span>
                                                                <span class="screenshot_showcase_stat" title="Favorites">
                                                                    <span class="screenshot_showcase_staticon favorite"></span>
                                                                    7
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="screenshot_showcase_rightcol">
                                                            <div class="screenshot_showcase_smallscreenshot showcase_slot">
                                                                <a
                                                                    class="screenshot_showcase_screenshot modalContentLink ugc"
                                                                    href="sharedfiles/filedetails/?id=2051233493"
                                                                    data-appid="952060"
                                                                    data-publishedfileid="2051233493"
                                                                >
                                                                    <img width="100%" style={{maxWidth: '100px'}} src="banner02.jfif" />
                                                                </a>
                                                            </div>
                                                            <div class="screenshot_showcase_smallscreenshot showcase_slot">
                                                                <a
                                                                    class="screenshot_showcase_screenshot modalContentLink ugc"
                                                                    href="sharedfiles/filedetails/?id=1654945018"
                                                                    data-appid="883710"
                                                                    data-publishedfileid="1654945018"
                                                                >
                                                                    <img width="100%" style={{maxWidth: '100px'}} src="banner03.jfif" />
                                                                </a>
                                                            </div>
                                                            <div class="screenshot_showcase_smallscreenshot showcase_slot">
                                                                <a
                                                                    class="screenshot_showcase_screenshot modalContentLink ugc"
                                                                    href="sharedfiles/filedetails/?id=1261659607"
                                                                    data-appid="552700"
                                                                    data-publishedfileid="1261659607"
                                                                >
                                                                    <img width="100%" style={{maxWidth: '100px'}} src="banner04.jfif" />
                                                                </a>
                                                            </div>
                                                            <a class="screenshot_showcase_smallscreenshot screenshot_count" href="id/straightmiz/screenshots/">
                                                                <div class="screenshot_showcase_screenshot">+ 505</div>
                                                            </a>
                                                        </div>
                                                        <div style={{clear: 'both'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="profile_recentgame_header profile_leftcol_header">
                                            <h2>Recent Activity</h2>
                                            <div class="recentgame_quicklinks recentgame_recentplaytime">
                                                <h2>15.6 hours past 2 weeks</h2>
                                            </div>
                                            <div style={{clear: 'both'}}></div>
                                        </div>

                                        <div class="recent_games">
                                            <div class="recent_game">
                                                <div data-panel='{"type":"PanelGroup"}' class="recent_game_content">
                                                    <div class="game_info">
                                                        <div class="game_info_cap">
                                                            <a href="app/381210"><img class="game_capsule" src="steam/apps/381210/capsule_231x87.jpg" /></a>
                                                        </div>
                                                        <div class="game_info_details">
                                                            3,502 hrs on record<br />
                                                            last played on 4 Apr
                                                        </div>
                                                        <div class="game_name">
                                                            <a class="whiteLink" href="app/381210">Dead by Daylight</a>
                                                        </div>
                                                    </div>

                                                    <div class="game_info_stats">
                                                        <div class="game_info_achievements_only_ctn">
                                                            <div class="game_info_achievements">
                                                                <div class="game_info_achievements_summary_area">
                                                                    <span class="game_info_achievement_summary">
                                                                        <a class="whiteLink" href="id/straightmiz/stats/381210/achievements/">Achievement Progress</a>
                                                                        &nbsp;
                                                                        <span class="ellipsis">127 of 197</span>
                                                                    </span>
                                                                    <div class="achievement_progress_bar_ctn">
                                                                        <div class="progress_bar" style={{width: '64%'}}></div>
                                                                    </div>
                                                                </div>
                                                                <div class="achievement_icons">
                                                                    <div class="game_info_achievement" data-tooltip-text="Rescue Mission">
                                                                        <a href="id/straightmiz/stats/381210/achievements/">
                                                                            <img src="public/images/apps/43af467af1533a2089d45824af48162f20abf154.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="Adept Jonah">
                                                                        <a href="id/straightmiz/stats/381210/achievements/">
                                                                            <img src="public/images/apps/5a188f81bded793ef6986c51724d00d972fe3028.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="With Scars to Show ">
                                                                        <a href="id/straightmiz/stats/381210/achievements/">
                                                                            <img src="public/images/apps/9f699650bf96fb3c153c964804069e9305ae9d2b.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="Adept Mikaela">
                                                                        <a href="id/straightmiz/stats/381210/achievements/">
                                                                            <img src="public/images/apps/69ca64869441556725cd4c0c189c63aba15774a2.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="Flight to Freedom ">
                                                                        <a href="id/straightmiz/stats/381210/achievements/">
                                                                            <img src="public/images/apps/bffcc3a8c84a4fbb9d6bd92b78e212b8b38f2a69.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div
                                                                        data-panel='{"focusable":true,"clickOnActivate":true}'
                                                                        class="game_info_achievement plus_more"
                                                                    >
                                                                        +122
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{clear: 'both'}}></div>
                                                        </div>
                                                        <div class="game_info_stats_rule"></div>
                                                        <div class="game_info_stats_publishedfilecounts">
                                                            <span class="published_file_count_ctn">
                                                                <span class="published_file_icon screenshot"></span>
                                                                <a class="published_file_link" href="id/straightmiz/screenshots/?appid=381210">Screenshots 96</a>
                                                            </span>
                                                            <span class="published_file_count_ctn">
                                                                <span class="published_file_icon recommendation"></span>
                                                                <a class="published_file_link" href="id/straightmiz/recommended/381210/">Review 1</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="recent_game">
                                                <div data-panel='{"type":"PanelGroup"}' class="recent_game_content">
                                                    <div class="game_info">
                                                        <div class="game_info_cap">
                                                            <a href="app/915810"><img class="game_capsule" src="steam/apps/915810/capsule_231x87.jpg" /></a>
                                                        </div>
                                                        <div class="game_info_details">
                                                            0.9 hrs on record<br />
                                                            last played on 31 Mar
                                                        </div>
                                                        <div class="game_name">
                                                            <a class="whiteLink" href="app/915810">Midnight Ghost Hunt</a>
                                                        </div>
                                                    </div>

                                                    <div class="game_info_stats">
                                                        <div class="game_info_achievements_only_ctn">
                                                            <div class="game_info_achievements">
                                                                <div class="game_info_achievements_summary_area">
                                                                    <span class="game_info_achievement_summary">
                                                                        <a class="whiteLink" href="id/straightmiz/stats/915810/achievements/">Achievement Progress</a>
                                                                        &nbsp;
                                                                        <span class="ellipsis">1 of 42</span>
                                                                    </span>
                                                                    <div class="achievement_progress_bar_ctn">
                                                                        <div class="progress_bar" style={{width: '2%'}}></div>
                                                                    </div>
                                                                </div>
                                                                <div class="achievement_icons">
                                                                    <div class="game_info_achievement" data-tooltip-text="Hunter Victory!">
                                                                        <a href="id/straightmiz/stats/915810/achievements/">
                                                                            <img src="public/images/apps/3a09cb06ea9cbcb06bccdf2245c1ceee9494275a.jpg" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{clear: 'both'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="recent_game">
                                                <div data-panel='{"type":"PanelGroup"}' class="recent_game_content">
                                                    <div class="game_info">
                                                        <div class="game_info_cap">
                                                            <a href="app/1638390"><img class="game_capsule" src="steam/apps/1638390/capsule_231x87.jpg" /></a>
                                                        </div>
                                                        <div class="game_info_details">
                                                            4.4 hrs on record<br />
                                                            last played on 28 Mar
                                                        </div>
                                                        <div class="game_name">
                                                            <a class="whiteLink" href="app/1638390">Indies' Lies</a>
                                                        </div>
                                                    </div>

                                                    <div class="game_info_stats">
                                                        <div class="game_info_achievements_only_ctn">
                                                            <div class="game_info_achievements">
                                                                <div class="game_info_achievements_summary_area">
                                                                    <span class="game_info_achievement_summary">
                                                                        <a class="whiteLink" href="id/straightmiz/stats/1638390/achievements/">Achievement Progress</a>
                                                                        &nbsp;
                                                                        <span class="ellipsis">4 of 24</span>
                                                                    </span>
                                                                    <div class="achievement_progress_bar_ctn">
                                                                        <div class="progress_bar" style={{width: '16%'}}></div>
                                                                    </div>
                                                                </div>
                                                                <div class="achievement_icons">
                                                                    <div class="game_info_achievement" data-tooltip-text="Collapse">
                                                                        <a href="id/straightmiz/stats/1638390/achievements/">
                                                                            <img src="public/images/apps/8add54f61c9efef1c659c744dd0fdc93066c8145.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="Coalition">
                                                                        <a href="id/straightmiz/stats/1638390/achievements/">
                                                                            <img src="public/images/apps/4b3aac6ecae4351e37ef6e1916728853c18c5348.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="Talented">
                                                                        <a href="id/straightmiz/stats/1638390/achievements/">
                                                                            <img src="public/images/apps/710ab228039c8034566fa026d026d5b3dd97c1b7.jpg" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="game_info_achievement" data-tooltip-text="Craftsmanship">
                                                                        <a href="id/straightmiz/stats/1638390/achievements/">
                                                                            <img src="public/images/apps/6d82846fb2e1fde80f135f0a273eaabb9f721847.jpg" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{clear: 'both'}}></div>
                                                        </div>
                                                        <div class="game_info_stats_rule"></div>
                                                        <div class="game_info_stats_publishedfilecounts">
                                                            <span class="published_file_count_ctn">
                                                                <span class="published_file_icon recommendation"></span>
                                                                <a class="published_file_link" href="id/straightmiz/recommended/1638390/">Review 1</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="recentgame_quicklinks">
                                                View
                                                <a class="whiteLink" href="id/straightmiz/games/">All Recently Played</a>
                                                <span class="link_separator">|</span>
                                                <a class="whiteLink" href="id/straightmiz/wishlist/">Wishlist</a>
                                                <span class="link_separator">|</span>
                                                <a class="whiteLink" href="id/straightmiz/recommended/">Reviews</a>
                                            </div>
                                            <div style={{clear: 'right'}}></div>
                                        </div>

                                        <div class="profile_comment_area">
                                            <div class="commentthread_area" id="commentthread_Profile_76561198022412208_area">
                                                <div class="commentthread_header">
                                                    <div class="commentthread_paging has_view_all_link" id="commentthread_Profile_76561198022412208_pagecontrols">
                                                        <a class="commentthread_allcommentslink" href="id/straightmiz/allcomments"
                                                            >View all
                                                            <span id="commentthread_Profile_76561198022412208_totalcount">5,230</span>
                                                            comments</a
                                                        >
                                                        <a id="commentthread_Profile_76561198022412208_pagebtn_prev" href="javascript:void(0);" class="pagebtn">&lt;</a>
                                                        <span id="commentthread_Profile_76561198022412208_pagelinks" class="commentthread_pagelinks"></span>
                                                        <span id="commentthread_Profile_76561198022412208_pagedropdown" class="commentthread_pagedropdown"></span>
                                                        <a id="commentthread_Profile_76561198022412208_pagebtn_next" href="javascript:void(0);" class="pagebtn">&gt;</a>
                                                    </div>
                                                    <div class="commentthread_count">
                                                        <span class="ellipsis commentthread_count_label">
                                                            <span class="commentthread_header_label">Comments</span>
                                                        </span>
                                                    </div>
                                                    <div style={{clear: 'both'}}></div>
                                                </div>
                                                <div class="commentthread_comment_container" id="commentthread_Profile_76561198022412208_postcontainer">
                                                    <div class="commentthread_comments" id="commentthread_Profile_76561198022412208_posts">
                                                        <div
                                                            data-panel='{"flow-children":"row","type":"PanelGroup"}'
                                                            class="commentthread_comment responsive_body_text"
                                                            id="comment_3275813923386335519"
                                                        >
                                                            <div class="commentthread_comment_avatar playerAvatar offline">
                                                                <a href="profiles/76561198849274294" data-miniprofile="889008566">
                                                                    <img
                                                                        src="https://avatars.cloudflare.steamstatic.com/0834e5a8a2b2ba7396f149250ebdc906c7037b1f.jpg"
                                                                        srcset="https://avatars.cloudflare.steamstatic.com/0834e5a8a2b2ba7396f149250ebdc906c7037b1f.jpg"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div class="commentthread_comment_content">
                                                                <div data-panel='{"flow-children":"row"}' class="commentthread_comment_author">
                                                                    <a class="hoverunderline commentthread_author_link" href="profiles/76561198849274294" data-miniprofile="889008566">
                                                                        <bdi>Friends</bdi>
                                                                    </a>

                                                                    <span class="commentthread_comment_timestamp" title="6 April, 2022 @ 3:56:59 am PDT" data-timestamp="1649242619">
                                                                        3 hours ago&nbsp;
                                                                    </span>
                                                                    <div class="commentthread_comment_actions"></div>
                                                                </div>
                                                                <div class="commentthread_comment_text" id="comment_content_3275813923386335519">HELLO</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="commentthread_footer">
                                                    <div class="commentthread_paging" id="commentthread_Profile_76561198022412208_fpagecontrols">
                                                        <a id="commentthread_Profile_76561198022412208_fpagebtn_prev" href="javascript:void(0);" class="pagebtn">&lt;</a>
                                                        <span id="commentthread_Profile_76561198022412208_fpagelinks" class="commentthread_pagelinks"></span>
                                                        <span id="commentthread_Profile_76561198022412208_fpagedropdown" class="commentthread_pagedropdown"></span>
                                                        <a id="commentthread_Profile_76561198022412208_fpagebtn_next" href="javascript:void(0);" class="pagebtn">&gt;</a>
                                                    </div>
                                                    <div style={{clear: 'both'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{clear: 'both'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    );
}

export default index;