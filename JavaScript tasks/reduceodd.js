var arr = [10, 20, 30, 40, 50, 60]; 
   
        function sumofArray(sum, num) { 
			
            return sum + num; 
        } 
		function odd(i)
		{
			return i%2 !=0;
		}
         
                 var tot   = arr.filter(odd);
				 if (tot.length >1)
				 tot = tot.reduce(sumofArray);
			 else
				 tot = 0;
        alert(tot); 