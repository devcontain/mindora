import { readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Topic } from '../src/app/models/topic-model';

const users = [1, 2];

const categories = [
    { name: 'Everyday Life', folder: 'everyday-life', icon: 'coffee.svg' },
    { name: 'Travel', folder: 'travel', icon: 'plane.svg' },
    { name: 'Professional English', folder: 'professional', icon: 'briefcase.svg' },
    { name: 'Technical English', folder: 'technical', icon: 'cpu.svg' },
    { name: 'Language Essentials', folder: 'essentials', icon: 'languages.svg' },
    { name: 'Developer Knowledge', folder: 'developer-knowledge', icon: 'code.svg' }
];

const sql: string[] = ['START TRANSACTION;'];

let topiccount = 0;
let subjectcount = 0;
let cardcount = 0;

function escapeSql(value?: string): string {
    if (value === undefined || value === null) {
        return 'NULL';
    }

    return `CONVERT(X'${Buffer.from(value, 'utf8').toString('hex')}' USING utf8mb4)`;
}

async function generateImport(): Promise<void> {

    for (const userid of users) {

        for (const category of categories) {

            const folder = resolve(
                'src/app/data/english',
                category.folder
            );

            const files = readdirSync(folder)
                .filter(file => file.endsWith('.ts'));

            const subjects: Topic[] = [];

            for (const file of files) {

                const module = await import(
                    pathToFileURL(resolve(folder, file)).href
                );

                for (const value of Object.values(module)) {

                    const subject = value as Topic;

                    if (
                        subject &&
                        typeof subject.id === 'number' &&
                        typeof subject.name === 'string' &&
                        Array.isArray(subject.cards)
                    ) {
                        subjects.push(subject);
                    }
                }
            }

            subjects.sort((a, b) => a.id - b.id);

            sql.push(`
INSERT INTO topics (user_id, name, icon)
VALUES (
    ${userid},
    ${escapeSql(category.name)},
    ${escapeSql('assets/svg/' + category.icon)}
);

SET @topic_id = LAST_INSERT_ID();
`);

            topiccount++;

            for (const subject of subjects) {

                sql.push(`
INSERT INTO subjects (topic_id, name)
VALUES (
    @topic_id,
    ${escapeSql(subject.name)}
);

SET @subject_id = LAST_INSERT_ID();
`);

                subjectcount++;

                for (const card of subject.cards) {

                    sql.push(`
INSERT INTO flashcards (
    subject_id,
    whitecard,
    greencard,
    explanation,
    example
)
VALUES (
    @subject_id,
    ${escapeSql(card.front)},
    ${escapeSql(card.back)},
    ${escapeSql(card.explanation)},
    ${escapeSql(card.example)}
);
`);

                    cardcount++;
                }
            }
        }
    }

    if (
        topiccount !== 12 ||
        subjectcount !== 100 ||
        cardcount !== 2460
    ) {
        throw new Error(
            `Unexpected totals: ${topiccount} topics, ` +
            `${subjectcount} subjects, ${cardcount} flashcards.`
        );
    }

    sql.push('COMMIT;');

    writeFileSync(
        'scripts/mindora-import.sql',
        sql.join('\n'),
        'utf8'
    );

    console.log('SQL import successfully generated.');
    console.log(`Users: ${users.length}`);
    console.log(`Topics: ${topiccount}`);
    console.log(`Subjects: ${subjectcount}`);
    console.log(`Flashcards: ${cardcount}`);
}

generateImport().catch(error => {
    console.error(error);
    process.exitCode = 1;
});