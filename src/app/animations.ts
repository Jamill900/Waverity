import { trigger, transition, query, stagger, style, animate } from "@angular/animations";

export let list = trigger('list', [
    transition(':enter', [
        query('.news-card', [
            stagger(10, [
                style({transform: 'translateY(1000px)', opacity: 0 }),
                animate('1200ms ease-out')
        ], )
        ])
    ])
])