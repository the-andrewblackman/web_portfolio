// ********** set date ************

// set date at the bottom of the page.  so it always updates.
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
//
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle('show-links');

  // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  //when clicked, if container height is 0, then make the linksheight the height of the linksheight of the links.  so you can add more links if you need to.
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");

// select the 'back to top'sticky button
const topLink = document.querySelector(".top-link");

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  // once you scroll past height of navbar, the nav will be fixed on top.
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    // remove the navbar from top.
    navbar.classList.remove("fixed-nav");
  }

  // control sticky button to get back to top
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** EXACT smooth scroll(when clicking navbar, it brings me exactly to topic) ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevents default behaviour on page.  i.e. when clicking links, it won't go to section anymore.
    e.preventDefault();

    // program the navigation to a specific spot by using getAttribute method
    // slice extracts a section of a string without modifying original string
    // slice(1) means start at the index of 1.  so skip the hashtag.
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id); -- just to see what it gives you in the dom
    // target the variable "id".
    const element = document.getElementById(id);

    //calculate the heights of the navbar, it's in the way.
    const navHeight = navbar.getBoundingClientRect().height;
    //can call again since it's inside function.  not global.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    //offsetTop - A Number, representing the top position of the element, in pixels.
    // -- used so it will scroll to correct spot when clicking link
    // this subtracts the height of the navbar at top, and scrolls page accordingly, so the section title sits just below the navbar.
    // offsetTop method, brings up the top of the section.
    let position = element.offsetTop - navHeight;
    // console.log(position) -- just to see what it gives you in the dom

    // if the sticky nav is at the top, figure out the heights for the sections, if it's not there, figure out where the sections are.
    // if fixedNav is false.  if we haven't scrolled past it.
    if (!fixedNav) {
      position = position - navHeight;
    }

    // if you are at bottom, sticky nav at top, and you want to go to top, you need to hide the sticky nav once at top of page.
    // if the nav is open.  it corrects the height of the section.
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      // left: 0,
      // top: 100, -- used as a test.  when links are clicked, they scroll to 100px.
      // or top: position, -- which will get it close, but still not accurate.
      left: 0,
      top: position,
    });
    // this will close the links container(dropdown menu), once a link is clicked.
    linksContainer.style.height = 0;
  });
});

preventDefault();

// ************ Fake Reviews **************

// Reviews array
// const reviews = [
//   {
//     id: 1,
//     name: 'Susan Smith',
//     job: 'Business Owner',
//     img: 'images/user1.jpeg',
//     text:
//       "Lorem ipsum dolor sit, ",
//   },
//   {
//     id: 2,
//     name: 'Anna Johnson',
//     job: 'Truck Driver',
//     img: 'images/user2.jpeg',
//     text:
//       'Lorem ipsum dolor sit, ',
//   },
//   {
//     id: 3,
//     name: 'Peter Jones',
//     job: 'Vintage Store Owner',
//     img: 'images/user3.jpeg',
//     text:
//       'Lorem ipsum dolor sit, ',
//   },
//   {
//     id: 4,
//     name: 'Bill Anderson',
//     job: 'Realtor',
//     img: 'images/user4.jpeg',
//     text:
//       'Lorem ipsum dolor sit,  ',
//   },
// ];

// const img = document.getElementById('person-img');
// const author = document.getElementById('author');
// const job = document.getElementById('job');
// const info = document.getElementById('info');

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// // set starting item

// let currentItem = 0;

// // load intial item
// window.addEventListener('DOMContentLoaded', function () {
//   showPerson();
// });

// // show person based on item

// function showPerson() {
//   const item = reviews[currentItem];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }

// // show next person

// nextBtn.addEventListener('click', function () {
//   currentItem++;
//   if (currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showPerson();
// });

// // show prev person

// prevBtn.addEventListener('click', function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showPerson();
// });

// ************ LinkedIn Link **************

document.getElementById("linked").onclick = function () {
  window.location =
    "https://www.linkedin.com/in/andrew-ronald-blackman-79a79a12b/";
};
