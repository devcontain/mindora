import { Topic } from '../../../models/topic-model';

export const fundamentals: Topic = {
    id: 39,
    name: 'Programming Fundamentals',
    cards: [
        {
            id: 1,
            front: 'Variable',
            back: 'Eine Variable ist ein benannter Speicher beziehungsweise eine Bindung für einen Wert. Abhängig von der Deklaration kann ihr später ein anderer Wert zugewiesen werden.',
            explanation: 'A variable is a named binding that holds a value. Depending on its declaration, it can be reassigned during program execution.',
            example: 'let age = 36;'
        },
        {
            id: 2,
            front: 'Constant',
            back: 'Eine Konstante ist eine Bindung, der nach ihrer Initialisierung kein neuer Wert zugewiesen werden kann. Bei Objekten und Arrays können deren Inhalte trotzdem verändert werden.',
            explanation: 'A constant is a binding that cannot be reassigned after initialisation. However, the contents of objects and arrays can still be modified.',
            example: 'const name = "Mindora";'
        },
        {
            id: 3,
            front: 'Data Type',
            back: 'Ein Datentyp beschreibt, welche Art von Wert vorliegt und welche Operationen damit möglich sind. Typische Datentypen sind Strings, Numbers und Booleans.',
            explanation: 'A data type describes the kind of value being represented and the operations that can be performed on it. Common data types include strings, numbers and booleans.',
            example: 'let age: number = 36;'
        },
        {
            id: 4,
            front: 'Function',
            back: 'Eine Funktion ist ein wiederverwendbarer Codeblock, der eine bestimmte Aufgabe ausführt. Sie kann Parameter entgegennehmen und einen Wert zurückgeben.',
            explanation: 'A function is a reusable block of code that performs a specific task. It can accept parameters and return a value.',
            example: 'function add(a: number, b: number) { return a + b; }'
        },
        {
            id: 5,
            front: 'Parameter',
            back: 'Ein Parameter ist eine benannte Eingabe innerhalb einer Funktionsdefinition. Er dient als Platzhalter für einen Wert, der beim Funktionsaufruf übergeben wird.',
            explanation: 'A parameter is a named input in a function definition. It acts as a placeholder for a value supplied when the function is called.',
            example: 'function greet(name: string) { return name; }'
        },
        {
            id: 6,
            front: 'Argument',
            back: 'Ein Argument ist der konkrete Wert oder Ausdruck, der beim Aufruf einer Funktion übergeben wird. Parameter gehören zur Definition, Argumente zum Aufruf.',
            explanation: 'An argument is the actual value or expression passed to a function when it is called. Parameters belong to the definition, while arguments belong to the invocation.',
            example: 'greet("Hello");'
        },
        {
            id: 7,
            front: 'Return Value',
            back: 'Ein Rückgabewert ist das Ergebnis, das eine Funktion an ihren Aufrufer zurückgibt. Die return-Anweisung beendet dabei die aktuelle Funktionsausführung.',
            explanation: 'A return value is the result that a function sends back to its caller. The return statement also terminates the current function execution.',
            example: 'function double(value: number) { return value * 2; }'
        },
        {
            id: 8,
            front: 'Scope',
            back: 'Der Gültigkeitsbereich bestimmt, an welchen Stellen im Quellcode auf eine Variable oder Funktion zugegriffen werden kann. JavaScript unterscheidet unter anderem zwischen globalem, Funktions- und Block-Scope.',
            explanation: 'Scope determines where a variable or function can be accessed within the source code. JavaScript distinguishes between global, function and block scope.',
            example: 'if (true) { let value = 10; }'
        },
        {
            id: 9,
            front: 'Condition',
            back: 'Eine Bedingung ist ein Ausdruck, anhand dessen entschieden wird, ob ein bestimmter Codeblock ausgeführt werden soll.',
            explanation: 'A condition is an expression used to determine whether a particular block of code should be executed.',
            example: 'if (age >= 18) { console.log("Adult"); }'
        },
        {
            id: 10,
            front: 'Loop',
            back: 'Eine Schleife wiederholt einen Codeblock, solange eine bestimmte Bedingung erfüllt ist oder bis eine Sammlung vollständig durchlaufen wurde.',
            explanation: 'A loop repeatedly executes a block of code while a condition is satisfied or until a collection has been fully traversed.',
            example: 'for (let i = 0; i < 5; i++) { console.log(i); }'
        },
        {
            id: 11,
            front: 'Iteration',
            back: 'Eine Iteration bezeichnet einen einzelnen Wiederholungsschritt innerhalb eines wiederkehrenden Prozesses, beispielsweise einen Durchlauf einer Schleife.',
            explanation: 'An iteration is a single repetition of a recurring process, such as one execution of a loop body.',
            example: 'for (const item of items) { console.log(item); }'
        },
        {
            id: 12,
            front: 'Array',
            back: 'Ein Array ist eine geordnete Datenstruktur, die mehrere Werte enthält. In JavaScript beginnt der Index des ersten Elements bei null.',
            explanation: 'An array is an ordered data structure containing multiple values. In JavaScript, the index of the first element is zero.',
            example: 'const numbers = [10, 20, 30];'
        },
        {
            id: 13,
            front: 'Object',
            back: 'Ein Objekt fasst zusammengehörige Daten und gegebenenfalls Funktionen in Eigenschaften zusammen. Auf diese Eigenschaften kann über ihre Schlüssel zugegriffen werden.',
            explanation: 'An object groups related data and potentially functions into properties. These properties can be accessed using their keys.',
            example: 'const user = { name: "Alex", age: 30 };'
        },
        {
            id: 14,
            front: 'Property',
            back: 'Eine Property ist eine Eigenschaft eines Objekts, die über einen Schlüssel identifiziert wird und einen Wert enthält.',
            explanation: 'A property is a characteristic of an object identified by a key and associated with a value.',
            example: 'user.name;'
        },
        {
            id: 15,
            front: 'Method',
            back: 'Eine Methode ist eine Funktion, die einem Objekt oder einer Klasse zugeordnet ist. Sie beschreibt häufig das Verhalten dieses Objekts.',
            explanation: 'A method is a function associated with an object or class. It commonly defines the behaviour of that object.',
            example: 'const user = { greet() { return "Hello"; } };'
        },
        {
            id: 16,
            front: 'Class',
            back: 'Eine Klasse beschreibt die Struktur und das Verhalten von Objekten. Aus ihr können mehrere Instanzen mit eigenen Zuständen erzeugt werden.',
            explanation: 'A class defines the structure and behaviour of objects. Multiple instances with individual states can be created from it.',
            example: 'class User { name = "Alex"; }'
        },
        {
            id: 17,
            front: 'Instance',
            back: 'Eine Instanz ist ein konkretes Objekt, das aus einer Klasse erzeugt wurde. Mehrere Instanzen derselben Klasse können unterschiedliche Eigenschaftswerte besitzen.',
            explanation: 'An instance is a concrete object created from a class. Multiple instances of the same class can hold different property values.',
            example: 'const user = new User();'
        },
        {
            id: 18,
            front: 'Constructor',
            back: 'Ein Konstruktor ist eine spezielle Methode einer Klasse, die bei der Erzeugung einer neuen Instanz ausgeführt wird. Er dient häufig zur Initialisierung von Eigenschaften.',
            explanation: 'A constructor is a special class method executed when a new instance is created. It is commonly used to initialise properties.',
            example: 'class User { constructor(public name: string) {} }'
        },
        {
            id: 19,
            front: 'Callback',
            back: 'Ein Callback ist eine Funktion, die einer anderen Funktion als Argument übergeben wird, damit diese sie bei Bedarf ausführen kann. Callbacks können synchron oder asynchron ausgeführt werden.',
            explanation: 'A callback is a function passed as an argument to another function so that it can be executed when needed. Callbacks can be executed synchronously or asynchronously.',
            example: 'setTimeout(() => console.log("Done"), 1000);'
        },
        {
            id: 20,
            front: 'Recursion',
            back: 'Rekursion bezeichnet das Verfahren, bei dem eine Funktion sich selbst aufruft, um ein Problem in kleinere Teilprobleme zu zerlegen. Eine Abbruchbedingung verhindert unbegrenzte Selbstaufrufe.',
            explanation: 'Recursion is a technique in which a function calls itself to divide a problem into smaller subproblems. A base case prevents indefinite recursive calls.',
            example: 'function factorial(n: number): number { return n <= 1 ? 1 : n * factorial(n - 1); }'
        },
        {
            id: 21,
            front: 'Algorithm',
            back: 'Ein Algorithmus ist eine eindeutig beschriebene Folge von Verarbeitungsschritten zur Lösung eines bestimmten Problems. Er ist grundsätzlich unabhängig von einer konkreten Programmiersprache.',
            explanation: 'An algorithm is a clearly defined sequence of computational steps used to solve a specific problem. It is generally independent of any particular programming language.'
        },
        {
            id: 22,
            front: 'Synchronous Execution',
            back: 'Bei synchroner Ausführung werden Anweisungen nacheinander abgearbeitet. Eine laufende synchrone Operation muss abgeschlossen sein, bevor die nächste Anweisung ausgeführt werden kann.',
            explanation: 'In synchronous execution, instructions are processed sequentially. A running synchronous operation must complete before the next instruction can execute.',
            example: 'console.log("First"); console.log("Second");'
        },
        {
            id: 23,
            front: 'Asynchronous Execution',
            back: 'Asynchrone Ausführung ermöglicht es, auf das Ergebnis einer Operation zu warten, ohne dabei den gesamten JavaScript-Ausführungsthread zu blockieren. Typische Anwendungsfälle sind Netzwerkanfragen und Timer.',
            explanation: 'Asynchronous execution allows a program to wait for an operation to complete without blocking the entire JavaScript execution thread. Common use cases include network requests and timers.',
            example: 'async function loadData() { return await fetch("/api/data"); }'
        },
        {
            id: 24,
            front: 'Exception',
            back: 'Eine Exception ist ein außergewöhnlicher Zustand während der Programmausführung, der den normalen Programmablauf unterbricht. Sie kann beispielsweise mit try und catch behandelt werden.',
            explanation: 'An exception is an exceptional condition during program execution that interrupts the normal control flow. It can be handled using mechanisms such as try and catch.',
            example: 'throw new Error("Invalid input");'
        },
        {
            id: 25,
            front: 'Immutability',
            back: 'Immutability bezeichnet das Prinzip, bestehende Daten nicht direkt zu verändern. Stattdessen werden bei Änderungen neue Werte oder Datenstrukturen erzeugt. Dadurch lassen sich Zustandsänderungen leichter nachvollziehen.',
            explanation: 'Immutability is the principle of not modifying existing data directly. Instead, new values or data structures are created when changes are required. This makes state changes easier to track.',
            example: 'const updated = [...numbers, 40];'
        }
    ]
};