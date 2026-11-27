import { Topic } from '../../../models/topic-model';

export const interview: Topic = {
    id: 50,
    name: 'Developer Interview',
    cards: [
        {
            id: 1,
            front: 'What is the difference between JavaScript and TypeScript?',
            back: 'JavaScript ist eine Programmiersprache, die beispielsweise im Browser oder unter Node.js ausgeführt werden kann. TypeScript erweitert JavaScript um ein statisches Typsystem und zusätzliche Sprachmöglichkeiten. Dadurch können viele Fehler bereits während der Entwicklung erkannt werden. TypeScript wird normalerweise vor der Ausführung in JavaScript übersetzt.',
            explanation: 'JavaScript is a programming language that can run in environments such as web browsers or Node.js. TypeScript extends JavaScript with a static type system and additional language features. This allows many errors to be detected during development. TypeScript is normally compiled into JavaScript before execution.'
        },
        {
            id: 2,
            front: 'What is the difference between var, let and const?',
            back: 'var besitzt einen Funktionsgültigkeitsbereich, während let und const einen Blockgültigkeitsbereich besitzen. let erlaubt die erneute Zuweisung eines Wertes. const verhindert die erneute Zuweisung der Variablen, schützt jedoch enthaltene Objekte oder Arrays nicht automatisch vor Veränderungen. In modernem JavaScript werden let und const normalerweise bevorzugt.',
            explanation: 'var has function scope, whereas let and const have block scope. let allows reassignment. const prevents reassignment of the variable but does not automatically protect referenced objects or arrays from mutation. Modern JavaScript generally favours let and const.',
            example: 'let count = 0; count++; const name = "Mindora";'
        },
        {
            id: 3,
            front: 'What is the difference between == and ===?',
            back: 'Der Operator == vergleicht zwei Werte und kann dabei automatische Typumwandlungen durchführen. Der Operator === verwendet einen strikten Vergleich ohne solche Typumwandlungen. In den meisten Fällen ist === vorzuziehen, da das Vergleichsverhalten dadurch eindeutiger und besser vorhersehbar ist.',
            explanation: 'The == operator compares two values and may perform automatic type coercion. The === operator performs strict equality comparison without such coercion. In most cases, === is preferable because its comparison behaviour is clearer and more predictable.',
            example: '5 == "5"; // true | 5 === "5"; // false'
        },
        {
            id: 4,
            front: 'What is the difference between null and undefined?',
            back: 'undefined bezeichnet normalerweise einen nicht zugewiesenen oder nicht vorhandenen Wert. null wird häufig bewusst verwendet, um das Fehlen eines Wertes auszudrücken. Beide sind eigenständige primitive JavaScript-Werte und können in TypeScript als separate Typen behandelt werden.',
            explanation: 'undefined normally represents an unassigned or missing value. null is commonly used intentionally to express the absence of a value. Both are distinct primitive JavaScript values and can be treated as separate types in TypeScript.',
            example: 'let value; // undefined | const selected = null;'
        },
        {
            id: 5,
            front: 'What is the difference between synchronous and asynchronous execution?',
            back: 'Bei synchroner Ausführung werden Anweisungen nacheinander verarbeitet, wobei eine laufende synchrone Operation die weitere Ausführung blockieren kann. Asynchrone Verarbeitung ermöglicht es, beispielsweise auf Netzwerkantworten zu warten, ohne den JavaScript-Hauptthread während der gesamten Wartezeit zu blockieren. Ergebnisse können über Callbacks, Promises oder Observables verarbeitet werden.',
            explanation: 'During synchronous execution, instructions are processed sequentially, and an ongoing synchronous operation can block further execution. Asynchronous processing allows operations such as waiting for network responses without blocking the JavaScript main thread for the entire waiting period. Results can be handled using callbacks, promises or observables.'
        },
        {
            id: 6,
            front: 'What is the difference between a Promise and an Observable?',
            back: 'Ein Promise repräsentiert ein zukünftiges Ergebnis, das entweder erfolgreich erfüllt oder abgelehnt wird. Ein Observable kann keinen, einen oder mehrere Werte über einen Zeitraum ausgeben. Observables unterstützen Operatoren zur Verarbeitung von Datenströmen und ermöglichen das Beenden eines Abonnements. Ein gewöhnliches Promise besitzt keine eingebaute allgemeine Abbruchfunktion.',
            explanation: 'A promise represents a future result that is either fulfilled or rejected. An observable can emit zero, one or multiple values over time. Observables support operators for processing data streams and allow subscriptions to be cancelled. A standard promise has no built-in general cancellation mechanism.'
        },
        {
            id: 7,
            front: 'How do async and await work?',
            back: 'Eine mit async deklarierte Funktion gibt immer ein Promise zurück. await unterbricht die weitere Ausführung innerhalb dieser Funktion, bis der erwartete Wert beziehungsweise das Promise verarbeitet wurde. Andere Aufgaben können währenddessen weiterhin ausgeführt werden. Fehler abgelehnter Promises können beispielsweise mit try und catch behandelt werden.',
            explanation: 'A function declared with async always returns a promise. await suspends further execution within that function until the awaited value or promise has been resolved or rejected. Other tasks can continue during this period. Rejected promises can be handled using try and catch.',
            example: 'async function loadData() { const response = await fetch("/api/data"); return response.json(); }'
        },
        {
            id: 8,
            front: 'What is the difference between map(), filter() and reduce()?',
            back: 'map() verarbeitet die Elemente eines Arrays und erzeugt ein neues Array mit den transformierten Werten. filter() erzeugt ein neues Array mit den Elementen, die eine definierte Bedingung erfüllen. reduce() verarbeitet die Elemente schrittweise zu einem gemeinsamen Ergebnis, beispielsweise einer Summe, einem Objekt oder einem anderen Array.',
            explanation: 'map() processes array elements and creates a new array containing transformed values. filter() creates a new array containing elements that satisfy a defined condition. reduce() processes elements incrementally into a combined result, such as a sum, an object or another array.',
            example: '[1, 2, 3].reduce((sum, value) => sum + value, 0); // 6'
        },
        {
            id: 9,
            front: 'What is the difference between an interface and a class?',
            back: 'Ein Interface beschreibt in TypeScript die erwartete Struktur eines Wertes oder Objekts. Es existiert normalerweise nur während der Typprüfung und wird nicht als ausführbarer JavaScript-Code ausgegeben. Eine Klasse definiert dagegen Eigenschaften, Methoden und gegebenenfalls einen Konstruktor. Sie kann zur Laufzeit instanziiert werden.',
            explanation: 'An interface describes the expected structure of a value or object in TypeScript. It normally exists only during type checking and is not emitted as executable JavaScript. A class defines properties, methods and optionally a constructor. It can be instantiated at runtime.',
            example: 'interface User { name: string; } class Person implements User { name = "Alex"; }'
        },
        {
            id: 10,
            front: 'What are generics in TypeScript?',
            back: 'Generics ermöglichen die Entwicklung wiederverwendbarer Funktionen, Klassen und Typen, deren konkrete Datentypen flexibel festgelegt werden können. Dabei bleiben Typinformationen erhalten, sodass nicht auf any zurückgegriffen werden muss. Generics können außerdem durch Bedingungen auf bestimmte Typstrukturen eingeschränkt werden.',
            explanation: 'Generics enable reusable functions, classes and types whose concrete data types can be specified flexibly. Type information is preserved without relying on any. Generics can also be constrained to specific type structures.',
            example: 'function identity<T>(value: T): T { return value; }'
        },
        {
            id: 11,
            front: 'What is Angular and why would you use it?',
            back: 'Angular ist ein Framework zur Entwicklung von Webanwendungen auf Basis von TypeScript. Es stellt unter anderem eine komponentenbasierte Architektur, Routing, Dependency Injection, Formularverarbeitung und reaktive Zustandsverwaltung bereit. Angular eignet sich besonders für strukturierte Anwendungen, die langfristig entwickelt und gewartet werden sollen.',
            explanation: 'Angular is a TypeScript-based framework for developing web applications. It provides features including component-based architecture, routing, dependency injection, form handling and reactive state management. Angular is particularly suitable for structured applications intended for long-term development and maintenance.'
        },
        {
            id: 12,
            front: 'What is the difference between a component and a service?',
            back: 'Eine Angular-Komponente verwaltet einen bestimmten Bereich der Benutzeroberfläche und dessen Interaktionen. Ein Service stellt beispielsweise wiederverwendbare Geschäftslogik, Datenverwaltung oder Kommunikationsfunktionen bereit. Durch die Trennung können mehrere Komponenten dieselben Funktionen verwenden, ohne diese jeweils erneut implementieren zu müssen.',
            explanation: 'An Angular component manages a specific part of the user interface and its interactions. A service provides reusable business logic, data management or communication functionality. This separation allows multiple components to use the same functionality without implementing it repeatedly.'
        },
        {
            id: 13,
            front: 'What is Dependency Injection?',
            back: 'Dependency Injection ist ein Entwurfsmuster, bei dem eine Klasse ihre benötigten Abhängigkeiten von außen erhält, anstatt diese selbst zu erzeugen. Angular verwendet dafür ein System aus Injectors und Providern. Dadurch können Abhängigkeiten zentral verwaltet und bei Bedarf durch andere Implementierungen oder Testobjekte ersetzt werden.',
            explanation: 'Dependency injection is a design pattern in which a class receives its required dependencies from an external source rather than creating them itself. Angular uses a system of injectors and providers for this purpose. Dependencies can therefore be managed centrally and replaced with alternative implementations or test objects when necessary.',
            example: 'vocabularyService = inject(VocabularyService);'
        },
        {
            id: 14,
            front: 'How do Angular components communicate with each other?',
            back: 'Über Inputs können übergeordnete Komponenten Daten an untergeordnete Komponenten übergeben. Über Outputs können untergeordnete Komponenten Ereignisse an übergeordnete Komponenten melden. Für gemeinsam verwendete Daten oder die Kommunikation zwischen unabhängigen Komponenten können Services mit Signals oder Observables eingesetzt werden.',
            explanation: 'Inputs allow parent components to pass data to child components. Outputs allow child components to emit events to parent components. Services using signals or observables can be used for shared data or communication between independent components.',
            example: 'topic = input.required<Topic>(); closed = output<void>();'
        },
        {
            id: 15,
            front: 'What is the difference between signal(), computed() and effect()?',
            back: 'signal() erstellt einen beschreibbaren reaktiven Zustand. computed() erstellt einen schreibgeschützten Wert, der aus anderen reaktiven Datenquellen abgeleitet und bei Bedarf berechnet wird. effect() führt eine Funktion aus, die auf Änderungen erfasster Abhängigkeiten reagiert. Effects sollten hauptsächlich für Seiteneffekte und nicht zur Berechnung abgeleiteter Zustände verwendet werden.',
            explanation: 'signal() creates writable reactive state. computed() creates a read-only value derived from other reactive data sources and evaluated lazily. effect() executes a function that responds to changes in tracked dependencies. Effects should primarily be used for side effects rather than calculating derived state.',
            example: 'count = signal(0); double = computed(() => this.count() * 2);'
        },
        {
            id: 16,
            front: 'How does Angular Change Detection work?',
            back: 'Change Detection ist der Mechanismus, mit dem Angular prüft, ob sich für die Darstellung relevante Werte verändert haben. Anschließend werden betroffene Template-Bindings aktualisiert. Signals ermöglichen Angular, reaktive Abhängigkeiten zu erfassen. Die konkreten Auslöser und der Umfang der Überprüfung hängen unter anderem von der Change-Detection-Strategie und der Anwendungskonfiguration ab.',
            explanation: 'Change detection is the mechanism Angular uses to determine whether values relevant to the view have changed. Affected template bindings are then updated. Signals allow Angular to track reactive dependencies. The exact triggers and scope of checking depend on factors including the change detection strategy and application configuration.'
        },
        {
            id: 17,
            front: 'What is the difference between template-driven and reactive forms?',
            back: 'Template-driven Forms definieren einen wesentlichen Teil der Formularstruktur und Datenbindung direkt im HTML-Template. Reactive Forms verwalten die Formularstruktur und ihren Zustand explizit im TypeScript-Code. Reactive Forms bieten dadurch besonders bei komplexen Formularen eine gezielte Kontrolle über Validierung, Zustandsänderungen und automatisierte Tests.',
            explanation: 'Template-driven forms define a substantial part of their structure and data binding directly in the HTML template. Reactive forms explicitly manage form structure and state in TypeScript code. Reactive forms therefore provide targeted control over validation, state changes and automated testing, particularly for complex forms.',
            example: 'name = new FormControl("", Validators.required);'
        },
        {
            id: 18,
            front: 'What is a REST API and how do you communicate with it?',
            back: 'Eine REST API ist eine Schnittstelle, die sich an den Architekturprinzipien von REST orientiert. Bei HTTP-basierten Schnittstellen werden Ressourcen typischerweise über URLs angesprochen und mithilfe von HTTP-Methoden verarbeitet. In Angular kann der HttpClient verwendet werden, um Anfragen zu senden und die Antworten über Observables zu verarbeiten.',
            explanation: 'A REST API is an interface designed according to REST architectural principles. In HTTP-based interfaces, resources are typically addressed through URLs and manipulated using HTTP methods. Angular HttpClient can be used to send requests and process responses through observables.',
            example: 'tasks$ = this.http.get<Task[]>("/api/tasks");'
        },
        {
            id: 19,
            front: 'How do you handle HTTP errors in an Angular application?',
            back: 'HTTP-Fehler können über den Fehlerkanal eines Observables verarbeitet werden. RxJS stellt dafür beispielsweise den Operator catchError() bereit. Abhängig vom Fehler können verständliche Meldungen angezeigt, geeignete Ersatzwerte bereitgestellt oder Fehler weitergegeben werden. Interceptors können zusätzlich zur zentralen Verarbeitung bestimmter HTTP-Fehler eingesetzt werden.',
            explanation: 'HTTP errors can be handled through the error channel of an observable. RxJS provides operators such as catchError() for this purpose. Depending on the error, meaningful messages can be displayed, suitable fallback values provided or errors propagated. Interceptors can also be used for centralised handling of certain HTTP errors.',
            example: 'this.http.get<Task[]>("/api/tasks").pipe(catchError(error => { console.error(error); return of([]); }));'
        },
        {
            id: 20,
            front: 'How do you improve the performance of a web application?',
            back: 'Zunächst sollte die tatsächliche Ursache eines Leistungsproblems durch Messungen ermittelt werden. Mögliche Optimierungen sind Lazy Loading, kleinere Bundles, optimierte Bilder, geeignete Cache-Strategien und die Vermeidung unnötiger Berechnungen. In Angular können außerdem Signals, Computed Signals und geeignete Tracking-Ausdrücke bei wiederholten Template-Elementen eingesetzt werden.',
            explanation: 'The actual cause of a performance issue should first be identified through measurement. Possible optimisations include lazy loading, smaller bundles, optimised images, appropriate caching strategies and avoiding unnecessary computations. Angular can additionally use signals, computed signals and suitable tracking expressions for repeated template elements.'
        },
        {
            id: 21,
            front: 'How do you ensure that your code is maintainable?',
            back: 'Wartbarer Code entsteht durch verständliche Benennungen, klar abgegrenzte Verantwortlichkeiten und eine nachvollziehbare Projektstruktur. Wiederverwendbare fachliche Logik sollte sinnvoll zentralisiert werden. Typisierung, automatisierte Tests, Code Reviews und gezieltes Refactoring können die langfristige Wartbarkeit zusätzlich verbessern. Unnötige Abstraktionen sollten vermieden werden.',
            explanation: 'Maintainable code is achieved through meaningful naming, clearly defined responsibilities and an understandable project structure. Reusable business logic should be centralised where appropriate. Typing, automated tests, code reviews and targeted refactoring can further improve long-term maintainability. Unnecessary abstractions should be avoided.'
        },
        {
            id: 22,
            front: 'How do you approach debugging an application?',
            back: 'Zunächst wird versucht, den Fehler zuverlässig zu reproduzieren und das tatsächliche Verhalten mit dem erwarteten Verhalten zu vergleichen. Anschließend werden Fehlermeldungen, Stack Traces, Netzwerkaktivitäten und relevante Programmzustände untersucht. Nach der Identifikation der Ursache wird eine gezielte Korrektur vorgenommen und überprüft, ob bestehende Funktionen weiterhin korrekt arbeiten.',
            explanation: 'The first step is to reproduce the issue reliably and compare actual behaviour with expected behaviour. Error messages, stack traces, network activity and relevant program states are then investigated. After identifying the root cause, a targeted correction is implemented and existing functionality is checked for regressions.'
        },
        {
            id: 23,
            front: 'What is the difference between unit, integration and end-to-end testing?',
            back: 'Unit Tests überprüfen einzelne Softwareeinheiten möglichst isoliert. Integration Tests überprüfen das Zusammenspiel mehrerer Bestandteile. End-to-End Tests überprüfen vollständige Anwendungsabläufe aus Benutzersicht. Die verschiedenen Testarten ergänzen sich und helfen dabei, Fehler auf unterschiedlichen Ebenen einer Anwendung zu erkennen.',
            explanation: 'Unit tests verify individual software units in isolation where possible. Integration tests verify interactions between multiple components. End-to-end tests verify complete application workflows from the perspective of a user. These testing approaches complement each other and help detect defects at different application levels.'
        },
        {
            id: 24,
            front: 'How do you resolve a Git merge conflict?',
            back: 'Zunächst werden die betroffenen Dateien und die unterschiedlichen Änderungen untersucht. Anschließend wird entschieden, welche Inhalte übernommen oder miteinander kombiniert werden müssen. Nach der manuellen Konfliktauflösung werden die Dateien geprüft, zur Staging Area hinzugefügt und der Merge oder Rebase entsprechend abgeschlossen. Abschließende Tests sollen sicherstellen, dass keine Funktionalität verloren gegangen ist.',
            explanation: 'First, the affected files and conflicting changes are examined. The intended contents are then selected or combined. After manually resolving the conflicts, the files are checked, added to the staging area and the merge or rebase is completed accordingly. Final tests help ensure that no functionality has been lost.',
            example: 'git status -> Resolve conflicts -> git add -> Complete merge or rebase'
        },
        {
            id: 25,
            front: 'How would you structure a new Angular application?',
            back: 'Die Projektstruktur sollte sich an den tatsächlichen Anforderungen und Verantwortlichkeiten der Anwendung orientieren. Fachliche Funktionsbereiche können in Features organisiert werden. Wiederverwendbare Komponenten können in Shared-Bereichen liegen, zentrale Services in Core-Bereichen und gemeinsame Datenstrukturen in Models. Die Struktur sollte verständlich, erweiterbar und der Größe des Projekts angemessen sein.',
            explanation: 'The project structure should reflect the actual requirements and responsibilities of the application. Functional areas can be organised into features. Reusable components can be placed in shared areas, central services in core areas and common data structures in models. The structure should be understandable, extensible and appropriate for the size of the project.',
            example: 'src/app/ -> core/ | features/ | shared/ | models/ | data/'
        }
    ]
};