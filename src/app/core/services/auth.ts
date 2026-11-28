import { Service } from '@angular/core';

@Service()
export class Auth {

    private lastrequest = 0;
    private pending = false;
    private expirationTimer?: ReturnType<typeof setTimeout>;

    async refreshSession(): Promise<void> {

        if (window.location.hostname !== 'mindora.devcontain.de') {
            return;
        }

        const now = Date.now();

        if (this.pending || now - this.lastrequest < 60000) {
            return;
        }

        this.pending = true;

        try {
            const response = await fetch('/api/session.php', {
                method: 'POST',
                credentials: 'same-origin',
                cache: 'no-store'
            });

            if (response.status === 401) {
                window.location.replace('/');
                return;
            }

            if (!response.ok) {
                return;
            }

            const data = await response.json();

            this.lastrequest = Date.now();

            clearTimeout(this.expirationTimer);

            this.expirationTimer = setTimeout(() => {
                window.location.replace('/');
            }, Math.max(0, data.expires_at * 1000 - Date.now()));

        } catch (error) {
            console.error('Session refresh failed.', error);
        } finally {
            this.pending = false;
        }
    }
}