// Every khandan transcribed from Kausar-ul-Ansab (1999), in the order of the book's index.

import { flatten, type BookFamily, type BookKhandan } from './book'
import * as tripolia from './tripolia'
import k55 from './k55-kankoi'
import k49 from './k49-qazi-zada'
import k47 from './k47-kot'
import k44 from './k44-danishmandan'
import k45 from './k45-darbar-kalan'
import k35 from './k35-pachdara'
import k36 from './k36-qazi-zada'
import k30 from './k30-chhewra'
import k19 from './k19-guzri'
import k61 from './k61-usmanpur'
import k60 from './k60-bara-poti'
import k59 from './k59-shahi-chabutra'
import k58 from './k58-darbar-kalan'
import k57 from './k57-darbar-kalan'
import k56 from './k56-kali-pagri'
import k54 from './k54-danishmandan'
import k53 from './k53-darbar-kalan'
import k52 from './k52-chakli'
import k51 from './k51-qazi-zada'
import k50 from './k50-sabungran'
import k42 from './k42-bhooka-qadeem'
import k41 from './k41-gori-kunwan'
import k34 from './k34-bhooka-jafri'
import k32 from './k32-sabungran'
import k31 from './k31-machhar-hatta'
import k27 from './k27-majhpota'
import k26 from './k26-shafat-pota'
import k25 from './k25-guzri'
import k24 from './k24-guzri'
import k23 from './k23-guzri'
import k22 from './k22-guzri'
import k21 from './k21-guzri'
import k17 from './k17-sathi'
import k05 from './k05-darbar-kalan'
import k06 from './k06-darbar-kalan'
import k07 from './k07-darbar-kalan'
import k08 from './k08-darbar-kalan'
import k09 from './k09-darbar-kalan'
import k10 from './k10-darbar-kalan'
import k11 from './k11-darbar-kalan'
import k20 from './k20-guzri'
import k18 from './k18-sathi'
import k16 from './k16-sathi'
import k15 from './k15-sathi'
import k14 from './k14-gher-karam-ali-khan'
import k13 from './k13-sathi'
import k28 from './k28-chhewra'
import k29 from './k29-bagla'
import k46 from './k46-bakhshi'
import k12 from './k12-sathi'
import k39 from './k39-pachdara'
import k40 from './k40-saddo'
import k43 from './k43-aghwanpur'
import k48 from './k48-jarodi'
import k38 from './k38-lakra'
import k37 from './k37-haqqani'

export interface KhandanImport {
  serial: number
  mohalla: string
  // Records get fixed IDs under this prefix, so importing again replaces them
  idPrefix: string
  families: BookFamily[]
}

const KHANDANS: BookKhandan[] = [k05, k06, k07, k08, k09, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19, k20, k21, k22, k23, k24, k25, k26, k27, k28, k29, k30, k31, k32, k34, k35, k36, k37, k38, k39, k40, k41, k42, k43, k44, k45, k46, k47, k48, k49, k50, k51, k52, k53, k54, k55, k56, k57, k58, k59, k60, k61]

export const IMPORTS: KhandanImport[] = [
  {
    serial: 33,
    mohalla: tripolia.MOHALLA,
    idPrefix: 'kaa1999-tripolia-',
    families: tripolia.FAMILIES.map((f) => (f.parent ? f : { ...f, father: tripolia.ROOT_FATHER })),
  },
  ...KHANDANS.map((k) => ({
    serial: k.serial,
    mohalla: k.mohalla,
    idPrefix: `kaa1999-k${k.serial}-`,
    families: flatten(k),
  })),
].sort((a, b) => a.serial - b.serial)
