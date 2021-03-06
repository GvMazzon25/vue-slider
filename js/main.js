/*
 * Vue Slider
Descrizione:
Partendo dalla struttura base, allegata sotto, rifare l’esercizio dello slider come fatto insieme in classe.
In allegato con la base con HTML e CSS trovate anche un file con i dati necessari per lo slider.
Bonus
Applicare l’autoplay allo slider: ogni 3 secondi cambia immagine automaticamente.
 */

const app = new Vue({
    el: '#root',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        activeSlide: 0,
    },
    methods: {
        prevSlide() {
            this.activeSlide--;
            if(this.activeSlide < 0){
                this.activeSlide = this.slides.length -1;
            }
        },

        postSlide() {
            this.activeSlide++;
            if(this.activeSlide < 0){
                this.activeSlide = this.slides.length;
            }else if(this.activeSlide == 5){
                this.activeSlide = this.slides.length - 5;
            }
        }
    }
});
