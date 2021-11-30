"use strict";
// class => object
// {mark:'male', jade: 'male}
// { chloe:'female', alex:'male', anna:'female'}
class Students {
    constructor() {
        //모든 반에 mark라는 학생이  있다고 가정할때
        this.mark = "male";
    }
}
const a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
//Students { mark: 'male', jade: 'male' }
const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";
console.log(b);
