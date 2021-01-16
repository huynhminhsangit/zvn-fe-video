$( document ).ready(function() {

    let arrCourse = [
        {courseName: 'php',playlistId: 'PLv6GftO355AsZFXlWLKob6tMsWZa4VCY1', maxResults: 8, areaFilter: 'php-course' },
        {courseName: 'laravel',playlistId: 'PLv6GftO355Au7i_xN_0OsVZUO54rp9tR6', maxResults: 8, areaFilter: 'laravel-course' },
        {courseName: 'sass',playlistId: 'PLv6GftO355AtWld1EE7SBAH-OkKKt23Bb', maxResults: 8, areaFilter: 'sass-course' },
        {courseName: 'react', playlistId: 'PLv6GftO355AsWv1PaUHRAAf1NB0usIhVD', maxResults: 8, areaFilter: 'react-course'},
    ];
    // funcLoadDataFromYoutubeUrl('PLv6GftO355AsZFXlWLKob6tMsWZa4VCY1', 8, 'php-course');
    // funcLoadDataFromYoutubeUrl('PLv6GftO355Au7i_xN_0OsVZUO54rp9tR6', 8, 'laravel-course');
    // funcLoadDataFromYoutubeUrl('PLv6GftO355AtWld1EE7SBAH-OkKKt23Bb', 8, 'sass-course');
    // funcLoadDataFromYoutubeUrl('PLv6GftO355AsWv1PaUHRAAf1NB0usIhVD', 8, 'react-course');
    funcLoadData(arrCourse);
});

const funcLoadData = (arrData) => {
    let url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet';
    for (const item of arrData) {
        url += '&playlistId='+item.playlistId+'&maxResults='+item.maxResults+'&key=AIzaSyAZw_G7Z2N2Ybqq8k9sOWmNB8Cga9If5IQ';
        $.getJSON( url, function( data) {
            // console.log(data.items);
            let xhtml = ``;
            data.items.forEach(element => {
                // console.log(element.id);
                xhtml += `
                <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                    <div class="card">
                        <div class="card__cover">
                            <img src="`+element.snippet.thumbnails.medium.url+`" alt="">
                            <a href="details.php?courseName=`+item.courseName+`&videoId=`+element.snippet.resourceId.videoId+`" class="card__play">
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
            $('#'+item.areaFilter).html(xhtml);
        });
    }
}

// const funcLoadDataFromYoutubeUrl = (playlistId, maxResults, areaFilter) =>{
//     let url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet';
//     url += '&playlistId='+playlistId+'&maxResults='+maxResults+'&key=AIzaSyAZw_G7Z2N2Ybqq8k9sOWmNB8Cga9If5IQ';
//     $.getJSON( url, function( data) {
//         // console.log(data.items);
//         let xhtml = ``;
//         data.items.forEach(element => {
//             // console.log(element.id);
//             xhtml += `
//             <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
//                 <div class="card">
//                     <div class="card__cover">
//                         <img src="`+element.snippet.thumbnails.medium.url+`" alt="">
//                         <a href="module/frontend/pages/detail/php-course.php" class="card__play">
//                             <i class="icon ion-ios-play"></i>
//                         </a>
//                     </div>
//                     <div class="card__content">
//                         <h3 class="card__title"><a href="#">`+element.snippet.title+`</a></h3>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         $('#'+areaFilter).html(xhtml);
//     });

// }


