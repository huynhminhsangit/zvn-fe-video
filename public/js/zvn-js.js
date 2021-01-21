$( document ).ready(function() {

    let arrCourse = [
        {courseName: "Lập trình PHP", courseCode: 'php',playlistId: 'PLv6GftO355AsZFXlWLKob6tMsWZa4VCY1', maxResults: 8, areaFilter: 'php-course' },
        {courseName: "Lập trình Laravel", courseCode: 'laravel',playlistId: 'PLv6GftO355Au7i_xN_0OsVZUO54rp9tR6', maxResults: 8, areaFilter: 'laravel-course' },
        {courseName: "Tự học SASS",courseCode: 'sass',playlistId: 'PLv6GftO355AtWld1EE7SBAH-OkKKt23Bb', maxResults: 8, areaFilter: 'sass-course' },
        {courseName:"Lập trình ReactJS",courseCode: 'react', playlistId: 'PLv6GftO355AsWv1PaUHRAAf1NB0usIhVD', maxResults: 8, areaFilter: 'react-course'},
    ];
    funcLoadData(arrCourse);

    getUrlParameter = (sParam) => {
        let sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    let currCourseCodeStr =  getUrlParameter('courseCode');
    // console.log(currCourseCodeStr);
    funcLoadPlayListVideo(currCourseCodeStr, arrCourse);
});

const funcLoadData = (arrData) => {
    let xhtmlParent = ``;
    let url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet';
    for (const item of arrData) {
        url += '&playlistId='+item.playlistId+'&maxResults='+item.maxResults+'&key=AIzaSyAZw_G7Z2N2Ybqq8k9sOWmNB8Cga9If5IQ';
        xhtmlParent += `
        <section class="section section--bg" data-bg="public/img/section/section.jpg" style="background: url(&quot;public/img/section/section.jpg&quot;) center center / cover no-repeat;">
        <div class="container">
            <div class="col-12">
                <h2 class="section__title">`+item.courseName+`</h2>
            </div>
            <div class="row" id="`+item.areaFilter+`">
        `;
        let childContent = ``;
        
        $.getJSON( url, function( data) {
            if(data.items.length === 0){
                childContent += `
                    <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                    <div class="card">
                        <div class="card__cover">
                            <img src="public/img/covers/loading.gif" alt="">
                            <a href="#" class="card__play">
                                <i class="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div class="card__content">
                            <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                            <span class="card__category">
                                <a href="#">Action</a>
                                <a href="#">Triler</a>
                            </span>
                            <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                    <div class="card">
                        <div class="card__cover">
                            <img src="public/img/covers/loading.gif" alt="">
                            <a href="#" class="card__play">
                                <i class="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div class="card__content">
                            <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                            <span class="card__category">
                                <a href="#">Action</a>
                                <a href="#">Triler</a>
                            </span>
                            <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                    <div class="card">
                        <div class="card__cover">
                            <img src="public/img/covers/loading.gif" alt="">
                            <a href="#" class="card__play">
                                <i class="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div class="card__content">
                            <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                            <span class="card__category">
                                <a href="#">Action</a>
                                <a href="#">Triler</a>
                            </span>
                            <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                    <div class="card">
                        <div class="card__cover">
                            <img src="public/img/covers/loading.gif" alt="">
                            <a href="#" class="card__play">
                                <i class="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div class="card__content">
                            <h3 class="card__title"><a href="#">I Dream in Another Language</a></h3>
                            <span class="card__category">
                                <a href="#">Action</a>
                                <a href="#">Triler</a>
                            </span>
                            <span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>
                        </div>
                    </div>
                </div>
                `;
            
            }else{
                // console.log('co du lieu');
                data.items.forEach(element => {
                    childContent += `
                    <div class="col-6 col-sm-4 col-lg-3 col-xl-3">
                        <div class="card">
                            <div class="card__cover">
                                <img src="`+element.snippet.thumbnails.medium.url+`" alt="">
                                <a href="details.php?courseCode=`+item.courseCode+`&videoId=`+element.snippet.resourceId.videoId+`" class="card__play">
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
            }
            $('#'+item.areaFilter).html(childContent);
        });
        
        xhtmlParent += childContent;
        xhtmlParent += `
                </div>
                    <div class="col-12">
                        <a href="details.php?courseCode=`+item.courseCode+`" class="section__btn">Xem thêm</a>
                    </div>
                </div>
            </section>
        </div>
        `;
    }
    $('#all-course').html(xhtmlParent);
}

const funcLoadPlayListVideo = (courseCode, arrData) => {
    let xhtml = ``;
    let url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet';
    const currCourseInfo = arrData.find(item => item.courseCode == courseCode);
    url += '&playlistId='+currCourseInfo.playlistId+'&maxResults=200&key=AIzaSyAZw_G7Z2N2Ybqq8k9sOWmNB8Cga9If5IQ';
    $.getJSON(url, function( data ) {
        data.items.forEach((element, index) => {
            xhtml += `
            <tr>
                <th>${index+1}</th>
                <td data-video="${element.snippet.resourceId.videoId}">${element.snippet.title}
                </td>
            </tr>`;
        });
        $('#playlist-video').html(xhtml);
    });
    $('#my-table').on('click', 'tbody tr td', () =>{
        var id = $(this).attr('data-video');
        console.log(id);
        // console.log(12);
        
    });
}
