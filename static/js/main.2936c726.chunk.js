(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{16:function(e,t,i){e.exports=i(31)},21:function(e,t,i){},22:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r),a=i(6),s=i.n(a),l=(i(21),i(22),i(14)),g=i(7),d=i.n(g);var c=i(1),o=i(2),h={body:"body",title:"title",titleColor:void 0};function u(e){var t="";return e.title&&(t="<h1".concat(e.titleColor?' style="color:'.concat(e.titleColor,';"'):"",">").concat(e.title,"</h1>")),e.body&&(t="".concat(t,"\n").concat(e.body)),"<body>\n".concat(t,"</body>")}var b=function(e){var t=Object(c.c)((function(e){return u(e.code)})),i=e.content||t;return n.a.createElement("div",{style:{fontFamily:"Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace",backgroundColor:"#4d0000",color:"white",padding:10,borderRadius:5}},n.a.createElement(f,null),i||"<NO CODE>")},m=function(e){return n.a.createElement("div",{style:{width:10,height:10,backgroundColor:e.color,borderRadius:50,marginRight:5}})},f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{paddingBottom:10,display:"flex",justifyContent:"flex-start"}},n.a.createElement(m,{color:"red"}),n.a.createElement(m,{color:"yellow"}),n.a.createElement(m,{color:"lightgreen"})),n.a.createElement("div",{style:{borderBottom:"0.5px solid grey",marginBottom:10}}))};function w(e){return(new DOMParser).parseFromString(e,"text/xml")}function y(e){var t=e.getElementsByTagName("parsererror");if(t.length>0)for(var i=[],r=0;r<t.length;++r)return i.push(n.a.createElement("div",{key:r,dangerouslySetInnerHTML:{__html:t[r].children[1].innerHTML}})),i;if(e.getElementsByTagName("body").length>1)return"Nur ein einziges <body> element ist erlaubt."}function p(){var e=Object(c.c)((function(e){return u(e.code)}));return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.replace("body","div")}})}function v(){var e,t,i=Object(c.c)((function(e){return u(e.code)})),r=(e="site",t=i,encodeURI(window.location.href+"/?".concat(e,"=").concat(t)));return n.a.createElement("a",{href:r},"Click hier um deine Website zu \xf6ffnen")}function k(){var e=Object(c.b)(),t=Object(r.useState)(window.innerHeight),i=Object(l.a)(t,2),a=i[0],s=i[1];n.a.useEffect((function(){function e(){s(window.innerHeight)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}));var g=[{id:"start",message:"Hej, ich bin Saphira \ud83d\udc09 Wie hei\xdft du? \ud83e\udd17",trigger:"enter-username"},{id:"enter-username",user:!0,trigger:"ask-learn"},{id:"ask-learn",message:function(t){return e({type:"setName",value:t.previousValue}),"".concat(t.previousValue,", m\xf6chtest du lernen, wie man ganz einfach eine Homepage programmiert? \ud83d\udc69\ud83d\udcbb\ud83d\udc68\ud83d\udcbb")},trigger:"select-learn"},{id:"select-learn",options:[{value:1,label:"Ja",trigger:"learn-yes"},{value:2,label:"Nein",trigger:"learn-no"}]},{id:"learn-yes",message:"Super, dann legen wir direkt los! \ud83e\udd29",trigger:"only-smartphone"},{id:"learn-no",message:"Schade. Vielleicht kann ich dich dennoch \xfcberzeugen \ud83e\udd14",trigger:"only-smartphone"},{id:"only-smartphone",message:"Dazu brauchst du nichts weiter als dein Smartphone... \ud83e\udd33",trigger:"explain-build-together",delay:2e3},{id:"explain-build-together",message:"Wir machen das so: Ich zeige dir, wie ich meine Homepage programmiere und du kannst dann in jedem Schritt deine eigene Homepage entwickeln. \ud83d\ude43\ud83d\udcaa",trigger:"explain-language-basic",delay:3e3},{id:"explain-language-basic",message:"Zuerst erkl\xe4re ich dir ganz grob, wie die Sprache funktioniert. ",trigger:"explain-language-basic-tags",delay:1e3},{id:"explain-language-basic-tags",message:"Immer, wenn wir was definieren wollen, m\xfcssen wir sagen, wo es anf\xe4ngt und wo es aufh\xf6rt. Daf\xfcr nutzen wir Tags. \ud83e\udd16",trigger:"explain-language-basic-tags-language",delay:2e3},{id:"explain-language-basic-tags-language",message:"Nein, das sind keine Wochentage. Das spricht man aus wie T\xc4\xc4G! Das ist sowas wie ein Name. Am Anfang sieht das dann so aus:",trigger:"code-explain-language-basic-tags",delay:2e3},{id:"code-explain-language-basic-tags",trigger:"ask-tag-input",component:n.a.createElement(b,{content:"<tag>"}),asMessage:!0,delay:1e3},{id:"ask-tag-input",message:"Such direkt mal die Zeichen auf deiner Tastatur und tippe <tag> selbst ein :)",trigger:"enter-tag-input",delay:1e3},{id:"enter-tag-input",user:!0,trigger:function(e){return console.log(e.value),"<tag>"===e.value?"enter-tag-input-true":"enter-tag-input-false"}},{id:"enter-tag-input-true",message:"Das klappt ja super!",trigger:"code-explain-language-basic-close-tags"},{id:"enter-tag-input-false",message:"Das stimmt noch nicht ganz, versuche es nochmal!",trigger:"enter-tag-input"},{id:"code-explain-language-basic-close-tags",message:"Am Ende eines Tags m\xfcssen wir dann sagen, dass es vorbei ist. \ud83d\ude45\ufe0f Das machen wir so:",trigger:"code-explain-language-basic-close-tags-code",delay:2e3},{id:"code-explain-language-basic-close-tags-code",trigger:"explain-slash",component:n.a.createElement(b,{content:"</tag>"}),asMessage:!0},{id:"explain-slash",message:"Es ist ganz wichtig, dass wir hier den schr\xe4gen Strich nicht vergessen. Dann geht n\xe4mlich alles kaputt. \ud83d\ude47 Gib es jetzt selbst ein.",trigger:"enter-slash",delay:3e3},{id:"enter-slash",user:!0,trigger:function(e){return console.log(e.value),"</tag>"===e.value?"enter-slash-true":"enter-slash-false"}},{id:"enter-slash-false",message:"Das stimmt noch nicht ganz, versuche es nochmal",trigger:"enter-slash",delay:1e3},{id:"enter-slash-true",message:"Sehr gut! Jetzt haben wir erstmal genug Theorie gehabt, jetzt geht es los! \ud83d\udcaa",trigger:"hast-du-lust-loszulegen",delay:1e3},{id:"hast-du-lust-loszulegen",message:"Hast du Lust loszulegen? \ud83d\ude0a",trigger:"hast-du-lust-loszulegen-select"},{id:"hast-du-lust-loszulegen-select",options:[{value:1,label:"Jawoll!",trigger:"super-wir-starten"},{value:2,label:"N\xf6",trigger:"noch-mehr-theorie"}]},{id:"super-wir-starten",message:"Super!! Wir starten! \ud83d\ude80",trigger:"um-auf-unserer-homepage-etwas-darzustellen",delay:1e3},{id:"noch-mehr-theorie",message:"Du willst NOCH MEHR Theorie? Nicht mit mir! Wir gehen jetzt ans Eingemachte! Es wird toll!",trigger:"um-auf-unserer-homepage-etwas-darzustellen",delay:3e3},{id:"um-auf-unserer-homepage-etwas-darzustellen",message:'Um auf unserer Homepage etwas darzustellen, ben\xf6tigt diese einen sogenannten K\xf6rper (im Englischen: "Body")',trigger:"body-verstanden"},{id:"body-verstanden",options:[{value:1,label:"Verstanden!",trigger:"im-body-kompletter-inhalt"}]},{id:"im-body-kompletter-inhalt",message:"Im Body kannst du den kompletten Inhalt einer Homepage festlegen. \ud83d\udcaa",trigger:"chatbot-body-beispiel",delay:2e3},{id:"chatbot-body-beispiel",message:"Ich mache das zum Beispiel so:",trigger:"code-lieblingstier-body",delay:1e3},{id:"code-lieblingstier-body",trigger:"code-body-verstanden",asMessage:!0,component:n.a.createElement(b,{content:"<body>Mein Lieblingstier: Die Schildkr\xf6te</body>"})},{id:"code-body-verstanden",options:[{value:1,label:"Verstanden!",trigger:"lieblingstier-website-gebaut"}]},{id:"lieblingstier-website-gebaut",message:"Ja, ich habe Schildkr\xf6ten richtig gern. Deshalb will ich eine Webseite \xfcber Schildkr\xf6ten programmiert. \ud83e\udd13",trigger:"welt-sagen-website",delay:3500},{id:"welt-sagen-website",message:"Wei\xdft du schon, was du der Welt sagen m\xf6chtest?",trigger:"select-welt-sagen"},{id:"select-welt-sagen",options:[{value:1,label:"Ja",trigger:"welt-sagen-ja"},{value:2,label:"Nein",trigger:"welt-sagen-nein"}]},{id:"welt-sagen-nein",message:"Hier ein paar Ideen: Ich habe auch mal eine Webseite gemacht, auf der ich meinen Eltern danke. Die haben sich sehr gefreut! Ein Freund hat auch mal eine Webseite \xfcber Fussball gemacht \u26bd\ufe0f",trigger:"welt-sagen-ja",delay:4e3},{id:"welt-sagen-ja",message:"Also schreib doch einfach mal was hin. Nat\xfcrlich in einem <body>!\ufe0f",trigger:"enter-website-welt-sagen",delay:2e3},{id:"enter-website-welt-sagen",user:!0,trigger:function(t){var i=w(t.value);if("<body>Mein Lieblingstier: Die Schildkr\xf6te</body>"===t.value)return"enter-website-welt-sagen-abschreiben";var r=y(i),n=function(e){var t=e.getElementsByTagName("body");if(1===t.length)return t[0]}(i);return r?"enter-website-welt-sagen-error":n?(e({type:"setBody",value:n.innerHTML}),"enter-website-welt-sagen-korrekt"):"enter-website-welt-sagen-body"}},{id:"enter-website-welt-sagen-error",component:n.a.createElement((function(e){var t=y(w(e.previousValue));return n.a.createElement("div",null,t)})),trigger:"enter-website-welt-sagen-error-2"},{id:"enter-website-welt-sagen-error-2",message:"Da ist wohl was schief gelaufen. Probier's doch noch einmal.",trigger:"enter-website-welt-sagen"},{id:"enter-website-welt-sagen-abschreiben",message:"Hej - nicht einfach abschreiben! \ud83e\udd14\ufe0f",trigger:"enter-website-welt-sagen-abschreiben-eigener-text",delay:1e3},{id:"enter-website-welt-sagen-abschreiben-eigener-text",message:"Schreibe deinen eigenen Text.\ufe0f",trigger:"enter-website-welt-sagen",delay:1e3},{id:"enter-website-welt-sagen-schreibweise",message:"Achte auf die Richtige Schreibweise \ud83e\udd25\ufe0f",trigger:"code-lieblingstier-body",delay:1e3},{id:"enter-website-welt-sagen-body",message:"Denk dran, dass der Text von dem Beginn <body> sowie dem Ende </body> eingefasst wird \ud83d\ude2e\ufe0f",trigger:"code-lieblingstier-body",delay:2e3},{id:"enter-website-welt-sagen-slash",message:'Huch, hast du vielleicht etwas vergessen? Denke immer an den schr\xe4gen Strich "/" wenn du eine HTML-Anweisung wieder schlie\xdfen m\xf6chtest. \ud83e\udd16 \ufe0f',trigger:"code-lieblingstier-body",delay:4e3},{id:"enter-website-welt-sagen-korrekt",message:"Super, jetzt haben wir auch schon den Inhalt deiner Website. \ufe0f",trigger:"ask-website-sieht-gut-aus",delay:2e3},{id:"ask-website-sieht-gut-aus",component:n.a.createElement(p,null),trigger:"ask-website-sieht-gut-aus-2",delay:1e3},{id:"ask-website-sieht-gut-aus-2",message:"Da ist sie nun deine Homepage! Gef\xe4llt sie dir? \ud83d\ude0a",trigger:"select-website-sieht-gut-aus",delay:1e3},{id:"select-website-sieht-gut-aus",options:[{value:1,label:"Ja",trigger:"website-sieht-gut-ja"},{value:2,label:"Nein",trigger:"website-sieht-gut-nein"}]},{id:"website-sieht-gut-ja",message:"Es sieht schon dufte aus, aber mit meiner Dicken Brille \ud83e\udd36 erkenne ich bei der kleinen Schrift nichts!\ufe0f",trigger:"explain-headline-tag",delay:1e3},{id:"website-sieht-gut-nein",message:"Das habe ich mir schon gedacht! Wir machen es jetzt noch glamor\xf6ser! \ud83e\udd29\ufe0f",trigger:"explain-headline-tag",delay:1e3},{id:"explain-headline-tag",message:"Machen wir die Zeile ganz gro\xdf! Dazu gibt es titel! Die hei\xdfen <h1>, <h2>, <h3>, <h4>, <h5>. Und es gibt sogar noch <h6>\ufe0f",trigger:"sprache-text-rechts-links",delay:2e3},{id:"sprache-text-rechts-links",message:"Wie du ja wei\xdft, verpackt man in dieser Sprache html den Text immer von links und rechts, also zum Beispiel so:\ufe0f",trigger:"code-sprache-text-rechts-links",delay:1500},{id:"code-sprache-text-rechts-links",trigger:"ueberschrift-verstanden",asMessage:!0,component:n.a.createElement(b,{content:"<h3>Hallo ich bin eine \xdcberschrift</h3>"})},{id:"ueberschrift-verstanden",options:[{value:1,label:"Verstanden!",trigger:"zuerst-machen"}]},{id:"zuerst-machen",message:"Wenn du jetzt deine Homepage neu erstellst: Was w\xfcrdest du zuerst machen?",trigger:"select-body-headline"},{id:"select-body-headline",options:[{value:1,label:"<head>",trigger:"select-body-headline-false"},{value:2,label:"<body>",trigger:"select-body-headline-true"},{value:3,label:"<h1>",trigger:"select-body-headline-false"}]},{id:"select-body-headline-false",message:"Schade! Nicht ganz korrekt. Versuche es nochmal!",trigger:"select-body-headline"},{id:"select-body-headline-true",message:"Und dann?",trigger:"select-body-headline-true-weiter"},{id:"select-body-headline-true-weiter",options:[{value:1,label:"<head>",trigger:"select-body-headline-headline-false"},{value:2,label:"<h1>",trigger:"select-body-headline-headline-true"}]},{id:"select-body-headline-headline-false",message:"Fast! Bitte versuche es erneut.",trigger:"select-body-headline-true",delay:1e3},{id:"select-body-headline-headline-true",message:"Jetzt gib deinen Titel ein",trigger:"enter-body-headline-headline-true"},{id:"enter-body-headline-headline-true",user:!0,trigger:function(t){return e({type:"setTitle",value:t.value}),"body-headline-close"}},{id:"body-headline-close",message:"Und wie geht es dann weiter?",trigger:"select-headline-close"},{id:"select-headline-close",options:[{value:1,label:"</body>",trigger:"select-close-headline-false"},{value:2,label:"</h1>",trigger:"select-close-headline-true"}]},{id:"select-close-headline-false",message:"Fast! Bitte versuche es erneut.",trigger:"select-headline-close",delay:1e3},{id:"select-close-headline-true",message:"Und dann?",trigger:"select-body-close"},{id:"select-body-close",options:[{value:1,label:"</body>",trigger:"select-body-close-true"},{value:2,label:"</head>",trigger:"select-body-close-false"}]},{id:"select-body-close-false",message:"Fast! Bitte versuche es erneut.",trigger:"select-body-close"},{id:"select-body-close-true",trigger:"sieht-ziemlich-cool-aus",component:n.a.createElement(p,null)},{id:"sieht-ziemlich-cool-aus",message:"Das ist doch schon mal ziemlich cool. \ud83d\ude0e Aber es ist schon ein bisschen langweilig, dass das alles in schwarz ist. ",trigger:"gruene-ueberschrift",delay:3e3},{id:"gruene-ueberschrift",message:"Meine Lieblingsfarbe ist ja gr\xfcn. Deshalb will ich meine \xdcberschrift in gr\xfcn haben. \ud83d\ude0d Daf\xfcr muss ich bei der \xdcberschrift sagen, dass sie gr\xfcn sein soll. \ud83c\udfa8",trigger:"gruene-ueberschrift-so",delay:3e3},{id:"gruene-ueberschrift-so",message:"Das mache ich durch:",trigger:"gruene-ueberschrift-code"},{id:"gruene-ueberschrift-code",component:n.a.createElement(b,{content:'<h1 style="color=green;">Mein Lieblingstier: Die Schildkr\xf6te</h1>'}),asMessage:!0,trigger:"gruene-ueberschrift-verstanden"},{id:"gruene-ueberschrift-verstanden",options:[{value:1,label:"Weiter!",trigger:"gruene-ueberschrift-gesamt-code-ueberleitung"}]},{id:"gruene-ueberschrift-gesamt-code-ueberleitung",message:"\ud83d\udc68\ud83d\udcbb Insgesamt sieht mein Code jetzt so aus:",trigger:"gruene-ueberschrift-gesamt-code"},{id:"gruene-ueberschrift-gesamt-code",component:n.a.createElement(b,{content:'<CodeBlock content={<body><h1 style="color=green;">Mein Lieblingstier: Die Schildkr\xf6te<Botname></h1></body>}/>'}),asMessage:!0,trigger:"andere-farben"},{id:"andere-farben",message:"Hinter color= kannst du verschiedene Farben auf Englisch eintragen. Vergiss das Istgleichzeichen nicht!",trigger:"andere-farben-verstanden"},{id:"andere-farben-verstanden",options:[{value:1,label:"Verstanden!",trigger:"fabe-definieren"}]},{id:"fabe-definieren",message:"Wie w\xfcrde ich denn die \xdcberschrift rot machen?",trigger:"select-rote-schrift"},{id:"select-rote-schrift",options:[{value:1,label:'<h1 style="color=red;">',trigger:"farbe-waehlen"},{value:2,label:'<h1 style="Farbe=rot;">',trigger:"fehler-farbige-ueberschrift"},{value:3,label:'<h1 style="color=blue;">',trigger:"fehler-farbige-ueberschrift"}]},{id:"fehler-farbige-ueberschrift",message:"Ups, das war leider falsch! Versuche es nochmal!",trigger:"select-rote-schrift"},{id:"farbe-waehlen",message:"Welche Farbe soll deine \xdcberschrift haben?",trigger:"select-farbe-ueberschrift"},{id:"select-farbe-ueberschrift",options:[{value:1,label:"rot",trigger:function(){return e({type:"setTitleColor",value:"red"}),"farbige-ueberschrift-super"}},{value:2,label:"gelb",trigger:function(){return e({type:"setTitleColor",value:"yellow"}),"farbige-ueberschrift-super"}},{value:3,label:"blau",trigger:function(){return e({type:"setTitleColor",value:"blue"}),"farbige-ueberschrift-super"}}]},{id:"farbige-ueberschrift-super",component:n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement("br",null),n.a.createElement(p,null)),trigger:"farbige-ueberschrift-super-2"},{id:"farbige-ueberschrift-super-2",message:"Das sieht ja schon richtig cool aus!",trigger:"inhalt-erstellen"},{id:"inhalt-erstellen",message:"Jetzt wollen wir aber noch die Webseite mit Inhalt f\xfcllen. Bis jetzt haben wir ja blo\xdf die \xdcberschrift.",trigger:"inhalt-schildkroete"},{id:"inhalt-schildkroete",message:"Daf\xfcr schreiben wir das hinter die \xdcberschrift. Auf meiner Webseite \xfcber Schildkr\xf6ten sah das damals so aus:",trigger:"inhalt-schildkroete"},{id:"inhalt-schildkroete",component:n.a.createElement(b,{content:'<body>\n      <h1 style="color=green;">Mein Lieblingstier: Die Schildkr\xf6te</h1>\n      \n      Es gibt auf der ganzen Welt derzeit 341 verscheidene Schildkr\xf6tenarten.\n      Es gibt Landschildkr\xf6tenarten und kleine Wasserschildkr\xf6ten und auch gro\xdfe\n      Fluss-Schildkr\xf6ten in S\xfcdamerika und sogar Riesenschildkr\xf6ten.\n      \n      </body>'}),trigger:"inhalt-selbst-schreiben"},{id:"inhalt-selbst-schreiben",message:"Jetzt kanns du deinen Inhalt passend zu deinem Titel schreiben. Die \xdcberschrift von eben habe ich mir gemerkt und f\xfcge sie zu deinem Inhalt dazu.",trigger:"enter-inhalt"},{id:"enter-inhalt",user:!0,trigger:function(t){return e({type:"setBody",value:t.value}),"hp-fertig"}},{id:"hp-fertig",message:"Und schon ist deine erste eigene Homepage fertig! \ud83d\ude32\ud83d\udc4f",trigger:"finaler-link"},{id:"finaler-link",message:"Schau gleich hier: ",trigger:"link to website"},{id:"link to website",component:n.a.createElement(v,null),end:!0}];return a<=750?n.a.createElement(d.a,{width:"100%",steps:g,floating:!0,opened:!0}):n.a.createElement("div",{style:{backgroundColor:"gray",width:"100%",minHeight:"100vh",display:"flex",flexDirection:"column"}},n.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignSelf:"center"}},n.a.createElement("div",{style:{flex:1}}),n.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold",color:"white",fontSize:25}},"Saphira"),n.a.createElement("div",null,n.a.createElement(d.a,{steps:g})),n.a.createElement("div",{style:{flex:1}})))}var E=i(3),z={name:void 0,age:void 0,url:void 0};var x=Object(E.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAge":e=Object(o.a)({},e,{age:t.value});break;case"setName":e=Object(o.a)({},e,{name:t.value});break;case"setURL":e=Object(o.a)({},e,{url:t.value})}return e},code:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setBody":e=Object(o.a)({},e,{body:t.value});break;case"setTitle":e=Object(o.a)({},e,{title:t.value});break;case"setTitleColor":e=Object(o.a)({},e,{titleColor:t.value})}return e}});var S=function(){var e=function(){var e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,i,r){return e[i]=decodeURI(r),""})),e}();if(e.site)return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.site}});var t=Object(E.c)(x);return n.a.createElement(c.a,{store:t},n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2936c726.chunk.js.map