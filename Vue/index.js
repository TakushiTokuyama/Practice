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
    data: {
        seen: check
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'hello' },
            { text: 'morninge' },
            { text: 'evening' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

// component
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever' }
        ]
    }
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        a: 1
    },
    methods: {
        created: function () {
            alert(this.a);
        },
        increment: function (num) {
            return 1 + num;
        }
    }
});

var example = new Vue({
    el: "#example",
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})


var demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split('')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        isActive: true,
        error: 'fatal'
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});

var app10 = new Vue({
    el: "#app-10",
    data: {
        loginType: 'username'
    },
    methods: {
        changeType: function () {
            this.loginType = this.loginType === 'username' ? 'email' : 'username'
        }
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var v_for_object = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            title: 'title',
            author: 'author'
        }
    }
});

var fil = new Vue({
    el: '#fil',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
});

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('blog-post', {
    props: ['post'],
    template: '<div>'+
                '<h3>{{post.title}}</h3>'+
              '</div>'
});

var fil2 = new Vue({
    el: '#fil2',
    data: {
        sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
});

var blog_post_demo = new Vue({
    el: "#blog_post_demo",
    data: {
        posts: [
            { id: 1, title: 'My journey'},
            { id: 2, title: 'My Vue'}
        ]
    }
});

