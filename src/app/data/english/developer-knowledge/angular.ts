import { Topic } from '../../../models/topic-model';

export const angular: Topic = {
    id: 43,
    name: 'Angular Fundamentals',
    cards: [
        {
            id: 1,
            front: 'Angular',
            back: 'Angular ist ein TypeScript-basiertes Framework zur Entwicklung von Webanwendungen. Es stellt unter anderem Komponenten, Routing, Formularverwaltung, Dependency Injection und reaktive Zustandsverwaltung bereit.',
            explanation: 'Angular is a TypeScript-based framework for developing web applications. It provides components, routing, form management, dependency injection and reactive state management.'
        },
        {
            id: 2,
            front: 'Component',
            back: 'Eine Component ist ein eigenständiger Baustein einer Angular-Anwendung. Sie verbindet die Programmlogik einer TypeScript-Klasse mit einem HTML-Template und optionalen Styles. Komponenten können wiederverwendet und miteinander kombiniert werden.',
            explanation: 'A component is an independent building block of an Angular application. It combines the logic of a TypeScript class with an HTML template and optional styles. Components can be reused and combined.',
            example: '@Component({ selector: "app-card", templateUrl: "./card.html" })'
        },
        {
            id: 3,
            front: 'Standalone Component',
            back: 'Eine Standalone Component benötigt kein NgModule für ihre Deklaration. Sie kann benötigte Components, Directives und Pipes direkt über ihre imports-Eigenschaft einbinden. Standalone ist seit Angular 19 der Standard.',
            explanation: 'A standalone component does not require an NgModule for its declaration. It can directly import required components, directives and pipes through its imports property. Standalone has been the default since Angular 19.',
            example: '@Component({ imports: [RouterOutlet], templateUrl: "./app.html" })'
        },
        {
            id: 4,
            front: 'Decorator',
            back: 'Ein Decorator ist eine Sprachkonstruktion, mit der Klassen oder andere Deklarationen um zusätzliche Informationen oder Verhalten ergänzt werden können. Angular verwendet Decorators wie @Component und @Injectable, um Klassen für das Framework zu konfigurieren.',
            explanation: 'A decorator is a language construct used to attach additional information or behaviour to classes or other declarations. Angular uses decorators such as @Component and @Injectable to configure classes for the framework.',
            example: '@Injectable({ providedIn: "root" })'
        },
        {
            id: 5,
            front: 'Template',
            back: 'Ein Template beschreibt die Benutzeroberfläche einer Angular-Komponente. Es besteht aus HTML und zusätzlichen Angular-Ausdrücken, mit denen Daten dargestellt, Ereignisse verarbeitet und Inhalte dynamisch erzeugt werden können.',
            explanation: 'A template describes the user interface of an Angular component. It consists of HTML and additional Angular expressions used to display data, handle events and generate content dynamically.',
            example: '<h1>{{ title }}</h1>'
        },
        {
            id: 6,
            front: 'Selector',
            back: 'Ein Selector bestimmt, wie eine Angular-Komponente oder Directive innerhalb eines Templates erkannt und eingebunden wird. Bei Komponenten wird häufig ein eigener HTML-Elementname verwendet.',
            explanation: 'A selector determines how an Angular component or directive is identified and included within a template. Components commonly use a custom HTML element name.',
            example: 'selector: "app-flashcard"'
        },
        {
            id: 7,
            front: 'Service',
            back: 'Ein Service ist eine Klasse, die wiederverwendbare Logik oder gemeinsam benötigte Daten bereitstellt. Services ermöglichen es, Geschäftslogik und Datenverwaltung von der Darstellung innerhalb der Komponenten zu trennen.',
            explanation: 'A service is a class that provides reusable logic or shared data. Services allow business logic and data management to be separated from component presentation.',
            example: '@Injectable({ providedIn: "root" }) export class VocabularyService {}'
        },
        {
            id: 8,
            front: 'Dependency Injection',
            back: 'Dependency Injection ist ein Entwurfsmuster, bei dem eine Klasse ihre benötigten Abhängigkeiten von außen erhält, anstatt diese selbst zu erzeugen. Angular verwaltet diese Abhängigkeiten über sein Injector-System. Dadurch werden Komponenten leichter austauschbar und testbar.',
            explanation: 'Dependency injection is a design pattern in which a class receives its dependencies from an external source rather than creating them itself. Angular manages these dependencies through its injector system, making components easier to replace and test.',
            example: 'vocabularyService = inject(VocabularyService);'
        },
        {
            id: 9,
            front: 'Injector',
            back: 'Ein Injector ist ein Bestandteil des Dependency-Injection-Systems. Er löst angeforderte Abhängigkeiten anhand registrierter Provider auf und stellt die entsprechenden Werte oder Instanzen bereit. Angular verwendet eine hierarchische Injector-Struktur.',
            explanation: 'An injector is part of the dependency injection system. It resolves requested dependencies using registered providers and supplies the corresponding values or instances. Angular uses a hierarchical injector structure.'
        },
        {
            id: 10,
            front: 'Provider',
            back: 'Ein Provider beschreibt, wie Angular eine bestimmte Abhängigkeit bereitstellen soll. Eine Abhängigkeit kann beispielsweise durch eine Klasse, einen festen Wert, eine Factory-Funktion oder einen Verweis auf einen anderen Provider bereitgestellt werden.',
            explanation: 'A provider describes how Angular should supply a particular dependency. A dependency can be provided through a class, a fixed value, a factory function or a reference to another provider.',
            example: 'providers: [{ provide: ApiService, useClass: ApiService }]'
        },
        {
            id: 11,
            front: 'providedIn: root',
            back: 'Die Einstellung providedIn: root registriert einen Service beim Root Environment Injector der Anwendung. Dadurch steht normalerweise eine gemeinsam verwendete Instanz innerhalb der Anwendung zur Verfügung, sofern kein untergeordneter Provider den Service überschreibt.',
            explanation: 'The providedIn: root configuration registers a service with the application root environment injector. This normally provides a shared instance throughout the application unless a child provider overrides the service.',
            example: '@Injectable({ providedIn: "root" })'
        },
        {
            id: 12,
            front: 'Interpolation',
            back: 'Interpolation ermöglicht die Darstellung dynamischer Werte innerhalb eines Angular-Templates. Ein Ausdruck wird zwischen doppelte geschweifte Klammern geschrieben. Angular wertet den Ausdruck aus und stellt das Ergebnis als Text dar.',
            explanation: 'Interpolation enables dynamic values to be displayed within an Angular template. An expression is written between double curly braces. Angular evaluates the expression and displays the result as text.',
            example: '<h1>{{ topic.name }}</h1>'
        },
        {
            id: 13,
            front: 'Property Binding',
            back: 'Property Binding verbindet einen Ausdruck aus einer Angular-Komponente mit einer Eigenschaft eines HTML-Elements, einer Directive oder einer anderen Komponente. Die Bindung wird durch eckige Klammern gekennzeichnet.',
            explanation: 'Property binding connects an expression from an Angular component to a property of an HTML element, directive or another component. The binding is indicated by square brackets.',
            example: '<button [disabled]="currentIndex() === 0">Previous</button>'
        },
        {
            id: 14,
            front: 'Event Binding',
            back: 'Event Binding verbindet ein Ereignis innerhalb eines Templates mit einer Anweisung oder Funktion der Komponente. Dadurch kann Angular beispielsweise auf Mausklicks, Tastatureingaben und Formularereignisse reagieren.',
            explanation: 'Event binding connects an event within a template to a statement or function in the component. This allows Angular to respond to mouse clicks, keyboard input and form events.',
            example: '<button (click)="nextCard()">Next</button>'
        },
        {
            id: 15,
            front: 'Two-Way Binding',
            back: 'Two-Way Binding synchronisiert einen Wert in beide Richtungen zwischen einer Komponente und einem Template-Element oder einer untergeordneten Komponente. Angular verwendet dafür die Kombination aus eckigen und runden Klammern.',
            explanation: 'Two-way binding synchronises a value in both directions between a component and a template element or child component. Angular uses a combination of square brackets and parentheses for this syntax.',
            example: '<input [(ngModel)]="username">'
        },
        {
            id: 16,
            front: 'Input',
            back: 'Ein Input ermöglicht es einer untergeordneten Komponente, Daten von ihrer übergeordneten Komponente entgegenzunehmen. Moderne Angular-Anwendungen können dafür die signalbasierte input()-Funktion verwenden. Mit input.required() wird ein Input verpflichtend.',
            explanation: 'An input allows a child component to receive data from its parent component. Modern Angular applications can use the signal-based input() function. The input.required() function makes an input mandatory.',
            example: 'topic = input.required<Topic>();'
        },
        {
            id: 17,
            front: 'Output',
            back: 'Ein Output ermöglicht es einer untergeordneten Komponente, benutzerdefinierte Ereignisse auszulösen. Eine übergeordnete Komponente kann auf diese Ereignisse reagieren. Moderne Angular-Anwendungen können dafür output() und emit() verwenden.',
            explanation: 'An output allows a child component to emit custom events. A parent component can respond to these events. Modern Angular applications can use output() and emit() for this purpose.',
            example: 'closed = output<void>(); this.closed.emit();'
        },
        {
            id: 18,
            front: 'Directive',
            back: 'Eine Directive erweitert das Verhalten oder verändert die Darstellung von Elementen innerhalb eines Angular-Templates. Attribute Directives verändern bestehende Elemente, während Structural Directives die Struktur der dargestellten Inhalte beeinflussen.',
            explanation: 'A directive extends the behaviour or changes the appearance of elements within an Angular template. Attribute directives modify existing elements, while structural directives affect the structure of rendered content.',
            example: '<div [ngClass]="{ active: isActive }"></div>'
        },
        {
            id: 19,
            front: 'Pipe',
            back: 'Eine Pipe transformiert einen Wert für die Darstellung innerhalb eines Angular-Templates. Typische Anwendungsfälle sind die Formatierung von Datumsangaben, Währungen und Texten. Der ursprüngliche Wert muss dabei nicht verändert werden.',
            explanation: 'A pipe transforms a value for presentation within an Angular template. Common use cases include formatting dates, currencies and text. The original value does not need to be modified.',
            example: '{{ price | currency:"EUR" }}'
        },
        {
            id: 20,
            front: 'Control Flow',
            back: 'Control Flow ermöglicht die bedingte Darstellung und Wiederholung von Inhalten innerhalb eines Angular-Templates. Die integrierte Syntax verwendet unter anderem @if, @else, @for, @empty und @switch. Bei @for identifiziert track die einzelnen Elemente für eine effiziente Aktualisierung.',
            explanation: 'Control flow enables conditional rendering and repetition of content within an Angular template. The built-in syntax includes @if, @else, @for, @empty and @switch. Within @for, track identifies individual items for efficient updates.',
            example: '@for (card of cards(); track card.id) { <span>{{ card.front }}</span> }'
        },
        {
            id: 21,
            front: 'Lifecycle Hooks',
            back: 'Lifecycle Hooks sind Methoden, die Angular zu bestimmten Zeitpunkten im Lebenszyklus einer Komponente oder Directive aufruft. Sie ermöglichen beispielsweise die Initialisierung von Daten, die Reaktion auf Input-Änderungen und das Freigeben von Ressourcen.',
            explanation: 'Lifecycle hooks are methods that Angular calls at specific stages in the lifecycle of a component or directive. They enable data initialisation, responses to input changes and resource cleanup.',
            example: 'ngOnInit() { this.loadData(); }'
        },
        {
            id: 22,
            front: 'Change Detection',
            back: 'Change Detection ist der Mechanismus, mit dem Angular relevante Zustandsänderungen verarbeitet und die betroffenen Template-Bindungen aktualisiert. Dadurch bleibt die Benutzeroberfläche mit dem Anwendungszustand synchron.',
            explanation: 'Change detection is the mechanism through which Angular processes relevant state changes and updates affected template bindings. This keeps the user interface synchronised with the application state.'
        },
        {
            id: 23,
            front: 'Routing',
            back: 'Routing ermöglicht die Navigation zwischen verschiedenen Ansichten einer Angular-Anwendung anhand der URL. Der Angular Router ordnet definierte Pfade den entsprechenden Komponenten zu, ohne bei gewöhnlicher interner Navigation die gesamte Webseite neu laden zu müssen.',
            explanation: 'Routing enables navigation between different views of an Angular application based on the URL. The Angular Router maps defined paths to corresponding components without requiring a full page reload during ordinary internal navigation.',
            example: 'const routes: Routes = [{ path: "", component: Overview }];'
        },
        {
            id: 24,
            front: 'Route Guard',
            back: 'Ein Route Guard entscheidet, ob eine bestimmte Route aktiviert, verlassen oder für eine Navigation ausgewählt werden darf. Guards können beispielsweise zur Steuerung des Zugriffs auf geschützte Ansichten verwendet werden. Sie ersetzen jedoch keine serverseitige Zugriffskontrolle.',
            explanation: 'A route guard determines whether a route can be activated, deactivated or selected during navigation. Guards can be used to control access to protected views. However, they do not replace server-side access control.',
            example: '{ path: "dashboard", component: Dashboard, canActivate: [authGuard] }'
        },
        {
            id: 25,
            front: 'Lazy Loading',
            back: 'Lazy Loading bezeichnet das verzögerte Laden von Anwendungsteilen, bis diese tatsächlich benötigt werden. Angular kann beispielsweise Komponenten einer Route erst bei der entsprechenden Navigation laden. Dadurch kann die Größe des initial geladenen JavaScript-Codes reduziert werden.',
            explanation: 'Lazy loading is the practice of delaying the loading of application parts until they are actually needed. Angular can load route components when the corresponding navigation occurs. This can reduce the amount of JavaScript loaded initially.',
            example: '{ path: "board", loadComponent: () => import("./board/board").then(m => m.Board) }'
        }
    ]
};