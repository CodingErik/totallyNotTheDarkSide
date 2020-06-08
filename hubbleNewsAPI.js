// hubble News API this lets us the latest news  ******* WORK ON THIS
{
    function hubbleAjaxCall(){

        // this is the latest news 
        //http://hubblesite.org/api/v3/news_release/last


        // this is a list of the news 
        // http://hubblesite.org/api/v3/news

        let baseUrl = 'https://hubblesite.org/';


        $.ajax({
            url: 'http://hubblesite.org/api/v3/news_release/last',
            method: 'GET'
        }).then((response)=> {
            console.log(response);




        })


    }


    hubbleAjaxCall();
}