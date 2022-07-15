<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="{{ asset('data/cardContents.js') }}"></script>
    <script src="{{ asset('data/questions.js') }}"></script>
    <script src="{{ asset('script/script.js') }}"></script>

    <title>YourGames</title>
</head>
<body>
    <container>
        <div class="navbar">
            <div class="navbar_brand"><img class="navbar_brand_img" src="{{asset('img/logo.png')}}"></div>
            <div class="navbar_links">
                <ul>
                    <li onclick="scroller('#first')"> Első lépés</li>
                    <li onclick="scroller('#steps')">További lépések</li>
                    <li onclick="scroller('#team')">Csapatunk</li>
                    <li onclick="modalQView(1)">Kérdések</li>

                </ul>
            </div>
            <div class="mobile_menu">
                <img src="{{ asset('img/hambi.png') }}" class="open" onclick="hambiClick()">
                <img src="{{ asset('img/close.png') }}"" class="close" onclick="hambiClick()">
                
            </div>
        </div>
        <section class="header">
            <img class="header_logo" src="{{ asset('img/logoHeader.webp') }}">
        </section>
        <section class="content">
            <div class="first_step_wrap contant_container" id="first">
                <h2>Tied az első lépés!</h2>
                    <div class="section_intro">
                        <p>
                            A hobbi játékfejlesztők számára szeretnénk segítséget nyújtani a társasjáték elkészítésében egy speciális útmutató segítségével. Ha kész a játék, akkor hamarosan meg is tudod majd rendelni a saját kész játékodat, valamint árusíthatod is a webshopunkon keresztül.
                        </p>
                    </div>
            </div>
            <div class="game_making_steps_wrap contant_container" id="steps">
                <h2>További szükséges lépések!</h2>
                <div class="section_intro">
                    <p>
                        A lent található rövid írásokban össze gyűjtöttük azokat az információkat melyek szerintünk elengedhetetlenek ahoz hogy a tökéletes játékot elkészíthesd.
                    </p>
                </div>
                <div class="cards_wrap">
                    <div class="card">
                        <div class="card_title">játékelemek</div>
                        <div class="card_content">A játékban szereplő elemek, eszközök bemutatása.</div>
                        <div class="card_btn" onclick="modalView(jatekElemek)">Olvass tovább</div>
                    </div>
                    <div class="card"><div class="card_title">játékos előrehaladását segítő tényezők</div>
                        <div class="card_content">A szerencse, stratégia és a játékosok közötti interakciók szerpének leírása.</div>
                        <div class="card_btn" onclick="modalView(eloreHalad)">Olvass tovább</div>
                    </div>
                    <div class="card">
                        <div class="card_title">színek használata</div>
                        <div class="card_content">A színek jelentőségére hívjuk fel ebben a leírásban a figyelmet.</div>
                        <div class="card_btn" onclick="modalView(szinek)">Olvass tovább</div>
                    </div>
                    <div class="card">
                        <div class="card_title">játékos típusok</div>
                        <div class="card_content">A különböző típusú játékosok jellemzőinek bemutatása.</div>
                        <div class="card_btn" onclick="modalView(gamerek)">Olvass tovább</div>
                    </div>
                    <div class="card">
                        <div class="card_title">gyakori hibák</div>
                        <div class="card_content">A játék készítés, tervezés során elkövetett leggyakoribb hibák.</div>
                        <div class="card_btn" onclick="modalView(hibak)">Olvass tovább</div>
                    </div>
                    <div class="card">
                        <div class="card_title">játékszabály</div>
                        <div class="card_content">A jó játékszabály írását könnyítjük meg ezzel a cikkel.</div>
                        <div class="card_btn" onclick="modalView(rules)">Olvass tovább</div>
                    </div>
                </div>
            </div>
            <div class="team contant_container" id="team">
                <h2>A csapatunk!</h2>
                <div class="section_intro">
                    <p>
                    Rendben van, hogy sok hasznos segítséggel, tanáccsal és árú beszerzési forással látunk el téged, de joggal vetődhet fel benned a kérdés, hogy valyon kik álnak eme oldal mögött? Itt találod a választ: mi egy egyetemistákból álló csapat vagyunk akik szeretnek leülni játszani és akik segíteni akarnak az embereknek, hogy minnél több, jó és minőségi játék készülhessen el így szórakozást nyújva kicsiknek és nagyoknak.
                    </p>
                </div>
                <div class="cards_wrap">
                    <div class="card">
                        <div class="card_title">Czire Denissza</div>
                        <div class="card_content">Rövid bemutatkozás. Leírva mivel foglalkozol a csapaton belül.</div>
                    </div>
                    <div class="card">
                        <div class="card_title">Mészáros Mózes Márk</div>
                        <div class="card_content">Rövid bemutatkozás. Leírva mivel foglalkozol a csapaton belül.</div>
                    </div>
                    <div class="card">
                        <div class="card_title">Kovács Gábor</div>
                        <div class="card_content">Rövid bemutatkozás. Leírva mivel foglalkozol a csapaton belül.</div>
                    </div>
                    <div class="card">
                        <div class="card_title">Varga Balázs</div>
                        <div class="card_content">Én vagyok a csapat informatikusa. Én készítem a weboldalakat és biztosítom a teljes informatikai hátteret a zökkenő mentes működés érdekében.</div>
                    </div>
                </div>
            </div>
            <div class="contact_form" id="contact">
                <h2>Írj nekünk!</h2>
                <div class="form_warp">
                    <form>
                        <div class="contact_element"><label for="contact_name"></label><input id="contact_name" type="text"></div>
                        <div class="contact_element"><label for="contact_mail"></label><input id="contact_mail" type="contact_mail"></div>
                        <div class="contact_element"><label for="contact_content"></label><textarea name="contact_content" id="" cols="30" rows="10"></textarea></div>
                        <div class="contact_element"><button class="card_btn">Elküld</button></div>
                    </form>
                </div>
            </div>
        </section>
        
        <section class="footer">
            <div class="footer_social_links">
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-square social_icon"></i></a> <a href="mailto:yourgames.wp@gmail.com"><i class="fa-solid fa-envelope social_icon"></i></a> <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram-square social_icon"></i></a>
            </div>
            <div class="footer_links">
            <div class="footer_link" onclick="scroller('#first')">Első lépés</div>
            <div class="footer_link" onclick="scroller('#steps')">További lépések</div>
            <div class="footer_link" onclick="scroller('#team')">A csapatunk</div>
            <div class="footer_link" onclick="modalQView(1)">Kérdések</div>
            </div>
            <div class="footer_copyright">YourGames © 2022</div> 
        </section>
        <div class="modal_overlay" onclick="modalClose()"><div class="modal_close" onclick="modalClose()">X</div></div>
        <div class="modal_content_wrap">
            <div class="modal_content" id="modal_content"></div>
        </div>
        <div class="modal_Q_content_wrap">
            <div class="modal_Q_content" id="modal_Q_content"></div>
        </div>
    </container>
</body>
</html>