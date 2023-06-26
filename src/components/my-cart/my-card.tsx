import {Component, h} from '@stencil/core';

@Component({
    tag: 'my-card',
    styleUrl:'my-card.scss',
    shadow: true
})


export class Mycard {
    render() {
        return (
            <div class="my-card-wrapper"> this is my card component aaaa </div>
        )
    }
}

