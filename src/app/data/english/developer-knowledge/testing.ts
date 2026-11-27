import { Topic } from '../../../models/topic-model';

export const testing: Topic = {
    id: 49,
    name: 'Testing & Code Quality',
    cards: [
        {
            id: 1,
            front: 'Software Testing',
            back: 'Software Testing bezeichnet die systematische Überprüfung einer Anwendung auf Fehler, unerwartetes Verhalten und die Erfüllung definierter Anforderungen. Tests können manuell oder automatisiert durchgeführt werden. Erfolgreiche Tests beweisen jedoch nicht, dass eine Anwendung vollständig fehlerfrei ist.',
            explanation: 'Software testing is the systematic examination of an application for defects, unexpected behaviour and compliance with defined requirements. Tests can be performed manually or automatically. Successful tests do not prove that an application is entirely free of defects.'
        },
        {
            id: 2,
            front: 'Unit Test',
            back: 'Ein Unit Test überprüft eine einzelne, möglichst isolierte Einheit einer Anwendung, beispielsweise eine Funktion, Methode oder Klasse. Externe Abhängigkeiten können durch kontrollierte Ersatzimplementierungen ersetzt werden. Unit Tests sollen normalerweise schnell und reproduzierbar ausführbar sein.',
            explanation: 'A unit test verifies an individual, preferably isolated unit of an application, such as a function, method or class. External dependencies can be replaced with controlled substitutes. Unit tests should normally be fast and reproducible.',
            example: 'expect(calculateTotal(5, 2)).toBe(10);'
        },
        {
            id: 3,
            front: 'Integration Test',
            back: 'Ein Integration Test überprüft das Zusammenspiel mehrerer Softwarebestandteile. Dabei wird beispielsweise getestet, ob eine Angular-Komponente korrekt mit einem Service kommuniziert oder ob ein Backend ordnungsgemäß auf eine Datenbank zugreift.',
            explanation: 'An integration test verifies the interaction between multiple software components. For example, it may test whether an Angular component communicates correctly with a service or whether a backend accesses a database correctly.'
        },
        {
            id: 4,
            front: 'End-to-End Test (E2E)',
            back: 'Ein End-to-End Test überprüft einen vollständigen Anwendungsablauf aus Sicht eines Benutzers. Dabei werden mehrere Bestandteile der Anwendung gemeinsam getestet. Bei Webanwendungen können Benutzerinteraktionen mithilfe automatisierter Browserwerkzeuge simuliert werden.',
            explanation: 'An end-to-end test verifies a complete application workflow from the perspective of a user. Multiple application components are tested together. In web applications, user interactions can be simulated using automated browser tools.',
            example: 'Select Topic -> Solo Training -> Flip Card -> Next Card'
        },
        {
            id: 5,
            front: 'Regression Test',
            back: 'Ein Regression Test überprüft, ob bereits funktionierende Eigenschaften einer Anwendung nach einer Änderung weiterhin korrekt funktionieren. Dadurch sollen unbeabsichtigte Seiteneffekte neuer Funktionen, Fehlerkorrekturen oder struktureller Änderungen erkannt werden.',
            explanation: 'A regression test verifies whether previously working application features continue to function correctly after a change. It aims to detect unintended side effects introduced by new features, bug fixes or structural changes.'
        },
        {
            id: 6,
            front: 'Smoke Test',
            back: 'Ein Smoke Test ist eine grundlegende Überprüfung der wichtigsten Funktionen einer Anwendung. Er soll schnell feststellen, ob eine neue Version grundsätzlich funktionsfähig ist und sich für weiterführende Tests eignet. Er ersetzt keine umfassende Funktionsprüfung.',
            explanation: 'A smoke test is a basic verification of the most important application features. It quickly determines whether a new version is fundamentally functional and suitable for further testing. It does not replace comprehensive functional testing.',
            example: 'Application starts -> Main page loads -> Navigation works'
        },
        {
            id: 7,
            front: 'Acceptance Test',
            back: 'Ein Acceptance Test überprüft, ob eine Anwendung definierte fachliche Anforderungen und Akzeptanzkriterien erfüllt. Dabei steht weniger die interne Implementierung als vielmehr das erwartete Verhalten aus Sicht des Auftraggebers oder Benutzers im Vordergrund.',
            explanation: 'An acceptance test verifies whether an application meets defined business requirements and acceptance criteria. The focus is on expected behaviour from the perspective of the customer or user rather than internal implementation details.'
        },
        {
            id: 8,
            front: 'Test Case',
            back: 'Ein Test Case beschreibt einen konkreten Testfall mit definierten Voraussetzungen, Eingabedaten, Ausführungsschritten und erwarteten Ergebnissen. Dadurch kann eine Funktion nachvollziehbar und wiederholbar überprüft werden.',
            explanation: 'A test case describes a specific testing scenario with defined preconditions, input data, execution steps and expected results. This allows functionality to be verified in a traceable and repeatable manner.',
            example: 'Input: " Hello " | Operation: trim() | Expected: "Hello"'
        },
        {
            id: 9,
            front: 'Test Suite',
            back: 'Eine Test Suite ist eine Sammlung zusammengehöriger Testfälle. Sie kann beispielsweise sämtliche Tests einer Komponente, eines Services oder eines bestimmten Funktionsbereichs enthalten. Test Suites ermöglichen eine strukturierte Organisation automatisierter Tests.',
            explanation: 'A test suite is a collection of related test cases. It may contain all tests for a component, service or specific functional area. Test suites enable structured organisation of automated tests.',
            example: 'describe("VocabularyService", () => { /* Test cases */ });'
        },
        {
            id: 10,
            front: 'Assertion',
            back: 'Eine Assertion überprüft innerhalb eines Tests, ob ein tatsächliches Ergebnis einer definierten Erwartung entspricht. Wird die Erwartung nicht erfüllt, schlägt die Assertion fehl und der betreffende Test wird normalerweise als fehlgeschlagen bewertet.',
            explanation: 'An assertion verifies whether an actual result matches a defined expectation within a test. If the expectation is not met, the assertion fails and the corresponding test is normally marked as failed.',
            example: 'expect(cards.length).toBe(25);'
        },
        {
            id: 11,
            front: 'Mock',
            back: 'Ein Mock ist ein kontrolliertes Ersatzobjekt für eine tatsächliche Abhängigkeit. Es ermöglicht insbesondere die Überprüfung erwarteter Interaktionen, beispielsweise ob eine bestimmte Methode mit den richtigen Argumenten aufgerufen wurde. Dadurch können Softwarebestandteile gezielt getestet werden.',
            explanation: 'A mock is a controlled substitute for a real dependency. It particularly enables verification of expected interactions, such as whether a specific method was called with the correct arguments. This allows software components to be tested in a controlled manner.',
            example: 'expect(mockService.save).toHaveBeenCalledWith(task);'
        },
        {
            id: 12,
            front: 'Stub',
            back: 'Ein Stub ist eine vereinfachte Ersatzimplementierung, die während eines Tests vorher festgelegte Ergebnisse zurückgibt. Dadurch kann eine Abhängigkeit kontrolliert werden, ohne deren tatsächliche Implementierung auszuführen. Im Gegensatz zu einem Mock liegt der Schwerpunkt auf bereitgestellten Testdaten statt auf der Überprüfung von Interaktionen.',
            explanation: 'A stub is a simplified substitute implementation that returns predefined results during a test. This allows a dependency to be controlled without executing its actual implementation. Unlike a mock, its primary focus is providing test data rather than verifying interactions.',
            example: 'const userServiceStub = { getUser: () => ({ id: 1, name: "Test User" }) };'
        },
        {
            id: 13,
            front: 'Spy',
            back: 'Ein Spy überwacht Aufrufe einer Funktion oder Methode während eines Tests. Dabei können beispielsweise Aufrufanzahl und übergebene Argumente überprüft werden. Abhängig vom verwendeten Testframework kann die ursprüngliche Implementierung weiterhin ausgeführt oder ersetzt werden.',
            explanation: 'A spy monitors calls to a function or method during a test. It can verify the number of calls and supplied arguments. Depending on the testing framework, the original implementation may continue to execute or be replaced.',
            example: 'const spy = vi.spyOn(service, "save");'
        },
        {
            id: 14,
            front: 'Test Coverage',
            back: 'Test Coverage beschreibt, welche Teile einer Anwendung während automatisierter Tests ausgeführt oder überprüft werden. Typische Messgrößen sind Statement Coverage, Branch Coverage, Function Coverage und Line Coverage. Eine hohe Codeabdeckung garantiert jedoch weder vollständige Anforderungen noch fehlerfreien Code.',
            explanation: 'Test coverage describes which parts of an application are executed or examined during automated tests. Common metrics include statement coverage, branch coverage, function coverage and line coverage. High code coverage does not guarantee complete requirements or defect-free code.',
            example: 'Statements: 90% | Branches: 75% | Functions: 85%'
        },
        {
            id: 15,
            front: 'Test-Driven Development (TDD)',
            back: 'Test-Driven Development ist eine Entwicklungsmethode, bei der zunächst ein Test für das gewünschte Verhalten geschrieben wird. Anschließend wird die notwendige Implementierung erstellt, bis der Test erfolgreich ist. Danach wird der Code bei Bedarf strukturell verbessert. Dieser Ablauf wird als Red-Green-Refactor bezeichnet.',
            explanation: 'Test-driven development is a development methodology in which a test for the desired behaviour is written first. The necessary implementation is then created until the test passes. Afterwards, the code is refactored if necessary. This cycle is known as Red-Green-Refactor.',
            example: 'Write failing test -> Implement functionality -> Refactor'
        },
        {
            id: 16,
            front: 'Behaviour-Driven Development (BDD)',
            back: 'Behaviour-Driven Development ist ein kollaborativer Entwicklungsansatz, bei dem das erwartete Verhalten einer Anwendung anhand verständlicher Beispiele beschrieben wird. Häufig werden Szenarien mit Given, When und Then formuliert, um Anforderungen zwischen technischen und fachlichen Beteiligten eindeutig zu kommunizieren.',
            explanation: 'Behaviour-driven development is a collaborative development approach in which expected application behaviour is described using understandable examples. Scenarios are often expressed using Given, When and Then to communicate requirements clearly between technical and business stakeholders.',
            example: 'Given a selected topic, when the user clicks Next, then the next flashcard is displayed.'
        },
        {
            id: 17,
            front: 'Debugging',
            back: 'Debugging bezeichnet den systematischen Prozess der Untersuchung, Lokalisierung und Behebung von Programmfehlern. Entwickler verwenden dafür beispielsweise Debugger, Breakpoints, Log-Ausgaben und die Analyse des aktuellen Programmzustands.',
            explanation: 'Debugging is the systematic process of investigating, locating and resolving software defects. Developers use tools such as debuggers, breakpoints, log messages and analysis of the current program state.',
            example: 'console.log(this.currentIndex());'
        },
        {
            id: 18,
            front: 'Breakpoint',
            back: 'Ein Breakpoint ist ein definierter Haltepunkt innerhalb des Quellcodes, an dem ein Debugger die Programmausführung unterbrechen kann. Dadurch können Entwickler Variablen, Funktionsaufrufe und den aktuellen Programmzustand untersuchen.',
            explanation: 'A breakpoint is a defined stopping point in source code where a debugger can pause program execution. This allows developers to inspect variables, function calls and the current program state.',
            example: 'debugger;'
        },
        {
            id: 19,
            front: 'Stack Trace',
            back: 'Ein Stack Trace ist eine Darstellung der Funktionsaufrufe, die zu einem bestimmten Programmpunkt oder Fehler geführt haben. Er enthält häufig Funktionsnamen, Dateinamen und Zeilennummern. Dadurch können Entwickler die Ursache eines Fehlers gezielter untersuchen.',
            explanation: 'A stack trace is a representation of function calls that led to a particular execution point or error. It often includes function names, filenames and line numbers. This helps developers investigate the cause of an error more effectively.',
            example: 'Error -> createTask() -> validateTask()'
        },
        {
            id: 20,
            front: 'Edge Case',
            back: 'Ein Edge Case bezeichnet einen ungewöhnlichen oder extremen Anwendungsfall, der außerhalb typischer Nutzungssituationen liegt oder sich an einer Grenze des zulässigen Wertebereichs befindet. Solche Fälle können Fehler aufdecken, die bei gewöhnlichen Eingaben nicht auftreten.',
            explanation: 'An edge case is an unusual or extreme usage scenario that lies outside typical operating conditions or at a boundary of the permitted value range. Such cases can reveal defects that do not occur with ordinary inputs.',
            example: 'Empty array, zero, maximum input length, final flashcard'
        },
        {
            id: 21,
            front: 'Static Code Analysis',
            back: 'Statische Codeanalyse bezeichnet die Untersuchung von Quellcode, ohne das analysierte Programm tatsächlich auszuführen. Dabei können beispielsweise Typfehler, potenzielle Sicherheitsprobleme, ungenutzter Code und Verstöße gegen definierte Entwicklungsregeln erkannt werden.',
            explanation: 'Static code analysis is the examination of source code without actually executing the analysed program. It can identify type errors, potential security issues, unused code and violations of defined development rules.',
            example: 'tsc --noEmit'
        },
        {
            id: 22,
            front: 'Linter',
            back: 'Ein Linter ist ein Werkzeug zur statischen Analyse von Quellcode anhand konfigurierbarer Regeln. Er kann potenzielle Programmierfehler, problematische Sprachkonstruktionen und Verstöße gegen vereinbarte Coding Standards erkennen. Ein Linter ersetzt weder einen Compiler noch automatisierte Funktionstests.',
            explanation: 'A linter is a tool for statically analysing source code according to configurable rules. It can identify potential programming errors, problematic language constructs and violations of agreed coding standards. A linter does not replace a compiler or automated functional tests.',
            example: 'npx eslint src/'
        },
        {
            id: 23,
            front: 'Code Smell',
            back: 'Ein Code Smell ist ein Hinweis auf ein mögliches strukturelles oder qualitatives Problem im Quellcode. Beispiele sind übermäßig lange Funktionen, stark gekoppelte Klassen oder unnötig komplexe Kontrollstrukturen. Ein Code Smell ist nicht automatisch ein Programmfehler und muss im jeweiligen Kontext bewertet werden.',
            explanation: 'A code smell is an indication of a potential structural or quality issue in source code. Examples include excessively long functions, tightly coupled classes or unnecessarily complex control structures. A code smell is not automatically a software defect and must be evaluated in context.'
        },
        {
            id: 24,
            front: 'Flaky Test',
            back: 'Ein Flaky Test ist ein Test, der bei unverändertem Quellcode und gleichen vorgesehenen Testbedingungen gelegentlich erfolgreich ist und gelegentlich fehlschlägt. Häufige Ursachen sind Zeitabhängigkeiten, Race Conditions, unkontrollierte externe Abhängigkeiten oder gemeinsam verwendete Testzustände.',
            explanation: 'A flaky test is a test that occasionally passes and occasionally fails despite unchanged source code and identical intended testing conditions. Common causes include timing dependencies, race conditions, uncontrolled external dependencies or shared test state.'
        },
        {
            id: 25,
            front: 'Quality Gate',
            back: 'Ein Quality Gate ist ein definierter Kontrollpunkt innerhalb eines Entwicklungs- oder Veröffentlichungsprozesses. Eine Änderung darf erst weiterverarbeitet oder veröffentlicht werden, wenn festgelegte Qualitätsanforderungen erfüllt sind. Dazu können erfolgreiche Tests, Sicherheitsprüfungen und statische Codeanalysen gehören.',
            explanation: 'A quality gate is a defined checkpoint within a development or release process. A change may only proceed or be released when specified quality requirements are met. These may include successful tests, security checks and static code analysis.',
            example: 'Build passed + Tests passed + Security checks passed = Release permitted'
        }
    ]
};