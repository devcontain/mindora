import { Topic } from '../../../models/topic-model';

export const stringMethods: Topic = {
    id: 40,
    name: 'JavaScript String Methods',
    cards: [
        {
            id: 1,
            front: 'trim()',
            back: 'Entfernt Leerzeichen und andere Whitespace-Zeichen am Anfang und Ende eines Strings. Leerzeichen innerhalb des Strings bleiben erhalten. Häufig verwendet bei der Validierung von Benutzereingaben.',
            explanation: 'Removes whitespace from both ends of a string. Whitespace within the string remains unchanged. Commonly used when validating user input.',
            example: '"  Hello World  ".trim(); // "Hello World"'
        },
        {
            id: 2,
            front: 'trimStart()',
            back: 'Entfernt Whitespace-Zeichen ausschließlich am Anfang eines Strings. Das Ende des Strings bleibt unverändert.',
            explanation: 'Removes whitespace only from the beginning of a string. The end of the string remains unchanged.',
            example: '"  Hello  ".trimStart(); // "Hello  "'
        },
        {
            id: 3,
            front: 'trimEnd()',
            back: 'Entfernt Whitespace-Zeichen ausschließlich am Ende eines Strings. Der Anfang des Strings bleibt unverändert.',
            explanation: 'Removes whitespace only from the end of a string. The beginning of the string remains unchanged.',
            example: '"  Hello  ".trimEnd(); // "  Hello"'
        },
        {
            id: 4,
            front: 'toLowerCase()',
            back: 'Gibt einen neuen String zurück, in dem alle entsprechenden Buchstaben in Kleinbuchstaben umgewandelt wurden. Häufig verwendet für Vergleiche und Suchfunktionen unabhängig von der Groß- und Kleinschreibung.',
            explanation: 'Returns a new string with applicable characters converted to lowercase. Commonly used for case-insensitive comparisons and search functionality.',
            example: '"HELLO".toLowerCase(); // "hello"'
        },
        {
            id: 5,
            front: 'toUpperCase()',
            back: 'Gibt einen neuen String zurück, in dem alle entsprechenden Buchstaben in Großbuchstaben umgewandelt wurden. Beispielsweise verwendbar zur Erstellung von Initialen.',
            explanation: 'Returns a new string with applicable characters converted to uppercase. It can be used, for example, to generate initials.',
            example: '"hello".toUpperCase(); // "HELLO"'
        },
        {
            id: 6,
            front: 'includes()',
            back: 'Prüft, ob ein String eine bestimmte Zeichenfolge enthält. Gibt einen Boolean zurück und unterscheidet zwischen Groß- und Kleinschreibung.',
            explanation: 'Checks whether a string contains a specified sequence of characters. Returns a boolean and performs a case-sensitive comparison.',
            example: '"Hello World".includes("World"); // true'
        },
        {
            id: 7,
            front: 'startsWith()',
            back: 'Prüft, ob ein String mit einer bestimmten Zeichenfolge beginnt. Gibt true oder false zurück. Optional kann eine Startposition angegeben werden.',
            explanation: 'Checks whether a string begins with a specified sequence of characters. Returns true or false. An optional starting position can be provided.',
            example: '"Angular Developer".startsWith("Angular"); // true'
        },
        {
            id: 8,
            front: 'endsWith()',
            back: 'Prüft, ob ein String mit einer bestimmten Zeichenfolge endet. Gibt einen Boolean zurück. Beispielsweise verwendbar zur Prüfung von Dateiendungen.',
            explanation: 'Checks whether a string ends with a specified sequence of characters. Returns a boolean. It can be used to check file extensions.',
            example: '"app.component.ts".endsWith(".ts"); // true'
        },
        {
            id: 9,
            front: 'indexOf()',
            back: 'Gibt den Index des ersten Vorkommens einer gesuchten Zeichenfolge zurück. Wird die Zeichenfolge nicht gefunden, lautet der Rückgabewert -1. Die Indizierung beginnt bei null.',
            explanation: 'Returns the index of the first occurrence of a specified substring. If the substring is not found, it returns -1. Indexing starts at zero.',
            example: '"Hello World".indexOf("World"); // 6'
        },
        {
            id: 10,
            front: 'lastIndexOf()',
            back: 'Gibt den Index des letzten Vorkommens einer gesuchten Zeichenfolge zurück. Wird die Zeichenfolge nicht gefunden, lautet der Rückgabewert -1.',
            explanation: 'Returns the index of the last occurrence of a specified substring. If the substring is not found, it returns -1.',
            example: '"banana".lastIndexOf("a"); // 5'
        },
        {
            id: 11,
            front: 'slice()',
            back: 'Extrahiert einen Teil eines Strings anhand eines Startindex und eines optionalen Endindex. Der Endindex ist ausgeschlossen. Negative Indizes werden vom Ende des Strings aus berechnet.',
            explanation: 'Extracts part of a string using a starting index and an optional ending index. The ending index is excluded. Negative indices are counted from the end of the string.',
            example: '"JavaScript".slice(0, 4); // "Java"'
        },
        {
            id: 12,
            front: 'substring()',
            back: 'Extrahiert einen Teil eines Strings zwischen zwei Indizes. Anders als bei slice() werden negative Indizes als null behandelt. Ist der Startindex größer als der Endindex, werden beide vertauscht.',
            explanation: 'Extracts part of a string between two indices. Unlike slice(), negative indices are treated as zero. If the starting index is greater than the ending index, they are swapped.',
            example: '"JavaScript".substring(4, 10); // "Script"'
        },
        {
            id: 13,
            front: 'split()',
            back: 'Teilt einen String anhand eines Trennzeichens oder regulären Ausdrucks in mehrere Teilstrings auf. Der Rückgabewert ist ein Array. Optional kann die maximale Anzahl der zurückgegebenen Elemente angegeben werden.',
            explanation: 'Splits a string into multiple substrings using a separator or regular expression. Returns an array. An optional limit specifies the maximum number of returned elements.',
            example: '"HTML,CSS,JS".split(","); // ["HTML", "CSS", "JS"]'
        },
        {
            id: 14,
            front: 'replace()',
            back: 'Ersetzt eine gefundene Zeichenfolge durch einen anderen Wert und gibt einen neuen String zurück. Bei einem einfachen Suchstring wird nur das erste Vorkommen ersetzt. Ein regulärer Ausdruck mit globalem Flag kann mehrere Vorkommen ersetzen.',
            explanation: 'Replaces a matched substring with another value and returns a new string. A plain search string replaces only the first occurrence. A regular expression with the global flag can replace multiple occurrences.',
            example: '"red red blue".replace("red", "green"); // "green red blue"'
        },
        {
            id: 15,
            front: 'replaceAll()',
            back: 'Ersetzt sämtliche nicht überlappenden Vorkommen einer gesuchten Zeichenfolge und gibt einen neuen String zurück. Bei Verwendung eines regulären Ausdrucks muss das globale Flag gesetzt sein.',
            explanation: 'Replaces all non-overlapping occurrences of a specified substring and returns a new string. When using a regular expression, the global flag must be set.',
            example: '"red red blue".replaceAll("red", "green"); // "green green blue"'
        },
        {
            id: 16,
            front: 'charAt()',
            back: 'Gibt die UTF-16-Codeeinheit an einem bestimmten Index als String zurück. Liegt der Index außerhalb des gültigen Bereichs, wird ein leerer String zurückgegeben.',
            explanation: 'Returns the UTF-16 code unit at a specified index as a string. If the index is outside the valid range, it returns an empty string.',
            example: '"Angular".charAt(0); // "A"'
        },
        {
            id: 17,
            front: 'at()',
            back: 'Gibt die UTF-16-Codeeinheit an einem bestimmten Index als String zurück. Im Gegensatz zu charAt() unterstützt die Methode negative Indizes. Bei einem ungültigen Index wird undefined zurückgegeben.',
            explanation: 'Returns the UTF-16 code unit at a specified index as a string. Unlike charAt(), it supports negative indices. An out-of-range index returns undefined.',
            example: '"Angular".at(-1); // "r"'
        },
        {
            id: 18,
            front: 'concat()',
            back: 'Verbindet einen String mit einem oder mehreren weiteren Werten zu einem neuen String. Die ursprünglichen Strings bleiben unverändert. Alternativ können der Plus-Operator oder Template Literals verwendet werden.',
            explanation: 'Combines a string with one or more additional values to produce a new string. The original strings remain unchanged. Alternatives include the addition operator and template literals.',
            example: '"Hello".concat(" ", "World"); // "Hello World"'
        },
        {
            id: 19,
            front: 'repeat()',
            back: 'Erzeugt einen neuen String, indem der ursprüngliche String entsprechend der angegebenen Anzahl wiederholt wird. Eine negative Anzahl oder Infinity führt zu einem RangeError.',
            explanation: 'Creates a new string by repeating the original string a specified number of times. A negative count or Infinity results in a RangeError.',
            example: '"Hi".repeat(3); // "HiHiHi"'
        },
        {
            id: 20,
            front: 'padStart()',
            back: 'Ergänzt einen String am Anfang mit angegebenen Zeichen, bis die gewünschte Gesamtlänge erreicht ist. Ist der String bereits lang genug, bleibt er unverändert. Häufig verwendet zur Formatierung von Zahlen und Datumsangaben.',
            explanation: 'Pads the beginning of a string with specified characters until the desired total length is reached. If the string is already long enough, it remains unchanged. Commonly used to format numbers and dates.',
            example: '"7".padStart(2, "0"); // "07"'
        },
        {
            id: 21,
            front: 'padEnd()',
            back: 'Ergänzt einen String am Ende mit angegebenen Zeichen, bis die gewünschte Gesamtlänge erreicht ist. Ist der String bereits lang genug, bleibt er unverändert.',
            explanation: 'Pads the end of a string with specified characters until the desired total length is reached. If the string is already long enough, it remains unchanged.',
            example: '"7".padEnd(3, "0"); // "700"'
        },
        {
            id: 22,
            front: 'match()',
            back: 'Sucht innerhalb eines Strings nach Übereinstimmungen mit einem regulären Ausdruck. Gibt ein Array mit den gefundenen Ergebnissen oder null zurück. Das globale Flag beeinflusst die Struktur des Ergebnisses.',
            explanation: 'Searches a string for matches against a regular expression. Returns an array containing the matched results or null. The global flag affects the structure of the result.',
            example: '"Order 123".match(/[0-9]+/g); // ["123"]'
        },
        {
            id: 23,
            front: 'matchAll()',
            back: 'Gibt einen Iterator über alle Übereinstimmungen mit einem regulären Ausdruck einschließlich vorhandener Capture Groups zurück. Bei Übergabe eines regulären Ausdrucks muss das globale Flag gesetzt sein.',
            explanation: 'Returns an iterator over all matches of a regular expression, including any capturing groups. When a regular expression is provided, the global flag must be set.',
            example: '[..."a1 b2".matchAll(/([a-z])([0-9])/g)];'
        },
        {
            id: 24,
            front: 'search()',
            back: 'Sucht innerhalb eines Strings nach einer Übereinstimmung mit einem regulären Ausdruck. Gibt den Index der ersten Übereinstimmung oder -1 zurück, wenn keine gefunden wurde.',
            explanation: 'Searches a string for a match against a regular expression. Returns the index of the first match or -1 if no match is found.',
            example: '"Order 123".search(/[0-9]/); // 6'
        },
        {
            id: 25,
            front: 'localeCompare()',
            back: 'Vergleicht zwei Strings unter Berücksichtigung sprachabhängiger Sortierregeln. Gibt einen negativen Wert, null oder einen positiven Wert zurück. Besonders nützlich für alphabetische Sortierungen.',
            explanation: 'Compares two strings according to locale-sensitive sorting rules. Returns a negative value, zero or a positive value. Particularly useful for alphabetical sorting.',
            example: '"apple".localeCompare("banana", "en"); // negative value'
        }
    ]
};