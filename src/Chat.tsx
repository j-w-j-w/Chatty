import React, { Dispatch, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { MessageArgs } from './chatbot-types';
import { getUrlVars, createWebsiteURLWithData } from './urlArgs';
import { useDispatch } from 'react-redux';
import { ChatBotAction } from './state/action';
import { Profile } from './Profile';
import { CodeBlock } from './CodeBlock';

type TriggerProps = { value: string; steps?: any };

export function ProgrammingChatBot() {
  const dispatch = useDispatch<Dispatch<ChatBotAction>>();
  const [height, setHeight] = useState(window.innerHeight);

  React.useEffect(() => {
    function updateHeight() {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  });

  const steps = [
    {
      id: 'start',
      message: 'Hej, ich bin Saphira 🐉 Wie heißt du? 🤗',
      trigger: 'enter-username',
    },
    {
      id: 'enter-username',
      user: true,
      trigger: 'ask-learn',
    },
    {
      id: 'ask-learn',
      message: (args: MessageArgs) => {
        dispatch({ type: 'setName', value: args.previousValue });
        return `${args.previousValue}, möchtest du lernen, wie man ganz einfach eine Homepage programmiert? 👩💻👨💻`;
      },
      trigger: 'select-learn',
    },
    {
      id: 'select-learn',
      options: [
        { value: 1, label: 'Ja', trigger: 'learn-yes' },
        { value: 2, label: 'Nein', trigger: 'learn-no' },
      ],
    },
    {
      id: 'learn-yes',
      message: 'Super, dann legen wir direkt los! 🤩',
      trigger: 'only-smartphone',
    },
    {
      id: 'learn-no',
      message: 'Schade. Vielleicht kann ich dich dennoch überzeugen 🤔',
      trigger: 'only-smartphone',
    },
    {
      id: 'only-smartphone',
      message: 'Dazu brauchst du nichts weiter als dein Smartphone... 🤳',
      trigger: 'explain-build-together',
      delay: 2000,
    },
    {
      id: 'explain-build-together',
      message:
        'Wir machen das so: Ich zeige dir, wie ich meine Homepage programmiere und du kannst dann in jedem Schritt deine eigene Homepage entwickeln. 🙃💪',
      trigger: 'explain-language-basic',
      delay: 3000,
    },
    {
      id: 'explain-language-basic',
      message:
        'Zuerst erkläre ich dir ganz grob, wie die Sprache funktioniert. ',
      trigger: 'explain-language-basic-tags',
      delay: 1000,
    },
    {
      id: 'explain-language-basic-tags',
      message:
        'Immer, wenn wir was definieren wollen, müssen wir sagen, wo es anfängt und wo es aufhört. Dafür nutzen wir Tags. 🤖',
      trigger: 'explain-language-basic-tags-language',
      delay: 2000,
    },
    {
      id: 'explain-language-basic-tags-language',
      message:
        'Nein, das sind keine Wochentage. Das spricht man aus wie TÄÄG! Das ist sowas wie ein Name. Am Anfang sieht das dann so aus:',
      trigger: 'code-explain-language-basic-tags',
      delay: 2000,
    },
    {
      id: 'code-explain-language-basic-tags',
      trigger: 'ask-tag-input',
      component: <CodeBlock content={`<tag>`} />,
      asMessage: true,
      delay: 1000,
    },
    {
      id: 'ask-tag-input',
      message:
        'Such direkt mal die Zeichen auf deiner Tastatur und tippe <tag> selbst ein :)',
      trigger: 'enter-tag-input',
      delay: 1000,
    },
    {
      id: 'enter-tag-input',
      user: true,
      trigger: (props: TriggerProps) => {
        console.log(props.value);
        if (props.value === '<tag>') {
          return 'enter-tag-input-true';
        } else {
          return 'enter-tag-input-false';
        }
      },
    },
    //TODO über Parser lösen
    {
      id: 'enter-tag-input-true',
      message: 'Das klappt ja super!',
      trigger: 'code-explain-language-basic-close-tags',
    },
    {
      id: 'enter-tag-input-false',
      message: 'Das stimmt noch nicht ganz, versuche es nochmal!',
      trigger: 'enter-tag-input',
    },
    {
      id: 'code-explain-language-basic-close-tags',
      message:
        'Am Ende eines Tags müssen wir dann sagen, dass es vorbei ist. 🙅️ Das machen wir so:',
      trigger: 'code-explain-language-basic-close-tags-code',
      delay: 2000,
    },
    {
      id: 'code-explain-language-basic-close-tags-code',
      trigger: 'explain-slash',
      component: <CodeBlock content={`</tag>`} />,
      asMessage: true,
    },
    {
      id: 'explain-slash',
      message:
        'Es ist ganz wichtig, dass wir hier den schrägen Strich nicht vergessen. Dann geht nämlich alles kaputt. 🙇 Gib es jetzt selbst ein.',
      trigger: 'enter-slash',
      delay: 3000,
    },
    {
      id: 'enter-slash',
      user: true,
      trigger: (props: TriggerProps) => {
        console.log(props.value);
        if (props.value === '</tag>') {
          return 'enter-slash-true';
        } else {
          return 'enter-slash-false';
        }
      },
    },
    //TODO: über Parser lösen
    {
      id: 'enter-slash-false',
      message: 'Das stimmt noch nicht ganz, versuche es nochmal',
      trigger: 'enter-slash',
      delay: 1000,
    },
    {
      id: 'enter-slash-true',
      message:
        'Sehr gut! Jetzt haben wir erstmal genug Theorie gehabt, jetzt geht es los! 💪',
      trigger: 'hast-du-lust-loszulegen',
      delay: 1000,
    },

    {
      id: 'hast-du-lust-loszulegen',
      message: 'Hast du Lust loszulegen? 😊',
      trigger: 'hast-du-lust-loszulegen-select',
    },
    {
      id: 'hast-du-lust-loszulegen-select',
      options: [
        { value: 1, label: 'Jawoll!', trigger: 'super-wir-starten' },
        { value: 2, label: 'Nö', trigger: 'noch-mehr-theorie' },
      ],
    },
    {
      id: 'super-wir-starten',
      message: 'Super!! Wir starten! 🚀',
      trigger: 'um-auf-unserer-homepage-etwas-darzustellen',
      delay: 1000,
    },
    {
      id: 'noch-mehr-theorie',
      message:
        'Du willst NOCH MEHR Theorie? Nicht mit mir! Wir gehen jetzt ans Eingemachte! Es wird toll!',
      trigger: 'um-auf-unserer-homepage-etwas-darzustellen',
      delay: 3000,
    },

    {
      id: 'um-auf-unserer-homepage-etwas-darzustellen',
      message: `Um auf unserer Homepage etwas darzustellen, benötigt diese einen sogenannten Körper (im Englischen: "Body")`,
      trigger: 'body-verstanden',
    },

    {
      id: 'body-verstanden',
      options: [
        {
          value: 1,
          label: 'Verstanden!',
          trigger: 'im-body-kompletter-inhalt',
        },
      ],
    },

    {
      id: 'im-body-kompletter-inhalt',
      message: `Im Body kannst du den kompletten Inhalt einer Homepage festlegen. 💪`,
      trigger: 'chatbot-body-beispiel',
      delay: 2000,
    },
    {
      id: 'chatbot-body-beispiel',
      message: `Ich mache das zum Beispiel so:`,
      trigger: 'code-lieblingstier-body',
      delay: 1000,
    },

    {
      id: 'code-lieblingstier-body',
      trigger: 'code-body-verstanden',
      asMessage: true,
      component: (
        <CodeBlock
          content={`<body>Mein Lieblingstier: Die Schildkröte</body>`}
        />
      ),
    },

    {
      id: 'code-body-verstanden',
      options: [
        {
          value: 1,
          label: 'Verstanden!',
          trigger: 'lieblingstier-website-gebaut',
        },
      ],
    },

    {
      id: 'lieblingstier-website-gebaut',
      message: `Ja, ich habe Schildkröten richtig gern. Deshalb will ich eine Webseite über Schildkröten programmiert. 🤓`,
      trigger: 'welt-sagen-website',
      delay: 3500,
    },
    {
      id: 'welt-sagen-website',
      message: `Weißt du schon, was du der Welt sagen möchtest?`,
      trigger: 'select-welt-sagen',
    },
    {
      id: 'select-welt-sagen',
      options: [
        { value: 1, label: 'Ja', trigger: 'welt-sagen-ja' },
        { value: 2, label: 'Nein', trigger: 'welt-sagen-nein' },
      ],
    },
    {
      id: 'welt-sagen-nein',
      message: `Hier ein paar Ideen: Ich habe auch mal eine Webseite gemacht, auf der ich meinen Eltern danke. Die haben sich sehr gefreut! Ein Freund hat auch mal eine Webseite über Fussball gemacht ⚽️`,
      trigger: 'welt-sagen-ja',
      delay: 4000,
    },
    {
      id: 'welt-sagen-ja',
      message: `Also schreib doch einfach mal was hin. Natürlich in einem <body>!️`,
      trigger: 'enter-website-welt-sagen',
      delay: 2000,
    },

    {
      id: 'enter-website-welt-sagen',
      user: true,
      trigger: 'enter-website-welt-sagen-korrekt',
    } /*TODO: über Parser lösen `Überprüfe: wenn abgeschrieben, dann trigger=enter-website-welt-sagen-abschreiben; wenn slash vergessen,
dann trigger=enter-website-welt-sagen-slash; wenn body-tag nicht geschlossen, dann trigger= enter-website-welt-sagen-body;
bei sonstigem Schreibfehler, trigger=  enter-website-welt-sagen-schreibweise; wenn korrekt, dann trigger= enter-website-welt-sagen-korrekt` */,
    {
      id: 'enter-website-welt-sagen-abschreiben',
      message: `Hej - nicht einfach abschreiben! 🤔️`,
      trigger: 'enter-website-welt-sagen-abschreiben-eigener-text',
      delay: 1000,
    },
    {
      id: 'enter-website-welt-sagen-abschreiben-eigener-text',
      message: `Schreibe deinen eigenen Text.️`,
      trigger: 'enter-website-welt-sagen',
      delay: 1000,
    },
    {
      id: 'enter-website-welt-sagen-schreibweise',
      message: `Achte auf die Richtige Schreibweise 🤥️`,
      trigger: 'code-lieblingstier-body',
      delay: 1000,
    },
    {
      id: 'enter-website-welt-sagen-body',
      message: `Denk dran, dass der Text von dem Beginn <body> sowie dem Ende </body> eingefasst wird 😮️`,
      trigger: 'code-lieblingstier-body',
      delay: 2000,
    },
    {
      id: 'enter-website-welt-sagen-slash',
      message: `Huch, hast du vielleicht etwas vergessen? Denke immer an den schrägen Strich "/" wenn du eine HTML-Anweisung wieder schließen möchtest. 🤖 ️`,
      trigger: 'code-lieblingstier-body',
      delay: 4000,
    },
    {
      id: 'enter-website-welt-sagen-korrekt',
      message: `Super, jetzt haben wir auch schon den Inhalt deiner Website. ️`,
      trigger: 'ask-website-sieht-gut-aus',
      /* TODO:
       *hier müsste ggf. die Website dargestellt werden
       */
      delay: 2000,
    },
    {
      id: 'ask-website-sieht-gut-aus',
      message: `Da ist sie nun deine Homepage! Gefällt sie dir? 😊`,
      trigger: 'select-website-sieht-gut-aus',
      delay: 1000,
    },
    {
      id: 'select-website-sieht-gut-aus',
      options: [
        { value: 1, label: 'Ja', trigger: 'website-sieht-gut-ja' },
        { value: 2, label: 'Nein', trigger: 'website-sieht-gut-nein' },
      ],
    },

    {
      id: 'website-sieht-gut-ja',
      message: `Es sieht schon dufte aus, aber mit meiner Dicken Brille 🤶 erkenne ich bei der kleinen Schrift nichts!️`,
      trigger: 'explain-headline-tag',
      delay: 1000,
    },
    {
      id: 'website-sieht-gut-nein',
      message: `Das habe ich mir schon gedacht! Wir machen es jetzt noch glamoröser! 🤩️`,
      trigger: 'explain-headline-tag',
      delay: 1000,
    },
    {
      id: 'explain-headline-tag',
      message: `Machen wir die Zeile ganz groß! Dazu gibt es titel! Die heißen <h1>, <h2>, <h3>, <h4>, <h5>. Und es gibt sogar noch <h6>️`,
      trigger: 'sprache-text-rechts-links',
      delay: 2000,
    },
    {
      id: 'sprache-text-rechts-links',
      message: `Wie du ja weißt, verpackt man in dieser Sprache html den Text immer von links und rechts, also zum Beispiel so:️`,
      trigger: 'code-sprache-text-rechts-links',
      delay: 1500,
    },

    {
      id: 'code-sprache-text-rechts-links',
      trigger: 'ueberschrift-verstanden',
      asMessage: true,
      component: (
        <CodeBlock content={`<h3>Hallo ich bin eine Überschrift</h3>`} />
      ),
    },

    {
      id: 'ueberschrift-verstanden',
      options: [{ value: 1, label: 'Verstanden!', trigger: 'zuerst-machen' }],
    },

    {
      id: 'zuerst-machen',
      message: `Wenn du jetzt deine Homepage neu erstellst: Was würdest du zuerst machen?`,
      trigger: 'select-body-headline',
    },

    {
      id: 'select-body-headline',
      options: [
        { value: 1, label: '<head>', trigger: 'select-body-headline-false' },
        { value: 2, label: '<body>', trigger: 'select-body-headline-true' },
        { value: 3, label: '<h1>', trigger: 'select-body-headline-false' },
      ],
    },
    {
      id: 'select-body-headline-false',
      message: `Schade! Nicht ganz korrekt. Versuche es nochmal!`,
      trigger: 'select-body-headline',
    },

    {
      id: 'select-body-headline-true',
      message: `Und dann?`,
      trigger: 'select-body-headline-true-weiter',
    },

    {
      id: 'select-body-headline-true-weiter',
      options: [
        {
          value: 1,
          label: '<head>',
          trigger: 'select-body-headline-headline-false',
        },
        {
          value: 2,
          label: '<h1>',
          trigger: 'select-body-headline-headline-true',
        },
      ],
    },
    {
      id: 'select-body-headline-headline-false',
      message: `Fast! Bitte versuche es erneut.`,
      trigger: 'select-body-headline-true',
      delay: 1000,
    },

    {
      id: 'select-body-headline-headline-true',
      message: 'Jetzt gib deinen Titel ein',
      trigger: 'enter-body-headline-headline-true',
    },

    {
      id: 'enter-body-headline-headline-true',
      user: true,
      trigger: 'body-headline-close',
      //TODO: code aktualisieren
    },

    {
      id: 'body-headline-close',
      message: 'Und wie geht es dann weiter?',
      trigger: 'select-headline-close',
    },

    {
      id: 'select-headline-close',
      options: [
        {
          value: 1,
          label: '</body>',
          trigger: 'select-close-headline-false',
        },
        {
          value: 2,
          label: '</h1>',
          trigger: 'select-close-headline-true',
        },
      ],
    },
    {
      id: 'select-close-headline-false',
      message: `Fast! Bitte versuche es erneut.`,
      trigger: 'select-headline-close',
      delay: 1000,
    },

    {
      id: 'select-close-headline-true',
      message: 'Und dann?',
      trigger: 'select-body-close',
    },
    {
      id: 'select-body-close',
      options: [
        {
          value: 1,
          label: '</body>',
          trigger: 'select-body-close-true',
        },
        {
          value: 2,
          label: '</head>',
          trigger: 'select-body-close-false',
        },
      ],
    },
    {
      id: 'select-body-close-false',
      message: `Fast! Bitte versuche es erneut.`,
      trigger: 'select-body-close',
    },
    {
      id: 'select-body-close-true',
      /* TODO: Hier soll die letzte User-Eingabe mit übernommen werden */
      trigger: 'sieht-ziemlich-cool-aus',
      asMessage: true,
      component: <CodeBlock />,
    }, //TODO: irgendwie steht hier nicht die user Eingabe drin. Auerßdem müssen wir hier das so parsen, dass die User-Eingabe zwischen dem Body und h1 tag steht
    {
      id: 'sieht-ziemlich-cool-aus',
      message: `Das ist doch schon mal ziemlich cool. 😎 Aber es ist schon ein bisschen langweilig, dass das alles in schwarz ist. `,
      trigger: 'gruene-ueberschrift',
      delay: 3000,
    },
    {
      id: 'gruene-ueberschrift',
      message:
        'Meine Lieblingsfarbe ist ja grün. Deshalb will ich meine Überschrift in grün haben. 😍 Dafür muss ich bei der Überschrift sagen, dass sie grün sein soll. 🎨',
      trigger: 'gruene-ueberschrift-so',
      delay: 3000,
    },

    {
      id: 'gruene-ueberschrift-so',
      message: 'Das mache ich durch:',
      trigger: 'gruene-ueberschrift-code',
    },

    {
      id: 'gruene-ueberschrift-code',
      component: (
        <CodeBlock
          content={`<h1 style="color=green;">Mein Lieblingstier: Die Schildkröte</h1>`}
        />
      ),
      asMessage: true,
      trigger: 'gruene-ueberschrift-verstanden',
    },

    {
      id: 'gruene-ueberschrift-verstanden',
      options: [
        {
          value: 1,
          label: 'Weiter!',
          trigger: 'gruene-ueberschrift-gesamt-code-ueberleitung',
        },
      ],
    },

    {
      id: 'gruene-ueberschrift-gesamt-code-ueberleitung',
      message: '👨💻 Insgesamt sieht mein Code jetzt so aus:',
      trigger: 'gruene-ueberschrift-gesamt-code',
    },

    {
      id: 'gruene-ueberschrift-gesamt-code',
      component: (
        <CodeBlock
          content={`<CodeBlock content={<body><h1 style="color=green;">Mein Lieblingstier: Die Schildkröte<Botname></h1></body>}/>`}
        />
      ),
      asMessage: true,
      trigger: 'andere-farben',
    },

    {
      id: 'andere-farben',
      message:
        'Hinter color= kannst du verschiedene Farben auf Englisch eintragen. Vergiss das Istgleichzeichen nicht!',
      trigger: 'andere-farben-verstanden',
    },

    {
      id: 'andere-farben-verstanden',
      options: [{ value: 1, label: 'Verstanden!', trigger: 'fabe-definieren' }],
    },

    {
      id: 'fabe-definieren',
      message: 'Wie würde ich denn die Überschrift rot machen?',
      trigger: 'select-rote-schrift',
    },

    {
      id: 'select-rote-schrift',
      options: [
        {
          value: 1,
          label: '<h1 style="color=red;">',
          trigger: 'farbe-waehlen',
        },
        {
          value: 2,
          label: '<h1 style="Farbe=rot;">',
          trigger: 'fehler-farbige-ueberschrift',
        },
        {
          value: 3,
          label: '<h1 style="color=blue;">',
          trigger: 'fehler-farbige-ueberschrift',
        },
      ],
    },

    {
      id: 'fehler-farbige-ueberschrift',
      message: 'Ups, das war leider falsch! Versuche es nochmal!',
      trigger: 'select-rote-schrift',
    },

    {
      id: 'farbe-waehlen',
      message: 'Welche Farbe soll deine Überschrift haben?',
      trigger: 'select-farbe-ueberschrift',
    },

    {
      id: 'select-farbe-ueberschrift',
      options: [
        { value: 1, label: 'rot', trigger: 'farbige-ueberschrift-super' },
        { value: 2, label: 'gelb', trigger: 'farbige-ueberschrift-super' },
        { value: 3, label: 'blau', trigger: 'farbige-ueberschrift-super' },
      ],
      /*
       *TODO: hier dann die gewählte Farbe in den Code rein schreiben außerdem sollte hier dann noch in den Code der Text aus der Überschrift rein von oben und alle closing tags
       * TODO: dann noch die homepage anzeigen?
       */
    },

    {
      id: 'farbige-ueberschrift-super',
      message: 'Das sieht ja schon richtig cool aus!',
      trigger: 'inhalt-erstellen',
    },

    {
      id: 'inhalt-erstellen',
      message:
        'Jetzt wollen wir aber noch die Webseite mit Inhalt füllen. Bis jetzt haben wir ja bloß die Überschrift.',
      trigger: 'inhalt-schildkroete',
    },

    {
      id: 'inhalt-schildkroete',
      message:
        'Dafür schreiben wir das hinter die Überschrift. Auf meiner Webseite über Schildkröten sah das damals so aus:',
      trigger: 'inhalt-schildkroete',
    },

    {
      id: 'inhalt-schildkroete',
      code: true,
      component: (
        <CodeBlock
          content={`<body>
<h1 style="color=green;">Mein Lieblingstier: Die Schildkröte</h1>

Es gibt auf der ganzen Welt derzeit 341 verscheidene Schildkrötenarten.
Es gibt Landschildkrötenarten und kleine Wasserschildkröten und auch große
Fluss-Schildkröten in Südamerika und sogar Riesenschildkröten.

</body>`}
        />
      ),
      trigger: 'inhalt-selbst-schreiben',
    },

    {
      id: 'inhalt-selbst-schreiben',
      message:
        'Jetzt kanns du deinen Inhalt passend zu deinem Titel schreiben. Die Überschrift von eben habe ich mir gemerkt und füge sie zu deinem Inhalt dazu.',
      trigger: 'enter-inhalt',
    },

    /*
     * Hier muss dann nochmal der Code von vorher eingefügt werden, damit der User nur noch seinen Text eingeben muss
     */

    {
      id: 'enter-inhalt',
      user: true,
      trigger: 'hp-fertig',
    },

    {
      id: 'hp-fertig',
      message: 'Und schon ist deine erste eigene Homepage fertig! 😲👏',
      trigger: 'finaler-link',
    },

    {
      id: 'finaler-link',
      message: 'Schau gleich hier: ',

      /*
       * TODO hier muss dann noch der link eingefügt werden
       */
      end: true,
    },
  ];

  const stepsOld = [
    {
      id: 'start',
      message: `Moin, was möchtest du machen?`,
      trigger: 'select',
    },
    {
      id: 'profile',
      component: <Profile />,
      trigger: 'start',
    },
    {
      id: 'select',
      options: [
        { value: 1, label: 'Namen ändern', trigger: 'update-name' },
        { value: 2, label: 'Alter angeben', trigger: 'update-age' },
        { value: 3, label: 'Programmieren', trigger: 'code-start' },
        { value: 4, label: 'Website erstellen', trigger: 'create-website' },
        { value: 5, label: 'Mein Profil', trigger: 'profile' },
        { value: 6, label: 'Code eingeben', trigger: 'update-code' },
      ],
    },
    {
      id: 'update-name',
      message: 'Okay, wie heißt du?',
      trigger: 'enter-name',
    },
    {
      id: 'enter-name',
      user: true,
      trigger: 'set-name',
    },
    {
      id: 'set-name',
      message: (args: MessageArgs) => {
        dispatch({ type: 'setName', value: args.previousValue });
        return `Moin ${args.previousValue}!`;
      },
      trigger: 'start',
    },
    {
      id: 'update-age',
      message: 'Wie alt bist du?',
      trigger: 'enter-age',
    },
    {
      id: 'enter-age',
      user: true,
      validator: (input: string) => {
        const value = parseInt(input);
        if (isNaN(value)) {
          return 'Bitte gib eine Zahl ein.';
        } else if (value < 10 || value >= 100) {
          return `${value}? Komm schon.`;
        }
        return true;
      },
      trigger: 'set-age',
    },
    {
      id: 'set-age',
      message: (args: MessageArgs) => {
        dispatch({ type: 'setAge', value: parseInt(args.previousValue) });
        return `Du bist also ${parseInt(args.previousValue)}.`;
      },
      trigger: 'start',
    },
    {
      id: 'code-start',
      message:
        'Ok, dann schreibe mal eine JavaScript funktion die zwei Zahlen addiert.',
      trigger: 'enter-code',
    },
    {
      id: 'enter-code',
      trigger: 'finish-code',
      user: true,
      validator: (input: string) => {
        try {
          const a = Math.random(),
            b = Math.random();
          if (eval(input)(a, b) === a + b) {
            return true;
          } else {
            return 'Das hat leider nicht geklappt. :(';
          }
        } catch (error) {
          return error;
        }
      },
    },
    {
      id: 'finish-code',
      message: 'Herzlichen Glückwunsch! Du bist jetzt ein Programmierer!',
      trigger: 'start',
    },
    {
      id: 'create-website',
      message: 'Cool! Dann gib mal deinen HTML code ein.',
      trigger: 'enter-website',
    },
    {
      id: 'enter-website',
      trigger: 'finish-website',
      user: true,
    },
    {
      id: 'finish-website',
      message: (args: MessageArgs) => {
        dispatch({
          type: 'setURL',
          value: createWebsiteURLWithData('site', args.previousValue),
        });
        return 'Super! Deine Website ist jetzt im Link unten!';
      },
      trigger: 'profile',
    },
    {
      id: 'update-code',
      message: 'Bitte schreibe etwas code',
      trigger: 'enter-code',
    },
    {
      id: 'enter-code',
      user: true,
      trigger: (props: TriggerProps) => {
        dispatch({ type: 'setCode', value: props.value });
        return 'show-code-block';
      },
    },
    {
      id: 'show-code-block',
      asMessage: true,
      component: <CodeBlock content={`<tag>`} />,
      trigger: 'profile',
    },
  ];

  if (height <= 750) {
    return <ChatBot width="100%" steps={steps} floating={true} opened={true} />;
  }

  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <div style={{ flex: 1 }} />
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            fontSize: 25,
          }}
        >
          Saphira
        </p>
        <div>
          <ChatBot steps={steps} />
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
