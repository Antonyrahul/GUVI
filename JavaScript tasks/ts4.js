var arr = [10, 20, 30, 40, 50, 60]; 
   
        function sumofArray(sum, num) { 
            return sum + num; 
        } 
         
                  var tot   = arr.reduce(sumofArray); 
        alert(tot); 