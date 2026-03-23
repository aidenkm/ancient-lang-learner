import { VerbForm } from '../../../types';

export const greekVerbForms: VerbForm[] = [
  // ============================================================
  // STAGE 2: Present Active Indicative (~30 forms)
  // ============================================================

  // --- λύω paradigm (full) ---
  { form: 'λύω', root: 'λύω', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 푼다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 2 },
  { form: 'λύεις', root: 'λύω', parsing: '현재 능동 직설법 2인칭 단수', gloss: '네가 푼다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 2 },
  { form: 'λύει', root: 'λύω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 푼다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'λύομεν', root: 'λύω', parsing: '현재 능동 직설법 1인칭 복수', gloss: '우리가 푼다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 2 },
  { form: 'λύετε', root: 'λύω', parsing: '현재 능동 직설법 2인칭 복수', gloss: '너희가 푼다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '복수', stage: 2 },
  { form: 'λύουσιν', root: 'λύω', parsing: '현재 능동 직설법 3인칭 복수', gloss: '그들이 푼다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 2 },

  // --- λέγω ---
  { form: 'λέγω', root: 'λέγω', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 말한다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 2 },
  { form: 'λέγεις', root: 'λέγω', parsing: '현재 능동 직설법 2인칭 단수', gloss: '네가 말한다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 2 },
  { form: 'λέγει', root: 'λέγω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 말한다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'λέγομεν', root: 'λέγω', parsing: '현재 능동 직설법 1인칭 복수', gloss: '우리가 말한다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 2 },
  { form: 'λέγουσιν', root: 'λέγω', parsing: '현재 능동 직설법 3인칭 복수', gloss: '그들이 말한다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 2 },

  // --- ἔχω ---
  { form: 'ἔχω', root: 'ἔχω', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 가지고 있다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 2 },
  { form: 'ἔχεις', root: 'ἔχω', parsing: '현재 능동 직설법 2인칭 단수', gloss: '네가 가지고 있다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 2 },
  { form: 'ἔχει', root: 'ἔχω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 가지고 있다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'ἔχομεν', root: 'ἔχω', parsing: '현재 능동 직설법 1인칭 복수', gloss: '우리가 가지고 있다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 2 },
  { form: 'ἔχουσιν', root: 'ἔχω', parsing: '현재 능동 직설법 3인칭 복수', gloss: '그들이 가지고 있다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 2 },

  // --- ποιέω (contract) ---
  { form: 'ποιῶ', root: 'ποιέω', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 행한다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 2 },
  { form: 'ποιεῖς', root: 'ποιέω', parsing: '현재 능동 직설법 2인칭 단수', gloss: '네가 행한다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 2 },
  { form: 'ποιεῖ', root: 'ποιέω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 행한다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'ποιοῦμεν', root: 'ποιέω', parsing: '현재 능동 직설법 1인칭 복수', gloss: '우리가 행한다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 2 },
  { form: 'ποιοῦσιν', root: 'ποιέω', parsing: '현재 능동 직설법 3인칭 복수', gloss: '그들이 행한다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 2 },

  // --- γράφω ---
  { form: 'γράφω', root: 'γράφω', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 쓴다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 2 },
  { form: 'γράφει', root: 'γράφω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 쓴다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'γράφομεν', root: 'γράφω', parsing: '현재 능동 직설법 1인칭 복수', gloss: '우리가 쓴다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 2 },

  // --- πιστεύω ---
  { form: 'πιστεύω', root: 'πιστεύω', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 믿는다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 2 },
  { form: 'πιστεύεις', root: 'πιστεύω', parsing: '현재 능동 직설법 2인칭 단수', gloss: '네가 믿는다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 2 },
  { form: 'πιστεύει', root: 'πιστεύω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 믿는다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'πιστεύομεν', root: 'πιστεύω', parsing: '현재 능동 직설법 1인칭 복수', gloss: '우리가 믿는다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 2 },
  { form: 'πιστεύουσιν', root: 'πιστεύω', parsing: '현재 능동 직설법 3인칭 복수', gloss: '그들이 믿는다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 2 },

  // --- Other key present forms ---
  { form: 'ἀκούει', root: 'ἀκούω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 듣는다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },
  { form: 'βλέπει', root: 'βλέπω', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 본다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 2 },

  // ============================================================
  // STAGE 3: All indicative tenses + basic non-indicative (~80)
  // ============================================================

  // --- Imperfect Active Indicative ---
  { form: 'ἔλυον', root: 'λύω', parsing: '미완료 능동 직설법 1인칭 단수', gloss: '내가 풀고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἔλυες', root: 'λύω', parsing: '미완료 능동 직설법 2인칭 단수', gloss: '네가 풀고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 3 },
  { form: 'ἔλυεν', root: 'λύω', parsing: '미완료 능동 직설법 3인칭 단수', gloss: '그가 풀고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐλύομεν', root: 'λύω', parsing: '미완료 능동 직설법 1인칭 복수', gloss: '우리가 풀고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 3 },
  { form: 'ἐλύετε', root: 'λύω', parsing: '미완료 능동 직설법 2인칭 복수', gloss: '너희가 풀고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '2', number: '복수', stage: 3 },
  { form: 'ἔλυον', root: 'λύω', parsing: '미완료 능동 직설법 3인칭 복수', gloss: '그들이 풀고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'ἔλεγεν', root: 'λέγω', parsing: '미완료 능동 직설법 3인칭 단수', gloss: '그가 말하고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἔλεγον', root: 'λέγω', parsing: '미완료 능동 직설법 3인칭 복수', gloss: '그들이 말하고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'εἶχεν', root: 'ἔχω', parsing: '미완료 능동 직설법 3인칭 단수', gloss: '그가 가지고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐπίστευον', root: 'πιστεύω', parsing: '미완료 능동 직설법 3인칭 복수', gloss: '그들이 믿고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'ἔγραφεν', root: 'γράφω', parsing: '미완료 능동 직설법 3인칭 단수', gloss: '그가 쓰고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἤκουον', root: 'ἀκούω', parsing: '미완료 능동 직설법 3인칭 복수', gloss: '그들이 듣고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },

  // --- Future Active Indicative ---
  { form: 'λύσω', root: 'λύω', parsing: '미래 능동 직설법 1인칭 단수', gloss: '내가 풀 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'λύσεις', root: 'λύω', parsing: '미래 능동 직설법 2인칭 단수', gloss: '네가 풀 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 3 },
  { form: 'λύσει', root: 'λύω', parsing: '미래 능동 직설법 3인칭 단수', gloss: '그가 풀 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'λύσομεν', root: 'λύω', parsing: '미래 능동 직설법 1인칭 복수', gloss: '우리가 풀 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 3 },
  { form: 'ἕξω', root: 'ἔχω', parsing: '미래 능동 직설법 1인칭 단수', gloss: '내가 가질 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'γράψω', root: 'γράφω', parsing: '미래 능동 직설법 1인칭 단수', gloss: '내가 쓸 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'γράψει', root: 'γράφω', parsing: '미래 능동 직설법 3인칭 단수', gloss: '그가 쓸 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'πιστεύσω', root: 'πιστεύω', parsing: '미래 능동 직설법 1인칭 단수', gloss: '내가 믿을 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἐρῶ', root: 'λέγω', parsing: '미래 능동 직설법 1인칭 단수', gloss: '내가 말할 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἀκούσει', root: 'ἀκούω', parsing: '미래 능동 직설법 3인칭 단수', gloss: '그가 들을 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ποιήσω', root: 'ποιέω', parsing: '미래 능동 직설법 1인칭 단수', gloss: '내가 행할 것이다', tense: '미래', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },

  // --- Aorist Active Indicative (1st aorist) ---
  { form: 'ἔλυσα', root: 'λύω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 풀었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἔλυσας', root: 'λύω', parsing: '부정과거 능동 직설법 2인칭 단수', gloss: '네가 풀었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 3 },
  { form: 'ἔλυσεν', root: 'λύω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 풀었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐλύσαμεν', root: 'λύω', parsing: '부정과거 능동 직설법 1인칭 복수', gloss: '우리가 풀었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 3 },
  { form: 'ἐλύσατε', root: 'λύω', parsing: '부정과거 능동 직설법 2인칭 복수', gloss: '너희가 풀었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '2', number: '복수', stage: 3 },
  { form: 'ἔλυσαν', root: 'λύω', parsing: '부정과거 능동 직설법 3인칭 복수', gloss: '그들이 풀었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'ἔγραψα', root: 'γράφω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 썼다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἔγραψεν', root: 'γράφω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 썼다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐπίστευσα', root: 'πιστεύω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 믿었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἐπίστευσεν', root: 'πιστεύω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 믿었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐπίστευσαν', root: 'πιστεύω', parsing: '부정과거 능동 직설법 3인칭 복수', gloss: '그들이 믿었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'ἐποίησεν', root: 'ποιέω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 행하였다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἤκουσεν', root: 'ἀκούω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 들었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },

  // --- Aorist Active Indicative (2nd aorist) ---
  { form: 'εἶπον', root: 'λέγω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 말했다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'εἶπεν', root: 'λέγω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 말했다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'εἶπαν', root: 'λέγω', parsing: '부정과거 능동 직설법 3인칭 복수', gloss: '그들이 말했다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'ἦλθον', root: 'ἔρχομαι', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 왔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἦλθεν', root: 'ἔρχομαι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 왔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἦλθον', root: 'ἔρχομαι', parsing: '부정과거 능동 직설법 3인칭 복수', gloss: '그들이 왔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'εἶδον', root: 'ὁράω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 보았다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'εἶδεν', root: 'ὁράω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 보았다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἔλαβον', root: 'λαμβάνω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 받았다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἔλαβεν', root: 'λαμβάνω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 받았다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'εὗρον', root: 'εὑρίσκω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 발견했다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'εὗρεν', root: 'εὑρίσκω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 발견했다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἔβαλον', root: 'βάλλω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 던졌다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἔπεσεν', root: 'πίπτω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 넘어졌다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἔφαγον', root: 'ἐσθίω', parsing: '부정과거 능동 직설법 1인칭 단수', gloss: '내가 먹었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },

  // --- Perfect Active Indicative ---
  { form: 'λέλυκα', root: 'λύω', parsing: '완료 능동 직설법 1인칭 단수', gloss: '내가 풀어 놓았다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'λέλυκας', root: 'λύω', parsing: '완료 능동 직설법 2인칭 단수', gloss: '네가 풀어 놓았다', tense: '완료', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 3 },
  { form: 'λέλυκεν', root: 'λύω', parsing: '완료 능동 직설법 3인칭 단수', gloss: '그가 풀어 놓았다', tense: '완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'γέγραφα', root: 'γράφω', parsing: '완료 능동 직설법 1인칭 단수', gloss: '내가 써 놓았다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'γέγραφεν', root: 'γράφω', parsing: '완료 능동 직설법 3인칭 단수', gloss: '그가 써 놓았다', tense: '완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'πεπίστευκα', root: 'πιστεύω', parsing: '완료 능동 직설법 1인칭 단수', gloss: '내가 믿어 왔다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'πεπίστευκεν', root: 'πιστεύω', parsing: '완료 능동 직설법 3인칭 단수', gloss: '그가 믿어 왔다', tense: '완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἑώρακα', root: 'ὁράω', parsing: '완료 능동 직설법 1인칭 단수', gloss: '내가 보아 왔다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἑώρακεν', root: 'ὁράω', parsing: '완료 능동 직설법 3인칭 단수', gloss: '그가 보아 왔다', tense: '완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἀκήκοα', root: 'ἀκούω', parsing: '완료 능동 직설법 1인칭 단수', gloss: '내가 들어 왔다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'πεποίηκεν', root: 'ποιέω', parsing: '완료 능동 직설법 3인칭 단수', gloss: '그가 행해 놓았다', tense: '완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 3 },

  // --- Present Middle/Passive Indicative ---
  { form: 'λύομαι', root: 'λύω', parsing: '현재 중간/수동 직설법 1인칭 단수', gloss: '내가 풀린다', tense: '현재', voice: '중간/수동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'λύεται', root: 'λύω', parsing: '현재 중간/수동 직설법 3인칭 단수', gloss: '그가 풀린다', tense: '현재', voice: '중간/수동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'λυόμεθα', root: 'λύω', parsing: '현재 중간/수동 직설법 1인칭 복수', gloss: '우리가 풀린다', tense: '현재', voice: '중간/수동', mood: '직설법', person: '1', number: '복수', stage: 3 },
  { form: 'λύονται', root: 'λύω', parsing: '현재 중간/수동 직설법 3인칭 복수', gloss: '그들이 풀린다', tense: '현재', voice: '중간/수동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'γίνομαι', root: 'γίνομαι', parsing: '현재 중간 직설법 1인칭 단수', gloss: '내가 된다', tense: '현재', voice: '중간', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'γίνεται', root: 'γίνομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그것이 된다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἔρχομαι', root: 'ἔρχομαι', parsing: '현재 중간 직설법 1인칭 단수', gloss: '내가 온다', tense: '현재', voice: '중간', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἔρχεται', root: 'ἔρχομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 온다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἀποκρίνεται', root: 'ἀποκρίνομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 대답한다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'δέχεται', root: 'δέχομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 받아들인다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'πορεύεται', root: 'πορεύομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 간다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 3 },

  // --- Aorist Passive Indicative ---
  { form: 'ἐλύθην', root: 'λύω', parsing: '부정과거 수동 직설법 1인칭 단수', gloss: '내가 풀렸다', tense: '부정과거', voice: '수동', mood: '직설법', person: '1', number: '단수', stage: 3 },
  { form: 'ἐλύθης', root: 'λύω', parsing: '부정과거 수동 직설법 2인칭 단수', gloss: '네가 풀렸다', tense: '부정과거', voice: '수동', mood: '직설법', person: '2', number: '단수', stage: 3 },
  { form: 'ἐλύθη', root: 'λύω', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그가 풀렸다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐλύθημεν', root: 'λύω', parsing: '부정과거 수동 직설법 1인칭 복수', gloss: '우리가 풀렸다', tense: '부정과거', voice: '수동', mood: '직설법', person: '1', number: '복수', stage: 3 },
  { form: 'ἐλύθησαν', root: 'λύω', parsing: '부정과거 수동 직설법 3인칭 복수', gloss: '그들이 풀렸다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '복수', stage: 3 },
  { form: 'ἐγράφη', root: 'γράφω', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그것이 기록되었다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἠγέρθη', root: 'ἐγείρω', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그가 일으켜졌다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐβαπτίσθη', root: 'βαπτίζω', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그가 세례를 받았다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 3 },
  { form: 'ἐσώθη', root: 'σῴζω', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그가 구원받았다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 3 },

  // --- Basic Subjunctive ---
  { form: 'λύσω', root: 'λύω', parsing: '부정과거 능동 가정법 1인칭 단수', gloss: '내가 풀도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '1', number: '단수', stage: 3 },
  { form: 'λύσῃ', root: 'λύω', parsing: '부정과거 능동 가정법 3인칭 단수', gloss: '그가 풀도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '3', number: '단수', stage: 3 },
  { form: 'πιστεύσῃ', root: 'πιστεύω', parsing: '부정과거 능동 가정법 3인칭 단수', gloss: '그가 믿도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '3', number: '단수', stage: 3 },
  { form: 'πιστεύσωμεν', root: 'πιστεύω', parsing: '부정과거 능동 가정법 1인칭 복수', gloss: '우리가 믿도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '1', number: '복수', stage: 3 },
  { form: 'ποιήσῃ', root: 'ποιέω', parsing: '부정과거 능동 가정법 3인칭 단수', gloss: '그가 행하도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '3', number: '단수', stage: 3 },
  { form: 'εἴπῃ', root: 'λέγω', parsing: '부정과거 능동 가정법 3인칭 단수', gloss: '그가 말하도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '3', number: '단수', stage: 3 },
  { form: 'ἔλθῃ', root: 'ἔρχομαι', parsing: '부정과거 능동 가정법 3인칭 단수', gloss: '그가 오도록', tense: '부정과거', voice: '능동', mood: '가정법', person: '3', number: '단수', stage: 3 },

  // --- Basic Infinitives ---
  { form: 'λύειν', root: 'λύω', parsing: '현재 능동 부정사', gloss: '푸는 것', tense: '현재', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'λῦσαι', root: 'λύω', parsing: '부정과거 능동 부정사', gloss: '푼 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'πιστεύειν', root: 'πιστεύω', parsing: '현재 능동 부정사', gloss: '믿는 것', tense: '현재', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'πιστεῦσαι', root: 'πιστεύω', parsing: '부정과거 능동 부정사', gloss: '믿은 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'λέγειν', root: 'λέγω', parsing: '현재 능동 부정사', gloss: '말하는 것', tense: '현재', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'εἰπεῖν', root: 'λέγω', parsing: '부정과거 능동 부정사', gloss: '말한 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'ἔχειν', root: 'ἔχω', parsing: '현재 능동 부정사', gloss: '가지는 것', tense: '현재', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'γράφειν', root: 'γράφω', parsing: '현재 능동 부정사', gloss: '쓰는 것', tense: '현재', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'ποιεῖν', root: 'ποιέω', parsing: '현재 능동 부정사', gloss: '행하는 것', tense: '현재', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'ποιῆσαι', root: 'ποιέω', parsing: '부정과거 능동 부정사', gloss: '행한 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'ἐλθεῖν', root: 'ἔρχομαι', parsing: '부정과거 능동 부정사', gloss: '온 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'ἰδεῖν', root: 'ὁράω', parsing: '부정과거 능동 부정사', gloss: '본 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },
  { form: 'λαβεῖν', root: 'λαμβάνω', parsing: '부정과거 능동 부정사', gloss: '받은 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 3 },

  // ============================================================
  // STAGE 4: Advanced forms (~60)
  // ============================================================

  // --- Present Active Participles ---
  { form: 'λύων', root: 'λύω', parsing: '현재 능동 분사 남성 주격 단수', gloss: '푸는 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λύοντος', root: 'λύω', parsing: '현재 능동 분사 남성 속격 단수', gloss: '푸는 (자의)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λύοντες', root: 'λύω', parsing: '현재 능동 분사 남성 주격 복수', gloss: '푸는 (자들)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '복수', stage: 4 },
  { form: 'λύουσα', root: 'λύω', parsing: '현재 능동 분사 여성 주격 단수', gloss: '푸는 (여자)', tense: '현재', voice: '능동', mood: '분사', person: '여성', number: '단수', stage: 4 },
  { form: 'λῦον', root: 'λύω', parsing: '현재 능동 분사 중성 주격 단수', gloss: '푸는 (것)', tense: '현재', voice: '능동', mood: '분사', person: '중성', number: '단수', stage: 4 },
  { form: 'λέγων', root: 'λέγω', parsing: '현재 능동 분사 남성 주격 단수', gloss: '말하는 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ἔχων', root: 'ἔχω', parsing: '현재 능동 분사 남성 주격 단수', gloss: '가진 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'πιστεύων', root: 'πιστεύω', parsing: '현재 능동 분사 남성 주격 단수', gloss: '믿는 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ποιῶν', root: 'ποιέω', parsing: '현재 능동 분사 남성 주격 단수', gloss: '행하는 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ἀκούων', root: 'ἀκούω', parsing: '현재 능동 분사 남성 주격 단수', gloss: '듣는 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },

  // --- Aorist Active Participles ---
  { form: 'λύσας', root: 'λύω', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '푼 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λύσαντος', root: 'λύω', parsing: '부정과거 능동 분사 남성 속격 단수', gloss: '푼 (자의)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λύσασα', root: 'λύω', parsing: '부정과거 능동 분사 여성 주격 단수', gloss: '푼 (여자)', tense: '부정과거', voice: '능동', mood: '분사', person: '여성', number: '단수', stage: 4 },
  { form: 'λῦσαν', root: 'λύω', parsing: '부정과거 능동 분사 중성 주격 단수', gloss: '푼 (것)', tense: '부정과거', voice: '능동', mood: '분사', person: '중성', number: '단수', stage: 4 },
  { form: 'εἰπών', root: 'λέγω', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '말한 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ἐλθών', root: 'ἔρχομαι', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '온 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ἰδών', root: 'ὁράω', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '본 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λαβών', root: 'λαμβάνω', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '받은 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ἀκούσας', root: 'ἀκούω', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '들은 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'πιστεύσας', root: 'πιστεύω', parsing: '부정과거 능동 분사 남성 주격 단수', gloss: '믿은 (자)', tense: '부정과거', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },

  // --- Perfect Active Participles ---
  { form: 'λελυκώς', root: 'λύω', parsing: '완료 능동 분사 남성 주격 단수', gloss: '풀어 놓은 (자)', tense: '완료', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λελυκότος', root: 'λύω', parsing: '완료 능동 분사 남성 속격 단수', gloss: '풀어 놓은 (자의)', tense: '완료', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'πεπιστευκώς', root: 'πιστεύω', parsing: '완료 능동 분사 남성 주격 단수', gloss: '믿어 온 (자)', tense: '완료', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'γεγραφώς', root: 'γράφω', parsing: '완료 능동 분사 남성 주격 단수', gloss: '써 놓은 (자)', tense: '완료', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },

  // --- Present Middle/Passive Participles ---
  { form: 'λυόμενος', root: 'λύω', parsing: '현재 중간/수동 분사 남성 주격 단수', gloss: '풀리는 (자)', tense: '현재', voice: '중간/수동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λυομένη', root: 'λύω', parsing: '현재 중간/수동 분사 여성 주격 단수', gloss: '풀리는 (여자)', tense: '현재', voice: '중간/수동', mood: '분사', person: '여성', number: '단수', stage: 4 },
  { form: 'λυόμενον', root: 'λύω', parsing: '현재 중간/수동 분사 중성 주격 단수', gloss: '풀리는 (것)', tense: '현재', voice: '중간/수동', mood: '분사', person: '중성', number: '단수', stage: 4 },
  { form: 'ἐρχόμενος', root: 'ἔρχομαι', parsing: '현재 중간 분사 남성 주격 단수', gloss: '오는 (자)', tense: '현재', voice: '중간', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'γινόμενος', root: 'γίνομαι', parsing: '현재 중간 분사 남성 주격 단수', gloss: '되는 (자)', tense: '현재', voice: '중간', mood: '분사', person: '남성', number: '단수', stage: 4 },

  // --- Aorist Passive Participles ---
  { form: 'λυθείς', root: 'λύω', parsing: '부정과거 수동 분사 남성 주격 단수', gloss: '풀린 (자)', tense: '부정과거', voice: '수동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'λυθεῖσα', root: 'λύω', parsing: '부정과거 수동 분사 여성 주격 단수', gloss: '풀린 (여자)', tense: '부정과거', voice: '수동', mood: '분사', person: '여성', number: '단수', stage: 4 },
  { form: 'λυθέν', root: 'λύω', parsing: '부정과거 수동 분사 중성 주격 단수', gloss: '풀린 (것)', tense: '부정과거', voice: '수동', mood: '분사', person: '중성', number: '단수', stage: 4 },
  { form: 'γραφείς', root: 'γράφω', parsing: '부정과거 수동 분사 남성 주격 단수', gloss: '기록된 (자)', tense: '부정과거', voice: '수동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'ἐγερθείς', root: 'ἐγείρω', parsing: '부정과거 수동 분사 남성 주격 단수', gloss: '일어난 (자)', tense: '부정과거', voice: '수동', mood: '분사', person: '남성', number: '단수', stage: 4 },
  { form: 'βαπτισθείς', root: 'βαπτίζω', parsing: '부정과거 수동 분사 남성 주격 단수', gloss: '세례받은 (자)', tense: '부정과거', voice: '수동', mood: '분사', person: '남성', number: '단수', stage: 4 },

  // --- Mi-verbs: δίδωμι ---
  { form: 'δίδωμι', root: 'δίδωμι', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 준다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 4 },
  { form: 'δίδως', root: 'δίδωμι', parsing: '현재 능동 직설법 2인칭 단수', gloss: '네가 준다', tense: '현재', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 4 },
  { form: 'δίδωσιν', root: 'δίδωμι', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 준다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'διδόασιν', root: 'δίδωμι', parsing: '현재 능동 직설법 3인칭 복수', gloss: '그들이 준다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 4 },
  { form: 'ἔδωκεν', root: 'δίδωμι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 주었다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'δοῦναι', root: 'δίδωμι', parsing: '부정과거 능동 부정사', gloss: '준 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 4 },
  { form: 'διδούς', root: 'δίδωμι', parsing: '현재 능동 분사 남성 주격 단수', gloss: '주는 (자)', tense: '현재', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 4 },

  // --- Mi-verbs: τίθημι ---
  { form: 'τίθημι', root: 'τίθημι', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 놓는다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 4 },
  { form: 'τίθησιν', root: 'τίθημι', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 놓는다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'ἔθηκεν', root: 'τίθημι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 놓았다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'θεῖναι', root: 'τίθημι', parsing: '부정과거 능동 부정사', gloss: '놓은 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 4 },

  // --- Mi-verbs: ἵστημι ---
  { form: 'ἵστημι', root: 'ἵστημι', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 세운다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 4 },
  { form: 'ἵστησιν', root: 'ἵστημι', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 세운다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'ἔστησεν', root: 'ἵστημι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 세웠다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'ἔστη', root: 'ἵστημι', parsing: '부정과거(2) 능동 직설법 3인칭 단수', gloss: '그가 섰다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'στῆναι', root: 'ἵστημι', parsing: '부정과거(2) 능동 부정사', gloss: '선 것', tense: '부정과거', voice: '능동', mood: '부정사', stage: 4 },

  // --- Mi-verbs: ἀφίημι ---
  { form: 'ἀφίημι', root: 'ἀφίημι', parsing: '현재 능동 직설법 1인칭 단수', gloss: '내가 용서한다', tense: '현재', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 4 },
  { form: 'ἀφίησιν', root: 'ἀφίημι', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 용서한다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'ἀφῆκεν', root: 'ἀφίημι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 용서하였다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 4 },

  // --- Subjunctive (additional) ---
  { form: 'λύωμεν', root: 'λύω', parsing: '현재 능동 가정법 1인칭 복수', gloss: '우리가 풀자', tense: '현재', voice: '능동', mood: '가정법', person: '1', number: '복수', stage: 4 },
  { form: 'λύσωμεν', root: 'λύω', parsing: '부정과거 능동 가정법 1인칭 복수', gloss: '우리가 풀자', tense: '부정과거', voice: '능동', mood: '가정법', person: '1', number: '복수', stage: 4 },
  { form: 'ἔχωμεν', root: 'ἔχω', parsing: '현재 능동 가정법 1인칭 복수', gloss: '우리가 갖자', tense: '현재', voice: '능동', mood: '가정법', person: '1', number: '복수', stage: 4 },
  { form: 'γένηται', root: 'γίνομαι', parsing: '부정과거 중간 가정법 3인칭 단수', gloss: '그것이 되도록', tense: '부정과거', voice: '중간', mood: '가정법', person: '3', number: '단수', stage: 4 },

  // --- Imperative ---
  { form: 'λῦσον', root: 'λύω', parsing: '부정과거 능동 명령법 2인칭 단수', gloss: '풀어라', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },
  { form: 'λύσατε', root: 'λύω', parsing: '부정과거 능동 명령법 2인칭 복수', gloss: '풀어라(너희)', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '복수', stage: 4 },
  { form: 'λῦε', root: 'λύω', parsing: '현재 능동 명령법 2인칭 단수', gloss: '(계속) 풀어라', tense: '현재', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },
  { form: 'πίστευε', root: 'πιστεύω', parsing: '현재 능동 명령법 2인칭 단수', gloss: '(계속) 믿어라', tense: '현재', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },
  { form: 'πίστευσον', root: 'πιστεύω', parsing: '부정과거 능동 명령법 2인칭 단수', gloss: '믿어라', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },
  { form: 'πιστεύσατε', root: 'πιστεύω', parsing: '부정과거 능동 명령법 2인칭 복수', gloss: '믿어라(너희)', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '복수', stage: 4 },
  { form: 'γράψον', root: 'γράφω', parsing: '부정과거 능동 명령법 2인칭 단수', gloss: '써라', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },
  { form: 'εἰπέ', root: 'λέγω', parsing: '부정과거 능동 명령법 2인칭 단수', gloss: '말하라', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },
  { form: 'ἐλθέ', root: 'ἔρχομαι', parsing: '부정과거 능동 명령법 2인칭 단수', gloss: '오라', tense: '부정과거', voice: '능동', mood: '명령법', person: '2', number: '단수', stage: 4 },

  // --- Perfect Middle/Passive ---
  { form: 'λέλυμαι', root: 'λύω', parsing: '완료 중간/수동 직설법 1인칭 단수', gloss: '내가 풀려 있다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '1', number: '단수', stage: 4 },
  { form: 'λέλυσαι', root: 'λύω', parsing: '완료 중간/수동 직설법 2인칭 단수', gloss: '네가 풀려 있다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '2', number: '단수', stage: 4 },
  { form: 'λέλυται', root: 'λύω', parsing: '완료 중간/수동 직설법 3인칭 단수', gloss: '그가 풀려 있다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'γέγραπται', root: 'γράφω', parsing: '완료 중간/수동 직설법 3인칭 단수', gloss: '기록되어 있다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'πεπλήρωται', root: 'πληρόω', parsing: '완료 중간/수동 직설법 3인칭 단수', gloss: '성취되었다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '3', number: '단수', stage: 4 },
  { form: 'βεβάπτισμαι', root: 'βαπτίζω', parsing: '완료 중간/수동 직설법 1인칭 단수', gloss: '내가 세례받아 있다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '1', number: '단수', stage: 4 },
  { form: 'ἐγήγερται', root: 'ἐγείρω', parsing: '완료 중간/수동 직설법 3인칭 단수', gloss: '그가 일으켜져 있다', tense: '완료', voice: '중간/수동', mood: '직설법', person: '3', number: '단수', stage: 4 },

  // --- Optative ---
  { form: 'λύοι', root: 'λύω', parsing: '현재 능동 기원법 3인칭 단수', gloss: '그가 풀기를', tense: '현재', voice: '능동', mood: '기원법', person: '3', number: '단수', stage: 4 },
  { form: 'γένοιτο', root: 'γίνομαι', parsing: '부정과거 중간 기원법 3인칭 단수', gloss: '그것이 되기를', tense: '부정과거', voice: '중간', mood: '기원법', person: '3', number: '단수', stage: 4 },
  { form: 'εἴη', root: 'εἰμί', parsing: '현재 능동 기원법 3인칭 단수', gloss: '그가 있기를', tense: '현재', voice: '능동', mood: '기원법', person: '3', number: '단수', stage: 4 },

  // --- Additional infinitives ---
  { form: 'λελυκέναι', root: 'λύω', parsing: '완료 능동 부정사', gloss: '풀어 놓은 것', tense: '완료', voice: '능동', mood: '부정사', stage: 4 },
  { form: 'λυθῆναι', root: 'λύω', parsing: '부정과거 수동 부정사', gloss: '풀린 것', tense: '부정과거', voice: '수동', mood: '부정사', stage: 4 },
  { form: 'λύεσθαι', root: 'λύω', parsing: '현재 중간/수동 부정사', gloss: '풀리는 것', tense: '현재', voice: '중간/수동', mood: '부정사', stage: 4 },
  { form: 'γενέσθαι', root: 'γίνομαι', parsing: '부정과거 중간 부정사', gloss: '된 것', tense: '부정과거', voice: '중간', mood: '부정사', stage: 4 },

  // ============================================================
  // STAGE 5: Forms from actual texts (~30)
  // ============================================================

  // --- Irregular verbs ---
  { form: 'οἶδα', root: 'οἶδα', parsing: '완료 능동 직설법 1인칭 단수', gloss: '내가 안다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '단수', stage: 5 },
  { form: 'οἶδας', root: 'οἶδα', parsing: '완료 능동 직설법 2인칭 단수', gloss: '네가 안다', tense: '완료', voice: '능동', mood: '직설법', person: '2', number: '단수', stage: 5 },
  { form: 'οἶδεν', root: 'οἶδα', parsing: '완료 능동 직설법 3인칭 단수', gloss: '그가 안다', tense: '완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'οἴδαμεν', root: 'οἶδα', parsing: '완료 능동 직설법 1인칭 복수', gloss: '우리가 안다', tense: '완료', voice: '능동', mood: '직설법', person: '1', number: '복수', stage: 5 },
  { form: 'ᾔδει', root: 'οἶδα', parsing: '과거완료 능동 직설법 3인칭 단수', gloss: '그가 알고 있었다', tense: '과거완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'εἰδέναι', root: 'οἶδα', parsing: '완료 능동 부정사', gloss: '아는 것', tense: '완료', voice: '능동', mood: '부정사', stage: 5 },
  { form: 'εἰδώς', root: 'οἶδα', parsing: '완료 능동 분사 남성 주격 단수', gloss: '아는 (자)', tense: '완료', voice: '능동', mood: '분사', person: '남성', number: '단수', stage: 5 },

  { form: 'φησίν', root: 'φημί', parsing: '현재 능동 직설법 3인칭 단수', gloss: '그가 말한다', tense: '현재', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἔφη', root: 'φημί', parsing: '미완료 능동 직설법 3인칭 단수', gloss: '그가 말했다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },

  { form: 'κεῖται', root: 'κεῖμαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그것이 놓여 있다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'κείμενον', root: 'κεῖμαι', parsing: '현재 중간 분사 중성 주격 단수', gloss: '놓여 있는 (것)', tense: '현재', voice: '중간', mood: '분사', person: '중성', number: '단수', stage: 5 },

  // --- Compound verbs ---
  { form: 'ἀπέρχεται', root: 'ἀπέρχομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 떠나간다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἀπῆλθεν', root: 'ἀπέρχομαι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 떠나갔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'εἰσέρχεται', root: 'εἰσέρχομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 들어온다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'εἰσῆλθεν', root: 'εἰσέρχομαι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 들어왔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἐξέρχεται', root: 'ἐξέρχομαι', parsing: '현재 중간 직설법 3인칭 단수', gloss: '그가 나간다', tense: '현재', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἐξῆλθεν', root: 'ἐξέρχομαι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 나갔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἀπεκρίθη', root: 'ἀποκρίνομαι', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그가 대답했다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'προσῆλθεν', root: 'προσέρχομαι', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 다가왔다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },

  // --- Forms from John ---
  { form: 'ἐγένετο', root: 'γίνομαι', parsing: '부정과거 중간 직설법 3인칭 단수', gloss: '그것이 되었다', tense: '부정과거', voice: '중간', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἐθεάσαντο', root: 'θεάομαι', parsing: '부정과거 중간 직설법 3인칭 복수', gloss: '그들이 바라보았다', tense: '부정과거', voice: '중간', mood: '직설법', person: '3', number: '복수', stage: 5 },
  { form: 'ἐσκήνωσεν', root: 'σκηνόω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 거하셨다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },

  // --- Forms from Romans ---
  { form: 'ἐδικαιώθημεν', root: 'δικαιόω', parsing: '부정과거 수동 직설법 1인칭 복수', gloss: '우리가 의롭다 함을 받았다', tense: '부정과거', voice: '수동', mood: '직설법', person: '1', number: '복수', stage: 5 },
  { form: 'δικαιοῦται', root: 'δικαιόω', parsing: '현재 중간/수동 직설법 3인칭 단수', gloss: '그가 의롭다 함을 받는다', tense: '현재', voice: '중간/수동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἐλογίσθη', root: 'λογίζομαι', parsing: '부정과거 수동 직설법 3인칭 단수', gloss: '그것이 여겨졌다', tense: '부정과거', voice: '수동', mood: '직설법', person: '3', number: '단수', stage: 5 },

  // --- Forms from Mark ---
  { form: 'ἐκήρυσσεν', root: 'κηρύσσω', parsing: '미완료 능동 직설법 3인칭 단수', gloss: '그가 선포하고 있었다', tense: '미완료', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἐθεράπευσεν', root: 'θεραπεύω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 치유하였다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἠκολούθησαν', root: 'ἀκολουθέω', parsing: '부정과거 능동 직설법 3인칭 복수', gloss: '그들이 따랐다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '복수', stage: 5 },

  // --- LXX / additional textual forms ---
  { form: 'ἐποίησεν', root: 'ποιέω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 만드셨다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'εὐλόγησεν', root: 'εὐλογέω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 축복하셨다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
  { form: 'ἐδόξασεν', root: 'δοξάζω', parsing: '부정과거 능동 직설법 3인칭 단수', gloss: '그가 영화롭게 하셨다', tense: '부정과거', voice: '능동', mood: '직설법', person: '3', number: '단수', stage: 5 },
];
