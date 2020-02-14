

//Button on click function

$(".searchBtn").on("click",function(e){
    e.preventDefault();
    var search = $(".search").val();
    
    var limit= $(".number").val();
    

    var start = $(".start").val();
   

    var end = $(".end").val();
  

    var urlSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +"&begin_date="+ start +"0101" + "&end_date="+ end + "0101" + "&api-key=GO9MVmPLyYkoem03Y2wiEgLQuDM3iF3Y";

    $.ajax({
        url: urlSearch,
        method:"GET"
        
    }).then(function(response){
        
        //For Loop after button press
        for(i = 0; i<limit; i++){
        // console.log(response);
        var results = response.response.docs[i]
        var title= results.headline.main;
        var link = results.web_url;
        var author= results.byline.original;
        var resultsPage = $(".searchResults");

            // Create new card for Title and author and numbers
            var newCard =$("<div>") ;
            newCard.attr("class", "row");
            //Create new div for numbers
            var numbers = $("<div>")
            //give a class of col-3
            numbers.attr("class", "col-3 numero rounded-circle border border-dark")
                //dynamically create numbers
                numbers.text(i+1)
            //append number div to new card
            newCard.append(numbers);

            //create new div for title and author
            var titleAuthor = $("<div>")
            //give a class of col-9
            titleAuthor.attr("class", "col-9")

            // create new <a> for the title url
            var newLink= $("<a>");
                //dynamically add link href
                newLink.attr("href", link)

            //create new <h4> for the Title 
            var newTitle = $("<h4>")
                //dynamically fill h4 text with title
                newTitle.text(title)

            //create a new <p> for the author
            var newAuthor = $("<p>")
                //dynamically fill p with author
                newAuthor.text(author)

            //append <h4> to <a>
            newLink.append(newTitle);

            //append <a> to 
            titleAuthor.append(newLink);
            //append <p> to card
            titleAuthor.append(newAuthor);

            //appent titleauthor to card
            newCard.append(titleAuthor);

            //Append card to results section
            resultsPage.append(newCard);
        }

    })


});
