import { Topic } from '../../../models/topic-model';

export const buildRuntime: Topic = {
    id: 47,
    name: 'Build & Runtime',
    cards: [
        {
            id: 1,
            front: 'Source Code',
            back: 'Quellcode bezeichnet die von Entwicklern geschriebenen Anweisungen eines Programms in einer Programmiersprache. Abhängig von der Sprache und der Laufzeitumgebung muss dieser Code vor seiner Ausführung übersetzt oder anderweitig verarbeitet werden.',
            explanation: 'Source code refers to the instructions of a program written by developers in a programming language. Depending on the language and runtime environment, this code may need to be translated or otherwise processed before execution.',
            example: 'const title: string = "Mindora";'
        },
        {
            id: 2,
            front: 'Compiler',
            back: 'Ein Compiler ist ein Programm, das Quellcode aus einer Ausgangssprache in eine andere Zielsprache oder Repräsentation übersetzt. Dabei können syntaktische und semantische Prüfungen sowie Optimierungen durchgeführt werden. Das Ergebnis kann beispielsweise Maschinencode, Bytecode oder JavaScript sein.',
            explanation: 'A compiler is a program that translates source code from a source language into another target language or representation. It may perform syntactic and semantic checks as well as optimisations. The output can be machine code, bytecode or JavaScript.',
            example: 'tsc app.ts'
        },
        {
            id: 3,
            front: 'Interpreter',
            back: 'Ein Interpreter verarbeitet und führt Programmanweisungen während der Laufzeit aus. Im Gegensatz zu einer rein vorausgehenden Kompilierung muss dabei nicht zunächst ein vollständiges eigenständig ausführbares Zielprogramm erzeugt werden. Moderne Laufzeitumgebungen kombinieren häufig Interpretation und Kompilierung.',
            explanation: 'An interpreter processes and executes program instructions at runtime. Unlike purely ahead-of-time compilation, it does not require a complete standalone executable program to be generated beforehand. Modern runtime environments often combine interpretation and compilation.'
        },
        {
            id: 4,
            front: 'Transpiler',
            back: 'Ein Transpiler ist eine Form des Compilers, die Quellcode in eine andere Sprache oder Sprachversion mit einem vergleichbaren Abstraktionsniveau übersetzt. Ein typisches Beispiel ist die Übersetzung von TypeScript in JavaScript.',
            explanation: 'A transpiler is a type of compiler that translates source code into another language or language version at a comparable level of abstraction. A typical example is the translation of TypeScript into JavaScript.',
            example: 'TypeScript -> JavaScript'
        },
        {
            id: 5,
            front: 'Parser',
            back: 'Ein Parser analysiert die syntaktische Struktur von Quellcode anhand der Grammatik einer Programmiersprache. Er erzeugt häufig eine strukturierte Repräsentation des Codes, die anschließend für weitere Prüfungen oder Übersetzungen verwendet werden kann.',
            explanation: 'A parser analyses the syntactic structure of source code according to the grammar of a programming language. It commonly produces a structured representation of the code for subsequent analysis or translation.',
            example: 'Source Code -> Parser -> Syntax Tree'
        },
        {
            id: 6,
            front: 'Abstract Syntax Tree (AST)',
            back: 'Ein Abstract Syntax Tree ist eine baumartige Repräsentation der syntaktischen Struktur eines Programms. Compiler, Linter und andere Entwicklungswerkzeuge verwenden diese Struktur, um Quellcode zu analysieren, zu verändern oder zu übersetzen.',
            explanation: 'An abstract syntax tree is a tree-like representation of the syntactic structure of a program. Compilers, linters and other development tools use this structure to analyse, transform or translate source code.'
        },
        {
            id: 7,
            front: 'Build Process',
            back: 'Ein Build-Prozess verarbeitet den Quellcode und weitere Projektdateien zu einer ausführbaren oder veröffentlichungsfähigen Anwendung. Dabei können Kompilierung, Bundling, Optimierung und die Verarbeitung von Stylesheets und anderen Ressourcen stattfinden.',
            explanation: 'A build process transforms source code and other project files into an executable or deployable application. It may include compilation, bundling, optimisation and the processing of stylesheets and other resources.',
            example: 'ng build'
        },
        {
            id: 8,
            front: 'Build Artifact',
            back: 'Ein Build Artifact ist eine Datei oder eine Sammlung von Dateien, die während eines Build-Prozesses erzeugt wird. Bei einer Angular-Anwendung gehören dazu beispielsweise JavaScript-Bundles, CSS-Dateien, HTML-Dateien und weitere Ressourcen.',
            explanation: 'A build artifact is a file or collection of files generated during a build process. In an Angular application, examples include JavaScript bundles, CSS files, HTML files and other resources.',
            example: 'dist/mindora/browser/'
        },
        {
            id: 9,
            front: 'Bundler',
            back: 'Ein Bundler analysiert die Abhängigkeiten zwischen Modulen und fasst benötigte Dateien zu einem oder mehreren Bundles zusammen. Dadurch können Anwendungen effizient ausgeliefert und zusätzliche Optimierungen durchgeführt werden. Beispiele sind esbuild, Rollup und Webpack.',
            explanation: 'A bundler analyses dependencies between modules and combines required files into one or more bundles. This enables efficient application delivery and additional optimisations. Examples include esbuild, Rollup and Webpack.'
        },
        {
            id: 10,
            front: 'Module',
            back: 'Ein Modul ist eine abgegrenzte Einheit von Quellcode mit einem eigenen Gültigkeitsbereich. Über Imports und Exports können Funktionen, Klassen und Werte zwischen Modulen ausgetauscht werden. JavaScript unterstützt dafür standardisierte ECMAScript Modules.',
            explanation: 'A module is a self-contained unit of source code with its own scope. Functions, classes and values can be shared between modules through imports and exports. JavaScript supports standardised ECMAScript modules for this purpose.',
            example: 'export const title = "Mindora";'
        },
        {
            id: 11,
            front: 'Dependency',
            back: 'Eine Dependency ist ein Softwarebestandteil, den ein anderer Bestandteil zur Erfüllung seiner Aufgaben benötigt. Abhängigkeiten können beispielsweise externe Bibliotheken, Frameworks oder interne Module sein.',
            explanation: 'A dependency is a software component required by another component to fulfil its responsibilities. Dependencies may include external libraries, frameworks or internal modules.',
            example: 'import { signal } from "@angular/core";'
        },
        {
            id: 12,
            front: 'Package Manager',
            back: 'Ein Package Manager ist ein Werkzeug zur Installation, Aktualisierung und Verwaltung von Softwarepaketen und deren Abhängigkeiten. Im JavaScript-Ökosystem sind npm, pnpm und Yarn verbreitete Package Manager.',
            explanation: 'A package manager is a tool for installing, updating and managing software packages and their dependencies. Common package managers in the JavaScript ecosystem include npm, pnpm and Yarn.',
            example: 'npm install'
        },
        {
            id: 13,
            front: 'package.json',
            back: 'Die package.json ist eine Konfigurationsdatei eines JavaScript- oder Node.js-Projekts. Sie enthält unter anderem Projektinformationen, Abhängigkeiten, Versionsanforderungen und ausführbare Scripts.',
            explanation: 'The package.json file is a configuration file for a JavaScript or Node.js project. It contains project information, dependencies, version requirements and executable scripts.',
            example: '{ "scripts": { "build": "ng build" } }'
        },
        {
            id: 14,
            front: 'Lockfile',
            back: 'Ein Lockfile dokumentiert die konkret aufgelösten Versionen installierter Abhängigkeiten einschließlich indirekter Abhängigkeiten. Es ermöglicht reproduzierbarere Installationen auf unterschiedlichen Entwicklungs- und Build-Systemen.',
            explanation: 'A lockfile records the resolved versions of installed dependencies, including transitive dependencies. It enables more reproducible installations across different development and build environments.',
            example: 'package-lock.json'
        },
        {
            id: 15,
            front: 'Tree Shaking',
            back: 'Tree Shaking ist eine Build-Optimierung, bei der nachweislich nicht benötigte Exports und zugehöriger Code aus dem erzeugten Bundle entfernt werden können. Die statisch analysierbare Struktur von ECMAScript Modules erleichtert diese Optimierung. Mögliche Seiteneffekte müssen dabei berücksichtigt werden.',
            explanation: 'Tree shaking is a build optimisation that can remove demonstrably unused exports and associated code from the generated bundle. The statically analysable structure of ECMAScript modules facilitates this optimisation. Potential side effects must be considered.'
        },
        {
            id: 16,
            front: 'Minification',
            back: 'Minification bezeichnet die Verringerung der Dateigröße von Quellcode durch das Entfernen unnötiger Zeichen, Kommentare und Leerzeichen sowie gegebenenfalls durch kürzere Bezeichner. Das beabsichtigte Verhalten des Programms soll dabei erhalten bleiben.',
            explanation: 'Minification reduces source code file size by removing unnecessary characters, comments and whitespace, and potentially shortening identifiers. The intended behaviour of the program should remain unchanged.',
            example: 'function add(a,b){return a+b}'
        },
        {
            id: 17,
            front: 'Code Splitting',
            back: 'Code Splitting bezeichnet die Aufteilung einer Anwendung in mehrere separat ladbare Code-Bundles. Dadurch muss nicht der gesamte Anwendungscode beim ersten Seitenaufruf geladen werden. Lazy Loading von Angular-Routen ist ein typischer Anwendungsfall.',
            explanation: 'Code splitting divides an application into multiple separately loadable code bundles. This avoids loading the entire application code during the initial page request. Lazy loading of Angular routes is a typical use case.',
            example: 'import("./features/board/board")'
        },
        {
            id: 18,
            front: 'Source Map',
            back: 'Eine Source Map stellt eine Zuordnung zwischen verarbeitetem Quellcode und dem ursprünglichen Quellcode her. Dadurch können Entwickler beispielsweise im Browser-Debugger ursprüngliche TypeScript-Dateien untersuchen, obwohl tatsächlich übersetzter oder minimierter JavaScript-Code ausgeführt wird.',
            explanation: 'A source map establishes a mapping between processed source code and the original source code. This allows developers to inspect original TypeScript files in a browser debugger even when compiled or minified JavaScript is being executed.',
            example: 'main.js.map'
        },
        {
            id: 19,
            front: 'AOT - Ahead-of-Time Compilation',
            back: 'Ahead-of-Time Compilation bezeichnet die Übersetzung von Code vor seiner späteren Ausführung. In Angular werden dabei insbesondere Komponenten und Templates bereits während des Build-Prozesses kompiliert. Dadurch können Template-Fehler frühzeitig erkannt und Laufzeitaufwand reduziert werden.',
            explanation: 'Ahead-of-time compilation refers to compiling code before its subsequent execution. In Angular, components and templates are compiled during the build process. This enables early detection of template errors and reduces runtime overhead.',
            example: 'ng build --aot'
        },
        {
            id: 20,
            front: 'JIT - Just-in-Time Compilation',
            back: 'Just-in-Time Compilation bezeichnet die Übersetzung von Code während der Programmausführung oder unmittelbar vor seiner Verwendung. Im Angular-Kontext können Templates zur Laufzeit kompiliert werden. JavaScript-Engines verwenden JIT-Techniken außerdem zur Optimierung häufig ausgeführter Programmabschnitte.',
            explanation: 'Just-in-time compilation refers to compiling code during program execution or immediately before its use. In Angular, templates can be compiled at runtime. JavaScript engines also use JIT techniques to optimise frequently executed sections of code.'
        },
        {
            id: 21,
            front: 'Runtime',
            back: 'Runtime bezeichnet die Phase, in der ein Programm tatsächlich ausgeführt wird. Der Begriff wird außerdem für Laufzeitumgebungen verwendet, die notwendige Funktionen und Ressourcen zur Programmausführung bereitstellen. Fehler während dieser Phase werden als Runtime Errors bezeichnet.',
            explanation: 'Runtime refers to the phase in which a program is actually executed. The term is also used for runtime environments that provide the functions and resources required for execution. Errors occurring during this phase are called runtime errors.'
        },
        {
            id: 22,
            front: 'JavaScript Engine',
            back: 'Eine JavaScript Engine ist eine Softwarekomponente, die JavaScript-Code analysiert und ausführt. Moderne Engines kombinieren häufig Interpretation, Kompilierung und Laufzeitoptimierungen. Beispiele sind V8, SpiderMonkey und JavaScriptCore.',
            explanation: 'A JavaScript engine is a software component that analyses and executes JavaScript code. Modern engines often combine interpretation, compilation and runtime optimisation. Examples include V8, SpiderMonkey and JavaScriptCore.'
        },
        {
            id: 23,
            front: 'Node.js',
            back: 'Node.js ist eine JavaScript-Laufzeitumgebung außerhalb des Webbrowsers, die auf der V8 JavaScript Engine basiert. Sie ermöglicht beispielsweise die Entwicklung von Serveranwendungen, Kommandozeilenwerkzeugen und Build-Tools. Angular verwendet Node.js unter anderem für seine Entwicklungswerkzeuge.',
            explanation: 'Node.js is a JavaScript runtime environment outside the web browser, based on the V8 JavaScript engine. It enables the development of server applications, command-line tools and build tools. Angular uses Node.js for its development tooling, among other purposes.',
            example: 'node server.js'
        },
        {
            id: 24,
            front: 'Event Loop',
            back: 'Der Event Loop koordiniert die Ausführung von JavaScript-Code und die Verarbeitung anstehender Aufgaben innerhalb einer Laufzeitumgebung. Asynchrone Operationen können außerhalb des aktuellen JavaScript-Aufrufstapels verarbeitet werden. Sobald entsprechende Aufgaben ausführbar sind, werden ihre Callbacks nach den Regeln der Laufzeitumgebung verarbeitet.',
            explanation: 'The event loop coordinates JavaScript execution and the processing of pending tasks within a runtime environment. Asynchronous operations can be handled outside the current JavaScript call stack. Once corresponding tasks are ready, their callbacks are processed according to the rules of the runtime environment.',
            example: 'console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C"); // A, C, B'
        },
        {
            id: 25,
            front: 'Garbage Collection',
            back: 'Garbage Collection bezeichnet die automatische Speicherbereinigung innerhalb einer Laufzeitumgebung. Speicher von Objekten, die nicht mehr erreichbar sind, kann wieder freigegeben werden. Der genaue Zeitpunkt der Speicherbereinigung wird normalerweise von der Laufzeitumgebung bestimmt.',
            explanation: 'Garbage collection is the automatic process of reclaiming memory within a runtime environment. Memory occupied by objects that are no longer reachable can be released. The exact timing of garbage collection is normally determined by the runtime environment.'
        }
    ]
};