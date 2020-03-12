class VigenereCipheringMachine {
    constructor(a = true) {
        this.a = a;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }

        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let encode = '';

        while (key.length < message.length) {
            key = key.concat(key);
        }

        let j = 0;

        for (let i = 0; i < message.length; i++) {
            if (/[A-Z]/.test(message[i])) {
                encode += String.fromCodePoint((message[i].codePointAt() - 65 + key[j].codePointAt() - 65) % 26 + 65);
                j++;
            } else encode += message[i];
        }

        if (this.a) {
            return encode;
        } else {
            return encode.split('').reverse().join('');
        }
    }

    decrypt(text, key) {
        if (!text || !key) {
            throw new Error();
        }

        text = text.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let decode = '';

        while (key.length < text.length) {
            key = key.concat(key);
        }

        let j = 0;

        for (let i = 0; i < text.length; i++) {
            if (/[A-Z]/.test(text[i])) {
                decode += String.fromCodePoint((text[i].codePointAt() - key[j].codePointAt() + 26) % 26 + 65);
                j++;
            } else decode += text[i];
        }

        if (this.a) {
            return decode;
        } else {
            return decode.split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;