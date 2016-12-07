/**
* CUSTOM FILTERS
**/
/*Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})

Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end
})

Vue.filter('minusculas', function (value) {
  return strtolower(value)
})

Vue.filter('mayusculas', function (value) {
  return strtoupper(value)
})*/

/**
* VUE MODEL
**/
var ApiDemo = 'https://api.randomuser.me/?results=10';
var VueDemo = new Vue({
    el: '#VueDemo',
    data: {
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat error consequuntur dolorem maxime cupiditate repellendus ea expedita pariatur doloremque quod perferendis illo voluptates dicta rem at, quia ipsam minima temporibus!',
        firstname: '',
        email: 'tony@lopezpagan.com',
        checklist: [],
        toggle: false,
        earnings: '45.00',
        people: []
    },
    created: function() {
        this.GetApiDemo();
    },
    methods: {
        AlertMe: function() {
            alert(this.message);
        },
        GetApiDemo: function() {

            this.$http.get(ApiDemo)
            .then(function(response) {
                this.people = response.data.results

            })
        }
    },
    components: {
        'people': {
            template: '#people-template',
            props: ['list']
        }
    }
})

/**
* READ MODEL FROM CODE
**/
//console.log(VueDemo.$data.email)
