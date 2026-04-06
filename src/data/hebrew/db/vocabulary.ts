import { WordData } from '../../../types';

/**
 * Biblical Hebrew vocabulary sorted by frequency (most common first).
 * Frequencies are approximate counts from the BHS/Leningrad Codex.
 * Korean glosses provided for each entry.
 *
 * Stage 1: (~15 words)  - 기본 기능어/접속사
 * Stage 2: (~60 words)  - 핵심 명사, 칼 동사
 * Stage 3: (~60 words)  - 빈야님 동사, 형용사, 수사
 * Stage 4: (~40 words)  - 연계형, 접미사, 신학 용어
 * Stage 5: (~30 words)  - 독해 수준 어휘 (창세기, 시편, 신명기)
 */
export const hebrewVocabulary: WordData[] = [
  // =============================================
  // STAGE 1 — 기본 기능어 (~15 words)
  // =============================================
  { word: 'וְ / וַ', gloss: '그리고, ~와', parsing: '접속 접두사', category: 'conj', stage: 1, frequency: 50524 },
  { word: 'הַ', gloss: '그 (정관사)', parsing: '정관사 접두사', category: 'article', stage: 1, frequency: 30386 },
  { word: 'בְּ', gloss: '~안에, ~로', parsing: '전치사 접두사', category: 'prep', stage: 1, frequency: 15559 },
  { word: 'לְ', gloss: '~에게, ~을 위해', parsing: '전치사 접두사', category: 'prep', stage: 1, frequency: 20321 },
  { word: 'אֶת', gloss: '~을/를 (직접 목적어 표지)', parsing: '목적어 표지', category: 'particle', stage: 1, frequency: 10978 },
  { word: 'מִן', gloss: '~로부터, ~보다', parsing: '전치사', category: 'prep', stage: 1, frequency: 7592 },
  { word: 'עַל', gloss: '~위에, ~에 대하여', parsing: '전치사', category: 'prep', stage: 1, frequency: 5777 },
  { word: 'אֶל', gloss: '~에게, ~을 향하여', parsing: '전치사', category: 'prep', stage: 1, frequency: 5518 },
  { word: 'כִּי', gloss: '왜냐하면, ~라고, ~때', parsing: '접속사', category: 'conj', stage: 1, frequency: 4487 },
  { word: 'לֹא', gloss: '~아니다 (부정)', parsing: '부정 부사', category: 'adv', stage: 1, frequency: 5189 },
  { word: 'כָּל', gloss: '모든, 전부', parsing: '명사/형용사', category: 'noun', stage: 1, frequency: 5415 },
  { word: 'אֲשֶׁר', gloss: '~하는 (관계사)', parsing: '관계 대명사', category: 'pron', stage: 1, frequency: 5503 },
  { word: 'אַל', gloss: '~하지 마라 (부정 명령)', parsing: '부정 부사', category: 'adv', stage: 1, frequency: 729 },
  { word: 'גַּם', gloss: '~도, ~조차', parsing: '부사', category: 'adv', stage: 1, frequency: 769 },
  { word: 'הִנֵּה', gloss: '보라!', parsing: '감탄사/부사', category: 'particle', stage: 1, frequency: 1061 },

  // =============================================
  // STAGE 2 — 핵심 명사 & 칼 동사 (~60 words)
  // =============================================

  // --- 핵심 명사 ---
  { word: 'אֱלֹהִים', gloss: '하나님, 신', parsing: '남성 복수 명사', category: 'noun', stage: 2, frequency: 2602 },
  { word: 'יְהוָה', gloss: '여호와 (주)', parsing: '고유명사', category: 'noun', stage: 2, frequency: 6828 },
  { word: 'אֶרֶץ', gloss: '땅, 나라', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 2505 },
  { word: 'בֵּן', gloss: '아들', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 4941 },
  { word: 'מֶלֶךְ', gloss: '왕', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 2530 },
  { word: 'אִישׁ', gloss: '남자, 사람', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 2188 },
  { word: 'יוֹם', gloss: '날, 낮', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 2304 },
  { word: 'בַּיִת', gloss: '집, 가문', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 2047 },
  { word: 'עַם', gloss: '백성, 민족', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 1869 },
  { word: 'דָּבָר', gloss: '말, 일', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 1441 },
  { word: 'עִיר', gloss: '성, 도시', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 1088 },
  { word: 'אָב', gloss: '아버지', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 1211 },
  { word: 'שָׁמַיִם', gloss: '하늘', parsing: '남성 쌍수 명사', category: 'noun', stage: 2, frequency: 421 },
  { word: 'שֵׁם', gloss: '이름', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 864 },
  { word: 'יָד', gloss: '손', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 1627 },
  { word: 'עַיִן', gloss: '눈', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 887 },
  { word: 'אִשָּׁה', gloss: '여자, 아내', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 781 },
  { word: 'עֶבֶד', gloss: '종, 신하', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 800 },
  { word: 'רֹאשׁ', gloss: '머리, 꼭대기', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 600 },
  { word: 'מַיִם', gloss: '물', parsing: '남성 복수 명사', category: 'noun', stage: 2, frequency: 585 },
  { word: 'דֶּרֶךְ', gloss: '길, 도', parsing: '남/여 명사', category: 'noun', stage: 2, frequency: 712 },
  { word: 'נֶפֶשׁ', gloss: '영혼, 생명, 목숨', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 757 },
  { word: 'לֵב', gloss: '마음, 심장', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 854 },
  { word: 'קוֹל', gloss: '목소리, 소리', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 506 },
  { word: 'פָּנִים', gloss: '얼굴', parsing: '남성 복수 명사', category: 'noun', stage: 2, frequency: 2126 },
  { word: 'כֹּהֵן', gloss: '제사장', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 750 },
  { word: 'נָבִיא', gloss: '선지자, 예언자', parsing: '남성 단수 명사', category: 'noun', stage: 2, frequency: 317 },
  { word: 'תּוֹרָה', gloss: '율법, 가르침', parsing: '여성 단수 명사', category: 'noun', stage: 2, frequency: 223 },

  // --- 칼 동사 ---
  { word: 'אָמַר', gloss: '말하다', parsing: '칼 완료 3남단', root: 'אמר', category: 'verb', stage: 2, frequency: 5316 },
  { word: 'בּוֹא', gloss: '오다, 들어가다', parsing: '칼 완료 3남단', root: 'בוא', category: 'verb', stage: 2, frequency: 2592 },
  { word: 'נָתַן', gloss: '주다', parsing: '칼 완료 3남단', root: 'נתן', category: 'verb', stage: 2, frequency: 2014 },
  { word: 'הָלַךְ', gloss: '걷다, 가다', parsing: '칼 완료 3남단', root: 'הלך', category: 'verb', stage: 2, frequency: 1554 },
  { word: 'עָשָׂה', gloss: '하다, 만들다', parsing: '칼 완료 3남단', root: 'עשׂה', category: 'verb', stage: 2, frequency: 2632 },
  { word: 'רָאָה', gloss: '보다', parsing: '칼 완료 3남단', root: 'ראה', category: 'verb', stage: 2, frequency: 1311 },
  { word: 'שָׁמַע', gloss: '듣다', parsing: '칼 완료 3남단', root: 'שׁמע', category: 'verb', stage: 2, frequency: 1165 },
  { word: 'יָדַע', gloss: '알다', parsing: '칼 완료 3남단', root: 'ידע', category: 'verb', stage: 2, frequency: 956 },
  { word: 'דִּבֶּר', gloss: '말하다 (피엘)', parsing: '피엘 완료 3남단', root: 'דבר', category: 'verb', stage: 2, frequency: 1136 },
  { word: 'יָשַׁב', gloss: '앉다, 거주하다', parsing: '칼 완료 3남단', root: 'ישׁב', category: 'verb', stage: 2, frequency: 1088 },
  { word: 'שׁוּב', gloss: '돌아가다', parsing: '칼 완료 3남단', root: 'שׁוב', category: 'verb', stage: 2, frequency: 1075 },
  { word: 'כָּתַב', gloss: '쓰다', parsing: '칼 완료 3남단', root: 'כתב', category: 'verb', stage: 2, frequency: 225 },
  { word: 'שָׁמַר', gloss: '지키다', parsing: '칼 완료 3남단', root: 'שׁמר', category: 'verb', stage: 2, frequency: 469 },
  { word: 'לָקַח', gloss: '취하다, 가져가다', parsing: '칼 완료 3남단', root: 'לקח', category: 'verb', stage: 2, frequency: 967 },
  { word: 'עָלָה', gloss: '올라가다', parsing: '칼 완료 3남단', root: 'עלה', category: 'verb', stage: 2, frequency: 894 },
  { word: 'יָצָא', gloss: '나가다', parsing: '칼 완료 3남단', root: 'יצא', category: 'verb', stage: 2, frequency: 1069 },
  { word: 'עָמַד', gloss: '서다', parsing: '칼 완료 3남단', root: 'עמד', category: 'verb', stage: 2, frequency: 524 },
  { word: 'נָפַל', gloss: '넘어지다', parsing: '칼 완료 3남단', root: 'נפל', category: 'verb', stage: 2, frequency: 435 },
  { word: 'אָכַל', gloss: '먹다', parsing: '칼 완료 3남단', root: 'אכל', category: 'verb', stage: 2, frequency: 820 },
  { word: 'מוּת', gloss: '죽다', parsing: '칼 완료 3남단', root: 'מות', category: 'verb', stage: 2, frequency: 854 },
  { word: 'קָרָא', gloss: '부르다, 읽다', parsing: '칼 완료 3남단', root: 'קרא', category: 'verb', stage: 2, frequency: 739 },
  { word: 'שָׁלַח', gloss: '보내다', parsing: '칼 완료 3남단', root: 'שׁלח', category: 'verb', stage: 2, frequency: 847 },

  // --- 대명사 ---
  { word: 'אֲנִי / אָנֹכִי', gloss: '나', parsing: '1인칭 단수 대명사', category: 'pron', stage: 2, frequency: 874 },
  { word: 'אַתָּה', gloss: '너 (남)', parsing: '2인칭 남성 단수 대명사', category: 'pron', stage: 2, frequency: 749 },
  { word: 'הוּא', gloss: '그', parsing: '3인칭 남성 단수 대명사', category: 'pron', stage: 2, frequency: 1398 },
  { word: 'הִיא', gloss: '그녀', parsing: '3인칭 여성 단수 대명사', category: 'pron', stage: 2, frequency: 491 },
  { word: 'הֵם / הֵמָּה', gloss: '그들', parsing: '3인칭 남성 복수 대명사', category: 'pron', stage: 2, frequency: 565 },
  { word: 'מִי', gloss: '누구?', parsing: '의문 대명사', category: 'pron', stage: 2, frequency: 424 },
  { word: 'מָה', gloss: '무엇?', parsing: '의문 대명사', category: 'pron', stage: 2, frequency: 571 },

  // =============================================
  // STAGE 3 — 빈야님 동사, 형용사, 수사 (~60 words)
  // =============================================

  // --- 니팔/피엘/히필 동사 ---
  { word: 'נִלְחַם', gloss: '싸우다', parsing: '니팔 완료 3남단', root: 'לחם', category: 'verb', stage: 3, frequency: 171 },
  { word: 'נִשְׁבַּע', gloss: '맹세하다', parsing: '니팔 완료 3남단', root: 'שׁבע', category: 'verb', stage: 3, frequency: 186 },
  { word: 'נִמְצָא', gloss: '발견되다', parsing: '니팔 완료 3남단', root: 'מצא', category: 'verb', stage: 3, frequency: 457 },
  { word: 'בִּקֵּשׁ', gloss: '찾다, 구하다', parsing: '피엘 완료 3남단', root: 'בקשׁ', category: 'verb', stage: 3, frequency: 225 },
  { word: 'צִוָּה', gloss: '명령하다', parsing: '피엘 완료 3남단', root: 'צוה', category: 'verb', stage: 3, frequency: 496 },
  { word: 'כִּסָּה', gloss: '덮다', parsing: '피엘 완료 3남단', root: 'כסה', category: 'verb', stage: 3, frequency: 153 },
  { word: 'הִכָּה', gloss: '치다, 때리다', parsing: '히필 완료 3남단', root: 'נכה', category: 'verb', stage: 3, frequency: 501 },
  { word: 'הִגִּיד', gloss: '알리다, 선포하다', parsing: '히필 완료 3남단', root: 'נגד', category: 'verb', stage: 3, frequency: 371 },
  { word: 'הוֹשִׁיעַ', gloss: '구원하다', parsing: '히필 완료 3남단', root: 'ישׁע', category: 'verb', stage: 3, frequency: 205 },
  { word: 'הֶעֱלָה', gloss: '올리다, 바치다', parsing: '히필 완료 3남단', root: 'עלה', category: 'verb', stage: 3, frequency: 894 },
  { word: 'הוֹצִיא', gloss: '꺼내다, 이끌어 내다', parsing: '히필 완료 3남단', root: 'יצא', category: 'verb', stage: 3, frequency: 1069 },
  { word: 'הֶאֱמִין', gloss: '믿다, 신뢰하다', parsing: '히필 완료 3남단', root: 'אמן', category: 'verb', stage: 3, frequency: 97 },
  { word: 'הִשְׁמִיד', gloss: '멸망시키다', parsing: '히필 완료 3남단', root: 'שׁמד', category: 'verb', stage: 3, frequency: 90 },

  // --- 추가 칼 동사 ---
  { word: 'מָצָא', gloss: '찾다, 발견하다', parsing: '칼 완료 3남단', root: 'מצא', category: 'verb', stage: 3, frequency: 457 },
  { word: 'עָבַר', gloss: '건너다, 지나가다', parsing: '칼 완료 3남단', root: 'עבר', category: 'verb', stage: 3, frequency: 553 },
  { word: 'נָשָׂא', gloss: '들어올리다, 운반하다', parsing: '칼 완료 3남단', root: 'נשׂא', category: 'verb', stage: 3, frequency: 659 },
  { word: 'שִׂים / שָׂם', gloss: '놓다, 두다', parsing: '칼 완료 3남단', root: 'שׂים', category: 'verb', stage: 3, frequency: 588 },
  { word: 'בָּנָה', gloss: '건축하다', parsing: '칼 완료 3남단', root: 'בנה', category: 'verb', stage: 3, frequency: 377 },
  { word: 'מָלַךְ', gloss: '다스리다, 왕이 되다', parsing: '칼 완료 3남단', root: 'מלך', category: 'verb', stage: 3, frequency: 350 },
  { word: 'כָּרַת', gloss: '자르다, (언약을) 맺다', parsing: '칼 완료 3남단', root: 'כרת', category: 'verb', stage: 3, frequency: 289 },
  { word: 'זָכַר', gloss: '기억하다', parsing: '칼 완료 3남단', root: 'זכר', category: 'verb', stage: 3, frequency: 233 },
  { word: 'סָפַר', gloss: '세다, 이야기하다', parsing: '칼 완료 3남단', root: 'ספר', category: 'verb', stage: 3, frequency: 107 },
  { word: 'יָרַד', gloss: '내려가다', parsing: '칼 완료 3남단', root: 'ירד', category: 'verb', stage: 3, frequency: 382 },
  { word: 'שָׁתָה', gloss: '마시다', parsing: '칼 완료 3남단', root: 'שׁתה', category: 'verb', stage: 3, frequency: 217 },
  { word: 'בָּרַךְ', gloss: '축복하다', parsing: '칼/피엘 완료 3남단', root: 'ברך', category: 'verb', stage: 3, frequency: 327 },
  { word: 'חָטָא', gloss: '죄를 짓다', parsing: '칼 완료 3남단', root: 'חטא', category: 'verb', stage: 3, frequency: 240 },
  { word: 'יָרֵא', gloss: '두려워하다', parsing: '칼 완료 3남단', root: 'ירא', category: 'verb', stage: 3, frequency: 317 },

  // --- 형용사 ---
  { word: 'טוֹב', gloss: '좋은', parsing: '형용사', category: 'adj', stage: 3, frequency: 530 },
  { word: 'גָּדוֹל', gloss: '큰', parsing: '형용사', category: 'adj', stage: 3, frequency: 527 },
  { word: 'רַב', gloss: '많은, 큰', parsing: '형용사', category: 'adj', stage: 3, frequency: 474 },
  { word: 'קָדוֹשׁ', gloss: '거룩한', parsing: '형용사', category: 'adj', stage: 3, frequency: 116 },
  { word: 'רַע', gloss: '나쁜, 악한', parsing: '형용사', category: 'adj', stage: 3, frequency: 312 },
  { word: 'חַי', gloss: '살아 있는', parsing: '형용사', category: 'adj', stage: 3, frequency: 254 },
  { word: 'קָטָן', gloss: '작은', parsing: '형용사', category: 'adj', stage: 3, frequency: 101 },
  { word: 'יָשָׁר', gloss: '바른, 올바른', parsing: '형용사', category: 'adj', stage: 3, frequency: 119 },
  { word: 'חָדָשׁ', gloss: '새로운', parsing: '형용사', category: 'adj', stage: 3, frequency: 53 },
  { word: 'חָזָק', gloss: '강한', parsing: '형용사', category: 'adj', stage: 3, frequency: 57 },

  // --- 수사 ---
  { word: 'אֶחָד', gloss: '하나, 첫째', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 976 },
  { word: 'שְׁנַיִם', gloss: '둘', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 769 },
  { word: 'שָׁלוֹשׁ', gloss: '셋', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 606 },
  { word: 'אַרְבַּע', gloss: '넷', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 455 },
  { word: 'חָמֵשׁ', gloss: '다섯', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 508 },
  { word: 'שֶׁבַע', gloss: '일곱', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 394 },
  { word: 'עֶשֶׂר', gloss: '열', parsing: '남성 수사', category: 'adj', stage: 3, frequency: 492 },
  { word: 'מֵאָה', gloss: '백', parsing: '여성 수사', category: 'adj', stage: 3, frequency: 583 },
  { word: 'אֶלֶף', gloss: '천', parsing: '남성 수사/명사', category: 'adj', stage: 3, frequency: 496 },

  // --- 추가 명사 ---
  { word: 'מִלְחָמָה', gloss: '전쟁', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 319 },
  { word: 'חֶרֶב', gloss: '칼, 검', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 413 },
  { word: 'מִזְבֵּחַ', gloss: '제단', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 403 },
  { word: 'רוּחַ', gloss: '바람, 영, 정신', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 389 },
  { word: 'שָׁנָה', gloss: '해, 년', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 878 },
  { word: 'חֶסֶד', gloss: '인자, 사랑, 은혜', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 249 },
  { word: 'מִשְׁפָּט', gloss: '정의, 재판, 규례', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 425 },
  { word: 'כֹּחַ', gloss: '힘, 능력', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 127 },
  { word: 'אָדָם', gloss: '사람, 인간, 아담', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 562 },

  // =============================================
  // STAGE 4 — 연계형, 접미사, 신학 용어 (~40 words)
  // =============================================
  { word: 'בְּרִית', gloss: '언약', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 287 },
  { word: 'עוֹלָם', gloss: '영원, 세상', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 439 },
  { word: 'צְדָקָה', gloss: '의, 공의', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 159 },
  { word: 'כָּבוֹד', gloss: '영광, 무거움', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 200 },
  { word: 'תְּפִלָּה', gloss: '기도', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 77 },
  { word: 'שָׁלוֹם', gloss: '평화, 안녕', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 237 },
  { word: 'עֲבוֹדָה', gloss: '봉사, 예배', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 145 },
  { word: 'חָכְמָה', gloss: '지혜', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 153 },
  { word: 'נַחֲלָה', gloss: '유산, 상속지', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 222 },
  { word: 'מִדְבָּר', gloss: '광야, 사막', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 271 },
  { word: 'גּוֹי', gloss: '민족, 이방인', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 567 },
  { word: 'מִשְׁכָּן', gloss: '장막, 성막', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 139 },
  { word: 'זֶרַע', gloss: '씨앗, 후손', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 229 },
  { word: 'חֹשֶׁךְ', gloss: '어둠', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 80 },
  { word: 'אוֹר', gloss: '빛', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 120 },
  { word: 'מִצְוָה', gloss: '계명', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 184 },
  { word: 'חֻקָּה', gloss: '율례, 규정', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 104 },
  { word: 'עֵדוּת', gloss: '증거', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 61 },

  // --- 연계형 쌍 (construct pairs) ---
  { word: 'בֶּן־אָדָם', gloss: '인자 (사람의 아들)', parsing: '연계형 쌍', category: 'noun', stage: 4, frequency: 107 },
  { word: 'דְּבַר־יְהוָה', gloss: '여호와의 말씀', parsing: '연계형 쌍', category: 'noun', stage: 4, frequency: 242 },
  { word: 'בֵּית יְהוָה', gloss: '여호와의 성전', parsing: '연계형 쌍', category: 'noun', stage: 4, frequency: 163 },
  { word: 'אֶרֶץ מִצְרַיִם', gloss: '이집트 땅', parsing: '연계형 쌍', category: 'noun', stage: 4, frequency: 118 },
  { word: 'אֶרֶץ כְּנַעַן', gloss: '가나안 땅', parsing: '연계형 쌍', category: 'noun', stage: 4, frequency: 67 },

  // --- 고급 동사 ---
  { word: 'הִתְהַלֵּךְ', gloss: '걸어 다니다', parsing: '히트파엘 완료 3남단', root: 'הלך', category: 'verb', stage: 4, frequency: 1554 },
  { word: 'הִתְנַבֵּא', gloss: '예언하다', parsing: '히트파엘 완료 3남단', root: 'נבא', category: 'verb', stage: 4, frequency: 115 },
  { word: 'הִתְפַּלֵּל', gloss: '기도하다', parsing: '히트파엘 완료 3남단', root: 'פלל', category: 'verb', stage: 4, frequency: 84 },
  { word: 'כֻּפַּר', gloss: '속죄되다', parsing: '푸알 완료 3남단', root: 'כפר', category: 'verb', stage: 4, frequency: 102 },
  { word: 'הֻכָּה', gloss: '맞다 (피동)', parsing: '호팔 완료 3남단', root: 'נכה', category: 'verb', stage: 4, frequency: 501 },
  { word: 'הוּשַׁב', gloss: '앉혀지다', parsing: '호팔 완료 3남단', root: 'ישׁב', category: 'verb', stage: 4, frequency: 1088 },
  { word: 'חָפֵץ', gloss: '기뻐하다, 원하다', parsing: '칼 완료 3남단', root: 'חפץ', category: 'verb', stage: 4, frequency: 75 },
  { word: 'גָּאַל', gloss: '구속하다, 속량하다', parsing: '칼 완료 3남단', root: 'גאל', category: 'verb', stage: 4, frequency: 104 },
  { word: 'סָלַח', gloss: '용서하다', parsing: '칼 완료 3남단', root: 'סלח', category: 'verb', stage: 4, frequency: 46 },
  { word: 'נִחַם', gloss: '위로하다, 뜻을 돌이키다', parsing: '니팔/피엘 완료 3남단', root: 'נחם', category: 'verb', stage: 4, frequency: 108 },

  // --- 전치사/부사 고급 ---
  { word: 'תַּחַת', gloss: '~아래에, ~대신에', parsing: '전치사', category: 'prep', stage: 4, frequency: 510 },
  { word: 'בֵּין', gloss: '~사이에', parsing: '전치사', category: 'prep', stage: 4, frequency: 409 },
  { word: 'אַחֲרֵי', gloss: '~뒤에, ~후에', parsing: '전치사', category: 'prep', stage: 4, frequency: 718 },
  { word: 'לִפְנֵי', gloss: '~앞에', parsing: '전치사', category: 'prep', stage: 4, frequency: 1102 },
  { word: 'עַתָּה', gloss: '지금', parsing: '부사', category: 'adv', stage: 4, frequency: 435 },

  // =============================================
  // STAGE 5 — 독해 수준 어휘 (~30 words)
  // =============================================
  { word: 'תֹּהוּ', gloss: '혼돈, 공허', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 20 },
  { word: 'בֹּהוּ', gloss: '공허', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 3 },
  { word: 'רָקִיעַ', gloss: '궁창, 창공', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 17 },
  { word: 'דֶּשֶׁא', gloss: '풀, 싹', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 14 },
  { word: 'עֵשֶׂב', gloss: '풀, 초목', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 33 },
  { word: 'תְּהוֹם', gloss: '깊음, 심연', parsing: '남/여 명사', category: 'noun', stage: 5, frequency: 36 },
  { word: 'רָעָה', gloss: '목양하다, 먹이다', parsing: '칼 분사/동사', root: 'רעה', category: 'verb', stage: 5, frequency: 167 },
  { word: 'שְׁאוֹל', gloss: '스올 (음부)', parsing: '여성 명사', category: 'noun', stage: 5, frequency: 66 },
  { word: 'צֶלֶם', gloss: '형상, 모습', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 17 },
  { word: 'דְּמוּת', gloss: '모양, 닮음', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 25 },
  { word: 'רָדָה', gloss: '다스리다, 지배하다', parsing: '칼 완료 3남단', root: 'רדה', category: 'verb', stage: 5, frequency: 27 },
  { word: 'כָּבַשׁ', gloss: '정복하다', parsing: '칼 완료 3남단', root: 'כבשׁ', category: 'verb', stage: 5, frequency: 14 },
  { word: 'רֶמֶשׂ', gloss: '기는 것, 파충류', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 17 },
  { word: 'הֶבֶל', gloss: '헛됨, 허무', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 73 },
  { word: 'מָעוֹן', gloss: '거처, 처소', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 18 },
  { word: 'עֵדָה', gloss: '회중, 무리', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 171 },
  { word: 'מִשְׁמָר', gloss: '파수, 의무', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 22 },
  { word: 'נַעַר', gloss: '소년, 청년', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 240 },
  { word: 'יֵצֶר', gloss: '성향, 형성물', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 9 },
  { word: 'מוֹפֵת', gloss: '이적, 기적', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 36 },
  { word: 'אוֹת', gloss: '표적, 기호', parsing: '남/여 명사', category: 'noun', stage: 5, frequency: 79 },
  { word: 'צֹאן', gloss: '양 떼', parsing: '여성 집합 명사', category: 'noun', stage: 5, frequency: 274 },
  { word: 'שֻׁלְחָן', gloss: '상, 식탁', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 71 },
  { word: 'נָאוֶה', gloss: '풀밭', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 12 },
  { word: 'מְנוּחָה', gloss: '쉼, 안식처', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 21 },
  { word: 'מִשְׁעָן', gloss: '지팡이, 지원', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 5 },
  { word: 'גֵּר', gloss: '체류자, 이방인', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 92 },
  { word: 'עֹלָה', gloss: '번제', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 286 },
  { word: 'זֶבַח', gloss: '제사, 희생제물', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 162 },
  { word: 'שִׁיר', gloss: '노래', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 78 },

  // =============================================
  // STAGE 3 — 추가 어휘 (빈도순)
  // =============================================

  // --- 추가 명사 (Stage 3) ---
  { word: 'חַיִל', gloss: '군대, 힘, 용사', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 243 },
  { word: 'הַר', gloss: '산', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 558 },
  { word: 'שַׂר', gloss: '지도자, 장관', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 421 },
  { word: 'נָהָר', gloss: '강, 시내', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 119 },
  { word: 'עֵץ', gloss: '나무', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 330 },
  { word: 'אֶבֶן', gloss: '돌', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 272 },
  { word: 'חוֹמָה', gloss: '성벽', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 133 },
  { word: 'שַׁעַר', gloss: '문, 성문', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 373 },
  { word: 'כֶּסֶף', gloss: '은, 돈', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 403 },
  { word: 'זָהָב', gloss: '금', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 392 },
  { word: 'בָּשָׂר', gloss: '살, 육체', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 270 },
  { word: 'דָּם', gloss: '피', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 361 },
  { word: 'לֶחֶם', gloss: '빵, 음식', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 298 },
  { word: 'עוֹן', gloss: '죄악, 형벌', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 233 },
  { word: 'חַטָּאת', gloss: '죄, 속죄제', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 296 },
  { word: 'אֵשׁ', gloss: '불', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 376 },
  { word: 'מַחֲנֶה', gloss: '진영', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 215 },
  { word: 'סוּס', gloss: '말 (동물)', parsing: '남성 단수 명사', category: 'noun', stage: 3, frequency: 138 },
  { word: 'רֶגֶל', gloss: '발', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 251 },
  { word: 'כָּנָף', gloss: '날개, 옷자락', parsing: '여성 단수 명사', category: 'noun', stage: 3, frequency: 111 },

  // --- 추가 동사 (Stage 3) ---
  { word: 'אָהַב', gloss: '사랑하다', parsing: '칼 완료 3남단', root: 'אהב', category: 'verb', stage: 3, frequency: 217 },
  { word: 'שָׁכַב', gloss: '눕다', parsing: '칼 완료 3남단', root: 'שׁכב', category: 'verb', stage: 3, frequency: 213 },
  { word: 'חָיָה', gloss: '살다', parsing: '칼 완료 3남단', root: 'חיה', category: 'verb', stage: 3, frequency: 283 },
  { word: 'שָׁפַט', gloss: '재판하다', parsing: '칼 완료 3남단', root: 'שׁפט', category: 'verb', stage: 3, frequency: 204 },
  { word: 'מָשַׁל', gloss: '다스리다, 지배하다', parsing: '칼 완료 3남단', root: 'משׁל', category: 'verb', stage: 3, frequency: 81 },
  { word: 'קָבַר', gloss: '매장하다', parsing: '칼 완료 3남단', root: 'קבר', category: 'verb', stage: 3, frequency: 133 },
  { word: 'עָזַב', gloss: '버리다', parsing: '칼 완료 3남단', root: 'עזב', category: 'verb', stage: 3, frequency: 214 },
  { word: 'רָדַף', gloss: '쫓다, 추격하다', parsing: '칼 완료 3남단', root: 'רדף', category: 'verb', stage: 3, frequency: 144 },
  { word: 'לָבַשׁ', gloss: '입다', parsing: '칼 완료 3남단', root: 'לבשׁ', category: 'verb', stage: 3, frequency: 112 },
  { word: 'סָבַב', gloss: '돌다, 둘러싸다', parsing: '칼 완료 3남단', root: 'סבב', category: 'verb', stage: 3, frequency: 163 },

  // --- 추가 전치사/접속사 (Stage 3) ---
  { word: 'עִם', gloss: '~와 함께', parsing: '전치사', category: 'prep', stage: 3, frequency: 1048 },
  { word: 'כְּ', gloss: '~처럼, ~같이', parsing: '전치사 접두사', category: 'prep', stage: 3, frequency: 3053 },
  { word: 'אוֹ', gloss: '또는', parsing: '접속사', category: 'conj', stage: 3, frequency: 321 },
  { word: 'פֶּן', gloss: '~하지 않도록', parsing: '접속사', category: 'conj', stage: 3, frequency: 133 },
  { word: 'לָמָּה', gloss: '왜?', parsing: '의문 부사', category: 'adv', stage: 3, frequency: 178 },

  // =============================================
  // STAGE 4 — 추가 어휘
  // =============================================

  // --- 추가 신학/제의 명사 (Stage 4) ---
  { word: 'קֹדֶשׁ', gloss: '거룩함, 성소', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 470 },
  { word: 'כַּפֹּרֶת', gloss: '속죄소, 시은좌', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 27 },
  { word: 'אֲרוֹן', gloss: '궤, 상자', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 202 },
  { word: 'מְנוֹרָה', gloss: '등대, 촛대', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 40 },
  { word: 'אֹהֶל', gloss: '장막', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 348 },
  { word: 'כְּרוּב', gloss: '그룹 (천사)', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 91 },
  { word: 'מַלְאָךְ', gloss: '사자, 천사', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 213 },
  { word: 'חֵטְא', gloss: '죄', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 35 },
  { word: 'אָשָׁם', gloss: '속건제, 죄책', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 46 },
  { word: 'שֶׁמֶן', gloss: '기름', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 193 },
  { word: 'יַיִן', gloss: '포도주', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 141 },
  { word: 'מִנְחָה', gloss: '소제, 공물', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 211 },
  { word: 'עֶרֶב', gloss: '저녁', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 134 },
  { word: 'בֹּקֶר', gloss: '아침', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 213 },
  { word: 'חֹדֶשׁ', gloss: '달 (월), 새 달', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 283 },
  { word: 'שַׁבָּת', gloss: '안식일', parsing: '여성 단수 명사', category: 'noun', stage: 4, frequency: 111 },
  { word: 'מוֹעֵד', gloss: '지정된 시간, 절기', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 223 },
  { word: 'גְּבוּל', gloss: '경계, 영토', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 241 },
  { word: 'מַטֶּה', gloss: '지팡이, 지파', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 252 },

  // --- 추가 고급 동사 (Stage 4) ---
  { word: 'קָדַשׁ', gloss: '거룩하게 하다', parsing: '칼/피엘 완료 3남단', root: 'קדשׁ', category: 'verb', stage: 4, frequency: 171 },
  { word: 'טָהֵר', gloss: '깨끗하다, 정결하다', parsing: '칼 완료 3남단', root: 'טהר', category: 'verb', stage: 4, frequency: 94 },
  { word: 'טָמֵא', gloss: '부정하다', parsing: '칼 완료 3남단', root: 'טמא', category: 'verb', stage: 4, frequency: 162 },
  { word: 'כִּפֶּר', gloss: '속죄하다', parsing: '피엘 완료 3남단', root: 'כפר', category: 'verb', stage: 4, frequency: 102 },
  { word: 'נָדַר', gloss: '서원하다', parsing: '칼 완료 3남단', root: 'נדר', category: 'verb', stage: 4, frequency: 31 },
  { word: 'הִזְכִּיר', gloss: '기억나게 하다', parsing: '히필 완료 3남단', root: 'זכר', category: 'verb', stage: 4, frequency: 233 },
  { word: 'הִתְחַזֵּק', gloss: '강해지다, 힘을 내다', parsing: '히트파엘 완료 3남단', root: 'חזק', category: 'verb', stage: 4, frequency: 290 },
  { word: 'הִקְרִיב', gloss: '가까이 하다, 제물로 바치다', parsing: '히필 완료 3남단', root: 'קרב', category: 'verb', stage: 4, frequency: 280 },
  { word: 'הִקְדִּישׁ', gloss: '구별하다, 거룩히 하다', parsing: '히필 완료 3남단', root: 'קדשׁ', category: 'verb', stage: 4, frequency: 171 },
  { word: 'נֶחֱלַשׁ', gloss: '약해지다', parsing: '니팔 완료 3남단', root: 'חלשׁ', category: 'verb', stage: 4, frequency: 15 },

  // =============================================
  // STAGE 5 — 추가 독해 수준 어휘
  // =============================================

  // --- 추가 명사 (Stage 5) ---
  { word: 'פֶּתַח', gloss: '입구, 문', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 164 },
  { word: 'כִּסֵּא', gloss: '왕좌, 의자', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 135 },
  { word: 'מֶרְכָּבָה', gloss: '병거', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 44 },
  { word: 'חֵלֶב', gloss: '기름, 지방', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 92 },
  { word: 'קֶבֶר', gloss: '무덤', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 67 },
  { word: 'מַעֲשֶׂה', gloss: '행위, 일', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 235 },
  { word: 'תּוֹעֵבָה', gloss: '역겨운 것, 가증한 것', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 117 },
  { word: 'אַמָּה', gloss: '규빗 (길이 단위)', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 245 },
  { word: 'כֶּרֶם', gloss: '포도원', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 94 },
  { word: 'שָׂדֶה', gloss: '들, 밭', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 329 },
  { word: 'בְּאֵר', gloss: '우물', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 37 },
  { word: 'נַחַל', gloss: '시내, 골짜기', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 137 },
  { word: 'מַעְיָן', gloss: '샘, 원천', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 23 },
  { word: 'צֶדֶק', gloss: '의, 공의', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 123 },
  { word: 'אֱמֶת', gloss: '진리, 진실', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 127 },
  { word: 'נֵר', gloss: '등불, 램프', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 48 },
  { word: 'קֶשֶׁת', gloss: '활', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 77 },
  { word: 'חֵץ', gloss: '화살', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 56 },
  { word: 'מָגֵן', gloss: '방패', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 63 },
  { word: 'חֲנִית', gloss: '창', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 47 },

  // --- 추가 동사 (Stage 5) ---
  { word: 'חָנַן', gloss: '은혜를 베풀다', parsing: '칼 완료 3남단', root: 'חנן', category: 'verb', stage: 5, frequency: 77 },
  { word: 'שָׁאַל', gloss: '묻다, 요청하다', parsing: '칼 완료 3남단', root: 'שׁאל', category: 'verb', stage: 5, frequency: 176 },
  { word: 'חָשַׁב', gloss: '생각하다, 계획하다', parsing: '칼 완료 3남단', root: 'חשׁב', category: 'verb', stage: 5, frequency: 124 },
  { word: 'רָפָא', gloss: '고치다, 치료하다', parsing: '칼 완료 3남단', root: 'רפא', category: 'verb', stage: 5, frequency: 69 },
  { word: 'בָּחַר', gloss: '선택하다', parsing: '칼 완료 3남단', root: 'בחר', category: 'verb', stage: 5, frequency: 172 },
  { word: 'גָּלָה', gloss: '드러내다, 유배 가다', parsing: '칼 완료 3남단', root: 'גלה', category: 'verb', stage: 5, frequency: 187 },

  // --- 추가 형용사/부사 (Stage 3-4) ---
  { word: 'צַדִּיק', gloss: '의로운', parsing: '형용사', category: 'adj', stage: 3, frequency: 206 },
  { word: 'רָשָׁע', gloss: '악한', parsing: '형용사', category: 'adj', stage: 3, frequency: 264 },
  { word: 'חָכָם', gloss: '지혜로운', parsing: '형용사', category: 'adj', stage: 3, frequency: 138 },
  { word: 'נָכְרִי', gloss: '외국의, 이방의', parsing: '형용사', category: 'adj', stage: 4, frequency: 46 },
  { word: 'טָמֵא', gloss: '부정한', parsing: '형용사', category: 'adj', stage: 4, frequency: 88 },
  { word: 'טָהוֹר', gloss: '깨끗한, 정결한', parsing: '형용사', category: 'adj', stage: 4, frequency: 96 },
  { word: 'עָנָו', gloss: '겸손한', parsing: '형용사', category: 'adj', stage: 4, frequency: 21 },
  { word: 'נֶאֱמָן', gloss: '신실한, 믿을 수 있는', parsing: '니팔 분사/형용사', category: 'adj', stage: 4, frequency: 97 },
  { word: 'עַז', gloss: '강한, 거센', parsing: '형용사', category: 'adj', stage: 4, frequency: 23 },
  { word: 'תָּמִים', gloss: '흠 없는, 온전한', parsing: '형용사', category: 'adj', stage: 4, frequency: 91 },

  // --- 추가 부사/전치사 (Stage 4-5) ---
  { word: 'שָׁם', gloss: '거기에', parsing: '부사', category: 'adv', stage: 3, frequency: 835 },
  { word: 'מְאֹד', gloss: '매우', parsing: '부사', category: 'adv', stage: 3, frequency: 300 },
  { word: 'עוֹד', gloss: '아직, 여전히, 다시', parsing: '부사', category: 'adv', stage: 3, frequency: 491 },
  { word: 'כֵּן', gloss: '그러므로, 그렇게', parsing: '부사', category: 'adv', stage: 3, frequency: 741 },
  { word: 'סָבִיב', gloss: '주위에, 둘레에', parsing: '부사/전치사', category: 'adv', stage: 4, frequency: 338 },

  // --- 추가 명사 (Stage 4-5) ---
  { word: 'עֵגֶל', gloss: '송아지', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 35 },
  { word: 'שׁוֹר', gloss: '소, 황소', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 79 },
  { word: 'חֲמוֹר', gloss: '나귀', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 96 },
  { word: 'כֶּבֶשׂ', gloss: '어린 양', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 107 },
  { word: 'גָּמָל', gloss: '낙타', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 54 },
  { word: 'מִקְדָּשׁ', gloss: '성소, 성전', parsing: '남성 단수 명사', category: 'noun', stage: 4, frequency: 75 },
  { word: 'בָּמָה', gloss: '산당, 높은 곳', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 106 },
  { word: 'פֶּסַח', gloss: '유월절', parsing: '남성 단수 명사', category: 'noun', stage: 5, frequency: 49 },
  { word: 'סֻכָּה', gloss: '초막', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 31 },
  { word: 'תְּרוּמָה', gloss: '봉헌물, 예물', parsing: '여성 단수 명사', category: 'noun', stage: 5, frequency: 76 },
];
