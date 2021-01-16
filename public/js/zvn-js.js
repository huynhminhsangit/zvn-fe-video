$( document ).ready(function() {

    funcLoadDataFromYoutubeUrl('PLv6GftO355AsZFXlWLKob6tMsWZa4VCY1', 8, 'php-course');
    funcLoadDataFromYoutubeUrl('PLv6GftO355Au7i_xN_0OsVZUO54rp9tR6', 8, 'laravel-course');
    funcLoadDataFromYoutubeUrl('PLv6GftO355AtWld1EE7SBAH-OkKKt23Bb', 8, 'sass-course');
    funcLoadDataFromYoutubeUrl('PLv6GftO355AsWv1PaUHRAAf1NB0usIhVD', 8, 'react-course');
});

const funcLoadDataFromYoutubeUrl = (playlistId, maxResults, areaFilter) =>{
    let url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet';
    url += '&playlistId='+playlistId+'&maxResults='+maxResults+'&key=AIzaSyAZw_G7Z2N2Ybqq8k9sOWmNB8Cga9If5IQ';
    $.getJSON( url, function( data) {
        console.log(data.items);
        let xhtml = ``;
        data.items.forEach(element => {
            // console.log(element.id);
            xhtml += `
            <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                <div class="card">
                    <div class="card__cover">
                        <img src="`+element.snippet.thumbnails.medium.url+`" alt="">
                        <a href="frontend/pages/detail/index.php" data-toggle="modal" class="card__play">
                            <i class="icon ion-ios-play"></i>
                        </a>
                    </div>
                    <div class="card__content">
                        <h3 class="card__title"><a href="#">`+element.snippet.title+`</a></h3>
                    </div>
                </div>
            </div>
            `;
        });
        $('#'+areaFilter).html(xhtml);
    });

}


