//Allows 'tab' in text box
$(document).delegate('#essay_text', 'keydown', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        var start = $(this).get(0).selectionStart;
        var end = $(this).get(0).selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        $(this).val($(this).val().substring(0, start) + "\t" + $(this).val().substring(end));

        // put caret at right position again
        $(this).get(0).selectionStart =
        $(this).get(0).selectionEnd = start + 1;
    }
});

//Function for displaying synonyms
function display_synonyms(word) {

    var synonym_array = [];

    jQuery.ajaxSetup({async:false});
    $.get("api/index.php/synonyms2", {word: word}, function(data) {
        var response = JSON.parse(data);
        synonym_array = response[Object.keys(response)[0]]["syn"];
        // var synonym_array = response["synonyms"];
        console.log(word, synonym_array);
    });

    $('#loader').removeClass('active');
    return synonym_array;
}

function remove_stopwords(arr) {

    var stopwords_arr = [];

    jQuery.ajaxSetup({async:false});


    $.get("stopwords.txt", function(text) {
        var response = text.split("\n");
        stopwords_arr = response.slice();
    }, "text")

    arr.forEach(function(word) {
        if ($.inArray(word.toLowerCase(), stopwords_arr) != -1) {
            var index = arr.indexOf(word);
            arr.splice(index, 1);
        }
    });

    return arr;
}

$("#scan").click(function() {

     $('#loader').addClass('active');
     $(".suggestion").html('');

    var text = $("#essay_text").val();
    var sentences_arr = [];

    require(['compromise'], function (sentences) {

        var data_arr = nlp(text).sentences().data();

        data_arr.forEach(function (element) {
            sentences_arr.push(element["text"]);
        });

        // console.log(sentences_arr);

        var words = [];

        var test = sentences_arr[0].split(" ");
        test = test.map((element) => element.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
        console.log(test);
        // test.forEach(function(word) {
        //     var obj = {};
        //     obj[word] = [];
        //     words.push(obj);
        // });
        //
        // // var nouns = nlp(text).nouns();
        // // nouns = nouns.out("array");
        // test2 = remove_stopwords(test);
        //
        // console.log(test2)
        //
        // for(var i in words) {
        //     var word = Object.keys(words[i])[0];
        //     words[i][Object.keys(words[i])[0].toString()] = display_synonyms(word).slice(0);
        // };
        //
        // $(".instruction_section").hide();
        // $(".response_section").removeClass("hidden");
        // $(".selected_sentence").html('"' + sentences_arr + '"');
        //
        // $(".suggestion").append('"');
        // words.forEach(function(element) {
        //     if(typeof element[Object.keys(element)[0]][0] !== 'undefined')
        //         $(".suggestion").append(element[Object.keys(element)[0]][0] + " ");
        //     else
        //     {
        //         // console.log(Object.keys(element)[0]);
        //         $(".suggestion").append(Object.keys(element)[0] + " ");
        //     }
        // });
        // $(".suggestion").append('."');
    });

});
