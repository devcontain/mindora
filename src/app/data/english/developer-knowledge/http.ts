import { Topic } from '../../../models/topic-model';

export const http: Topic = {
    id: 46,
    name: 'HTTP & REST API',
    cards: [
        {
            id: 1,
            front: 'HTTP - Hypertext Transfer Protocol',
            back: 'HTTP ist ein Anwendungsprotokoll zur Übertragung von Informationen zwischen Client und Server. Die Kommunikation erfolgt grundsätzlich über Anfragen und Antworten. HTTP ist zustandslos, da das Protokoll selbst keinen Anwendungszustand zwischen einzelnen Anfragen speichert.',
            explanation: 'HTTP is an application-layer protocol for transferring information between a client and a server. Communication is based on requests and responses. HTTP is stateless because the protocol itself does not maintain application state between individual requests.'
        },
        {
            id: 2,
            front: 'HTTPS - Hypertext Transfer Protocol Secure',
            back: 'HTTPS bezeichnet HTTP-Kommunikation, die durch TLS abgesichert wird. Dadurch werden übertragene Daten verschlüsselt, vor unbemerkten Veränderungen geschützt und die Identität des Servers anhand eines Zertifikats überprüft.',
            explanation: 'HTTPS refers to HTTP communication secured by TLS. Transmitted data is encrypted and protected against undetected modification, while the identity of the server is verified using a certificate.',
            example: 'https://example.com/api/users'
        },
        {
            id: 3,
            front: 'Client',
            back: 'Ein Client ist ein Programm oder System, das Anfragen an einen Server sendet und dessen Antworten verarbeitet. Ein Webbrowser oder eine Angular-Anwendung kann beispielsweise als HTTP-Client fungieren.',
            explanation: 'A client is a program or system that sends requests to a server and processes its responses. A web browser or Angular application can act as an HTTP client.',
            example: 'fetch("/api/tasks");'
        },
        {
            id: 4,
            front: 'Server',
            back: 'Ein Server ist ein Programm oder System, das Anfragen von Clients entgegennimmt, verarbeitet und entsprechende Antworten bereitstellt. Ein Webserver kann beispielsweise HTML-Dateien, Bilder oder API-Daten ausliefern.',
            explanation: 'A server is a program or system that receives requests from clients, processes them and provides corresponding responses. A web server can deliver HTML files, images or API data.'
        },
        {
            id: 5,
            front: 'Request',
            back: 'Ein Request ist eine Anfrage, die ein Client an einen Server sendet. Eine HTTP-Anfrage enthält unter anderem eine HTTP-Methode, ein Anfrageziel, Header und gegebenenfalls einen Body.',
            explanation: 'A request is a message sent by a client to a server. An HTTP request includes an HTTP method, a request target, headers and optionally a body.',
            example: 'GET /api/tasks HTTP/1.1'
        },
        {
            id: 6,
            front: 'Response',
            back: 'Eine Response ist die Antwort eines Servers auf eine Anfrage. Eine HTTP-Antwort enthält einen Statuscode, Header und gegebenenfalls einen Body mit den angeforderten Daten oder weiteren Informationen.',
            explanation: 'A response is the message returned by a server in reply to a request. An HTTP response contains a status code, headers and optionally a body containing requested data or additional information.',
            example: 'HTTP/1.1 200 OK'
        },
        {
            id: 7,
            front: 'API - Application Programming Interface',
            back: 'Eine API ist eine definierte Schnittstelle, über die unterschiedliche Softwarebestandteile miteinander kommunizieren können. Sie legt fest, welche Funktionen oder Daten verfügbar sind und wie auf diese zugegriffen werden kann. APIs sind nicht grundsätzlich auf HTTP beschränkt.',
            explanation: 'An API is a defined interface through which different software components can communicate. It specifies which functions or data are available and how they can be accessed. APIs are not inherently limited to HTTP.',
            example: 'navigator.clipboard.writeText("Hello");'
        },
        {
            id: 8,
            front: 'REST - Representational State Transfer',
            back: 'REST ist ein Architekturstil für verteilte Systeme. Zu seinen Prinzipien gehören die Trennung von Client und Server, zustandslose Kommunikation, Cachebarkeit und eine einheitliche Schnittstelle. Ressourcen werden über ihre Repräsentationen bereitgestellt.',
            explanation: 'REST is an architectural style for distributed systems. Its principles include client-server separation, stateless communication, cacheability and a uniform interface. Resources are exposed through their representations.'
        },
        {
            id: 9,
            front: 'REST API',
            back: 'Eine REST API ist eine Schnittstelle, die sich an den Architekturprinzipien von REST orientiert. Ressourcen werden bei HTTP-basierten REST APIs typischerweise über URLs identifiziert und mithilfe standardisierter HTTP-Methoden verarbeitet. Nicht jede HTTP- oder JSON-API erfüllt automatisch alle REST-Prinzipien.',
            explanation: 'A REST API is an interface designed according to REST architectural principles. In HTTP-based REST APIs, resources are typically identified by URLs and manipulated using standard HTTP methods. Not every HTTP or JSON API automatically satisfies all REST principles.',
            example: 'GET /api/tasks/42'
        },
        {
            id: 10,
            front: 'Endpoint',
            back: 'Ein Endpoint bezeichnet einen definierten Zugangspunkt einer API. Bei HTTP APIs wird eine konkrete Operation häufig durch die Kombination aus HTTP-Methode und URL-Pfad bestimmt.',
            explanation: 'An endpoint is a defined access point of an API. In HTTP APIs, a specific operation is commonly determined by the combination of an HTTP method and a URL path.',
            example: 'GET /api/users/5'
        },
        {
            id: 11,
            front: 'GET',
            back: 'GET ist eine HTTP-Methode zum Abrufen einer Repräsentation einer Ressource. Sie soll keine beabsichtigte Änderung des serverseitigen Ressourcenzustands verursachen. GET ist sowohl safe als auch idempotent.',
            explanation: 'GET is an HTTP method used to retrieve a representation of a resource. It should not intentionally modify the server-side resource state. GET is both safe and idempotent.',
            example: 'this.http.get<Task[]>("/api/tasks");'
        },
        {
            id: 12,
            front: 'POST',
            back: 'POST ist eine HTTP-Methode, mit der Daten zur ressourcenspezifischen Verarbeitung an einen Server gesendet werden. Häufig wird sie zum Erstellen neuer Ressourcen verwendet. Wiederholte POST-Anfragen können zusätzliche Ressourcen oder andere Seiteneffekte erzeugen.',
            explanation: 'POST is an HTTP method used to submit data to a server for resource-specific processing. It is commonly used to create new resources. Repeated POST requests may create additional resources or other side effects.',
            example: 'this.http.post("/api/tasks", { title: "Learn Angular" });'
        },
        {
            id: 13,
            front: 'PUT',
            back: 'PUT ist eine HTTP-Methode zum Erstellen oder vollständigen Ersetzen des Zustands einer Ressource an einer bekannten Zieladresse. PUT ist idempotent, da wiederholte identische Anfragen dieselbe beabsichtigte Wirkung auf die Ressource haben sollen.',
            explanation: 'PUT is an HTTP method used to create or completely replace the state of a resource at a known target address. PUT is idempotent because repeated identical requests should have the same intended effect on the resource.',
            example: 'this.http.put("/api/tasks/42", updatedTask);'
        },
        {
            id: 14,
            front: 'PATCH',
            back: 'PATCH ist eine HTTP-Methode zur teilweisen Änderung einer Ressource. Im Gegensatz zu PUT wird normalerweise nicht der gesamte Ressourcenzustand ersetzt. PATCH ist nicht grundsätzlich idempotent, kann jedoch entsprechend implementiert werden.',
            explanation: 'PATCH is an HTTP method used to partially modify a resource. Unlike PUT, it does not normally replace the entire resource state. PATCH is not inherently idempotent but can be implemented that way.',
            example: 'this.http.patch("/api/tasks/42", { title: "Updated title" });'
        },
        {
            id: 15,
            front: 'DELETE',
            back: 'DELETE ist eine HTTP-Methode, mit der die Entfernung der Zuordnung einer Ressource zu ihrer Zieladresse angefordert wird. Sie wird häufig zum Löschen von Datensätzen verwendet. DELETE ist idempotent, auch wenn wiederholte Anfragen unterschiedliche Statuscodes zurückgeben können.',
            explanation: 'DELETE is an HTTP method that requests the removal of the association between a resource and its target address. It is commonly used to delete records. DELETE is idempotent even if repeated requests return different status codes.',
            example: 'this.http.delete("/api/tasks/42");'
        },
        {
            id: 16,
            front: 'HTTP Header',
            back: 'HTTP Header enthalten zusätzliche Informationen zu einer Anfrage oder Antwort. Sie können beispielsweise das Datenformat, Authentifizierungsinformationen, Cache-Regeln oder unterstützte Inhalte beschreiben.',
            explanation: 'HTTP headers contain additional information about a request or response. They can describe data formats, authentication information, caching rules or supported content.',
            example: 'Content-Type: application/json'
        },
        {
            id: 17,
            front: 'Request Body / Response Body',
            back: 'Der Body enthält die eigentlichen Nutzdaten einer HTTP-Nachricht, sofern diese vorhanden sind. Ein Request Body kann beispielsweise Formulardaten enthalten, während ein Response Body angeforderte Datensätze zurückgeben kann.',
            explanation: 'The body contains the actual payload of an HTTP message when present. A request body may contain form data, while a response body may return requested records.',
            example: '{ "id": 42, "title": "Learn Angular" }'
        },
        {
            id: 18,
            front: 'HTTP Status Code',
            back: 'Ein HTTP-Statuscode ist eine dreistellige Zahl, die das Ergebnis einer Anfrage beschreibt. Die Kategorien sind 1xx für Informationen, 2xx für erfolgreiche Verarbeitung, 3xx für Weiterleitungen, 4xx für Clientfehler und 5xx für Serverfehler.',
            explanation: 'An HTTP status code is a three-digit number describing the result of a request. The categories are 1xx for informational responses, 2xx for successful processing, 3xx for redirection, 4xx for client errors and 5xx for server errors.',
            example: '200 OK | 404 Not Found | 500 Internal Server Error'
        },
        {
            id: 19,
            front: 'JSON - JavaScript Object Notation',
            back: 'JSON ist ein textbasiertes, sprachunabhängiges Format zum Austausch strukturierter Daten. Es unterstützt Objekte, Arrays, Strings, Zahlen, Booleans und null. Im Gegensatz zu JavaScript-Objekten erlaubt JSON keine Funktionen, Kommentare oder undefined.',
            explanation: 'JSON is a text-based, language-independent format for exchanging structured data. It supports objects, arrays, strings, numbers, booleans and null. Unlike JavaScript objects, JSON does not support functions, comments or undefined.',
            example: '{ "name": "Mindora", "active": true }'
        },
        {
            id: 20,
            front: 'CRUD - Create Read Update Delete',
            back: 'CRUD bezeichnet die vier grundlegenden Operationen zur Verwaltung von Daten: Erstellen, Lesen, Aktualisieren und Löschen. Bei HTTP APIs werden diese Operationen häufig durch POST, GET, PUT beziehungsweise PATCH und DELETE umgesetzt.',
            explanation: 'CRUD represents the four fundamental operations for managing data: Create, Read, Update and Delete. In HTTP APIs, these operations are commonly implemented using POST, GET, PUT or PATCH, and DELETE.',
            example: 'Create: POST | Read: GET | Update: PUT/PATCH | Delete: DELETE'
        },
        {
            id: 21,
            front: 'Authentication',
            back: 'Authentication bezeichnet die Überprüfung der Identität eines Benutzers oder Systems. Sie stellt fest, wer eine Anfrage ausführt. Typische Verfahren verwenden Passwörter, Sicherheitsschlüssel oder kryptografische Anmeldedaten.',
            explanation: 'Authentication is the process of verifying the identity of a user or system. It determines who is making a request. Common methods use passwords, security keys or cryptographic credentials.'
        },
        {
            id: 22,
            front: 'Authorization',
            back: 'Authorization bezeichnet die Überprüfung, welche Ressourcen oder Aktionen einem Benutzer oder System erlaubt sind. Eine erfolgreiche Authentifizierung bedeutet nicht automatisch, dass sämtliche Zugriffsrechte vorhanden sind. Die Berechtigungsprüfung muss serverseitig durchgesetzt werden.',
            explanation: 'Authorization is the process of determining which resources or actions a user or system is permitted to access. Successful authentication does not automatically grant all access rights. Authorization must be enforced on the server.'
        },
        {
            id: 23,
            front: 'CORS - Cross-Origin Resource Sharing',
            back: 'CORS ist ein Mechanismus, mit dem Server über HTTP Header festlegen können, welchen anderen Origins Browser den Zugriff auf Antworten erlauben. Ein Origin besteht aus Protokoll, Host und Port. CORS ist keine Authentifizierung und ersetzt keine serverseitige Zugriffskontrolle.',
            explanation: 'CORS is a mechanism that allows servers to specify through HTTP headers which other origins browsers may allow to access responses. An origin consists of a scheme, host and port. CORS is not authentication and does not replace server-side access control.',
            example: 'Access-Control-Allow-Origin: https://example.com'
        },
        {
            id: 24,
            front: 'Idempotency',
            back: 'Idempotenz bedeutet, dass mehrere identische Anfragen dieselbe beabsichtigte Wirkung auf den Server haben wie eine einzelne Anfrage. Die Antworten müssen dabei nicht identisch sein. GET, PUT und DELETE sind nach ihrer definierten HTTP-Semantik idempotent, POST und PATCH dagegen nicht grundsätzlich.',
            explanation: 'Idempotency means that multiple identical requests have the same intended effect on the server as a single request. The responses do not need to be identical. GET, PUT and DELETE are idempotent according to their defined HTTP semantics, whereas POST and PATCH are not inherently idempotent.',
            example: 'DELETE /api/tasks/42'
        },
        {
            id: 25,
            front: 'HttpClient',
            back: 'HttpClient ist ein Angular-Service zur Durchführung von HTTP-Anfragen. Er unterstützt verschiedene HTTP-Methoden, typisierte Rückgabewerte, Header und Interceptors. Seine Anfragen liefern RxJS Observables, die bei einer Subscription die Anfrage auslösen. Generische Typangaben führen keine automatische Laufzeitvalidierung der empfangenen Daten durch.',
            explanation: 'HttpClient is an Angular service for performing HTTP requests. It supports different HTTP methods, typed return values, headers and interceptors. Its requests return RxJS observables that initiate the request upon subscription. Generic type annotations do not automatically validate received data at runtime.',
            example: 'http = inject(HttpClient); tasks$ = this.http.get<Task[]>("/api/tasks");'
        }
    ]
};