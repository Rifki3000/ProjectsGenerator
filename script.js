// ==========================================================================
// RIFKY FONT GENERATOR - MAIN APPLICATION
// ==========================================================================

// ==========================================================================
// DATA: 60+ FONT STYLES
// ==========================================================================
const fontStyles = [
    // FANCY STYLES (15 fonts)
    { id: 1, name: 'Mathematical Bold', category: 'fancy', transform: (text) => text.split('').map(char => {
        const bold = ['𝐀','𝐁','𝐂','𝐃','𝐄','𝐅','𝐆','𝐇','𝐈','𝐉','𝐊','𝐋','𝐌','𝐍','𝐎','𝐏','𝐐','𝐑','𝐒','𝐓','𝐔','𝐕','𝐖','𝐗','𝐘','𝐙','𝐚','𝐛','𝐜','𝐝','𝐞','𝐟','𝐠','𝐡','𝐢','𝐣','𝐤','𝐥','𝐦','𝐧','𝐨','𝐩','𝐪','𝐫','𝐬','𝐭','𝐮','𝐯','𝐰','𝐱','𝐲','𝐳'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? bold[index] : char;
    }).join('') },
    
    { id: 2, name: 'Mathematical Italic', category: 'fancy', transform: (text) => text.split('').map(char => {
        const italic = ['𝐴','𝐵','𝐶','𝐷','𝐸','𝐹','𝐺','𝐻','𝐼','𝐽','𝐾','𝐿','𝑀','𝑁','𝑂','𝑃','𝑄','𝑅','𝑆','𝑇','𝑈','𝑉','𝑊','𝑋','𝑌','𝑍','𝑎','𝑏','𝑐','𝑑','𝑒','𝑓','𝑔','ℎ','𝑖','𝑗','𝑘','𝑙','𝑚','𝑛','𝑜','𝑝','𝑞','𝑟','𝑠','𝑡','𝑢','𝑣','𝑤','𝑥','𝑦','𝑧'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? italic[index] : char;
    }).join('') },
    
    { id: 3, name: 'Mathematical Bold Italic', category: 'fancy', transform: (text) => text.split('').map(char => {
        const boldItalic = ['𝑨','𝑩','𝑪','𝑫','𝑬','𝑭','𝑮','𝑯','𝑰','𝑱','𝑲','𝑳','𝑴','𝑵','𝑶','𝑷','𝑸','𝑹','𝑺','𝑻','𝑼','𝑽','𝑾','𝑿','𝒀','𝒁','𝒂','𝒃','𝒄','𝒅','𝒆','𝒇','𝒈','𝒉','𝒊','𝒋','𝒌','𝒍','𝒎','𝒏','𝒐','𝒑','𝒒','𝒓','𝒔','𝒕','𝒖','𝒗','𝒘','𝒙','𝒚','𝒛'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? boldItalic[index] : char;
    }).join('') },
    
    { id: 4, name: 'Script', category: 'fancy', transform: (text) => text.split('').map(char => {
        const script = ['𝒜','ℬ','𝒞','𝒟','ℰ','ℱ','𝒢','ℋ','ℐ','𝒥','𝒦','ℒ','ℳ','𝒩','𝒪','𝒫','𝒬','ℛ','𝒮','𝒯','𝒰','𝒱','𝒲','𝒳','𝒴','𝒵','𝒶','𝒷','𝒸','𝒹','ℯ','𝒻','ℊ','𝒽','𝒾','𝒿','𝓀','𝓁','𝓂','𝓃','ℴ','𝓅','𝓆','𝓇','𝓈','𝓉','𝓊','𝓋','𝓌','𝓍','𝓎','𝓏'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? script[index] : char;
    }).join('') },
    
    { id: 5, name: 'Bold Script', category: 'fancy', transform: (text) => text.split('').map(char => {
        const boldScript = ['𝓐','𝓑','𝓒','𝓓','𝓔','𝓕','𝓖','𝓗','𝓘','𝓙','𝓚','𝓛','𝓜','𝓝','𝓞','𝓟','𝓠','𝓡','𝓢','𝓣','𝓤','𝓥','𝓦','𝓧','𝓨','𝓩','𝓪','𝓫','𝓬','𝓭','𝓮','𝓯','𝓰','𝓱','𝓲','𝓳','𝓴','𝓵','𝓶','𝓷','𝓸','𝓹','𝓺','𝓻','𝓼','𝓽','𝓾','𝓿','𝔀','𝔁','𝔂','𝔃'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? boldScript[index] : char;
    }).join('') },
    
    { id: 6, name: 'Fraktur', category: 'fancy', transform: (text) => text.split('').map(char => {
        const fraktur = ['𝔄','𝔅','ℭ','𝔇','𝔈','𝔉','𝔊','ℌ','ℑ','𝔍','𝔎','𝔏','𝔐','𝔑','𝔒','𝔓','𝔔','ℜ','𝔖','𝔗','𝔘','𝔙','𝔚','𝔛','𝔜','ℨ','𝔞','𝔟','𝔠','𝔡','𝔢','𝔣','𝔤','𝔥','𝔦','𝔧','𝔨','𝔩','𝔪','𝔫','𝔬','𝔭','𝔮','𝔯','𝔰','𝔱','𝔲','𝔳','𝔴','𝔵','𝔶','𝔷'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? fraktur[index] : char;
    }).join('') },
    
    { id: 7, name: 'Bold Fraktur', category: 'fancy', transform: (text) => text.split('').map(char => {
        const boldFraktur = ['𝕬','𝕭','𝕮','𝕯','𝕰','𝕱','𝕲','𝕳','𝕴','𝕵','𝕶','𝕷','𝕸','𝕹','𝕺','𝕻','𝕼','𝕽','𝕾','𝕿','𝖀','𝖁','𝖂','𝖃','𝖄','𝖅','𝖆','𝖇','𝖈','𝖉','𝖊','𝖋','𝖌','𝖍','𝖎','𝖏','𝖐','𝖑','𝖒','𝖓','𝖔','𝖕','𝖖','𝖗','𝖘','𝖙','𝖚','𝖛','𝖜','𝖝','𝖞','𝖟'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? boldFraktur[index] : char;
    }).join('') },
    
    { id: 8, name: 'Double-struck', category: 'fancy', transform: (text) => text.split('').map(char => {
        const doubleStruck = ['𝔸','𝔹','ℂ','𝔻','𝔼','𝔽','𝔾','ℍ','𝕀','𝕁','𝕂','𝕃','𝕄','ℕ','𝕆','ℙ','ℚ','ℝ','𝕊','𝕋','𝕌','𝕍','𝕎','𝕏','𝕐','ℤ','𝕒','𝕓','𝕔','𝕕','𝕖','𝕗','𝕘','𝕙','𝕚','𝕛','𝕜','𝕝','𝕞','𝕟','𝕠','𝕡','𝕢','𝕣','𝕤','𝕥','𝕦','𝕧','𝕨','𝕩','𝕪','𝕫'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? doubleStruck[index] : char;
    }).join('') },
    
    { id: 9, name: 'Monospace', category: 'fancy', transform: (text) => text.split('').map(char => {
        const monospace = ['𝚊','𝚋','𝚌','𝚍','𝚎','𝚏','𝚐','𝚑','𝚒','𝚓','𝚔','𝚕','𝚖','𝚗','𝚘','𝚙','𝚚','𝚛','𝚜','𝚝','𝚞','𝚟','𝚠','𝚡','𝚢','𝚣','𝙰','𝙱','𝙲','𝙳','𝙴','𝙵','𝙶','𝙷','𝙸','𝙹','𝙺','𝙻','𝙼','𝙽','𝙾','𝙿','𝚀','𝚁','𝚂','𝚃','𝚄','𝚅','𝚆','𝚇','𝚈','𝚉'];
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? monospace[index] : char;
    }).join('') },
    
    { id: 10, name: 'Sans-serif', category: 'fancy', transform: (text) => text.split('').map(char => {
        const sans = ['𝖺','𝖻','𝖼','𝖽','𝖾','𝖿','𝗀','𝗁','𝗂','𝗃','𝗄','𝗅','𝗆','𝗇','𝗈','𝗉','𝗊','𝗋','𝗌','𝗍','𝗎','𝗏','𝗐','𝗑','𝗒','𝗓','𝖠','𝖡','𝖢','𝖣','𝖤','𝖥','𝖦','𝖧','𝖨','𝖩','𝖪','𝖫','𝖬','𝖭','𝖮','𝖯','𝖰','𝖱','𝖲','𝖳','𝖴','𝖵','𝖶','𝖷','𝖸','𝖹'];
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? sans[index] : char;
    }).join('') },
    
    { id: 11, name: 'Sans-serif Bold', category: 'fancy', transform: (text) => text.split('').map(char => {
        const sansBold = ['𝗮','𝗯','𝗰','𝗱','𝗲','𝗳','𝗴','𝗵','𝗶','𝗷','𝗸','𝗹','𝗺','𝗻','𝗼','𝗽','𝗾','𝗿','𝘀','𝘁','𝘂','𝘃','𝘄','𝘅','𝘆','𝘇','𝗔','𝗕','𝗖','𝗗','𝗘','𝗙','𝗚','𝗛','𝗜','𝗝','𝗞','𝗟','𝗠','𝗡','𝗢','𝗣','𝗤','𝗥','𝗦','𝗧','𝗨','𝗩','𝗪','𝗫','𝗬','𝗭'];
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? sansBold[index] : char;
    }).join('') },
    
    { id: 12, name: 'Sans-serif Italic', category: 'fancy', transform: (text) => text.split('').map(char => {
        const sansItalic = ['𝘢','𝘣','𝘤','𝘥','𝘦','𝘧','𝘨','𝘩','𝘪','𝘫','𝘬','𝘭','𝘮','𝘯','𝘰','𝘱','𝘲','𝘳','𝘴','𝘵','𝘶','𝘷','𝘸','𝘹','𝘺','𝘻','𝘈','𝘉','𝘊','𝘋','𝘌','𝘍','𝘎','Η','Ι','𝘑','𝘒','𝘓','Μ','Ν','𝘖','𝘗','𝘘','𝘙','𝘚','Τ','Υ','𝘝','𝘞','𝘟','Υ','Ζ'];
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? sansItalic[index] : char;
    }).join('') },
    
    { id: 13, name: 'Sans-serif Bold Italic', category: 'fancy', transform: (text) => text.split('').map(char => {
        const sansBoldItalic = ['𝙖','𝙗','𝙘','𝙙','𝙚','𝙛','𝙜','𝙝','𝙞','𝙟','𝙠','𝙡','𝙢','𝙣','𝙤','𝙥','𝙦','𝙧','𝙨','𝙩','𝙪','𝙫','𝙬','𝙭','𝙮','𝙯','𝘼','𝘽','𝘾','𝘿','𝙀','𝙁','𝙂','𝙃','𝙄','𝙅','𝙆','𝙇','𝙈','𝙉','𝙊','𝙋','𝙌','𝙍','𝙎','𝙏','𝙐','𝙑','𝙒','𝙓','𝙔','𝙕'];
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? sansBoldItalic[index] : char;
    }).join('') },
    
    { id: 14, name: 'Circled', category: 'fancy', transform: (text) => text.split('').map(char => {
        const circled = ['ⓐ','ⓑ','ⓒ','ⓓ','ⓔ','ⓕ','ⓖ','ⓗ','ⓘ','ⓙ','ⓚ','ⓛ','ⓜ','ⓝ','ⓞ','ⓟ','ⓠ','ⓡ','ⓢ','ⓣ','ⓤ','ⓥ','ⓦ','ⓧ','ⓨ','ⓩ','Ⓐ','Ⓑ','Ⓒ','Ⓓ','Ⓔ','Ⓕ','Ⓖ','Ⓗ','Ⓘ','Ⓙ','Ⓚ','Ⓛ','Ⓜ','Ⓝ','Ⓞ','Ⓟ','Ⓠ','Ⓡ','Ⓢ','Ⓣ','Ⓤ','Ⓥ','Ⓦ','Ⓧ','Ⓨ','Ⓩ'];
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? circled[index] : char;
    }).join('') },
    
    { id: 15, name: 'Parenthesized', category: 'fancy', transform: (text) => text.split('').map(char => {
        const parenthesized = ['⒜','⒝','⒞','⒟','⒠','⒡','⒢','⒣','⒤','⒥','⒦','⒧','⒨','⒩','⒪','⒫','⒬','⒭','⒮','⒯','⒰','⒱','⒲','⒳','⒴','⒵'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? parenthesized[index] : char;
    }).join('') },

    // COOL STYLES (15 fonts)
    { id: 16, name: 'Small Caps', category: 'cool', transform: (text) => text.toUpperCase().split('').map(char => {
        const smallCaps = ['ᴀ','ʙ','ᴄ','ᴅ','ᴇ','ꜰ','ɢ','ʜ','ɪ','ᴊ','ᴋ','ʟ','ᴍ','ɴ','ᴏ','ᴘ','ǫ','ʀ','ꜱ','ᴛ','ᴜ','ᴠ','ᴡ','x','ʏ','ᴢ'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char);
        return index !== -1 ? smallCaps[index] : char;
    }).join('') },
    
    { id: 17, name: 'Superscript', category: 'cool', transform: (text) => text.split('').map(char => {
        const superscript = {
            'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
            'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'ᵟ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ'
        };
        return superscript[char] || char;
    }).join('') },
    
    { id: 18, name: 'Subscript', category: 'cool', transform: (text) => text.split('').map(char => {
        const subscript = {
            '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
            'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ'
        };
        return subscript[char] || char;
    }).join('') },
    
    { id: 19, name: 'Upside Down', category: 'cool', transform: (text) => text.split('').reverse().map(char => {
        const upsideDown = {
            'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ɓ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
            'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ọ', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
        };
        return upsideDown[char] || char;
    }).join('') },
    
    { id: 20, name: 'Fullwidth', category: 'cool', transform: (text) => text.split('').map(char => {
        if (char >= '!' && char <= '~') {
            return String.fromCharCode(char.charCodeAt(0) + 0xFEE0);
        }
        return char;
    }).join('') },
    
    { id: 21, name: 'Regional Indicator', category: 'cool', transform: (text) => text.toUpperCase().split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(127462 + (char.charCodeAt(0) - 65));
        }
        return char;
    }).join('') },
    
    { id: 22, name: 'Mathematical Sans', category: 'cool', transform: (text) => text.split('').map(char => {
        const sansMath = ['𝖺','𝖻','𝖼','𝖽','𝖾','𝖿','𝗀','𝗁','𝗂','𝗃','𝗄','𝗅','𝗆','𝗇','𝗈','𝗉','𝗊','𝗋','𝗌','𝗍','𝗎','𝗏','𝗐','𝗑','𝗒','𝗓'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char);
        return index !== -1 ? sansMath[index] : char;
    }).join('') },
    
    { id: 23, name: 'Tag Cloud', category: 'cool', transform: (text) => text.split('').map(char => {
        if (char >= ' ' && char <= '~') {
            return String.fromCharCode(917760 + char.charCodeAt(0));
        }
        return char;
    }).join('') },
    
    { id: 24, name: 'Morse Code', category: 'cool', transform: (text) => text.toUpperCase().split('').map(char => {
        const morse = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
            'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
            'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
            'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
            '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----'
        };
        return morse[char] ? `${morse[char]} ` : char;
    }).join('') },
    
    { id: 25, name: 'Binary', category: 'cool', transform: (text) => text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    }).join('') },
    
    { id: 26, name: 'Hexadecimal', category: 'cool', transform: (text) => text.split('').map(char => {
        return char.charCodeAt(0).toString(16) + ' ';
    }).join('') },
    
    { id: 27, name: 'Wingdings', category: 'cool', transform: (text) => {
        const wingdings = {
            'A': '✌', 'B': '👌', 'C': '👍', 'D': '👎', 'E': '👊', 'F': '✊', 'G': '👋', 'H': '🖐', 'I': '✋',
            'J': '👆', 'K': '👇', 'L': '👈', 'M': '👉', 'N': '👏', 'O': '🙌', 'P': '🤝', 'Q': '🙏', 'R': '💪',
            'S': '🦵', 'T': '🦶', 'U': '👂', 'V': '👃', 'W': '👁', 'X': '👀', 'Y': '🧠', 'Z': '🫀'
        };
        return text.toUpperCase().split('').map(char => wingdings[char] || char).join('');
    } },
    
    { id: 28, name: 'Emoji', category: 'cool', transform: (text) => {
        const emoji = {
            'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮',
            'J': '🇯', 'K': '🇰', 'L': '🇱', 'M': '🇲', 'N': '🇳', 'O': '🇴', 'P': '🇵', 'Q': '🇶', 'R': '🇷',
            'S': '🇸', 'T': '🇹', 'U': '🇺', 'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾', 'Z': '🇿'
        };
        return text.toUpperCase().split('').map(char => emoji[char] || char).join('');
    } },
    
    { id: 29, name: 'Zalgo', category: 'cool', transform: (text) => {
        const zalgo = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̡', '̢', '̣', '̤', '̥', '̦', '̧', '̨', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'];
        return text.split('').map(char => {
            let result = char;
            for (let i = 0; i < 3; i++) {
                result += zalgo[Math.floor(Math.random() * zalgo.length)];
            }
            return result;
        }).join('');
    } },
    
    { id: 30, name: 'Mirror', category: 'cool', transform: (text) => text.split('').reverse().map(char => {
        const mirror = {
            'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'Ꮈ', 'g': 'ǫ', 'h': 'ʜ', 'i': 'i', 'j': 'į',
            'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ꙅ', 't': 'ƚ',
            'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'ƶ'
        };
        return mirror[char] || char;
    }).join('') },

    // CUTE STYLES (10 fonts)
    { id: 31, name: 'Bubble', category: 'cute', transform: (text) => text.split('').map(char => {
        const bubble = ['ⓐ','ⓑ','ⓒ','ⓓ','ⓔ','ⓕ','ⓖ','ⓗ','ⓘ','ⓙ','ⓚ','ⓛ','ⓜ','ⓝ','ⓞ','ⓟ','ⓠ','ⓡ','ⓢ','ⓣ','ⓤ','ⓥ','ⓦ','ⓧ','ⓨ','ⓩ'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char.toLowerCase());
        return index !== -1 ? bubble[index] : char;
    }).join('') },
    
    { id: 32, name: 'Square', category: 'cute', transform: (text) => text.split('').map(char => {
        const square = ['🄰','🄱','🄲','🄳','🄴','🄵','🄶','🄷','🄸','🄹','🄺','🄻','🄼','🄽','🄾','🄿','🅀','🅁','🅂','🅃','🅄','🅅','🅆','🅇','🅈','🅉'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char.toUpperCase());
        return index !== -1 ? square[index] : char;
    }).join('') },
    
    { id: 33, name: 'Hearts', category: 'cute', transform: (text) => text.split('').map(char => {
        return char + '❤️';
    }).join('') },
    
    { id: 34, name: 'Stars', category: 'cute', transform: (text) => text.split('').map(char => {
        return char + '⭐';
    }).join('') },
    
    { id: 35, name: 'Flowers', category: 'cute', transform: (text) => text.split('').map(char => {
        return char + '🌸';
    }).join('') },
    
    { id: 36, name: 'Rainbow', category: 'cute', transform: (text) => {
        const colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];
        return text.split('').map((char, i) => char + colors[i % colors.length]).join('');
    } },
    
    { id: 37, name: 'Kawaii', category: 'cute', transform: (text) => {
        return '✨ ' + text + ' ✨';
    } },
    
    { id: 38, name: 'Sparkles', category: 'cute', transform: (text) => {
        return '💫 ' + text.split('').join(' 💫 ') + ' 💫';
    } },
    
    { id: 39, name: 'Cute Emoji', category: 'cute', transform: (text) => {
        const emojis = ['🥰', '😊', '🥺', '✨', '💖', '🌸', '🦊', '🐼', '🐨', '🦄'];
        return text.split('').map((char, i) => char + emojis[i % emojis.length]).join('');
    } },
    
    { id: 40, name: 'Candy', category: 'cute', transform: (text) => {
        const candies = ['🍬', '🍭', '🍫', '🍩', '🍪', '🧁'];
        return text.split('').map((char, i) => char + candies[i % candies.length]).join('');
    } },

    // BOLD STYLES (10 fonts)
    { id: 41, name: 'Bold', category: 'bold', transform: (text) => text.split('').map(char => {
        const bold = ['𝗮','𝗯','𝗰','𝗱','𝗲','𝗳','𝗴','𝗵','𝗶','𝗷','𝗸','𝗹','𝗺','𝗻','𝗼','𝗽','𝗾','𝗿','𝘀','𝘁','𝘂','𝘃','𝘄','𝘅','𝘆','𝘇'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char.toLowerCase());
        return index !== -1 ? bold[index] : char;
    }).join('') },
    
    { id: 42, name: 'Heavy', category: 'bold', transform: (text) => text.split('').map(char => {
        return char + '̲';
    }).join('') },
    
    { id: 43, name: 'Double Underline', category: 'bold', transform: (text) => text.split('').map(char => {
        return char + '̳';
    }).join('') },
    
    { id: 44, name: 'Strike Through', category: 'bold', transform: (text) => text.split('').map(char => {
        return char + '̶';
    }).join('') },
    
    { id: 45, name: 'Crossed', category: 'bold', transform: (text) => text.split('').map(char => {
        return char + '̷';
    }).join('') },
    
    { id: 46, name: 'Bold Script', category: 'bold', transform: (text) => text.split('').map(char => {
        const boldScript = ['𝓪','𝓫','𝓬','𝓭','𝓮','𝓯','𝓰','𝓱','𝓲','𝓳','𝓴','𝓵','𝓶','𝓷','𝓸','𝓹','𝓺','𝓻','𝓼','𝓽','𝓾','𝓿','𝔀','𝔁','𝔂','𝔃'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char.toLowerCase());
        return index !== -1 ? boldScript[index] : char;
    }).join('') },
    
    { id: 47, name: 'Bold Fraktur', category: 'bold', transform: (text) => text.split('').map(char => {
        const boldFraktur = ['𝖆','𝖇','𝖈','𝖉','𝖊','𝖋','𝖌','𝖍','𝖎','𝖏','𝖐','𝖑','𝖒','𝖓','𝖔','𝖕','𝖖','𝖗','𝖘','𝖙','𝖚','𝖛','𝖜','𝖝','𝖞','𝖟'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char.toLowerCase());
        return index !== -1 ? boldFraktur[index] : char;
    }).join('') },
    
    { id: 48, name: 'Bold Sans', category: 'bold', transform: (text) => text.split('').map(char => {
        const boldSans = ['𝗮','𝗯','𝗰','𝗱','𝗲','𝗳','𝗴','𝗵','𝗶','𝗷','𝗸','𝗹','𝗺','𝗻','𝗼','𝗽','𝗾','𝗿','𝘀','𝘁','𝘂','𝘃','𝘄','𝘅','𝘆','𝘇'];
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const index = normal.indexOf(char.toLowerCase());
        return index !== -1 ? boldSans[index] : char;
    }).join('') },
    
    { id: 49, name: 'Outline', category: 'bold', transform: (text) => text.split('').map(char => {
        const outline = ['🅰','🅱','🅲','🅳','🅴','🅵','🅶','🅷','🅸','🅹','🅺','🅻','🅼','🅽','🅾','🅿','🆀','🆁','🆂','🆃','🆄','🆅','🆆','🆇','🆈','🆉'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char.toUpperCase());
        return index !== -1 ? outline[index] : char;
    }).join('') },
    
    { id: 50, name: 'Negative', category: 'bold', transform: (text) => text.split('').map(char => {
        const negative = ['🅰','🅱','🅲','🅳','🅴','🅵','🅶','🅷','🅸','🅹','🅺','🅻','🅼','🅽','🅾','🅿','🆀','🆁','🆂','🆃','🆄','🆅','🆆','🆇','🆈','🆉'];
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = normal.indexOf(char.toUpperCase());
        return index !== -1 ? negative[index] : char;
    }).join('') },

    // AESTHETIC STYLES (10 fonts)
    { id: 51, name: 'Aesthetic 1', category: 'aesthetic', transform: (text) => '『' + text.split('').join('』『') + '』' },
    { id: 52, name: 'Aesthetic 2', category: 'aesthetic', transform: (text) => '「' + text.split('').join('」「') + '」' },
    { id: 53, name: 'Aesthetic 3', category: 'aesthetic', transform: (text) => '【' + text.split('').join('】【') + '】' },
    { id: 54, name: 'Aesthetic 4', category: 'aesthetic', transform: (text) => '《' + text.split('').join('》《') + '》' },
    { id: 55, name: 'Aesthetic 5', category: 'aesthetic', transform: (text) => '〈' + text.split('').join('〉〈') + '〉' },
    { id: 56, name: 'Aesthetic 6', category: 'aesthetic', transform: (text) => '〖' + text.split('').join('〗〖') + '〗' },
    { id: 57, name: 'Aesthetic 7', category: 'aesthetic', transform: (text) => '〘' + text.split('').join('〙〘') + '〙' },
    { id: 58, name: 'Aesthetic 8', category: 'aesthetic', transform: (text) => '〚' + text.split('').join('〛〚') + '〛' },
    { id: 59, name: 'Aesthetic 9', category: 'aesthetic', transform: (text) => '｢' + text.split('').join('｣｢') + '｣' },
    { id: 60, name: 'Aesthetic 10', category: 'aesthetic', transform: (text) => '⎡' + text.split('').join('⎤⎢') + '⎥' },

    // GLITCH STYLES (additional glitch styles)
    { id: 61, name: 'Glitch Basic', category: 'glitch', transform: (text) => {
        return text.split('').map(char => {
            if (Math.random() > 0.5) {
                return char + '̷';
            }
            return char;
        }).join('');
    } },
    
    { id: 62, name: 'Glitch RGB', category: 'glitch', transform: (text) => {
        const colors = ['🔴', '🟢', '🔵'];
        return text.split('').map((char, i) => {
            return char + colors[i % colors.length];
        }).join('');
    } },
    
    { id: 63, name: 'Glitch Scan', category: 'glitch', transform: (text) => {
        return text.split('').map(char => {
            if (Math.random() > 0.7) {
                return '▯';
            }
            return char;
        }).join('');
    } },
    
    { id: 64, name: 'Glitch Wave', category: 'glitch', transform: (text) => {
        return text.split('').map((char, i) => {
            if (i % 2 === 0) {
                return char.toUpperCase();
            }
            return char.toLowerCase();
        }).join('');
    } },
    
    { id: 65, name: 'Glitch Static', category: 'glitch', transform: (text) => {
        const staticChars = ['▀', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▉', '▊', '▋', '▌', '▍', '▎', '▏'];
        return text.split('').map(char => {
            if (Math.random() > 0.8) {
                return staticChars[Math.floor(Math.random() * staticChars.length)];
            }
            return char;
        }).join('');
    } },
    
    { id: 66, name: 'Glitch Cyber', category: 'glitch', transform: (text) => {
        const cyber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        return text.split('').map(char => {
            if (Math.random() > 0.6) {
                return cyber[Math.floor(Math.random() * cyber.length)];
            }
            return char;
        }).join('');
    } }
];

// ==========================================================================
// APPLICATION STATE
// ==========================================================================
let currentInput = 'TikTok Fonts';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentCopied = JSON.parse(localStorage.getItem('recentCopied')) || [];
let currentCategory = 'all';
let currentTheme = localStorage.getItem('theme') || 'light';

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================
const elements = {
    inputText: document.getElementById('inputText'),
    charCount: document.getElementById('charCount'),
    fontsGrid: document.getElementById('fontsGrid'),
    categoryBtns: document.querySelectorAll('.category-btn'),
    clearBtn: document.getElementById('clearBtn'),
    pasteBtn: document.getElementById('pasteBtn'),
    sampleBtns: document.querySelectorAll('.sample-btn'),
    themeToggle: document.getElementById('themeToggle'),
    backToTop: document.getElementById('backToTop'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    recentList: document.getElementById('recentList'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.querySelector('.nav-menu'),
    header: document.querySelector('.header'),
    faqItems: document.querySelectorAll('.faq-item'),
    copyGlitchBtns: document.querySelectorAll('.copy-glitch-btn'),
    modal: document.getElementById('previewModal'),
    modalPreview: document.getElementById('modalPreview'),
    modalCopy: document.getElementById('modalCopy'),
    modalFavorite: document.getElementById('modalFavorite'),
    modalClose: document.querySelector('.modal-close'),
    newsletterForm: document.getElementById('newsletterForm')
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setTheme(currentTheme);
    updateCharCount();
    renderFonts();
    updateRecentList();
    initializeEventListeners();
    showWelcomeToast();
}

function initializeEventListeners() {
    // Input events
    elements.inputText.addEventListener('input', handleInputChange);
    
    // Clear button
    if (elements.clearBtn) {
        elements.clearBtn.addEventListener('click', clearInput);
    }
    
    // Paste button
    if (elements.pasteBtn) {
        elements.pasteBtn.addEventListener('click', pasteFromClipboard);
    }
    
    // Sample buttons
    elements.sampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.text;
            elements.inputText.value = text;
            handleInputChange();
        });
    });
    
    // Category buttons
    elements.categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderFonts();
        });
    });
    
    // Theme toggle
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Back to top
    if (elements.backToTop) {
        elements.backToTop.addEventListener('click', scrollToTop);
    }
    
    // Menu toggle for mobile
    if (elements.menuToggle && elements.navMenu) {
        elements.menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // FAQ items
    elements.faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // Glitch copy buttons
    elements.copyGlitchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const style = btn.dataset.style;
            copyGlitchStyle(style);
        });
    });
    
    // Modal close
    if (elements.modalClose) {
        elements.modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
            closeModal();
        }
    });
    
    // Newsletter form
    if (elements.newsletterForm) {
        elements.newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// ==========================================================================
// INPUT HANDLING
// ==========================================================================
function handleInputChange() {
    currentInput = elements.inputText.value || ' ';
    updateCharCount();
    renderFonts();
}

function updateCharCount() {
    if (elements.charCount) {
        const count = elements.inputText.value.length;
        elements.charCount.textContent = count;
        
        // Change color when approaching limit
        if (count > 450) {
            elements.charCount.style.color = 'orange';
        } else if (count > 480) {
            elements.charCount.style.color = 'red';
        } else {
            elements.charCount.style.color = 'var(--gray-dark)';
        }
    }
}

function clearInput() {
    elements.inputText.value = '';
    handleInputChange();
    showToast('Text cleared!');
}

async function pasteFromClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        elements.inputText.value = text.slice(0, 500);
        handleInputChange();
        showToast('Pasted from clipboard!');
    } catch (err) {
        showToast('Could not paste. Please paste manually.', 'error');
    }
}

// ==========================================================================
// FONT RENDERING
// ==========================================================================
function renderFonts() {
    if (!elements.fontsGrid) return;
    
    const filteredFonts = currentCategory === 'all' 
        ? fontStyles 
        : fontStyles.filter(font => font.category === currentCategory);
    
    if (filteredFonts.length === 0) {
        elements.fontsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No fonts found</h3>
                <p>Try another category</p>
            </div>
        `;
        return;
    }
    
    elements.fontsGrid.innerHTML = filteredFonts.map(font => createFontCard(font)).join('');
    
    // Add event listeners to new font cards
    document.querySelectorAll('.font-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.copy-btn') && !e.target.closest('.favorite-btn')) {
                openFontPreview(card.dataset.id);
            }
        });
    });
    
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const fontId = btn.dataset.id;
            copyFontStyle(fontId);
        });
    });
    
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const fontId = btn.dataset.id;
            toggleFavorite(fontId);
        });
    });
}

function createFontCard(font) {
    const preview = font.transform(currentInput);
    const isFavorite = favorites.includes(font.id);
    const previewText = preview.length > 30 ? preview.slice(0, 30) + '...' : preview;
    
    return `
        <div class="font-card ${isFavorite ? 'favorite' : ''}" data-id="${font.id}">
            <div class="font-preview">${escapeHtml(previewText)}</div>
            <div class="font-info">
                <span class="font-name">${font.name}</span>
                <span class="font-category">${font.category}</span>
            </div>
            <div class="font-actions">
                <button class="copy-btn" data-id="${font.id}">
                    <i class="far fa-copy"></i> Copy
                </button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${font.id}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-star"></i>
                </button>
            </div>
        </div>
    `;
}

// ==========================================================================
// FONT OPERATIONS
// ==========================================================================
function copyFontStyle(fontId) {
    const font = fontStyles.find(f => f.id == fontId);
    if (!font) return;
    
    const transformedText = font.transform(currentInput);
    copyToClipboard(transformedText);
    
    // Add to recent copied
    addToRecent(transformedText);
    
    // Show success message
    showToast(`Copied ${font.name} style!`);
}

function copyGlitchStyle(style) {
    let transformedText = '';
    
    switch(style) {
        case 'glitch-basic':
            transformedText = currentInput.split('').map(char => char + '̷').join('');
            break;
        case 'glitch-rgb':
            transformedText = currentInput.split('').map((char, i) => {
                const colors = ['🔴', '🟢', '🔵'];
                return char + colors[i % 3];
            }).join('');
            break;
        case 'glitch-scan':
            transformedText = currentInput.split('').map(char => {
                if (Math.random() > 0.7) return '▯';
                return char;
            }).join('');
            break;
        case 'glitch-wave':
            transformedText = currentInput.split('').map((char, i) => {
                if (i % 2 === 0) return char.toUpperCase();
                return char.toLowerCase();
            }).join('');
            break;
        case 'glitch-static':
            transformedText = currentInput.split('').map(char => {
                if (Math.random() > 0.8) return '█';
                return char;
            }).join('');
            break;
        case 'glitch-cyber':
            const cyber = ['0','1','1','0','1','0','1','1','0','1'];
            transformedText = currentInput.split('').map(char => {
                if (Math.random() > 0.5) return cyber[Math.floor(Math.random() * cyber.length)];
                return char;
            }).join('');
            break;
        default:
            transformedText = currentInput;
    }
    
    copyToClipboard(transformedText);
    addToRecent(transformedText);
    showToast('Glitch style copied!');
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

// ==========================================================================
// FAVORITES MANAGEMENT
// ==========================================================================
function toggleFavorite(fontId) {
    fontId = parseInt(fontId);
    
    if (favorites.includes(fontId)) {
        favorites = favorites.filter(id => id !== fontId);
        showToast('Removed from favorites');
    } else {
        favorites.push(fontId);
        showToast('Added to favorites');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFonts();
}

// ==========================================================================
// RECENT COPIED MANAGEMENT
// ==========================================================================
function addToRecent(text) {
    recentCopied.unshift(text);
    if (recentCopied.length > 10) {
        recentCopied.pop();
    }
    localStorage.setItem('recentCopied', JSON.stringify(recentCopied));
    updateRecentList();
}

function updateRecentList() {
    if (!elements.recentList) return;
    
    if (recentCopied.length === 0) {
        elements.recentList.innerHTML = `
            <div class="no-recent">
                <p>No recently copied fonts</p>
            </div>
        `;
        return;
    }
    
    elements.recentList.innerHTML = recentCopied.map(text => `
        <div class="recent-item" onclick="copyText('${escapeHtml(text)}')">
            <span class="recent-text">${escapeHtml(text.slice(0, 20))}${text.length > 20 ? '...' : ''}</span>
            <i class="fas fa-copy recent-copy"></i>
        </div>
    `).join('');
}

// Make copyText function global
window.copyText = function(text) {
    copyToClipboard(text);
    showToast('Copied to clipboard!');
};

// ==========================================================================
// MODAL FUNCTIONS
// ==========================================================================
function openFontPreview(fontId) {
    const font = fontStyles.find(f => f.id == fontId);
    if (!font || !elements.modal) return;
    
    const preview = font.transform(currentInput);
    elements.modalPreview.textContent = preview;
    elements.modalPreview.style.fontSize = preview.length > 20 ? '2rem' : '3rem';
    
    elements.modalCopy.onclick = () => {
        copyToClipboard(preview);
        addToRecent(preview);
        showToast('Copied to clipboard!');
        closeModal();
    };
    
    elements.modalFavorite.onclick = () => {
        toggleFavorite(fontId);
        closeModal();
    };
    
    elements.modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (elements.modal) {
        elements.modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// ==========================================================================
// THEME MANAGEMENT
// ==========================================================================
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = elements.themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ==========================================================================
// SCROLL HANDLING
// ==========================================================================
function handleScroll() {
    // Header shrink on scroll
    if (window.scrollY > 100) {
        elements.header?.classList.add('scrolled');
    } else {
        elements.header?.classList.remove('scrolled');
    }
    
    // Back to top button
    if (window.scrollY > 500) {
        elements.backToTop?.classList.add('show');
    } else {
        elements.backToTop?.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================================================
// MOBILE MENU
// ==========================================================================
function toggleMobileMenu() {
    elements.navMenu?.classList.toggle('active');
    const icon = elements.menuToggle?.querySelector('i');
    if (icon) {
        icon.className = elements.navMenu?.classList.contains('active') 
            ? 'fas fa-times' 
            : 'fas fa-bars';
    }
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = elements.navMenu?.classList.contains('active') 
        ? 'hidden' 
        : '';
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'success') {
    if (!elements.toast || !elements.toastMessage) return;
    
    elements.toastMessage.textContent = message;
    elements.toast.className = `toast show toast-${type}`;
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

function showWelcomeToast() {
    setTimeout(() => {
        showToast('Welcome to TikTok Font Generator! ✨');
    }, 500);
}

// ==========================================================================
// NEWSLETTER
// ==========================================================================
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    console.log('Newsletter subscription:', email);
    
    showToast('Thanks for subscribing! 🎉');
    e.target.reset();
}

// ==========================================================================
// KEYBOARD SHORTCUTS
// ==========================================================================
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + C: Copy current font
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        if (document.activeTag !== elements.inputText) {
            e.preventDefault();
            // Copy first font in current category
            const firstFont = fontStyles.find(f => 
                currentCategory === 'all' || f.category === currentCategory
            );
            if (firstFont) {
                copyFontStyle(firstFont.id);
            }
        }
    }
    
    // Ctrl/Cmd + K: Clear input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        clearInput();
    }
    
    // Escape: Close modal
    if (e.key === 'Escape') {
        closeModal();
        elements.navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================================================
// LAZY LOADING AND PERFORMANCE
// ==========================================================================
// Intersection Observer for lazy loading
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            if (element.dataset.src) {
                element.src = element.dataset.src;
            }
            lazyLoadObserver.unobserve(element);
        }
    });
});

// Apply lazy loading to images
document.querySelectorAll('img[data-src]').forEach(img => {
    lazyLoadObserver.observe(img);
});

// ==========================================================================
// ERROR HANDLING
// ==========================================================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    showToast('Something went wrong. Please refresh.', 'error');
});

// ==========================================================================
// SERVICE WORKER REGISTRATION (for PWA)
// ==========================================================================
if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// ==========================================================================
// EXPORT FUNCTIONS FOR GLOBAL USE
// ==========================================================================
// Make functions available globally if needed
window.tiktokFonts = {
    copyFontStyle,
    toggleFavorite,
    toggleTheme,
    clearInput
};

// ==========================================================================
// ANALYTICS (optional - you can implement your own)
// ==========================================================================
function trackEvent(category, action, label) {
    // Implement your analytics here
    console.log('Analytics:', { category, action, label });
}

// Track font copies
document.addEventListener('click', (e) => {
    if (e.target.closest('.copy-btn')) {
        const btn = e.target.closest('.copy-btn');
        const fontId = btn.dataset.id;
        const font = fontStyles.find(f => f.id == fontId);
        trackEvent('Font', 'Copy', font?.name);
    }
});

// ==========================================================================
// AUTO-SAVE INPUT (optional)
// ==========================================================================
let saveTimeout;
elements.inputText?.addEventListener('input', () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        localStorage.setItem('lastInput', currentInput);
    }, 1000);
});

// Load last input
const lastInput = localStorage.getItem('lastInput');
if (lastInput && elements.inputText) {
    elements.inputText.value = lastInput;
    handleInputChange();
}

// ==========================================================================
// INITIALIZE TOOLTIPS
// ==========================================================================
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
        
        e.target.addEventListener('mouseleave', () => {
            tooltip.remove();
        }, { once: true });
    });
});

// ==========================================================================
// RESPONSIVE ADJUSTMENTS
// ==========================================================================
function handleResize() {
    // Close mobile menu on resize if open
    if (window.innerWidth > 768 && elements.navMenu?.classList.contains('active')) {
        elements.navMenu.classList.remove('active');
        document.body.style.overflow = '';
        const icon = elements.menuToggle?.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    }
}

window.addEventListener('resize', handleResize);

// ==========================================================================
// PREVENT DOUBLE-TAP ZOOM ON MOBILE
// ==========================================================================
let lastTap = 0;
document.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        e.preventDefault();
    }
    lastTap = currentTime;
}, { passive: false });

// ==========================================================================
// INITIAL FOCUS
// ==========================================================================
// Focus input on page load for desktop
if (window.innerWidth > 768 && elements.inputText) {
    elements.inputText.focus();
}

// ==========================================================================
// DEBUG INFORMATION (remove in production)
// ==========================================================================
if (window.location.hostname === 'localhost') {
    console.log('TikTok Font Generator loaded');
    console.log('Total fonts:', fontStyles.length);
    console.log('Categories:', [...new Set(fontStyles.map(f => f.category))]);
}

// ==========================================================================
// END OF APPLICATION
// ==========================================================================
