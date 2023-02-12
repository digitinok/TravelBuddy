$(document).ready(function () {
  
  appkey = "pub_1685584ea786012cacd69ff07a39293e82d98";

//search function to get the news based on country
  $("#btnSearch").click(function() {
    let countrycode = $("#search-input").val().trim();
    console.log(countrycode);
    var qryLocationURL = "https://newsdata.io/api/1/news?apikey="+appkey+"&country="+countrycode;
    console.log(qryLocationURL);

    fetch (qryLocationURL)
    .then((response) => response.json())
  .then((data) => {
    console.log(data);
     
    
      if(data.status=="success")
      {
        htmlbn= '<div class="card"style="width:18rem;">';
        htmlbn+='<div class="card-body">';
        htmlbn+= '<h5 class="card-title">Breaking News!</h5>';
        htmlbn+=' </div></div>';
        $('#news-text').append(htmlbn);
     

        for(i=0; i<data.results.length; i++){
          console.log(data.results[i].title);

          htmlStr='<p class="card-text"><a href="';
          htmlStr += data.results[i].link;
          htmlStr+='">';
          htmlStr += data.results[i].title;
          htmlStr += '</a></p>';

          $('#news-text').append(htmlStr);

    
      }
      
      

    }

  }
  
  );

    
  //event.preventDefault();
    
  });


});
