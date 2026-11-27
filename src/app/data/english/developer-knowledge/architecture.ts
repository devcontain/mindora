import { Topic } from '../../../models/topic-model';

export const architecture: Topic = {
    id: 45,
    name: 'Software Architecture',
    cards: [
        {
            id: 1,
            front: 'Software Architecture',
            back: 'Softwarearchitektur beschreibt die grundlegende Struktur eines Softwaresystems, seine Bestandteile, deren Verantwortlichkeiten und ihre Beziehungen untereinander. Sie beeinflusst unter anderem die Wartbarkeit, Erweiterbarkeit, Sicherheit und Leistungsfähigkeit einer Anwendung.',
            explanation: 'Software architecture describes the fundamental structure of a software system, its components, their responsibilities and their relationships. It influences maintainability, extensibility, security and performance.'
        },
        {
            id: 2,
            front: 'Separation of Concerns (SoC)',
            back: 'Separation of Concerns bezeichnet die Aufteilung einer Anwendung in Bereiche mit unterschiedlichen Verantwortlichkeiten. Beispielsweise werden Darstellung, Geschäftslogik und Datenverwaltung voneinander getrennt. Dadurch können einzelne Bereiche unabhängiger entwickelt und gewartet werden.',
            explanation: 'Separation of concerns is the principle of dividing an application into areas with different responsibilities. Presentation, business logic and data management can be separated, allowing individual areas to be developed and maintained more independently.',
            example: 'Component -> Service -> Data Source'
        },
        {
            id: 3,
            front: 'SOLID',
            back: 'SOLID ist eine Sammlung von fünf Entwurfsprinzipien der objektorientierten Softwareentwicklung. Sie umfasst Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation und Dependency Inversion. Ziel ist eine wartbare, flexible und leichter testbare Softwarestruktur.',
            explanation: 'SOLID is a collection of five object-oriented software design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation and Dependency Inversion. Their goal is to create maintainable, flexible and testable software.'
        },
        {
            id: 4,
            front: 'Single Responsibility Principle (SRP)',
            back: 'Eine Klasse oder ein Modul sollte nur einen wesentlichen Grund für eine Änderung besitzen. Verantwortlichkeiten sollten so getrennt werden, dass Änderungen eines fachlichen Bereichs möglichst wenige andere Bereiche beeinflussen.',
            explanation: 'A class or module should have only one primary reason to change. Responsibilities should be separated so that changes in one functional area affect as few other areas as possible.',
            example: 'VocabularyService manages vocabulary data; SoloTraining manages learning interactions.'
        },
        {
            id: 5,
            front: 'Open-Closed Principle (OCP)',
            back: 'Softwarebestandteile sollten offen für Erweiterungen, aber geschlossen gegenüber unnötigen Änderungen bestehender Implementierungen sein. Neue Funktionalität sollte möglichst durch Erweiterung vorhandener Abstraktionen ergänzt werden können.',
            explanation: 'Software entities should be open for extension but closed to unnecessary modification of existing implementations. New functionality should ideally be added by extending existing abstractions.'
        },
        {
            id: 6,
            front: 'Liskov Substitution Principle (LSP)',
            back: 'Objekte eines Untertyps sollten anstelle von Objekten ihres Basistyps verwendet werden können, ohne das erwartete Verhalten des Programms zu verletzen. Ein Untertyp muss die vertraglichen Zusicherungen seines Basistyps respektieren.',
            explanation: 'Objects of a subtype should be usable in place of objects of their base type without violating the expected behaviour of the program. A subtype must respect the behavioural contracts of its base type.'
        },
        {
            id: 7,
            front: 'Interface Segregation Principle (ISP)',
            back: 'Klassen sollten nicht von Schnittstellen oder Methoden abhängig sein, die sie nicht benötigen. Mehrere kleine, gezielte Interfaces sind häufig sinnvoller als ein großes Interface mit zahlreichen unterschiedlichen Verantwortlichkeiten.',
            explanation: 'Classes should not depend on interfaces or methods they do not need. Multiple small, focused interfaces are often preferable to one large interface with numerous unrelated responsibilities.',
            example: 'interface Readable { read(): string; } interface Writable { write(value: string): void; }'
        },
        {
            id: 8,
            front: 'Dependency Inversion Principle (DIP)',
            back: 'Übergeordnete und untergeordnete Module sollten von Abstraktionen statt unmittelbar voneinander abhängig sein. Dadurch können konkrete Implementierungen leichter ausgetauscht werden. Dependency Injection kann bei der Umsetzung dieses Prinzips helfen.',
            explanation: 'High-level and low-level modules should depend on abstractions rather than directly on each other. This makes concrete implementations easier to replace. Dependency injection can help implement this principle.',
            example: 'interface StorageService { save(data: string): void; }'
        },
        {
            id: 9,
            front: 'DRY - Don’t Repeat Yourself',
            back: 'DRY besagt, dass dieselbe fachliche Information oder Logik möglichst nur an einer maßgeblichen Stelle definiert werden sollte. Dadurch werden widersprüchliche Implementierungen und unnötiger Wartungsaufwand vermieden. Ähnlich aussehender Code muss jedoch nicht zwangsläufig zusammengeführt werden.',
            explanation: 'DRY states that the same piece of knowledge or business logic should ideally have a single authoritative representation. This prevents inconsistent implementations and unnecessary maintenance effort. Similar-looking code does not necessarily need to be combined.'
        },
        {
            id: 10,
            front: 'KISS - Keep It Simple, Stupid',
            back: 'KISS ist ein Entwicklungsprinzip, nach dem Lösungen möglichst einfach und verständlich gestaltet werden sollten. Unnötige Komplexität erschwert die Wartung, Fehlersuche und Weiterentwicklung einer Anwendung.',
            explanation: 'KISS is a development principle stating that solutions should be kept as simple and understandable as possible. Unnecessary complexity makes maintenance, debugging and further development more difficult.'
        },
        {
            id: 11,
            front: 'YAGNI - You Aren’t Gonna Need It',
            back: 'YAGNI besagt, dass Funktionen und Abstraktionen nicht ausschließlich aufgrund hypothetischer zukünftiger Anforderungen implementiert werden sollten. Entwickelt wird zunächst das, was tatsächlich benötigt wird. Dadurch werden unnötiger Entwicklungsaufwand und zusätzliche Komplexität vermieden.',
            explanation: 'YAGNI states that features and abstractions should not be implemented solely because of hypothetical future requirements. Development focuses on what is actually needed, avoiding unnecessary effort and additional complexity.'
        },
        {
            id: 12,
            front: 'Clean Code',
            back: 'Clean Code bezeichnet Quellcode, der verständlich, nachvollziehbar und wartbar gestaltet ist. Dazu gehören aussagekräftige Namen, klar abgegrenzte Verantwortlichkeiten und übersichtliche Kontrollstrukturen. Clean Code ist keine einzelne verbindliche technische Spezifikation.',
            explanation: 'Clean code refers to source code designed to be understandable, readable and maintainable. It includes meaningful names, clearly defined responsibilities and understandable control structures. Clean code is not a single mandatory technical specification.',
            example: 'function calculateTotalPrice(price: number, quantity: number) { return price * quantity; }'
        },
        {
            id: 13,
            front: 'Refactoring',
            back: 'Refactoring bezeichnet die Verbesserung der internen Struktur bestehenden Quellcodes, ohne dessen beobachtbares Verhalten zu verändern. Ziel ist beispielsweise eine bessere Lesbarkeit, geringere Komplexität oder einfachere Wartbarkeit.',
            explanation: 'Refactoring is the process of improving the internal structure of existing source code without changing its observable behaviour. Its goals include improved readability, reduced complexity and easier maintenance.'
        },
        {
            id: 14,
            front: 'Technical Debt',
            back: 'Technische Schulden entstehen durch technische Entscheidungen oder Qualitätsmängel, die zukünftige Änderungen erschweren und zusätzlichen Aufwand verursachen können. Bewusst eingegangene technische Schulden können kurzfristig sinnvoll sein, sollten jedoch nachvollziehbar verwaltet werden.',
            explanation: 'Technical debt arises from technical decisions or quality deficiencies that can make future changes more difficult and costly. Deliberately incurred technical debt may be reasonable in the short term but should be managed transparently.'
        },
        {
            id: 15,
            front: 'Encapsulation',
            back: 'Kapselung bezeichnet das Zusammenfassen von Daten und zugehörigem Verhalten innerhalb einer Einheit sowie die kontrollierte Freigabe ihrer internen Bestandteile. Andere Teile der Anwendung greifen über definierte Schnittstellen auf diese Einheit zu.',
            explanation: 'Encapsulation is the grouping of data and related behaviour within a unit while controlling access to its internal implementation. Other parts of the application interact with that unit through defined interfaces.',
            example: 'class Counter { #count = 0; increment() { this.#count++; } getCount() { return this.#count; } }'
        },
        {
            id: 16,
            front: 'Abstraction',
            back: 'Abstraktion reduziert komplexe Implementierungen auf die für ihre Verwendung wesentlichen Eigenschaften und Schnittstellen. Anwender einer Abstraktion müssen nicht sämtliche internen Implementierungsdetails kennen.',
            explanation: 'Abstraction reduces complex implementations to the essential properties and interfaces required for their use. Consumers of an abstraction do not need to know every internal implementation detail.',
            example: 'this.vocabularyService.shuffleCards(cards);'
        },
        {
            id: 17,
            front: 'Inheritance',
            back: 'Vererbung ermöglicht es einer Klasse, Eigenschaften und Methoden einer anderen Klasse zu übernehmen und gegebenenfalls zu erweitern oder zu überschreiben. Sie beschreibt typischerweise eine Ist-ein-Beziehung zwischen Klassen.',
            explanation: 'Inheritance allows a class to acquire properties and methods from another class and optionally extend or override them. It typically represents an is-a relationship between classes.',
            example: 'class Admin extends User {}'
        },
        {
            id: 18,
            front: 'Polymorphism',
            back: 'Polymorphismus ermöglicht es, unterschiedliche Implementierungen über eine gemeinsame Schnittstelle zu verwenden. Derselbe Methodenaufruf kann abhängig vom konkreten Objekt unterschiedliches Verhalten auslösen.',
            explanation: 'Polymorphism allows different implementations to be used through a common interface. The same method call can produce different behaviour depending on the concrete object.',
            example: 'interface Shape { area(): number; }'
        },
        {
            id: 19,
            front: 'Composition',
            back: 'Komposition bezeichnet den Aufbau komplexerer Einheiten durch die Kombination kleinerer Bestandteile. Anstatt Verhalten ausschließlich durch Vererbung zu übernehmen, verwendet eine Klasse oder Komponente andere Objekte oder Komponenten zur Erfüllung ihrer Aufgaben.',
            explanation: 'Composition is the construction of more complex units by combining smaller parts. Rather than relying exclusively on inheritance, a class or component uses other objects or components to fulfil its responsibilities.',
            example: '<app-vocabulary-list [topic]="topic" />'
        },
        {
            id: 20,
            front: 'Coupling',
            back: 'Coupling beschreibt den Grad der Abhängigkeit zwischen Softwarebestandteilen. Eine starke Kopplung kann dazu führen, dass Änderungen eines Bestandteils zahlreiche andere Bestandteile beeinflussen. Eine möglichst lose Kopplung erleichtert häufig den Austausch und die Wartung einzelner Module.',
            explanation: 'Coupling describes the degree of dependency between software components. Tight coupling can cause changes in one component to affect numerous others. Loose coupling often makes individual modules easier to replace and maintain.'
        },
        {
            id: 21,
            front: 'Cohesion',
            back: 'Cohesion beschreibt, wie eng die Verantwortlichkeiten innerhalb eines Moduls oder einer Klasse fachlich zusammengehören. Eine hohe Kohäsion bedeutet, dass die enthaltenen Bestandteile auf einen gemeinsamen, klar definierten Zweck ausgerichtet sind.',
            explanation: 'Cohesion describes how closely the responsibilities within a module or class are related. High cohesion means that its internal elements contribute to a common, clearly defined purpose.'
        },
        {
            id: 22,
            front: 'MVC - Model View Controller',
            back: 'MVC ist ein Architekturmuster, das eine Anwendung in Model, View und Controller unterteilt. Das Model verwaltet Daten und fachliche Logik, die View stellt Informationen dar und der Controller verarbeitet Eingaben und koordiniert entsprechende Aktionen.',
            explanation: 'MVC is an architectural pattern that divides an application into Model, View and Controller. The model manages data and domain logic, the view presents information and the controller processes input and coordinates corresponding actions.',
            example: 'Model <-> Controller <-> View'
        },
        {
            id: 23,
            front: 'MVVM - Model View ViewModel',
            back: 'MVVM ist ein Architekturmuster, das Model, View und ViewModel voneinander trennt. Das ViewModel stellt aufbereitete Daten und Aktionen für die View bereit. Datenbindungen ermöglichen eine Synchronisierung zwischen Darstellung und Darstellungszustand.',
            explanation: 'MVVM is an architectural pattern that separates the Model, View and ViewModel. The ViewModel exposes prepared data and actions for the view. Data binding enables synchronisation between the presentation and its state.',
            example: 'Model <-> ViewModel <-> View'
        },
        {
            id: 24,
            front: 'Layered Architecture',
            back: 'Eine Schichtenarchitektur unterteilt eine Anwendung in logisch getrennte Ebenen mit definierten Verantwortlichkeiten. Typische Schichten sind Presentation Layer, Business Logic Layer und Data Access Layer. Die Abhängigkeiten zwischen den Schichten werden durch Architekturregeln festgelegt.',
            explanation: 'Layered architecture divides an application into logically separated layers with defined responsibilities. Typical layers include the presentation layer, business logic layer and data access layer. Dependencies between layers are governed by architectural rules.',
            example: 'Presentation Layer -> Business Logic Layer -> Data Access Layer'
        },
        {
            id: 25,
            front: 'Design Pattern',
            back: 'Ein Design Pattern ist ein wiederverwendbarer Lösungsansatz für ein regelmäßig auftretendes Problem im Softwareentwurf. Es beschreibt eine bewährte Struktur oder Vorgehensweise und keinen unmittelbar kopierbaren fertigen Programmcode. Beispiele sind Factory, Strategy und Observer.',
            explanation: 'A design pattern is a reusable solution approach to a recurring software design problem. It describes a proven structure or approach rather than directly reusable finished source code. Examples include Factory, Strategy and Observer.'
        }
    ]
};