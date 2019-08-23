// Project: thai2karaoke
// Created: Comdevx
// Email: comdevx@gmail.com
// Started: 2017/08/04 21.00
// Facebook: http://www.fb.com/comdevx
// สามารถสนับสนุนได้นะครับ
// BTC: 13owVDCcYykj853S5W37Ys7np97jvCtL7Z
// ETH: 0xa751F70e862E3747e435430105bbE6db20C828C9
// LTC: LNP95PsUgtzYghK5Ada7w3hHK2WwEYSSwn
// XRP: rp7Fq2NQVRJxQJvUZ4o8ZzsTSocvgYoBbs

const feedbackModel = require('./configdb');
var wordList = [
//   0    1    2    3    4     5    6    7
    'ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ',//0-7
//   8    9    10   11    12   13   14   15
    'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ',//8-15
//   16   17   18   19    20   21   22   23
    'ฑ', 'ฒ', 'ณ','ด',  'ต', 'ถ', 'ท', 'ธ',//16-23
//   24   25   26   27    28   29   30   31
    'น', 'บ', 'ป', 'ผ',  'ฝ', 'พ', 'ฟ', 'ภ',//24-31
//   32   33   34   35    36   37   38   39
    'ม', 'ย', 'ร', 'ล',   'ว', 'ศ', 'ษ', 'ส',//32-39
//   40   41   42   43    44   45   46   47
    'ห', 'ฬ', 'อ', 'ฮ',  'ฤ', 'ฤๅ', 'ฦ', 'ฦา',//40-47
    'ะ',//อะ 48
    'ั',//อั    49
    'า',//อา   50
    'ำ',//อำ   51
    'ิ',//อิ   52
    'ี',//อี   53
    'ึ',//อึ   54
    'ื',//อื   55
    'ุ',//อุ   56
    'ู',//อู   57
    'เ',//เอ   58
    '็',//อ็     59   
    'โ',//โอ   60
    '์',//อ์      61
    'แ',//แอ    62
    'ใ',//       63
    'ไ',//       64
    '้',//   65
];


exports.thai2karaoke = function () {
    return function (req, res) {
        var text = req.body.text;    
        
        text = text.replace(/วุฒิพงค์ /g, "WuttiPong"); 
        text = text.replace(/ธีรพงค์/g, "TheeRaPong");   
        text = text.replace(/เอกราช/g, "AekKaRach");   
        text = text.replace(/บุษบา/g, "BudSaBa");
        text = text.replace(/อินทร์/g, "In");
        text = text.replace(/มนตรี/g, "Montree");
       text = text.replace(/ธนากร/g, "TaNaKorn");
       text = text.replace(/ไรยวงษ์/g, "RaiYaWong");
       text = text.replace(/นริศรา/g, "NaRiSara");
       text = text.replace(/เฉลิม/g, "chaloem");
       text = text.replace(/วรรณภูมิ/g, "wannapoon"); 
       text = text.replace(/บูรภา/g, "burapha");
       text = text.replace(/ฉลอง/g, "chalong");
       text = text.replace(/ชินวัตร/g, "chinnawat");
       text = text.replace(/ปัญญา/g, "panya");
       text = text.replace(/เกียรติ/g, "kiat");
       text = text.replace(/เกียร/g, "kiat"); 
        text = text.replace(/ณัฐ/g, "Nutta");
        text = text.replace(/ศุภชัย/g, "SuPaChai");
        text = text.replace(/ศรัณ/g, "SaRan");
        text = text.replace(/ยพง/g, "YaPong");
        text = text.replace(/พล/g, "Phon");
        text = text.replace(/ธวัช/g, "thawat");   
        text = text.replace(/คฑา/g, "Khatha");
        text = text.replace(/ภูมิ/g, "pum");
        text = text.replace(/มินทร์/g, "min");
        text = text.replace(/ทรราช/g, "torarad");
        text = text.replace(/นูญ/g, "nun"); 
        text = text.replace(/ธรรม/g, "tham"); 
        text = text.replace(/วุฒิ/g, "wut");
        text = text.replace(/ประ/g, "pra");
        text = text.replace(/วัตร/g, "wat");
        text = text.replace(/ขวัญ/g, "khwan");  
        text = text.replace(/วรรณ/g, "wan");
        text = text.replace(/กมล/g, "kamon");
        text = text.replace(/ทูร/g, "thun");
        text = text.replace(/เชียร/g, "chian");
        text = text.replace(/มง/g, "mong");
        text = text.replace(/คล/g, "khon");
        text = text.replace(/กฤษ/g, "Krit");
        text = text.replace(/กิจ/g, "Krit"); 
        text = text.replace(/ร็อก/g, "lok");
        text = text.replace(/ร็อค/g, "rock");
        text = text.replace(/ล็อค/g, "rock");
        text = text.replace(/จง/g, "jong");
       text = text.replace(/ภร/g, "Pron");
        text = text.replace(/ศรี/g, "See");
        text = text.replace(/ภูว/g, "PuWa");   
        text = text.replace(/ศิษฏ์/g, "Sin");  
        text = text.replace(/กาญ/g, "Kan"); 
        text = text.replace(/พนม/g, "PaNom"); 
        text = text.replace(/เลิศ/g, "Lert");
        text = text.replace(/วรุณ/g, "WaRoon");
        text = text.replace(/ปวิธ/g, "PaWith");
        text = text.replace(/ณรงค์/g, "NaRong");
        text = text.replace(/วุธ/g, "Wut");
        text = text.replace(/พงค์/g, "Pong");
        text = text.replace(/พงศ์/g, "Pong");
      text = text.replace(/พงษ์/g, "Pong");
                         //    text = text.replace(/NaN/g, "NaN");
                           //    text = text.replace(/NaN/g, "NaN");
    text = text.replace(/เอก/g, "Aek");
                             text = text.replace(/ณพ /g, "Nop ");
                             text = text.replace(/ยุ/g, "yu");
                              text = text.replace(/กำ/g, "Gum");
                             text = text.replace(/คง/g, "kong");
       text = text.replace(/จักร/g, "Jak");
        text = text.replace(/ฑ/g, "t");   
        text = text.replace(/ฐ/g, "d");   
        text = text.replace(/ก์/g, "");  
     // last word   
        text = text.replace(/นก/g, "nok");
        text = text.replace(/กบ/g, "kob");
        
        
        text = wordCut(text);
        var result = '';
     
        for (i = 0; i < text.length;) {
             if(text[i] === wordList[65] && text[i-2] === wordList[26] ){
               // console.log(text[i-2],i)
                result += 'o';
               i = i + 1;
            }else if (text[i] === wordList[0]) {
                result += 'k';
                i = i + 1;
            }else if (text[i] === wordList[42] && text[i + 3] === wordList[42]) {
                result += 'a';
                i = i + 1;
            } else if (text[i] && text[i + 1] === wordList[61] || text[i] && text[i + 1] === wordList[52] && text[i + 2] === wordList[61]) {
                result += '';    
                i = i + 2;
            }else if (text[i] === wordList[0] && text[i + 1] === wordList[34] && text[i + 2] === wordList[34] && text[i + 3] === wordList[32]) {
                result += letter(text[i]) + 'amma';
                i = i + 4;
         //   } else if (text[i] === wordList[34] && text[i + 1] === wordList[34]) {
          //      result += 'an';
              //  i = i + 2;
            } else if (text[i] === wordList[51]) {
                result += 'um';
                i = i + 1
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[48]) {
                result += letter(text[i + 1]) + 'e';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[59]) {
                result += letter(text[i + 1] + text[i + 2]) + 'e';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[59]) {
                result += letter(text[i + 1]) + 'e';
                i = i + 3;
            } else if (text[i] === wordList[62] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'ae';
                i = i + 4;
            } else if (text[i] === wordList[62] && text[i + 2] === wordList[48]) {
                result += letter(text[i + 1]) + 'ae';
                i = i + 3;
            } else if (text[i] === wordList[62]) {
                result += letter(text[i + 1]) + 'ae';
                i = i + 2;
            } else if (text[i] === wordList[60] && text[i + 2] === wordList[34]) {
                result += letter(text[i + 1]) + 'ora';
               i = i + 3;
            } else if (text[i] === wordList[60] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 4;
            } else if (text[i] === wordList[60] && text[i + 2] === wordList[48]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[50] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 4;
            } else if (text[i] === wordList[60]) {
                result += letter(text[i + 1]) + 'o';
                i = i + 2;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[42] && text[i + 3] === wordList[48]) {
                result += letter(text[i + 1]) + 'oe';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[52]) {
                result += letter(text[i + 1]) + 'oe' + letter(text[i + 3]);
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[52]) {
                result += letter(text[i + 1]) + 'oe';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] !== wordList[55] && text[i + 3] === wordList[42]) {
                result += letter(text[i + 1] + text[i + 2]) + letter(text[i + 2]) + 'oe';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[42]) {
                result += letter(text[i + 1]) + 'oe';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[53] && text[i + 3] === wordList[33] && text[i + 4] === wordList[48]) {
                result += letter(text[i + 1]) + 'ia';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[53] && text[i + 4] === wordList[33]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'ia';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[53] && text[i + 3] === wordList[33]) {
                result += letter(text[i + 1]) + 'ia';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[55] && text[i + 3] === wordList[42] && text[i + 4] === wordList[33]) {
                result += letter(text[i + 1]) + 'ueai';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[55] && text[i + 3] === wordList[42] && text[i + 4] === wordList[48]) {
                result += letter(text[i + 1]) + 'uea';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[55] && text[i + 4] === wordList[42]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'uea';
                i = i + 5;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[55] && text[i + 3] === wordList[42]) {
                result += letter(text[i + 1]) + 'uea';
                i = i + 4;
            } else if (text[i] === wordList[49] && text[i + 1] === wordList[36] && text[i + 2] === wordList[48]) {
                result += 'ua';
                i = i + 3;
            } else if (text[i] && text[i + 1] === wordList[36] && text[i + 2] === wordList[6]) {
                result += letter(text[i]) + 'uang';
                i = i + 3;
            } else if (text[i] === wordList[49] && text[i + 1] === wordList[36]) {
                result += 'ua';
                i = i + 2;
            } else if (text[i] && text[i + 1] === wordList[36] && text[i + 2] === wordList[24]) {
                result += letter(text[i]) + 'uan';
                i = i + 3;
            } else if (text[i] === wordList[63] && text[i + 2] === wordList[34] || text[i] === wordList[64] && text[i + 2] === wordList[34]) {
                result += letter(text[i + 1]) + letter(text[i + 2]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 1] === wordList[36] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'aiy';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 2] === wordList[24]) {
                result += letter(text[i + 1] + text[i + 2]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[64] && text[i + 2] === wordList[32]) {
                result += letter(text[i + 1] + text[i + 2]) + 'ai';
                i = i + 3;
            } else if (text[i] === wordList[63] || text[i] === wordList[64]) {
                result += letter(text[i + 1]) + 'ai';
                i = i + 2;
            } else if (text[i] === wordList[49] && text[i + 1] === wordList[33]) {
                result += 'ai';
                i = i + 2;
            } else if (text[i] === wordList[50] && text[i + 1] === wordList[33]) {
                result += 'ai';
                i = i + 2;
            } else if (text[i] === wordList[58] && text[i + 3] === wordList[50]) {
                result += letter(text[i + 1]) + 'ao';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[50]) {
                result += letter(text[i + 1]) + 'ao';
                i = i + 3;
            } else if (text[i] === wordList[50] && text[i + 1] === wordList[36]) {
                result += 'ao';
                i = i + 2;
            } else if (text[i] === wordList[56] && text[i + 1] === wordList[33]) {
                result += 'ui';
                i = i + 2;
            } else if (text[i] === wordList[60] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'oi';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[33]) {
                result += letter(text[i + 1]) + 'oei';
                i = i + 3;
            } else if (text[i] === wordList[36] && text[i + 1] === wordList[33]) {
                result += 'uai';
                i = i + 2;
            } else if (text[i] === wordList[52] && text[i + 1] === wordList[36]) {
                result += 'io';
                i = i + 2;
  /* (- ้) ,i-1 != (ต) ,i-1 != (ไ,ใ) */    }  else if ((text[i-1] == wordList[20])  && text[i] === wordList[65] &&  text[i-2] != wordList[63]) {
               // console.log(text[i-1],i)
                    result += 'o';
                   i = i + 1;
               
            }else if ((text[i-1] != wordList[64] || text[i-1] !=  wordList[63])  && text[i] === wordList[65]  ) {
              //  console.log(text[i-1],i)
                    result += '';
                   i = i + 1;
               
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[59] && text[i + 3] === wordList[36]) {
                result += letter(text[i + 1]) + 'eo';
                i = i + 4;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[36]) {
                result += letter(text[i + 1]) + 'eo';
                i = i + 3;
            } else if (text[i] === wordList[62] && text[i + 2] === wordList[59] && text[i + 3] === wordList[36]) {
                result += letter(text[i + 1]) + 'aeo';
                i = i + 4;
            } else if (text[i] === wordList[62] && text[i + 2] === wordList[36]) {
                result += letter(text[i + 1]) + 'aeo';
                i = i + 3;
            } else if (text[i] === wordList[58] && text[i + 2] === wordList[53] && text[i + 3] === wordList[33] && text[i + 4] === wordList[36]) {
                result += letter(text[i + 1]) + 'iao';
                i = i + 5;
      //      } else if (text[i] && text[i + 1] === wordList[50] && text[i + 2] === wordList[12] || text[i] && text[i + 1] === wordList[50] && text[i + 2] === wordList[34]) {
        //        result += letter(text[i]) + 'an';
         //       i = i + 3;
            } else if (text[i] === wordList[48] || text[i] === wordList[49] || text[i] === wordList[50]) {
                result += 'a';
                i = i + 1;
            }else if (text[i] ===  wordList[53]) {
                result += 'ee';
                i = i + 1;
            } else if (text[i] === wordList[52])  {
                result += 'i';
                i = i + 1;
            } else if (text[i] === wordList[17]) {
                result += 't';
                i = i + 1;
            } else if (text[i] === wordList[54] || text[i] === wordList[55]) {
                result += 'ue';
                i = i + 1;
            } else if (text[i] === wordList[56] || text[i] === wordList[57]) {
                result += 'u';
                i = i + 1;
            } else if (text[i] === wordList[58]) {
                result += letter(text[i + 1]) + 'e';
                i = i + 2;
                // } else if (text[i] && text[i + 1] && text[i + 2] === wordList[52]) {
                //     result += letter(text[i]) + 'a';
                //     i = i + 1;
            } else if (text[i] && text[i + 1] && text[i + 2] === wordList[18] && text[i + 3] === wordList[61]) {
                result += letter(text[i]) + letter(text[i + 1]) + '';
                i = i + 2;
            } else if (text[i] === wordList[0] && text[i + 1] === wordList[19]) {
                result += letter(text[i]) + 'od';
                i = i + 2;
            } else if (text[i] === wordList[35] && text[i + 1] === wordList[32]|| text[i] === wordList[34] && text[i + 1] === wordList[32]|| text[i] === wordList[39] && text[i + 1] === wordList[32]) {
                result += letter(text[i]) + 'om';
                i = i + 2;
         //   } else if (text[i] === wordList[20] && text[i + 1] === wordList[24] || text[i] === wordList[3] && text[i + 1] === wordList[24] || text[i] === wordList[38] && text[i + 1] === wordList[34] || text[i] === wordList[0] && text[i + 1] === wordList[34]) {
          //      result += letter(text[i]) + 'on';
            //  i = i + 2;
            } else if (text[i] === wordList[42] && text[i + 1] === wordList[33]) {
                result += 'y';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[24]) {
                result += 'n';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[32]) {
                result += 'm';
                i = i + 2;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[35]) {
                result += 'l';
                i = i + 2;
         // } else if (text[i+1] === wordList[34] && text[i] === wordList[34]) {
           //     result += letter(text[i]) + 'ra';///
             //   i = i + 3;
  /* บรร จรร วรร กรร  อรร */          
            } else if (text[i] === wordList[34] && text[i+1] === wordList[34]) {
               // result += letter(text[i])
                result +=   'un'; ///
                i = i + 2;
            }else if (text[i]  === wordList[34]) {
                result += 'r';    
                i = i + 1;
            } else if (text[i] === wordList[40] && text[i + 1] === wordList[34]) {
                result += 'r';
                i = i + 2;
            } else if (text[i] === wordList[39] && text[i + 1] === wordList[32]&& text[i + 2] === wordList[49]) {
                result += 'sa';
                i = i + 1;
            } else if (text[i] && text[i + 1] === wordList[42] && text[i + 2] === wordList[33]) {
                result += letter(text[i]) + 'oy';
                i = i + 3;
            } else if (text[i] && text[i + 1] === wordList[18] && text[i + 2] === wordList[48]) {
                result += letter(text[i]) + 'ana';
                i = i + 3;
            }  else if (text[i] === wordList[34]) {
                result += letter(text[i]) + 'R';
                i = i + 1;
            }  else if (text[i] === wordList[22] && text[i + 1] === wordList[40] && text[i + 2] === wordList[50] && text[i + 3] === wordList[34]) {
                result += 'thahran';
                i = i + 4;
            } else {
                result += letter(text[i]);
                i = i + 1;
            }
        }
       
        var result = check(result);
        req.body.data = result;
        //console.log(req.body);

       
      feedbackModel.create(req.body, (err,doc)=>{

        res.status(200).json({
           status: true,
            text: text,
            data: result, 
       });
    });
        
        
      
       
    }
   
}



function wordCut(val) {
    var chack = [];
    var sara = [
        '่',//อ่
     //   '้',//อ้
        '๊',//อ๊
        '๋',//อ๋
    ];
    var double = [];
    var result = '';
    for (i = 0; i < val.length; i++) {
         if (sara[0] === val[i] || sara[1] === val[i] || sara[2] === val[i] || sara[3] === val[i]) {
            result += '';
            // } else if (val[i] && sara[4] === val[i + 1]) { //check letter + -์ if have to remove
             //    result += '';
             //   i = i + 1;
        }  else {
            result += val[i];
            double[0] = val[i];
        }
    }
    return result;
}

function check(val) {
    var result = '';
    for (i = 0; i < val.length; i++) {
        if (val[i] === wordList[65]) { //  ้
            result += 'i';
        } else if (val[i] === wordList[61]) {
            result += '';
        } else {
            result += val[i];
        }
    }
    return result;
}

function letter(val) {
   // console.log(val);
    if (val === wordList[0]) {
        result = 'K';
    }else if (val === wordList[34]) {
        result = 'R';
    }else if (val === wordList[38] ) {
        result = 'Sa';
    }else if (val === wordList[31] ) {
        result = 'P';
    } else if (val === wordList[1] || val === wordList[2] || val === wordList[3] || val === wordList[4] || val === wordList[5]) {
        result = 'Kh';
    } else if (val === wordList[6]) {
        result = 'ng';
    }else if (val === wordList[7] ) {
        result = 'j';
    }  else if (val === wordList[8] || val === wordList[9] || val === wordList[11]) {
        result = 'ch';
    } else if (val === wordList[10] || val === wordList[37] || val === wordList[38] || val === wordList[39]) {
        result = 's';
    } else if (val === wordList[12] || val === wordList[33]) {
        result = 'y';
    } else if (val === wordList[13] || val === wordList[19]) {
        result = 'd';
    } else if (val === wordList[14] || val === wordList[20]) {
        result = 't';
    } else if (val === wordList[21] || val === wordList[22] || val === wordList[23]) {
        result = 'th';
    } else if (val === wordList[18] || val === wordList[24]) {
        result = 'n';
    } else if (val === wordList[25]) {
        result = 'b';
    } else if (val === wordList[26]) {
        result = 'p';
    } else if (val === wordList[27] || val === wordList[29] || val === 31) {
        result = 'Ph';
    } else if (val === wordList[28] || val === wordList[30]) {
        result = 'f';
    } else if (val === wordList[32] || val === wordList[40] + wordList[32]) {
        result = 'm';
    }  else if (val === wordList[44] || val === wordList[45]) {
        result = 'rue';
    } else if (val === wordList[35] || val === wordList[41] || val === wordList[40] + wordList[35]) {
        result = 'l';
    } else if (val === wordList[46] || val === wordList[47]) {
        result = 'lue';
    } else if (val === wordList[36]) {
        result = 'w';
    } else if (val === wordList[42]) {
        result = 'O';
    } else if (val === wordList[40] || val === wordList[43]) {
        result = 'h';
    } else if (val === wordList[39] + wordList[32]) {
        result = 'sa';
    } else {
        if (val === ' ') {
            result = ' ';
        }  else{
            result = val;
        }
    }
    return result;
}

