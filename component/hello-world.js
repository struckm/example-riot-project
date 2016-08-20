riot.tag2('hello-world', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say Hello</button> </form> <h2>Hello {opts.greet}!</h2>', '', '', function(opts) {
        this.sayHello = function() {
            this.greeting = this.greet.value;
        }
});