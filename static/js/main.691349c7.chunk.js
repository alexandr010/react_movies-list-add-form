(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),s=(i(16),i(11)),r=i(2),c=i(3),l=i(7),o=i(6),m=i(1),d=i.n(m),h=(i(17),i(4)),b=(i(18),i(19),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},u=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.imdbId)}))})},g=i(5),p=(i(21),function(e){Object(l.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleCheck:!1,imgUrlCheck:!1,imdbUrlCheck:!1,imdbIdCheck:!1},e.resetForm=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleCheck:!1,imgUrlCheck:!1,imdbUrlCheck:!1,imdbIdCheck:!1})},e.handleChange=function(t){var i=t.target,a=i.name,n=i.value;e.setState(Object(g.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault();var i=Object(h.a)({},e.state);e.props.onAddMovie(i),e.resetForm()},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(b.jsx)("input",{className:"form-input",required:!0,name:"title",placeholder:"Title",onInvalid:function(){return e.setState((function(e){return{titleCheck:!e.titleCheck}}))},type:"text",value:this.state.title,onChange:this.handleChange}),this.state.titleCheck&&Object(b.jsx)("div",{className:"error-message",children:"Please enter a title"}),Object(b.jsx)("textarea",{className:"form-input",name:"Description",placeholder:"description",cols:10,rows:5,value:this.state.description,onChange:this.handleChange}),Object(b.jsx)("input",{className:"form-input",required:!0,type:"text",name:"mgUrl",placeholder:"ImgUrl",value:this.state.imgUrl,onChange:this.handleChange,onInvalid:function(){return e.setState((function(e){return{imgUrlCheck:!e.imgUrlCheck}}))}}),this.state.imgUrlCheck&&Object(b.jsx)("div",{className:"error-message",children:"Invaid imgUrl"}),Object(b.jsx)("input",{className:"form-input",required:!0,type:"text",name:"imdbUrl",placeholder:"ImdbUrl",value:this.state.imdbUrl,onChange:this.handleChange,onInvalid:function(){return e.setState((function(e){return{imdbUrlCheck:!e.imdbUrlCheck}}))}}),this.state.imdbUrlCheck&&Object(b.jsx)("div",{className:"error-message",children:"Invalid imdbUrl"}),Object(b.jsx)("input",{className:"form-input",required:!0,type:"text",name:"imdbId",placeholder:"ImdbId",value:this.state.imdbId,onChange:this.handleChange,onInvalid:function(){return e.setState((function(e){return{imdbIdCheck:!e.imdbIdCheck}}))}}),this.state.imdbIdCheck&&Object(b.jsx)("div",{className:"error-message",children:"Invalid imdbId"}),Object(b.jsx)("button",{type:"submit",className:"button",children:"Add film"})]})}}]),i}(m.Component)),v=i(10),f=function(e){Object(l.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(u,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(p,{onAddMovie:this.addMovie})})]})}}]),i}(d.a.Component);n.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.691349c7.chunk.js.map