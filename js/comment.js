/// <reference path="jquery-1.6.4.min.js" />

function getYTID(e) {
    var url = $(e).val();
    var regex = /^.*((youtu.be\/)|(v\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    try {
        var t = url.split(regex);
        return t[6];
    }
    catch (err) {
        return undefined;
    };
}

function preview() {
    var videoId = getYTID("#comment-post .video-url");
    if (videoId != undefined) {
        var reqUrl = "http://gdata.youtube.com/feeds/api/videos/" + videoId + "?v=2&alt=json-in-script&callback=?";
        $.getJSON(reqUrl, function(data) {

        })
            .success(function(data) {
                var media = data.entry.media$group;
                $("#video-preview-panel .thumbnail").attr("src", media.media$thumbnail[0].url);
                $("#video-preview-panel .title").text(media.media$title.$t);
                $("#video-preview-panel .desc").text(media.media$description.$t);
                $("#video-preview-panel").fadeIn();
                $("#yt-error").fadeOut();
            })
            .error(function() {
                alert("error");
                $("#yt-error").fadeIn();
            });
    }
    else {
        $("#yt-error").fadeIn();
    };
}

$(document).ready(function () {
    $("#comment-post .video-url").live("blur", function () {
        preview();
    });
    $("#comment-list ul.reply textarea, #comment-post textarea, .fb-wall-comment textarea, textarea.fb-wall-status").autoResize()
        .live("focus", function () {
            $(this).parent().find("textarea").filter(function () {
                return $(this).val() == "" || $(this).val() == replyWatermarkText
            }).removeClass("watermark").val("");
        })
        .live("blur", function () {
            $(this).parent().find("textarea").filter(function () {
                return $(this).val() == ""
            }).addClass("watermark").val(replyWatermarkText);
        });

    $("#comment-list ul.reply textarea").live("keypress", function (e) {
        if ((e.keyCode || e.which) == 13) {
            //                var commentId = $(this).parents("ul:first").attr("data-id");
            //                var comment = $(this).val();
            //                var li = $(this).parent();
            //                var id = $(li).attr("id");
            //                if (id == undefined) {
            //                    id = (new Date).getTime();
            //                    $(li).attr("id", id);
            //                }
            //                PageMethods.CommentReply(commentId, comment, id, OnCommentReplyComplete);
            //                return false;
        }
        else {
            if ($(this).val().length >= 1024) {
                return false;
            }
        };
    });

    $("#comment-list ul.reply input").live("click", function (e) {
        var commentId = parseInt($(this).parents("ul:first").attr("data-id"));
        var li = $(this).parent();
        var comment = $(li).find("textarea:last").val();
        var id = $(li).attr("id");
        if (id == undefined) {
            id = (new Date).getTime();
            $(li).attr("id", id);
        }
        PageMethods.CommentReply(commentId, comment, id, function (result) {
            var d = $.parseJSON(result);
            var e = $("#" + d.MediaDesc);
            var commentId = d.ID;
            var output = "";
            output += "<span class='user'>" + d.UserID + "</span><span class='desc'>" + d.Comment + "</span>";
            output += "<div>";
            output += "<span class='date'>" + d.CommentDate + "</span>";
            output += " · <span id='like-" + commentId + "' class='date'>0個Like</span>";
            output += " · <a class='comment-like-button date' data-id='" + commentId + "'>Like</a>";
            output += "</div>";

            $(e).html(output);
            $(e).parent().append("<li><textarea class='watermark'>" + replyWatermarkText + "</textarea><input type='button' value='發表' /></li>");
            $(e).parent().find("textarea").autoResize(); 
        });
        return false;
    });

    $("#comment-list .comment-like-button, #comment-list .comment-unlike-button").live("click", function () {
        var like = $(this).hasClass("comment-like-button");
        var commentId = parseInt($(this).attr("data-id"));
        PageMethods.CommentLike(commentId, like, function (result) {
            if (result > 0) {
                $("#comment-list .comment-like-button[data-id=" + commentId + "]").removeClass("comment-like-button").addClass("comment-unlike-button").text("Unlike");
            } else {
                $("#comment-list .comment-unlike-button[data-id=" + commentId + "]").removeClass("comment-unlike-button").addClass("comment-like-button").text("Like");
            };
            $("#like-" + commentId).text(Math.abs(result) + "個Like");
        });
    });

    $(".fb-wall-comment textarea").live("keypress", function (e) {
        if ((e.keyCode || e.which) == 13) {
            var msg = $(this).val();
            var post = $(this).parent();
            var postId = $(post).attr("id").substring(8);
            var url = '/' + postId + '/comments';
            $(this).attr('disabled', 'disabled');
            FB.api(url, 'post',
                {
                    access_token: accessToken,
                    message: msg
                },
                function (response) {
                    if (!response || response.error) {
                        // error;
                        $(".fb-wall-comment textarea:disabled").removeAttr('disabled');
                    } else {
                        var id = response.id;
                        updateFBComment(id);
                    };
                });
            return false;
        }
        else {
            if ($(this).val().length >= 1024) {
                return false;
            }
        };
    });

    $("textarea.fb-wall-status").live("keypress", function (e) {
        if ((e.keyCode || e.which) == 13) {
            var msg = $(this).val();
            //var post = $(this).parent();
            var postId = $(this).attr("id").substring(10);
            var url = '/' + postId + '/feed';
            $(this).attr('disabled', 'disabled');
            FB.api(url, 'post',
                {
                    access_token: accessToken,
                    message: msg
                },
                function (response) {
                    if (!response || response.error) {
                        // error;
                        alert(response.error);
                        $("textarea.fb-wall-status:disabled").removeAttr('disabled');
                    } else {
                        var id = response.id;
                        updateFBStatus(id);
                    };
                });
            return false;
        }
        else {
            if ($(this).val().length >= 1024) {
                return false;
            }
        };
    });

});

function updateFBComment(id) {
    FB.api(id, function (response) {
        if (!response || response.error) {

        } else {
            output = '';
            output += '<a href="http://www.facebook.com/profile.php?id=' + response.from.id + '" class="fb-wall-comment-avatar" target="_blank">';
            output += '<img src="https://graph.facebook.com/' + response.from.id + '/picture?type=square" />';
            output += '</a>';
            output += '<span class="fb-wall-comment-message">';
            output += '<a class="fb-wall-comment-from-name" href="http://www.facebook.com/profile.php?id=' + response.from.id + '" target="_blank">' + response.from.name + '</a> ';
            output += modText(response.message);
            output += '<span class="fb-wall-comment-from-date">' + formatDate(response.created_time) + '</span>';
            output += '</span>';

            var p = response.id.lastIndexOf("_");
            var postId = response.id.substring(0, p);
            var control = "";
            control += '<span class="fb-wall-comment" id="fb-post-' + postId + '">';
            control += "<textarea class='watermark'>" + replyWatermarkText + "</textarea>";
            control += '</span>';
            $("#fb-post-" + postId).html(output).attr("id", "").parent().append(control);
        };
    });
};

function updateFBStatus(id) {
    FB.api(id, function (response) {
        if (!response || response.error) {

        } else {
            var p = response.id.lastIndexOf("_");
            var postId = response.id.substring(0, p);

            var parent = $("#fb-status-" + postId).parent();

            output = ' ' + modText(response.message);
            $(parent).find(".fb-wall-message").append(output);


            var control = "";

            control += '<span class="fb-wall-date">';
            if (exists(response.icon)) control += '<img class="fb-wall-icon" src="' + response.icon + '" title="' + response.type + '" alt="" />';
            control += formatDate(response.created_time) + '</span>';

            control += '<div class="fb-wall-comments">';
            control += '<span class="fb-wall-comment" id="fb-post-' + response.id + '">';
            control += "<textarea class='watermark'>" + replyWatermarkText + "</textarea>";
            control += '</span>';
            control += '</div>';
            $(parent).find("textarea").remove();
            $(parent).append(control);

            output = addStatus(postId, fbId, fbName);
            $("#fb-comment").prepend(output);
        };
    });
};


function pageLoad(sender, args) {
    $("ul.reply textarea, #comment-post textarea").autoResize();
}
/*
function pageLoad(sender, args) {
$(".comment-item .additional[data-ytid]").each(function(i, e) {
var videoId = $(e).attr("data-ytid")
var reqUrl = "http://gdata.youtube.com/feeds/api/videos/" + videoId + "?v=2&alt=json-in-script&callback=?";
$.getJSON(reqUrl, function(data) {
var media = data.entry.media$group;
//$("#video-preview-panel .thumbnail").attr("src", media.media$thumbnail[0].url);
var desc = media.media$description.$t;
if (desc.length > 100) {
desc = desc.substring(0, 100) + "...";
}
$(e).find(".title").text(media.media$title.$t);
$(e).find(".desc").text(desc);
//$("#video-preview-panel").fadeIn();
});
});
}
*/


/******************************************************************************************************
* Parse dateStr as formatted date
* @return: if dateStr can't be parsed as Date, return dateStr
******************************************************************************************************/

function formatDate(dateStr) {
    var year, month, day, hour, minute, dateUTC, date, ampm, d, time;
    var iso = (dateStr.indexOf(' ') == -1 && dateStr.substr(4, 1) == '-' && dateStr.substr(7, 1) == '-' && dateStr.substr(10, 1) == 'T') ? true : false;

    if (iso) {
        year = dateStr.substr(0, 4);
        month = parseInt((dateStr.substr(5, 1) == '0') ? dateStr.substr(6, 1) : dateStr.substr(5, 2)) - 1;
        day = dateStr.substr(8, 2);
        hour = dateStr.substr(11, 2);
        minute = dateStr.substr(14, 2);
        dateUTC = Date.UTC(year, month, day, hour, minute);
        date = new Date(dateUTC);
    } else {
        d = dateStr.split(' ');
        if (d.length != 6 || d[4] != 'at')
            return dateStr;
        time = d[5].split(':');
        ampm = time[1].substr(2);
        minute = time[1].substr(0, 2);
        hour = parseInt(time[0]);
        if (ampm == 'pm') hour += 12;
        date = new Date(d[1] + ' ' + d[2] + ' ' + d[3] + ' ' + hour + ':' + minute);
        date.setTime(date.getTime() - (1000 * 60 * 60 * 7));
    }
    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    month = date.getMonth() + 1;
    month = (month < 10) ? '0' + month : month;
    hour = date.getHours();
    minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
//    if (o.timeConversion == 12) {
//        ampm = (hour < 12) ? 'am' : 'pm';
//        if (hour == 0) hour == 12;
//        else if (hour > 12) hour = hour - 12;
//        if (hour < 10) hour = '0' + hour;
//        return day + '.' + month + '.' + date.getFullYear() + ' at ' + hour + ':' + minute + ' ' + ampm;
//    }
    return day + '.' + month + '.' + date.getFullYear() + ' at ' + hour + ':' + minute;
}

/******************************************************************************************************
* Helper Function
******************************************************************************************************/

function exists(data) {
    if (!data || data == null || data == 'undefined' || typeof (data) == 'undefined') return false;
    else return true;
}

function modText(text) {
    return nl2br(autoLink(escapeTags(text)));
}

function escapeTags(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function nl2br(str) {
    return str.replace(/(\r\n)|(\n\r)|\r|\n/g, "<br>");
}

function autoLink(str) {
    return str.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">$1</a>');
}