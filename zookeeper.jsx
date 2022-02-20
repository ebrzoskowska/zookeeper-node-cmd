'use strict';
const ps = require('prompt-sync');
let prompt = ps();
let animals = {
    camel: `
Switching on the camera in the camel habitat...
  ___.-''''-.
 /___  @    |
 ',,,,.     |         _.'''''''._
      '     |        /           \\
      |     \\    _.-'             \\
      |      '.-'                  '-.
      |                               ',
      |                                '',
       ',,-,                           ':;
            ',,| ;,,                 ,' ;;
               ! ; !'',,,',',,,,'!  ;   ;:
              : ;  ! !       ! ! ;  ;   :;
              ; ;   ! !      ! !  ; ;   ;,
             ; ;    ! !     ! !   ; ;    
             ; ;    ! !    ! !     ; ;
            ;,,      !,!   !,!     ;,;
            /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`,
    lion: `
Switching on the camera in the lion habitat...
                                               ,w.
                                             ,YWMMw  ,M  ,
                        _.---.._   __..---._.'MMMMMw,wMWmW,
                   _.-""        '''           YP"WMMMMMMMMMb,
                .-' __.'                   .'     MMMMW^WMMMM;
    _,        .'.-'"; \`,       /\`     .--""      :MMM[==MWMW^;
 ,mM^"     ,-'.'   /   ;      ;      /   ,       MMMMb_wMW"  @\\
,MM:.    .'.-'   .'     ;     \`\\    ;     \`,     MMMMMMMW \`"=./\`-,
WMMm__,-'.'     /      _.\\      F'''-+,,   ;_,_.dMMMMMMMM[,_ / \`=_}
"^MP__.-'    ,-' _.--""   \`-,   ;       \\  ; ;MMMMMMMMMMW^\`\`; __|
           /   .'            ; ;         )  )\`{  \\ \`"^W^\`,   \\  :
          /  .'             /  (       .'  /     Ww._     \`.  \`"
         /  Y,              \`,  \`-,=,_{   ;      MMMP\`""-,  \`-._.-,
        (--, )                \`,_ / \`) \\/"")      ^"      \`-, -;"\\:
The lion is roaring!  `,
    deer: `
Switching on the camera in the deer habitat...
  /|       |\\
\`__\\\\       //__'
  ||      ||
\\__\`\\     |'__/
  \`_\\\\   //_'
  _.,:---;,._
  \\_:     :_/
    |@. .@|
    |     |
    ,\\.-./ \\
    ;;\`-'   \`---__________-----.-.
    ;;;                         \\_\\
    ';;;                         |
     ;    |                      ;
      \\   \\     \\        |      /
       \\_, \\    /        \\     |\\
         |';|  |,,,,,,,,/ \\    \\ \\_
         |  |  |           \\   /   |
         \\  \\  |           |  / \\  |
          | || |           | |   | |
          | || |           | |   | |
          | || |           | |   | |
          |_||_|           |_|   |_|
         /_//_/           /_/   /_/
Our 'Bambi' looks hungry. Let's go to feed it!  `,
    goose: `
Switching on the camera in the goose habitat...
 
                                    _
                                ,-"" "".
                              ,'  ____  \`.
                            ,'  ,'    \`.  \`._
   (\`.         _..--.._   ,'  ,'        \\    \\
  (\`-.\\    .-""        ""'   /          (  d _b
 (\`._  \`-"" ,._             (            \`-(   \\
 <_  \`     (  <\`<            \\              \`-._\\
  <\`-       (__< <           :
   (__        (_<_<          ;
    \`------------------------------------------
The goose is staring intently at you... Maybe it's time to change the channel?  `,
    bat: `
Switching on the camera in the bat habitat...
_________________               _________________
 ~-.              \\  |\\___/|  /              .-~
     ~-.           \\ / o o \\ /           .-~
        >           \\\\  W  //           <
       /             /~---~\\             \\
      /_            |       |            _\\
         ~-.        |       |        .-~
            ;        \\     /        i
           /___      /\\   /\\      ___\\
                ~-. /  \\_/  \\ .-~
                   V         V
This bat looks like it’s doing fine.`,
    rabbit: `
Switching on the camera in the rabbit habitat...
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \\
\\//\\/      .- \\
 Y        /    Y
 l       I     !
 ]\\      _\\    /"\\
(" ~----( ~   Y.  )
It looks like we will soon have more rabbits!`
}

const camel = animals.camel;
const lion = animals.lion;
const deer = animals.deer;
const goose = animals.goose;
const bat = animals.bat;
const rabbit = animals.rabbit;
let answer;

do {
  answer = prompt('Which habitat # do you need? ')
    if (answer == 0) {
      console.log(`${camel}`)
    } else if (answer == 1) {
      console.log(`${lion}`)
    } else if (answer == 2) {
      console.log(`${deer}`)
    } else if (answer == 3) {
      console.log(`${goose}`)
    } else if (answer == 4) {
      console.log(`${bat}`)
    } else if (answer == 5) {
      console.log(`${rabbit}`)
    } else if (answer == 'exit') {
      console.log('See you later!')
    }
} while (answer !== 'exit')