import { VerseData } from '../../../../types';

/**
 * Psalm 1:1-6 — 의인과 악인
 * Word-by-word parsing (BHS/Leningrad Codex)
 * Korean glosses and translations.
 */
export const psalm1Texts: VerseData[] = [
  // ===== Psalm 1:1 =====
  {
    ref: 'Ps 1:1',
    text: 'אַשְׁרֵי הָאִישׁ אֲשֶׁר לֹא הָלַךְ בַּעֲצַת רְשָׁעִים וּבְדֶרֶךְ חַטָּאִים לֹא עָמָד וּבְמוֹשַׁב לֵצִים לֹא יָשָׁב',
    translation: '복이 있도다, 악인들의 꾀를 따르지 아니하며 죄인들의 길에 서지 아니하며 오만한 자들의 자리에 앉지 아니하는 사람이여',
    words: [
      { word: 'אַשְׁרֵי', gloss: '복이 있도다', parsing: '남성 복수 연계형 명사 (감탄)', root: 'אשׁר' },
      { word: 'הָאִישׁ', gloss: '그 사람', parsing: '정관사 + 남성 단수 명사', root: 'אישׁ' },
      { word: 'אֲשֶׁר', gloss: '~하는', parsing: '관계 대명사' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'הָלַךְ', gloss: '걸었다', parsing: '칼 완료 3인칭 남성 단수', root: 'הלך' },
      { word: 'בַּעֲצַת', gloss: '~의 꾀를 따라', parsing: '전치사 ב + 연계형 여성 명사', root: 'עצה' },
      { word: 'רְשָׁעִים', gloss: '악인들', parsing: '남성 복수 형용사/명사', root: 'רשׁע' },
      { word: 'וּבְדֶרֶךְ', gloss: '그리고 길에', parsing: '접속사 + 전치사 ב + 연계형 남/여 명사', root: 'דרך' },
      { word: 'חַטָּאִים', gloss: '죄인들', parsing: '남성 복수 명사', root: 'חטא' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'עָמָד', gloss: '서다', parsing: '칼 완료 3인칭 남성 단수', root: 'עמד' },
      { word: 'וּבְמוֹשַׁב', gloss: '그리고 자리에', parsing: '접속사 + 전치사 ב + 연계형 남성 명사', root: 'מושׁב' },
      { word: 'לֵצִים', gloss: '조롱하는 자들', parsing: '남성 복수 명사', root: 'לוץ' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'יָשָׁב', gloss: '앉다', parsing: '칼 완료 3인칭 남성 단수', root: 'ישׁב' },
    ],
  },
  // ===== Psalm 1:2 =====
  {
    ref: 'Ps 1:2',
    text: 'כִּי אִם בְּתוֹרַת יְהוָה חֶפְצוֹ וּבְתוֹרָתוֹ יֶהְגֶּה יוֹמָם וָלָיְלָה',
    translation: '오직 여호와의 율법을 즐거워하며 그의 율법을 주야로 묵상하는도다',
    words: [
      { word: 'כִּי', gloss: '오직', parsing: '접속사' },
      { word: 'אִם', gloss: '오직 (강조)', parsing: '접속사 (כי אם = 오직)' },
      { word: 'בְּתוֹרַת', gloss: '~의 율법에', parsing: '전치사 ב + 연계형 여성 명사', root: 'תורה' },
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'חֶפְצוֹ', gloss: '그의 기쁨', parsing: '남성 명사 + 3남단 접미사', root: 'חפץ' },
      { word: 'וּבְתוֹרָתוֹ', gloss: '그리고 그의 율법을', parsing: '접속사 + 전치사 ב + 여성 명사 + 3남단 접미사', root: 'תורה' },
      { word: 'יֶהְגֶּה', gloss: '묵상한다', parsing: '칼 미완료 3인칭 남성 단수', root: 'הגה' },
      { word: 'יוֹמָם', gloss: '낮에', parsing: '부사', root: 'יום' },
      { word: 'וָלָיְלָה', gloss: '그리고 밤에', parsing: '접속사 + 남성 명사', root: 'לילה' },
    ],
  },
  // ===== Psalm 1:3 =====
  {
    ref: 'Ps 1:3',
    text: 'וְהָיָה כְּעֵץ שָׁתוּל עַל־פַּלְגֵי מָיִם אֲשֶׁר פִּרְיוֹ יִתֵּן בְּעִתּוֹ וְעָלֵהוּ לֹא יִבּוֹל וְכֹל אֲשֶׁר־יַעֲשֶׂה יַצְלִיחַ',
    translation: '그는 시냇가에 심은 나무가 시절을 따라 열매를 맺으며 그 잎사귀가 마르지 아니함 같으니 그가 하는 모든 일이 다 형통하리로다',
    words: [
      { word: 'וְהָיָה', gloss: '그리고 ~와 같을 것이다', parsing: '접속사 + 칼 완료 3남단', root: 'היה' },
      { word: 'כְּעֵץ', gloss: '나무와 같이', parsing: '전치사 כ + 남성 명사', root: 'עץ' },
      { word: 'שָׁתוּל', gloss: '심긴', parsing: '칼 수동 분사 남성 단수', root: 'שׁתל' },
      { word: 'עַל־פַּלְגֵי', gloss: '시냇가에', parsing: '전치사 + 연계형 남성 복수 명사', root: 'פלג' },
      { word: 'מָיִם', gloss: '물', parsing: '남성 복수 명사' },
      { word: 'אֲשֶׁר', gloss: '~하는', parsing: '관계 대명사' },
      { word: 'פִּרְיוֹ', gloss: '그의 열매를', parsing: '남성 명사 + 3남단 접미사', root: 'פרי' },
      { word: 'יִתֵּן', gloss: '맺는다', parsing: '칼 미완료 3인칭 남성 단수', root: 'נתן' },
      { word: 'בְּעִתּוֹ', gloss: '그 때에', parsing: '전치사 ב + 여성 명사 + 3남단 접미사', root: 'עת' },
      { word: 'וְעָלֵהוּ', gloss: '그리고 그의 잎사귀', parsing: '접속사 + 남성 명사 + 3남단 접미사', root: 'עלה' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'יִבּוֹל', gloss: '시든다', parsing: '칼 미완료 3인칭 남성 단수', root: 'נבל' },
      { word: 'וְכֹל', gloss: '그리고 모든', parsing: '접속사 + 남성 명사 (연계형)', root: 'כל' },
      { word: 'אֲשֶׁר־יַעֲשֶׂה', gloss: '그가 하는 것', parsing: '관계사 + 칼 미완료 3남단', root: 'עשׂה' },
      { word: 'יַצְלִיחַ', gloss: '형통한다', parsing: '히필 미완료 3인칭 남성 단수', root: 'צלח' },
    ],
  },
  // ===== Psalm 1:4 =====
  {
    ref: 'Ps 1:4',
    text: 'לֹא־כֵן הָרְשָׁעִים כִּי אִם־כַּמֹּץ אֲשֶׁר־תִּדְּפֶנּוּ רוּחַ',
    translation: '악인들은 그렇지 아니하니 오직 바람에 날리는 겨와 같도다',
    words: [
      { word: 'לֹא־כֵן', gloss: '그렇지 아니하다', parsing: '부정 부사 + 부사' },
      { word: 'הָרְשָׁעִים', gloss: '악인들', parsing: '정관사 + 남성 복수 형용사/명사', root: 'רשׁע' },
      { word: 'כִּי', gloss: '오직', parsing: '접속사' },
      { word: 'אִם', gloss: '오직 (강조)', parsing: '접속사' },
      { word: 'כַּמֹּץ', gloss: '겨와 같이', parsing: '전치사 כ + 정관사 + 남성 명사', root: 'מץ' },
      { word: 'אֲשֶׁר', gloss: '~하는', parsing: '관계 대명사' },
      { word: 'תִּדְּפֶנּוּ', gloss: '그것을 날린다', parsing: '칼 미완료 3여단 + 3남단 접미사', root: 'נדף' },
      { word: 'רוּחַ', gloss: '바람', parsing: '여성 단수 명사', root: 'רוח' },
    ],
  },
  // ===== Psalm 1:5 =====
  {
    ref: 'Ps 1:5',
    text: 'עַל־כֵּן לֹא־יָקֻמוּ רְשָׁעִים בַּמִּשְׁפָּט וְחַטָּאִים בַּעֲדַת צַדִּיקִים',
    translation: '그러므로 악인들이 심판을 견디지 못하며 죄인들이 의인들의 회중에 들지 못하리로다',
    words: [
      { word: 'עַל־כֵּן', gloss: '그러므로', parsing: '전치사 + 부사' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'יָקֻמוּ', gloss: '서지 못한다', parsing: '칼 미완료 3인칭 남성 복수', root: 'קום' },
      { word: 'רְשָׁעִים', gloss: '악인들', parsing: '남성 복수 형용사/명사', root: 'רשׁע' },
      { word: 'בַּמִּשְׁפָּט', gloss: '심판에서', parsing: '전치사 ב + 정관사 + 남성 명사', root: 'משׁפט' },
      { word: 'וְחַטָּאִים', gloss: '그리고 죄인들이', parsing: '접속사 + 남성 복수 명사', root: 'חטא' },
      { word: 'בַּעֲדַת', gloss: '~의 회중에서', parsing: '전치사 ב + 연계형 여성 명사', root: 'עדה' },
      { word: 'צַדִּיקִים', gloss: '의인들', parsing: '남성 복수 형용사/명사', root: 'צדיק' },
    ],
  },
  // ===== Psalm 1:6 =====
  {
    ref: 'Ps 1:6',
    text: 'כִּי־יוֹדֵעַ יְהוָה דֶּרֶךְ צַדִּיקִים וְדֶרֶךְ רְשָׁעִים תֹּאבֵד',
    translation: '대저 여호와는 의인들의 길을 아시나 악인들의 길은 멸망하리로다',
    words: [
      { word: 'כִּי', gloss: '대저, 왜냐하면', parsing: '접속사' },
      { word: 'יוֹדֵעַ', gloss: '알고 계시다', parsing: '칼 분사 남성 단수', root: 'ידע' },
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'דֶּרֶךְ', gloss: '길을', parsing: '연계형 남/여 명사', root: 'דרך' },
      { word: 'צַדִּיקִים', gloss: '의인들', parsing: '남성 복수 형용사/명사', root: 'צדיק' },
      { word: 'וְדֶרֶךְ', gloss: '그리고 길은', parsing: '접속사 + 연계형 남/여 명사', root: 'דרך' },
      { word: 'רְשָׁעִים', gloss: '악인들', parsing: '남성 복수 형용사/명사', root: 'רשׁע' },
      { word: 'תֹּאבֵד', gloss: '멸망한다', parsing: '칼 미완료 3인칭 여성 단수', root: 'אבד' },
    ],
  },
];
