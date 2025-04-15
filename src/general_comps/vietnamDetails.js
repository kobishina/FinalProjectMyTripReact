import React from 'react';

export default function VietnamDetails() {
    return (
        <div className="container mt-4">

            {/*section 1*/}
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-3'>
                <section className='border border-4'>
                    <h2 className="text-primary">Attractions In Vietnam</h2>
                    <ul className="list-unstyled">
                        <li><a href="https://whc.unesco.org/en/list/672" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>מפרץ האלונג (Halong Bay)</a></li>
                        <li><a href="https://www.lonelyplanet.com/vietnam/hoi-an" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>הוי אן (Hoi An) – עיר עתיקה קסומה</a></li>
                        <li><a href="https://www.sapa-tour.net/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>סאפה – טרקים בכפרים של שבטים אתניים</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/northern-vietnam/ninh-binh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>נין בין – נופים עוצרי נשימה ושיט בנהר</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/central-vietnam/hue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>הואה – עיר הבירה הקיסרית לשעבר</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/central-vietnam/danang" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>גשר הידיים בדאנאנג (Golden Bridge)</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>הו צ'י מין סיטי – עיר סואנת ומודרנית</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/southern-vietnam/mekong-delta" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>דלתת המקונג – שווקים צפים וחוויות כפריות</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/central-vietnam/phong-nha" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>מערות פונג נה – מהגדולות והמרשימות בעולם</a></li>
                        <li><a href="https://www.vietnam.travel/places-to-go/central-vietnam/da-lat" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>דא לאט – עיר הררית רומנטית עם טבע ופרחים</a></li>
                    </ul>
                </section>

                {/*section 2*/}
                <section className='border border-4'>
                    <h2 className="text-primary">Restaurants In Vietnam</h2>
                    <ul className="list-unstyled">
                        <li><a href="https://www.nhahangngon.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Nhà Hàng Ngon – מנות ויאטנמיות אותנטיות בהו צ'י מין</a></li>
                        <li><a href="https://quananngon.com.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Quán Ăn Ngon – חווית אוכל מקומית בעיצוב מרהיב</a></li>
                        <li><a href="https://www.noodletour.com/pho/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Pho Gia Truyen – אחת מהפאות הכי טובות בהאנוי</a></li>
                        <li><a href="https://www.secretgardenrestaurant.com.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Secret Garden – מסעדת גג קסומה בהו צ'י מין</a></li>
                        <li><a href="https://www.laviet.coffee/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>La Viet – קפה מיוחד בדא לאט</a></li>
                        <li><a href="https://www.charmingvietnamtravel.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Cha Ca La Vong – מנת דג מפורסמת מהאנוי</a></li>
                        <li><a href="https://www.mrpho.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Mr. Pho – פו עשיר בטעמים בלב סייגון</a></li>
                        <li><a href="https://www.huonglai.com.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Huong Lai – מסעדה שמעסיקה צעירים במצוקה</a></li>
                        <li><a href="https://www.royalcity.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Royal City Food Court – מגוון אוכל מהיר ואותנטי</a></li>
                        <li><a href="https://www.buncha.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Bún Chả Hương Liên – המסעדה בה אובמה ביקר</a></li>
                    </ul>
                </section>
            </div>

            {/*section 3*/}
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-3'>
                <section className='border border-4'>
                    <h2 className="text-primary">Clubs In Vietnam</h2>
                    <ul className="list-unstyled">
                        <li><a href="https://www.lush.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Lush – מועדון לילה פופולרי בהו צ'י מין</a></li>
                        <li><a href="https://www.obsidianhanoi.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Obsidian – לופט בר/קלאב יוקרתי בהאנוי</a></li>
                        <li><a href="https://www.facebook.com/ApocalypseNowBar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Apocalypse Now – מועדון לילה אייקוני</a></li>
                        <li><a href="https://theobservatory-hcmc.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>The Observatory – מוסיקה אלקטרונית איכותית</a></li>
                        <li><a href="https://www.facebook.com/BohemeClub.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Boheme – חיי לילה תוססים בהוי אן</a></li>
                        <li><a href="https://www.bambubars.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Bambu Bar – בר רום בווייב טרופי</a></li>
                        <li><a href="https://www.air360skybar.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Air 360 Sky Lounge – תצפית ובר יוקרתי בסייגון</a></li>
                        <li><a href="https://www.facebook.com/theviewrooftopbar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>The View Rooftop Bar – אווירה רגועה ונוף מהמם</a></li>
                        <li><a href="https://www.facebook.com/EnvyClubVN/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>ENVY Club – מופעים ומוזיקה בסגנון מערבי</a></li>
                        <li><a href="https://www.broma.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Broma Not A Bar – מקום ייחודי עם הופעות חיות</a></li>
                    </ul>
                </section>

                {/*section 4*/}
                <section className='border border-4'>
                    <h2 className="text-primary">Guides In Vietnam</h2>
                    <ul className="list-unstyled">
                        <li><a href="https://www.vietnamguides.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Vietnam Guides – מדריכים רשמיים ומוסמכים</a></li>
                        <li><a href="https://vietnameseguides.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Vietnamese Guides – סיורים בהתאמה אישית</a></li>
                        <li><a href="https://www.tourguidevietnam.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Tour Guide Vietnam – מדריכים פרטיים</a></li>
                        <li><a href="https://www.hanoikids.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Hanoi Kids – סטודנטים מדריכים חינם באנגלית</a></li>
                        <li><a href="https://www.vietnamprivateguides.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Vietnam Private Guides – הדרכות מקצועיות בכל הארץ</a></li>
                        <li><a href="https://www.viator.com/Vietnam/d21-ttd" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Viator – סיורים מאורגנים עם המלצות</a></li>
                        <li><a href="https://www.backstreetacademy.com/vietnam" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Backstreet Academy – חוויות עם מקומיים</a></li>
                        <li><a href="https://www.getyourguide.com/vietnam-l169038/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>GetYourGuide – סיורים עם ביקורות גולשים</a></li>
                        <li><a href="https://www.tripadvisor.com/Attractions-g293921-Activities-c42-Vietnam.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>TripAdvisor – מדריכי טיולים מדורגים</a></li>
                        <li><a href="https://vietnamisawesome.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Vietnam Is Awesome – מדריכים מקומיים וחוויות יחודיות</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
