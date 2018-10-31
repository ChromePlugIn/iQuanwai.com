
$(function(){
    console.log('on load');
    console.log( document.body.innerHTML);
    $("#react-app").append('<div id="dg" style="z-index: 9999; position: fixed ! important; right: 0px; top: 0px;"><table width=""100% style="position: absolute; width:260px; right: 0px; top: 0px;"><tr><td><button id="checkButton">答案</button></td></tr></table></div>');

    $("#checkButton").click(function(){
     
        $('div.button').unbind().click(function(){
            console.log('button click');qqqqqqqqq
            $('span.text').css('background','#ffffff');
            ("#checkButton").onclick(); 
        });

        var startId = location.search.indexOf('practicePlanId=');
        var id = location.search.substring(startId+15);
    
        
        //GET https://iquanwai.com/rise/practice/warmup/analysis/priority/3431241 HTTP/1.1
        $.ajax({
            url: '/rise/practice/warmup/analysis/priority/'+id,
            type: 'GET',
            dataType: 'json',
        }).then(function(data){
         //OK
            console.log(data);
            console.log(data.msg);
            $('span.text').css('background','#ffffff');
            data.msg.practice.forEach(element => {
                element.choiceList.forEach(element => {
                    console.log(element.subject + "   " + element.isRight);
                    if(element.isRight)
                    {
                    var rightSpain = $('span.text:contains('+element.subject+')');
                    rightSpain.css('background','green');
                    console.log( $('span.text:contains('+element.subject+')'));
                    }
                });
            });
           
          // console.log(data.msg.practice[0].choiceList[0].subject);
          
        }, function(){

        });
    });
})