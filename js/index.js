'use strict';

const logoNoText = 'https://oddert.github.io/img/logo_no_text.png';
const logoText = 'https://oddert.github.io/img/logo_five.png';

let headerInitHeight, headerShrink;
let coordinateActive = false;

const header      = document.getElementById('header')
const headerImage = document.getElementById('header_image')
const headerCover = document.getElementById('header_cover')
const pageTwo     = document.getElementById('page_two')
const pageProfile = document.getElementById('page_profile')
const navButton   = document.querySelector('.navDrop')
const navIcon     = document.getElementById('navDrop-icon')
const navMenu     = document.querySelector('.navDrop-menu')
const dynamicType = document.getElementById('type')

const sections    = document.querySelectorAll('section')

const windowInitHeight = window.innerHeight

header.style.height = windowInitHeight
pageTwo.style.marginTop = windowInitHeight + 80
headerInitHeight = windowInitHeight
headerShrink = headerInitHeight - 50;

function handleScroll () {
  const winScroll = window.scrollY
  const diffirence = headerInitHeight - winScroll;

  if (diffirence <= 50) {
    header.style.height = '50px'
  } else if (diffirence > 50 && diffirence <= headerInitHeight) {
    header.style.height = `${diffirence}px`
  } else {
    header.style.height = `${headerInitHeight}px`
  }

  if (diffirence <= 50) {
    headerImage.style.left = '0'
    headerImage.style.top = '0'
    headerImage.style.transform = 'translateX(0%) translateY(0%) rotate(45deg)'
    headerImage.src = logoNoText
    headerCover.style.display = 'none'
  } else {
    headerImage.style.left = '50%'
    headerImage.style.top = '50%'
    headerImage.style.transform = 'translateX(-50%) translateY(-50%)'
    headerImage.src = logoText
    headerCover.style.display = null
  }

  // $('.anim').each(function () {
  //   var winScroll = $(window).scrollTop();
  //   var thisOffset = $(this).offset().top;
  //   if (thisOffset < winScroll + 600) {
  //     $(this).addClass('anim_active');
  //   }
  // }); //Animate elements into screen

  if (
    winScroll >= pageProfile.offsetTop - 400 &&
    coordinateActive === false
  ) {
    animateProfileText();
    coordinateActive = true;
  }
}

function handleResize () {
  if (window.innerHeight >= 764) {
    navMenu.style.display = 'none'
    navIcon.classList.remove('rotate')
  }
}

window.addEventListener('scroll', debounce(handleScroll, 10, true))
window.addEventListener('resize', handleResize)

navButton.onclick = () => {
  $(navMenu).slideToggle()
  $(navIcon).toggleClass('rotate')
}

// $('.project').each(function () {
//   $(this).addClass('anim')
// })
//
// $('.page_profile-bio').each(function () {
//   $(this).addClass('anim')
// })

sections.forEach(each => {
  const winHeight = window.innerHeight
  const content = each.querySelector('.content')
  if (!content) return
  if (content.clientHeight < winHeight) {
    each.style.height = `${winHeight}px`
  }
})



dynamicType.innerHTML = ''

const updateTypeElem = text => dynamicType.textContent = text

function updateTypeTwo (len) {
  var str = "Hello. My name is Robyn and I'm a problem solver.";
  var cut = str.slice (0, len);
  updateTypeElem (cut);
}

function animateProfileText () {
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
      text: 'https://www.linkedin.com/in/robyn-veitch-582aa3b6/'
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
          { href: 'https://www.linkedin.com/in/robyn-veitch-582aa3b6/', onMouseEnter: this.updateLI, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-one' },
            React.createElement('i', { className: 'fab fa-linkedin fa-lg' })
          )
        ),
        React.createElement(
          'a',
          { href: 'https://github.com/Oddert', onMouseEnter: this.updateGH, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-two' },
            React.createElement('i', { className: 'fab fa-github fa-lg' })
          )
        ),
        React.createElement(
          'a',
          { href: 'https://www.freecodecamp.com/oddert', onMouseEnter: this.updateFCC, onMouseLeave: this.defaultText },
          React.createElement(
            'div',
            { className: 'social-media-item social-media-three' },
            React.createElement('i', { className: 'fab fa-free-code-camp fa-lg' })
          )
        )//,
        // React.createElement(
        //   'a',
        //   { href: 'https://www.facebook.com/robert.veitch.10?ref=bookmarks', onMouseEnter: this.updateFB, onMouseLeave: this.defaultText },
        //   React.createElement(
        //     'div',
        //     { className: 'social-media-item social-media-four' },
        //     React.createElement('i', { className: 'fab fa-facebook fa-lg' })
        //   )
        // )
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

// $('.smooth').smoothScroll();

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

/* PUSHED TO GITHUB 29/9/17 23:10 */ // ??
function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
