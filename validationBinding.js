ko.bindingHandlers.validateForm = {
	init:function(element, valueAccessor){
		
		var arg = valueAccessor();
		var argtype = typeof valueAccessor();
		
		$(element).validate({
			invalidHandler:function(){
				if(argtype == 'object')
				{
					if(typeof arg.failnote == 'string')
					{
						site.say({type:'error','note':arg.failnote});
					}
					if(typeof arg.fail == 'function')
					{
						return arg.fail();
					}
				}
				return false;
			}
		});
		
		
		if(argtype == 'object')
		{
			if(arg.rules && typeof arg.rules == 'object')
			{
				for(elem in arg.rules)
				{
					$(elem).rules('add', arg.rules[elem]);
				}
			}
		}
		
		$(element).on('submit',function(){
			
			if($(element).valid())
			{
				if(argtype == 'function')
				{
					return arg();
				}
				else
				{
					if(argtype == 'object')
					{
						if(typeof arg.successnote == 'string')
						{
							site.say({type:'success','note':arg.successnote});
						}
						if(typeof arg.success == 'function')
						{
							return arg.success();
						}
					}
				}
				return true;
			}
			
		});
		
	}
};
