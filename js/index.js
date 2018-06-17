'use strict';

var logoNoText = 'https://oddert.github.io/img/logo_no_text.png';
var logoText = 'https://oddert.github.io/img/logo_four.png';

var headerInitHeight, headerShrink;

var windowInitHeight = $(window).height();
$('#header').css({ 'height': windowInitHeight });
$('#page_two').css({ 'margin-top': windowInitHeight + 80 });
headerInitHeight = $("#header").height();
headerShrink = headerInitHeight - 50;
var coordinateActive = false;

$(window).scroll(function () {
  //changeHead();
  var winScroll = $(window).scrollTop();
  var diffirence = headerInitHeight - winScroll;

  if (diffirence <= 50) {
    $("#header").css({ height: 50 });
  } else if (diffirence > 50 && diffirence <= headerInitHeight) {
    $("#header").css({ height: diffirence });
  } else {
    $("#header").css({ height: headerInitHeight });
  }

  if (diffirence <= 50) {
    $('#header_image').css({
      'left': '0',
      'top': '0',
      'transform': 'translateX(0%) translateY(0%) rotate(45deg)'
    });
    $('#header_image').attr('src', logoNoText);
    $('#header_cover').hide();
  } else {
    $('#header_image').css({
      'left': '50%',
      'top': '50%',
      'transform': 'translateX(-50%) translateY(-50%)'
    });
    $('#header_image').attr('src', logoText);
    $('#header_cover').show();
  } //Toggle image to icon

  $('.anim').each(function () {
    var winScroll = $(window).scrollTop();
    var thisOffset = $(this).offset().top;
    if (thisOffset < winScroll + 600) {
      $(this).addClass('anim_active');
    }
  }); //Animate elements into screen

  if ($(window).scrollTop() >= $('#page_profile').offset().top - 400 && coordinateActive === false) {
    cordinate();
    coordinateActive = true;
    //console.log("Scrolled to profile page");
  }
}); //Window scroll

$(window).resize(function () {
  if ($(window).width() >= 764) {
    $('.navDrop-menu').css({ 'display': 'none' });
    $('#navDrop-icon').removeClass('rotate');
  }
}); //Toggle navigation on size

$('.navDrop').on('click', function () {
  $('.navDrop-menu').slideToggle();
  $('#navDrop-icon').toggleClass('rotate');
}); //Toggle the navigation on button click

$('.project').each(function () {
  $(this).addClass('anim');
}); //couldn't be bothered adding manually

$('section').each(function () {
  var winHeight = $(window).height();
  var thisHeight = $(this).find('.content').outerHeight();

  if (thisHeight < winHeight) {
    $(this).css({ 'height': winHeight });
  }
});

setInterval(function () {

  if ($('#blink').hasClass('hide')) {
    $('#blink').removeClass("hide");
  } else {
    $('#blink').addClass("hide");
  }
}, 700);

$('#type').html('');

function updateType(text) {
  $('#type').html(text);
}

function updateTypeTwo(len) {
  var str = "Hello. My name is Robyn and I'm a problem solver.";
  var cut = str.slice(0, len);
  updateType(cut);
}

function cordinate() {
  var track = 0;
  var end = false;
  var interv = setInterval(function () {
    if (Math.floor(Math.random() * 100) > 70) {
      updateTypeTwo(track);
      track++;
    }

    if (track >= 50) {
      clearInterval(interv);
    }
  }, 50);
}

var SocialMediaComp = React.createClass({
  displayName: 'SocialMediaComp',
  getInitialState: function getInitialState() {
    return {
      text: ' '
    };
  },
  defaultText: function defaultText() {
    this.setState({
      text: ' '
    });
  },
  updateLI: function updateLI() {
    this.setState({
      text: 'https://www.linkedin.com/in/robert-veitch-582aa3b6/'
    });
  },
  updateGH: function updateGH() {
    this.setState({
      text: 'https://github.com/Oddert'
    });
  },
  updateFCC: function updateFCC() {
    this.setState({
      text: 'https://www.freecodecamp.com/oddert'
    });
  },
  updateFB: function updateFB() {
    this.setState({
      text: 'https://www.facebook.com/robyn.veitch.10?ref=bookmarks'
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'social_media_box-container' },
      React.createElement(
        'div',
        { className: 'social_media_box' },
        React.createElement(
          'a',
          { href: 'https://www.linkedin.com/in/robert-veitch-582aa3b6/', onMouseEnter: this.updateLI, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-one' },
            React.createElement('i', { className: 'fa fa-linkedin fa-lg' })
          )
        ),
        React.createElement(
          'a',
          { href: 'https://github.com/Oddert', onMouseEnter: this.updateGH, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-two' },
            React.createElement('i', { className: 'fa fa-github fa-lg' })
          )
        ),
        React.createElement(
          'a',
          { href: 'https://www.freecodecamp.com/oddert', onMouseEnter: this.updateFCC, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-three' },
            React.createElement('i', { className: 'fa fa-free-code-camp fa-lg' })
          )
        ),
        React.createElement(
          'a',
          { href: 'https://www.facebook.com/robert.veitch.10?ref=bookmarks', onMouseEnter: this.updateFB, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-four' },
            React.createElement('i', { className: 'fa fa-facebook fa-lg' })
          )
        )
      ),
      React.createElement(
        'p',
        null,
        this.state.text
      )
    );
  }
});

ReactDOM.render(React.createElement(SocialMediaComp, null), document.getElementById('page_profile-social_media_box'));

$('.smooth').smoothScroll();

/*
Hi, my name is Robin Veitch and I’m a problem solver.

        I’m a student studying Product Design at Central Saint Martins, UAL while learning web and app development through Free Code Camp.

        I am and have always been a designer, seeing patterns and connections
        and seeking solutions to problems, knowledge and experiences to be a better person than the day before.

        Problem solving is, in my estimation, the essence of design an elaboration of which can be read <a href='#' class="linkStyle">here</a>.

        I graduated high school in Scotland in 2015 having studied such subjects as Product Design, Graphic Communication, Art, Maths, Physics and English. Since then I have been situated in London studying at UAL: CSM.
        */

/*
eastwood
@oddert
higher marks
sociology
politics
art
cycling
coding
UAL Labour, momentum, advocate
primark
doe
scouts
UAL
research
*/

/* PUSHED TO GITHUB 29/9/17 23:10 */
