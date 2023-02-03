// function fun(){
//     console.log('hello');
//  }
// fun('')


// let func = ()=>{
//     console.log('hello');
//  }
//  setTimeout(fun , 3999)







function H(){
    function f1(){
        $('img').css({ 'margin-top':'100px' ,'transition':'1s' , 'margin-left' : '100px'})
        
        
        }
        
        f1()
        
        function f2(){
            $('img').css({ 'margin-top':'200px' ,'transition':'1s' , 'margin-left' : '200px'})
        
        }
        setTimeout(f2 , 700)
        
        
        
        
        function f3(){
            $('img').css({ 'margin-top':'100px' ,'transition':'1s' , 'margin-left' : '300px'})
            
        }
        setTimeout(f3 , 1400)
        
        
        
        
        function f4(){
            $('img').css({ 'margin-top':'200px' ,'transition':'1s' , 'margin-left' : '400px'})
        }
        setTimeout(f4 , 2100)
        
        
        
        
        function f5(){
            $('img').css({ 'margin-top':'100px' ,'transition':'1s' , 'margin-left' : '500px'})
        }
        setTimeout(f5 , 2800)
        
        
        
        
        function f6(){
            $('img').css({ 'margin-top':'200px' ,'transition':'1s' , 'margin-left' : '800px'})
        }
        setTimeout(f6 , 3500)
}
H()
setInterval(H , 5000)






















































