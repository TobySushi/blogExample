var articleThumb = Vue.component('articleThumb', {

    name: 'articleThumb',
    props: {
        article: [],
        iteration: 0
    },

    template: '<div class="articleThumbnail"> <p><b>{{article.title}}</b><br>{{article.date}} by {{article.author}}</p> </div>'
    
});

//create vue instance
var app = new Vue({
    el: "#app",

    data: {
        selectedArticle: 1,
        //articles are stored here for now, but for a larger project they would probably need to be
        //stored within their own seperate files
        articleData:{
            0:{
                "id": 0,
                "title": "Test Article!",
                "date": "10/25/2020",
                "author": "Toby Kind",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            1:{
                "id": 1,
                "title": "Test Article 2!",
                "date": "10/26/2020",
                "author": "Toby Kind",
                "content": "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu commun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu commun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es."
                
            },
            2:{
                "id": 2,
                "title": "article name!!!",
                "date": "10/26/2020",
                "author": "someone else",
                "content": "who would write an article with only one sentence?!"
                
            }

        },
        articleDataArray: [],
        articleContents: {}
    },

    methods: {
        init: function() {
            for(var key in this.articleData){
                this.articleDataArray.push(this.articleData[key])
            }
        },
        changeArticle: function(articleNum){
            this.selectedArticle = articleNum;
        }
    },

    components: {
        articlethumb: articleThumb
    },

    beforeMount(){
        this.init()
    }
});