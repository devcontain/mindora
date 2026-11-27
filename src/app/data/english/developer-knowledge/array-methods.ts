import { Topic } from '../../../models/topic-model';

export const arrayMethods: Topic = {
    id: 41,
    name: 'JavaScript Array Methods',
    cards: [
        {
            id: 1,
            front: 'map()',
            back: 'Durchläuft die Elemente eines Arrays und führt für jedes vorhandene Element eine Callback-Funktion aus. Die Rückgabewerte bilden ein neues Array. Das ursprüngliche Array wird durch die Methode selbst nicht verändert.',
            explanation: 'Iterates over the elements of an array and executes a callback function for each existing element. The returned values form a new array. The method itself does not modify the original array.',
            example: '[1, 2, 3].map(value => value * 2); // [2, 4, 6]'
        },
        {
            id: 2,
            front: 'filter()',
            back: 'Erzeugt ein neues Array mit allen Elementen, für die eine Callback-Funktion einen wahrheitsgemäßen Wert zurückgibt. Erfüllt kein Element die Bedingung, wird ein leeres Array zurückgegeben.',
            explanation: 'Creates a new array containing all elements for which a callback function returns a truthy value. If no element satisfies the condition, an empty array is returned.',
            example: '[1, 2, 3, 4].filter(value => value > 2); // [3, 4]'
        },
        {
            id: 3,
            front: 'find()',
            back: 'Gibt das erste Element zurück, das eine bestimmte Bedingung erfüllt. Die Suche endet bei der ersten Übereinstimmung. Wird kein passendes Element gefunden, lautet der Rückgabewert undefined.',
            explanation: 'Returns the first element that satisfies a specified condition. The search stops at the first match. If no matching element is found, it returns undefined.',
            example: '[10, 20, 30].find(value => value > 15); // 20'
        },
        {
            id: 4,
            front: 'findIndex()',
            back: 'Gibt den Index des ersten Elements zurück, das eine bestimmte Bedingung erfüllt. Wird kein passendes Element gefunden, lautet der Rückgabewert -1.',
            explanation: 'Returns the index of the first element that satisfies a specified condition. If no matching element is found, it returns -1.',
            example: '[10, 20, 30].findIndex(value => value > 15); // 1'
        },
        {
            id: 5,
            front: 'findLast()',
            back: 'Durchsucht ein Array vom letzten zum ersten Element und gibt das erste dabei gefundene Element zurück, das die Bedingung erfüllt. Ohne Übereinstimmung wird undefined zurückgegeben.',
            explanation: 'Searches an array from the last element to the first and returns the first element encountered that satisfies the condition. If no match is found, it returns undefined.',
            example: '[10, 20, 30].findLast(value => value > 15); // 30'
        },
        {
            id: 6,
            front: 'findLastIndex()',
            back: 'Durchsucht ein Array rückwärts und gibt den Index des letzten Elements zurück, das eine bestimmte Bedingung erfüllt. Ohne Übereinstimmung wird -1 zurückgegeben.',
            explanation: 'Searches an array backwards and returns the index of the last element that satisfies a specified condition. If no match is found, it returns -1.',
            example: '[10, 20, 30].findLastIndex(value => value > 15); // 2'
        },
        {
            id: 7,
            front: 'reduce()',
            back: 'Verarbeitet die Elemente eines Arrays mithilfe einer Callback-Funktion zu einem gemeinsamen Ergebnis. Ein Akkumulator speichert das Zwischenergebnis jeder Iteration. Das Endergebnis kann beispielsweise eine Zahl, ein Objekt oder ein Array sein.',
            explanation: 'Processes the elements of an array into a single accumulated result using a callback function. An accumulator stores the intermediate result of each iteration. The final result can be a number, an object or an array.',
            example: '[1, 2, 3].reduce((sum, value) => sum + value, 0); // 6'
        },
        {
            id: 8,
            front: 'forEach()',
            back: 'Führt eine Callback-Funktion für jedes vorhandene Element eines Arrays aus. Die Methode gibt undefined zurück und erzeugt kein neues Array. Sie wird häufig für Seiteneffekte wie Konsolenausgaben verwendet.',
            explanation: 'Executes a callback function for each existing element of an array. The method returns undefined and does not create a new array. It is commonly used for side effects such as console output.',
            example: '[1, 2, 3].forEach(value => console.log(value));'
        },
        {
            id: 9,
            front: 'some()',
            back: 'Prüft, ob mindestens ein Element eines Arrays eine bestimmte Bedingung erfüllt. Gibt true zurück, sobald ein passendes Element gefunden wurde. Bei einem leeren Array wird false zurückgegeben.',
            explanation: 'Checks whether at least one element of an array satisfies a specified condition. Returns true as soon as a matching element is found. An empty array returns false.',
            example: '[1, 2, 3].some(value => value > 2); // true'
        },
        {
            id: 10,
            front: 'every()',
            back: 'Prüft, ob alle Elemente eines Arrays eine bestimmte Bedingung erfüllen. Gibt false zurück, sobald ein Element die Bedingung nicht erfüllt. Bei einem leeren Array wird true zurückgegeben.',
            explanation: 'Checks whether all elements of an array satisfy a specified condition. Returns false as soon as an element fails the condition. An empty array returns true.',
            example: '[2, 4, 6].every(value => value % 2 === 0); // true'
        },
        {
            id: 11,
            front: 'includes()',
            back: 'Prüft, ob ein Array einen bestimmten Wert enthält. Gibt einen Boolean zurück. Bei Objekten wird die Referenz und nicht der Inhalt verglichen. Anders als indexOf() kann includes() auch NaN finden.',
            explanation: 'Checks whether an array contains a specified value. Returns a boolean. Objects are compared by reference rather than by content. Unlike indexOf(), includes() can also find NaN.',
            example: '["HTML", "CSS", "JS"].includes("CSS"); // true'
        },
        {
            id: 12,
            front: 'indexOf()',
            back: 'Gibt den Index des ersten Vorkommens eines bestimmten Wertes zurück. Verwendet einen strikten Gleichheitsvergleich. Wird der Wert nicht gefunden, lautet der Rückgabewert -1.',
            explanation: 'Returns the index of the first occurrence of a specified value. Uses strict equality comparison. If the value is not found, it returns -1.',
            example: '["HTML", "CSS", "JS"].indexOf("CSS"); // 1'
        },
        {
            id: 13,
            front: 'at()',
            back: 'Gibt das Element an einem bestimmten Index zurück. Unterstützt negative Indizes, wodurch beispielsweise mit -1 auf das letzte Element zugegriffen werden kann. Bei einem ungültigen Index wird undefined zurückgegeben.',
            explanation: 'Returns the element at a specified index. Supports negative indices, allowing the last element to be accessed using -1. An out-of-range index returns undefined.',
            example: '[10, 20, 30].at(-1); // 30'
        },
        {
            id: 14,
            front: 'push()',
            back: 'Fügt ein oder mehrere Elemente am Ende eines Arrays hinzu. Verändert das ursprüngliche Array und gibt dessen neue Länge zurück.',
            explanation: 'Adds one or more elements to the end of an array. Modifies the original array and returns its new length.',
            example: 'const numbers = [1, 2]; numbers.push(3); // returns 3'
        },
        {
            id: 15,
            front: 'pop()',
            back: 'Entfernt das letzte Element eines Arrays und gibt dieses Element zurück. Verändert das ursprüngliche Array. Bei einem leeren Array wird undefined zurückgegeben.',
            explanation: 'Removes the last element of an array and returns that element. Modifies the original array. An empty array returns undefined.',
            example: 'const numbers = [1, 2, 3]; numbers.pop(); // returns 3'
        },
        {
            id: 16,
            front: 'unshift()',
            back: 'Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu. Verändert das ursprüngliche Array und gibt dessen neue Länge zurück.',
            explanation: 'Adds one or more elements to the beginning of an array. Modifies the original array and returns its new length.',
            example: 'const numbers = [2, 3]; numbers.unshift(1); // returns 3'
        },
        {
            id: 17,
            front: 'shift()',
            back: 'Entfernt das erste Element eines Arrays und gibt dieses Element zurück. Die verbleibenden Elemente werden entsprechend neu indiziert. Bei einem leeren Array wird undefined zurückgegeben.',
            explanation: 'Removes the first element of an array and returns that element. The remaining elements are reindexed accordingly. An empty array returns undefined.',
            example: 'const numbers = [1, 2, 3]; numbers.shift(); // returns 1'
        },
        {
            id: 18,
            front: 'slice()',
            back: 'Erzeugt eine flache Kopie eines ausgewählten Bereichs eines Arrays. Der Startindex ist eingeschlossen, der Endindex ausgeschlossen. Negative Indizes werden unterstützt. Das ursprüngliche Array bleibt unverändert.',
            explanation: 'Creates a shallow copy of a selected portion of an array. The starting index is included and the ending index is excluded. Negative indices are supported. The original array remains unchanged.',
            example: '[10, 20, 30, 40].slice(1, 3); // [20, 30]'
        },
        {
            id: 19,
            front: 'splice()',
            back: 'Entfernt, ersetzt oder ergänzt Elemente an einer bestimmten Position innerhalb eines Arrays. Verändert das ursprüngliche Array und gibt ein Array mit den entfernten Elementen zurück.',
            explanation: 'Removes, replaces or inserts elements at a specified position within an array. Modifies the original array and returns an array containing the removed elements.',
            example: 'const numbers = [1, 2, 3]; numbers.splice(1, 1, 9); // returns [2], numbers is [1, 9, 3]'
        },
        {
            id: 20,
            front: 'toSpliced()',
            back: 'Erzeugt ein neues Array, in dem Elemente entfernt, ersetzt oder ergänzt wurden. Im Gegensatz zu splice() bleibt das ursprüngliche Array unverändert. Besonders nützlich bei unveränderlichen Zustandsaktualisierungen.',
            explanation: 'Creates a new array with elements removed, replaced or inserted. Unlike splice(), the original array remains unchanged. Particularly useful for immutable state updates.',
            example: '[1, 2, 3].toSpliced(1, 1, 9); // [1, 9, 3]'
        },
        {
            id: 21,
            front: 'sort()',
            back: 'Sortiert die Elemente eines Arrays direkt und gibt dasselbe Array zurück. Ohne Vergleichsfunktion werden die Elemente als Strings nach UTF-16-Codeeinheiten sortiert. Für numerische Sortierungen sollte eine Vergleichsfunktion verwendet werden.',
            explanation: 'Sorts the elements of an array in place and returns the same array. Without a comparison function, elements are sorted as strings according to UTF-16 code units. A comparison function should be used for numerical sorting.',
            example: '[30, 2, 10].sort((a, b) => a - b); // [2, 10, 30]'
        },
        {
            id: 22,
            front: 'toSorted()',
            back: 'Erzeugt eine sortierte Kopie eines Arrays. Im Gegensatz zu sort() wird das ursprüngliche Array nicht verändert. Eine optionale Vergleichsfunktion bestimmt die Sortierreihenfolge.',
            explanation: 'Creates a sorted copy of an array. Unlike sort(), the original array is not modified. An optional comparison function determines the sorting order.',
            example: '[30, 2, 10].toSorted((a, b) => a - b); // [2, 10, 30]'
        },
        {
            id: 23,
            front: 'reverse()',
            back: 'Kehrt die Reihenfolge der Elemente eines Arrays um. Verändert das ursprüngliche Array und gibt dieselbe Array-Referenz zurück. Die unveränderliche Alternative ist toReversed().',
            explanation: 'Reverses the order of the elements in an array. Modifies the original array and returns the same array reference. The non-mutating alternative is toReversed().',
            example: '[1, 2, 3].reverse(); // [3, 2, 1]'
        },
        {
            id: 24,
            front: 'join()',
            back: 'Verbindet die Elemente eines Arrays zu einem String. Ein optionales Trennzeichen bestimmt, wodurch die Elemente voneinander getrennt werden. Standardmäßig wird ein Komma verwendet.',
            explanation: 'Combines the elements of an array into a string. An optional separator determines how the elements are separated. A comma is used by default.',
            example: '["HTML", "CSS", "JS"].join(" / "); // "HTML / CSS / JS"'
        },
        {
            id: 25,
            front: 'flatMap()',
            back: 'Wendet eine Callback-Funktion auf die Elemente eines Arrays an und reduziert anschließend die Verschachtelung der zurückgegebenen Arrays um eine Ebene. Entspricht grundsätzlich der Kombination aus map() und flat(1).',
            explanation: 'Applies a callback function to the elements of an array and then flattens the returned arrays by one level. It is essentially equivalent to combining map() and flat(1).',
            example: '[1, 2, 3].flatMap(value => [value, value * 2]); // [1, 2, 2, 4, 3, 6]'
        }
    ]
};