



// this is the query search 
let querySearch;

// This is the API key for tasteDive 
let apiKey = '374030-findings-GBUPKBEP';


// https://tastedive.com/api/similar?q=rust&info=1&k=374030-findings-GBUPKBEP


$.ajax({
    url: `https://tastedive.com/api/similar?q=${querySearch}&info=1&k=${apiKey}`,
    method: 'GET'
}).then((response) => {












});