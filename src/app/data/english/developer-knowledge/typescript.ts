import { Topic } from '../../../models/topic-model';

export const typescript: Topic = {
    id: 42,
    name: 'TypeScript Fundamentals',
    cards: [
        {
            id: 1,
            front: 'TypeScript',
            back: 'TypeScript ist eine Erweiterung von JavaScript um ein statisches Typsystem und zusätzliche Sprachfunktionen. TypeScript-Code wird vor der Ausführung normalerweise in JavaScript übersetzt. Dadurch können viele Programmierfehler bereits während der Entwicklung erkannt werden.',
            explanation: 'TypeScript is a superset of JavaScript that adds a static type system and additional language features. TypeScript code is normally translated into JavaScript before execution, allowing many programming errors to be detected during development.',
            example: 'const title: string = "Mindora";'
        },
        {
            id: 2,
            front: 'Static Typing',
            back: 'Statische Typisierung bedeutet, dass die Typen von Variablen, Parametern und anderen Ausdrücken bereits vor der Programmausführung überprüft werden können. Dadurch lassen sich viele Typfehler frühzeitig erkennen.',
            explanation: 'Static typing means that the types of variables, parameters and other expressions can be checked before program execution. This allows many type errors to be detected early.',
            example: 'let age: number = 36;'
        },
        {
            id: 3,
            front: 'Type Annotation',
            back: 'Eine Typannotation ist die explizite Angabe eines Datentyps im Quellcode. Sie beschreibt beispielsweise, welchen Typ eine Variable, ein Parameter oder ein Rückgabewert besitzen soll.',
            explanation: 'A type annotation explicitly specifies a data type in the source code. It defines the expected type of a variable, parameter or return value.',
            example: 'function double(value: number): number { return value * 2; }'
        },
        {
            id: 4,
            front: 'Type Inference',
            back: 'Type Inference bezeichnet die automatische Ableitung eines Datentyps durch TypeScript anhand vorhandener Informationen. Dadurch müssen Typen nicht an jeder Stelle ausdrücklich angegeben werden.',
            explanation: 'Type inference is the automatic determination of a data type by TypeScript based on available information. This removes the need to explicitly annotate types everywhere.',
            example: 'const title = "Mindora"; // inferred type: "Mindora"'
        },
        {
            id: 5,
            front: 'Interface',
            back: 'Ein Interface beschreibt die erwartete Struktur eines Objekts. Es definiert Eigenschaften und gegebenenfalls Methodensignaturen. Interfaces existieren ausschließlich während der Typprüfung und erzeugen keinen eigenen JavaScript-Code.',
            explanation: 'An interface describes the expected structure of an object. It defines properties and optionally method signatures. Interfaces exist only during type checking and do not generate their own JavaScript code.',
            example: 'interface User { id: number; name: string; }'
        },
        {
            id: 6,
            front: 'Type Alias',
            back: 'Ein Type Alias gibt einem Typ einen eigenen Namen. Anders als Interfaces können Type Aliases neben Objektstrukturen auch primitive Typen, Union Types, Tupel und andere Typkonstruktionen beschreiben.',
            explanation: 'A type alias assigns a custom name to a type. Unlike interfaces, type aliases can describe primitive types, union types, tuples and other type constructions in addition to object structures.',
            example: 'type Priority = "low" | "medium" | "urgent";'
        },
        {
            id: 7,
            front: 'Union Type',
            back: 'Ein Union Type erlaubt einem Wert, einem von mehreren angegebenen Typen zu entsprechen. Vor typabhängigen Operationen muss gegebenenfalls festgestellt werden, welcher konkrete Typ vorliegt.',
            explanation: 'A union type allows a value to belong to one of several specified types. Before performing type-specific operations, the actual type may need to be determined.',
            example: 'let id: number | string = 42;'
        },
        {
            id: 8,
            front: 'Intersection Type',
            back: 'Ein Intersection Type kombiniert mehrere Typen zu einem gemeinsamen Typ. Ein entsprechender Wert muss die Anforderungen aller beteiligten Typen erfüllen.',
            explanation: 'An intersection type combines multiple types into a single type. A corresponding value must satisfy the requirements of all participating types.',
            example: 'type Employee = { name: string } & { employeeId: number };'
        },
        {
            id: 9,
            front: 'Literal Type',
            back: 'Ein Literal Type beschränkt einen Typ auf einen konkreten Wert anstatt auf einen allgemeinen Datentyp. Mehrere Literal Types können durch einen Union Type kombiniert werden.',
            explanation: 'A literal type restricts a type to a specific value rather than a general data type. Multiple literal types can be combined using a union type.',
            example: 'type Mode = "list" | "partner" | "solo";'
        },
        {
            id: 10,
            front: 'Generic',
            back: 'Generics ermöglichen die Erstellung wiederverwendbarer Funktionen, Klassen und Typen, die mit unterschiedlichen Datentypen arbeiten können. Der konkrete Typ wird über einen Typparameter übergeben oder automatisch abgeleitet. Die Typsicherheit bleibt dabei erhalten.',
            explanation: 'Generics enable the creation of reusable functions, classes and types that work with different data types. The concrete type is supplied through a type parameter or inferred automatically while preserving type safety.',
            example: 'function identity<T>(value: T): T { return value; }'
        },
        {
            id: 11,
            front: 'Generic Constraint',
            back: 'Ein Generic Constraint schränkt die erlaubten Typen eines Generics ein. Mit extends kann beispielsweise sichergestellt werden, dass ein übergebener Typ bestimmte Eigenschaften besitzt.',
            explanation: 'A generic constraint restricts the types accepted by a generic. The extends keyword can ensure that a supplied type contains specific properties.',
            example: 'function getId<T extends { id: number }>(item: T): number { return item.id; }'
        },
        {
            id: 12,
            front: 'Type Narrowing',
            back: 'Type Narrowing bezeichnet die Eingrenzung eines allgemeinen Typs auf einen konkreteren Typ anhand von Bedingungen im Quellcode. TypeScript berücksichtigt beispielsweise typeof-Prüfungen und Gleichheitsvergleiche.',
            explanation: 'Type narrowing is the process of refining a broad type into a more specific type based on conditions in the source code. TypeScript considers checks such as typeof and equality comparisons.',
            example: 'if (typeof value === "string") { value.trim(); }'
        },
        {
            id: 13,
            front: 'Type Guard',
            back: 'Ein Type Guard ist eine Prüfung, anhand derer TypeScript den möglichen Typ eines Wertes innerhalb eines bestimmten Codebereichs eingrenzen kann. Eigene Type Guards können mit einem Type Predicate definiert werden.',
            explanation: 'A type guard is a check that allows TypeScript to narrow the possible type of a value within a specific code block. Custom type guards can be defined using a type predicate.',
            example: 'function isString(value: unknown): value is string { return typeof value === "string"; }'
        },
        {
            id: 14,
            front: 'Type Assertion',
            back: 'Eine Type Assertion teilt TypeScript mit, als welchen Typ ein Wert behandelt werden soll. Sie führt weder eine tatsächliche Typumwandlung noch eine Laufzeitprüfung durch. Eine falsche Assertion kann daher Laufzeitfehler verursachen.',
            explanation: 'A type assertion tells TypeScript which type a value should be treated as. It performs neither an actual type conversion nor a runtime check. An incorrect assertion can therefore cause runtime errors.',
            example: 'const element = document.getElementById("title") as HTMLInputElement;'
        },
        {
            id: 15,
            front: 'any',
            back: 'Der Typ any erlaubt grundsätzlich beliebige Werte und deaktiviert einen großen Teil der statischen Typprüfung für den betreffenden Wert. Dadurch können Typfehler unentdeckt bleiben. any sollte deshalb möglichst gezielt eingesetzt werden.',
            explanation: 'The any type allows arbitrary values and disables much of the static type checking for the corresponding value. This can leave type errors undetected, so any should be used selectively.',
            example: 'let value: any = "Hello"; value = 42;'
        },
        {
            id: 16,
            front: 'unknown',
            back: 'Der Typ unknown kann jeden beliebigen Wert aufnehmen. Anders als bei any muss der Typ jedoch eingegrenzt oder ausdrücklich bestätigt werden, bevor typabhängige Operationen ausgeführt werden können.',
            explanation: 'The unknown type can hold any value. Unlike any, its type must be narrowed or explicitly asserted before type-specific operations can be performed.',
            example: 'const value: unknown = "Hello"; if (typeof value === "string") { value.trim(); }'
        },
        {
            id: 17,
            front: 'never',
            back: 'Der Typ never beschreibt Werte, die nicht auftreten können. Er wird beispielsweise für Funktionen verwendet, die immer einen Fehler auslösen oder niemals regulär beendet werden. Außerdem eignet er sich zur Prüfung vollständiger Fallunterscheidungen.',
            explanation: 'The never type represents values that cannot occur. It is used for functions that always throw an error or never complete normally. It is also useful for exhaustive case checking.',
            example: 'function fail(message: string): never { throw new Error(message); }'
        },
        {
            id: 18,
            front: 'void',
            back: 'Der Typ void kennzeichnet bei Funktionen, dass kein nutzbarer Rückgabewert vorgesehen ist. Er wird häufig bei Funktionen verwendet, die Aktionen ausführen, ohne ein Ergebnis zurückzugeben.',
            explanation: 'The void type indicates that a function is not intended to provide a usable return value. It is commonly used for functions that perform actions without returning a result.',
            example: 'function log(message: string): void { console.log(message); }'
        },
        {
            id: 19,
            front: 'Optional Property',
            back: 'Eine optionale Eigenschaft wird durch ein Fragezeichen hinter ihrem Namen gekennzeichnet. Ein Objekt muss diese Eigenschaft nicht besitzen. Beim Lesen einer fehlenden Eigenschaft erhält man undefined.',
            explanation: 'An optional property is marked with a question mark after its name. An object is not required to contain this property. Reading an absent property returns undefined.',
            example: 'interface Flashcard { front: string; example?: string; }'
        },
        {
            id: 20,
            front: 'readonly',
            back: 'Das Schlüsselwort readonly verhindert auf Ebene der TypeScript-Typprüfung die nachträgliche Zuweisung eines neuen Wertes an eine entsprechend deklarierte Eigenschaft. Es erzeugt jedoch keinen automatischen Schreibschutz zur Laufzeit und schützt verschachtelte Objekte nicht vollständig.',
            explanation: 'The readonly keyword prevents reassignment of a declared property at the TypeScript type-checking level. However, it does not automatically enforce runtime immutability or fully protect nested objects.',
            example: 'interface User { readonly id: number; name: string; }'
        },
        {
            id: 21,
            front: 'Tuple',
            back: 'Ein Tupel ist ein Array-Typ, bei dem die Typen bestimmter Positionen und die vorgesehene Struktur festgelegt werden. Es eignet sich für zusammengehörige Werte mit unterschiedlichen Datentypen.',
            explanation: 'A tuple is an array type that defines the types of specific positions and the expected structure. It is useful for related values with different data types.',
            example: 'const user: [number, string] = [1, "Alex"];'
        },
        {
            id: 22,
            front: 'Enum',
            back: 'Ein Enum definiert eine Gruppe benannter Konstanten. TypeScript unterstützt numerische und stringbasierte Enums. Reguläre Enums erzeugen im Gegensatz zu vielen anderen Typkonstruktionen auch JavaScript-Code.',
            explanation: 'An enum defines a group of named constants. TypeScript supports numeric and string-based enums. Unlike many other type constructions, regular enums also generate JavaScript code.',
            example: 'enum Priority { Low = "low", Medium = "medium", Urgent = "urgent" }'
        },
        {
            id: 23,
            front: 'Utility Types',
            back: 'Utility Types sind integrierte TypeScript-Hilfstypen, mit denen bestehende Typen umgewandelt werden können. Partial macht Eigenschaften optional, Required macht sie verpflichtend, Pick wählt Eigenschaften aus und Omit schließt Eigenschaften aus.',
            explanation: 'Utility types are built-in TypeScript helper types that transform existing types. Partial makes properties optional, Required makes them mandatory, Pick selects properties and Omit excludes properties.',
            example: 'type UserUpdate = Partial<User>;'
        },
        {
            id: 24,
            front: 'Access Modifiers',
            back: 'Access Modifiers bestimmen die Sichtbarkeit von Klasseneigenschaften und Methoden. public erlaubt allgemeinen Zugriff, private beschränkt den Zugriff auf die eigene Klasse und protected erlaubt zusätzlich den Zugriff aus abgeleiteten Klassen. TypeScript-private ist nicht mit dem JavaScript-Laufzeitschutz durch # gleichzusetzen.',
            explanation: 'Access modifiers determine the visibility of class properties and methods. Public allows general access, private restricts access to the declaring class and protected additionally allows access from derived classes. TypeScript private is not equivalent to JavaScript runtime privacy using #.',
            example: 'class User { public name = "Alex"; private password = ""; protected role = "user"; }'
        },
        {
            id: 25,
            front: 'Strict Mode',
            back: 'Die TypeScript-Compileroption strict aktiviert eine Gruppe strengerer Typprüfungen. Dazu gehören unter anderem strictNullChecks und noImplicitAny. Dadurch werden potenzielle Typfehler bereits während der Entwicklung besser erkannt.',
            explanation: 'The TypeScript strict compiler option enables a group of stricter type checks, including strictNullChecks and noImplicitAny. This improves the detection of potential type errors during development.',
            example: '{ "compilerOptions": { "strict": true } }'
        }
    ]
};