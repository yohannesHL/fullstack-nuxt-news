// 'use strict';

// module.exports = function(server) {
//   var ds = server.dataSources.mongodb;
//   var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'news', 'sources'];
//   ds.automigrate(lbTables, function (er) {
//     if (er) throw er;
//     console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
//     ds.disconnect();
//   });
// };
