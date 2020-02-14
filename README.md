<h2>Introduction</h2> 

<p>This is my Seond major project for my full stack development course with the code institute. I am planning on creating a fan page for one of my favourite bands. The reason I chose to do this is I will be interested and intvested in this topic and I believe I can make it work.</p>

<h2>Intitial Ideas</h2>

<p>To start with I had to think how I could implement my new found skills into this project to test me. I will start by building a basic layout for the pages with HTML and CSS. I will only use CSS for static styling on this project and leave the animations and interactive styling to the javascript to process. </p> 
<p>I have thought about various different API's that work with this Idea and the ones I have come up with so far are going to be listed below.</p>

<h2>API Ideas</h2>
<ul>
<li>Wikipedia API - for information on the members.</li>
<li>Google Maps API - to visually present where they're from or were founded.</li>
<li>SongKick API - I have applied for SongKick API and if I get accepted I'll use it to present various tourdates on the page.</li>
<li>Email API - I'll use this to create a report website fault form to and administator of the website.</li>
<li>Spotify API - I could have a page with there latest songs allowing you to stream as much as permitted from the site.</li>
</ul>

<p>With the API's above I should be able to pull a lot of information to my website and successfully demonstate my ability with JSON.</p>

<h2>Planning Stage</h2>
<p>I have started messing around with designs on balsamiq so I can get a starting picture of what to work with. I have only done 2 pages so far and I am planning on doing one for each page.</p>
<p>From this stage I have come to the conclusion that this webiste will probably consist of 9-10 pages I'll break them down now.</p>

<h3>Website pages</h3>

<ul>
<li>Home page - Pretty landing page to catch the attention of the vistors.</li>
<li>Store page - A with albums and possibly other items which when clicked will take you to a site where you can buy them.</li>
<li>About page - This page will consist of 5 images and a bit of text explaining the page. the 5 images will be links the four band members separate pages as well as page for the band overall. </li>
<li>Tour Dates page - If i get an API key for this I will make a page that pulls all the bands upcoming tours and locations.</li>
<li>Report issue Page - I will create a report issue form where it will send an email to my address. The link for this page will be located in the footer of the website.</li>
</ul>

<h2>Wire Frame</h2>
<p>I used the pages above to create basic wireframe layouts for the pages I'm creating for my project website. I'll now break down the layouts below.</p>
<p><b>Inside the Assets folder there is a copy of the wireframe</b></p>
<h3>Nav Bar</h3>
<p>The Nav Bar for the majority of it will be the 1975 logo sticking to the left side and taking up to 60%-85% of the screen. to the right of it will have links to the separate pages as well as there social links.</p>
<p>The logo will be static unless I can find a gif which is very simplistic with minor animation. the buttons to the right will all have hover and click effects through javascript.</p>
<h3>Footer Bar</h3>
<p>the footer will be very simple, it will have three items which are Copyright mark, Github Link and Report issue button.</p>
<p>the Copyright mark will be static the report and Github link will have a hover and animated effect.</p>
<h3>Home Page</h3>
<p>The home page is going to be eye catching shot and sweet text with photos. there will be a large centre photo and if I can figure it out make it slide from side to side on a few second timer.</p>
<p>The will be static images below which will have text over them stating they are links to specific pages. when hovered over they will have an effect as well as a on click effect.</p>
<h3>Store Page</h3>
<p>For the store page I will only include the bands albums(at this point in time that might change) and have them vertically aligned on top of each other in the centre of the page.</p>
<p>On the left it will have the name and description on the album and on the right there will be a animated buy now button which will be a hyperlink to Amazon or some other place where you can purchase the item.</p>
<h3>About Page Hub</h3>
<p>The about page will consist of 5 page links the band members and a separate one for the band.</p>
<p>I want to have an effect that slowly fades the image to black with text in the centre either saying the members name or for the band "The 1975"</p>
<h3>About Page</h3>
<p>for each about page I want to have 2 API's in play one a google map for there home town and Wikipedia for the information.</p>
<p>The original plan was to use the wikipedia API to pull information on each member of the 1975 but unfortunately only the band and the lead singer have an wikipedia page so I changed it to only the one page with the information on the 1975</p>
<p>I will use the wikipedia API to pull the information about the band onto the page and I will also add a google maps API to point out where they formed</p> 
<h3>Tour Page</h3>
<p>This page solely relies on if I get approved for the API key from SongKick or if I find another one that can full the same information.</p>
<p>The Page will consist of a short and to the point opening paragraph and below will be events that will consist of basic information regarding dates, times, locations etc.</p>
<p>In the wire frame it consists of only three forms but depending on how I am able to do this it is a subject of change and could increase.</p>
<p><b>I didn't get Approved for the SongKick API but I managed to get one off Ticket Master so I will be using that API Key for the webiste instead.</b></p>
<h3>Issue Page</h3>
<p>This page will not be with the other links it will be located in the footer of every page.</p>
<p>It will have a simple opening sentence with two form entries one for the ending email address and one for the report.</p>
<p>The reason I want to put email as well even though it's not really needed I want to setup a thank you message as an auto reply off Email.js.</p>

<h2>Production</h2>

<h3>Navigation Bar</h3>

<p>When I starting designing the navigation bar I used the wireframe as an a template. I had many attempts at getting this working and eventually changed it completely.</p>

<h4>Attempt 1</h4>
<p>I used bootstrap and tried my design. I managed to shape the nav bar as I wanted in my wirefrmae but I couldn't get the toggler to work correctly so after a few hours a started again but this time without bootstrap.</p>
<h4>Attempt 2</h4>
<p>I tried doing the Navigation bar without any bootstrap and learning howe to use the flexbox tools on my own. I have now gained a decent idea of how to use flexbox works but I struggled to get the animations to work the way I wanted and where they where meant to appear.</p>
<p>I used JQuery for the animations but they didn't work either which was a large problem. I got it to eventually open and close but without any sliding effect and there was a prolbem with the stlying it wouldn't take no matter how far I broke down the classes in CSS. After testing with it for sometime I decided to go back to bootstrap with a redesign</p>
<h4>Attempt 3</h4>
<p>I changed the design from the wireframe making it the logo on top and the links below. this worked without any issues and I managed to break down the design of this fairly easily shaping it to how I imagined. I centred the text got the toggler to kick in at the large pixel range and the animation was smooth and pushed the page down without any issues.</p>
<p>When it was toggled I </p>


<h3>Resource links</h3>
https://upload.wikimedia.org/wikipedia/commons/8/83/The_1975_Logo.svg
https://download.hipwallpaper.com/desktop/1920/1080/28/34/T3Fnp6.jpg
http://getwallpapers.com/wallpaper/full/3/8/e/1126392-the-1975-wallpapers-1920x1080-for-lockscreen.jpg
https://cdn.hipwallpaper.com/i/90/95/vCxJo7.jpg
https://wallpapercave.com/w/wp1860588
https://www.reddit.com/r/the1975/comments/7rhs7r/made_my_own_the_1975_album_cover_what_do_you_think/
https://www.harpersbazaar.com/uk/culture/staying-in/news/a7901/this-is-our-jam-the-1975/
readingfestival.com/wp-content/uploads/2019/01/The-1975.png
https://upload.wikimedia.org/wikipedia/commons/d/d0/The_1975_%2814712180536%29.jpg
https://www.google.com/search?q=Matthew+Healy&tbm=isch&ved=2ahUKEwiZ0aiRw8_nAhWOBGMBHTMGADYQ2-cCegQIABAA&oq=Matthew+Healy&gs_l=img.3..0i131i67j0i67l3j0j0i67j0l2j0i67j0.64143.64143..64921...0.0..0.59.59.1......0....1..gws-wiz-img.1QdAMpTbs5w&ei=osZFXpn4Eo6JjLsPs4yAsAM&bih=937&biw=1920&rlz=1C1CHBF_en-GBGB758GB758#imgrc=PtuJbgApKJSeCM
https://niceaf.tumblr.com/post/187193549761/people-the-1975
http://getwallpapers.com/wallpaper/full/7/b/c/1126481-the-1975-wallpapers-2560x1600-for-iphone.jpg
https://www.google.com/search?q=1975+wake+up+image&tbm=isch&ved=2ahUKEwit_v6bg9HnAhVbgM4BHbPiAJkQ2-cCegQIABAA&oq=1975+wake+up+image&gs_l=img.3...82424.85687..85845...2.0..0.61.401.8......0....1..gws-wiz-img.......0i30j0i24.3JwXZjpqZZI&ei=DJBGXq3IEtuAur4Ps8WDyAk&bih=937&biw=1920&rlz=1C1CHBF_en-GBGB860GB860&hl=en#imgrc=j7B97o_O246nHM


