const assert = require('../src/core/assert/assert.js');
const sqr = require('../src/core/sqr/sqr.js');
var User = require('../src/core/user/user.js');

function main(){
    assert('Pessoa' === 'Pessoa', 'Testing string');

    assert(sqr(3) === 9, 'Testing sqr' );

    var admin = new User('admin', '123456');
    assert(!admin.auth('admi', '123456'), 'Testing invalid credentials auth');

    assert(admin.auth('admin', '123456'), 'Testing credentials auth');
}

main();
