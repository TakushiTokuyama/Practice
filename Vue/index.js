var app = new Vue({
    el: '#app',
    data: {
      message: 1,
    }
  })

  var app2 = new Vue({
      el: '#app-2',
      data: {
          message: new Date().toLocaleString()
      }
  });

var check = true;

  var app3 = new Vue({
      el: '#app-3',
      data:{
          seen: check
      }
  });

  var app4 = new Vue({
    el: '#app-4',
    data:{
        todos:[
            {text: 'hello'},
            {text: 'morninge'},
            {text: 'evening'}
        ]
    }
  });

  var app5 = new Vue({
      el: '#app-5',
      data:{
          message: 'hello'
      },
      methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
      }
  });

  // component
  Vue.component('todo-item', {
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
  })
 
  var app7 = new Vue({
    el: '#app-7',
    data:{
        groceryList: [
            {id:0, text: 'Vegetables'},
            {id:1, text: 'Cheese'},
            {id:2, text: 'Whatever'}
        ]
    }
  });

  var app8 = new Vue({
      el:'#app-8',
      data:{
          a:1
      },
      methods:{
      created:function(){
          alert(this.a);
      },
      increment:function(num){
          return 1 + num;
      }
    }
  });

  var example = new Vue({
    el:"#example",
    data:{
        message:'Hello'
    },
    computed:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
  })


  var demo = new Vue({
      el: '#demo',
      data:{
          firstName:'Foo',
          lastName:'Bar'
      },
      computed:{
          fullName: {
              get:function (){
              return this.firstName + this.lastName
            },
              set:function(newValue){
              var names = newValue.split('')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            } 
        }
      }
  }) 
