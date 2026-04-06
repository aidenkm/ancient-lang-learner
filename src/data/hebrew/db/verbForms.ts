import { VerbForm } from '../../../types';

/**
 * Biblical Hebrew verb conjugation forms.
 * For Hebrew, "voice" is the binyan name in Korean:
 * 칼(Qal), 니팔(Niphal), 피엘(Piel), 푸알(Pual),
 * 히필(Hiphil), 호팔(Hophal), 히트파엘(Hithpael)
 *
 * Stage 2: Qal perfect + imperfect paradigms
 * Stage 3: Niphal, Piel, Hiphil; imperatives, infinitives, participles
 * Stage 4: Pual, Hophal, Hithpael; weak verb forms
 * Stage 5: Forms from actual biblical texts (wayyiqtol, etc.)
 */
export const hebrewVerbForms: VerbForm[] = [
  // ============================================================
  // STAGE 2: Qal Perfect Paradigm (כָּתַב — 쓰다)
  // ============================================================
  { form: 'כָּתַב', root: 'כתב', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 썼다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'כָּתְבָה', root: 'כתב', parsing: '칼 완료 3인칭 여성 단수', gloss: '그녀가 썼다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'כָּתַבְתָּ', root: 'כתב', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 썼다 (남)', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'כָּתַבְתְּ', root: 'כתב', parsing: '칼 완료 2인칭 여성 단수', gloss: '네가 썼다 (여)', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '여성 단수', stage: 2 },
  { form: 'כָּתַבְתִּי', root: 'כתב', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 썼다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'כָּתְבוּ', root: 'כתב', parsing: '칼 완료 3인칭 공성 복수', gloss: '그들이 썼다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '공성 복수', stage: 2 },
  { form: 'כְּתַבְתֶּם', root: 'כתב', parsing: '칼 완료 2인칭 남성 복수', gloss: '너희가 썼다 (남)', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 복수', stage: 2 },
  { form: 'כָּתַבְנוּ', root: 'כתב', parsing: '칼 완료 1인칭 공성 복수', gloss: '우리가 썼다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 복수', stage: 2 },

  // --- Qal Perfect: שָׁמַר (지키다) ---
  { form: 'שָׁמַר', root: 'שׁמר', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 지켰다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'שָׁמְרָה', root: 'שׁמר', parsing: '칼 완료 3인칭 여성 단수', gloss: '그녀가 지켰다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'שָׁמַרְתָּ', root: 'שׁמר', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 지켰다 (남)', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'שָׁמַרְתִּי', root: 'שׁמר', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 지켰다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'שָׁמְרוּ', root: 'שׁמר', parsing: '칼 완료 3인칭 공성 복수', gloss: '그들이 지켰다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '공성 복수', stage: 2 },
  { form: 'שְׁמַרְנוּ', root: 'שׁמר', parsing: '칼 완료 1인칭 공성 복수', gloss: '우리가 지켰다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 복수', stage: 2 },

  // --- Qal Perfect: שָׁמַע (듣다) ---
  { form: 'שָׁמַע', root: 'שׁמע', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 들었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'שָׁמְעָה', root: 'שׁמע', parsing: '칼 완료 3인칭 여성 단수', gloss: '그녀가 들었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'שָׁמַעְתָּ', root: 'שׁמע', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 들었다', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'שָׁמַעְתִּי', root: 'שׁמע', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 들었다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'שָׁמְעוּ', root: 'שׁמע', parsing: '칼 완료 3인칭 공성 복수', gloss: '그들이 들었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '공성 복수', stage: 2 },

  // --- Qal Imperfect Paradigm: כתב ---
  { form: 'יִכְתֹּב', root: 'כתב', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'תִּכְתֹּב', root: 'כתב', parsing: '칼 미완료 3인칭 여성 단수', gloss: '그녀가 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'תִּכְתֹּב', root: 'כתב', parsing: '칼 미완료 2인칭 남성 단수', gloss: '네가 쓸 것이다 (남)', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'תִּכְתְּבִי', root: 'כתב', parsing: '칼 미완료 2인칭 여성 단수', gloss: '네가 쓸 것이다 (여)', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '여성 단수', stage: 2 },
  { form: 'אֶכְתֹּב', root: 'כתב', parsing: '칼 미완료 1인칭 공성 단수', gloss: '내가 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'יִכְתְּבוּ', root: 'כתב', parsing: '칼 미완료 3인칭 남성 복수', gloss: '그들이 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 복수', stage: 2 },
  { form: 'תִּכְתֹּבְנָה', root: 'כתב', parsing: '칼 미완료 3인칭 여성 복수', gloss: '그녀들이 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '여성 복수', stage: 2 },
  { form: 'תִּכְתְּבוּ', root: 'כתב', parsing: '칼 미완료 2인칭 남성 복수', gloss: '너희가 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 복수', stage: 2 },
  { form: 'נִכְתֹּב', root: 'כתב', parsing: '칼 미완료 1인칭 공성 복수', gloss: '우리가 쓸 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 복수', stage: 2 },

  // --- Qal Imperfect: שׁמר ---
  { form: 'יִשְׁמֹר', root: 'שׁמר', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 지킬 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'תִּשְׁמֹר', root: 'שׁמר', parsing: '칼 미완료 2인칭 남성 단수', gloss: '네가 지킬 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'אֶשְׁמֹר', root: 'שׁמר', parsing: '칼 미완료 1인칭 공성 단수', gloss: '내가 지킬 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'יִשְׁמְרוּ', root: 'שׁמר', parsing: '칼 미완료 3인칭 남성 복수', gloss: '그들이 지킬 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 복수', stage: 2 },
  { form: 'נִשְׁמֹר', root: 'שׁמר', parsing: '칼 미완료 1인칭 공성 복수', gloss: '우리가 지킬 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 복수', stage: 2 },

  // --- Qal Perfect/Imperfect: אמר (말하다) ---
  { form: 'אָמַר', root: 'אמר', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 말했다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'אָמְרָה', root: 'אמר', parsing: '칼 완료 3인칭 여성 단수', gloss: '그녀가 말했다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'אָמַרְתָּ', root: 'אמר', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 말했다', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'אָמַרְתִּי', root: 'אמר', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 말했다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'יֹאמַר', root: 'אמר', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 말할 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'תֹּאמַר', root: 'אמר', parsing: '칼 미완료 2인칭 남성 단수', gloss: '네가 말할 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'אֹמַר', root: 'אמר', parsing: '칼 미완료 1인칭 공성 단수', gloss: '내가 말할 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },

  // --- Qal Perfect/Imperfect: עשׂה (하다) ---
  { form: 'עָשָׂה', root: 'עשׂה', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 만들었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'עָשִׂיתָ', root: 'עשׂה', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 만들었다', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'עָשִׂיתִי', root: 'עשׂה', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 만들었다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'יַעֲשֶׂה', root: 'עשׂה', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 만들 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },

  // ============================================================
  // STAGE 3: Niphal, Piel, Hiphil; imperatives, infinitives, participles
  // ============================================================

  // --- Niphal Perfect ---
  { form: 'נִכְתַּב', root: 'כתב', parsing: '니팔 완료 3인칭 남성 단수', gloss: '기록되었다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'נִשְׁמַר', root: 'שׁמר', parsing: '니팔 완료 3인칭 남성 단수', gloss: '지켜졌다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'נִמְצָא', root: 'מצא', parsing: '니팔 완료 3인칭 남성 단수', gloss: '발견되었다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'נִלְחַם', root: 'לחם', parsing: '니팔 완료 3인칭 남성 단수', gloss: '싸웠다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'נִשְׁבַּע', root: 'שׁבע', parsing: '니팔 완료 3인칭 남성 단수', gloss: '맹세했다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // --- Niphal Imperfect ---
  { form: 'יִכָּתֵב', root: 'כתב', parsing: '니팔 미완료 3인칭 남성 단수', gloss: '기록될 것이다', tense: '미완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יִשָּׁמֵר', root: 'שׁמר', parsing: '니팔 미완료 3인칭 남성 단수', gloss: '지켜질 것이다', tense: '미완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יִמָּצֵא', root: 'מצא', parsing: '니팔 미완료 3인칭 남성 단수', gloss: '발견될 것이다', tense: '미완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // --- Piel Perfect ---
  { form: 'דִּבֶּר', root: 'דבר', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 말했다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'דִּבַּרְתָּ', root: 'דבר', parsing: '피엘 완료 2인칭 남성 단수', gloss: '네가 말했다', tense: '완료', voice: '피엘', mood: '직설법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'דִּבַּרְתִּי', root: 'דבר', parsing: '피엘 완료 1인칭 공성 단수', gloss: '내가 말했다', tense: '완료', voice: '피엘', mood: '직설법', person: '1', number: '공성 단수', stage: 3 },
  { form: 'דִּבְּרוּ', root: 'דבר', parsing: '피엘 완료 3인칭 공성 복수', gloss: '그들이 말했다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '공성 복수', stage: 3 },
  { form: 'בִּקֵּשׁ', root: 'בקשׁ', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 찾았다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'צִוָּה', root: 'צוה', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 명령했다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'כִּסָּה', root: 'כסה', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 덮었다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'בֵּרַךְ', root: 'ברך', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 축복했다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'שִׁלַּח', root: 'שׁלח', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 보냈다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // --- Piel Imperfect ---
  { form: 'יְדַבֵּר', root: 'דבר', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 말할 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יְבַקֵּשׁ', root: 'בקשׁ', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 찾을 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יְצַוֶּה', root: 'צוה', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 명령할 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יְבָרֵךְ', root: 'ברך', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 축복할 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // --- Hiphil Perfect ---
  { form: 'הִכְתִּיב', root: 'כתב', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 기록하게 했다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הִשְׁמִיעַ', root: 'שׁמע', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 들려주었다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הִכָּה', root: 'נכה', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 쳤다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הִגִּיד', root: 'נגד', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 알렸다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הוֹשִׁיעַ', root: 'ישׁע', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 구원했다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הֶעֱלָה', root: 'עלה', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 올렸다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הוֹצִיא', root: 'יצא', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 이끌어 냈다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הֶאֱמִין', root: 'אמן', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 믿었다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הִשְׁמִיד', root: 'שׁמד', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 멸망시켰다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'הֵבִיא', root: 'בוא', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 데려왔다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // --- Hiphil Imperfect ---
  { form: 'יַשְׁמִיעַ', root: 'שׁמע', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 들려줄 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יַכֶּה', root: 'נכה', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 칠 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יַגִּיד', root: 'נגד', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 알릴 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יוֹשִׁיעַ', root: 'ישׁע', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 구원할 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יוֹצִיא', root: 'יצא', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 이끌어 낼 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'יָבִיא', root: 'בוא', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 데려올 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // --- Qal Imperative ---
  { form: 'כְּתֹב', root: 'כתב', parsing: '칼 명령법 2인칭 남성 단수', gloss: '써라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'כִּתְבִי', root: 'כתב', parsing: '칼 명령법 2인칭 여성 단수', gloss: '써라! (여)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '여성 단수', stage: 3 },
  { form: 'כִּתְבוּ', root: 'כתב', parsing: '칼 명령법 2인칭 남성 복수', gloss: '써라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'שְׁמֹר', root: 'שׁמר', parsing: '칼 명령법 2인칭 남성 단수', gloss: '지켜라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'שִׁמְרוּ', root: 'שׁמר', parsing: '칼 명령법 2인칭 남성 복수', gloss: '지켜라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'שְׁמַע', root: 'שׁמע', parsing: '칼 명령법 2인칭 남성 단수', gloss: '들어라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'שִׁמְעוּ', root: 'שׁמע', parsing: '칼 명령법 2인칭 남성 복수', gloss: '들어라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'לֵךְ', root: 'הלך', parsing: '칼 명령법 2인칭 남성 단수', gloss: '가라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'לְכוּ', root: 'הלך', parsing: '칼 명령법 2인칭 남성 복수', gloss: '가라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'בֹּא', root: 'בוא', parsing: '칼 명령법 2인칭 남성 단수', gloss: '와라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'בֹּאוּ', root: 'בוא', parsing: '칼 명령법 2인칭 남성 복수', gloss: '와라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },

  // --- Qal Infinitive Construct ---
  { form: 'כְּתֹב', root: 'כתב', parsing: '칼 부정사 연계형', gloss: '쓰는 것, 쓰기 위해', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'שְׁמֹר', root: 'שׁמר', parsing: '칼 부정사 연계형', gloss: '지키는 것', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'שְׁמֹעַ', root: 'שׁמע', parsing: '칼 부정사 연계형', gloss: '듣는 것', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'לָלֶכֶת', root: 'הלך', parsing: '칼 부정사 연계형', gloss: '걷기, 가기 위해', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'רְאוֹת', root: 'ראה', parsing: '칼 부정사 연계형', gloss: '보는 것', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'לָתֵת', root: 'נתן', parsing: '칼 부정사 연계형', gloss: '주기 위해', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },

  // --- Qal Participle ---
  { form: 'כֹּתֵב', root: 'כתב', parsing: '칼 능동 분사 남성 단수', gloss: '쓰고 있는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'כֹּתְבִים', root: 'כתב', parsing: '칼 능동 분사 남성 복수', gloss: '쓰고 있는 자들', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 복수', stage: 3 },
  { form: 'שֹׁמֵר', root: 'שׁמר', parsing: '칼 능동 분사 남성 단수', gloss: '지키는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'שֹׁמְרִים', root: 'שׁמר', parsing: '칼 능동 분사 남성 복수', gloss: '지키는 자들', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 복수', stage: 3 },
  { form: 'אֹמֵר', root: 'אמר', parsing: '칼 능동 분사 남성 단수', gloss: '말하는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'הֹלֵךְ', root: 'הלך', parsing: '칼 능동 분사 남성 단수', gloss: '걸어가는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'בָּא', root: 'בוא', parsing: '칼 능동 분사 남성 단수', gloss: '오는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'יֹשֵׁב', root: 'ישׁב', parsing: '칼 능동 분사 남성 단수', gloss: '앉아 있는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'רֹעֶה', root: 'רעה', parsing: '칼 능동 분사 남성 단수', gloss: '목양하는 자 (목자)', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },

  // --- Wayyiqtol basic forms ---
  { form: 'וַיֹּאמֶר', root: 'אמר', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 말했다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיַּעַשׂ', root: 'עשׂה', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 만들었다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיַּרְא', root: 'ראה', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 보았다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיֵּלֶךְ', root: 'הלך', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 갔다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיָּבֹא', root: 'בוא', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 왔다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיִּשְׁמַע', root: 'שׁמע', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 들었다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיִּקְרָא', root: 'קרא', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 불렀다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // ============================================================
  // STAGE 4: Pual, Hophal, Hithpael; weak verb forms
  // ============================================================

  // --- Pual Perfect ---
  { form: 'כֻּתַּב', root: 'כתב', parsing: '푸알 완료 3인칭 남성 단수', gloss: '기록되었다 (강조)', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'בֹּרַךְ', root: 'ברך', parsing: '푸알 완료 3인칭 남성 단수', gloss: '축복받았다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'שֻׁלַּח', root: 'שׁלח', parsing: '푸알 완료 3인칭 남성 단수', gloss: '보내어졌다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'כֻּפַּר', root: 'כפר', parsing: '푸알 완료 3인칭 남성 단수', gloss: '속죄되었다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'צֻוָּה', root: 'צוה', parsing: '푸알 완료 3인칭 남성 단수', gloss: '명령받았다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Pual Imperfect ---
  { form: 'יְכֻתַּב', root: 'כתב', parsing: '푸알 미완료 3인칭 남성 단수', gloss: '기록될 것이다', tense: '미완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יְבֹרַךְ', root: 'ברך', parsing: '푸알 미완료 3인칭 남성 단수', gloss: '축복받을 것이다', tense: '미완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hophal Perfect ---
  { form: 'הָכְתַּב', root: 'כתב', parsing: '호팔 완료 3인칭 남성 단수', gloss: '기록되게 되었다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הוּשְׁלַךְ', root: 'שׁלך', parsing: '호팔 완료 3인칭 남성 단수', gloss: '던져졌다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הוּכָּה', root: 'נכה', parsing: '호팔 완료 3인칭 남성 단수', gloss: '맞았다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הוּבָא', root: 'בוא', parsing: '호팔 완료 3인칭 남성 단수', gloss: '데려와졌다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hophal Imperfect ---
  { form: 'יוּכַּת', root: 'כתב', parsing: '호팔 미완료 3인칭 남성 단수', gloss: '기록되게 될 것이다', tense: '미완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יוּכֶּה', root: 'נכה', parsing: '호팔 미완료 3인칭 남성 단수', gloss: '맞게 될 것이다', tense: '미완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hithpael Perfect ---
  { form: 'הִתְהַלֵּךְ', root: 'הלך', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '걸어 다녔다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִתְנַבֵּא', root: 'נבא', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '예언했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִתְפַּלֵּל', root: 'פלל', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '기도했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִתְקַדֵּשׁ', root: 'קדשׁ', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '자신을 거룩하게 했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִשְׁתַּחֲוָה', root: 'שׁחה', parsing: '히스타파엘 완료 3인칭 남성 단수', gloss: '경배했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hithpael Imperfect ---
  { form: 'יִתְהַלֵּךְ', root: 'הלך', parsing: '히트파엘 미완료 3인칭 남성 단수', gloss: '걸어 다닐 것이다', tense: '미완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִתְנַבֵּא', root: 'נבא', parsing: '히트파엘 미완료 3인칭 남성 단수', gloss: '예언할 것이다', tense: '미완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִתְפַּלֵּל', root: 'פלל', parsing: '히트파엘 미완료 3인칭 남성 단수', gloss: '기도할 것이다', tense: '미완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Weak verb forms: Pe-Nun (פ״ן) ---
  { form: 'נָפַל', root: 'נפל', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 넘어졌다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִפֹּל', root: 'נפל', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 넘어질 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'נָתַן', root: 'נתן', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 주었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִתֵּן', root: 'נתן', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 줄 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'נָגַשׁ', root: 'נגשׁ', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 가까이 갔다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִגַּשׁ', root: 'נגשׁ', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 가까이 갈 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Weak verb forms: Lamed-He (ל״ה) ---
  { form: 'בָּנָה', root: 'בנה', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 건축했다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִבְנֶה', root: 'בנה', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 건축할 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'עָלָה', root: 'עלה', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 올라갔다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יַעֲלֶה', root: 'עלה', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 올라갈 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'רָאָה', root: 'ראה', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 보았다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִרְאֶה', root: 'ראה', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 볼 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'עָשָׂה', root: 'עשׂה', parsing: '칼 완료 3인칭 남성 단수 (ל״ה)', gloss: '그가 만들었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Weak verb forms: Hollow/Ayin-Waw (ע״ו) ---
  { form: 'קָם', root: 'קום', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 일어났다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָקוּם', root: 'קום', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 일어날 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'שָׂם', root: 'שׂים', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 놓았다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָשִׂים', root: 'שׂים', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 놓을 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'מֵת', root: 'מות', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 죽었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָמוּת', root: 'מות', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 죽을 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'בָּא', root: 'בוא', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 왔다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָבוֹא', root: 'בוא', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 올 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'שָׁב', root: 'שׁוב', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 돌아갔다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָשׁוּב', root: 'שׁוב', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 돌아갈 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // ============================================================
  // STAGE 5: Forms from actual biblical texts
  // ============================================================

  // --- Genesis 1 wayyiqtol forms ---
  { form: 'וַיֹּאמֶר', root: 'אמר', parsing: '와이욕톨 칼 3남단 (창 1:3)', gloss: '그리고 ~가 말씀하셨다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיְהִי', root: 'היה', parsing: '와이욕톨 칼 3남단 (창 1:3)', gloss: '그리고 ~이 있었다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיַּרְא', root: 'ראה', parsing: '와이욕톨 칼 3남단 (창 1:4)', gloss: '그리고 ~가 보셨다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיַּבְדֵּל', root: 'בדל', parsing: '와이욕톨 히필 3남단 (창 1:4)', gloss: '그리고 ~가 나누셨다', tense: '와이욕톨', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיִּקְרָא', root: 'קרא', parsing: '와이욕톨 칼 3남단 (창 1:5)', gloss: '그리고 ~가 부르셨다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיַּעַשׂ', root: 'עשׂה', parsing: '와이욕톨 칼 3남단 (창 1:7)', gloss: '그리고 ~가 만드셨다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },

  // --- Psalm 23 forms ---
  { form: 'יְנַהֲלֵנִי', root: 'נהל', parsing: '피엘 미완료 3남단 + 1단접미 (시 23:2)', gloss: '그가 나를 인도하신다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'יְשׁוֹבֵב', root: 'שׁוב', parsing: '폴렐 미완료 3남단 (시 23:3)', gloss: '그가 회복시키신다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'יַנְחֵנִי', root: 'נחה', parsing: '히필 미완료 3남단 + 1단접미 (시 23:3)', gloss: '그가 나를 이끄신다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'אִירָא', root: 'ירא', parsing: '칼 미완료 1공단 (시 23:4)', gloss: '내가 두려워하지 않으리', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 5 },
  { form: 'יְנַחֲמֻנִי', root: 'נחם', parsing: '피엘 미완료 3남복 + 1단접미 (시 23:4)', gloss: '그것들이 나를 위로한다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 복수', stage: 5 },
  { form: 'תַּעֲרֹךְ', root: 'ערך', parsing: '칼 미완료 2남단 (시 23:5)', gloss: '당신이 차려 주신다', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 5 },
  { form: 'דִּשַּׁנְתָּ', root: 'דשׁן', parsing: '피엘 완료 2남단 (시 23:5)', gloss: '당신이 기름 부으셨다', tense: '완료', voice: '피엘', mood: '직설법', person: '2', number: '남성 단수', stage: 5 },
  { form: 'יִרְדְּפוּנִי', root: 'רדף', parsing: '칼 미완료 3남복 + 1단접미 (시 23:6)', gloss: '그것들이 나를 따르리라', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 복수', stage: 5 },
  { form: 'וְשַׁבְתִּי', root: 'שׁוב', parsing: '와카탈 칼 1공단 (시 23:6)', gloss: '내가 거할 것이다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 5 },

  // --- Deuteronomy 6 (Shema) ---
  { form: 'שְׁמַע', root: 'שׁמע', parsing: '칼 명령법 2남단 (신 6:4)', gloss: '들어라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 5 },
  { form: 'וְאָהַבְתָּ', root: 'אהב', parsing: '와카탈 칼 2남단 (신 6:5)', gloss: '너는 사랑하라', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 5 },
  { form: 'וְשִׁנַּנְתָּם', root: 'שׁנן', parsing: '와카탈 피엘 2남단+3남복접 (신 6:7)', gloss: '부지런히 가르치라', tense: '완료', voice: '피엘', mood: '직설법', person: '2', number: '남성 단수', stage: 5 },

  // ============================================================
  // ADDITIONAL STAGE 2: More Qal paradigms for common verbs
  // ============================================================

  // --- Qal Perfect/Imperfect: ידע (알다) ---
  { form: 'יָדַע', root: 'ידע', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 알았다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'יָדְעָה', root: 'ידע', parsing: '칼 완료 3인칭 여성 단수', gloss: '그녀가 알았다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'יָדַעְתָּ', root: 'ידע', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 알았다', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'יָדַעְתִּי', root: 'ידע', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 알았다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'יֵדַע', root: 'ידע', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 알 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 2 },
  { form: 'תֵּדַע', root: 'ידע', parsing: '칼 미완료 2인칭 남성 단수', gloss: '네가 알 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'אֵדַע', root: 'ידע', parsing: '칼 미완료 1인칭 공성 단수', gloss: '내가 알 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },

  // --- Qal Perfect/Imperfect: נתן (주다) full paradigm ---
  { form: 'נָתְנָה', root: 'נתן', parsing: '칼 완료 3인칭 여성 단수', gloss: '그녀가 주었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '여성 단수', stage: 2 },
  { form: 'נָתַתָּ', root: 'נתן', parsing: '칼 완료 2인칭 남성 단수', gloss: '네가 주었다', tense: '완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'נָתַתִּי', root: 'נתן', parsing: '칼 완료 1인칭 공성 단수', gloss: '내가 주었다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },
  { form: 'נָתְנוּ', root: 'נתן', parsing: '칼 완료 3인칭 공성 복수', gloss: '그들이 주었다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '공성 복수', stage: 2 },
  { form: 'תִּתֵּן', root: 'נתן', parsing: '칼 미완료 2인칭 남성 단수', gloss: '네가 줄 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '2', number: '남성 단수', stage: 2 },
  { form: 'אֶתֵּן', root: 'נתן', parsing: '칼 미완료 1인칭 공성 단수', gloss: '내가 줄 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 2 },

  // ============================================================
  // ADDITIONAL STAGE 3: Imperatives, Infinitives, Participles, Wayyiqtol
  // ============================================================

  // --- More Qal Imperatives ---
  { form: 'קוּם', root: 'קום', parsing: '칼 명령법 2인칭 남성 단수', gloss: '일어나라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'קוּמוּ', root: 'קום', parsing: '칼 명령법 2인칭 남성 복수', gloss: '일어나라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'שׁוּב', root: 'שׁוב', parsing: '칼 명령법 2인칭 남성 단수', gloss: '돌아가라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'שׁוּבוּ', root: 'שׁוב', parsing: '칼 명령법 2인칭 남성 복수', gloss: '돌아가라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'תֵּן', root: 'נתן', parsing: '칼 명령법 2인칭 남성 단수', gloss: '주어라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'תְּנוּ', root: 'נתן', parsing: '칼 명령법 2인칭 남성 복수', gloss: '주어라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'עֲלֵה', root: 'עלה', parsing: '칼 명령법 2인칭 남성 단수', gloss: '올라가라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'עֲלוּ', root: 'עלה', parsing: '칼 명령법 2인칭 남성 복수', gloss: '올라가라! (복)', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 복수', stage: 3 },
  { form: 'רְאֵה', root: 'ראה', parsing: '칼 명령법 2인칭 남성 단수', gloss: '보아라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },
  { form: 'דַּע', root: 'ידע', parsing: '칼 명령법 2인칭 남성 단수', gloss: '알아라!', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 3 },

  // --- More Infinitive Constructs ---
  { form: 'עֲשׂוֹת', root: 'עשׂה', parsing: '칼 부정사 연계형', gloss: '하는 것, 만들기', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'דַּעַת', root: 'ידע', parsing: '칼 부정사 연계형', gloss: '아는 것, 알기', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'אֱכֹל', root: 'אכל', parsing: '칼 부정사 연계형', gloss: '먹는 것, 먹기', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'שׁוּב', root: 'שׁוב', parsing: '칼 부정사 연계형', gloss: '돌아가는 것', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'קוּם', root: 'קום', parsing: '칼 부정사 연계형', gloss: '일어나는 것', tense: '부정사', voice: '칼', mood: '부정사', stage: 3 },

  // --- Infinitive Absolute ---
  { form: 'כָּתוֹב', root: 'כתב', parsing: '칼 부정사 절대형', gloss: '반드시 쓰다', tense: '부정사 절대형', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'שָׁמוֹר', root: 'שׁמר', parsing: '칼 부정사 절대형', gloss: '반드시 지키다', tense: '부정사 절대형', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'שָׁמוֹעַ', root: 'שׁמע', parsing: '칼 부정사 절대형', gloss: '반드시 듣다', tense: '부정사 절대형', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'הָלוֹךְ', root: 'הלך', parsing: '칼 부정사 절대형', gloss: '계속 가다', tense: '부정사 절대형', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'מוֹת', root: 'מות', parsing: '칼 부정사 절대형', gloss: '반드시 죽다', tense: '부정사 절대형', voice: '칼', mood: '부정사', stage: 3 },
  { form: 'אָכוֹל', root: 'אכל', parsing: '칼 부정사 절대형', gloss: '반드시 먹다', tense: '부정사 절대형', voice: '칼', mood: '부정사', stage: 3 },

  // --- More Participles ---
  { form: 'יֹדֵעַ', root: 'ידע', parsing: '칼 능동 분사 남성 단수', gloss: '아는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'אֹכֵל', root: 'אכל', parsing: '칼 능동 분사 남성 단수', gloss: '먹는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'נֹתֵן', root: 'נתן', parsing: '칼 능동 분사 남성 단수', gloss: '주는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'עֹשֶׂה', root: 'עשׂה', parsing: '칼 능동 분사 남성 단수', gloss: '하는 자, 만드는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'שֹׁפֵט', root: 'שׁפט', parsing: '칼 능동 분사 남성 단수', gloss: '재판하는 자 (사사)', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'מֹלֵךְ', root: 'מלך', parsing: '칼 능동 분사 남성 단수', gloss: '다스리는 자', tense: '분사', voice: '칼', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },

  // --- Niphal Participle ---
  { form: 'נִכְתָּב', root: 'כתב', parsing: '니팔 분사 남성 단수', gloss: '기록된', tense: '분사', voice: '니팔', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'נוֹלָד', root: 'ילד', parsing: '니팔 분사 남성 단수', gloss: '태어난', tense: '분사', voice: '니팔', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'נוֹרָא', root: 'ירא', parsing: '니팔 분사 남성 단수', gloss: '두려운, 경외할', tense: '분사', voice: '니팔', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },

  // --- Piel Participle ---
  { form: 'מְדַבֵּר', root: 'דבר', parsing: '피엘 분사 남성 단수', gloss: '말하는 자', tense: '분사', voice: '피엘', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'מְבַקֵּשׁ', root: 'בקשׁ', parsing: '피엘 분사 남성 단수', gloss: '찾는 자', tense: '분사', voice: '피엘', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'מְבָרֵךְ', root: 'ברך', parsing: '피엘 분사 남성 단수', gloss: '축복하는 자', tense: '분사', voice: '피엘', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },

  // --- Hiphil Participle ---
  { form: 'מַכֶּה', root: 'נכה', parsing: '히필 분사 남성 단수', gloss: '치는 자', tense: '분사', voice: '히필', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'מַגִּיד', root: 'נגד', parsing: '히필 분사 남성 단수', gloss: '알리는 자', tense: '분사', voice: '히필', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'מוֹשִׁיעַ', root: 'ישׁע', parsing: '히필 분사 남성 단수', gloss: '구원하는 자', tense: '분사', voice: '히필', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },
  { form: 'מֵבִיא', root: 'בוא', parsing: '히필 분사 남성 단수', gloss: '데려오는 자', tense: '분사', voice: '히필', mood: '분사', person: undefined, number: '남성 단수', stage: 3 },

  // --- More Wayyiqtol forms ---
  { form: 'וַיִּתֵּן', root: 'נתן', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 주었다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיִּקַּח', root: 'לקח', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 취했다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיָּמָת', root: 'מות', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 죽었다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיִּכְתֹּב', root: 'כתב', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 썼다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיֵּשֶׁב', root: 'ישׁב', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 앉았다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיָּקָם', root: 'קום', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 일어났다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיָּשָׁב', root: 'שׁוב', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 돌아갔다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיַּעַל', root: 'עלה', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 올라갔다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיֵּצֵא', root: 'יצא', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 나갔다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },
  { form: 'וַיִּפֹּל', root: 'נפל', parsing: '와이욕톨 칼 3인칭 남성 단수', gloss: '그가 넘어졌다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 3 },

  // ============================================================
  // ADDITIONAL STAGE 4: More binyan forms, weak verbs
  // ============================================================

  // --- Niphal Perfect: additional verbs ---
  { form: 'נוֹלַד', root: 'ילד', parsing: '니팔 완료 3인칭 남성 단수', gloss: '태어났다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'נִשְׁאַר', root: 'שׁאר', parsing: '니팔 완료 3인칭 남성 단수', gloss: '남겨졌다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'נִקְרָא', root: 'קרא', parsing: '니팔 완료 3인칭 남성 단수', gloss: '불리었다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'נֶאֱמַר', root: 'אמר', parsing: '니팔 완료 3인칭 남성 단수', gloss: '말해졌다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'נִבְנָה', root: 'בנה', parsing: '니팔 완료 3인칭 남성 단수', gloss: '건축되었다', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Niphal Imperfect: additional ---
  { form: 'יִוָּלֵד', root: 'ילד', parsing: '니팔 미완료 3인칭 남성 단수', gloss: '태어날 것이다', tense: '미완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִשָּׁאֵר', root: 'שׁאר', parsing: '니팔 미완료 3인칭 남성 단수', gloss: '남겨질 것이다', tense: '미완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִקָּרֵא', root: 'קרא', parsing: '니팔 미완료 3인칭 남성 단수', gloss: '불릴 것이다', tense: '미완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Piel Perfect: additional verbs ---
  { form: 'גִּדַּל', root: 'גדל', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 키웠다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'קִדַּשׁ', root: 'קדשׁ', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 거룩하게 했다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'כִּפֶּר', root: 'כפר', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 속죄했다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'מִלֵּא', root: 'מלא', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 채웠다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'לִמַּד', root: 'למד', parsing: '피엘 완료 3인칭 남성 단수', gloss: '그가 가르쳤다', tense: '완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Piel Imperfect: additional ---
  { form: 'יְגַדֵּל', root: 'גדל', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 키울 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יְקַדֵּשׁ', root: 'קדשׁ', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 거룩하게 할 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יְכַפֵּר', root: 'כפר', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 속죄할 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יְלַמֵּד', root: 'למד', parsing: '피엘 미완료 3인칭 남성 단수', gloss: '그가 가르칠 것이다', tense: '미완료', voice: '피엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hiphil Perfect: additional ---
  { form: 'הוֹדִיעַ', root: 'ידע', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 알렸다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הֶחֱזִיק', root: 'חזק', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 붙잡았다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִגְדִּיל', root: 'גדל', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 크게 했다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הֵמִית', root: 'מות', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 죽였다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִשְׁלִיךְ', root: 'שׁלך', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 던졌다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הֵשִׁיב', root: 'שׁוב', parsing: '히필 완료 3인칭 남성 단수', gloss: '그가 돌아오게 했다', tense: '완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hiphil Imperfect: additional ---
  { form: 'יוֹדִיעַ', root: 'ידע', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 알릴 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יַחֲזִיק', root: 'חזק', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 붙잡을 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָמִית', root: 'מות', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 죽일 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָשִׁיב', root: 'שׁוב', parsing: '히필 미완료 3인칭 남성 단수', gloss: '그가 돌려보낼 것이다', tense: '미완료', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Pual Perfect: additional ---
  { form: 'קֻדַּשׁ', root: 'קדשׁ', parsing: '푸알 완료 3인칭 남성 단수', gloss: '거룩하게 되었다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'לֻמַּד', root: 'למד', parsing: '푸알 완료 3인칭 남성 단수', gloss: '가르침을 받았다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'גֻּדַּל', root: 'גדל', parsing: '푸알 완료 3인칭 남성 단수', gloss: '키워졌다', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hophal Perfect: additional ---
  { form: 'הוּמַת', root: 'מות', parsing: '호팔 완료 3인칭 남성 단수', gloss: '죽임을 당했다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הוּשְׁמַד', root: 'שׁמד', parsing: '호팔 완료 3인칭 남성 단수', gloss: '멸망당했다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הוּגַּד', root: 'נגד', parsing: '호팔 완료 3인칭 남성 단수', gloss: '알려졌다', tense: '완료', voice: '호팔', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hithpael Perfect: additional ---
  { form: 'הִתְחַנֵּן', root: 'חנן', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '간청했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִתְגַּדֵּל', root: 'גדל', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '자신을 크게 했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'הִתְיַצֵּב', root: 'יצב', parsing: '히트파엘 완료 3인칭 남성 단수', gloss: '서서 대항했다', tense: '완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Hithpael Imperfect: additional ---
  { form: 'יִתְחַנֵּן', root: 'חנן', parsing: '히트파엘 미완료 3인칭 남성 단수', gloss: '간청할 것이다', tense: '미완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִתְקַדֵּשׁ', root: 'קדשׁ', parsing: '히트파엘 미완료 3인칭 남성 단수', gloss: '거룩해질 것이다', tense: '미완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יִשְׁתַּחֲוֶה', root: 'שׁחה', parsing: '히스타파엘 미완료 3인칭 남성 단수', gloss: '경배할 것이다', tense: '미완료', voice: '히트파엘', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // --- Weak verb: Pe-Yod (פ״י) ---
  { form: 'יָלַד', root: 'ילד', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 낳았다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יֵלֵד', root: 'ילד', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 낳을 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָצָא', root: 'יצא', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 나갔다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יֵצֵא', root: 'יצא', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 나갈 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יָרַד', root: 'ירד', parsing: '칼 완료 3인칭 남성 단수', gloss: '그가 내려갔다', tense: '완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },
  { form: 'יֵרֵד', root: 'ירד', parsing: '칼 미완료 3인칭 남성 단수', gloss: '그가 내려갈 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 4 },

  // ============================================================
  // ADDITIONAL STAGE 5: More biblical text forms
  // ============================================================

  // --- Genesis narrative wayyiqtol ---
  { form: 'וַיִּבְרָא', root: 'ברא', parsing: '와이욕톨 칼 3남단 (창 1:27)', gloss: '그리고 ~가 창조하셨다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיִּבֶן', root: 'בנה', parsing: '와이욕톨 칼 3남단 (창 2:22)', gloss: '그리고 ~가 만드셨다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיִּשְׁלַח', root: 'שׁלח', parsing: '와이욕톨 칼 3남단', gloss: '그리고 ~가 보냈다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיַּךְ', root: 'נכה', parsing: '와이욕톨 히필 3남단', gloss: '그리고 ~가 쳤다', tense: '와이욕톨', voice: '히필', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'וַיֵּדַע', root: 'ידע', parsing: '와이욕톨 칼 3남단 (창 4:1)', gloss: '그리고 ~가 알았다', tense: '와이욕톨', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },

  // --- Isaiah / Prophetic forms ---
  { form: 'יִמְלֹךְ', root: 'מלך', parsing: '칼 미완료 3인칭 남성 단수 (사 24:23)', gloss: '그가 다스릴 것이다', tense: '미완료', voice: '칼', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'נוֹלַד', root: 'ילד', parsing: '푸알 완료 3남단 (사 9:5)', gloss: '태어났다 (아이가)', tense: '완료', voice: '푸알', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },
  { form: 'נִתַּן', root: 'נתן', parsing: '니팔 완료 3남단 (사 9:5)', gloss: '주어졌다 (아들이)', tense: '완료', voice: '니팔', mood: '직설법', person: '3', number: '남성 단수', stage: 5 },

  // --- Psalm 119 forms ---
  { form: 'לָמַדְתִּי', root: 'למד', parsing: '칼 완료 1인칭 공성 단수 (시 119)', gloss: '내가 배웠다', tense: '완료', voice: '칼', mood: '직설법', person: '1', number: '공성 단수', stage: 5 },
  { form: 'לַמְּדֵנִי', root: 'למד', parsing: '피엘 명령법 2남단+1단접미 (시 119:12)', gloss: '나를 가르쳐 주소서', tense: '명령법', voice: '피엘', mood: '명령법', person: '2', number: '남성 단수', stage: 5 },
  { form: 'חָנֵּנִי', root: 'חנן', parsing: '칼 명령법 2남단+1단접미 (시 119:29)', gloss: '나를 은혜롭게 하소서', tense: '명령법', voice: '칼', mood: '명령법', person: '2', number: '남성 단수', stage: 5 },
  { form: 'הוֹשִׁיעֵנִי', root: 'ישׁע', parsing: '히필 명령법 2남단+1단접미 (시 119:94)', gloss: '나를 구원하소서', tense: '명령법', voice: '히필', mood: '명령법', person: '2', number: '남성 단수', stage: 5 },
];
