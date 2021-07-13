var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
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