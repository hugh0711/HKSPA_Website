/// reference jquery-1.6.4.min.js

var graphURL = "https://graph.facebook.com/";
var profilePicUrl, profileLinkUrl, profileName;
var token;

function loadFBComment(e, id, t) {
    token = t;
    var url = graphURL + id + "?access_token=" + token;
    //$(e).html(url);
    $(e).addClass("fb-wall").attr("style", "display:block;");
    profilePicUrl = graphURL + id + "/picture?type=square";
    loadProfile(url);
    loadPost(e, id, token, "feed");
    //$.getJSON(url, function(data) {

    //});
}

function loadProfile(url) {
    $.getJSON(url, function(data) {
        profileName = data.name;
        profileLinkUrl = data.link;
    });
}

function loadPost(e, id, token, type) {
    var url = graphURL + id + "/" + type +"?access_token=" + token;
    $.getJSON(url, function(data) {
        var div, divHtml;
        $.each(data.data, function(index, item) {
            div = $(document.createElement("div")).addClass("fb-wall-box");
            if (index == 1) {
                $(div).addClass("fb-wall-box-first");
            }
            var id = "fb-" + item.id;
            $(div).attr({ "id": id, "style": "display:none;" });
            divHtml = "";
            switch (item.type) {
                case "question":
                    divHtml = showQuestion(item);
                    break;
                case "photo":
                    divHtml = showPhoto(item);
                    break;
                case "status":

                    break;

            }
            $(div).html(divHtml);
            $(e).append(div);
            $("#" + id).fadeIn();
        });
    });
}

function showPhoto(item) {
    var value ='';
    value += '<a href="' + profileLinkUrl + '" target="_blank"><img class="fb-wall-avatar" src="' + profilePicUrl + '"></a>'
    value += '<div class="fb-wall-data">';
    value += '<span class="fb-wall-message"><a href="' + profileLinkUrl + '" class="fb-wall-message-from" target="_blank">' + item.from.name + '</a> ' + item.message + '</span>';
    value += '<div class="fb-wall-media"><a href="' + item.link + '" class="fb-wall-media-link" target="_blank"><img class="fb-wall-picture" src="' + item.picture + '" /></a> ';
    value += '<div class="fb-wall-media-container"></div>';
    value += '</div>';
    value += '<span class="fb-wall-date"><img class="fb-wall-icon" src="' + item.icon + '" title="question" alt="">' + formatDate(item.created_time) + '</span>';
    value += '</div>';
    value += '<div class="fb-wall-clean"></div>';
    return value;
}

function showPost() {

}

function showReply() {

}

function showQuestion(item) {
    var url = graphURL + item.object_id + "?access_token=" + token;
    var value = '<a href="' + profileLinkUrl + '" target="_blank"><img class="fb-wall-avatar" src="' + profilePicUrl + '"></a>'
    value += '<div class="fb-wall-data">';
    value += '<span class="fb-wall-message"><a href="' + profileLinkUrl + '" class="fb-wall-message-from" target="_blank">' + item.from.name + '</a> asked: ' + '</span>';
    value += '<span class="fb-wall-date"><img class="fb-wall-icon" src="' + item.icon + '" title="question" alt="">' + formatDate(item.created_time) + '</span>';
    value += '</div>';
    value += '<div class="fb-wall-clean"></div>';
    return value;
    $.getJSON(url, function(data) {

    });
}

function formatDate(dateIn) {
    return dateIn;
}
