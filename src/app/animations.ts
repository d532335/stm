import { trigger, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bouceoutAnimation = animation(
    animate('.75s 0s ease-out', keyframes([
        style({ offset: .2, opacity: 1, transform: 'translate3d(20px, 0, 0)' }),
        style({ offset: 1, opacity: 0, transform: 'translate3d(-2000px, 0, 0)' })
    ]))
);

export let fadeinAnimation = animation([
    style({opacity: 0}),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fadeoutAnimation = animation([
    animate(2000,  style({opacity: 0}))
]);

export let fade = trigger('fade', [

    // state('void', style({opacity: 0})), // defiing state here could be done in the transition
    transition(':enter', [ // enter and leave are alias to void <=> *
       useAnimation(fadeinAnimation)
    ]),
    transition(':leave', [ // enter and leave are alias to void <=> *
        useAnimation(fadeoutAnimation)
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [ // enter is alias to void => *
        style({ transform: 'translateX(-10px)' }),
        animate(1000)
    ]),
    transition(':leave', [ // leave is alias to * => void
        // animate('.75s 0s ease-in', style({ transform: 'translateX(-100%)' }))
        // animate can accept a string insead of number
        // first number in sring is the time, 2nd is the delay before animaiton begins and the thrid is the easing.

        // animate('.75s 0s cubic-bezier(.82,.36,.83,.67)', style({ transform: 'translateX(-100%)' }))
        // for easing you can use a http://cubic-bezier.com to design an easing curve.
        // ease-in is a funcitonfor sarting slow and fiioshnh faster

        // animate('.75s 0s ease-out', keyframes([
        //     style({ offset: .2, opacity: 1, transform: 'translateX(20px)' }),
        //     style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
        // ]))

        useAnimation(bouceoutAnimation)
        // designed from animaate.css

        // animate('.75s 0s ease-out', style({ animation-name: 'bounceOutLeft' }))
        // come back tyo from animate.css

        // animate('.75s 0s ease-in', style({ transform: 'translateX(-100%)' }))
    ])
]);
