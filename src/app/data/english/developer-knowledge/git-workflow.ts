import { Topic } from '../../../models/topic-model';

export const gitWorkflow: Topic = {
    id: 48,
    name: 'Git & Development Workflow',
    cards: [
        {
            id: 1,
            front: 'Version Control System (VCS)',
            back: 'Ein Versionsverwaltungssystem dokumentiert Änderungen an Dateien über einen längeren Zeitraum. Es ermöglicht die Wiederherstellung früherer Entwicklungsstände, den Vergleich von Änderungen und die Zusammenarbeit mehrerer Entwickler an einem gemeinsamen Projekt.',
            explanation: 'A version control system records changes to files over time. It enables the restoration of previous development states, comparison of changes and collaboration between multiple developers.',
            example: 'Git, Subversion, Mercurial'
        },
        {
            id: 2,
            front: 'Git',
            back: 'Git ist ein verteiltes Versionsverwaltungssystem. Entwickler besitzen normalerweise eine lokale Kopie des Repositorys einschließlich seiner Versionshistorie. Änderungen können lokal verwaltet und anschließend mit anderen Repositorys synchronisiert werden.',
            explanation: 'Git is a distributed version control system. Developers normally maintain a local copy of the repository, including its version history. Changes can be managed locally and subsequently synchronised with other repositories.',
            example: 'git init'
        },
        {
            id: 3,
            front: 'Repository',
            back: 'Ein Repository ist ein von einem Versionsverwaltungssystem verwalteter Speicherbereich. Es enthält versionierte Projektdateien, die Änderungshistorie und weitere Verwaltungsinformationen. Repositorys können lokal oder auf entfernten Systemen gespeichert werden.',
            explanation: 'A repository is a storage area managed by a version control system. It contains versioned project files, change history and additional management information. Repositories can be stored locally or on remote systems.',
            example: 'git clone https://github.com/example/project.git'
        },
        {
            id: 4,
            front: 'Working Tree',
            back: 'Der Working Tree bezeichnet den aktuell ausgecheckten Dateibestand eines Git-Repositorys. Hier bearbeiten Entwickler ihre Projektdateien. Änderungen im Working Tree sind nicht automatisch Bestandteil eines Commits.',
            explanation: 'The working tree represents the currently checked-out files of a Git repository. Developers modify their project files here. Changes in the working tree are not automatically included in a commit.',
            example: 'git status'
        },
        {
            id: 5,
            front: 'Staging Area',
            back: 'Die Staging Area ist ein Zwischenbereich, in dem Änderungen für den nächsten Commit vorbereitet werden. Entwickler können gezielt auswählen, welche Dateiinhalte Bestandteil des nächsten Commits werden sollen.',
            explanation: 'The staging area is an intermediate area where changes are prepared for the next commit. Developers can selectively determine which file contents should be included in the next commit.',
            example: 'git add src/app/app.ts'
        },
        {
            id: 6,
            front: 'Commit',
            back: 'Ein Commit speichert einen definierten Projektzustand innerhalb der Git-Versionshistorie. Er enthält unter anderem einen Verweis auf den gespeicherten Dateibestand, eine Commit-Nachricht, Autoreninformationen und normalerweise Verweise auf vorherige Commits.',
            explanation: 'A commit records a defined project state within the Git version history. It contains a reference to the stored file snapshot, a commit message, author information and normally references to previous commits.',
            example: 'git commit -m "Implement flashcard navigation"'
        },
        {
            id: 7,
            front: 'Branch',
            back: 'Ein Branch ist ein beweglicher Verweis auf einen Commit. Er ermöglicht die unabhängige Weiterentwicklung verschiedener Projektstände, beispielsweise für neue Funktionen, Fehlerkorrekturen oder Experimente.',
            explanation: 'A branch is a movable reference to a commit. It enables independent development of different project states, such as new features, bug fixes or experiments.',
            example: 'git switch -c feature/flashcards'
        },
        {
            id: 8,
            front: 'HEAD',
            back: 'HEAD bezeichnet in Git normalerweise den aktuell ausgecheckten Branch und verweist dadurch indirekt auf dessen aktuellen Commit. Im Detached-HEAD-Zustand verweist HEAD unmittelbar auf einen Commit, ohne einem Branch zugeordnet zu sein.',
            explanation: 'In Git, HEAD normally identifies the currently checked-out branch and therefore indirectly references its current commit. In a detached HEAD state, HEAD points directly to a commit without being attached to a branch.',
            example: 'git log -1 HEAD'
        },
        {
            id: 9,
            front: 'Remote',
            back: 'Ein Remote ist ein konfigurierter Verweis auf ein anderes Git-Repository. Er ermöglicht den Austausch von Commits und Branch-Informationen zwischen Repositorys. Der Name origin wird häufig für das ursprünglich geklonte Repository verwendet.',
            explanation: 'A remote is a configured reference to another Git repository. It enables the exchange of commits and branch information between repositories. The name origin is commonly used for the originally cloned repository.',
            example: 'git remote -v'
        },
        {
            id: 10,
            front: 'git fetch',
            back: 'Git Fetch lädt neue Git-Objekte und Referenzen aus einem entfernten Repository herunter. Dabei werden normalerweise Remote-Tracking-Branches aktualisiert, ohne den aktuell ausgecheckten Branch oder Working Tree automatisch mit den Änderungen zusammenzuführen.',
            explanation: 'Git fetch downloads new Git objects and references from a remote repository. It normally updates remote-tracking branches without automatically integrating the changes into the currently checked-out branch or working tree.',
            example: 'git fetch origin'
        },
        {
            id: 11,
            front: 'git pull',
            back: 'Git Pull ruft Änderungen aus einem entfernten Repository ab und integriert sie anschließend in den aktuellen Branch. Abhängig von der Konfiguration erfolgt die Integration beispielsweise durch Merge, Rebase oder ausschließlich durch Fast-Forward.',
            explanation: 'Git pull retrieves changes from a remote repository and subsequently integrates them into the current branch. Depending on the configuration, integration may use merge, rebase or fast-forward only.',
            example: 'git pull --ff-only origin main'
        },
        {
            id: 12,
            front: 'git push',
            back: 'Git Push überträgt benötigte lokale Git-Objekte an ein entferntes Repository und fordert die Aktualisierung entsprechender Referenzen an. Dadurch können lokale Commits für andere Entwickler oder automatisierte Build-Prozesse verfügbar gemacht werden.',
            explanation: 'Git push transfers required local Git objects to a remote repository and requests updates to corresponding references. This makes local commits available to other developers or automated build processes.',
            example: 'git push origin main'
        },
        {
            id: 13,
            front: 'Merge',
            back: 'Ein Merge führt unterschiedliche Entwicklungshistorien zusammen. Git versucht, die Änderungen automatisch zu kombinieren. Abhängig von der vorhandenen Historie kann ein Merge Commit entstehen oder eine einfache Fast-Forward-Aktualisierung durchgeführt werden.',
            explanation: 'A merge integrates different development histories. Git attempts to combine their changes automatically. Depending on the existing history, a merge commit may be created or a simple fast-forward update may be performed.',
            example: 'git merge feature/flashcards'
        },
        {
            id: 14,
            front: 'Merge Conflict',
            back: 'Ein Merge Conflict entsteht, wenn Git unterschiedliche Änderungen nicht eindeutig automatisch zusammenführen kann. Entwickler müssen die betroffenen Dateien prüfen, den gewünschten Inhalt festlegen und die Konfliktauflösung anschließend in Git bestätigen.',
            explanation: 'A merge conflict occurs when Git cannot automatically combine different changes unambiguously. Developers must inspect the affected files, determine the intended content and subsequently confirm the conflict resolution in Git.',
            example: 'git status'
        },
        {
            id: 15,
            front: 'Rebase',
            back: 'Rebase überträgt eine Reihe von Commits auf eine neue Ausgangsbasis. Dabei werden die betroffenen Commits normalerweise neu erstellt und erhalten neue Commit-IDs. Bereits gemeinsam verwendete Branches sollten nicht ohne Abstimmung durch Rebase umgeschrieben werden.',
            explanation: 'Rebase reapplies a series of commits onto a new base. The affected commits are normally recreated and receive new commit IDs. Shared branches should not be rewritten through rebase without coordination.',
            example: 'git rebase main'
        },
        {
            id: 16,
            front: 'git revert',
            back: 'Git Revert erzeugt einen neuen Commit, der die Änderungen eines früheren Commits rückgängig macht. Die bestehende Versionshistorie bleibt erhalten. Dadurch eignet sich Revert besonders für die Korrektur bereits veröffentlichter Commits.',
            explanation: 'Git revert creates a new commit that reverses the changes introduced by an earlier commit. The existing version history remains intact, making revert particularly useful for correcting published commits.',
            example: 'git revert <commit-id>'
        },
        {
            id: 17,
            front: 'git reset',
            back: 'Git Reset kann den aktuellen Branch auf einen anderen Commit setzen und abhängig vom gewählten Modus die Staging Area sowie den Working Tree verändern. Insbesondere der Modus hard kann nicht gesicherte lokale Änderungen verwerfen und sollte deshalb mit Vorsicht verwendet werden.',
            explanation: 'Git reset can move the current branch to another commit and modify the staging area and working tree depending on the selected mode. In particular, hard reset can discard unsaved local changes and should therefore be used with caution.',
            example: 'git reset --soft HEAD~1'
        },
        {
            id: 18,
            front: 'Pull Request (PR)',
            back: 'Ein Pull Request ist eine Anfrage zur Übernahme von Änderungen eines Branches in einen anderen Branch. Plattformen wie GitHub ermöglichen dabei die Diskussion, Überprüfung und automatisierte Prüfung der Änderungen vor ihrer Integration. Auf GitLab wird ein vergleichbares Konzept Merge Request genannt.',
            explanation: 'A pull request is a proposal to integrate changes from one branch into another. Platforms such as GitHub allow changes to be discussed, reviewed and automatically checked before integration. GitLab calls a comparable concept a merge request.'
        },
        {
            id: 19,
            front: 'Code Review',
            back: 'Ein Code Review ist die systematische Überprüfung von Quellcode durch andere Entwickler. Ziel ist es, Fehler zu erkennen, Sicherheitsprobleme zu vermeiden, die Wartbarkeit zu verbessern und Wissen innerhalb des Teams auszutauschen. Ein Code Review ersetzt keine automatisierten Tests.',
            explanation: 'A code review is the systematic examination of source code by other developers. Its goals are to identify defects, prevent security issues, improve maintainability and share knowledge within the team. A code review does not replace automated testing.'
        },
        {
            id: 20,
            front: 'Continuous Integration (CI)',
            back: 'Continuous Integration bezeichnet die regelmäßige Integration von Codeänderungen in einen gemeinsamen Entwicklungsstand. Automatisierte Builds, Tests und Qualitätsprüfungen helfen dabei, Integrationsprobleme und Fehler möglichst frühzeitig zu erkennen.',
            explanation: 'Continuous integration is the practice of regularly integrating code changes into a shared development state. Automated builds, tests and quality checks help identify integration problems and defects as early as possible.',
            example: 'Push -> Build -> Test -> Quality Check'
        },
        {
            id: 21,
            front: 'Continuous Delivery',
            back: 'Continuous Delivery bezeichnet einen Entwicklungsprozess, bei dem Softwareänderungen automatisiert geprüft und für eine Veröffentlichung vorbereitet werden. Die Anwendung soll jederzeit veröffentlichungsfähig sein. Die tatsächliche Veröffentlichung in der Produktionsumgebung kann weiterhin eine manuelle Freigabe erfordern.',
            explanation: 'Continuous delivery is a development process in which software changes are automatically checked and prepared for release. The application should remain deployable at all times. Actual deployment to production may still require manual approval.',
            example: 'Build -> Test -> Release Artifact -> Manual Approval'
        },
        {
            id: 22,
            front: 'Continuous Deployment',
            back: 'Continuous Deployment erweitert Continuous Delivery um die automatische Veröffentlichung erfolgreich geprüfter Änderungen in der Produktionsumgebung. Nach bestandenen automatisierten Prüfungen ist keine separate manuelle Freigabe für jede Veröffentlichung erforderlich.',
            explanation: 'Continuous deployment extends continuous delivery by automatically deploying successfully validated changes to the production environment. After automated checks pass, no separate manual approval is required for each deployment.',
            example: 'Build -> Test -> Automatic Production Deployment'
        },
        {
            id: 23,
            front: 'CI/CD Pipeline',
            back: 'Eine CI/CD Pipeline ist eine automatisierte Abfolge von Verarbeitungsschritten innerhalb des Softwareentwicklungsprozesses. Sie kann beispielsweise Abhängigkeiten installieren, Quellcode kompilieren, Tests ausführen, Build-Artefakte erzeugen und Anwendungen veröffentlichen.',
            explanation: 'A CI/CD pipeline is an automated sequence of processing steps within the software development process. It may install dependencies, compile source code, execute tests, generate build artifacts and deploy applications.',
            example: 'npm ci -> ng build -> Automated Tests -> Deployment'
        },
        {
            id: 24,
            front: 'Deployment',
            back: 'Deployment bezeichnet die Bereitstellung einer Anwendung oder einer neuen Anwendungsversion in einer bestimmten Zielumgebung. Dazu können die Übertragung von Build-Artefakten, die Aktualisierung von Containern, Konfigurationsänderungen und anschließende Funktionsprüfungen gehören.',
            explanation: 'Deployment is the process of making an application or a new application version available in a specific target environment. It may include transferring build artifacts, updating containers, modifying configurations and performing subsequent functional checks.',
            example: 'Angular Build -> Nginx Webserver'
        },
        {
            id: 25,
            front: 'Rollback',
            back: 'Ein Rollback bezeichnet die Rückkehr zu einem vorherigen funktionsfähigen Systemzustand, beispielsweise nach einer fehlerhaften Veröffentlichung. Voraussetzung sind geeignete Wiederherstellungsverfahren und verfügbare frühere Versionen. Datenbankänderungen müssen gegebenenfalls gesondert berücksichtigt werden.',
            explanation: 'A rollback is the restoration of a previous functional system state, for example after a faulty deployment. It requires suitable recovery procedures and available previous versions. Database changes may need to be handled separately.',
            example: 'Production Version 1.2 -> Restore Version 1.1'
        }
    ]
};