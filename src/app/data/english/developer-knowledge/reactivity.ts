import { Topic } from '../../../models/topic-model';

export const reactivity: Topic = {
    id: 44,
    name: 'Angular Reactivity',
    cards: [
        {
            id: 1,
            front: 'Reactivity',
            back: 'Reaktivität bezeichnet ein Programmierkonzept, bei dem abhängige Berechnungen und Darstellungen auf Änderungen ihrer Datenquellen reagieren. Dadurch müssen Zustandsänderungen nicht an jeder Stelle manuell weitergegeben werden.',
            explanation: 'Reactivity is a programming concept in which dependent computations and views respond to changes in their data sources. This eliminates the need to manually propagate state changes everywhere.'
        },
        {
            id: 2,
            front: 'signal()',
            back: 'Erstellt ein beschreibbares Angular Signal, das einen Wert speichert und seine reaktiven Abhängigkeiten über erkannte Wertänderungen informiert. Der aktuelle Wert wird durch Aufrufen des Signals gelesen.',
            explanation: 'Creates a writable Angular signal that stores a value and notifies its reactive dependants when a value change is detected. The current value is read by calling the signal.',
            example: 'count = signal(0);'
        },
        {
            id: 3,
            front: 'computed()',
            back: 'Erstellt ein schreibgeschütztes Signal, dessen Wert aus anderen reaktiven Datenquellen berechnet wird. Die Berechnung erfolgt bei Bedarf und das Ergebnis wird zwischengespeichert. Änderungen an erfassten Abhängigkeiten machen das bisherige Ergebnis ungültig.',
            explanation: 'Creates a read-only signal whose value is derived from other reactive data sources. The computation is performed lazily and its result is cached. Changes to tracked dependencies invalidate the previous result.',
            example: 'double = computed(() => this.count() * 2);'
        },
        {
            id: 4,
            front: 'effect()',
            back: 'Registriert eine Funktion, die mindestens einmal ausgeführt wird und anschließend auf Änderungen der darin erfassten Signal-Abhängigkeiten reagiert. Effects eignen sich insbesondere zur Synchronisierung mit nicht reaktiven Systemen, beispielsweise Local Storage oder externen Bibliotheken.',
            explanation: 'Registers a function that runs at least once and subsequently reacts to changes in its tracked signal dependencies. Effects are particularly useful for synchronising with non-reactive systems such as local storage or external libraries.',
            example: 'effect(() => console.log(this.count()));'
        },
        {
            id: 5,
            front: 'set()',
            back: 'Weist einem beschreibbaren Signal einen neuen Wert zu. Wird dieser Wert anhand der Gleichheitsprüfung als verändert erkannt, werden die reaktiven Abhängigkeiten entsprechend benachrichtigt.',
            explanation: 'Assigns a new value to a writable signal. If the equality check identifies a change, its reactive dependants are notified accordingly.',
            example: 'this.count.set(10);'
        },
        {
            id: 6,
            front: 'update()',
            back: 'Aktualisiert den Wert eines beschreibbaren Signals mithilfe einer Funktion. Diese erhält den bisherigen Wert als Argument und gibt den neuen Wert zurück. Besonders nützlich, wenn der neue Zustand vom bisherigen Zustand abhängt.',
            explanation: 'Updates the value of a writable signal using a function. The function receives the previous value as an argument and returns the new value. Particularly useful when the new state depends on the previous state.',
            example: 'this.count.update(value => value + 1);'
        },
        {
            id: 7,
            front: 'WritableSignal',
            back: 'Ein WritableSignal ist ein Angular Signal, dessen Wert gelesen und über set() oder update() verändert werden kann. Der gespeicherte Wert kann beispielsweise eine Zahl, ein String, ein Objekt oder ein Array sein.',
            explanation: 'A WritableSignal is an Angular signal whose value can be read and modified using set() or update(). The stored value can be a number, string, object or array.',
            example: 'count: WritableSignal<number> = signal(0);'
        },
        {
            id: 8,
            front: 'asReadonly()',
            back: 'Erzeugt eine schreibgeschützte Sicht auf ein beschreibbares Signal. Andere Komponenten können dessen Wert lesen, aber nicht direkt über set() oder update() verändern. Verschachtelte Objekte werden dadurch jedoch nicht automatisch vor Veränderungen geschützt.',
            explanation: 'Creates a read-only view of a writable signal. Other components can read its value but cannot modify it directly using set() or update(). However, nested objects are not automatically protected against mutation.',
            example: 'readonlyCount = this.count.asReadonly();'
        },
        {
            id: 9,
            front: 'Dependency Tracking',
            back: 'Dependency Tracking bezeichnet die automatische Erfassung von Signalen, die innerhalb eines reaktiven Kontextes gelesen werden. Angular verwendet diese Informationen, um festzustellen, welche Berechnungen oder Darstellungen bei Änderungen aktualisiert werden müssen.',
            explanation: 'Dependency tracking is the automatic recording of signals read within a reactive context. Angular uses this information to determine which computations or views need updating when changes occur.',
            example: 'total = computed(() => this.price() * this.quantity());'
        },
        {
            id: 10,
            front: 'Dynamic Dependencies',
            back: 'Dynamische Abhängigkeiten entstehen, wenn innerhalb einer reaktiven Berechnung abhängig von Bedingungen unterschiedliche Signale gelesen werden. Angular erfasst nur die Signale, die während der jeweiligen Berechnung tatsächlich gelesen wurden.',
            explanation: 'Dynamic dependencies occur when different signals are read within a reactive computation depending on conditions. Angular tracks only the signals actually read during that computation.',
            example: 'result = computed(() => this.active() ? this.count() : 0);'
        },
        {
            id: 11,
            front: 'Lazy Evaluation',
            back: 'Lazy Evaluation bedeutet, dass eine Berechnung erst durchgeführt wird, wenn ihr Ergebnis tatsächlich benötigt wird. Angular Computed Signals berechnen ihren Wert beispielsweise erst beim ersten Lesen.',
            explanation: 'Lazy evaluation means that a computation is performed only when its result is actually needed. Angular computed signals, for example, calculate their value when first read.'
        },
        {
            id: 12,
            front: 'Memoisation',
            back: 'Memoisation bezeichnet das Zwischenspeichern von Berechnungsergebnissen, um unnötige erneute Berechnungen zu vermeiden. Angular Computed Signals verwenden ihr gespeichertes Ergebnis erneut, solange ihre erfassten Abhängigkeiten dieses nicht ungültig machen.',
            explanation: 'Memoisation is the practice of caching computation results to avoid unnecessary recalculations. Angular computed signals reuse their cached result until their tracked dependencies invalidate it.'
        },
        {
            id: 13,
            front: 'untracked()',
            back: 'Ermöglicht das Lesen eines Signals innerhalb eines reaktiven Kontextes, ohne dieses Signal als Abhängigkeit zu registrieren. Dadurch löst eine Änderung dieses Signals allein keine erneute Ausführung der betreffenden Berechnung aus.',
            explanation: 'Allows a signal to be read within a reactive context without registering it as a dependency. Changes to that signal alone therefore do not trigger another execution of the corresponding computation.',
            example: 'effect(() => console.log(this.user(), untracked(this.count)));'
        },
        {
            id: 14,
            front: 'Equality Function',
            back: 'Eine Equality Function bestimmt, ob zwei Signal-Werte als gleich betrachtet werden. Standardmäßig verwendet Angular Object.is(). Eine benutzerdefinierte Gleichheitsfunktion kann unnötige reaktive Aktualisierungen verhindern.',
            explanation: 'An equality function determines whether two signal values are considered equal. Angular uses Object.is() by default. A custom equality function can prevent unnecessary reactive updates.',
            example: 'user = signal({ id: 1 }, { equal: (a, b) => a.id === b.id });'
        },
        {
            id: 15,
            front: 'linkedSignal()',
            back: 'Erstellt ein beschreibbares Signal, dessen Wert zusätzlich durch eine reaktive Berechnung bestimmt werden kann. Der Wert kann manuell verändert werden und wird bei relevanten Änderungen seiner Abhängigkeiten erneut berechnet.',
            explanation: 'Creates a writable signal whose value can additionally be determined by a reactive computation. The value can be changed manually and is recalculated when relevant dependencies change.',
            example: 'selected = linkedSignal(() => this.options()[0]);'
        },
        {
            id: 16,
            front: 'Observable',
            back: 'Ein Observable repräsentiert eine Quelle, die über einen Zeitraum keinen, einen oder mehrere Werte ausgeben kann. Observables können synchron oder asynchron arbeiten und durch Operatoren verarbeitet werden. Sie können außerdem Fehler und den Abschluss eines Datenstroms signalisieren.',
            explanation: 'An observable represents a source that can emit zero, one or multiple values over time. Observables can operate synchronously or asynchronously and can be processed using operators. They can also signal errors and stream completion.',
            example: 'numbers$ = of(1, 2, 3);'
        },
        {
            id: 17,
            front: 'RxJS',
            back: 'RxJS ist eine JavaScript-Bibliothek für reaktive Programmierung mit Observables. Sie stellt Operatoren zur Verarbeitung, Kombination, Filterung und Steuerung von Datenströmen bereit. Angular verwendet RxJS beispielsweise beim HttpClient.',
            explanation: 'RxJS is a JavaScript library for reactive programming with observables. It provides operators for processing, combining, filtering and controlling data streams. Angular uses RxJS in features such as HttpClient.'
        },
        {
            id: 18,
            front: 'subscribe()',
            back: 'Registriert einen Beobachter bei einem Observable, um ausgegebene Werte, Fehler oder den Abschluss des Datenstroms zu empfangen. Die Methode gibt eine Subscription zurück, über die das Abonnement beendet werden kann.',
            explanation: 'Registers an observer with an observable to receive emitted values, errors or stream completion notifications. The method returns a subscription that can be used to cancel the subscription.',
            example: 'this.data$.subscribe(value => console.log(value));'
        },
        {
            id: 19,
            front: 'Subscription',
            back: 'Eine Subscription repräsentiert eine laufende oder bereits beendete Observable-Ausführung aus Sicht eines Abonnenten. Mit unsubscribe() kann ein aktives Abonnement beendet werden, wodurch weitere Benachrichtigungen verhindert und registrierte Ressourcen freigegeben werden.',
            explanation: 'A subscription represents an active or completed observable execution from the perspective of a subscriber. Calling unsubscribe() cancels an active subscription, preventing further notifications and releasing registered resources.',
            example: 'const subscription = this.data$.subscribe(); subscription.unsubscribe();'
        },
        {
            id: 20,
            front: 'Subject',
            back: 'Ein Subject ist sowohl ein Observable als auch ein Observer. Es kann Werte über next() entgegennehmen und diese an mehrere registrierte Abonnenten weitergeben. Ein gewöhnliches Subject speichert keine früher ausgegebenen Werte für neue Abonnenten.',
            explanation: 'A subject is both an observable and an observer. It can receive values through next() and distribute them to multiple registered subscribers. A regular subject does not retain previously emitted values for new subscribers.',
            example: 'events$ = new Subject<string>(); this.events$.next("created");'
        },
        {
            id: 21,
            front: 'BehaviorSubject',
            back: 'Ein BehaviorSubject ist eine spezielle Form eines Subjects, die einen Initialwert benötigt und den zuletzt gespeicherten Wert verwaltet. Neue Abonnenten erhalten bei einem noch aktiven BehaviorSubject unmittelbar den aktuellen Wert.',
            explanation: 'A BehaviorSubject is a specialised subject that requires an initial value and maintains the latest stored value. New subscribers immediately receive the current value while the BehaviorSubject remains active.',
            example: 'count$ = new BehaviorSubject<number>(0);'
        },
        {
            id: 22,
            front: 'pipe()',
            back: 'Verbindet mehrere RxJS-Operatoren zu einer Verarbeitungskette. Jeder Operator verarbeitet den vorherigen Datenstrom und liefert einen weiteren Observable-Datenstrom. Das ursprüngliche Observable wird dabei nicht direkt verändert.',
            explanation: 'Combines multiple RxJS operators into a processing pipeline. Each operator processes the preceding stream and produces another observable stream. The original observable is not directly modified.',
            example: 'of(1, 2, 3).pipe(filter(value => value > 1), map(value => value * 2));'
        },
        {
            id: 23,
            front: 'switchMap()',
            back: 'Ein RxJS-Operator, der jeden ausgegebenen Wert eines äußeren Observables in ein inneres Observable umwandelt. Bei einem neuen äußeren Wert wird das vorherige innere Abonnement beendet. Besonders geeignet für Suchanfragen, bei denen nur das neueste Ergebnis relevant ist.',
            explanation: 'An RxJS operator that transforms each emitted value from an outer observable into an inner observable. When a new outer value arrives, the previous inner subscription is cancelled. Particularly useful for search requests where only the latest result is relevant.',
            example: 'this.search$.pipe(switchMap(query => this.http.get("/api/search", { params: { q: query } })));'
        },
        {
            id: 24,
            front: 'toSignal()',
            back: 'Wandelt ein Observable in ein Angular Signal um, das den zuletzt empfangenen Wert bereitstellt. Angular abonniert das Observable unmittelbar. Standardmäßig wird das Abonnement beim Zerstören des zugehörigen Angular-Kontextes automatisch beendet.',
            explanation: 'Converts an observable into an Angular signal that exposes the latest received value. Angular subscribes to the observable immediately. By default, the subscription is automatically cancelled when the associated Angular context is destroyed.',
            example: 'data = toSignal(this.data$, { initialValue: [] });'
        },
        {
            id: 25,
            front: 'toObservable()',
            back: 'Wandelt ein Angular Signal in ein Observable um. Dadurch können Signal-Werte mit RxJS-Operatoren verarbeitet werden. Mehrere synchrone Signal-Aktualisierungen können zusammengefasst werden, sodass nicht zwingend jeder Zwischenwert ausgegeben wird.',
            explanation: 'Converts an Angular signal into an observable, allowing signal values to be processed using RxJS operators. Multiple synchronous signal updates may be coalesced, so not every intermediate value is necessarily emitted.',
            example: 'count$ = toObservable(this.count);'
        }
    ]
};