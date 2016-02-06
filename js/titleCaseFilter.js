angular.module('insultApp').filter('kappatalize', kappatalize)
function kappatalize()
{
	return function(input)
	{
		var machen = input.split(/[-\s]/);
    
		for(var i =0; i<machen.length; i++)
		{
			machen[i]= machen[i].charAt(0).toUpperCase() +machen[i].substring(1, machen[i].length);
		}
		return machen.join(" ");
	}
}