var friendsData = require("../data/friends");

module.exports= function(app){

   app.get("/api/friends",function(req,res){
       
       res.json(friendsData);
   }) 

   app.post("/api/friends",function(req,res){
        
      
       var totalDiff = 0;
       var minScoreDiff = 50;
       var minDiff={
           name:"",
           photo:""
       };
       var reqScore=req.body.scores;

       for(var i=0; i< friendsData.length;i++){
           totalDiff = 0;
           for(var j=0;j<friendsData[i].scores.length;j++){              
              
              totalDiff += Math.abs(friendsData[i].scores[j]-reqScore[j]);
           }
           
           if (totalDiff < minScoreDiff){
               minScoreDiff = totalDiff;
               minDiff.name = friendsData[i].name;
               minDiff.photo = friendsData[i].photo; 
           }
       }
       friendsData.push(req.body); 
              
       res.json({ok: true,
                 name:minDiff.name,
                 photo:minDiff.photo });
   })
}
