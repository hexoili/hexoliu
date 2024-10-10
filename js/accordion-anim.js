document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });

    SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 20,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 70,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true,
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            window.location.href = 'https://youtu.be/Rrni7T7sGZk?si=K2xUR8lCqbmkRAnW'; 
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
            e.preventDefault();
            window.location.href = 'https://youtu.be/6R8xb6_dRG8?si=wMQMWXTSNP_k545H'; 
        }
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            window.location.href = 'https://youtu.be/-cctf5hP900?si=PjVoJEFe5ScvRpw4&t=466';
        }
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            window.location.href = 'https://youtu.be/vQiodbKEW6s?si=onf7PYzAy7QI64qS'; 
        }
    });

    console.log("%c uuuuuuuuuuuuuuuuuuuuu. \n\
                   .u$$$$$$$$$$$$$$$$$$$$$$$$$$W. \n\
                 u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Wu. \n\
                $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i \n\
              $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
         `    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
           .i$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i \n\
           $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W \n\
          .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W \n\
         .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i \n\
         #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$. \n\
         W$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
$u       #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$~ \n\
$#      \"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
$i        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
$$        #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
$$         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
#$.        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$# \n\
 $$      $iW$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$! \n\
 $$i      $$$$$$$#\"\" `\"\"\"#$$$$$$$$$$$$$$$$$#\"\"\"\"\"\"#$$$$$$$$$$$$$$$W \n\
 #$$W    `$$$#\"            \"    !$$$$$`           `\"#$$$$$$$$$$# \n\
  $$$     ``   👀 👀👀   👀   ! !iuW$$$$$  👀  👀            #$$$$$$$# \n\
  #$$    $u   👀   👀👀👀       $ $$$$$$$    👀👀👀👀👀   $$$$$$$~ \n\
   \"#    #$$i.  👀 👀 👀         # $$$$$$$.   👀👀👀  👀  `$$$$$$ \n\
          $$$$$i.   👀 👀        \"\"\"#$$$$i.  👀👀👀👀👀   .$$$$# \n\
          $$$$$$$$! 👀 👀  .   `   $$$$$$$$$i    👀 👀👀👀  $$$$$ \n\
          `$$$$$  $iWW   .uW`        #$$$$$$$$$W.       .$$$$$$# \n\
            \"#$$$$$$$$$$$$#`          $$$$$$$$$$$iWiuuuW$$$$$$$$W \n\
               !#\"\"    \"\"             `$$$$$$$##$$$$$$$$$$$$$$$$ \n\
          i$$$$    .                   !$$$$$$ .$$$$$$$$$$$$$$$# \n\
         $$$$$$$$$$`                    $$$$$$$$$Wi$$$$$$#\"#$$` \n\
         #$$$$$$$$$W.                   $$$$$$$$$$$#   `` \n\
          `$$$$##$$$$!       i$u.  $. .i$$$$$$$$$#\"\" \n\
             \"     `#W       $$$$$$$$$$$$$$$$$$$`      u$# \n\
                            W$$$$$$$$$$$$$$$$$$      $$$$W \n\
                            $$`!$$$##$$$$``$$$$      $$$$! \n\
                           i$\" $$$$  $$#\"`  \"\"\"     W$$$$ \n\
                                                   W$$$$! \n\
                      uW$$  uu  uu.  $$$  $$$Wu#   $$$$$$ \n\
                     ~$$$$iu$$iu$$$uW$$! $$$$$$i .W$$$$$$ \n\
             ..  !   \"#$$$$$$$$$$##$$$$$$$$$$$$$$$$$$$$#\" \n\
             $$W  $     \"#$$$$$$$iW$$$$$$$$$$$$$$$$$$$$$W \n\
             $#`   `       \"\"#$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\
                              !$$$$$$$$$$$$$$$$$$$$$#` \n\
                              $$$$$$$$$$$$$$$$$$$$$$! \n\
                            $$$$$$$$$$$$$$$$$$$$$$$` \n\
                             $$$$$$$$$$$$$$$$$$$$ \n\
                              ","font-size:10pt; font-style:bold; background:red");
    console.log("%cP.S. @romariohakoo Иди нахуй","font-size:32pt; background: red;");
    console.log("%cP.P.S. @romariohakoo Если ты это прочитал напиши мне","font-size:32pt; background: red;");
    console.log("%cP.P.P.S. А все остальные идите нахуй, не хуй вам код изучать","font-size:32pt; background: red;");
});
