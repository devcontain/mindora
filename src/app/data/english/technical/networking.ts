import { Topic } from '../../../models/topic-model';

export const networking: Topic = {
    id: 26,
    name: 'Networking & Servers',
    cards: [
        { id: 1, front: 'network', back: 'Netzwerk' },
        { id: 2, front: 'server', back: 'Server' },
        { id: 3, front: 'client', back: 'Client' },
        { id: 4, front: 'host', back: 'Netzwerkrechner' },
        { id: 5, front: 'hostname', back: 'Rechnername' },
        { id: 6, front: 'IP address', back: 'IP-Adresse' },
        { id: 7, front: 'subnet mask', back: 'Subnetzmaske' },
        { id: 8, front: 'default gateway', back: 'Standardgateway' },
        { id: 9, front: 'domain name', back: 'Domainname' },
        { id: 10, front: 'name resolution', back: 'Namensauflösung' },
        { id: 11, front: 'network interface', back: 'Netzwerkschnittstelle' },
        { id: 12, front: 'bandwidth', back: 'Bandbreite' },
        { id: 13, front: 'latency', back: 'Latenz / Verzögerung' },
        { id: 14, front: 'packet loss', back: 'Paketverlust' },
        { id: 15, front: 'network protocol', back: 'Netzwerkprotokoll' },
        { id: 16, front: 'port forwarding', back: 'Portweiterleitung' },
        { id: 17, front: 'reverse proxy', back: 'Vorgeschalteter Proxyserver' },
        { id: 18, front: 'load balancing', back: 'Lastverteilung' },
        { id: 19, front: 'virtual machine', back: 'Virtuelle Maschine' },
        { id: 20, front: 'hypervisor', back: 'Virtualisierungssoftware' },
        { id: 21, front: 'container', back: 'Isolierte Anwendungsumgebung' },
        { id: 22, front: 'uptime', back: 'Betriebszeit' },
        { id: 23, front: 'downtime', back: 'Ausfallzeit' },
        { id: 24, front: 'remote access', back: 'Fernzugriff' },
        { id: 25, front: 'system monitoring', back: 'Systemüberwachung' }
    ]
};