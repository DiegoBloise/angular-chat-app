import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-emoji',
  imports: [],
  templateUrl: './random-emoji.component.html',
  styleUrl: './random-emoji.component.css',
})
export class RandomEmojiComponent implements OnInit {
  emoji!: {
    source: {
      srcset: string;
    };
    img: {
      src: string;
      alt: string;
    };
  };

  emojis = [
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif',
        alt: '😀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f603/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f603/512.gif',
        alt: '😃',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.gif',
        alt: '😄',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f601/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f601/512.gif',
        alt: '😁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif',
        alt: '😆',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f605/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f605/512.gif',
        alt: '😅',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.gif',
        alt: '😂',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f923/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f923/512.gif',
        alt: '🤣',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif',
        alt: '😭',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif',
        alt: '😉',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f617/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f617/512.gif',
        alt: '😗',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f619/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f619/512.gif',
        alt: '😙',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61a/512.gif',
        alt: '😚',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f618/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f618/512.gif',
        alt: '😘',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif',
        alt: '🥰',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif',
        alt: '😍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif',
        alt: '🤩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif',
        alt: '🥳',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae0/512.gif',
        alt: '🫠',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f643/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f643/512.gif',
        alt: '🙃',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif',
        alt: '🙂',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f972/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f972/512.gif',
        alt: '🥲',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f979/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f979/512.gif',
        alt: '🥹',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.gif',
        alt: '😊',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.gif',
        alt: '☺',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60c/512.gif',
        alt: '😌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60f/512.gif',
        alt: '😏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f924/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f924/512.gif',
        alt: '🤤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60b/512.gif',
        alt: '😋',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61b/512.gif',
        alt: '😛',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61d/512.gif',
        alt: '😝',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61c/512.gif',
        alt: '😜',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92a/512.gif',
        alt: '🤪',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f974/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f974/512.gif',
        alt: '🥴',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f614/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f614/512.gif',
        alt: '😔',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f97a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f97a/512.gif',
        alt: '🥺',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62c/512.gif',
        alt: '😬',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.gif',
        alt: '😑',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.gif',
        alt: '😐',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f636/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f636/512.gif',
        alt: '😶',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.gif',
        alt: '😶',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae5/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae5/512.gif',
        alt: '🫥',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f910/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f910/512.gif',
        alt: '🤐',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae1/512.gif',
        alt: '🫡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif',
        alt: '🤔',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92b/512.gif',
        alt: '🤫',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae2/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae2/512.gif',
        alt: '🫢',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92d/512.gif',
        alt: '🤭',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f971/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f971/512.gif',
        alt: '🥱',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif',
        alt: '🤗',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae3/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae3/512.gif',
        alt: '🫣',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.gif',
        alt: '😱',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f928/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f928/512.gif',
        alt: '🤨',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d0/512.gif',
        alt: '🧐',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f612/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f612/512.gif',
        alt: '😒',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f644/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f644/512.gif',
        alt: '🙄',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62e_200d_1f4a8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62e_200d_1f4a8/512.gif',
        alt: '😮',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f624/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f624/512.gif',
        alt: '😤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif',
        alt: '😠',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.gif',
        alt: '😡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92c/512.gif',
        alt: '🤬',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.gif',
        alt: '😞',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f613/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f613/512.gif',
        alt: '😓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61f/512.gif',
        alt: '😟',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f625/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f625/512.gif',
        alt: '😥',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.gif',
        alt: '😢',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2639_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2639_fe0f/512.gif',
        alt: '☹',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f641/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f641/512.gif',
        alt: '🙁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae4/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae4/512.gif',
        alt: '🫤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f615/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f615/512.gif',
        alt: '😕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f630/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f630/512.gif',
        alt: '😰',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.gif',
        alt: '😨',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f627/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f627/512.gif',
        alt: '😧',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f626/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f626/512.gif',
        alt: '😦',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62e/512.gif',
        alt: '😮',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.gif',
        alt: '😯',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f632/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f632/512.gif',
        alt: '😲',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f633/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f633/512.gif',
        alt: '😳',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif',
        alt: '🤯',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f616/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f616/512.gif',
        alt: '😖',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f623/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f623/512.gif',
        alt: '😣',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f629/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f629/512.gif',
        alt: '😩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62b/512.gif',
        alt: '😫',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f635/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f635/512.gif',
        alt: '😵',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f635_200d_1f4ab/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f635_200d_1f4ab/512.gif',
        alt: '😵',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae8/512.gif',
        alt: '🫨',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f976/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f976/512.gif',
        alt: '🥶',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f975/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f975/512.gif',
        alt: '🥵',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f922/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f922/512.gif',
        alt: '🤢',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.gif',
        alt: '🤮',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f634/512.gif',
        alt: '😴',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f62a/512.gif',
        alt: '😪',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f927/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f927/512.gif',
        alt: '🤧',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f912/512.gif',
        alt: '🤒',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f915/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f915/512.gif',
        alt: '🤕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f637/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f637/512.gif',
        alt: '😷',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f925/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f925/512.gif',
        alt: '🤥',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f607/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f607/512.gif',
        alt: '😇',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f920/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f920/512.gif',
        alt: '🤠',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f911/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f911/512.gif',
        alt: '🤑',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.gif',
        alt: '🤓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif',
        alt: '😎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f978/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f978/512.gif',
        alt: '🥸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f921/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f921/512.gif',
        alt: '🤡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a9/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a9/512.gif',
        alt: '💩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f608/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f608/512.gif',
        alt: '😈',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f47f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f47f/512.gif',
        alt: '👿',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.gif',
        alt: '👻',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f480/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f480/512.gif',
        alt: '💀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/512.gif',
        alt: '🎃',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif',
        alt: '🤖',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f47d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f47d/512.gif',
        alt: '👽',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31e/512.gif',
        alt: '🌞',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31b/512.gif',
        alt: '🌛',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31c/512.gif',
        alt: '🌜',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/512.gif',
        alt: '😺',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f638/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f638/512.gif',
        alt: '😸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f639/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f639/512.gif',
        alt: '😹',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63b/512.gif',
        alt: '😻',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63c/512.gif',
        alt: '😼',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63d/512.gif',
        alt: '😽',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f640/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f640/512.gif',
        alt: '🙀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63f/512.gif',
        alt: '😿',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f63e/512.gif',
        alt: '😾',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f648/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f648/512.gif',
        alt: '🙈',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f649/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f649/512.gif',
        alt: '🙉',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64a/512.gif',
        alt: '🙊',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.gif',
        alt: '🌟',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif',
        alt: '✨',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.gif',
        alt: '⚡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a5/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a5/512.gif',
        alt: '💥',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif',
        alt: '🔥',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4af/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4af/512.gif',
        alt: '💯',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif',
        alt: '🎉',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.gif',
        alt: '🎊',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif',
        alt: '❤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9e1/512.gif',
        alt: '🧡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49b/512.gif',
        alt: '💛',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.gif',
        alt: '💚',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa75/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa75/512.gif',
        alt: '🩵',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f499/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f499/512.gif',
        alt: '💙',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49c/512.gif',
        alt: '💜',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f90e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f90e/512.gif',
        alt: '🤎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f5a4/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f5a4/512.gif',
        alt: '🖤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa76/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa76/512.gif',
        alt: '🩶',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f90d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f90d/512.gif',
        alt: '🤍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa77/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa77/512.gif',
        alt: '🩷',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f498/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f498/512.gif',
        alt: '💘',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49d/512.gif',
        alt: '💝',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f496/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f496/512.gif',
        alt: '💖',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f497/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f497/512.gif',
        alt: '💗',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f493/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f493/512.gif',
        alt: '💓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49e/512.gif',
        alt: '💞',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f495/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f495/512.gif',
        alt: '💕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f48c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f48c/512.gif',
        alt: '💌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49f/512.gif',
        alt: '💟',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2763_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2763_fe0f/512.gif',
        alt: '❣',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f_200d_1fa79/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f_200d_1fa79/512.gif',
        alt: '❤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f494/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f494/512.gif',
        alt: '💔',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f_200d_1f525/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f_200d_1f525/512.gif',
        alt: '❤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f48b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f48b/512.gif',
        alt: '💋',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f463/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f463/512.gif',
        alt: '👣',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fac0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fac0/512.gif',
        alt: '🫀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa78/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa78/512.gif',
        alt: '🩸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9a0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9a0/512.gif',
        alt: '🦠',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f440/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f440/512.gif',
        alt: '👀',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f441_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f441_fe0f/512.gif',
        alt: '👁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae6/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae6/512.gif',
        alt: '🫦',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9bf/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9bf/512.gif',
        alt: '🦿',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9be/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9be/512.gif',
        alt: '🦾',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.gif',
        alt: '💪',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fb/512.gif',
        alt: '💪',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fc/512.gif',
        alt: '💪',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fd/512.gif',
        alt: '💪',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3fe/512.gif',
        alt: '💪',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa_1f3ff/512.gif',
        alt: '💪',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/512.gif',
        alt: '👏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fb/512.gif',
        alt: '👏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fc/512.gif',
        alt: '👏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fd/512.gif',
        alt: '👏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fe/512.gif',
        alt: '👏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3ff/512.gif',
        alt: '👏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.gif',
        alt: '👍',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fb/512.gif',
        alt: '👍',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fc/512.gif',
        alt: '👍',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fd/512.gif',
        alt: '👍',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fe/512.gif',
        alt: '👍',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3ff/512.gif',
        alt: '👍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e/512.gif',
        alt: '👎',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fb/512.gif',
        alt: '👎',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fc/512.gif',
        alt: '👎',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fd/512.gif',
        alt: '👎',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3fe/512.gif',
        alt: '👎',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e_1f3ff/512.gif',
        alt: '👎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c/512.gif',
        alt: '🙌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fb/512.gif',
        alt: '🙌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fc/512.gif',
        alt: '🙌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fd/512.gif',
        alt: '🙌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3fe/512.gif',
        alt: '🙌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64c_1f3ff/512.gif',
        alt: '🙌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif',
        alt: '👋',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif',
        alt: '👋',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fc/512.gif',
        alt: '👋',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fd/512.gif',
        alt: '👋',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fe/512.gif',
        alt: '👋',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3ff/512.gif',
        alt: '👋',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif',
        alt: '✌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fb/512.gif',
        alt: '✌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fc/512.gif',
        alt: '✌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fd/512.gif',
        alt: '✌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fe/512.gif',
        alt: '✌',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3ff/512.gif',
        alt: '✌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e/512.gif',
        alt: '🤞',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fb/512.gif',
        alt: '🤞',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fc/512.gif',
        alt: '🤞',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fd/512.gif',
        alt: '🤞',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3fe/512.gif',
        alt: '🤞',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f91e_1f3ff/512.gif',
        alt: '🤞',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_fe0f/512.gif',
        alt: '☝',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fb/512.gif',
        alt: '☝',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fc/512.gif',
        alt: '☝',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fd/512.gif',
        alt: '☝',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fe/512.gif',
        alt: '☝',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3ff/512.gif',
        alt: '☝',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.gif',
        alt: '🙏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fb/512.gif',
        alt: '🙏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fc/512.gif',
        alt: '🙏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fd/512.gif',
        alt: '🙏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fe/512.gif',
        alt: '🙏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3ff/512.gif',
        alt: '🙏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483/512.gif',
        alt: '💃',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fb/512.gif',
        alt: '💃',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fc/512.gif',
        alt: '💃',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fd/512.gif',
        alt: '💃',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fe/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fe/512.gif',
        alt: '💃',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3ff/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3ff/512.gif',
        alt: '💃',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f339/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f339/512.gif',
        alt: '🌹',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f940/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f940/512.gif',
        alt: '🥀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f342/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f342/512.gif',
        alt: '🍂',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.gif',
        alt: '🌱',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f343/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f343/512.gif',
        alt: '🍃',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f340/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f340/512.gif',
        alt: '🍀',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.gif',
        alt: '❄',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30b/512.gif',
        alt: '🌋',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f305/512.gif',
        alt: '🌅',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f304/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f304/512.gif',
        alt: '🌄',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.gif',
        alt: '🌈',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae7/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae7/512.gif',
        alt: '🫧',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30a/512.gif',
        alt: '🌊',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f32c_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f32c_fe0f/512.gif',
        alt: '🌬',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f32a_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f32a_fe0f/512.gif',
        alt: '🌪',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.gif',
        alt: '💧',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f327_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f327_fe0f/512.gif',
        alt: '🌧',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f329_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f329_fe0f/512.gif',
        alt: '🌩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.gif',
        alt: '🌍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30e/512.gif',
        alt: '🌎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f30f/512.gif',
        alt: '🌏',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/512.gif',
        alt: '☄',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f42e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f42e/512.gif',
        alt: '🐮',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f984/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f984/512.gif',
        alt: '🦄',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f98e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f98e/512.gif',
        alt: '🦎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f409/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f409/512.gif',
        alt: '🐉',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f996/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f996/512.gif',
        alt: '🦖',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f995/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f995/512.gif',
        alt: '🦕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f422/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f422/512.gif',
        alt: '🐢',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40a/512.gif',
        alt: '🐊',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40d/512.gif',
        alt: '🐍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.gif',
        alt: '🐸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f407/512.gif',
        alt: '🐇',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f400/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f400/512.gif',
        alt: '🐀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f429/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f429/512.gif',
        alt: '🐩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.gif',
        alt: '🐕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9ae/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9ae/512.gif',
        alt: '🦮',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f415_200d_1f9ba/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f415_200d_1f9ba/512.gif',
        alt: '🐕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f416/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f416/512.gif',
        alt: '🐖',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40e/512.gif',
        alt: '🐎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1facf/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1facf/512.gif',
        alt: '🫏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f402/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f402/512.gif',
        alt: '🐂',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f410/512.gif',
        alt: '🐐',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f998/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f998/512.gif',
        alt: '🦘',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f405/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f405/512.gif',
        alt: '🐅',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f412/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f412/512.gif',
        alt: '🐒',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f98d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f98d/512.gif',
        alt: '🦍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9a7/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9a7/512.gif',
        alt: '🦧',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f_fe0f/512.gif',
        alt: '🐿',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9a6/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9a6/512.gif',
        alt: '🦦',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f987/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f987/512.gif',
        alt: '🦇',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f426/512.gif',
        alt: '🐦',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f426_200d_2b1b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f426_200d_2b1b/512.gif',
        alt: '🐦',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f413/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f413/512.gif',
        alt: '🐓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.gif',
        alt: '🐣',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f424/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f424/512.gif',
        alt: '🐤',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f425/512.gif',
        alt: '🐥',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f985/512.gif',
        alt: '🦅',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f54a_fe0f/512.gif',
        alt: '🕊',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fabf/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fabf/512.gif',
        alt: '🪿',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f99a/512.gif',
        alt: '🦚',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9ad/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f9ad/512.gif',
        alt: '🦭',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f988/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f988/512.gif',
        alt: '🦈',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f42c/512.gif',
        alt: '🐬',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f433/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f433/512.gif',
        alt: '🐳',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f421/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f421/512.gif',
        alt: '🐡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f980/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f980/512.gif',
        alt: '🦀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f419/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f419/512.gif',
        alt: '🐙',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fabc/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fabc/512.gif',
        alt: '🪼',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f577_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f577_fe0f/512.gif',
        alt: '🕷',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f40c/512.gif',
        alt: '🐌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41c/512.gif',
        alt: '🐜',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f99f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f99f/512.gif',
        alt: '🦟',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fab3/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fab3/512.gif',
        alt: '🪳',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fab0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fab0/512.gif',
        alt: '🪰',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41d/512.gif',
        alt: '🐝',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41e/512.gif',
        alt: '🐞',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f98b/512.gif',
        alt: '🦋',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f41b/512.gif',
        alt: '🐛',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fab1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fab1/512.gif',
        alt: '🪱',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.gif',
        alt: '🐾',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f345/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f345/512.gif',
        alt: '🍅',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.gif',
        alt: '🍳',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f35d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f35d/512.gif',
        alt: '🍝',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f35c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f35c/512.gif',
        alt: '🍜',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.gif',
        alt: '🍿',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.gif',
        alt: '☕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f37b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f37b/512.gif',
        alt: '🍻',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f942/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f942/512.gif',
        alt: '🥂',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f37e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f37e/512.gif',
        alt: '🍾',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f377/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f377/512.gif',
        alt: '🍷',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f379/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f379/512.gif',
        alt: '🍹',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a7/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a7/512.gif',
        alt: '🚧',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a8/512.gif',
        alt: '🚨',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6b2/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6b2/512.gif',
        alt: '🚲',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6f8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6f8/512.gif',
        alt: '🛸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif',
        alt: '🚀',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6eb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6eb/512.gif',
        alt: '🛫',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ec/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ec/512.gif',
        alt: '🛬',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a2/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3a2/512.gif',
        alt: '🎢',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d5_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d5_fe0f/512.gif',
        alt: '🏕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f388/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f388/512.gif',
        alt: '🎈',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.gif',
        alt: '🎂',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.gif',
        alt: '🎁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f386/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f386/512.gif',
        alt: '🎆',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa85/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa85/512.gif',
        alt: '🪅',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1faa9/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1faa9/512.gif',
        alt: '🪩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26bd/512.gif',
        alt: '⚽',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26be/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26be/512.gif',
        alt: '⚾',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f94e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f94e/512.gif',
        alt: '🥎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3be/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3be/512.gif',
        alt: '🎾',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3f8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3f8/512.gif',
        alt: '🏸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f94d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f94d/512.gif',
        alt: '🥍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3cf/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3cf/512.gif',
        alt: '🏏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d1/512.gif',
        alt: '🏑',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d2/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d2/512.gif',
        alt: '🏒',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.gif',
        alt: '🎯',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f94f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f94f/512.gif',
        alt: '🥏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa83/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa83/512.gif',
        alt: '🪃',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa81/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa81/512.gif',
        alt: '🪁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d3/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3d3/512.gif',
        alt: '🏓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b3/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b3/512.gif',
        alt: '🎳',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b2/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b2/512.gif',
        alt: '🎲',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b0/512.gif',
        alt: '🎰',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f8/512.gif',
        alt: '📸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3bb/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3bb/512.gif',
        alt: '🎻',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f941/512.gif',
        alt: '🥁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa87/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1fa87/512.gif',
        alt: '🪇',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f50b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f50b/512.gif',
        alt: '🔋',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1faab/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1faab/512.gif',
        alt: '🪫',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.gif',
        alt: '💸',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f48e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f48e/512.gif',
        alt: '💎',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2696_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2696_fe0f/512.gif',
        alt: '⚖',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif',
        alt: '💡',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f393/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f393/512.gif',
        alt: '🎓',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2602_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2602_fe0f/512.gif',
        alt: '☂',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif',
        alt: '⚙',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/270f_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/270f_fe0f/512.gif',
        alt: '✏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.gif',
        alt: '⏰',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ce_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ce_fe0f/512.gif',
        alt: '🛎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f514/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f514/512.gif',
        alt: '🔔',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f52e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f52e/512.gif',
        alt: '🔮',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2648/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2648/512.gif',
        alt: '♈',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2649/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2649/512.gif',
        alt: '♉',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264a/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264a/512.gif',
        alt: '♊',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264b/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264b/512.gif',
        alt: '♋',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264c/512.gif',
        alt: '♌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264d/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264d/512.gif',
        alt: '♍',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264e/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264e/512.gif',
        alt: '♎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/264f/512.gif',
        alt: '♏',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2650/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2650/512.gif',
        alt: '♐',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2651/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2651/512.gif',
        alt: '♑',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2652/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2652/512.gif',
        alt: '♒',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2653/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2653/512.gif',
        alt: '♓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26ce/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/26ce/512.gif',
        alt: '⛎',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2757/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2757/512.gif',
        alt: '❗',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2753/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2753/512.gif',
        alt: '❓',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/2049_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2049_fe0f/512.gif',
        alt: '⁉',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/203c_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/203c_fe0f/512.gif',
        alt: '‼',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.gif',
        alt: '❌',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f198/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f198/512.gif',
        alt: '🆘',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f4/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f4/512.gif',
        alt: '📴',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2705/512.gif',
        alt: '✅',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f195/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f195/512.gif',
        alt: '🆕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f193/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f193/512.gif',
        alt: '🆓',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f199/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f199/512.gif',
        alt: '🆙',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f192/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f192/512.gif',
        alt: '🆒',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ae/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6ae/512.gif',
        alt: '🚮',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b6/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b6/512.gif',
        alt: '🎶',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2795/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2795/512.gif',
        alt: '➕',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c1/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c1/512.gif',
        alt: '🏁',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a9/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a9/512.gif',
        alt: '🚩',
      },
    },
    {
      source: {
        srcset: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3f4/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3f4/512.gif',
        alt: '🏴',
      },
    },
    {
      source: {
        srcset:
          'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3f3_fe0f/512.webp',
      },
      img: {
        src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f3f3_fe0f/512.gif',
        alt: '🏳',
      },
    },
  ];

  width = input<number>(42);
  height = input<number>(42);

  ngOnInit(): void {
    this.emoji =
      this.emojis[Math.floor(Math.random() * this.emojis.length) + 1];
  }
}
