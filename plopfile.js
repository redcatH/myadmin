const viewListGenerator = require('./plop-templates/view_list/prompt');
module.exports=function(plop){
    plop.setGenerator('view_list', viewListGenerator);
}