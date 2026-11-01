// Checks that English spellings people actually type reduce to the same skeleton as the Urdu names
// in the ledger, and that close spellings pick the right Urdu word.
// Run: npx tsx scripts/check-roman.ts

import { lastWordRaw, nameSkeleton, skeletonMatch, spellingDistance } from '../src/lib/roman'

let failed = 0
const same = (roman: string, urdu: string) => {
  const r = nameSkeleton(roman).join(' ')
  const u = nameSkeleton(urdu).join(' ')
  const ok = r === u
  if (!ok) failed++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${roman.padEnd(28)} ${r.padEnd(14)} ${urdu} ${u}`)
}
const differ = (roman: string, urdu: string) => {
  const ok = nameSkeleton(roman).join(' ') !== nameSkeleton(urdu).join(' ')
  if (!ok) failed++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${roman.padEnd(28)} must NOT match ${urdu}`)
}
const prefers = (roman: string, want: string, over: string) => {
  const ok = spellingDistance(roman, want) < spellingDistance(roman, over)
  if (!ok) failed++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${roman.padEnd(28)} prefers ${want} over ${over}`)
}

console.log('— same skeleton —')
same('Syed Ali Muhammad', 'سید علی محمد')
same('Mohammed Ali', 'محمد علی')
same('Hussain', 'حسین')
same('Hasan', 'حسن')
same('Syeda Fatima Zahra', 'سیدہ فاطمہ زہرا')
same('Fatimah', 'فاطمہ')
same('Zehra Bano', 'زہرا بانو')
same('Noor Sahar', 'نور سحر')
same('Abbas', 'عباس')
same('Askari Hasan', 'عسکری حسن')
same('Ghulam Abbas', 'غلام عباس')
same('Khatoon', 'خاتون')
same('Shah Mehdi', 'شاہ مہدی')
same('Abdullah', 'عبداللہ')
same('Wali Ahmad', 'ولی احمد')
same('Yusuf', 'یوسف')
same('Rizwan Haider', 'رضوان حیدر')
same('Sibte Hasan', 'سبط حسن')
same('Kazim Raza', 'کاظم رضا')
same('Zaheer Abbas Naqvi', 'ظہیر عباس نقوی')
same('Taqi', 'تقی')
same('Anwar Hussain', 'انور حسین')
same('Imam Ali', 'امام علی')
same('Jafri', 'جعفری')
same('Saadat Ali Khan', 'سعادت علی خان')

console.log('— must stay apart —')
differ('Ali', 'ولی')
differ('Wali', 'علی')
differ('Shah', 'سحر')

console.log('— partial typing —')
const q = (typed: string, name: string, want: number) => {
  const got = skeletonMatch(nameSkeleton(typed), nameSkeleton(name), lastWordRaw(typed))
  const ok = got === want
  if (!ok) failed++
  console.log(`${ok ? 'ok  ' : 'FAIL'} "${typed}" vs ${name}: ${got} (want ${want})`)
}
q('Ali Muhammad', 'علی محمد', 0)
q('Ali Muh', 'علی محمد', 1)
q('Muhammad Ali', 'علی محمد', 2)
q('Ali', 'علی رضا', 1)
q('Ali', 'عالم', -1)

console.log('— choosing the spelling —')
prefers('Hussain', 'حسین', 'حسن')
prefers('Husain', 'حسین', 'حسن')
prefers('Zaheer', 'ظہیر', 'ظاہر')
prefers('Hasan', 'حسن', 'حسین')
prefers('Ali', 'علی', 'آل')
prefers('Zaheer', 'ظہیر', 'ظہور')
q('Ali Muh', 'علی امام', 1)
q('Fatimah', 'فاطمہ', 1)

console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed')
process.exit(failed ? 1 : 0)
