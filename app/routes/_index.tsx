import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { ClientOnly } from 'remix-utils/client-only';
import App from '../app.client';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: 'styles/globals.css',
        }
    ]
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Phaser Remix Template' },
        { name: 'description', content: 'A Phaser 3 Remix project template that demonstrates Remix with React communication and uses Vite for bundling.' },
    ];
};

export default function Index() {
    return (
        <ClientOnly fallback={<h3>Loading Game...</h3>}>
            { () => <App /> }
        </ClientOnly>
    );
}
