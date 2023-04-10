const ip = '192.168.100.1';
const gateway = '7005';
const pref = 'http://';
const authService = '/sauauth';
const sauService = '/saurestboot';
const apiVersion = '/api/v1';
const authLink = pref+ip+':'+gateway+authService+apiVersion+'/auth/authenticate';
const setRolesLink = pref+ip+':'+gateway+authService+apiVersion+'/auth/set_roles';
const registerLink = pref+ip+':'+gateway+authService+apiVersion+'/auth/register';
const phonesLink = pref+ip+':'+gateway+sauService+apiVersion+'/phones';
const greetLink = pref+ip+':'+gateway+sauService+apiVersion+'/greet';
const devicesLink = pref+ip+':'+gateway+sauService+apiVersion+'/devices';
const parametersLink = pref+ip+':'+gateway+sauService+apiVersion+'/parameters';
const updatesLink = pref+ip+':'+gateway+sauService+apiVersion+'/updates';
const sessionsLink = pref+ip+':'+gateway+sauService+apiVersion+'/sessions';

// const parametersLink = 'http://localhost:58258/api/v1/parameters';
// const updatesLink = 'http://localhost:58258/api/v1/updates';
// const devicesLink = 'http://localhost:58258/api/v1/devices';
// const greetLink = 'http://localhost:58258/api/v1/greet';

