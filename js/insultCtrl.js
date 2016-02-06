function InsultCtrl(insultService) 
{
	this.insultService= insultService;
	this.stirShitUp();
}

angular.module('insultApp').controller('InsultCtrl',InsultCtrl);

InsultCtrl.prototype.stirShitUp = function()
{
	this.insult=this.insultService.burnTheFool();
}