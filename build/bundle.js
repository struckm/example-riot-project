riot.tag2('contact-list', '<h1>Contacts</h1> <ul> <li each="{p in opts.people}">{p.firstName} {p.lastName}</li> </ul>', '', '', function(opts) {
        this.on('mount', function() {
            console.log('Riot mount event fired.');
            opts.callback(this);
        });

        this.on('data_loaded', function(people) {
            opts.people = people;
            this.update();
        });
});
riot.tag2('hello-world', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say Hello</button> </form> <h2>Hello {this.greeting}!</h2>', '', '', function(opts) {
        this.sayHello = function() {
            this.greeting = this.greet.value;
        }
});